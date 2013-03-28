<?php
define('CURSCRIPT', 'test');
require_once './source/class/class_core.php';

$discuz = & discuz_core::instance();
$discuz->init();



if($_POST['mapstart'] && $_POST['mapend']) {
	$mapstart = $_POST['mapstart'];
	$mapend = $_POST['mapend'];
}
$q=0;
$activity = DB::query("select * from ".DB::table('forum_thread')." where special=4 order by dateline desc limit 0,2");
while($value = DB::fetch($activity)) {
	$activitys[$q]['subject'] = $value['subject'];
	$activitys[$q]['fid'] = $value['fid'];
	$activitys[$q]['tid'] = $value['tid'];
	$forumname = DB::query("select * from ".DB::table('forum_forum')." where fid=".$activitys[$q]['fid'].";");
	while($fidvalue = DB::fetch($forumname)) {
		$activitys[$q]['name'] = $fidvalue['name'];
		}
	
	$q=$q+1;
}
include_once template("map/index");

?>