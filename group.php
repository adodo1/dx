<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: group.php 28091 2012-02-22 07:33:26Z zhengqingpeng $
 */

define('APPTYPEID', 3);
define('CURSCRIPT', 'group');


require './source/class/class_core.php';
$discuz = C::app();

$cachelist = array('grouptype', 'groupindex', 'diytemplatenamegroup');
$discuz->cachelist = $cachelist;
$discuz->init();

$_G['disabledwidthauto'] = 0;

$modarray = array('index', 'my', 'attentiongroup');
$mod = !in_array($_G['mod'], $modarray) ? 'index' : $_G['mod'];

define('CURMODULE', $mod);

runhooks();

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

$navtitle = str_replace('{bbname}', $_G['setting']['bbname'], $_G['setting']['seotitle']['group']);

require DISCUZ_ROOT.'./source/module/group/group_'.$mod.'.php';
?>