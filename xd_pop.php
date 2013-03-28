<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
    define('APPTYPEID', 2);
    define('CURSCRIPT', 'forum');
    require './source/class/class_core.php';
    $discuz = & discuz_core::instance();
    $discuz->init();
    include template('diy:forum/xd_pop');
?>
