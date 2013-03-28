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


if($_GET['mod'] == 'moderator') {

	
	
	if(!$_G['uid']){
		showmessage('请登录后申请版主！', 'forum.php?mod=forumdisplay&fid='.$_GET['fid'], array(), array('handle' => false));
	}
	
	if($_GET['fid']){
		
		
		$fid=$_GET['fid'];
		$sectionname = $_G['forum']['name'];
		$username =  $_G['username'];
		$uid =  $_G['uid'];
		include template('forum/moderator');
		exit();

	}
	if($_POST['submit_id']==0 && !empty($_POST['uid']) && !empty($_POST['bid'])){
		
		
		$sectionname = $_POST['sectionname']; 
		$bid = $_POST['bid']; 
		$username = $_POST['username'];
		$uid = $_POST['uid']; 
		$name = $_POST['name']; 
		$tel = $_POST['tel']; 
		$number = $_POST['number'];
		$birthday = $_POST['birthday']; 
		$gender = $_POST['gender']; 
		$address = $_POST['address']; 
		$psotsum = $_POST['psotsum']; 
		$email = $_POST['email']; 
		$qq = $_POST['qq']; 
		$city = $_POST['city']; 
		$license = $_POST['license']; 
		$car = $_POST['car']; 
		$internettime = $_POST['internettime']; 
		$content = $_POST['content']; 
		
		$time =  date('Y-m-d H:i:s',time());
		objmoderator($sectionname,$bid,$username,$uid,$name,$tel,$number,$birthday,$gender,$address,$psotsum,$email,$qq,$city,$license,$car,$internettime,$content,$time);
		showmessage('版主申请成功，等待审核', 'forum.php?mod=forumdisplay&fid='.$_POST['bid'], array(), array('handle' => false));
	}
	if($_GET['action'] == 'th'){
			    $id=$_GET['id'];
				$sid=$_GET['sid'];
				if($id){
					if($_GET['mname']){
						$mname=$_GET['mname'];
						$squery = DB::query("select * from ".DB::table('forum_forumfield')." where fid=".$sid);
						while($value = DB::fetch($squery)) {
							$moderators = $value['moderators'];
							}
						if($moderators==''){
							
							DB::query("update ".DB::table('forum_forumfield')." set moderators='".$mname."' where fid=".$sid);
							$updatem=DB::query("update ".DB::table('common_admincp_moderator')." set te=1 where id=".$id);
							if($updatem){
									echo "<script>setTimeout('window.history.go(-1)',2000);alert('审核成功！');</script>";
								}else{
									echo "<script>setTimeout('window.history.go(-1)',2000);alert('操作失败！');</script>";
								}
							
						}else{
							$array=array();
							$array = explode("	",$moderators);
							if(in_array($mname,$array)){
									DB::query("update ".DB::table('common_admincp_moderator')." set te=3 where id=".$id);
									echo "<script>setTimeout('window.history.go(-1)',2000);alert('该用户已是本版块的版主！');</script>";	
								}else{
									$pname = $moderators."	".$mname;
									DB::query("update ".DB::table('forum_forumfield')." set moderators='".$pname."' where fid=".$sid);
									DB::query("update ".DB::table('common_admincp_moderator')." set te=1 where id=".$id);
									echo "<script>setTimeout('window.history.go(-1)',2000);alert('审核成功！');</script>";	
								}
							
							}
					}else{
						echo "<script>setTimeout('window.history.go(-1)',2000);alert('用户名不存在！');</script>";
					}
					
					
					
						
				}
	}elseif($_GET['action'] == 'dnp'){
				$id=$_GET['id'];
				if($id){
					$updatem=DB::query("update ".DB::table('common_admincp_moderator')." set te=2 where id=".$id);
					if($updatem){
							echo "<script>setTimeout('window.history.go(-1)',2000);alert('操作成功！');</script>";
						}else{
							echo "<script>setTimeout('window.history.go(-1)',2000);alert('操作失败！');</script>";
						}
				}
	}elseif($_GET['action'] == 'detele'){
			$id=$_GET['id'];
			if($id){
				$deletem=DB::query("delete from  ".DB::table('common_admincp_moderator')." where id=".$id);
			    if($deletem){
						echo "<script>setTimeout('window.history.go(-1)',2000);alert('删除成功！');</script>";
					}else{
						echo "<script>setTimeout('window.history.go(-1)',2000);alert('删除失败！');</script>";
					}
				}
			
			
			
	}elseif($_GET['action'] == 'see'){
			$id=$_GET['id'];
			if($id){
				$seemod=DB::query("select * from  ".DB::table('common_admincp_moderator')." where id=".$id);
			    while($value = DB::fetch($seemod)) {
					
					$sectionname = $value['sectionname']; 
					$bid = $value['bid']; 
					$username = $value['username'];
					$uid = $value['uid']; 
					$name = $value['name']; 
					$tel = $value['tel']; 
					$number = $value['number'];
					$birthday = $value['birthday']; 
					$gender = $value['gender']; 
					$address = $value['address']; 
					$psotsum = $value['psotsum']; 
					$email = $value['email']; 
					$qq = $value['qq']; 
					$city = $value['city']; 
					$license = $value['license']; 
					$car = $value['car']; 
					$internettime = $value['internettime']; 
					$content = $value['content']; 
					$time =  $value['time']; 
					$see = "see";
				}
				
				include template('forum/moderator');
				exit();
			}
			
			
			
	}	
	
}
function objmoderator($sectionname,$bid,$username,$uid,$name,$tel,$number,$birthday,$gender,$address,$psotsum,$email,$qq,$city,$license,$car,$internettime,$content,$time) {
	
	DB::query("INSERT INTO  ".DB::table('common_admincp_moderator')." (sectionname,fid,username,uid,name,tel,number,birthday,gender,address,psotsum,email,qq,city,license,car,internettime,content,time,te) VALUES ('".$sectionname."','".$bid."','".$username."','".$uid."','".$name."','".$tel."','".$number."','".$birthday."','".$gender."','".$address."','".$psotsum."','".$email."','".$qq."','".$city."','".$license."','".$car."','".$internettime."','".$content."','".$time."','0')");
	

}



?>