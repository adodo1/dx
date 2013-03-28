<?php

if(!defined('IN_DISCUZ') || !defined('IN_ADMINCP')) {
	exit('Access Denied');
}

echo "<p style='color:#1193c4;padding-left:15px;font-size:14px;font-weight:bold;padding-bottom:5px'>审核加入板块信息处理</p>";
echo "<table align='center' style='border:1px solid #1193c4; width:950px;line-height:30px;'  border='0' cellspacing='0' cellpadding='0'>";
echo "<tr style='background-color:#CCC;margin:10px;'>";
echo "<td width='60' align='center'>id</td><td width='150' align='center'>用户名</td><td width='200' align='center'>申请加入版块名称</td><td width='250' align='center'>申请时间</td><td width='150' align='center'>审核</td><td width='100' align='center'>操作</td></tr>";
$query = DB::query("select * from  ".DB::table('common_admincp_applyjoin'));
$i=0;
while($type = DB::fetch($query)) {
			if($i%2==0){
					echo "<tr>";
				}else{
					echo "<tr style='background-color:#E8E8E8'>";	
				}
			echo "<td align='center'>".$type['id']."</td>";
			echo "<td align='center'><a href='home.php?mod=space&uid=".$type['uid']."' target='_bank'>".$type['username']."</a></td>";
			echo "<td align='center'><a href='forum.php?mod=forumdisplay&fid=".$type['fid']."' target='_bank'>".$type['sectionname']."</a></td>";
			echo "<td align='center'>".$type['time']."</td>";
			if($type['te']==0){
					echo "<td align='center'><a href='forum.php?mod=applyjoin&action=th&id=".$type['id']."&sid=".$type['fid']."&mname=".$type['username']."'>通过</a>&nbsp;&nbsp;<a href='forum.php?mod=applyjoin&action=dnp&id=".$type['id']."'>不通过</a></td>";
					echo "<td align='center'><a href='forum.php?mod=applyjoin&action=detele&id=".$type['id']."' style='color:#f00'>删除</a></td>";	
				}elseif($type['te']==3){
					echo "<td align='center'>审核失败</td>";
					echo "<td align='center'><a href='forum.php?mod=applyjoin&action=detele&id=".$type['id']."' style='color:#f00'>删除</a></td>";	
				}elseif($type['te']==2){
					echo "<td align='center'>审核不通过</td>";
					echo "<td align='center'><a href='forum.php?mod=applyjoin&action=detele&id=".$type['id']."' style='color:#f00'>删除</a></td>";	
				}elseif($type['te']==1){
					echo "<td align='center' style='color:#06C'>审核已通过</td>";
					echo "<td align='center'><a href='forum.php?mod=forumdisplay&fid=".$type['fid']."' target='_bank' style='color:#06C'>查看</a>&nbsp;&nbsp;<a href='forum.php?mod=applyjoin&action=detele&id=".$type['id']."' style='color:#f00'>删除</a></td>";	
				}
				
			
			echo "</tr>";
			$i=$i+1;
	}

echo "</table>";

?>