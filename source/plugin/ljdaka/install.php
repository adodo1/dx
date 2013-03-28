<?php
/*
	Install Uninstall Upgrade AutoStat System Code
*/
if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}
$table = DB::table('plugin_daka');
//start to put your own code 
$sql = <<<EOF
CREATE TABLE IF NOT EXISTS `$table` (
  `id` int(10) NOT NULL auto_increment,
  `uid` int(10) NOT NULL,
  `timestamp` int(10) NOT NULL,
  `jinbi` int(10) NOT NULL,
  `alldays` int(10) NOT NULL default '0',
  PRIMARY KEY  (`id`)
)
EOF;

runquery($sql);
//finish to put your own code
$finish = TRUE;
?>