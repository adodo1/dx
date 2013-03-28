<?php
	if(!defined('IN_DISCUZ')) {
	exit('Access Deined');
}
class plugin_ljdaka {
	function global_usernav_extra1() {
		global $_G;
		$uid=$_G['uid'];
		$config = $_G['cache']['plugin']['ljdaka'];
		$weizhi=$config['weizhi'];
		$xianshi=$config['xianshi'];
		$sql="select count(*) from ".DB::table('plugin_daka')." where uid=$uid and curdate()=FROM_UNIXTIME(timestamp,'%Y-%m-%d')";
		$check=DB::result_first($sql);
		if($weizhi==1&&$uid){
			if($check&&empty($xianshi)){
				
			}else{
				include template('ljdaka:daka');
			}
			
			return $return;
		}
	}
	function global_cpnav_extra1() {
		global $_G;
		$uid=$_G['uid'];
		$config = $_G['cache']['plugin']['ljdaka'];
		$weizhi=$config['weizhi'];
		$sql="select count(*) from ".DB::table('plugin_daka')." where uid=$uid and curdate()=FROM_UNIXTIME(timestamp,'%Y-%m-%d')";
		$check=DB::result_first($sql);
		if($weizhi==2&&$uid){
			if($check&&empty($xianshi)){
				
			}else{
				include template('ljdaka:daka');
			}
			
			return $return;
		}
	}
	function global_cpnav_extra2() {
		global $_G;
		$uid=$_G['uid'];
		$config = $_G['cache']['plugin']['ljdaka'];
		$weizhi=$config['weizhi'];
		$sql="select count(*) from ".DB::table('plugin_daka')." where uid=$uid and curdate()=FROM_UNIXTIME(timestamp,'%Y-%m-%d')";
		$check=DB::result_first($sql);
		if($weizhi==3&&$uid){
			if($check&&empty($xianshi)){
				
			}else{
				include template('ljdaka:daka');
			}
			
			return $return;
		}
	}
	function global_usernav_extra2() {
		global $_G;
		$uid=$_G['uid'];
		$config = $_G['cache']['plugin']['ljdaka'];
		$weizhi=$config['weizhi'];
		$sql="select count(*) from ".DB::table('plugin_daka')." where uid=$uid and curdate()=FROM_UNIXTIME(timestamp,'%Y-%m-%d')";
		$check=DB::result_first($sql);
		if($weizhi==4&&$uid){
			if($check&&empty($xianshi)){
				
			}else{
				include template('ljdaka:daka');
			}
			
			return $return;
		}
	}
	function global_usernav_extra3() {
		global $_G;
		$uid=$_G['uid'];
		$config = $_G['cache']['plugin']['ljdaka'];
		$weizhi=$config['weizhi'];
		$sql="select count(*) from ".DB::table('plugin_daka')." where uid=$uid and curdate()=FROM_UNIXTIME(timestamp,'%Y-%m-%d')";
		$check=DB::result_first($sql);
		if($weizhi==5&&$uid){
			if($check&&empty($xianshi)){
				
			}else{
				include template('ljdaka:daka');
			}
			
			return $return;
		}
	}
	function global_usernav_extra4() {
		global $_G;
		$uid=$_G['uid'];
		$config = $_G['cache']['plugin']['ljdaka'];
		$weizhi=$config['weizhi'];
		$xianshi=$config['xianshi'];
		$sql="select count(*) from ".DB::table('plugin_daka')." where uid=$uid and curdate()=FROM_UNIXTIME(timestamp,'%Y-%m-%d')";
		$check=DB::result_first($sql);
		//debug(!empty($xianshi));
		//   （开关打开且没有签到过并且uid是否存在）    ||  （开关打开且uid是否存在）
		if(($weizhi==6&&$uid)){
			if($check&&empty($xianshi)){
				
			}else{
				include template('ljdaka:daka');
			}
			return $return;
		}
	}
	}
?>