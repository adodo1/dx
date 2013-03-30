<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); hookscriptoutput('viewthread');
0
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/eis_y_car/common/header.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/eis_y_car/forum/viewthread_node.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/eis_y_car/forum/viewthread_fastpost.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/eis_y_car/common/footer.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/default/common/header_common.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/eis_y_car/common/pubsearchform.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/eis_y_car/forum/viewthread_node_body.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/default/common/seditor.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
|| checktplrefresh('./template/eis_y_car/forum/viewthread.htm', './template/default/common/seccheck.htm', 1364658760, 'diy', './data/template/3_diy_forum_viewthread.tpl.php', './template/eis_y_car', 'forum/viewthread')
;?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php echo CHARSET;?>" />
<?php if($_G['config']['output']['iecompatible']) { ?><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE<?php echo $_G['config']['output']['iecompatible'];?>" /><?php } ?>
<title><?php if(!empty($navtitle)) { ?><?php echo $navtitle;?> - <?php } if(empty($nobbname)) { ?> <?php echo $_G['setting']['bbname'];?> - <?php } ?> Powered by xcheying</title>
<?php echo $_G['setting']['seohead'];?>

<meta name="keywords" content="<?php if(!empty($metakeywords)) { echo dhtmlspecialchars($metakeywords); } ?>" />
<meta name="description" content="<?php if(!empty($metadescription)) { echo dhtmlspecialchars($metadescription); ?> <?php } if(empty($nobbname)) { ?>,<?php echo $_G['setting']['bbname'];?><?php } ?>" />
<meta name="generator" content="Discuz! <?php echo $_G['setting']['version'];?>" />
<meta name="author" content="Discuz! Team and Comsenz UI Team" />
<meta name="copyright" content="2001-2012 Comsenz Inc." />
<meta name="MSSmartTagsPreventParsing" content="True" />
<meta http-equiv="MSThemeCompatible" content="Yes" />
<base href="<?php echo $_G['siteurl'];?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_common.css?<?php echo VERHASH;?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_forum_viewthread.css?<?php echo VERHASH;?>" /><?php if($_G['uid'] && isset($_G['cookie']['extstyle']) && strpos($_G['cookie']['extstyle'], TPLDIR) !== false) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['cookie']['extstyle'];?>/style.css" /><?php } elseif($_G['style']['defaultextstyle']) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['style']['defaultextstyle'];?>/style.css" /><?php } ?><script type="text/javascript">var STYLEID = '<?php echo STYLEID;?>', STATICURL = '<?php echo STATICURL;?>', IMGDIR = '<?php echo IMGDIR;?>', VERHASH = '<?php echo VERHASH;?>', charset = '<?php echo CHARSET;?>', discuz_uid = '<?php echo $_G['uid'];?>', cookiepre = '<?php echo $_G['config']['cookie']['cookiepre'];?>', cookiedomain = '<?php echo $_G['config']['cookie']['cookiedomain'];?>', cookiepath = '<?php echo $_G['config']['cookie']['cookiepath'];?>', showusercard = '<?php echo $_G['setting']['showusercard'];?>', attackevasive = '<?php echo $_G['config']['security']['attackevasive'];?>', disallowfloat = '<?php echo $_G['setting']['disallowfloat'];?>', creditnotice = '<?php if($_G['setting']['creditnotice']) { ?><?php echo $_G['setting']['creditnames'];?><?php } ?>', defaultstyle = '<?php echo $_G['style']['defaultextstyle'];?>', REPORTURL = '<?php echo $_G['currenturl_encode'];?>', SITEURL = '<?php echo $_G['siteurl'];?>', JSPATH = '<?php echo $_G['setting']['jspath'];?>';</script>
<script src="<?php echo $_G['setting']['jspath'];?>common.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php if(empty($_GET['diy'])) { ?><?php $_GET['diy'] = '';?><?php } if(!isset($topic)) { ?><?php $topic = array();?><?php } ?>
    <meta name="application-name" content="<?php echo $_G['setting']['bbname'];?>" />
    <meta name="msapplication-tooltip" content="<?php echo $_G['setting']['bbname'];?>" />
    <?php if($_G['setting']['portalstatus']) { ?><meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['1']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['portal']) ? 'http://'.$_G['setting']['domain']['app']['portal'] : $_G['siteurl'].'portal.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/portal.ico" /><?php } ?>
    <meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['2']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['forum']) ? 'http://'.$_G['setting']['domain']['app']['forum'] : $_G['siteurl'].'forum.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/bbs.ico" />
    <?php if($_G['setting']['groupstatus']) { ?><meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['3']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['group']) ? 'http://'.$_G['setting']['domain']['app']['group'] : $_G['siteurl'].'group.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/group.ico" /><?php } ?>
    <?php if(helper_access::check_module('feed')) { ?><meta name="msapplication-task" content="name=<?php echo $_G['setting']['navs']['4']['navname'];?>;action-uri=<?php echo !empty($_G['setting']['domain']['app']['home']) ? 'http://'.$_G['setting']['domain']['app']['home'] : $_G['siteurl'].'home.php'; ?>;icon-uri=<?php echo $_G['siteurl'];?><?php echo IMGDIR;?>/home.ico" /><?php } ?>
    <?php if($_G['basescript'] == 'forum' && $_G['setting']['archiver']) { ?>
        <link rel="archives" title="<?php echo $_G['setting']['bbname'];?>" href="<?php echo $_G['siteurl'];?>archiver/" />
    <?php } ?>
    <?php if(!empty($rsshead)) { ?><?php echo $rsshead;?><?php } ?>
    <?php if(widthauto()) { ?>
        <link rel="stylesheet" id="css_widthauto" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_widthauto.css?<?php echo VERHASH;?>" />
        <script type="text/javascript">HTMLNODE.className += ' widthauto'</script>
    <?php } ?>
    <?php if($_G['basescript'] == 'forum' || $_G['basescript'] == 'group') { ?>
        <script src="<?php echo $_G['setting']['jspath'];?>forum.js?<?php echo VERHASH;?>" type="text/javascript"></script>
    <?php } elseif($_G['basescript'] == 'home' || $_G['basescript'] == 'userapp') { ?>
        <script src="<?php echo $_G['setting']['jspath'];?>home.js?<?php echo VERHASH;?>" type="text/javascript"></script>
    <?php } elseif($_G['basescript'] == 'portal') { ?>
        <script src="<?php echo $_G['setting']['jspath'];?>portal.js?<?php echo VERHASH;?>" type="text/javascript"></script>
    <?php } ?>
    <?php if($_G['basescript'] != 'portal' && $_GET['diy'] == 'yes' && check_diy_perm($topic)) { ?>
        <script src="<?php echo $_G['setting']['jspath'];?>portal.js?<?php echo VERHASH;?>" type="text/javascript"></script>
    <?php } ?>
    <?php if($_GET['diy'] == 'yes' && check_diy_perm($topic)) { ?>
    <link rel="stylesheet" type="text/css" id="diy_common" href="data/cache/style_<?php echo STYLEID;?>_css_diy.css?<?php echo VERHASH;?>" />
    <?php } ?>
    <!--[if IE 6]>
    <script src="<?php echo IMGDIR;?>/png.js" type="text/javascript"></script>
         <script type="text/javascript">
         DD_belatedPNG.fix('.eis_zone a, .eis_board1 .eis_titles,.carflashImage span');
         </script>
    <![endif]-->
    <style type="text/css">
        a{ font-family:Arial,Helvetica,sans-serif; }
        /* a:visited {color: #005EAC !important;} */
        .eis_body{/* width:1213px; margin:0 auto; position:relative; background:url(<?php echo IMGDIR;?>/bg.gif) no-repeat */}
        body {  background:url(<?php echo IMGDIR;?>/bg1.png) no-repeat 50% 0;background-position:top left;}
        #toptb,#hd{ width:1000px; margin:auto}
        #toptb{/* margin-left:190px; _margin-left:180px;*/}
        #hd{/* margin:46px 0 0 208px; */ margin-top:46px}
        .wp_1000{ width:1000px; /*margin:0 0 0 188px*/ margin:auto}
        
        .eis_hd_left{ width:780px; height:255px;}
            /*logo & search*/
        .fastlg a{ font-size:14px}
        #um{ overflow:hidden; padding:0}
        #um, #um a{ font-size:14px}
        #um .avt{ margin-right:10px; margin-top:5px;}
        .avt img{ padding:0px; border:none; width:18px; height:18px; border-radius:2px}
        #eis_us{ padding-right:16px; background:url(<?php echo IMGDIR;?>/arrwd.gif) no-repeat 100% 50%}
        #eis_us.a{ background:url(<?php echo IMGDIR;?>/arrow_top.gif) no-repeat 100% 50%}
        .eis_sch_user{ width:445px;}
        #scbar{ border:none; background:none; height:70px; margin-top:8px;}
        #scbar_txt{ width:368px; padding-left:5px; height:36px; line-height:36px; border:1px solid #999; border-right:0px; float:left;}
        #scbar_type{ display:none}
        #scbar_btn{ width:70px; height:39px; text-indent:-999em; background:url(<?php echo IMGDIR;?>/pic02.gif); border:none; cursor:pointer; float:right;}
        #scbar_hot{ height:20px; line-height:20px; margin-top:5px}
        #scbar_hot a{ color:#333; margin-right:10px;}
        #eis_us_menu #myprompt.new{ background-repeat:no-repeat; padding-left:15px;}
        .fastlg_fm{ border:none !important}
        .fastlg_fm .hm{ display:none !important}
        
            /*notice & navigate*/
        .dottom{ width:764px; height:120px;	float:left;	margin-top:28px;}
        .dottom .gonggao{ width:470px; /*border:1px #000 solid; */height:116px; float:left; margin-left:20px; }
        .dottom .gonggao1{ width:270px; /*border:1px #000 solid; */height:116px; float:left; margin-left:20px; }
        
        .dottom .gonggao1{ margin-left:0}
        .dottom .gonggao img,.dottom .gonggao1 img{ float:left; margin:9px 0px 0px 7px;}
        .content01{	width:260px; background-color:#7ecafa; height:116px; float:left;}
        .content02{	width:460px; background-color:#7ecafa; height:116px; float:left; }
        
        .title_g{ width:230px;	margin: auto;	height:40px;	line-height:40px;	font-size:14px;	color:#FFF;	border-bottom:1px #FFF solid;	font-family:"微软雅黑";}	
        .title_k{ width:430px;	margin: auto;	height:40px;	line-height:40px;	font-size:14px;	color:#FFF;	border-bottom:1px #FFF solid;	font-family:"微软雅黑";}	
        .ggdiv{	width:230px; margin:10px auto 0; overflow:hidden;}
        .gg_nr li{ width:230px;  line-height:25px;	height:25px;}
        .gg_nr li a{ text-decoration:none; font-size:12px; color:#FFF;	}	
        .gg_nr li a:hover{  font-size:12px;color:#F9D89D;	}
        
        .daohang_table{	margin:auto; line-height:20px; margin-top:10px; color:#FFF; font-size:13px; _font-size:12px; width:480px;}
        .daohang_table input{ width:100px;}
        .daohang_btn{ width:45px; height:36px; border:none; background: url(<?php echo IMGDIR;?>/pic08.gif) no-repeat scroll center top transparent; cursor:pointer;}
        
            /*weather*/
        .eis_hd_right{ width:180px; height:255px; overflow:hidden; }
        
        .wtname{ display:none !important; margin-left:-50px;}
        #kuangb #img1,#kuangb #img2,#kuangb #img3{ width:40px !important; height:40px !important}
        
        .eis_dz1{ width:995px;}
        .eis_zone{ position:relative; border:1px solid #999999; width:179px; height:167px; float:left; margin-right:15px; margin-top:20px; background:url(<?php echo IMGDIR;?>/pic09.jpg) no-repeat 50% 50%}
        .eis_zone a,.eis_board1 .eis_titles{ position:absolute; background:url(<?php echo IMGDIR;?>/t_bg.png) repeat; left:2px; bottom:2px; font-size:14px;	color:#FFF;	text-decoration:none;	font-family:"微软雅黑"; height:30px; line-height:30px; width:165px; padding-left:10px;}
        .eis_zone a:hover{ text-decoration:none}
        .eis_board{}
        .eis_board1{ position:relative; width:175px; height:163px; border:1px solid #999999; padding:2px; background-color:#fff; float:left; margin-right:15px; margin-top:20px;}
        .eis_tables{height:163px;;overflow:hidden;position: relative; }
        .boxcaption{ 
                float: left; 
                position: absolute; 
                background: #000;
                color:#FFF;
                height: 100px; 
                width: 100%; 
                opacity: .8; 
                /* For IE 5-7 */
                filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
                /* For IE 8 */
                -MS-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
                top: 163;
                left: 0;
            }
            
        .eis_board1 img{ width:175px; height:163px;}
        
        .eis_board2 ul{width:960px; padding-left:30px;}
        .eis_board2 ul li{width:180px; height:220px;float:left; }
        
        .eis_board2 ul li img{ width:150px; height:143px;display:inline-block;margin:0px 15px 5px 15px;text-align:center;white-space:normal; }
        
        #pt{ margin:20px 0 0}
        
            /*footer*/
        #ft{ border:none; margin-top:10px;}
        #footer{ overflow:hidden; width:1000px; margin-bottom:20px;}

        .foot_content{ color:#666; width:700px; margin-left:100px; line-height:30px; text-align:center; float:left; display:inline; }
        
        .foot_content .link{color:#666;	text-decoration:none;font-size:12px;}
        
        .foot_text{	color:#666;	font-family:Arial, Helvetica, sans-serif; display:block}
        
        .foot_pliceman{	width:180px;height:200px;	float:left;	display:inline;	margin:20px 0px 0px 20px;}
        
        .foot_pliceman img{	float:left;	margin-right:10px;	}
        
        .foot_pliceman a{	color:#000;	text-decoration:none;line-height:15px;	}
        
        /*forumdisplay*/
        .eis_f10{ margin:0 !important; _margin-bottom:10px; border:none !important}
        .eis_b10{ overflow:hidden; margin:0 0 10px !important}
        
        #carflash_div {	margin-top:10px;	overflow:hidden;	width:960px; 	float:left;	display:inline;	}
        
        /*****/
        #carflash {	 WIDTH:960px; POSITION: relative; HEIGHT:270px;}
        #carflash img { width:960px; HEIGHT:270px;}
        #carflashContent {	MARGIN-LEFT: 0px; WIDTH:958px; POSITION: absolute; TOP: 0px;}
        .carflashImage { DISPLAY: none; FLOAT: left; POSITION: relative;}
        .carflashImage span { DISPLAY: none;  WIDTH:789px; COLOR: #fff; padding:25px 14px 20px; POSITION: absolute; background:url(<?php echo IMGDIR;?>/t_bg.png) repeat}
        .carflashImage span a{ color:#FFF;	text-decoration:none;}
        .clear {CLEAR:both; }
        .carflashImage span strong {FONT-SIZE:16px;	font-family:"微软雅黑";	}
        .left {	LEFT:0px; WIDTH:162px! important; TOP:0px; HEIGHT:225px;}
        .right { RIGHT:0px; top:0; WIDTH:162px! important;  HEIGHT:225px;}
        .eis_fgx{ display:block; overflow:hidden; white-space:nowrap}
        
        /*search1*/
        .eis_scbar{	width:211px !important; width:212px\9 !important; height:30px !important; margin-top:2px !important; float:right;overflow:hidden;text-align:left;}
        .eis_scbar #scbar_txt{ width:155px !important; font-size:12px; height:24px !important; line-height:24px !important; border:2px solid #005eac; border-right:0px; float:left;}
        .eis_scbar #scbar_btn{ width:49px !important; height:30px !important; background:url(<?php echo IMGDIR;?>/search.jpg); cursor:pointer; float:right;}
        
        /*pg*/
        .pg strong{ background-color:#76C3FB !important; color:#fff !important}
        .pg a, .pg strong, .pgb a, .pg label{ border-color:#8DC1D7 !importan; margin-right:4px; margin-left:0 !important}
        .pg a:hover,.pgb a:hover{ border-color:#76C3FB !important}
        .pg{ float:left}
        
        /*主题*/
        .eis_taba{ margin-bottom:-2px}
        /* .eis_taba ul{ margin-left:20px;} */
        .eis_taba ul li{ float:left; width:52px; margin-right:2px;}
        .eis_taba ul li a{ height:28px; line-height:28px; display:block; text-align:center; background:url(<?php echo IMGDIR;?>/tab_btn02.jpg) no-repeat 50% 0; }
        .eis_taba ul li.a{ float:left; width:72px; margin-right:2px;}
        .eis_taba ul li.a a{ color:#fff; line-height:29px;background:url(<?php echo IMGDIR;?>/tab_btn01.jpg) no-repeat 50% 0; }
        .eis_taba ul li a:hover{ text-decoration:none}
        .eis_ttp{ border-top:1px solid #9DB3C5 !important; height:36px; line-height:30px; padding-top:5px !important; margin-bottom:0 !important; background:url(<?php echo IMGDIR;?>/tabbg.jpg) repeat-x 0 1px}
        .ttp a, .ttp strong{ padding:0 0 0 12px !important; background:none !important; border:none !important; color:#fff !important}
        .ttp .a a{ border:none !important; background:none !important; color:#fff !important}
        .ttp a:hover{ text-decoration:underline}
        .eis_ttp li{ _padding-bottom:0}
        .eis_ttp .pipe{ _margin-top:-3px;}
        .tl .tf{}
        .tl .th td, .tl .th th{ padding:8px 0 !important; padding:8px 0 5px\9!important;}
        .tl tr:hover th, .tl tr:hover td{ background:none !important}
        .tl .th, .tl .th tr:hover th, .tl .th tr:hover td{ background-color:#eee !important}
        
        .pnc, a.pnc{ background-color:#E9F3FD; border-color:#E9F3FD; }
        #fastpostsubmit strong{ font-weight:normal !important}
        .pnpost #fastpostsubmit{ width:102px; height:24px; line-height:22px; box-shadow:none !important; text-indent:-999em; background:url(<?php echo IMGDIR;?>/send.jpg) no-repeat}
        #f_pst{ padding-bottom:30px !important; border:1px solid #9DB3C5 !important; border-width:1px 0 !important}
        #f_pst .bm_h{ background:none !important;}
        #f_pst .bm_h h2{ font-family:"宋体"}
        #f_pst .bm_c{ border-bottom:1px solid #9DB3C5 !important; }
        
        /*列表页*/
        .eis_tl{ border:none !important}
        .eis_tl .bm_c{ padding:0;}
        .eis_pgs{ border-top:1px solid #9DB3C5 !important; border:none\9 !important; margin-top:-10px; padding-top:10px;}
        #xd_pop{width:55px;height:15px;position:absolute;right:500px;top:6px;background:#cb090e;}
        .fwin{width:800px;height:400px;empty-cells: show;border-collapse: collapse;}
        .xd_pop_content{width:700px;height:310px;margin: 0 auto;}
        .fl_icn img{width:31px;height:29px;}
        .xd_sx{width:976px;height:40px;margin:2px;background:#eee;}
        .xd_sx ul li{float:left;font-size:14px;margin-right:10px;margin-left:10px;margin-top:10px;}
        .xd_sx_q{width:976px;height:140px;margin:2px;background:#eee;}
        .xd_sx_q ul li{float:left;font-size:14px;margin-right:10px;margin-left:10px;margin-top:10px;}
        .common{font:14px "宋体",Arial,Helvetica,sans-serif;}
    </style>
    
</head>

<body id="nv_<?php echo $_G['basescript'];?>" class="pg_<?php echo CURMODULE;?><?php if($_G['basescript'] === 'portal' && CURMODULE === 'list' && !empty($cat)) { ?> <?php echo $cat['bodycss'];?><?php } ?>" onkeydown="if(event.keyCode==27) return false;">
<div class="eis_body">
    <!---页面导航开始处--->
    <div id="xd_pop">
        <a href="./xd_pop.php" onclick="showWindow('xd_pop',this.href)">论坛导航</a>
       </div>
    <!--End-->
    <div id="append_parent"></div>
    <div id="ajaxwaitid"></div>
    <?php if($_GET['diy'] == 'yes' && check_diy_perm($topic)) { ?>
        <?php include template('common/header_diy'); ?>    <?php } ?>
    <?php if(check_diy_perm($topic)) { ?>
        <?php
$__STATICURL = STATICURL;$diynav = <<<EOF

            <a id="diy-tg" href="javascript:openDiy();" title="打开 DIY 面板" class="xi1 xw1" onMouseMove="showMenu(this.id)"><img src="{$__STATICURL}image/diy/panel-toggle.png" alt="DIY" /></a>
            <div id="diy-tg_menu" style="display: none;">
                <ul>
                    <li><a href="javascript:saveUserdata('diy_advance_mode', '');openDiy();" class="xi2">简洁模式</a></li>
                    <li><a href="javascript:saveUserdata('diy_advance_mode', '1');openDiy();" class="xi2">高级模式</a></li>
                </ul>
            </div>
        
EOF;
?>
    <?php } ?>
    <?php if(CURMODULE == 'topic' && $topic && empty($topic['useheader']) && check_diy_perm($topic)) { ?>
        <?php echo $diynav;?>
    <?php } ?>
    <?php if(empty($topic) || $topic['useheader']) { ?>
        <?php if($_G['setting']['mobile']['allowmobile'] && (!$_G['setting']['cacheindexlife'] && !$_G['setting']['cachethreadon'] || $_G['uid']) && ($_GET['diy'] != 'yes' || !$_GET['inajax']) && ($_G['mobile'] != '' && $_G['cookie']['mobile'] == '' && $_GET['mobile'] != 'no')) { ?>
            <div class="xi1 bm bm_c">
                请选择 <a href="<?php echo $_G['siteurl'];?>forum.php?mobile=yes">进入手机版</a> <span class="xg1">|</span> <a href="<?php echo $_G['setting']['mobile']['nomobileurl'];?>">继续访问电脑版</a>
            </div>
        <?php } ?>

        <div id="toptb" class="cl">
                    
            <?php if(!empty($_G['setting']['pluginhooks']['global_cpnav_top'])) echo $_G['setting']['pluginhooks']['global_cpnav_top'];?>
            <div class="wp">
                <div class="z" style="display:none">
                    <?php if(is_array($_G['setting']['topnavs']['0'])) foreach($_G['setting']['topnavs']['0'] as $nav) { ?>                        <?php if($nav['available'] && (!$nav['level'] || ($nav['level'] == 1 && $_G['uid']) || ($nav['level'] == 2 && $_G['adminid'] > 0) || ($nav['level'] == 3 && $_G['adminid'] == 1))) { ?><?php echo $nav['code'];?><?php } ?>
                    <?php } ?>
                    <?php if(!empty($_G['setting']['pluginhooks']['global_cpnav_extra1'])) echo $_G['setting']['pluginhooks']['global_cpnav_extra1'];?>
                </div>
                <div class="y">
                    <?php if(!empty($_G['setting']['pluginhooks']['global_cpnav_extra2'])) echo $_G['setting']['pluginhooks']['global_cpnav_extra2'];?>
                    <?php if(is_array($_G['setting']['topnavs']['1'])) foreach($_G['setting']['topnavs']['1'] as $nav) { ?>                        <?php if($nav['available'] && (!$nav['level'] || ($nav['level'] == 1 && $_G['uid']) || ($nav['level'] == 2 && $_G['adminid'] > 0) || ($nav['level'] == 3 && $_G['adminid'] == 1))) { ?><?php echo $nav['code'];?><?php } ?>
                    <?php } ?>
                    <?php if(empty($_G['disabledwidthauto']) && $_G['setting']['switchwidthauto']) { ?>
                        <a href="javascript:;" onClick="widthauto(this)" style="display:none"><?php if(widthauto()) { ?>切换到窄版<?php } else { ?>切换到宽版<?php } ?></a>
                    <?php } ?>
                    <?php if($_G['uid'] && !empty($_G['style']['extstyle'])) { ?><a id="sslct" href="javascript:;" onMouseOver="delayShow(this, function() {showMenu({'ctrlid':'sslct','pos':'34!'})});">切换风格</a><?php } ?>
                    <?php if(check_diy_perm($topic)) { ?>
                        <?php echo $diynav;?>
                    <?php } ?>
                </div>
            </div>
        </div>

        <?php if(!IS_ROBOT) { ?>
            <?php if($_G['uid'] && !empty($_G['style']['extstyle'])) { ?>
                <div id="sslct_menu" class="cl p_pop" style="display: none;">
                    <?php if(!$_G['style']['defaultextstyle']) { ?><span class="sslct_btn" onClick="extstyle('')" title="默认"><i></i></span><?php } ?>
                    <?php if(is_array($_G['style']['extstyle'])) foreach($_G['style']['extstyle'] as $extstyle) { ?>                        <span class="sslct_btn" onClick="extstyle('<?php echo $extstyle['0'];?>')" title="<?php echo $extstyle['1'];?>"><i style='background:<?php echo $extstyle['2'];?>'></i></span>
                    <?php } ?>
                </div>
            <?php } ?>

                <div id="qmenu_menu" class="p_pop <?php if(!$_G['uid']) { ?>blk<?php } ?>" style="display: none;">
                    <?php if($_G['uid']) { ?>
                    <ul>
                        <?php if(is_array($_G['setting']['mynavs'])) foreach($_G['setting']['mynavs'] as $nav) { ?>                            <?php if($nav['available'] && (!$nav['level'] || ($nav['level'] == 1 && $_G['uid']) || ($nav['level'] == 2 && $_G['adminid'] > 0) || ($nav['level'] == 3 && $_G['adminid'] == 1))) { ?>
                                <li><?php echo $nav['code'];?></li>
                            <?php } ?>
                        <?php } ?>
                    </ul>
                    <?php } elseif($_G['connectguest']) { ?>
                        <div class="ptm pbw hm">
                            请先<br /><a class="xi2" href="member.php?mod=connect"><strong>完善帐号信息</strong></a> 或 <a href="member.php?mod=connect&amp;ac=bind" class="xi2 xw1"><strong>绑定已有帐号</strong></a><br />后使用快捷导航
                        </div>
                    <?php } else { ?>
                        <div class="ptm pbw hm">
                            请 <a href="javascript:;" class="xi2" onclick="lsSubmit()"><strong>登录</strong></a> 后使用快捷导航<br />没有帐号？<a href="member.php?mod=<?php echo $_G['setting']['regname'];?>" class="xi2 xw1"><?php echo $_G['setting']['reglinkname'];?></a>
                        </div>
                    <?php } ?>
                </div>
                
                <div id="eis_us_menu" class="p_pop" style="display:none">
                    <?php if($_G['uid']) { ?>
                    <ul>
                        <li><a href="home.php?mod=spacecp">设置</a></li>
                        <li><a href="home.php?mod=space&amp;do=pm" id="pm_ntc"<?php if($_G['member']['newpm']) { ?> class="new"<?php } ?>>消息</a></li>
                        <li><a href="home.php?mod=space&amp;do=notice" id="myprompt"<?php if($_G['member']['newprompt']) { ?> class="new"<?php } ?>>提醒<?php if($_G['member']['newprompt']) { ?>(<?php echo $_G['member']['newprompt'];?>)<?php } ?></a><span id="myprompt_check"></span></li>
                        <?php if($_G['setting']['taskon'] && !empty($_G['cookie']['taskdoing_'.$_G['uid']])) { ?><li><a href="home.php?mod=task&amp;item=doing" id="task_ntc" class="new">进行中的任务</a></li><?php } ?>
                        <?php if(($_G['group']['allowmanagearticle'] || $_G['group']['allowpostarticle'] || $_G['group']['allowdiy'] || getstatus($_G['member']['allowadmincp'], 4) || getstatus($_G['member']['allowadmincp'], 6) || getstatus($_G['member']['allowadmincp'], 2) || getstatus($_G['member']['allowadmincp'], 3))) { ?>
                            <li><a href="portal.php?mod=portalcp"><?php if($_G['setting']['portalstatus'] ) { ?>门户管理<?php } else { ?>模块管理<?php } ?></a></li>
                        <?php } ?>
                        <?php if($_G['uid'] && $_G['group']['radminid'] > 1) { ?>
                            <li><a href="forum.php?mod=modcp&amp;fid=<?php echo $_G['fid'];?>" target="_blank">本版管理</a></li>
                        <?php } ?>
                        <?php if($_G['uid'] && $_G['adminid'] == 1 && $_G['setting']['cloud_status']) { ?>
                            <li><a href="admin.php?frames=yes&amp;action=cloud&amp;operation=applist" target="_blank">云平台</a></li>
                        <?php } ?>
                        <li><a href="home.php?mod=spacecp&amp;ac=usergroup"<?php if($upgradecredit !== 'false') { ?> id="g_upmine" class="xi2" onMouseOver="delayShow(this, showUpgradeinfo)"<?php } ?>><?php echo $_G['group']['grouptitle'];?></a></li>
                        <?php if($_G['uid'] && getstatus($_G['member']['allowadmincp'], 1)) { ?>
                            <li><a href="admin.php" target="_blank">管理中心</a></li>
                        <?php } ?>
                        
                    </ul>
                    <?php } ?>
                </div>
                
        <?php } ?>

        <?php echo adshow("headerbanner/wp a_h");?>        <div id="hd">
            <div class="wp">
                <div class="hdc cl">
                    <?php $mnid = getcurrentnav();?>                    <div class="eis_hd_left z" style="height:100px;">
                        <h2><?php if(!isset($_G['setting']['navlogos'][$mnid])) { ?><a href="http://www.xcheying.com" title="<?php echo $_G['setting']['bbname'];?>"><?php echo $_G['style']['boardlogo'];?></a><?php } else { ?><?php echo $_G['setting']['navlogos'][$mnid];?><?php } ?></h2>
                    
                        <div class="z eis_sch_user">
                    
                    <?php if($_G['uid']) { ?>
                    <div id="um">
                        <p class="y">
                            <strong class=""><a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>" target="_blank" title="访问我的空间" id="eis_us" onMouseOver="showMenu({'ctrlid':'eis_us','pos':'34!','ctrlclass':'a','duration':2});"><?php echo $_G['member']['username'];?></a></strong>
                            <span class="pipe">|</span>
                            
                            <?php if($_G['group']['allowinvisible']) { ?>
                            <span id="loginstatus">
                                <a id="loginstatusid" href="member.php?mod=switchstatus" title="切换在线状态" onClick="ajaxget(this.href, 'loginstatus');return false;" class="xi2"></a>
                            </span>
                            <span class="pipe">|</span>
                            <?php } ?>
                            
                            <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra1'])) echo $_G['setting']['pluginhooks']['global_usernav_extra1'];?>
                            
                            <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra2'])) echo $_G['setting']['pluginhooks']['global_usernav_extra2'];?>
                            
                            <a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>">退出</a>
                            <span class="pipe" style="margin-right:-5px">|</span>
                            <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra3'])) echo $_G['setting']['pluginhooks']['global_usernav_extra3'];?>
                            <?php $upgradecredit = $_G['uid'] && $_G['group']['grouptype'] == 'member' && $_G['group']['groupcreditslower'] != 999999999 ? $_G['group']['groupcreditslower'] - $_G['member']['credits'] : false;?>                            <a href="home.php?mod=spacecp&amp;ac=credit&amp;showcredit=1" id="extcreditmenu"<?php if(!$_G['setting']['bbclosed']) { ?> onMouseOver="delayShow(this, showCreditmenu);" class="showmenu"<?php } ?>>积分: <?php echo $_G['member']['credits'];?></a>
                            
                        </p>
                        <div class="avt y"><a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>"><?php echo avatar($_G[uid],small);?></a></div>
                    </div>
                    <?php } elseif(!empty($_G['cookie']['loginuser'])) { ?>
                    <p>
                        <strong><a id="loginuser" class="noborder"><?php echo dhtmlspecialchars($_G['cookie']['loginuser']); ?></a></strong>
                        <a href="member.php?mod=logging&amp;action=login" onClick="showWindow('login', this.href)">激活</a>
                        <a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>">退出</a>
                    </p>
                    <?php } elseif(!$_G['connectguest']) { ?>
                        <?php include template('member/login_simple'); ?>                    <?php } else { ?>
                    <div id="um">
                        
                        <p class="y">
                            <strong class="z"><?php echo $_G['member']['username'];?></strong>
                            <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra1'])) echo $_G['setting']['pluginhooks']['global_usernav_extra1'];?>
                            <span class="pipe">|</span><a href="member.php?mod=logging&amp;action=logout&amp;formhash=<?php echo FORMHASH;?>">退出</a>
                            <a href="home.php?mod=spacecp&amp;ac=credit&amp;showcredit=1">积分: 0</a>
                            <span class="pipe">|</span>用户组: <?php echo $_G['group']['grouptitle'];?>
                        </p>
                        <div class="avt y"><?php echo avatar(0,small);?></div>
                    </div>
                    <?php } ?>
                    
                        <?php if($_G['setting']['search']) { ?><?php $slist = array();?><?php if($_G['fid'] && $_G['forum']['status'] != 3 && $mod != 'group') { ?><?php
$slist[forumfid] = <<<EOF
<li><a href="javascript:;" rel="curforum" fid="{$_G['fid']}" >本版</a></li>
EOF;
?><?php } if($_G['setting']['portalstatus'] && $_G['setting']['search']['portal']['status'] && ($_G['group']['allowsearch'] & 1 || $_G['adminid'] == 1)) { ?><?php
$slist[portal] = <<<EOF
<li><a href="javascript:;" rel="article">文章</a></li>
EOF;
?><?php } if($_G['setting']['search']['forum']['status'] && ($_G['group']['allowsearch'] & 2 || $_G['adminid'] == 1)) { ?><?php
$slist[forum] = <<<EOF
<li><a href="javascript:;" rel="forum" class="curtype">帖子</a></li>
EOF;
?><?php } if(helper_access::check_module('blog') && $_G['setting']['search']['blog']['status'] && ($_G['group']['allowsearch'] & 4 || $_G['adminid'] == 1)) { ?><?php
$slist[blog] = <<<EOF
<li><a href="javascript:;" rel="blog">日志</a></li>
EOF;
?><?php } if(helper_access::check_module('album') && $_G['setting']['search']['album']['status'] && ($_G['group']['allowsearch'] & 8 || $_G['adminid'] == 1)) { ?><?php
$slist[album] = <<<EOF
<li><a href="javascript:;" rel="album">相册</a></li>
EOF;
?><?php } if($_G['setting']['groupstatus'] && $_G['setting']['search']['group']['status'] && ($_G['group']['allowsearch'] & 16 || $_G['adminid'] == 1)) { ?><?php
$slist[group] = <<<EOF
<li><a href="javascript:;" rel="group">{$_G['setting']['navs']['3']['navname']}</a></li>
EOF;
?><?php } ?><?php
$slist[user] = <<<EOF
<li><a href="javascript:;" rel="user">用户</a></li>
EOF;
?>
<?php } if($_G['setting']['search'] && $slist) { ?>
<div id="scbar" class="<?php if($_G['setting']['srchhotkeywords'] && count($_G['setting']['srchhotkeywords']) > 5) { ?>scbar_narrow <?php } ?>cl">
<form id="scbar_form" method="<?php if($_G['fid'] && !empty($searchparams['url'])) { ?>get<?php } else { ?>post<?php } ?>" autocomplete="off" onsubmit="searchFocus($('scbar_txt'))" action="<?php if($_G['fid'] && !empty($searchparams['url'])) { ?><?php echo $searchparams['url'];?><?php } else { ?>search.php?searchsubmit=yes<?php } ?>" target="_blank">
<input type="hidden" name="mod" id="scbar_mod" value="search" />
<input type="hidden" name="formhash" value="<?php echo FORMHASH;?>" />
<input type="hidden" name="srchtype" value="title" />
<input type="hidden" name="srhfid" value="<?php echo $_G['fid'];?>" />
<input type="hidden" name="srhlocality" value="<?php echo $_G['basescript'];?>::<?php echo CURMODULE;?>" />
<?php if(!empty($searchparams['params'])) { if(is_array($searchparams['params'])) foreach($searchparams['params'] as $key => $value) { ?><?php $srchotquery .= '&' . $key . '=' . rawurlencode($value);?><input type="hidden" name="<?php echo $key;?>" value="<?php echo $value;?>" />
<?php } ?>
<input type="hidden" name="source" value="discuz" />
<input type="hidden" name="fId" id="srchFId" value="<?php echo $_G['fid'];?>" />
<input type="hidden" name="q" id="cloudsearchquery" value="" />

<style>
#scbar { overflow: visible; position: relative; }
#sg{ background: #FFF; width:456px; border: 1px solid #B2C7DA; }
.scbar_narrow #sg { width: 316px; }
#sg li { padding:0 8px; line-height:30px; font-size:14px; }
#sg li span { color:#999; }
.sml { background:#FFF; cursor:default; }
.smo { background:#E5EDF2; cursor:default; }
            </style>
            <div style="display: none; position: absolute; top:37px; left:44px;" id="sg">
                <div id="st_box" cellpadding="2" cellspacing="0"></div>
            </div>
<?php } ?>

        <div class="eis_sch_top cl">
        	<input type="text" name="srchtxt" id="scbar_txt" value="请输入搜索内容" autocomplete="off" x-webkit-speech speech />
            <a href="javascript:;" id="scbar_type" class="showmenu xg1 xs2" onclick="showMenu(this.id)" hidefocus="true">搜索</a>
            <button type="submit" name="searchsubmit" id="scbar_btn" sc="1" class="pn pnc" value="true"><strong class="xi2 xs2">搜索</strong></button>
        </div>
        <div id="scbar_hot">
            <?php if($_G['setting']['srchhotkeywords']) { ?>
              
                <?php if(is_array($_G['setting']['srchhotkeywords'])) foreach($_G['setting']['srchhotkeywords'] as $val) { ?>                    <?php if($val=trim($val)) { ?>
                        <?php $valenc=rawurlencode($val);?>                        <?php
$__FORMHASH = FORMHASH;$srchhotkeywords[] = <<<EOF

                            
EOF;
 if(!empty($searchparams['url'])) { 
$srchhotkeywords[] .= <<<EOF

                                <a href="{$searchparams['url']}?q={$valenc}&source=hotsearch{$srchotquery}" target="_blank" class="xi2" sc="1">{$val}</a>
                            
EOF;
 } else { 
$srchhotkeywords[] .= <<<EOF

                                <a href="search.php?mod=forum&amp;srchtxt={$valenc}&amp;formhash={$__FORMHASH}&amp;searchsubmit=true&amp;source=hotsearch" target="_blank" class="xi2" sc="1">{$val}</a>
                            
EOF;
 } 
$srchhotkeywords[] .= <<<EOF

                        
EOF;
?>
                    <?php } ?>
                <?php } ?>
                <?php echo implode('', $srchhotkeywords);; ?>            <?php } ?>
        </div>
</form>
</div>
<ul id="scbar_type_menu" class="p_pop" style="display:none"><?php echo implode('', $slist);; ?></ul>
<script type="text/javascript">
initSearchmenu('scbar', '<?php echo $searchparams['url'];?>');
</script>
<?php } ?>  
                    </div>
                    </div>
                </div>
                
                <div style="display:none">
                <div id="nv">
                    <a href="javascript:;" id="qmenu" onMouseOver="showMenu({'ctrlid':'qmenu','pos':'34!','ctrlclass':'a','duration':2});">快捷导航</a>
                    <ul>
                        <?php if(is_array($_G['setting']['navs'])) foreach($_G['setting']['navs'] as $nav) { ?>                            <?php if($nav['available'] && (!$nav['level'] || ($nav['level'] == 1 && $_G['uid']) || ($nav['level'] == 2 && $_G['adminid'] > 0) || ($nav['level'] == 3 && $_G['adminid'] == 1))) { ?><li <?php if($mnid == $nav['navid']) { ?>class="a" <?php } ?><?php echo $nav['nav'];?>></li><?php } ?>
                        <?php } ?>
                    </ul>
                    <?php if(!empty($_G['setting']['pluginhooks']['global_nav_extra'])) echo $_G['setting']['pluginhooks']['global_nav_extra'];?>
                </div>
                <?php if(!empty($_G['setting']['plugins']['jsmenu'])) { ?>
                    <ul class="p_pop h_pop" id="plugin_menu" style="display: none">
                    <?php if(is_array($_G['setting']['plugins']['jsmenu'])) foreach($_G['setting']['plugins']['jsmenu'] as $module) { ?>                         <?php if(!$module['adminid'] || ($module['adminid'] && $_G['adminid'] > 0 && $module['adminid'] >= $_G['adminid'])) { ?>
                         <li><?php echo $module['url'];?></li>
                         <?php } ?>
                    <?php } ?>
                    </ul>
                <?php } ?>
                <?php echo $_G['setting']['menunavs'];?>
                <div id="mu" class="cl">
                <?php if($_G['setting']['subnavs']) { ?>
                    <?php if(is_array($_G['setting']['subnavs'])) foreach($_G['setting']['subnavs'] as $navid => $subnav) { ?>                        <?php if($_G['setting']['navsubhover'] || $mnid == $navid) { ?>
                        <ul class="cl <?php if($mnid == $navid) { ?>current<?php } ?>" id="snav_<?php echo $navid;?>" style="display:<?php if($mnid != $navid) { ?>none<?php } ?>">
                        <?php echo $subnav;?>
                        </ul>
                        <?php } ?>
                    <?php } ?>
                <?php } ?>
                </div>
                </div>
                <?php echo adshow("subnavbanner/a_mu");?>                
            
        </div>
</div>
        <?php if(!empty($_G['setting']['pluginhooks']['global_header'])) echo $_G['setting']['pluginhooks']['global_header'];?>
    <?php } ?>

    <div class="wp_1000">
    <div id="wp" class="wp"><script type="text/javascript">var fid = parseInt('<?php echo $_G['fid'];?>'), tid = parseInt('<?php echo $_G['tid'];?>');</script>
<?php if($modmenu['thread'] || $modmenu['post']) { ?>
    <script src="<?php echo $_G['setting']['jspath'];?>forum_moderate.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } ?>

<script src="<?php echo $_G['setting']['jspath'];?>forum_viewthread.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<script type="text/javascript">zoomstatus = parseInt(<?php echo $_G['setting']['zoomstatus'];?>);var imagemaxwidth = '<?php echo $_G['setting']['imagemaxwidth'];?>';var aimgcount = new Array();</script>

<style id="diy_style" type="text/css"></style>
<!--[diy=diynavtop]--><div id="diynavtop" class="area"></div><!--[/diy]-->
<div id="pt" class="bm cl">
    <div class="z">
        <a href="./" class="nvhm" title="首页"><?php echo $_G['setting']['bbname'];?></a><em>&raquo;</em><a href="forum.php"<?php if($_G['setting']['forumjump']) { ?> id="fjump" onmouseover="delayShow(this, 'showForummenu(<?php echo $_G['fid'];?>)');" class="showmenu" <?php } ?>><?php echo $_G['setting']['navs']['2']['navname'];?></a><?php echo $navigation;?> <em>&rsaquo;</em> <a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>"><?php echo $_G['forum_thread']['short_subject'];?></a>
    </div>
</div>

<?php if(!empty($_G['setting']['pluginhooks']['viewthread_top'])) echo $_G['setting']['pluginhooks']['viewthread_top'];?><?php echo adshow("text/wp a_t");?><style id="diy_style" type="text/css"></style>
<div class="wp">
    <!--[diy=diy1]--><div id="diy1" class="area"></div><!--[/diy]-->
</div>

<div id="ct" class="wp cl">
    <div id="pgt" class="pgs mbm cl <?php if($modmenu['thread']) { ?>pbm bbs<?php } ?>">
        <div class="pgt">
        <?php if(!$multipage) { ?>
            <div class="pg"><strong>1</strong>到
            <input type="text" name="custompage" class="px" size="2" title="输入页码，按回车快速跳转" value="1" onkeydown="if(event.keyCode==13) {window.location='forum.php?mod=forumdisplay&fid=128&amp;page='+this.value; doane(event);}" />&nbsp;页&nbsp;<button value="">跳转</button>
            </div>
                <div id="fj" class="z" style="padding-top:8px;">
                <label class="z">&nbsp;</label>
                <input type="text" class="px p_fre z" size="2" onkeyup="$('fj_btn').href='forum.php?mod=redirect&ptid=<?php echo $_G['tid'];?>&authorid=<?php echo $_GET['authorid'];?>&postno='+this.value" onkeydown="if(event.keyCode==13) {window.location=$('fj_btn').href;return false;}" title="跳转到指定楼层" />
                <a href="javascript:;" id="fj_btn" class="z" title="跳转到指定楼层"><button style="margin:0px">跳转</button></a>
                </div>
        <?php } else { ?>
        <?php echo $multipage;?>
        <div id="fj" class="z" style="padding-top:8px;">
                <label class="z">&nbsp;</label>
                <input type="text" class="px p_fre z" size="2" onkeyup="$('fj_btn').href='forum.php?mod=redirect&ptid=<?php echo $_G['tid'];?>&authorid=<?php echo $_GET['authorid'];?>&postno='+this.value" onkeydown="if(event.keyCode==13) {window.location=$('fj_btn').href;return false;}" title="跳转到指定楼层" />
                <a href="javascript:;" id="fj_btn" class="z" title="跳转到指定楼层"><button style="margin:0px">跳转</button></a>
                </div>
        <?php } ?>
        </div>
        <!--<span class="y pgb"<?php if($_G['setting']['visitedforums']) { ?> id="visitedforums" onmouseover="$('visitedforums').id = 'visitedforumstmp';this.id = 'visitedforums';showMenu({'ctrlid':this.id,'pos':'34'})"<?php } ?>><a href="<?php echo $upnavlink;?>">返回列表</a></span>-->
        <?php if($_G['forum']['threadsorts'] && $_G['forum']['threadsorts']['templatelist']) { ?>
            <?php if(is_array($_G['forum']['threadsorts']['types'])) foreach($_G['forum']['threadsorts']['types'] as $id => $name) { ?>                <button id="newspecial" class="pn pnc" onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>&extra=<?php echo $extra;?>&sortid=<?php echo $id;?>'"><strong>我要<?php echo $name;?></strong></button>
            <?php } ?>
        <?php } else { ?>
            <?php if($allowpostreply && !$_G['forum_thread']['archiveid']) { ?>
            <a style="float:right;" id="post_reply" onclick="showWindow('reply', 'forum.php?mod=post&action=reply&fid=<?php echo $_G['fid'];?>&tid=<?php echo $_G['tid'];?>')" href="javascript:;" title="回复"><img src="<?php echo IMGDIR;?>/pn_reply.png" alt="回复" /></a>
        <?php } ?>
        <?php } ?>
        
        <?php if(!$_G['forum_thread']['is_archived']) { ?><a style="float:right;" id="newspecial" onmouseover="$('newspecial').id = 'newspecialtmp';this.id = 'newspecial';showMenu({'ctrlid':this.id})"<?php if(!$_G['forum']['allowspecialonly'] && empty($_G['forum']['picstyle']) && !$_G['forum']['threadsorts']['required']) { ?> onclick="showWindow('newthread', 'forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>')"<?php } else { ?> onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>';return false;"<?php } ?> href="javascript:;" title="发新帖"><img src="<?php echo IMGDIR;?>/pn_post.png" alt="发新帖" /></a><?php } ?>
        <?php if(!empty($_G['setting']['pluginhooks']['viewthread_postbutton_top'])) echo $_G['setting']['pluginhooks']['viewthread_postbutton_top'];?>
    </div>

<?php if($_G['group']['allowpost'] && ($_G['group']['allowposttrade'] || $_G['group']['allowpostpoll'] || $_G['group']['allowpostreward'] || $_G['group']['allowpostactivity'] || $_G['group']['allowpostdebate'] || $_G['setting']['threadplugins'] || $_G['forum']['threadsorts'])) { ?>
    <ul class="p_pop" id="newspecial_menu" style="display: none">
        <?php if(!$_G['forum']['allowspecialonly']) { ?><li><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>"  style="font-size:12px;">发表帖子</a></li><?php } ?>
        <?php if($_G['forum']['threadsorts'] && !$_G['forum']['allowspecialonly']) { ?>
            <?php if(is_array($_G['forum']['threadsorts']['types'])) foreach($_G['forum']['threadsorts']['types'] as $id => $threadsorts) { ?>                <?php if($_G['forum']['threadsorts']['show'][$id]) { ?>
                    <li class="popupmenu_option"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;sortid=<?php echo $id;?>"  style="font-size:12px;"><?php echo $threadsorts;?></a></li>
                <?php } ?>
            <?php } ?>
        <?php } ?>
        <?php if($_G['group']['allowpostpoll']) { ?><li class="poll"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=1"  style="font-size:12px;">发起投票</a></li><?php } ?>
        <?php if($_G['group']['allowpostreward']) { ?><li class="reward"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=3"  style="font-size:12px;">发布悬赏</a></li><?php } ?>
        <?php if($_G['group']['allowpostdebate']) { ?><li class="debate"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=5"  style="font-size:12px;">发起辩论</a></li><?php } ?>
        <?php if($_G['group']['allowpostactivity']) { ?><li class="activity"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=4"  style="font-size:12px;">发起活动</a></li><?php } ?>
        <?php if($_G['group']['allowposttrade']) { ?><li class="trade"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=2"  style="font-size:12px;">出售商品</a></li><?php } ?>
        <?php if($_G['setting']['threadplugins']) { ?>
            <?php if(is_array($_G['forum']['threadplugin'])) foreach($_G['forum']['threadplugin'] as $tpid) { ?>                <?php if(array_key_exists($tpid, $_G['setting']['threadplugins']) && @in_array($tpid, $_G['group']['allowthreadplugin'])) { ?>
                    <li class="popupmenu_option"<?php if($_G['setting']['threadplugins'][$tpid]['icon']) { ?> style="background-image:url(source/plugin/<?php echo $tpid;?>/<?php echo $_G['setting']['threadplugins'][$tpid]['icon'];?>)"<?php } ?>><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;specialextra=<?php echo $tpid;?>"><?php echo $_G['setting']['threadplugins'][$tpid]['name'];?></a></li>
                <?php } ?>
            <?php } ?>
        <?php } ?>
    </ul>
<?php } if($modmenu['post']) { ?>
    <div id="mdly" class="fwinmask" style="display:none;">
        <table cellspacing="0" cellpadding="0" class="fwin">
            <tr>
                <td class="t_l"></td>
                <td class="t_c"></td>
                <td class="t_r"></td>
            </tr>
            <tr>
                <td class="m_l">&nbsp;&nbsp;</td>
                <td class="m_c">
                    <div class="f_c">
                        <div class="c">
                            <h3>选中&nbsp;<strong id="mdct" class="xi1"></strong>&nbsp;篇: </h3>
                            <?php if($_G['forum']['ismoderator']) { ?>
                                <?php if($_G['group']['allowwarnpost']) { ?><a href="javascript:;" onclick="modaction('warn')">警告</a><span class="pipe">|</span><?php } ?>
                                <?php if($_G['group']['allowbanpost']) { ?><a href="javascript:;" onclick="modaction('banpost')">屏蔽</a><span class="pipe">|</span><?php } ?>
                                <?php if($_G['group']['allowdelpost'] && !$rushreply) { ?><a href="javascript:;" onclick="modaction('delpost')">删除</a><span class="pipe">|</span><?php } ?>
                            <?php } ?>
                            <?php if($_G['forum']['ismoderator'] && $_G['group']['allowstickreply'] || $_G['forum_thread']['authorid'] == $_G['uid']) { ?><a href="javascript:;" onclick="modaction('stickreply')">置顶</a><span class="pipe">|</span><?php } ?>
                            <?php if($_G['forum_thread']['pushedaid'] && $allowpostarticle) { ?><a href="javascript:;" onclick="modaction('pushplus', '', 'aid=<?php echo $_G['forum_thread']['pushedaid'];?>', 'portal.php?mod=portalcp&ac=article&op=pushplus')">文章连载</a><span class="pipe">|</span><?php } ?>
                        </div>
                    </div>
                </td>
                <td class="m_r"></td>
            </tr>
            <tr>
                <td class="b_l"></td>
                <td class="b_c"></td>
                <td class="b_r"></td>
            </tr>
        </table>
    </div>
<?php } if($modmenu['thread']) { ?>
    <div id="modmenu" class="xi2 pbm">
        <?php $modopt=0;?>        <?php if($_G['forum']['ismoderator']) { ?>
            <?php if($_G['group']['allowdelpost']) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(3, 'delete')">删除主题</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowbumpthread'] && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(3, 'down')">提升</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowstickthread'] && ($_G['forum_thread']['displayorder'] <= 3 || $_G['adminid'] == 1) && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(1, 'stick')">置顶</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowhighlightthread'] && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(1, 'highlight')">颜色</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowdigestthread'] && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(1, 'digest')">加精</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowrecommendthread'] && !empty($_G['forum']['modrecommend']['open']) && $_G['forum']['modrecommend']['sort'] != 1 && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(1, 'recommend')">推荐666</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowstampthread'] && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('stamp')">图章</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowstamplist'] && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('stamplist')">图标</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowclosethread'] && !$_G['forum_thread']['is_archived'] && $_G['forum']['status'] != 3) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(4)"><?php if(!$_G['forum_thread']['closed']) { ?>锁帖<?php } else { ?>打开<?php } ?></a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowmovethread'] && !$_G['forum_thread']['is_archived'] && $_G['forum']['status'] != 3) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(2, 'move')">移动</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowedittypethread'] && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modthreads(2, 'type')">分类</a><span class="pipe">|</span><?php } ?>
            <?php if(!$_G['forum_thread']['special'] && !$_G['forum_thread']['is_archived']) { ?>
                <?php if($_G['group']['allowcopythread'] && $_G['forum']['status'] != 3) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('copy')">复制</a><span class="pipe">|</span><?php } ?>
                <?php if($_G['group']['allowmergethread'] && $_G['forum']['status'] != 3) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('merge')">合并</a><span class="pipe">|</span><?php } ?>
                <?php if($_G['group']['allowrefund'] && $_G['forum_thread']['price'] > 0) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('refund')">撤销付费</a><span class="pipe">|</span><?php } ?>
            <?php } ?>
            <?php if($_G['group']['allowsplitthread'] && !$_G['forum_thread']['is_archived'] && $_G['forum']['status'] != 3) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('split')">分割</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowrepairthread'] && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('repair')">修复</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['forum_thread']['is_archived'] && $_G['adminid'] == 1) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('restore', '', 'archiveid=<?php echo $_G['forum_thread']['archiveid'];?>')">取消存档</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['forum_firstpid']) { ?>
                <?php if($_G['group']['allowwarnpost']) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('warn', '<?php echo $_G['forum_firstpid'];?>')">警告</a><span class="pipe">|</span><?php } ?>
                <?php if($_G['group']['allowbanpost']) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('banpost', '<?php echo $_G['forum_firstpid'];?>')">屏蔽</a><span class="pipe">|</span><?php } ?>
            <?php } ?>
            <?php if($_G['group']['allowremovereward'] && $_G['forum_thread']['special'] == 3 && !$_G['forum_thread']['is_archived']) { ?><?php $modopt++?><a href="javascript:;" onclick="modaction('removereward')">移除悬赏</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['forum']['status'] == 3 && in_array($_G['adminid'], array('1','2')) && $_G['forum_thread']['closed'] < 1) { ?><a href="javascript:;" onclick="modthreads(5, 'recommend_group');return false;">推到版块</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['allowmanagetag']) { ?><a href="javascript:;" onclick="showWindow('mods', 'forum.php?mod=tag&op=manage&tid=<?php echo $_G['tid'];?>', 'get', 0)">标签</a><span class="pipe">|</span><?php } ?>
            <?php if($_G['group']['alloweditusertag']) { ?><a href="javascript:;" onclick="showWindow('usertag', 'forum.php?mod=misc&action=usertag&tid=<?php echo $_G['tid'];?>', 'get', 0)">用户标签</a><span class="pipe">|</span><?php } ?>
        <?php } ?>
        <?php if($allowpusharticle && $allowpostarticle) { ?><?php $modopt++?><a href="portal.php?mod=portalcp&amp;ac=article&amp;from_idtype=tid&amp;from_id=<?php echo $_G['tid'];?>">生成文章</a><span class="pipe">|</span><?php } ?>
        <?php if(!empty($_G['setting']['pluginhooks']['viewthread_modoption'])) echo $_G['setting']['pluginhooks']['viewthread_modoption'];?>
    </div>
<?php } ?>

<?php if(!empty($_G['setting']['pluginhooks']['viewthread_beginline'])) echo $_G['setting']['pluginhooks']['viewthread_beginline'];?>

<div id="postlist" class="pl bm">
    <table cellspacing="0" cellpadding="0">
        <tr>
            <td class="pls ptm pbm">
                <?php if($_G['page'] > 1) { ?>
                <div id="tath" class="cl">
                    <?php if($_G['forum_thread']['authorid'] && $_G['forum_thread']['author']) { ?>
                        <a href="home.php?mod=space&amp;uid=<?php echo $_G['forum_thread']['authorid'];?>" title="<?php echo $_G['forum_thread']['author'];?>"><?php echo avatar($_G[forum_thread][authorid],small);?></a>
                        楼主: <a href="home.php?mod=space&amp;uid=<?php echo $_G['forum_thread']['authorid'];?>" title="<?php echo $_G['forum_thread']['author'];?>"><?php echo $_G['forum_thread']['author'];?></a>
                    <?php } else { ?>
                        楼主:
                        <?php if($_G['forum']['ismoderator']) { ?>
                            <a href="home.php?mod=space&amp;uid=<?php echo $_G['forum_thread']['authorid'];?>">匿名</a>
                        <?php } else { ?>
                            匿名
                        <?php } ?>
                    <?php } ?>
                </div>
                <?php } else { ?>
                <div class="hm">
                    <span class="xg1">查看:</span> <span class="xi1"><?php echo $_G['forum_thread']['views'];?></span><span class="pipe">|</span><span class="xg1">回复:</span> <span class="xi1"><?php echo $_G['forum_thread']['replies'];?></span>
                </div>
                <?php } ?>
            </td>
            <td class="plc ptm pbn vwthd">
                <h1 class="ts">
                    <?php if($_G['forum_thread']['typeid'] && $_G['forum']['threadtypes']['types'][$_G['forum_thread']['typeid']]) { ?>
                        <?php if(!IS_ROBOT && ($_G['forum']['threadtypes']['listable'] || $_G['forum']['status'] == 3)) { ?>
                            <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=typeid&amp;typeid=<?php echo $_G['forum_thread']['typeid'];?>">[<?php echo $_G['forum']['threadtypes']['types'][$_G['forum_thread']['typeid']];?>]</a>
                        <?php } else { ?>
                            [<?php echo $_G['forum']['threadtypes']['types'][$_G['forum_thread']['typeid']];?>]
                        <?php } ?>
                    <?php } ?>
                    <?php if($threadsorts && $_G['forum_thread']['sortid']) { ?>
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=sortid&amp;sortid=<?php echo $_G['forum_thread']['sortid'];?>">[<?php echo $_G['forum']['threadsorts']['types'][$_G['forum_thread']['sortid']];?>]</a>
                    <?php } ?>
                    <a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>" id="thread_subject"><?php echo $_G['forum_thread']['subject'];?></a>
                </h1>
                <span class="xg1">
                    <?php if($_G['forum_thread']['displayorder'] == -2) { ?>(审核中)
                    <?php } elseif($_G['forum_thread']['displayorder'] == -3) { ?>(已忽略)
                    <?php } elseif($_G['forum_thread']['displayorder'] == -4) { ?>(草稿)
                    <?php } ?>
                    <?php if($_G['forum_thread']['recommendlevel']) { ?>
                        &nbsp;<img src="<?php echo IMGDIR;?>/recommend_<?php echo $_G['forum_thread']['recommendlevel'];?>.gif" alt="" title="评价指数 <?php echo $_G['forum_thread']['recommends'];?>" />
                    <?php } ?>
                    <?php if($_G['forum_thread']['heatlevel']) { ?>
                        &nbsp;<img src="<?php echo IMGDIR;?>/hot_<?php echo $_G['forum_thread']['heatlevel'];?>.gif" alt="" title="<?php echo $_G['forum_thread']['heatlevel'];?> 级热门" />
                    <?php } ?>
                    <?php if($_G['forum_thread']['closed'] == 1) { ?>
                        &nbsp;<img src="<?php echo IMGDIR;?>/locked.gif" alt="关闭" title="关闭" class="vm" />
                    <?php } ?>
                </span>
                <?php if(!empty($_G['setting']['pluginhooks']['viewthread_title_extra'])) echo $_G['setting']['pluginhooks']['viewthread_title_extra'];?>
            </td>
        </tr>
    </table>
    <?php if($_G['forum_thread']['replycredit'] > 0 || $rushreply) { ?>
    <div id="pl_top">
        <table cellspacing="0" cellpadding="0">
            <tr class="ad">
                <td class="pls"></td>
                <td class="plc"></td>
            </tr>
            <?php if($_G['forum_thread']['replycredit'] > 0 ) { ?>
                <tr>
                    <td class="pls vm ptm">
                        <img src="<?php echo IMGDIR;?>/thread_prize_s.png" class="hm" alt="回帖奖励" />
                            <strong><?php echo $_G['forum_thread']['replycredit'];?> <?php echo $_G['setting']['extcredits'][$_G['forum_thread']['replycredit_rule']['extcreditstype']]['unit'];?><?php echo $_G['setting']['extcredits'][$_G['forum_thread']['replycredit_rule']['extcreditstype']]['title'];?></strong>
                    </td>
                    <td class="plc ptm pbm xi1">
                        回复本帖可获得 <?php echo $_G['forum_thread']['replycredit_rule']['extcredits'];?> <?php echo $_G['setting']['extcredits'][$_G['forum_thread']['replycredit_rule']['extcreditstype']]['unit'];?><?php echo $_G['setting']['extcredits'][$_G['forum_thread']['replycredit_rule']['extcreditstype']]['title'];?>奖励! 每人限 <?php echo $_G['forum_thread']['replycredit_rule']['membertimes'];?> 次<?php if($_G['forum_thread']['replycredit_rule']['random'] > 0) { ?><span class="xg1">(中奖概率 <?php echo $_G['forum_thread']['replycredit_rule']['random'];?>%)</span><?php } ?>
                    </td>
                </tr>
                <?php if($rushreply) { ?>
                <tr class="ad">
                    <td class="pls"></td>
                    <td class="plc"></td>
                </tr>
                <?php } ?>
        <?php } ?>

        <?php if($rushreply) { ?>
            <tr>
                <td class="pls vm ptm">
                    <img src="<?php echo IMGDIR;?>/rushreply_s.png" class="vm" alt="抢楼" />
                    <strong>抢楼</strong>
                </td>
                <td class="plc ptm pbm xi1">
                    <?php if($rushresult['rewardfloor']) { ?>
                        <span class="y">
                        <?php if($_G['uid'] == $_G['thread']['authorid'] || $_G['forum']['ismoderator']) { ?><a href="javascript:;" onclick="showWindow('membernum', 'forum.php?mod=ajax&action=get_rushreply_membernum&tid=<?php echo $_G['tid'];?>')" class="y pn xi2"><span>统计参与人数</span></a><?php } ?>
                        <?php if(!$_GET['checkrush']) { ?>
                                <a href="forum.php?mod=viewthread&amp;tid=<?php echo $post['tid'];?>&amp;checkrush=1" rel="nofollow" class="y pn xi2"><span>查看抢中楼层</span></a>
                        <?php } ?>
                        </span>
                    <?php } ?>
                    <?php if($rushresult['creditlimit'] == '') { ?>
                        本帖为抢楼帖，欢迎抢楼!&nbsp;
                    <?php } else { ?>
                        本帖为抢楼帖，<?php echo $rushresult['creditlimit_title'];?>大于<?php echo $rushresult['creditlimit'];?>可以抢楼 &nbsp;
                    <?php } ?>
                    <?php if($rushresult['starttimefrom']) { ?>
                         抢楼开始：<?php echo $rushresult['starttimefrom'];?>&nbsp;
                    <?php } ?>
                    <?php if($rushresult['starttimeto']) { ?>
                        抢楼结束：<?php echo $rushresult['starttimeto'];?>&nbsp;
                    <?php } ?>
                    <?php if($rushresult['stopfloor']) { ?>
                        截止楼层：<?php echo $rushresult['stopfloor'];?>&nbsp;
                    <?php } ?>
                    <?php if($rushresult['rewardfloor']) { ?>
                        奖励楼层: <?php echo $rushresult['rewardfloor'];?>&nbsp;
                    <?php } ?>
                    <?php if($rushresult['rewardfloor'] && $_GET['checkrush']) { ?>
                        <p class="ptn">
                            <?php if($countrushpost) { ?>[<strong><?php echo $countrushpost;?></strong>]个楼层已中奖&nbsp;&nbsp;<?php } ?>
                            <a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>" class="xi2">返回抢楼帖</a>
                        </p>
                    <?php } ?>
                </td>
            </tr>
        <?php } ?>
        </table>
    </div>
    <?php } ?>

    <?php if(!empty($_G['setting']['pluginhooks']['viewthread_title_row'])) echo $_G['setting']['pluginhooks']['viewthread_title_row'];?>

    <table cellspacing="0" cellpadding="0" class="ad"><tr><td pgs mbm cl pbm bbs ></td><td class="plc"></td></tr></table>
    <?php $postcount = 0;?>    <?php if(is_array($postlist)) foreach($postlist as $post) { ?>            <?php if($rushreply && $_GET['checkrush'] && $post['rewardfloor'] != 1) { ?>
                <?php continue;?>            <?php } ?>
            <div id="post_<?php echo $post['pid'];?>">
                <?php $needhiddenreply = ($hiddenreplies && $_G['uid'] != $post['authorid'] && $_G['uid'] != $_G['forum_thread']['authorid'] && !$post['first'] && !$_G['forum']['ismoderator']);?><?php
$authorverifys = <<<EOF


EOF;
 if($_G['setting']['verify']['enabled']) { 
$authorverifys .= <<<EOF

    
EOF;
 if(is_array($_G['setting']['verify'])) foreach($_G['setting']['verify'] as $vid => $verify) { 
$authorverifys .= <<<EOF
        
EOF;
 if($verify['available'] && $verify['showicon']) { 
$authorverifys .= <<<EOF

            <a href="home.php?mod=spacecp&amp;ac=profile&amp;op=verify&amp;vid={$vid}" target="_blank">
            
EOF;
 if($post['verify'.$vid] == 1) { 
$authorverifys .= <<<EOF

                
EOF;
 if(!empty($verify['icon'])) { 
$authorverifys .= <<<EOF
<img src="{$verify['icon']}" class="vm" alt="{$verify['title']}" title="{$verify['title']}" />
EOF;
 } else { 
$authorverifys .= <<<EOF
{$verify['title']}
EOF;
 } 
$authorverifys .= <<<EOF

            
EOF;
 } elseif(!empty($verify['unverifyicon'])) { 
$authorverifys .= <<<EOF

                <img src="{$verify['unverifyicon']}" class="vm" alt="{$verify['title']}" title="{$verify['title']}" />
            
EOF;
 } 
$authorverifys .= <<<EOF
</a>&nbsp;
        
EOF;
 } 
$authorverifys .= <<<EOF

    
EOF;
 } } 
$authorverifys .= <<<EOF


EOF;
?>
<?php if($post['first'] &&  $_G['forum_threadstamp']) { ?>
    <div id="threadstamp"><img src="<?php echo STATICURL;?>image/stamp/<?php echo $_G['forum_threadstamp']['url'];?>" title="<?php echo $_G['forum_threadstamp']['text'];?>" /></div>
<?php } if(empty($post['deleted'])) { ?>
<table id="pid<?php echo $post['pid'];?>" summary="pid<?php echo $post['pid'];?>" cellspacing="0" cellpadding="0">
<tr>
    <td class="pls" rowspan="2"  style="background-color:#f5f5f5">
        <?php echo $post['newpostanchor'];?> <?php echo $post['lastpostanchor'];?>
        <?php if($post['authorid'] && $post['username'] && !$post['anonymous']) { ?>
            <div class="p_pop blk bui" id="userinfo<?php echo $post['pid'];?>" style="display: none; <?php if($_G['setting']['authoronleft']) { ?>margin-top: -11px;<?php } ?>">
                <div class="m z">
                    <div id="userinfo<?php echo $post['pid'];?>_ma"></div>
                    <?php if(!empty($_G['setting']['pluginhooks']['viewthread_profileside'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_profileside'][$postcount];?>
                </div>
                <div class="i y">
                    <div>
                        <strong><a href="home.php?mod=space&amp;uid=<?php echo $post['authorid'];?>" target="_blank" class="xi2"><?php echo $post['author'];?></a></strong>
                        <?php if($_G['setting']['vtonlinestatus'] && $post['authorid']) { ?>
                            <?php if(($_G['setting']['vtonlinestatus'] == 2 && $_G['forum_onlineauthors'][$post['authorid']]) || ($_G['setting']['vtonlinestatus'] == 1 && (TIMESTAMP - $post['lastactivity'] <= 10800) && !$post['authorinvisible'])) { ?>
                                <em>当前在线</em>
                            <?php } else { ?>
                                <em>当前离线</em>
                            <?php } ?>
                        <?php } ?>
                    </div>
                    <dl class="cl"><?php echo $post['custominfo']['menu'];?></dl>
                    <div class="imicn">
                        <?php if($post['qq'] && !$post['privacy']['profile']['qq']) { ?><a href="http://wpa.qq.com/msgrd?V=1&amp;Uin=<?php echo $post['qq'];?>&amp;Site=<?php echo $_G['setting']['bbname'];?>&amp;Menu=yes" target="_blank" title="QQ"><img src="<?php echo IMGDIR;?>/qq.gif" alt="QQ" /></a><?php } ?>
                        <?php if($post['icq'] && !$post['privacy']['profile']['icq']) { ?><a href="http://wwp.icq.com/scripts/search.dll?to=<?php echo $post['icq'];?>" target="_blank" title="ICQ"><img src="<?php echo IMGDIR;?>/icq.gif" alt="ICQ" /></a><?php } ?>
                        <?php if($post['yahoo'] && !$post['privacy']['profile']['yahoo']) { ?><a href="http://edit.yahoo.com/config/send_webmesg?.target=<?php echo $post['yahoo'];?>&amp;.src=pg" target="_blank" title="Yahoo"><img src="<?php echo IMGDIR;?>/yahoo.gif" alt="Yahoo!"  /></a><?php } ?>
                        <?php if($post['taobao'] && !$post['privacy']['profile']['taobao']) { ?><a href="javascript:;" onclick="window.open('http://amos.im.alisoft.com/msg.aw?v=2&uid='+encodeURIComponent('<?php echo $post['taobaoas'];?>')+'&site=cntaobao&s=2&charset=utf-8')" title="阿里旺旺"><img src="<?php echo IMGDIR;?>/taobao.gif" alt="阿里旺旺" /></a><?php } ?>
                        <?php if($post['site'] && !$post['privacy']['profile']['site']) { ?><a href="<?php echo $post['site'];?>" target="_blank" title="查看个人网站"><img src="<?php echo IMGDIR;?>/forumlink.gif" alt="查看个人网站" /></a><?php } ?>
                        <a href="home.php?mod=space&amp;uid=<?php echo $post['authorid'];?>&amp;do=profile" target="_blank" title="查看详细资料"><img src="<?php echo IMGDIR;?>/userinfo.gif" alt="查看详细资料" /></a>
                        <?php if(!empty($_G['setting']['pluginhooks']['viewthread_imicons'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_imicons'][$postcount];?>
                        <?php if($_G['setting']['magicstatus']) { ?>
                            <?php if(!empty($_G['setting']['magics']['showip'])) { ?>
                                <a href="home.php?mod=magic&amp;mid=showip&amp;idtype=user&amp;id=<?php echo rawurlencode($post['author']); ?>" id="a_showip_li_<?php echo $post['pid'];?>" class="xi2" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>/image/magic/showip.small.gif" alt="" /> <?php echo $_G['setting']['magics']['showip'];?></a>
                            <?php } ?>
                            <?php if(!empty($_G['setting']['magics']['checkonline']) && $post['authorid'] != $_G['uid']) { ?>
                                <a href="home.php?mod=magic&amp;mid=checkonline&amp;idtype=user&amp;id=<?php echo rawurlencode($post['author']); ?>" id="a_repent_<?php echo $post['pid'];?>" class="xi2" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>/image/magic/checkonline.small.gif" alt="" /> <?php echo $_G['setting']['magics']['checkonline'];?></a>
                            <?php } ?>
                            <?php if(!empty($_G['setting']['pluginhooks']['viewthread_magic_user'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_magic_user'][$postcount];?>
                        <?php } ?>
                    </div>
                    <div id="avatarfeed"><span id="threadsortswait"></span></div>
                </div>
            </div>
        <?php } ?>
        <?php if($post['authorid'] && $post['username'] && !$post['anonymous']) { ?>
            <div>
            <?php if($_G['setting']['authoronleft']) { ?>
                <div  style="text-align:center">
                    <div class="authi">
                    <?php if($post['authortitle']=='版主') { ?>
                    <a href="home.php?mod=spacecp&amp;ac=usergroup&amp;gid=<?php echo $post['groupid'];?>" target="_blank"><?php echo $post['authortitle'];?></a>
                    <?php } ?>
                    <a href="home.php?mod=space&amp;uid=<?php echo $post['authorid'];?>" target="_blank" class="xw1" style="color:#06F;font-size:14px"><?php echo $post['author'];?></a></div>
                </div>
            <?php } ?>
            <?php if($_G['setting']['bannedmessages'] & 2 && ($post['memberstatus'] == '-1' || ($post['authorid'] && !$post['username']) || ($post['groupid'] == 4 || $post['groupid'] == 5) || ($post['status'] & 1))) { ?>
                <div class="avatar">头像被屏蔽</div>
            <?php } elseif($post['avatar'] && $showavatars) { ?>
                <?php if($post['mobiletype']) { ?>
                <div class="mobile-type mobile-type-<?php echo $post['mobiletype'];?>">
                    <a href="misc.php?mod=mobile" tip="该帖通过手机客户端发布" onmouseover="showTip(this)"></a>
                </div>
                <?php } ?>
                <div align="center" style=" margin: 10px 15px;"><a href="home.php?mod=space&amp;uid=<?php echo $post['authorid'];?>" target="_blank"><?php echo $post['avatar'];?></a></div>
            <?php } ?>
            <!-----------------------------------------------发帖人start--------------------------------------------------->

            <!-----------------------------------------------发帖人end--------------------------------------------------->
            <div class="tns xg2">
                <!--------------------------------------主题，积分，听众-------------------------------------------->
                <span style="padding-left:15px;background:url('http://m1.auto.itc.cn/res/themes/default/img/icon.png') no-repeat scroll 0 -405px transparent"><em><a id="followmod" onclick="showWindow(this.id, this.href, 'get', 0);" href="home.php?mod=spacecp&amp;ac=follow&amp;op=add&amp;hash=389af2fe&amp;fuid=<?php echo $post['authorid'];?>" class="xi2">加关注</a></em></span>
                
                <span style="padding-left:15px;background:url('http://m1.auto.itc.cn/res/themes/default/img/icon.png') no-repeat scroll 0 -460px transparent"><em><a id="a_sendpm_<?php echo $post['authorid'];?>" title="发送消息" onclick="showWindow('showMsgBox', this.href, 'get', 0)" href="home.php?mod=spacecp&amp;ac=pm&amp;op=showmsg&amp;handlekey=showmsg_8&amp;touid=<?php echo $post['authorid'];?>&amp;pmid=0&amp;daterange=2" class="xi2">发送消息</a></em></span>
                <!-------------------------------------主题，积分，听众--------------------------------------------->
            </div>
            <?php if(!empty($_G['setting']['pluginhooks']['viewthread_avatar'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_avatar'][$postcount];?>
            <?php if($post['groupicon']) { ?>
            <span style="padding-left:20px;position:relative;top:-4px;"><a href="home.php?mod=spacecp&amp;ac=usergroup&amp;gid=<?php echo $post['groupid'];?>" target="_blank"><?php echo $post['groupicon'];?></a></span>
            <span style="padding-left:10px"><?php echo $authorverifys;?></span>
            <?php } else { ?>
            <span style="padding-left:30px;position:relative;top:-4px;width:40px;height:20px;"></span>
            <span style="padding-left:10px"><?php echo $authorverifys;?></span>
            <?php } ?>
            
            <?php if($post['customstatus']) { ?><p class="xg1"><?php echo $post['customstatus'];?></p><?php } ?>
            </div>
            <?php if($post['upgradecredit'] !== false) { ?>
                <div id="g_up<?php echo $post['pid'];?>_menu" class="tip tip_4" style="display: none;">
                    <div class="tip_horn"></div>
                    <div class="tip_c"><?php echo $post['authortitle'];?>, 积分 <?php echo $post['credits'];?>, 距离下一级还需 <?php echo $post['upgradecredit'];?> 积分</div>
                </div>
            <?php } ?>
            <?php if(!empty($_G['setting']['pluginhooks']['viewthread_sidetop'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_sidetop'][$postcount];?>
                <ul><li  style="width:130px; padding-left:20px;"><em>来&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自：<?php echo $post['resideprovince'];?></em></li></ul>
                <ul><li  style="width:130px; padding-left:20px;"><em>爱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车：<?php echo $post['field1'];?></em></li></ul>
                <ul><li  style="width:130px; padding-left:20px;"><em>注册时间：</em><?php echo $post['regdate'];?></li></ul>
            <?php if($post['medals']) { ?>
                <p class="md_ctrl">
                    <a href="home.php?mod=medal">
                        <?php if(is_array($post['medals'])) foreach($post['medals'] as $medal) { ?>                        <img id="md_<?php echo $post['pid'];?>_<?php echo $medal['medalid'];?>" src="<?php echo STATICURL;?>image/common/<?php echo $medal['image'];?>" alt="<?php echo $medal['name'];?>" title="" onmouseover="showMenu({'ctrlid':this.id, 'menuid':'md_<?php echo $medal['medalid'];?>_menu', 'pos':'12!'});" />
                        <?php } ?>
                    </a>
                </p>
            <?php } ?>
            <?php if(!empty($_G['setting']['pluginhooks']['viewthread_sidebottom'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_sidebottom'][$postcount];?>
        <?php } elseif(getstatus($post['status'], 5)) { ?>
            <?php if($_G['setting']['authoronleft']) { ?>
            <div class="pi">
                <div class="authi"><a href="javascript:;" class="xw1"><?php echo $post['author'];?></a></div>
            </div>
            <?php } ?>
            <?php if($showavatars) { ?>
            <div>
                <div class="avatar"><a href="javascript:;"><?php echo $post['avatar'];?></a></div>
            </div>
            <?php } ?>
        <?php } else { ?>
            <div class="pi">
            <?php if(!$post['authorid']) { ?>
                <a href="javascript:;"><?php echo $_G['setting']['anonymoustext'];?> <em><?php echo $post['useip'];?></em></a>
            <?php } elseif($post['authorid'] && $post['username'] && $post['anonymous']) { ?>
                <?php if($_G['forum']['ismoderator']) { ?><a href="home.php?mod=space&amp;uid=<?php echo $post['authorid'];?>" target="_blank"><?php echo $_G['setting']['anonymoustext'];?></a><?php } else { ?><?php echo $_G['setting']['anonymoustext'];?><?php } ?>
            <?php } else { ?>
                <?php echo $post['author'];?> <em>该用户已被删除</em>
            <?php } ?>
            </div>
        <?php } ?>
    </td>
    <td class="plc">
        <div class="pi">
            <?php if(!IS_ROBOT) { ?>
                <?php if($post['warned']) { ?>
                    <a href="forum.php?mod=misc&amp;action=viewwarning&amp;tid=<?php echo $_G['tid'];?>&amp;uid=<?php echo $post['authorid'];?>" title="受到警告" class="y" onclick="showWindow('viewwarning', this.href)"><img src="<?php echo IMGDIR;?>/warning.gif" alt="受到警告" /></a>
                <?php } ?>
                <strong>
                    <a href="<?php if($post['first']) { ?>forum.php?mod=viewthread&tid=<?php echo $_G['tid'];?><?php echo $fromuid;?><?php } else { ?>forum.php?mod=redirect&goto=findpost&ptid=<?php echo $_G['tid'];?>&pid=<?php echo $post['pid'];?><?php echo $fromuid;?><?php } ?>" title="您的朋友访问此链接后，您将获得相应的积分奖励" id="postnum<?php echo $post['pid'];?>" onclick="setCopy(this.href, '帖子地址复制成功');return false;"><?php if(!empty($postno[$post['number']])) { ?><?php echo $postno[$post['number']];?><?php } else { ?><em><?php echo $post['number'];?></em><?php echo $postno['0'];?><?php } ?></a>
                </strong>
            <?php } ?>
            <div class="pti">
                <div class="pdbt">
                    <?php if(!$post['first'] && $post['rewardfloor']) { ?>
                        <label class="pdbts pdbts_1">
                            <a href="forum.php?mod=viewthread&amp;tid=<?php echo $post['tid'];?>&amp;checkrush=1" rel="nofollow" title="查看抢中楼层" class="v">恭喜</a>
                            <a href="forum.php?mod=viewthread&amp;tid=<?php echo $post['tid'];?>&amp;checkrush=1" rel="nofollow" title="查看抢中楼层" class="b">抢中本楼</a>
                        </label>
                    <?php } ?>
                    <?php if(!$post['first'] && $_G['forum_thread']['special'] == 5) { ?>
                        <label class="pdbts pdbts_<?php echo intval($post['stand']); ?>">
                            <?php if($post['stand'] == 1) { ?><a class="v" href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;filter=debate&amp;stand=1" title="只看正方">正方</a>
                                <?php } elseif($post['stand'] == 2) { ?><a class="v" href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;filter=debate&amp;stand=2" title="只看反方">反方</a>
                                <?php } else { ?><a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;filter=debate&amp;stand=0" title="只看中立">中立</a><?php } ?>
                            <?php if($post['stand']) { ?>
                                <a class="b" href="forum.php?mod=misc&amp;action=debatevote&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $post['pid'];?>" id="voterdebate_<?php echo $post['pid'];?>" onclick="ajaxmenu(this);doane(event);">支持 <?php echo $post['voters'];?></a>
                            <?php } ?>
                        </label>
                    <?php } ?>
                </div>
                <div class="authi">
                <?php if(!$post['anonymous'] && $_G['cache']['groupicon'][$post['groupid']]) { ?>
                    <img class="authicn vm" id="authicon<?php echo $post['pid'];?>" src="<?php echo $_G['cache']['groupicon'][$post['groupid']];?>" />
                <?php } else { ?>
                    <img class="authicn vm" id="authicon<?php echo $post['pid'];?>" src="<?php echo $_G['cache']['groupicon']['0'];?>" />
                <?php } ?>
                <?php if($post['authorid'] && !$post['anonymous']) { ?>
                    <?php if(!$_G['setting']['authoronleft']) { ?><a href="home.php?mod=space&amp;uid=<?php echo $post['authorid'];?>" target="_blank" class="xi2"><?php echo $post['author'];?></a><?php echo $authorverifys;?><?php } ?>
                    <em id="authorposton<?php echo $post['pid'];?>">发表时间 <?php echo $post['dateline'];?></em>
                    <?php if($post['status'] & 8) { ?>
                        <span class="xg1"><?php if($_G['setting']['mobile']['mobilecomefrom']) { ?><?php echo $_G['setting']['mobile']['mobilecomefrom'];?><?php } else { ?>来自手机<?php } ?></span>
                    <?php } ?>
                    <?php if($post['invisible'] == 0) { ?>
                        <?php if(!IS_ROBOT && !$_GET['authorid'] && !$_G['forum_thread']['archiveid']) { ?>
                            <span class="pipe">|</span><a href="forum.php?mod=viewthread&amp;tid=<?php echo $post['tid'];?>&amp;page=<?php echo $page;?>&amp;authorid=<?php echo $post['authorid'];?>" rel="nofollow">只看楼主</a>
                        <?php } elseif(!$_G['forum_thread']['archiveid']) { ?>
                            <span class="pipe">|</span><a href="forum.php?mod=viewthread&amp;tid=<?php echo $post['tid'];?>&amp;page=<?php echo $page;?>" rel="nofollow">查看全部</a>
                        <?php } ?>
                    <?php } ?>
                <?php } elseif(getstatus($post['status'], 5)) { ?>
                    <?php if(!$_G['setting']['authoronleft']) { ?><a href="javascript:;" class="xi2"><?php echo $post['author'];?></a><?php } ?>
                    &nbsp;<em id="authorposton<?php echo $post['pid'];?>">发表于 <?php echo $post['dateline'];?></em>
                <?php } elseif($post['authorid'] && $post['username'] && $post['anonymous'] || !$post['authorid'] && !$post['username']) { ?>
                    <?php echo $_G['setting']['anonymoustext'];?>&nbsp;
                    <em id="authorposton<?php echo $post['pid'];?>">发表于 <?php echo $post['dateline'];?></em>
                <?php } ?>
                <?php if(!IS_ROBOT && !$_G['forum_thread']['archiveid'] && $post['first'] ) { ?>
                    <?php if(!$rushreply) { ?>
                        <?php if($ordertype != 1) { ?>
                            <span class="pipe">|</span><a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;ordertype=1">倒序浏览</a>
                        <?php } else { ?>
                            <span class="pipe">|</span><a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;ordertype=2">正序浏览</a>
                        <?php } ?>
                    <?php } ?>
                    <?php if($thread['authorid'] == $_G['uid']) { ?>
                        <span class="pipe">|</span>
                        <?php if($replynotice == 1) { ?>
                            <a id="replynotice" href="forum.php?mod=misc&amp;action=replynotice&amp;op=ignore&amp;tid=<?php echo $_G['tid'];?>" status="1" onclick="ajaxmenu(this, 3000, 0, 0, '43', function () {replyNotice();});return false;">取消回复通知</a>
                        <?php } else { ?>
                            <a id="replynotice" href="forum.php?mod=misc&amp;action=replynotice&amp;op=receive&amp;tid=<?php echo $_G['tid'];?>" status="0" onclick="ajaxmenu(this, 3000, 0, 0, '43', function () {replyNotice();});return false;">接收回复通知</a>
                        <?php } ?>
                    <?php } ?>
                <?php } ?>
                <?php if(!empty($_G['setting']['pluginhooks']['viewthread_postheader'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_postheader'][$postcount];?>
                </div>
            </div>
        </div>

        <?php $ad_a_pr=adshow("thread/a_pr/3/$postcount");?>        <div class="pct">
            <?php echo adshow("thread/a_pt/2/$postcount");?>            <?php if(!$_G['inajax']) { ?>
                <?php if(empty($ad_a_pr_css)) { ?>
                    <style type="text/css">.pcb{margin-right:0}</style>
                    <?php $ad_a_pr_css=1;?>                <?php } ?>
            <?php } ?>

            <?php if(!$post['first'] && $post['replycredit'] > 0) { ?>
                <div class="cm">
                    <h3 class="psth xs1">
                        回帖奖励 <span class="xw1 xs2 xi1">+<?php echo $post['replycredit'];?></span> <?php echo $_G['setting']['extcredits'][$_G['forum_thread']['replycredit_rule']['extcreditstype']]['unit'];?><?php echo $_G['setting']['extcredits'][$_G['forum_thread']['replycredit_rule']['extcreditstype']]['title'];?>
                    </h3>
                </div>
            <?php } ?>

            <div class="pcb">
<?php if(!$_G['forum']['ismoderator'] && $_G['setting']['bannedmessages'] & 1 && (($post['authorid'] && !$post['username']) || ($_G['thread']['digest'] == 0 && ($post['groupid'] == 4 || $post['groupid'] == 5 || $post['memberstatus'] == '-1')))) { ?>
<div class="locked">提示: <em>作者被禁止或删除 内容自动屏蔽</em></div>
<?php } elseif(!$_G['forum']['ismoderator'] && $post['status'] & 1) { ?>
<div class="locked">提示: <em>该帖被管理员或版主屏蔽</em></div>
<?php } elseif($needhiddenreply) { ?>
<div class="locked">此帖仅作者可见</div>
<?php } elseif($post['first'] && $_G['forum_threadpay']) { include template('forum/viewthread_pay'); } else { if(!$post['first'] && !empty($post['subject'])) { ?>
<h2><?php echo $post['subject'];?></h2>
<?php } ?>
<?php if(!empty($_G['setting']['pluginhooks']['viewthread_posttop'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_posttop'][$postcount];?>
<?php if($_G['setting']['bannedmessages'] & 1 && (($post['authorid'] && !$post['username']) || ($_G['thread']['digest'] == 0 && ($post['groupid'] == 4 || $post['groupid'] == 5 || $post['memberstatus'] == '-1')))) { ?>
<div class="locked">提示: <em>作者被禁止或删除 内容自动屏蔽，只有管理员或有管理权限的成员可见</em></div>
<?php } elseif($post['status'] & 1) { ?>
<div class="locked">提示: <em>该帖被管理员或版主屏蔽，只有管理员或有管理权限的成员可见</em></div>
<?php } if(!$post['first'] && $hiddenreplies && $_G['forum']['ismoderator']) { ?>
<div class="locked">此帖仅作者可见</div>
<?php } if($post['first']) { if($_G['forum_thread']['price'] > 0 && $_G['forum_thread']['special'] == 0) { ?>
<div class="locked"><em class="y"><a href="forum.php?mod=misc&amp;action=viewpayments&amp;tid=<?php echo $_G['tid'];?>" onclick="showWindow('pay', this.href)">记录</a></em>付费主题, 价格: <strong><?php echo $_G['forum_thread']['price'];?> <?php echo $_G['setting']['extcredits'][$_G['setting']['creditstransextra']['1']]['unit'];?><?php echo $_G['setting']['extcredits'][$_G['setting']['creditstransextra']['1']]['title'];?> </strong></div>
<?php } if($threadsort && $threadsortshow) { if($threadsortshow['typetemplate']) { ?>
<?php echo $threadsortshow['typetemplate'];?>
<?php } elseif($threadsortshow['optionlist']) { ?>
<div class="typeoption">
<?php if($threadsortshow['optionlist'] == 'expire') { ?>
该信息已经过期
<?php } else { ?>
<table summary="分类信息" cellpadding="0" cellspacing="0" class="cgtl mbm">
<caption><?php echo $_G['forum']['threadsorts']['types'][$_G['forum_thread']['sortid']];?></caption>
<tbody><?php if(is_array($threadsortshow['optionlist'])) foreach($threadsortshow['optionlist'] as $option) { if($option['type'] != 'info') { ?>
<tr>
<th><?php echo $option['title'];?>:</th>
<td><?php if($option['value']) { ?><?php echo $option['value'];?> <?php echo $option['unit'];?><?php } else { ?>-<?php } ?></td>
</tr>
<?php } } ?>
</tbody>
</table>
<?php } ?>
</div>
<?php } } } ?>
<div class="<?php if(!$_G['forum_thread']['special']) { ?>t_fsz<?php } else { ?>pcbs<?php } ?>">
<?php if($post['first']) { if(!$_G['forum_thread']['special']) { ?>
<table cellspacing="0" cellpadding="0"><tr><td class="t_f" id="postmessage_<?php echo $post['pid'];?>">
<?php if(!$_G['inajax']) { if($ad_a_pr) { ?>
<?php echo $ad_a_pr;?>
<?php } } ?>
<?php echo $post['message'];?></td></tr></table>
<?php } elseif($_G['forum_thread']['special'] == 1) { include template('forum/viewthread_poll'); } elseif($_G['forum_thread']['special'] == 2) { include template('forum/viewthread_trade'); } elseif($_G['forum_thread']['special'] == 3) { include template('forum/viewthread_reward'); } elseif($_G['forum_thread']['special'] == 4) { include template('forum/viewthread_activity'); } elseif($_G['forum_thread']['special'] == 5) { include template('forum/viewthread_debate'); } elseif($_G['forum_thread']['special'] == 127) { ?>
<?php echo $threadplughtml;?>
<table cellspacing="0" cellpadding="0"><tr><td class="t_f" id="postmessage_<?php echo $post['pid'];?>"><?php echo $post['message'];?></td></tr></table>
<?php } } else { ?>
<table cellspacing="0" cellpadding="0"><tr><td class="t_f" id="postmessage_<?php echo $post['pid'];?>">
<?php if(!$_G['inajax']) { if($ad_a_pr) { ?>
<?php echo $ad_a_pr;?>
<?php } } if($post['invisible'] != '-2' || $_G['forum']['ismoderator']) { ?><?php echo $post['message'];?><?php } else { ?><span class="xg1">待审核</span><?php } ?></td></tr></table>
<?php } if($post['attachment']) { ?>
<div class="attach_nopermission">
<div>
<h3>本帖子中包含更多资源</h3>
<p><?php if($_G['uid']) { ?>您所在的用户组无法下载或查看附件<?php } elseif($_G['connectguest']) { ?>您需要 <a href="member.php?mod=connect" class="xi2">完善帐号信息</a> 或 <a href="member.php?mod=connect&amp;ac=bind" class="xi2">绑定已有帐号</a> 后才可以下载或查看<?php } else { ?>您需要 <a href="member.php?mod=logging&amp;action=login" onclick="showWindow('login', this.href);return false;">登录</a> 才可以下载或查看，没有帐号？<a href="member.php?mod=<?php echo $_G['setting']['regname'];?>" title="注册帐号"><?php echo $_G['setting']['reglinkname'];?></a> <?php if(!empty($_G['setting']['pluginhooks']['global_login_text'])) echo $_G['setting']['pluginhooks']['global_login_text'];?><?php } ?></p>
</div>
</div>
<?php } elseif($post['imagelist'] || $post['attachlist']) { ?>
<div class="pattl">
<?php if($post['imagelist'] && $_G['setting']['imagelistthumb'] && $post['imagelistcount'] >= $_G['setting']['imagelistthumb']) { if(!isset($imagelistkey)) { ?><?php $imagelistkey = rawurlencode(md5($_G[tid].'|100|100'))?><script type="text/javascript" reload="1">var imagelistkey = '<?php echo $imagelistkey;?>';</script>
<?php } ?><?php $post['imagelistthumb'] = true;?><div class="bbda cl mtw mbm pbm">
<strong>更多图片</strong>
<a href="javascript:;" onclick="attachimglst('<?php echo $post['pid'];?>', 0)" class="xi2 attl_g">小图</a>
<a href="javascript:;" onclick="attachimglst('<?php echo $post['pid'];?>', 1, <?php echo intval($_G['setting']['lazyload']); ?>)" class="xi2 attl_m">大图</a>
</div>
<div id="imagelist_<?php echo $post['pid'];?>" class="cl" style="display:none"><?php echo showattach($post, 1); ?></div>
<div id="imagelistthumb_<?php echo $post['pid'];?>" class="pattl_c cl"><img src="<?php echo IMGDIR;?>/loading.gif" width="16" height="16" class="vm" /> 组图打开中，请稍候......</div>
<?php } else { echo showattach($post, 1); } if($post['attachlist']) { echo showattach($post); } ?>
</div>
<?php } ?>
</div>
<?php if($post['first'] && $sticklist) { ?>
<div>
<h3 class="psth xs1">回帖推荐</h3><?php if(is_array($sticklist)) foreach($sticklist as $rpost) { ?><div class="pstl xs1">
<div class="psta"><a href="home.php?mod=space&amp;uid=<?php echo $rpost['authorid'];?>" c="1"><?php echo $rpost['avatar'];?></a></div>
<div class="psti">
<p>
<a href="home.php?mod=space&amp;uid=<?php echo $rpost['authorid'];?>" class="xi2 xw1"><?php echo $rpost['author'];?></a> <a href="javascript:;" onclick="window.open('forum.php?mod=redirect&goto=findpost&ptid=<?php echo $rpost['tid'];?>&pid=<?php echo $rpost['pid'];?>')" class="xi2">查看楼层</a>
<?php if($_G['group']['allowstickreply'] || $_G['forum_thread']['authorid'] == $_G['uid']) { ?>&nbsp;<a href="javascript:;" onclick="modaction('stickreply', <?php echo $rpost['pid'];?>, '&undo=yes')" class="xi2">解除置顶</a><?php } ?>
</p>
<div class="mtn"><?php echo $rpost['message'];?></div>
</div>
</div>
<?php } ?>
</div>
<?php } ?>
<div id="comment_<?php echo $post['pid'];?>" class="cm">
<?php if($_G['setting']['commentnumber'] && !empty($comments[$post['pid']])) { ?>
<h3 class="psth xs1">点评</h3>
<?php if($totalcomment[$post['pid']]) { ?><div class="pstl"><?php echo $totalcomment[$post['pid']];?></div><?php } if(is_array($comments[$post['pid']])) foreach($comments[$post['pid']] as $comment) { ?><div class="pstl xs1">
<div class="psta"><a href="home.php?mod=space&amp;uid=<?php echo $comment['authorid'];?>" c="1"><?php echo $comment['avatar'];?></a></div>
<div class="psti">
<?php if($comment['authorid']) { ?>
<a href="home.php?mod=space&amp;uid=<?php echo $comment['authorid'];?>" class="xi2 xw1"><?php echo $comment['author'];?></a>
<?php } else { ?>
游客
<?php } ?>
&nbsp;<?php echo $comment['comment'];?>&nbsp;
<?php if($comment['rpid']) { ?>
<a href="forum.php?mod=redirect&amp;goto=findpost&amp;pid=<?php echo $comment['rpid'];?>&amp;ptid=<?php echo $_G['tid'];?>" class="xi2">详情</a>
<a href="forum.php?mod=post&amp;action=reply&amp;fid=<?php echo $_G['fid'];?>&amp;tid=<?php echo $_G['tid'];?>&amp;repquote=<?php echo $comment['rpid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;page=<?php echo $page;?><?php if($_GET['from']) { ?>&amp;from=<?php echo $_GET['from'];?><?php } ?>" class="xi2" onclick="showWindow('reply', this.href)">回复</a>
<?php } ?>
<span class="xg1">
发表于 <?php echo dgmdate($comment[dateline], 'u');?><?php if($comment['useip'] && $_G['group']['allowviewip']) { ?>&nbsp;IP:<?php echo $comment['useip'];?><?php } if($_G['forum']['ismoderator'] && $_G['group']['allowdelpost']) { ?>&nbsp;<a href="javascript:;" onclick="modaction('delcomment', <?php echo $comment['id'];?>)">删除</a><?php } ?>
</span>
</div>
</div>
<?php } if($commentcount[$post['pid']] > $_G['setting']['commentnumber']) { ?><div class="pgs mbm cl"><div class="pg"><a href="javascript:;" class="nxt" onclick="ajaxget('forum.php?mod=misc&action=commentmore&tid=<?php echo $post['tid'];?>&pid=<?php echo $post['pid'];?>&page=2', 'comment_<?php echo $post['pid'];?>')">下一页</a></div></div><?php } } ?>
</div>
<?php if(!empty($_G['setting']['pluginhooks']['viewthread_postbottom'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_postbottom'][$postcount];?>
<?php if(!empty($post['ratelog'])) { ?>
<dl id="ratelog_<?php echo $post['pid'];?>" class="rate<?php if(!empty($_G['cookie']['ratecollapse'])) { ?> rate_collapse<?php } ?>">
<?php if($_G['setting']['ratelogon']) { ?>
<dd style="margin:0">
<?php } else { ?>
<dt>
<?php if(!empty($postlist[$post['pid']]['totalrate'])) { ?>
<strong><a href="forum.php?mod=misc&amp;action=viewratings&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $post['pid'];?>" onclick="showWindow('viewratings', this.href)" title="已有<?php echo count($postlist[$post['pid']]['totalrate']);; ?>人评分, 查看全部评分"><?php echo count($postlist[$post['pid']]['totalrate']);; ?></a></strong>
<p><a href="forum.php?mod=misc&amp;action=viewratings&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $post['pid'];?>" onclick="showWindow('viewratings', this.href)">查看全部评分</a></p>
<?php } ?>
</dt>
<dd>
<?php } ?>
<div id="post_rate_<?php echo $post['pid'];?>"></div>
<?php if($_G['setting']['ratelogon']) { ?>
<table class="ratl">
<tr>
<th class="xw1" width="120"><a href="forum.php?mod=misc&amp;action=viewratings&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $post['pid'];?>" onclick="showWindow('viewratings', this.href)" title="查看全部评分">已有 <span class="xi1"><?php echo count($postlist[$post['pid']]['totalrate']);; ?></span> 人评分</a></th><?php if(is_array($post['ratelogextcredits'])) foreach($post['ratelogextcredits'] as $id => $score) { ?><th width="50"><i><?php echo $_G['setting']['extcredits'][$id]['title'];?></i></th>
<?php } ?>
<th>
<a href="javascript:;" onclick="toggleRatelogCollapse('ratelog_<?php echo $post['pid'];?>', this);" class="y xi2 op"><?php if(!empty($_G['cookie']['ratecollapse'])) { ?>展开<?php } else { ?>收起<?php } ?></a>
<i>理由</i>
</th>
</tr>
<tbody class="ratl_l"><?php if(is_array($post['ratelog'])) foreach($post['ratelog'] as $uid => $ratelog) { ?><tr id="rate_<?php echo $post['pid'];?>_<?php echo $uid;?>">
<td>
<a href="home.php?mod=space&amp;uid=<?php echo $uid;?>" target="_blank"><?php echo avatar($uid, 'small');; ?></a> <a href="home.php?mod=space&amp;uid=<?php echo $uid;?>" target="_blank"><?php echo $ratelog['username'];?></a>
</td><?php if(is_array($post['ratelogextcredits'])) foreach($post['ratelogextcredits'] as $id => $score) { if($ratelog['score'][$id] > 0) { ?>
<td class="xi1"> + <?php echo $ratelog['score'][$id];?></td>
<?php } else { ?>
<td class="xg1"><?php echo $ratelog['score'][$id];?></td>
<?php } } ?>
<td class="xg1"><?php echo $ratelog['reason'];?></td>
</tr>
<?php } ?>
</tbody>
</table>
<p class="ratc">
总评分:&nbsp;<?php if(is_array($post['ratelogextcredits'])) foreach($post['ratelogextcredits'] as $id => $score) { if($score > 0) { ?>
<span class="xi1"><?php echo $_G['setting']['extcredits'][$id]['title'];?> + <?php echo $score;?></span>&nbsp;
<?php } else { ?>
<span class="xg1"><?php echo $_G['setting']['extcredits'][$id]['title'];?> <?php echo $score;?></span>&nbsp;
<?php } } ?>
&nbsp;<a href="forum.php?mod=misc&amp;action=viewratings&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $post['pid'];?>" onclick="showWindow('viewratings', this.href)" title="查看全部评分" class="xi2">查看全部评分</a>
</p>
<?php } else { ?>
<ul class="cl"><?php if(is_array($post['ratelog'])) foreach($post['ratelog'] as $uid => $ratelog) { ?><li>
<p id="rate_<?php echo $post['pid'];?>_<?php echo $uid;?>" onmouseover="showTip(this)" tip="<strong><?php echo $ratelog['reason'];?></strong>&nbsp;<?php if(is_array($ratelog['score'])) foreach($ratelog['score'] as $id => $score) { if($score > 0) { ?>
<em class='xi1'><?php echo $_G['setting']['extcredits'][$id]['title'];?> + <?php echo $score;?> <?php echo $_G['setting']['extcredits'][$id]['unit'];?></em>
<?php } else { ?>
<span><?php echo $_G['setting']['extcredits'][$id]['title'];?> <?php echo $score;?> <?php echo $_G['setting']['extcredits'][$id]['unit'];?></span>
<?php } } ?>" class="mtn mbn"><a href="home.php?mod=space&amp;uid=<?php echo $uid;?>" target="_blank" class="avt"><?php echo avatar($uid, 'small');; ?></a></p>
<p><a href="home.php?mod=space&amp;uid=<?php echo $uid;?>" target="_blank"><?php echo $ratelog['username'];?></a></p>
</li>
<?php } ?>
</ul>
<?php } ?>
</dd>
</dl>
<?php } else { ?>
<div id="post_rate_div_<?php echo $post['pid'];?>"></div>
<?php } } ?>
</div>        </div>
        <?php if(helper_access::check_module('collection') && !$_G['forum']['disablecollect']) { ?>
            <?php if($post['relatecollection']) { ?>
                <div class="cm">
                    <h3 class="psth xs1">本帖被以下淘专辑推荐:</h3>
                    <ul class="mbw xl xl2 cl">
                    <?php if(is_array($post['relatecollection'])) foreach($post['relatecollection'] as $var) { ?>                        <li>&middot; <a href="forum.php?mod=collection&amp;action=view&amp;ctid=<?php echo $var['ctid'];?>" title="<?php echo $var['name'];?>" target="_blank" class="xi2 xw1"><?php echo $var['name'];?></a><span class="pipe">|</span><span class="xg1">主题: <?php echo $var['threadnum'];?>, 订阅: <?php echo $var['follownum'];?></span></li>
                    <?php } ?>
                    <?php if($post['releatcollectionmore']) { ?>
                        <li>&middot; <a href="forum.php?mod=collection&amp;tid=<?php echo $_G['tid'];?>" target="_blank" class="xi2 xw1">更多</a></li>
                    <?php } ?>
                    </ul>
                </div>
                <?php if($post['sourcecollection']['ctid']) { ?>
                <div>
                    您是从淘专辑 <a href="forum.php?mod=collection&amp;action=view&amp;ctid=<?php echo $post['sourcecollection']['ctid'];?>" target="_blank" class="xi2"><?php echo $post['sourcecollection']['name'];?></a> 访问到本帖的，欢迎对专辑打分：
                    <form action="forum.php?mod=collection&amp;action=comment&amp;ctid=<?php echo $ctid;?>&amp;tid=<?php echo $_G['tid'];?>" method="POST" class="ptm pbm cl">
                        <input type="hidden" name="ratescore" id="ratescore" />
                        <span class="clct_ratestar">
                            <span class="btn">
                                <a href="javascript:;" onmouseover="rateStarHover('clct_ratestar_star',1)" onmouseout="rateStarHover('clct_ratestar_star',0)" onclick="rateStarSet('clct_ratestar_star',1,'ratescore')">1</a>
                                <a href="javascript:;" onmouseover="rateStarHover('clct_ratestar_star',2)" onmouseout="rateStarHover('clct_ratestar_star',0)" onclick="rateStarSet('clct_ratestar_star',2,'ratescore')">2</a>
                                <a href="javascript:;" onmouseover="rateStarHover('clct_ratestar_star',3)" onmouseout="rateStarHover('clct_ratestar_star',0)" onclick="rateStarSet('clct_ratestar_star',3,'ratescore')">3</a>
                                <a href="javascript:;" onmouseover="rateStarHover('clct_ratestar_star',4)" onmouseout="rateStarHover('clct_ratestar_star',0)" onclick="rateStarSet('clct_ratestar_star',4,'ratescore')">4</a>
                                <a href="javascript:;" onmouseover="rateStarHover('clct_ratestar_star',5)" onmouseout="rateStarHover('clct_ratestar_star',0)" onclick="rateStarSet('clct_ratestar_star',5,'ratescore')">5</a>
                            </span>
                            <span id="clct_ratestar_star" class="star star<?php echo $memberrate;?>"></span>
                        </span>
                        &nbsp;<button type="submit" value="submit" class="pn"><span>评分</span></button>
                    </form>
                </div>
                <?php } ?>
            <?php } ?>
        <?php } ?>

        <?php if($post['first'] && ($post['tags'] || $relatedkeywords)) { ?>
            <div class="ptg mbm">
                <?php if($post['tags']) { ?>
                    <?php $tagi = 0;?>                    <?php if(is_array($post['tags'])) foreach($post['tags'] as $var) { ?>                        <?php if($tagi) { ?>, <?php } ?><a title="<?php echo $var['1'];?>" href="misc.php?mod=tag&amp;id=<?php echo $var['0'];?>" target="_blank"><?php echo $var['1'];?></a>
                        <?php $tagi++;?>                    <?php } ?>
                <?php } ?>
                <?php if($relatedkeywords) { ?><span><?php echo $relatedkeywords;?></span><?php } ?>
            </div>
        <?php } ?>
    </td></tr>
    <tr><td class="plc plm">
        <?php if($locations[$post['pid']]) { ?>
            <div class="mobile-location"><?php echo $locations[$post['pid']]['location'];?></div>
        <?php } ?>
        <?php if(!IS_ROBOT && $post['first'] && !$_G['forum_thread']['archiveid']) { ?>
            <?php if(!empty($lastmod['modaction'])) { ?><div class="modact"><a href="forum.php?mod=misc&amp;action=viewthreadmod&amp;tid=<?php echo $_G['tid'];?>" title="帖子模式" onclick="showWindow('viewthreadmod', this.href)"><?php if($lastmod['modactiontype'] == 'REB') { ?>本主题由 <?php echo $lastmod['modusername'];?> 于 <?php echo $lastmod['moddateline'];?> <?php echo $lastmod['modaction'];?>到 <?php echo $lastmod['reason'];?><?php } else { ?>本主题由 <?php echo $lastmod['modusername'];?> 于 <?php echo $lastmod['moddateline'];?> <?php echo $lastmod['modaction'];?><?php } ?></a></div><?php } ?>
            <?php if(!empty($_G['setting']['pluginhooks']['viewthread_modaction'])) echo $_G['setting']['pluginhooks']['viewthread_modaction'];?>

            <?php if($post['invisible'] == 0) { ?>
                <div id="p_btn" class="mtw mbm cl">
                    <?php if(!empty($_G['setting']['pluginhooks']['viewthread_share_method'])) { ?>
                        <div class="tshare cl">
                            <strong>分享到:</strong>
                            <?php if(!empty($_G['setting']['pluginhooks']['viewthread_share_method'])) echo $_G['setting']['pluginhooks']['viewthread_share_method'];?>
                        </div>
                    <?php } ?>

                    <?php if(!$post['anonymous'] && helper_access::check_module('follow')) { ?>
                    <a href="home.php?mod=spacecp&amp;ac=follow&amp;op=relay&amp;tid=<?php echo $_G['tid'];?>&amp;from=forum" id="k_relay" onclick="showWindow(this.id, this.href, 'get', 0);" onmouseover="this.title = $('relaynumber').innerHTML + ' 人转播'"><i><img src="<?php echo IMGDIR;?>/rt.png" alt="转播" />转播<span id="relaynumber"><?php echo $_G['forum_thread']['relay'];?></span></i></a>
                    <?php } ?>
                    <?php if(!$_G['forum']['disablecollect'] && helper_access::check_module('collection')) { ?>
                        <a href="forum.php?mod=collection&amp;action=edit&amp;op=addthread&amp;tid=<?php echo $_G['tid'];?>" id="k_collect" onclick="showWindow(this.id, this.href);return false;" onmouseover="this.title = $('collectionnumber').innerHTML + ' 人淘帖'"><i><img src="<?php echo IMGDIR;?>/collection.png" alt="分享" />淘帖<span id="collectionnumber"><?php echo $post['releatcollectionnum'];?></span></i></a>
                    <?php } ?>
                    <?php if(helper_access::check_module('share')) { ?>
                        <a href="home.php?mod=spacecp&amp;ac=share&amp;type=thread&amp;id=<?php echo $_G['tid'];?>" id="k_share" onclick="showWindow(this.id, this.href, 'get', 0);" onmouseover="this.title = $('sharenumber').innerHTML + ' 人分享'"><i><img src="<?php echo IMGDIR;?>/oshr.png" alt="分享" />分享<span id="sharenumber"><?php echo $_G['forum_thread']['sharetimes'];?></span></i></a>
                    <?php } ?>
                    <a href="home.php?mod=spacecp&amp;ac=favorite&amp;type=thread&amp;id=<?php echo $_G['tid'];?>" id="k_favorite" onclick="showWindow(this.id, this.href, 'get', 0);" onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'"><i><img src="<?php echo IMGDIR;?>/fav.gif" alt="收藏" />收藏<span id="favoritenumber"><?php echo $_G['forum_thread']['favtimes'];?></span></i></a>
                    <?php if(($_G['group']['allowrecommend'] || !$_G['uid']) && $_G['setting']['recommendthread']['status']) { ?>
                        <?php if(!empty($_G['setting']['recommendthread']['addtext'])) { ?>
                        <a id="recommend_add" href="forum.php?mod=misc&amp;action=recommend&amp;do=add&amp;tid=<?php echo $_G['tid'];?>" <?php if($_G['uid']) { ?>onclick="ajaxmenu(this, 3000, 1, 0, '43', 'recommendupdate(<?php echo $_G['group']['allowrecommend'];?>)');return false;"<?php } else { ?> onclick="showWindow('login', this.href)"<?php } ?> onmouseover="this.title = $('recommendv_add').innerHTML + ' 人<?php echo $_G['setting']['recommendthread']['addtext'];?>'"><i><img src="<?php echo IMGDIR;?>/rec_add.gif" alt="<?php echo $_G['setting']['recommendthread']['addtext'];?>" /><?php echo $_G['setting']['recommendthread']['addtext'];?><span id="recommendv_add"><?php echo $_G['forum_thread']['recommend_add'];?></span></i></a>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['recommendthread']['subtracttext'])) { ?>
                        <a id="recommend_subtract" href="forum.php?mod=misc&amp;action=recommend&amp;do=subtract&amp;tid=<?php echo $_G['tid'];?>" <?php if($_G['uid']) { ?>onclick="ajaxmenu(this, 3000, 1, 0, '43', 'recommendupdate(-<?php echo $_G['group']['allowrecommend'];?>)');return false;"<?php } else { ?> onclick="showWindow('login', this.href)"<?php } ?> onmouseover="this.title = $('recommendv_subtract').innerHTML + ' 人<?php echo $_G['setting']['recommendthread']['subtracttext'];?>'"><i><img src="<?php echo IMGDIR;?>/rec_subtract.gif" alt="<?php echo $_G['setting']['recommendthread']['subtracttext'];?>" /><?php echo $_G['setting']['recommendthread']['subtracttext'];?><span id="recommendv_subtract"><?php echo $_G['forum_thread']['recommend_sub'];?></span></i></a>
                        <?php } ?>
                    <?php } ?>
                    <?php if($_G['group']['raterange'] && $post['authorid']) { ?>
                        <a href="javascript:;" id="ak_rate" onclick="showWindow('rate', 'forum.php?mod=misc&action=rate&tid=<?php echo $_G['tid'];?>&pid=<?php echo $post['pid'];?>', 'get', -1);return false;" title="<?php echo count($postlist[$post['pid']]['totalrate']);; ?> 人评分"><i><img src="<?php echo IMGDIR;?>/agree.gif" alt="评分" />评分</i></a>
                    <?php } ?>
                    <?php if(!empty($_G['setting']['pluginhooks']['viewthread_useraction'])) echo $_G['setting']['pluginhooks']['viewthread_useraction'];?>
                </div>
            <?php } ?>

        <?php } ?>

        <?php if($post['relateitem']) { ?>
            <div class="mtw mbw">
                <h3 class="pbm mbm bbda">相关帖子</h3>
                <ul class="xl xl2 cl">
                    <?php if(is_array($post['relateitem'])) foreach($post['relateitem'] as $var) { ?>                    <li>&#8226; <a href="forum.php?mod=viewthread&amp;tid=<?php echo $var['tid'];?>" title="<?php echo $var['subject'];?>" target="_blank"><?php echo $var['subject'];?></a></li>
                    <?php } ?>
                </ul>
            </div>
        <?php } ?>
        <?php if($post['signature'] && ($_G['setting']['bannedmessages'] & 4 && ($post['memberstatus'] == '-1' || ($post['authorid'] && !$post['username']) || ($post['groupid'] == 4 || $post['groupid'] == 5) || ($post['status'] & 1)))) { ?>
            <div class="sign">签名被屏蔽</div>
        <?php } elseif($post['signature'] && !$post['anonymous'] && $showsignatures) { ?>
            <div class="sign" style="max-height:<?php echo $_G['setting']['maxsigrows'];?>px;maxHeightIE:<?php echo $_G['setting']['maxsigrows'];?>px;"><?php echo $post['signature'];?></div>
        <?php } ?>
        <?php if(!empty($_G['setting']['pluginhooks']['viewthread_postsightmlafter'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_postsightmlafter'][$postcount];?>
        <?php echo adshow("thread/a_pb/1/$postcount");?>    </td>
</tr>
<?php if(!$_G['forum_thread']['archiveid']) { ?>
<tr>
    <td class="pls" style="background-color:#f5f5f5"></td>
    <td class="plc">
        <div class="po">
            <?php if(!$post['first'] && $modmenu['post']) { ?>
                <span class="y">
                <label for="manage<?php echo $post['pid'];?>">
                <input type="checkbox" id="manage<?php echo $post['pid'];?>" class="pc" <?php if(!empty($modclick)) { ?>checked="checked" <?php } ?>onclick="pidchecked(this);modclick(this, <?php echo $post['pid'];?>)" value="<?php echo $post['pid'];?>" autocomplete="off" />
                管理
                </label>
                </span>
            <?php } ?>
            <div class="pob cl">
                <em>
                    <?php if($post['invisible'] == 0) { ?>
                        <?php if($allowpostreply && $post['allowcomment'] && (!$thread['closed'] || $_G['forum']['ismoderator'])) { ?>
                        <a class="cmmnt" href="forum.php?mod=misc&amp;action=comment&amp;tid=<?php echo $post['tid'];?>&amp;pid=<?php echo $post['pid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;page=<?php echo $page;?><?php if($_G['forum_thread']['special'] == 127) { ?>&amp;special=<?php echo $specialextra;?><?php } ?>" onclick="showWindow('comment', this.href, 'get', 0)">点评</a><?php } ?>
                        <?php if((!$_G['uid'] || $allowpostreply) && !$needhiddenreply) { ?>
                            <?php if($post['first']) { ?>
                                <a class="fastre" href="forum.php?mod=post&amp;action=reply&amp;fid=<?php echo $_G['fid'];?>&amp;tid=<?php echo $_G['tid'];?>&amp;reppost=<?php echo $post['pid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;page=<?php echo $page;?>" onclick="showWindow('reply', this.href)">回复</a>
                            <?php } else { ?>
                                <a class="fastre" href="forum.php?mod=post&amp;action=reply&amp;fid=<?php echo $_G['fid'];?>&amp;tid=<?php echo $_G['tid'];?>&amp;repquote=<?php echo $post['pid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;page=<?php echo $page;?>" onclick="showWindow('reply', this.href)">回复</a>
                            <?php } ?>
                        <?php } ?>
                    <?php } ?>
                    <?php if((($_G['forum']['ismoderator'] && $_G['group']['alloweditpost'] && (!in_array($post['adminid'], array(1, 2, 3)) || $_G['adminid'] <= $post['adminid'])) || ($_G['forum']['alloweditpost'] && $_G['uid'] && ($post['authorid'] == $_G['uid'] && $_G['forum_thread']['closed'] == 0) && !(!$alloweditpost_status && $edittimelimit && TIMESTAMP - $post['dbdateline'] > $edittimelimit)))) { ?>
                        <a class="editp" href="forum.php?mod=post&amp;action=edit&amp;fid=<?php echo $_G['fid'];?>&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $post['pid'];?><?php if(!empty($_GET['modthreadkey'])) { ?>&amp;modthreadkey=<?php echo $_GET['modthreadkey'];?><?php } ?>&amp;page=<?php echo $page;?>"><?php if($_G['forum_thread']['special'] == 2 && !$post['message']) { ?>添加柜台介绍<?php } else { ?>编辑</a><?php } ?>
                    <?php } elseif($_G['uid'] && $post['authorid'] == $_G['uid'] && $_G['setting']['postappend']) { ?>
                        <a class="appendp" href="forum.php?mod=misc&amp;action=postappend&amp;tid=<?php echo $post['tid'];?>&amp;pid=<?php echo $post['pid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;page=<?php echo $page;?>" onClick="showWindow('postappend', this.href, 'get', 0)">补充</a>
                    <?php } ?>
                    <?php if($post['first'] && $post['invisible'] == -3) { ?>
                        <a class="psave" href="forum.php?mod=misc&amp;action=pubsave&amp;tid=<?php echo $_G['tid'];?>">发表</a>
                    <?php } ?>
                    <?php if($post['invisible'] == -2 && !$post['first']) { ?>
                        <span class="xg1">(待审核)</span>
                    <?php } ?>
                    <?php if($post['first'] && $allowblockrecommend) { ?><a class="push" href="javascript:;" onclick="modaction('recommend', '<?php echo $_G['forum_firstpid'];?>', 'op=recommend&idtype=<?php if($_G['forum_thread']['isgroup']) { ?>gtid<?php } else { ?>tid<?php } ?>&id=<?php echo $_G['tid'];?>&pid=<?php echo $post['pid'];?>', 'portal.php?mod=portalcp&ac=portalblock')">推送</a><?php } ?>
                    <?php if(!empty($_G['setting']['pluginhooks']['viewthread_postfooter'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_postfooter'][$postcount];?>
                </em>

                <p>
                    <?php if($post['invisible'] == 0) { ?>
                        <?php if($_G['setting']['magicstatus']) { ?>
                            <a href="javascript:;" id="mgc_post_<?php echo $post['pid'];?>" onmouseover="showMenu(this.id)" class="showmenu">使用道具</a>
                        <?php } ?>

                        <?php if($_G['forum_thread']['special'] == 3 && ($_G['forum']['ismoderator'] && (!$_G['setting']['rewardexpiration'] || $_G['setting']['rewardexpiration'] > 0 && ($_G['timestamp'] - $_G['forum_thread']['dateline']) / 86400 > $_G['setting']['rewardexpiration']) || $_G['forum_thread']['authorid'] == $_G['uid']) && $post['authorid'] != $_G['forum_thread']['authorid'] && $post['first'] == 0 && $_G['uid'] != $post['authorid'] && $_G['forum_thread']['price'] > 0) { ?>
                            <a href="javascript:;" onclick="setanswer(<?php echo $post['pid'];?>, '<?php echo $_GET['from'];?>')">最佳答案</a>
                        <?php } ?>

                        <?php if(!$post['first'] && $_G['group']['raterange'] && $post['authorid']) { ?>
                            <a href="javascript:;" onclick="showWindow('rate', 'forum.php?mod=misc&action=rate&tid=<?php echo $_G['tid'];?>&pid=<?php echo $post['pid'];?>', 'get', -1);return false;">评分</a>
                        <?php } ?>

                        <?php if(!empty($postlist[$post['pid']]['totalrate']) && $_G['forum']['ismoderator']) { ?>
                            <a href="forum.php?mod=misc&amp;action=removerate&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $post['pid'];?>&amp;page=<?php echo $page;?>" onclick="showWindow('rate', this.href, 'get', -1)">撤销评分</a>
                        <?php } ?>
                        <?php if($post['authorid'] != $_G['uid']) { ?>
                            <a href="javascript:;" onclick="showWindow('miscreport<?php echo $post['pid'];?>', 'misc.php?mod=report&rtype=post&rid=<?php echo $post['pid'];?>&tid=<?php echo $_G['tid'];?>&fid=<?php echo $_G['fid'];?>', 'get', -1);return false;">举报</a>
                        <?php } ?>
                    <?php } ?>
                    <?php if(!empty($_G['setting']['pluginhooks']['viewthread_postaction'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_postaction'][$postcount];?>
                </p>

                <?php if($_G['setting']['magicstatus']) { ?>
                    <ul id="mgc_post_<?php echo $post['pid'];?>_menu" class="p_pop mgcmn" style="display: none;">
                    <?php if($post['first']) { ?>
                        <?php if(!empty($_G['setting']['magics']['bump'])) { ?>
                            <li><a href="home.php?mod=magic&amp;mid=bump&amp;idtype=tid&amp;id=<?php echo $_G['tid'];?>" id="a_bump" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/bump.small.gif" /><?php echo $_G['setting']['magics']['bump'];?></a></li>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['magics']['stick'])) { ?>
                            <li><a href="home.php?mod=magic&amp;mid=stick&amp;idtype=tid&amp;id=<?php echo $_G['tid'];?>" id="a_stick" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/stick.small.gif" /><?php echo $_G['setting']['magics']['stick'];?></a></li>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['magics']['close'])) { ?>
                            <li><a href="home.php?mod=magic&amp;mid=close&amp;idtype=tid&amp;id=<?php echo $_G['tid'];?>" id="a_stick" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/close.small.gif" /><?php echo $_G['setting']['magics']['close'];?></a></li>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['magics']['open'])) { ?>
                            <li><a href="home.php?mod=magic&amp;mid=open&amp;idtype=tid&amp;id=<?php echo $_G['tid'];?>" id="a_stick" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/open.small.gif" /><?php echo $_G['setting']['magics']['open'];?></a></li>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['magics']['highlight'])) { ?>
                            <li><a href="home.php?mod=magic&amp;mid=highlight&amp;idtype=tid&amp;id=<?php echo $_G['tid'];?>" id="a_stick" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/highlight.small.gif" /><?php echo $_G['setting']['magics']['highlight'];?></a></li>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['magics']['sofa'])) { ?>
                            <li><a href="home.php?mod=magic&amp;mid=sofa&amp;idtype=tid&amp;id=<?php echo $_G['tid'];?>" id="a_stick" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/sofa.small.gif" /><?php echo $_G['setting']['magics']['sofa'];?></a></li>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['magics']['jack'])) { ?>
                            <li><a href="home.php?mod=magic&amp;mid=jack&amp;idtype=tid&amp;id=<?php echo $_G['tid'];?>" id="a_jack" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/jack.small.gif" /><?php echo $_G['setting']['magics']['jack'];?></a></li>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['pluginhooks']['viewthread_magic_thread'])) echo $_G['setting']['pluginhooks']['viewthread_magic_thread'];?>
                    <?php } ?>
                    <?php if(!empty($_G['setting']['magics']['repent']) && $post['authorid'] == $_G['uid'] && !$rushreply) { ?>
                        <li><a href="home.php?mod=magic&amp;mid=repent&amp;idtype=pid&amp;id=<?php echo $post['pid'];?>:<?php echo $_G['tid'];?>" id="a_repent_<?php echo $post['pid'];?>" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/bump.small.gif" /><?php echo $_G['setting']['magics']['repent'];?></a></li>
                    <?php } ?>
                    <?php if(!empty($_G['setting']['magics']['anonymouspost']) && $post['authorid'] == $_G['uid']) { ?>
                        <li><a href="home.php?mod=magic&amp;mid=anonymouspost&amp;idtype=pid&amp;id=<?php echo $post['pid'];?>:<?php echo $_G['tid'];?>" id="a_anonymouspost_<?php echo $post['pid'];?>" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/anonymouspost.small.gif" /><?php echo $_G['setting']['magics']['anonymouspost'];?></a><li>
                    <?php } ?>
                    <?php if(!empty($_G['setting']['magics']['namepost'])) { ?>
                        <li><a href="home.php?mod=magic&amp;mid=namepost&amp;idtype=pid&amp;id=<?php echo $post['pid'];?>:<?php echo $_G['tid'];?>" id="a_namepost_<?php echo $post['pid'];?>" onclick="showWindow(this.id, this.href)"><img src="<?php echo STATICURL;?>image/magic/namepost.small.gif" /><?php echo $_G['setting']['magics']['namepost'];?></a><li>
                    <?php } ?>
                    <?php if(!empty($_G['setting']['pluginhooks']['viewthread_magic_post'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_magic_post'][$postcount];?>
                    </ul>
                    <script type="text/javascript" reload="1">checkmgcmn('post_<?php echo $post['pid'];?>')</script>
                <?php } ?>
            </div>
        </div>
    </td>
</tr>
<?php } ?>
<tr class="ad">
    <td class="pls"></td>
    <td class="plc">
        <?php if($post['first'] && $_G['forum_thread']['special'] == 5 && $_G['forum_thread']['displayorder'] >= 0) { ?>
            <ul class="ttp cl">
                <li style="display:inline;margin-left:12px"><strong class="bw0 bg0_all">按立场筛选: </strong></li>
                <li<?php if(!isset($_GET['stand'])) { ?> class="xw1 a"<?php } ?>><a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>" hidefocus="true">全部</a></li>
                <li<?php if($_GET['stand'] == 1) { ?> class="xw1 a"<?php } ?>><a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;stand=1" hidefocus="true">正方</a></li>
                <li<?php if($_GET['stand'] == 2) { ?> class="xw1 a"<?php } ?>><a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;stand=2" hidefocus="true">反方</a></li>
                <li<?php if(isset($_GET['stand']) && $_GET['stand'] == 0) { ?> class="xw1 a"<?php } ?>><a href="forum.php?mod=viewthread&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;stand=0" hidefocus="true">中立</a></li>
            </ul>
        <?php } ?>
        <?php if($_G['forum_thread']['replies']) { ?><?php echo adshow("interthread/a_p/$postcount");?><?php } ?>
    </td>
</tr>
</table>
<?php if(!empty($aimgs[$post['pid']])) { ?>
<script type="text/javascript" reload="1">
    aimgcount[<?php echo $post['pid'];?>] = [<?php echo dimplode($aimgs[$post['pid']]);; ?>];
    attachimggroup(<?php echo $post['pid'];?>);
    <?php if(empty($_G['setting']['lazyload'])) { ?>
        <?php if(!$post['imagelistthumb']) { ?>
            attachimgshow(<?php echo $post['pid'];?>);
        <?php } else { ?>
            attachimgshow(<?php echo $post['pid'];?>, 1);
        <?php } ?>
    <?php } ?>
    var aimgfid = 0;
    <?php if($_G['forum']['picstyle'] && ($_G['forum']['ismoderator'] || $_G['uid'] == $_G['thread']['authorid'])) { ?>
        aimgfid = <?php echo $_G['fid'];?>;
    <?php } ?>
    <?php if($post['imagelistthumb']) { ?>
        attachimglstshow(<?php echo $post['pid'];?>, <?php echo intval($_G['setting']['lazyload']); ?>, aimgfid, '<?php echo $_G['setting']['showexif'];?>');
    <?php } ?>
</script>
<?php } } else { ?>
    <table id="pid<?php echo $post['pid'];?>" summary="pid<?php echo $post['pid'];?>" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td class="pls"></td>
            <td class="plc">
                <div class="pi">
                    <strong><a><?php if(!empty($postno[$post['number']])) { ?><?php echo $postno[$post['number']];?><?php } else { ?><em><?php echo $post['number'];?></em><?php echo $postno['0'];?><?php } ?></a></strong>
                </div>
                <div class="pct">无效楼层，该帖已经被删除</div>
            </td>
        </tr>
        <tr class="ad"><td class="pls"></td><td class="plc"></td></tr>
    </tbody>
</table>
<?php } ?>
<?php if(!empty($_G['setting']['pluginhooks']['viewthread_endline'][$postcount])) echo $_G['setting']['pluginhooks']['viewthread_endline'][$postcount];?>            </div>
            <?php $postcount++;?>    <?php } ?>

    <div id="postlistreply" class="pl"><div id="post_new" class="viewthread_table" style="display: none"></div></div>
</div>

<?php if($modmenu['thread']) { ?>
    <div class="xi2 mbm pbm bbs">
    <script type="text/javascript">
        $('modmenu').lastChild.style.visibility = 'hidden';
        document.write($('modmenu').innerHTML);
    </script>
    </div>
<?php } ?>

<form method="post" autocomplete="off" name="modactions" id="modactions">
    <input type="hidden" name="formhash" value="<?php echo FORMHASH;?>" />
    <input type="hidden" name="optgroup" />
    <input type="hidden" name="operation" />
    <input type="hidden" name="listextra" value="<?php echo $_GET['extra'];?>" />
    <input type="hidden" name="page" value="<?php echo $page;?>" />
</form>

<?php echo $_G['forum_tagscript'];?>

<div class="pgs mtm mbm cl">
    <?php echo $multipage;?>
    <!--<span class="pgb y"<?php if($_G['setting']['visitedforums']) { ?> id="visitedforumstmp" onmouseover="$('visitedforums').id = 'visitedforumstmp';this.id = 'visitedforums';showMenu({'ctrlid':this.id,'pos':'21'})"<?php } ?>><a href="<?php echo $upnavlink;?>">返回列表</a></span>-->
    <?php if($allowpostreply && !$_G['forum_thread']['archiveid']) { ?>
        <a style="float:right;" id="post_replytmp" onclick="showWindow('reply', 'forum.php?mod=post&action=reply&fid=<?php echo $_G['fid'];?>&tid=<?php echo $_G['tid'];?>')" href="javascript:;" title="回复"><img src="<?php echo IMGDIR;?>/pn_reply.png" alt="回复" /></a>
    <?php } ?>
    <?php if(!$_G['forum_thread']['is_archived']) { ?>
        <a style="float:right;" id="newspecialtmp" onmouseover="$('newspecial').id = 'newspecialtmp';this.id = 'newspecial';showMenu({'ctrlid':this.id})"<?php if(!$_G['forum']['allowspecialonly']) { ?> onclick="showWindow('newthread', 'forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>')"<?php } else { ?> onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>';return false;"<?php } ?> href="javascript:;" title ="发新帖"><img src="<?php echo IMGDIR;?>/pn_post.png" alt="发新帖" /></a>
    <?php } ?>

</div>

<?php if(!empty($_G['setting']['pluginhooks']['viewthread_middle'])) echo $_G['setting']['pluginhooks']['viewthread_middle'];?>
<!--[diy=diyfastposttop]--><div id="diyfastposttop" class="area"></div><!--[/diy]-->
<?php if($fastpost) { ?>
    <script type="text/javascript">
var postminchars = parseInt('<?php echo $_G['setting']['minpostsize'];?>');
var postmaxchars = parseInt('<?php echo $_G['setting']['maxpostsize'];?>');
var disablepostctrl = parseInt('<?php echo $_G['group']['disablepostctrl'];?>');
</script>

<div id="f_pst" class="pl<?php if(empty($_GET['from'])) { ?> bm bmw<?php } ?>">
<form method="post" autocomplete="off" id="fastpostform" action="forum.php?mod=post&amp;action=reply&amp;fid=<?php echo $_G['fid'];?>&amp;tid=<?php echo $_G['tid'];?>&amp;extra=<?php echo $_GET['extra'];?>&amp;replysubmit=yes<?php if($_GET['ordertype'] != 1) { ?>&amp;infloat=yes&amp;handlekey=fastpost<?php } if($_GET['from']) { ?>&amp;from=<?php echo $_GET['from'];?><?php } ?>"<?php if($_GET['ordertype'] != 1) { ?> onSubmit="return fastpostvalidate(this)"<?php } ?>>
<?php if(empty($_GET['from'])) { ?>
<table cellspacing="0" cellpadding="0" height="340">
<tr>
<td class="pls">
<?php if($_G['uid']) { ?><div class="avatar"><?php echo avatar($_G['uid']); ?></div><?php } ?>
<?php if(!empty($_G['setting']['pluginhooks']['viewthread_fastpost_side'])) echo $_G['setting']['pluginhooks']['viewthread_fastpost_side'];?>
</td>
<td class="plc">
<?php } ?>
<?php if(!empty($_G['setting']['pluginhooks']['viewthread_fastpost_content'])) echo $_G['setting']['pluginhooks']['viewthread_fastpost_content'];?>

<span id="fastpostreturn"></span>

<?php if($_G['forum_thread']['special'] == 5 && empty($firststand)) { ?>
<div class="pbt cl">
<div class="ftid sslt">
<select id="stand" name="stand">
<option value="">选择观点</option>
<option value="0">中立</option>
<option value="1">正方</option>
<option value="2">反方</option>
</select>
</div>
<script type="text/javascript">simulateSelect('stand');</script>
</div>
<?php } ?>

<div class="cl">

<div<?php if(empty($_GET['from']) && $_G['setting']['fastsmilies']) { ?> class="hasfsl"<?php } ?> id="fastposteditor" style="margin-right:0px;">
<div class="tedt<?php if(!($_G['forum_thread']['special'] == 5 && empty($firststand))) { ?> mtn<?php } ?>" style="height:300px;">
<div class="bar">
<span class="y">
<?php if(!empty($_G['setting']['pluginhooks']['viewthread_fastpost_func_extra'])) echo $_G['setting']['pluginhooks']['viewthread_fastpost_func_extra'];?>
<a href="forum.php?mod=post&amp;action=reply&amp;fid=<?php echo $_G['fid'];?>&amp;tid=<?php echo $_G['tid'];?><?php if($_GET['from']) { ?>&amp;from=<?php echo $_GET['from'];?><?php } ?>" onclick="return switchAdvanceMode(this.href)">高级模式</a>
</span><?php $seditor = array('fastpost', array('at', 'bold', 'color', 'img', 'link', 'quote', 'code', 'smilies'), !$allowfastpost ? 1 : 0, $allowpostattach && $allowfastpost ? '<span class="pipe z">|</span><span id="spanButtonPlaceholder">'.lang('template', 'upload').'</span>' : '');?><?php if(!empty($_G['setting']['pluginhooks']['viewthread_fastpost_ctrl_extra'])) echo $_G['setting']['pluginhooks']['viewthread_fastpost_ctrl_extra'];?><script src="<?php echo $_G['setting']['jspath'];?>seditor.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<div class="fpd">
<?php if(in_array('bold', $seditor['1'])) { ?>
<a href="javascript:;" title="文字加粗" class="fbld"<?php if(empty($seditor['2'])) { ?> onclick="seditor_insertunit('<?php echo $seditor['0'];?>', '[b]', '[/b]');doane(event);"<?php } ?>>B</a>
<?php } if(in_array('color', $seditor['1'])) { ?>
<a href="javascript:;" title="设置文字颜色" class="fclr" id="<?php echo $seditor['0'];?>forecolor"<?php if(empty($seditor['2'])) { ?> onclick="showColorBox(this.id, 2, '<?php echo $seditor['0'];?>');doane(event);"<?php } ?>>Color</a>
<?php } if(in_array('img', $seditor['1'])) { ?>
<a id="<?php echo $seditor['0'];?>img" href="javascript:;" title="图片" class="fmg"<?php if(empty($seditor['2'])) { ?> onclick="seditor_menu('<?php echo $seditor['0'];?>', 'img');doane(event);"<?php } ?>>Image</a>
<?php } if(in_array('link', $seditor['1'])) { ?>
<a id="<?php echo $seditor['0'];?>url" href="javascript:;" title="添加链接" class="flnk"<?php if(empty($seditor['2'])) { ?> onclick="seditor_menu('<?php echo $seditor['0'];?>', 'url');doane(event);"<?php } ?>>Link</a>
<?php } if(in_array('quote', $seditor['1'])) { ?>
<a id="<?php echo $seditor['0'];?>quote" href="javascript:;" title="引用" class="fqt"<?php if(empty($seditor['2'])) { ?> onclick="seditor_menu('<?php echo $seditor['0'];?>', 'quote');doane(event);"<?php } ?>>Quote</a>
<?php } if(in_array('code', $seditor['1'])) { ?>
<a id="<?php echo $seditor['0'];?>code" href="javascript:;" title="代码" class="fcd"<?php if(empty($seditor['2'])) { ?> onclick="seditor_menu('<?php echo $seditor['0'];?>', 'code');doane(event);"<?php } ?>>Code</a>
<?php } if(in_array('smilies', $seditor['1'])) { ?>
<a href="javascript:;" class="fsml" id="<?php echo $seditor['0'];?>sml"<?php if(empty($seditor['2'])) { ?> onclick="showMenu({'ctrlid':this.id,'evt':'click','layer':2});return false;"<?php } ?>>Smilies</a>
<?php if(empty($seditor['2'])) { ?>
<script type="text/javascript" reload="1">smilies_show('<?php echo $seditor['0'];?>smiliesdiv', <?php echo $_G['setting']['smcols'];?>, '<?php echo $seditor['0'];?>');</script>
<?php } } if(in_array('at', $seditor['1']) && $_G['group']['allowat']) { ?>
<script src="<?php echo $_G['setting']['jspath'];?>at.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<a id="<?php echo $seditor['0'];?>at" href="javascript:;" title="@朋友" class="fat"<?php if(empty($seditor['2'])) { ?> onclick="seditor_menu('<?php echo $seditor['0'];?>', 'at');doane(event);"<?php } ?>>@朋友</a>
<?php } ?>
<?php echo $seditor['3'];?>
</div></div>
<div class="area">
<?php if($allowfastpost) { ?>
<textarea rows="6" cols="80" name="message" id="fastpostmessage" onKeyDown="seditor_ctlent(event, <?php if($_GET['ordertype'] != 1) { ?>'fastpostvalidate($(\'fastpostform\'))'<?php } else { ?>'$(\'fastpostform\').submit()'<?php } ?>);" tabindex="4" class="pt"></textarea>
<?php } else { ?>
<div class="pt hm">
<?php if(!$_G['uid']) { if(!$_G['connectguest']) { ?>
您需要登录后才可以回帖 <a href="member.php?mod=logging&amp;action=login" onclick="showWindow('login', this.href)" class="xi2">登录</a> | <a href="member.php?mod=<?php echo $_G['setting']['regname'];?>" class="xi2"><?php echo $_G['setting']['reglinkname'];?></a>
<?php } else { ?>
您需要 <a href="member.php?mod=connect" class="xi2">完善帐号信息</a> 或 <a href="member.php?mod=connect&amp;ac=bind" class="xi2">绑定已有帐号</a> 后才可以发帖
<?php } } else { ?>
您现在无权发帖。<a href="javascript:;" onclick="$('fastpostform').submit()" class="xi2">点击查看原因</a>
<?php } ?>
<?php if(!empty($_G['setting']['pluginhooks']['global_login_text'])) echo $_G['setting']['pluginhooks']['global_login_text'];?>
</div>
<?php } ?>
</div>
</div>
</div>
</div>
<?php if($allowpostreply && checkperm('seccode') && ($secqaacheck || $seccodecheck)) { ?><?php
$sectpl = <<<EOF
<sec> <span id="sec<hash>" onclick="showMenu(this.id)"><sec></span><div id="sec<hash>_menu" class="p_pop p_opt" style="display:none"><sec></div>
EOF;
?>
<div class="mtm sec"><?php $_G['sechashi'] = !empty($_G['cookie']['sechashi']) ? $_G['sechash'] + 1 : 0;
$sechash = 'S'.($_G['inajax'] ? 'A' : '').$_G['sid'].$_G['sechashi'];
$sectpl = !empty($sectpl) ? explode("<sec>", $sectpl) : array('<br />',': ','<br />','');
$sectpldefault = $sectpl;
$sectplqaa = str_replace('<hash>', 'qaa'.$sechash, $sectpldefault);
$sectplcode = str_replace('<hash>', 'code'.$sechash, $sectpldefault);
$secshow = !isset($secshow) ? 1 : $secshow;
$sectabindex = !isset($sectabindex) ? 1 : $sectabindex;?><?php
$__STATICURL = STATICURL;$seccheckhtml = <<<EOF

<input name="sechash" type="hidden" value="{$sechash}" />

EOF;
 if($sectpl) { if($secqaacheck) { 
$seccheckhtml .= <<<EOF

{$sectplqaa['0']}验证问答{$sectplqaa['1']}<input name="secanswer" id="secqaaverify_{$sechash}" type="text" autocomplete="off" style="width:100px" class="txt px vm" onblur="checksec('qaa', '{$sechash}')" tabindex="{$sectabindex}" />
<a href="javascript:;" onclick="updatesecqaa('{$sechash}');doane(event);" class="xi2">换一个</a>
<span id="checksecqaaverify_{$sechash}"><img src="{$__STATICURL}image/common/none.gif" width="16" height="16" class="vm" /></span>
{$sectplqaa['2']}<span id="secqaa_{$sechash}"></span>

EOF;
 if($secshow) { 
$seccheckhtml .= <<<EOF
<script type="text/javascript" reload="1">updatesecqaa('{$sechash}');</script>
EOF;
 } 
$seccheckhtml .= <<<EOF

{$sectplqaa['3']}

EOF;
 } if($seccodecheck) { 
$seccheckhtml .= <<<EOF

{$sectplcode['0']}验证码{$sectplcode['1']}<input name="seccodeverify" id="seccodeverify_{$sechash}" type="text" autocomplete="off" style="
EOF;
 if($_G['setting']['seccodedata']['type'] != 1) { 
$seccheckhtml .= <<<EOF
ime-mode:disabled;
EOF;
 } 
$seccheckhtml .= <<<EOF
width:100px" class="txt px vm" onblur="checksec('code', '{$sechash}')" tabindex="{$sectabindex}" />
<a href="javascript:;" onclick="updateseccode('{$sechash}');doane(event);" class="xi2">换一个</a>
<span id="checkseccodeverify_{$sechash}"><img src="{$__STATICURL}image/common/none.gif" width="16" height="16" class="vm" /></span>
{$sectplcode['2']}<span id="seccode_{$sechash}"></span>

EOF;
 if($secshow) { 
$seccheckhtml .= <<<EOF
<script type="text/javascript" reload="1">updateseccode('{$sechash}');</script>
EOF;
 } 
$seccheckhtml .= <<<EOF

{$sectplcode['3']}

EOF;
 } } 
$seccheckhtml .= <<<EOF


EOF;
?><?php unset($secshow);?><?php if(empty($secreturn)) { ?><?php echo $seccheckhtml;?><?php } ?></div>
<?php } if($allowpostattach) { ?>
<script type="text/javascript">
var editorid = '';
var ATTACHNUM = {'imageused':0,'imageunused':0,'attachused':0,'attachunused':0}, ATTACHUNUSEDAID = new Array(), IMGUNUSEDAID = new Array();
</script>

<script src="<?php echo $_G['setting']['jspath'];?>swfupload.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<script src="<?php echo $_G['setting']['jspath'];?>swfupload.queue.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<script src="<?php echo $_G['setting']['jspath'];?>handlers.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<script src="<?php echo $_G['setting']['jspath'];?>fileprogress.js?<?php echo VERHASH;?>" type="text/javascript"></script>

<input type="hidden" name="posttime" id="posttime" value="<?php echo TIMESTAMP;?>" />
<div class="upfl<?php if(empty($_GET['from']) && $_G['setting']['fastsmilies']) { ?> hasfsl<?php } ?>">
<table cellpadding="0" cellspacing="0" border="0" id="attach_tblheader" style="display: none;">
<tr>
<td>点击附件文件名添加到帖子内容中</td>
<td class="atds">描述</td>
<?php if($_G['group']['allowsetattachperm']) { ?>
<td class="attv">
阅读权限
<img src="<?php echo IMGDIR;?>/faq.gif" alt="Tip" class="vm" onmouseover="showTip(this)" tip="阅读权限按由高到低排列，高于或等于选中组的用户才可以阅读" />
</td>
<?php } if($_G['group']['maxprice']) { ?><td class="attpr"><?php echo $_G['setting']['extcredits'][$_G['setting']['creditstransextra']['1']]['title'];?></td><?php } ?>
<td class="attc"></td>
</tr>
</table>
<div class="fieldset flash" id="attachlist"></div>
<script type="text/javascript">
var upload = new SWFUpload({
upload_url: "<?php echo $_G['siteurl'];?>misc.php?mod=swfupload&action=swfupload&operation=upload&fid=<?php echo $fid;?>",
post_params: {"uid" : "<?php echo $_G['uid'];?>", "hash":"<?php echo $swfconfig['hash'];?>"},

file_size_limit : "<?php echo $swfconfig['max'];?>",
file_types : "<?php echo $swfconfig['attachexts']['ext'];?>",
file_types_description : "<?php echo $swfconfig['attachexts']['depict'];?>",
file_upload_limit : <?php echo $swfconfig['limit'];?>,
file_queue_limit : 0,

swfupload_preload_handler : preLoad,
swfupload_load_failed_handler : loadFailed,
file_dialog_start_handler : fileDialogStart,
file_queued_handler : fileQueued,
file_queue_error_handler : fileQueueError,
file_dialog_complete_handler : fileDialogComplete,
upload_start_handler : uploadStart,
upload_progress_handler : uploadProgress,
upload_error_handler : uploadError,
upload_success_handler : uploadSuccess,
upload_complete_handler : uploadComplete,

button_image_url : "<?php echo IMGDIR;?>/uploadbutton_small.png",
button_placeholder_id : "spanButtonPlaceholder",
button_width: 17,
button_height: 25,
button_cursor:SWFUpload.CURSOR.HAND,
button_window_mode: "transparent",

custom_settings : {
progressTarget : "attachlist",
uploadSource: 'forum',
uploadType: 'attach',
<?php if($swfconfig['maxsizeperday']) { ?>
maxSizePerDay: <?php echo $swfconfig['maxsizeperday'];?>,
<?php } if($swfconfig['maxattachnum']) { ?>
maxAttachNum: <?php echo $swfconfig['maxattachnum'];?>,
<?php } ?>
uploadFrom: 'fastpost'
},
debug: false
});

</script>


</div>
<?php } ?>

<input type="hidden" name="formhash" value="<?php echo FORMHASH;?>" />
<input type="hidden" name="usesig" value="<?php echo $usesigcheck;?>" />
<input type="hidden" name="subject" value="  " />
<p class="ptm pnpost">
<button <?php if($allowpostreply) { ?>type="submit" <?php } elseif(!$_G['uid']) { ?>type="button" onclick="showWindow('login', 'member.php?mod=logging&action=login&guestmessage=yes')" <?php } ?>name="replysubmit" id="fastpostsubmit" class="pn pnc vm" value="replysubmit" tabindex="5"><strong>发表回复</strong></button>
<?php if(!empty($_G['setting']['pluginhooks']['viewthread_fastpost_btn_extra'])) echo $_G['setting']['pluginhooks']['viewthread_fastpost_btn_extra'];?>
<?php if(helper_access::check_module('follow')) { ?>
<label><input type="checkbox" name="adddynamic" value="1" />回帖并转播</label>
<?php } if($_GET['ordertype'] != 1 && empty($_GET['from'])) { ?>
<label for="fastpostrefresh"><input id="fastpostrefresh" type="checkbox" class="pc" />回帖后跳转到最后一页</label>
<script type="text/javascript">if(getcookie('fastpostrefresh') == 1) {$('fastpostrefresh').checked=true;}</script>
<?php } ?>
</p>
<?php if(empty($_GET['from'])) { ?>
</td>
</tr>
</table>
<?php } ?>
</form>
</div><?php } ?>

<?php if(!empty($_G['setting']['pluginhooks']['viewthread_bottom'])) echo $_G['setting']['pluginhooks']['viewthread_bottom'];?>

<?php if(($_G['setting']['visitedforums']) && $_G['forum']['status'] != 3) { ?>
    <div id="visitedforums_menu" class="p_pop blk cl" style="display: none;">
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td id="v_forums">
                    <h3 class="mbn pbn bbda xg1">浏览过的版块</h3>
                    <ul class="xl xl1">
                        <?php echo $_G['setting']['visitedforums'];?>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
<?php } if($_G['medal_list']) { if(is_array($_G['medal_list'])) foreach($_G['medal_list'] as $medalid => $medal) { ?>    <div id="md_<?php echo $medalid;?>_menu" class="tip tip_4" style="display: none;">
        <div class="tip_horn"></div>
        <div class="tip_c">
            <h4><?php echo $medal['name'];?></h4>
            <p><?php echo $medal['description'];?></p>
        </div>
    </div>
<?php } } if(!IS_ROBOT && !empty($_G['setting']['lazyload'])) { ?>
    <script type="text/javascript">
    new lazyload();
    </script>
<?php } if(!IS_ROBOT && $_G['setting']['threadmaxpages'] > 1) { ?>
    <script type="text/javascript">document.onkeyup = function(e){keyPageScroll(e, <?php if($page > 1) { ?>1<?php } else { ?>0<?php } ?>, <?php if($page < $_G['setting']['threadmaxpages'] && $page < $_G['page_next']) { ?>1<?php } else { ?>0<?php } ?>, 'forum.php?mod=viewthread&tid=<?php echo $_G['tid'];?><?php if($_GET['authorid']) { ?>&authorid=<?php echo $_GET['authorid'];?><?php } ?>', <?php echo $page;?>);}</script>
<?php } ?>
</div>

<div class="wp mtn">
    <!--[diy=diy3]--><div id="diy3" class="area"></div><!--[/diy]-->
</div>

<?php if($_G['relatedlinks'] || $_GET['highlight']) { ?>
    <script type="text/javascript">
        var relatedlink = [];
        <?php if(is_array($_G['relatedlinks'])) foreach($_G['relatedlinks'] as $key => $link) { ?>        relatedlink[<?php echo $key;?>] = {'sname':'<?php echo $link['name'];?>', 'surl':'<?php echo $link['url'];?>'};
        <?php } ?>
        <?php $highlights = explode(' ', str_replace('\'', '&#039;', $_GET['highlight']));?>        <?php if(is_array($highlights)) foreach($highlights as $word) { ?>        <?php $key++;?>        relatedlink[<?php echo $key;?>] = {'sname':'<?php echo $word;?>', 'surl':''};
        <?php } ?>
        relatedlinks('postmessage_<?php echo $_G['forum_firstpid'];?>');
    </script>
<?php } if(!empty($_G['cookie']['clearUserdata']) && $_G['cookie']['clearUserdata'] == 'forum') { ?>
    <script type="text/javascript">saveUserdata('forum_'+discuz_uid, '')</script>
<?php } ?>

<script type="text/javascript">
<?php if($_G['forum']['picstyle'] && ($_G['forum']['ismoderator'] || $_G['uid'] == $_G['thread']['authorid'])) { ?>
function showsetcover(obj) {
    if(obj.parentNode.id == 'postmessage_<?php echo $_G['forum_firstpid'];?>') {
        var defheight = <?php echo $_G['setting']['forumpicstyle']['thumbheight'];?>;
        var defwidth = <?php echo $_G['setting']['forumpicstyle']['thumbwidth'];?>;
        var newimgid = 'showcoverimg';
        var imgsrc = obj.src ? obj.src : obj.file;
        if(!imgsrc) return;

        var tempimg=new Image();
        tempimg.src=imgsrc;
        if(tempimg.complete) {
            if(tempimg.width < defwidth || tempimg.height < defheight) return;
        } else {
            return;
        }
        if($(newimgid) && obj.id != newimgid) {
            $(newimgid).id = 'img'+Math.random();
        }
        if($(newimgid+'_menu')) {
            var menudiv = $(newimgid+'_menu');
        } else {
            var menudiv = document.createElement('div');
            menudiv.className = 'tip tip_4 aimg_tip';
            menudiv.id = newimgid+'_menu';
            menudiv.style.position = 'absolute';
            menudiv.style.display = 'none';
            obj.parentNode.appendChild(menudiv);
        }
        menudiv.innerHTML = '<div class="tip_c xs0"><a onclick="showWindow(\'setcover_'+newimgid+'\', this.href)" href="forum.php?mod=ajax&amp;action=setthreadcover&amp;tid=<?php echo $_G['tid'];?>&amp;pid=<?php echo $_G['forum_firstpid'];?>&amp;fid=<?php echo $_G['fid'];?>&amp;imgurl='+imgsrc+'">设为封面</a></div>';
        obj.id = newimgid;
        showMenu({'ctrlid':newimgid,'pos':'12'});
    }
    return;
}
<?php } ?>
function succeedhandle_followmod(url, msg, values) {
    var fObj = $('followmod_'+values['fuid']);
    if(values['type'] == 'add') {
        fObj.innerHTML = '不收听';
        fObj.href = 'home.php?mod=spacecp&ac=follow&op=del&fuid='+values['fuid'];
    } else if(values['type'] == 'del') {
        fObj.innerHTML = '收听TA';
        fObj.href = 'home.php?mod=spacecp&ac=follow&op=add&hash=<?php echo FORMHASH;?>&fuid='+values['fuid'];
    }
}
</script>	</div>
<?php if(empty($topic) || ($topic['usefooter'])) { ?><?php $focusid = getfocus_rand($_G[basescript]);?><?php if($focusid !== null) { ?><?php $focus = $_G['cache']['focus']['data'][$focusid];?><?php $focusnum = count($_G['setting']['focus'][$_G[basescript]]);?><div class="focus" id="sitefocus">
<div class="bm">
<div class="bm_h cl">
<a href="javascript:;" onclick="setcookie('nofocus_<?php echo $_G['basescript'];?>', 1, <?php echo $_G['cache']['focus']['cookie'];?>*3600);$('sitefocus').style.display='none'" class="y" title="关闭">关闭</a>
<h2>
<?php if($_G['cache']['focus']['title']) { ?><?php echo $_G['cache']['focus']['title'];?><?php } else { ?>站长推荐<?php } ?>
<span id="focus_ctrl" class="fctrl"><img src="<?php echo IMGDIR;?>/pic_nv_prev.gif" alt="上一条" title="上一条" id="focusprev" class="cur1" onclick="showfocus('prev');" /> <em><span id="focuscur"></span>/<?php echo $focusnum;?></em> <img src="<?php echo IMGDIR;?>/pic_nv_next.gif" alt="下一条" title="下一条" id="focusnext" class="cur1" onclick="showfocus('next')" /></span>
</h2>
</div>
<div class="bm_c" id="focus_con">
</div>
</div>
</div><?php if(is_array($_G['setting']['focus'][$_G['basescript']])) foreach($_G['setting']['focus'][$_G['basescript']] as $id) { ?><div class="bm_c" style="display: none" id="focus_<?php echo $id;?>">
<dl class="xld cl bbda">
<dt><a href="<?php echo $_G['cache']['focus']['data'][$id]['url'];?>" class="xi2" target="_blank"><?php echo $_G['cache']['focus']['data'][$id]['subject'];?></a></dt>
<?php if($_G['cache']['focus']['data'][$id]['image']) { ?>
<dd class="m"><a href="<?php echo $_G['cache']['focus']['data'][$id]['url'];?>" target="_blank"><img src="<?php echo $_G['cache']['focus']['data'][$id]['image'];?>" alt="<?php echo $_G['cache']['focus']['data'][$id]['subject'];?>" /></a></dd>
<?php } ?>
<dd><?php echo $_G['cache']['focus']['data'][$id]['summary'];?></dd>
</dl>
<p class="ptn cl"><a href="<?php echo $_G['cache']['focus']['data'][$id]['url'];?>" class="xi2 y" target="_blank">查看 &raquo;</a></p>
</div>
<?php } ?>
<script type="text/javascript">
//var focusautoshow = 1;
var focus = new Array();<?php if(is_array($_G['setting']['focus'][$_G['basescript']])) foreach($_G['setting']['focus'][$_G['basescript']] as $key => $id) { ?>focus[<?php echo $key;?>] = '<?php echo $id;?>';
<?php } ?>
var focusnum = <?php echo $focusnum;?>;
if('undefined' == typeof(focus[1])) {
$('focus_ctrl').style.display = 'none';
}
if(!$('focuscur').innerHTML) {
var randomnum = parseInt(Math.round(Math.random() * focusnum));
$('focuscur').innerHTML = Math.max(1, randomnum);
}
showfocus();
var focusautoshow = window.setInterval('showfocus(\'next\', 1);', 5000);
</script>
<?php } if($_G['uid'] && $_G['member']['allowadmincp'] == 1 && $_G['setting']['showpatchnotice'] == 1) { ?>
<style type="text/css">
.patch { width: 300px; }
.patch .bm { border-color: #F26C4F; background: #FFF; }
.patch .allfixed { border-color: #6C3; }
.patch .bm_h { border: solid #FFF; border-width: 1px 1px 0; background: #F26C4F; }
.patch .allfixed .bm_h { background: #6C3; }
.patch h2, .patch .bm_h .y { color: #FFF; }
.patch table { table-layout: fixed; }
.patch th, .patch td { padding: 2px; border-bottom: 1px dotted #CDCDCD; }
.patchdate { width: 70px; }
.patchstat { width: 55px; }
.unfixed { color: #F26C4F; }
</style>
<div class="focus patch" id="patch_notice"></div>
<?php } ?><?php echo adshow("footerbanner/wp a_f/1");?><?php echo adshow("footerbanner/wp a_f/2");?><?php echo adshow("footerbanner/wp a_f/3");?><?php echo adshow("float/a_fl/1");?><?php echo adshow("float/a_fr/2");?><?php echo adshow("couplebanner/a_fl a_cb/1");?><?php echo adshow("couplebanner/a_fr a_cb/2");?><?php echo adshow("cornerbanner/a_cn");?><?php if(!empty($_G['setting']['pluginhooks']['global_footer'])) echo $_G['setting']['pluginhooks']['global_footer'];?>
<div id="ft" class="cl">
        
        <!--底部开始-->
       <div id="footer">
          <div class="foot_content">
          <?php if(is_array($_G['setting']['footernavs'])) foreach($_G['setting']['footernavs'] as $nav) { if($nav['available'] && ($nav['type'] && (!$nav['level'] || ($nav['level'] == 1 && $_G['uid']) || ($nav['level'] == 2 && $_G['adminid'] > 0) || ($nav['level'] == 3 && $_G['adminid'] == 1)) ||
!$nav['type'] && ($nav['id'] == 'stat' && $_G['group']['allowstatdata'] || $nav['id'] == 'report' && $_G['uid'] || $nav['id'] == 'archiver' || $nav['id'] == 'mobile'))) { ?><?php echo $nav['code'];?><span class="pipe">|</span><?php } } ?>

          <span class="foot_text">版权所有&nbsp;&copy;&nbsp;<a href="<?php echo $_G['setting']['siteurl'];?>" target="_blank"><?php echo $_G['setting']['sitename'];?></a></span>
         <!--  <span class="foot_text">&copy; 2001-2012 <a href="http://www.comsenz.com" target="_blank">Comsenz Inc.</a> --> 
         <?php if($_G['setting']['icp']) { ?>( <a href="http://www.miitbeian.gov.cn/" target="_blank"><?php echo $_G['setting']['icp'];?></a> )<?php } ?>
<?php if(!empty($_G['setting']['pluginhooks']['global_footerlink'])) echo $_G['setting']['pluginhooks']['global_footerlink'];?>
<?php if($_G['setting']['statcode']) { ?><?php echo $_G['setting']['statcode'];?><?php } ?></span>
          </div>
          <div class="foot_pliceman">
          <a href="#"><img src="<?php echo IMGDIR;?>/pliceman.jpg" height="45" width="45" border="0"/></a><a href="#">网络警察<br />报警平台</a>
          </div>
       </div>
       <!--底部结束-->
        <?php updatesession();?><?php if($_G['uid'] && $_G['group']['allowinvisible']) { ?>
<script type="text/javascript">
var invisiblestatus = '<?php if($_G['session']['invisible']) { ?>隐身<?php } else { ?>在线<?php } ?>';
var loginstatusobj = $('loginstatusid');
if(loginstatusobj != undefined && loginstatusobj != null) loginstatusobj.innerHTML = invisiblestatus;
</script>
<?php } ?>
</div>

<?php if($upgradecredit !== false) { ?>
<div id="g_upmine_menu" class="tip tip_3" style="display:none;">
<div class="tip_c">
积分 <?php echo $_G['member']['credits'];?>, 距离下一级还需 <?php echo $upgradecredit;?> 积分
</div>
<div class="tip_horn"></div>
</div>
<?php } } ?>
</div>

<?php if(!$_G['setting']['bbclosed']) { if($_G['uid'] && !isset($_G['cookie']['checkpm'])) { ?>
<script src="home.php?mod=spacecp&ac=pm&op=checknewpm&rand=<?php echo $_G['timestamp'];?>" type="text/javascript"></script>
<?php } if($_G['uid'] && helper_access::check_module('follow') && !isset($_G['cookie']['checkfollow'])) { ?>
<script src="home.php?mod=spacecp&ac=follow&op=checkfeed&rand=<?php echo $_G['timestamp'];?>" type="text/javascript"></script>
<?php } if(!isset($_G['cookie']['sendmail'])) { ?>
<script src="home.php?mod=misc&ac=sendmail&rand=<?php echo $_G['timestamp'];?>" type="text/javascript"></script>
<?php } if($_G['uid'] && $_G['member']['allowadmincp'] == 1 && !isset($_G['cookie']['checkpatch'])) { ?>
<script src="misc.php?mod=patch&action=checkpatch&rand=<?php echo $_G['timestamp'];?>" type="text/javascript"></script>
<?php } } if($_GET['diy'] == 'yes') { if(check_diy_perm($topic) && (empty($do) || $do != 'index')) { ?>
<script src="<?php echo $_G['setting']['jspath'];?>common_diy.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<script src="<?php echo $_G['setting']['jspath'];?>portal_diy<?php if(!check_diy_perm($topic, 'layout')) { ?>_data<?php } ?>.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } if($space['self'] && CURMODULE == 'space' && $do == 'index') { ?>
<script src="<?php echo $_G['setting']['jspath'];?>common_diy.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<script src="<?php echo $_G['setting']['jspath'];?>space_diy.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } } if($_G['uid'] && $_G['member']['allowadmincp'] == 1 && $_G['setting']['showpatchnotice'] == 1) { ?>
<script type="text/javascript">patchNotice();</script>
<?php } if($_G['member']['newprompt'] && (empty($_G['cookie']['promptstate_'.$_G['uid']]) || $_G['cookie']['promptstate_'.$_G['uid']] != $_G['member']['newprompt']) && $_GET['do'] != 'notice') { ?>
<script type="text/javascript">noticeTitle();</script>
<?php } ?><?php userappprompt();?><?php if($_G['basescript'] != 'userapp') { ?>
<span id="scrolltop" onclick="window.scrollTo('0','0')">回顶部</span>
<script type="text/javascript">_attachEvent(window, 'scroll', function(){showTopLink();});</script>
<?php } ?><?php output();?></div>
</body>
</html>
