<?php
header('Content-Type: application/x-json');
  error_reporting(0);
$query_string = $_SERVER['QUERY_STRING'];

echo file_get_contents("http://map.baidu.com/su?$query_string");

exit;


?>