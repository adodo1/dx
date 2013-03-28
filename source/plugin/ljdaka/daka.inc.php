<?php
if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
$action = daddslashes($_GET['action']);
if($action=='msg'){
	$uid=$_G['uid'];
	$config = $_G['cache']['plugin']['ljdaka'];
	$dizhi=$config['dizhi'];
	$url=$config['url'];
	$wenzi=$config['wenzi'];
	$checksql=DB::result_first("show tables like '".DB::table('plugin_daka')."'");
	if($checksql){
	$sql="select count(*) from ".DB::table('plugin_daka')." where uid=$uid and curdate()=FROM_UNIXTIME(timestamp,'%Y-%m-%d')";
	$check=DB::result_first($sql);
	if(!$check){
		
		$timestamp=$_G['timestamp'];
		$jljifen=$config['jljifen'];
		$zhouqi=$config['zhouqi'];
		$beishu=$config['beishu'];
		$mytime=$timestamp-86400;
		$mytime=date('Y-m-d',$mytime);
		$sql="select alldays from ".DB::table('plugin_daka')." where uid=$uid and FROM_UNIXTIME(timestamp,'%Y-%m-%d')='".$mytime."'";
		$alldays=DB::result_first($sql);
		if(!$alldays||$alldays==$zhouqi){
			$alldays=0;
		}
		$jljifen1=($alldays+1)*$beishu+$jljifen;
		$creditname = $_G['setting']['extcredits'][$config['leixing']]['title'];
		$jljifen2=$jljifen1.$creditname;
		$leixing='extcredits'.$config['leixing'];
		updatemembercount($uid , array($leixing => $jljifen1));
		$myall=$alldays+1;
		$mall=($myall+1)*$beishu+$jljifen;
		$mall.=$creditname;
		$record=array('uid'=>$uid,'timestamp'=>$timestamp,'jinbi'=>$jljifen1,'alldays'=>$myall);
		DB::insert('plugin_daka',$record);
	}
	}
	include template('ljdaka:msg');
}
?>