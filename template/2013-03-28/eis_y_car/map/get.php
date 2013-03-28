<?php

 $query_string = $_SERVER['QUERY_STRING'];


/**
 *
 * 获取远程内容
 * @param $url 接口url地址
 * @param $timeout 超时时间
 */
function pc_file_get_contents($url, $timeout=30) {
	$stream = stream_context_create(array('http' => array('timeout' => $timeout)));
	return @file_get_contents($url, 0, $stream);
}

echo pc_file_get_contents("http://map.baidu.com/?{$query_string}");


//echo pc_file_get_contents('http://map.baidu.com/?newmap=1&qt=nav&c=332&sn=2$$$$$$%E5%A4%A7%E6%9C%9B%E8%B7%AF$$0$$$$&en=2$$$$$$%E5%A4%A7%E8%83%A1%E5%90%8C$$0$$$$&sc=332&ec=332&rn=5&extinfo=63&tn=B_NORMAL_MAP&ie=utf-8&l=15&b=(13038697.129999999,4714113.59;13047737.129999999,4719177.59)&t=1350307517391');

exit;


?>