<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: forum_ajax.php 29166 2012-03-28 02:37:09Z zhengqingpeng $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
define('NOROBOT', TRUE);



if($_GET['mod'] == 'applyjoin') {
	
	if(!$_G['uid']){
		showmessage('请登录后申请加入！', 'forum.php?mod=forumdisplay&fid='.$_GET['fid'], array(), array('handle' => false));
	}
	if($_GET['fid']){
		$fid=$_GET['fid'];
		$sectionname = $_G['forum']['name'];
		$username =  $_G['username'];
		$uid =  $_G['uid'];
		$time =  date('Y-m-d H:i:s',time());
		objapplyjoin($fid,$sectionname,$username,$time,$uid);
		showmessage('申请加入成功，等待审核', 'forum.php?mod=forumdisplay&fid='.$_GET['fid'], array(), array('handle' => false));
	}
	if($_GET['action'] == 'th'){
			    $id=$_GET['id'];
				$sid=$_GET['sid'];
				if($id){
					if($_GET['mname']){
						$mname=$_GET['mname'];
						/*$squery = DB::query("select * from ".DB::table('forum_forumfield')." where fid=".$sid);
						while($value = DB::fetch($squery)) {
							$moderators = $value['moderators'];
							}*/
						
							
							//DB::query("update ".DB::table('forum_forumfield')." set moderators='".$mname."' where fid=".$sid);
							$updatem=DB::query("update ".DB::table('common_admincp_applyjoin')." set te=1 where id=".$id);
							if($updatem){
									echo "<script>setTimeout('window.history.go(-1)',2000);alert('审核成功！');</script>";
								}else{
									echo "<script>setTimeout('window.history.go(-1)',2000);alert('操作失败！');</script>";
								}
					
					}else{
						echo "<script>setTimeout('window.history.go(-1)',2000);alert('用户名不存在！');</script>";
					}
					
					
					
						
				}
	}
	if($_GET['action'] == 'dnp'){
				$id=$_GET['id'];
				if($id){
					$updatem=DB::query("update ".DB::table('common_admincp_applyjoin')." set te=2 where id=".$id);
					if($updatem){
							echo "<script>setTimeout('window.history.go(-1)',2000);alert('操作成功！');</script>";
						}else{
							echo "<script>setTimeout('window.history.go(-1)',2000);alert('操作失败！');</script>";
						}
				}
	}
	if($_GET['action'] == 'detele'){
			$id=$_GET['id'];
			if($id){
				$deletem=DB::query("delete from  ".DB::table('common_admincp_applyjoin')." where id=".$id);
			    if($deletem){
						echo "<script>setTimeout('window.history.go(-1)',2000);alert('删除成功！');</script>";
					}else{
						echo "<script>setTimeout('window.history.go(-1)',2000);alert('删除失败！');</script>";
					}
				}
			
	}	
	
}
function objapplyjoin($fid,$sectionname,$username,$time,$uid) {
	
	DB::query("INSERT INTO  ".DB::table('common_admincp_applyjoin')." (fid,username,sectionname,time,te,uid,integral) VALUES ('".$fid."','".$username."','".$sectionname."','".$time."','0','".$uid."','0')");
	
}

?>