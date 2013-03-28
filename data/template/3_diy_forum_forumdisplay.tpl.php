<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); hookscriptoutput('forumdisplay');
0
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/eis_y_car/common/header.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/eis_y_car/forum/forumdisplay_list.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/default/forum/forumdisplay_sort.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/eis_y_car/common/footer.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/default/common/header_common.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/eis_y_car/common/pubsearchform.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/default/forum/search_sortoption.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
|| checktplrefresh('./template/eis_y_car/forum/forumdisplay.htm', './template/default/forum/search_sortoption.htm', 1364481552, 'diy', './data/template/3_diy_forum_forumdisplay.tpl.php', './template/eis_y_car', 'forum/forumdisplay')
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
<base href="<?php echo $_G['siteurl'];?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_common.css?<?php echo VERHASH;?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_forum_forumdisplay.css?<?php echo VERHASH;?>" /><?php if($_G['uid'] && isset($_G['cookie']['extstyle']) && strpos($_G['cookie']['extstyle'], TPLDIR) !== false) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['cookie']['extstyle'];?>/style.css" /><?php } elseif($_G['style']['defaultextstyle']) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['style']['defaultextstyle'];?>/style.css" /><?php } ?><script type="text/javascript">var STYLEID = '<?php echo STYLEID;?>', STATICURL = '<?php echo STATICURL;?>', IMGDIR = '<?php echo IMGDIR;?>', VERHASH = '<?php echo VERHASH;?>', charset = '<?php echo CHARSET;?>', discuz_uid = '<?php echo $_G['uid'];?>', cookiepre = '<?php echo $_G['config']['cookie']['cookiepre'];?>', cookiedomain = '<?php echo $_G['config']['cookie']['cookiedomain'];?>', cookiepath = '<?php echo $_G['config']['cookie']['cookiepath'];?>', showusercard = '<?php echo $_G['setting']['showusercard'];?>', attackevasive = '<?php echo $_G['config']['security']['attackevasive'];?>', disallowfloat = '<?php echo $_G['setting']['disallowfloat'];?>', creditnotice = '<?php if($_G['setting']['creditnotice']) { ?><?php echo $_G['setting']['creditnames'];?><?php } ?>', defaultstyle = '<?php echo $_G['style']['defaultextstyle'];?>', REPORTURL = '<?php echo $_G['currenturl_encode'];?>', SITEURL = '<?php echo $_G['siteurl'];?>', JSPATH = '<?php echo $_G['setting']['jspath'];?>';</script>
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
        .eis_taba ul li{ float:left; width:70px; margin-right:2px;}
        .eis_taba ul li a{ height:30px; line-height:28px; display:block; text-align:center; background:url(<?php echo IMGDIR;?>/tab_btn02.jpg) no-repeat 50% 0; }
        .eis_taba ul li.a{ float:left; width:72px; margin-right:2px;}
        .eis_taba ul li.a a{ color:#fff; line-height:29px;background:url(<?php echo IMGDIR;?>/tab_btn01.jpg) no-repeat 50% 0; }
        .eis_taba ul li a:hover{ text-decoration:none}
        .eis_ttp{ border-top:1px solid #9DB3C5 !important; height:30px; line-height:30px; padding-top:1px !important; margin-bottom:2px !important; background:url(<?php echo IMGDIR;?>/tabbg.jpg) repeat-x 0 1px}
        .ttp a, .ttp strong{ padding:0 0 0 12px !important; background:none !important; border:none !important; color:#fff !important}
        .ttp .a a{ border:none !important; background:#fff !important; color:#000 !important;height:28px;padding:0 4px 0 4px;width:60px;}
        .ttp a:hover{ text-decoration:underline}
        .ttp li{padding-top:2px;padding-bottom:0px;}
        #ttp_all a{width:60px;height:30px;}
        .eis_ttp li{ _padding-bottom:0;height:28px;width:72px;}
        .eis_ttp .pipe{ _margin-top:-3px;}
        .tl .tf{}
        .tl .th td, .tl .th th{ padding:8px 0 !important; padding:8px 0 5px\9!important;}
        .tl tr:hover th, .tl tr:hover td{ background:none !important}
        .tl .th, .tl .th tr:hover th, .tl .th tr:hover td{ background-color:#ccc !important}
        
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
                            <?php if(!empty($_G['setting']['pluginhooks']['global_usernav_extra4'])) echo $_G['setting']['pluginhooks']['global_usernav_extra4'];?>
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
    <div id="wp" class="wp"><!--<script src="<?php echo IMGDIR;?>/all.js" type="text/javascript"></script>-->
<script src="<?php echo IMGDIR;?>/jQuery1.8.1.js" type="text/javascript"></script>

<script type="text/javascript">
var j = jQuery.noConflict();
    j(document).ready(function() {
        j('#carflash').s3Slider({
            timeOut:6000 
        });
    });
    
/*(function($){
    $(document).ready(function() {
        $('#carflash').s3Slider({
            timeOut:6000 
        });
    });
})(jQuery)*/
    
</script>
<script src="<?php echo IMGDIR;?>/car_flash.js" type="text/javascript"></script>
<?php if($_G['forum']['ismoderator']) { ?>
    <script src="<?php echo $_G['setting']['jspath'];?>forum_moderate.js?<?php echo VERHASH;?>" type="text/javascript"></script>
<?php } ?>
<style id="diy_style" type="text/css"></style>
<!--[diy=diynavtop]--><div id="diynavtop" class="area"></div><!--[/diy]-->
<div id="pt" class="bm cl">
    <div class="z">
        <a href="./" class="nvhm" title="首页"><?php echo $_G['setting']['bbname'];?></a><em>&raquo;</em>
        <a href="forum.php"<?php if($_G['setting']['forumjump']) { ?> id="fjump" onmouseover="delayShow(this, 'showForummenu(<?php echo $_G['fid'];?>)');" class="showmenu" <?php } ?>><?php echo $_G['setting']['navs']['2']['navname'];?></a>
        <?php echo $navigation;?>
    </div>
    <span style="float:right;">首席版主:<?php echo $moddisplay;?>&nbsp;&nbsp;&nbsp;&nbsp;版主: <?php echo $moderatedby;?></span>
</div>
<!-------------------导航板块--------------------->
<div class="bm bml pbn" style="min-height:110px;border:0px;">
    <div style="width:650px;height:110px;margin:1px;float:left;border:1px solid #ccc;">
        <div style="width:100px;height:110px;float:left;margin:4px">
            <img  width="85" height="85" src="./data/attachment/common/<?php echo $_G['forum']['icon'];?>" alt="<?php echo $_G['forum']['name'];?>" />
        </div>
        <div style="margin:4px;width:520px;height:90px;float:left;">
            <div style="font-size:18px;"><font color="#5a63d3"><?php echo $_G['forum']['name'];?></font>&nbsp;
            <?php if($_G['uid'] == $moderatorid) { ?>
                <span style="color:#787;font-size:14px;">本版版主</span>
            <?php } elseif(empty($_G['uid'])) { ?>
                <a href="forum.php?mod=moderator&amp;fid=<?php echo $_G['forum']['fid'];?>"><span style="color:red;font-size:14px;">申请版主</span></a>&nbsp;&nbsp;
                <a href="forum.php?mod=applyjoin&amp;fid=<?php echo $_G['forum']['fid'];?>" style="font-size:14px;color:red;">申请加入</a>
            <?php } elseif($_G['uid'] != $moderatorid) { ?>
                <a href="forum.php?mod=moderator&amp;fid=<?php echo $_G['forum']['fid'];?>"><span style="color:red;font-size:14px;">申请版主</span></a>
            <?php } ?>
            <?php if($_G['uid']==$applyjoinuid) { ?>
                <?php if($applyjointe=='0') { ?>
                <span style="color:red;font-size:14px;">正在审核</span>
                <?php } elseif($applyjointe=='1') { ?>
                <span style="color:#123;font-size:14px;">已加入
                <?php if($_G['uid'] && $_G['group']['radminid'] > 1) { ?>
                    <a href="forum.php?mod=modcp&amp;fid=<?php echo $_G['fid'];?>" target="_blank">管理本版</a>
                <?php } ?>
            </span>
                <?php } ?>
            <?php } else { ?>
            <a href="forum.php?mod=applyjoin&amp;fid=<?php echo $_G['forum']['fid'];?>" style="font-size:14px;color:red;">申请加入</a>
            <?php } ?>
            </div>
            <div>俱乐部网址：<?php echo 'http://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?></div>
            <div>俱乐部宣言：<?php echo $_G['forum']['rules'];?></div>
            <?php print_r($onlinenum)?>            <div>今日: <?php echo $_G['forum']['todayposts'];?> &nbsp;&nbsp;&nbsp;&nbsp;主帖数: <?php echo $_G['forum']['threads'];?>&nbsp;&nbsp;&nbsp;&nbsp;在线用户：<a href="home.php?mod=space&amp;do=friend&amp;view=online&amp;type=member"><font color="#5a63d3" size="2"><?php echo $online;?>人</font></a>&nbsp;&nbsp;&nbsp;&nbsp;成员数：<?php echo $count+100?>人</div>
        </div>
    </div>
    <div style="width:318px;height:110px;margin:1px 2px 1px 4px;float:left;border:1px solid #ccc;">
        <div style="height:30px;color:#f90606;margin-left:10px;"><strong>论坛帮助: </strong><span style="float:right;margin-right:4px;"><a href="misc.php?mod=faq" style="color:#5a63d3;"><strong>更多>></strong></a></span></div>
        <div style="height:75px;margin-left:20px;font:12px/20px Arial,Helvetica,sans-serif;">
            <ul>
                <li><p><a href="misc.php?mod=faq&amp;action=faq&amp;id=1&amp;messageid=2">用户须知</a></p></li>
                <li><p><a href="misc.php?mod=faq&amp;action=faq&amp;id=1&amp;messageid=2">用户须知</a></p></li>
                <li><p><a href="misc.php?mod=faq&amp;action=faq&amp;id=1&amp;messageid=2">用户须知</a></p></li>
            </ul>
        </div>
    </div>
</div>
<!----------------------导航板块end---------------------><?php echo adshow("text/wp a_t");?><div class="wp">
    <!--[diy=diy1]--><div id="diy1" class="area"></div><!--[/diy]-->
</div>

<div class="boardnav">
    <div id="ct" class="wp cl">
        <!--[if gte IE 9]>
        <style type="text/css">
        .mn{
            overflow:visible;
        }
        </style>
        <![endif]-->
        <div class="mn">
            <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_top'])) echo $_G['setting']['pluginhooks']['forumdisplay_top'];?>
            <?php if($subexists && $_G['page'] == 1) { ?>
                <?php include template('forum/forumdisplay_subforum'); ?>            <?php } ?>
            <div class="drag">
                <!--[diy=diy4]--><div id="diy4" class="area"></div><!--[/diy]-->
            </div>
            <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_middle'])) echo $_G['setting']['pluginhooks']['forumdisplay_middle'];?>
            <?php if(!$subforumonly) { ?>
                <?php if($threadmodcount) { ?>
                <div class="bm">
                    <div class="ntc_l hm xi2">
                        <strong><a href="home.php?mod=space&amp;uid=<?php echo $_G['uid'];?>&amp;do=thread&amp;view=me&amp;type=thread&amp;from=&amp;filter=aduit">您有 <?php echo $threadmodcount;?> 个主题正等待审核中，点击查看</a></strong>
                    </div>
                </div><?php } ?>               
                <div class="wp eis_taba">
                    <ul class="cl">
                        <li class="<?php if(!$_GET['filter']) { ?> a<?php } ?>">
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>">全部主题</a>
                        </li>
                        
                        <li class="<?php if($_GET['filter']==digest) { ?> a<?php } ?>">
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=digest&amp;digest=1">精华</a> </li>
                        <!--
                        <li class="<?php if($_GET['filter']==recommend) { ?> a<?php } ?>">
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=recommend&amp;orderby=recommends&amp;recommend=1">推荐</a>
                        </li>-->

                        <?php if($showpoll) { ?>
                        <li class="<?php if($_GET['specialtype']==poll) { ?> a<?php } ?>">
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=specialtype&amp;specialtype=poll">投票</a>
                        </li>
                        <?php } ?>
                        <?php if($showtrade) { ?>
                        <li class="<?php if($_GET['specialtype']==trade) { ?> a<?php } ?>">
                            <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=specialtype&amp;specialtype=trade<?php echo $forumdisplayadd['specialtype'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>">商品222</a></li><?php } ?>
                        <?php if($showreward) { ?><li class="<?php if($_GET['specialtype']==reward) { ?> a<?php } ?>"><a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=specialtype&amp;specialtype=reward<?php echo $forumdisplayadd['specialtype'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>">悬赏333</a></li><?php } ?>
                        <?php if($showactivity) { ?>
                        <li class="<?php if($_GET['specialtype']==activity) { ?> a<?php } ?>">
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=specialtype&amp;specialtype=activity">活动</a>
                        </li>
                        <?php } ?>
                        <?php if($showdebate) { ?><li class="<?php if($_GET['specialtype']==debate) { ?> a<?php } ?>"><a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=specialtype&amp;specialtype=debate<?php echo $forumdisplayadd['specialtype'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>">辩论555</a></li><?php } ?>
                    </ul>
                </div>
                
                
                <?php if(($_G['forum']['threadtypes'] && $_G['forum']['threadtypes']['listable']) || count($_G['forum']['threadsorts']['types']) >= 0) { ?>
                    <ul id="thread_types" class="ttp bm cl eis_ttp">
                        <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_threadtype_inner'])) echo $_G['setting']['pluginhooks']['forumdisplay_threadtype_inner'];?>
                        <li id="ttp_all" <?php if(!$_GET['typeid'] && !$_GET['sortid']) { ?>class="xw1 a"<?php } ?>>
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?><?php if($_G['forum']['threadsorts']['defaultshow']) { ?>&amp;filter=sortall&amp;sortall=1<?php } ?>
                        <?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>">全部</a></li>
                        <?php if($_G['forum']['threadtypes']) { ?>
                            <?php if(is_array($_G['forum']['threadtypes']['types'])) foreach($_G['forum']['threadtypes']['types'] as $id => $name) { ?>                                <?php if($_GET['typeid'] == $id) { ?>
                                <li class="xw1 a"><a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?><?php if($_GET['sortid']) { ?>&amp;filter=sortid&amp;sortid=<?php echo $_GET['sortid'];?><?php } if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>"><?php if($_G['forum']['threadtypes']['icons'][$id] && $_G['forum']['threadtypes']['prefix'] == 2) { ?><img class="vm" src="<?php echo $_G['forum']['threadtypes']['icons'][$id];?>" alt="" /> <?php } ?><?php echo $name;?></a></li>
                                <?php } else { ?>
                                <li><a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=typeid&amp;typeid=<?php echo $id;?><?php echo $forumdisplayadd['typeid'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>"><?php if($_G['forum']['threadtypes']['icons'][$id] && $_G['forum']['threadtypes']['prefix'] == 2) { ?><img class="vm" src="<?php echo $_G['forum']['threadtypes']['icons'][$id];?>" alt="" /> <?php } ?><?php echo $name;?></a></li>
                                <?php } ?>
                            <?php } ?>
                        <?php } ?>

                        <?php if($_G['forum']['threadsorts']) { ?>
                            <?php if($_G['forum']['threadtypes']) { ?><li><span class="pipe">|</span></li><?php } ?>
                            <?php if(is_array($_G['forum']['threadsorts']['types'])) foreach($_G['forum']['threadsorts']['types'] as $id => $name) { ?>                                <?php if($_GET['sortid'] == $id) { ?>
                                <li class="xw1 a"><a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?><?php if($_GET['typeid']) { ?>&amp;filter=typeid&amp;typeid=<?php echo $_GET['typeid'];?><?php } if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>"><?php echo $name;?></a></li>
                                <?php } else { ?>
                                <li><a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=sortid&amp;sortid=<?php echo $id;?><?php echo $forumdisplayadd['sortid'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>"><?php echo $name;?></a></li>
                                <?php } ?>
                            <?php } ?>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_filter_extra'])) echo $_G['setting']['pluginhooks']['forumdisplay_filter_extra'];?>
                    </ul>
    <div class="bm bw0 pgs cl">
    <?php if(empty($multipage)) { ?>
        <div style="visibility:hidden;width:516px;height:27px;float:left;"></div>
        <span style="margin-left:200px;font-size:14px;">
        <?php if(!$_G['setting']['closeforumorderby']) { ?>
                        排序:
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=author&amp;orderby=dateline<?php echo $forumdisplayadd['author'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新发布</a>|
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=lastpost&amp;orderby=lastpost<?php echo $forumdisplayadd['lastpost'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新回复</a>
        <?php } ?>
    </span>
    <?php if(!$_GET['archiveid']) { ?><a href="javascript:;" id="newspecial" onmouseover="$('newspecial').id = 'newspecialtmp';this.id = 'newspecial';showMenu({'ctrlid':this.id})"<?php if(!$_G['forum']['allowspecialonly'] && empty($_G['forum']['picstyle']) && !$_G['forum']['threadsorts']['required']) { ?> onclick="showWindow('newthread', 'forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>')"<?php } else { ?> onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>';return false;"<?php } ?> title="发新帖" style="float:right;"><img src="<?php echo IMGDIR;?>/pn_post.png" alt="发新帖" /></a><?php } ?>
    <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'])) echo $_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'];?>
    <?php } else { ?>	
    <span id="fd_page_bottom"><?php echo $multipage;?></span>
        <span style="margin-left:300px;font-size:14px;">
        <?php if(!$_G['setting']['closeforumorderby']) { ?>
                        排序:
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=author&amp;orderby=dateline<?php echo $forumdisplayadd['author'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新发布</a>|
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=lastpost&amp;orderby=lastpost<?php echo $forumdisplayadd['lastpost'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新回复</a>
        <?php } ?>
    </span>
    <?php if(!$_GET['archiveid']) { ?><a href="javascript:;" id="newspecial" onmouseover="$('newspecial').id = 'newspecialtmp';this.id = 'newspecial';showMenu({'ctrlid':this.id})"<?php if(!$_G['forum']['allowspecialonly'] && empty($_G['forum']['picstyle']) && !$_G['forum']['threadsorts']['required']) { ?> onclick="showWindow('newthread', 'forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>')"<?php } else { ?> onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>';return false;"<?php } ?> title="发新帖" style="float:right;"><img src="<?php echo IMGDIR;?>/pn_post.png" alt="发新帖" /></a><?php } ?>
    <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'])) echo $_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'];?>
    <?php } ?>
</div>
                    <script type="text/javascript">showTypes('thread_types');</script>
                <?php } ?>
                <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_threadtype_extra'])) echo $_G['setting']['pluginhooks']['forumdisplay_threadtype_extra'];?>
                <?php if(empty($_G['forum']['sortmode'])) { ?>
                    <style type="text/css">
    #threadlist .common a{color:#005EAC;}
    #threadlist .common a:visited {color: #005EAC;}
    #replies{color:#C10000;font:12px/34px Arial,Helvetica,sans-serif;}
    #threadlist .by a{font:12px;}
    .tl .by {width:115px;text-align:center;}
    .tl .num{width:70px;text-align:center;}
    .tl td em{font-size:12px;}
    #threadlist .new a{font:14px Arial,Helvetica,sans-serif}
</style>
<div id="threadlist" class="tl bm" style="position: relative;">
<?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_filter_extra'])) echo $_G['setting']['pluginhooks']['forumdisplay_filter_extra'];?>
<?php if($quicksearchlist && !$_G['gp_archiveid']) { ?>
    <script type="text/javascript">
var forum_optionlist = <?php if($forum_optionlist) { ?>'<?php echo $forum_optionlist;?>'<?php } else { ?>''<?php } ?>;
</script>
<script src="<?php echo $_G['setting']['jspath'];?>threadsort.js?<?php echo VERHASH;?>" type="text/javascript"></script><?php if(is_array($quicksearchlist)) foreach($quicksearchlist as $optionid => $option) { ?><?php $formsearch = '';?>        <?php if(getstatus($option['search'], 1)) { ?>
        <?php
$__VERHASH = VERHASH;$formsearch = <<<EOF

            <div style="
EOF;
 if($option['type'] == 'checkbox') { 
$formsearch .= <<<EOF
clear:left;padding-bottom: 5px;
EOF;
 } else { 
$formsearch .= <<<EOF
float: left;width: 48%;height: 30px; overflow: hidden;
EOF;
 } 
$formsearch .= <<<EOF
">
                <span style="padding-right: 1em;">{$option['title']}:</span>
                
EOF;
 if(in_array($option['type'], array('radio', 'checkbox', 'select', 'range'))) { 
$formsearch .= <<<EOF

                    <span id="select_{$option['identifier']}">
                    
EOF;
 if($option['type'] == 'select') { 
$formsearch .= <<<EOF

                        
EOF;
 if($_GET['searchoption'][$optionid]['value']) { 
$formsearch .= <<<EOF

                            <script type="text/javascript">
                                changeselectthreadsort('{$_GET['searchoption'][$optionid]['value']}', {$optionid}, 'search');
                            </script>
                        
EOF;
 } else { 
$formsearch .= <<<EOF

                            <select name="searchoption[{$optionid}][value]" id="{$option['identifier']}" onchange="changeselectthreadsort(this.value, '{$optionid}', 'search');" class="ps vm">
                                <option value="0">请选择</option>
                            
EOF;
 if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$formsearch .= <<<EOF
                                
EOF;
 if(!$value['foptionid']) { 
$formsearch .= <<<EOF

                                <option value="{$id}">{$value['content']} 
EOF;
 if($value['level'] != 1) { 
$formsearch .= <<<EOF
&raquo;
EOF;
 } 
$formsearch .= <<<EOF
</option>
                                
EOF;
 } 
$formsearch .= <<<EOF

                            
EOF;
 } 
$formsearch .= <<<EOF

                            </select>
<input type="hidden" name="searchoption[{$optionid}][type]" value="{$option['type']}">
                        
EOF;
 } 
$formsearch .= <<<EOF

                    
EOF;
 } elseif($option['type'] != 'checkbox') { 
$formsearch .= <<<EOF

                        <select name="searchoption[{$optionid}][value]" id="{$option['identifier']}" class="ps vm">
                            <option value="0">请选择</option>
                        
EOF;
 if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$formsearch .= <<<EOF
                            <option value="{$id}" 
EOF;
 if($_GET['searchoption'][$optionid]['value'] == $id) { 
$formsearch .= <<<EOF
selected="selected"
EOF;
 } 
$formsearch .= <<<EOF
>{$value}</option>
                        
EOF;
 } 
$formsearch .= <<<EOF

                        </select>
                        <input type="hidden" name="searchoption[{$optionid}][type]" value="{$option['type']}">
                    
EOF;
 } else { 
$formsearch .= <<<EOF

                        
EOF;
 if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$formsearch .= <<<EOF
                            <label><input type="checkbox" class="pc" name="searchoption[{$optionid}][value][{$id}]" value="{$id}" 
EOF;
 if(is_array($_GET['searchoption'][$optionid]) && $_GET['searchoption'][$optionid]['value'][$id]) { 
$formsearch .= <<<EOF
checked="checked"
EOF;
 } 
$formsearch .= <<<EOF
>{$value}</label>
                        
EOF;
 } 
$formsearch .= <<<EOF

                        <input type="hidden" name="searchoption[{$optionid}][type]" value="checkbox">
                    
EOF;
 } 
$formsearch .= <<<EOF

                    </span>
                
EOF;
 } else { 
$formsearch .= <<<EOF

                    
EOF;
 if($option['type'] == 'calendar') { 
$formsearch .= <<<EOF

                        <script src="{$_G['setting']['jspath']}calendar.js?{$__VERHASH}" type="text/javascript"></script>
                        <input type="text" name="searchoption[{$optionid}][value]" size="15" class="px vm" value="
EOF;
 if(is_array($_GET['searchoption'][$optionid])) { 
$formsearch .= <<<EOF
{$_GET['searchoption'][$optionid]['value']}
EOF;
 } 
$formsearch .= <<<EOF
" onclick="showcalendar(event, this, false)" />
                    
EOF;
 } else { 
$formsearch .= <<<EOF

                        <input type="text" name="searchoption[{$optionid}][value]" size="15" class="px vm" value="
EOF;
 if(is_array($_GET['searchoption'][$optionid])) { 
$formsearch .= <<<EOF
{$_GET['searchoption'][$optionid]['value']}
EOF;
 } 
$formsearch .= <<<EOF
" />
                    
EOF;
 } 
$formsearch .= <<<EOF

                
EOF;
 } 
$formsearch .= <<<EOF

            </div>
            
EOF;
?>
<?php } ?>
    <?php $formsearch_html .= $formsearch;?><?php $fontsearch = '';$showoption = array();$tmpcount = 0;?><?php if(getstatus($option['search'], 2)) { ?>
    <?php
$fontsearch = <<<EOF

<tr>
<th width="8%">{$option['title']}:</th>
            <td>
                <ul class="cl">
                    <li
EOF;
 if($_GET[''.$option['identifier']] == 'all') { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1{$filterurladd}&amp;{$option['identifier']}=all{$sorturladdarray[$option['identifier']]}" class="xi2">不限</a></li>

EOF;
 if($option['type'] == 'select') { if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { if($value['foptionid'] == 0) { 
$fontsearch .= <<<EOF

<li
EOF;
 if(preg_match('/^'.$value['optionid'].'\./i', $_GET[''.$option['identifier']]) || preg_match('/^'.$value['optionid'].'$/i', $_GET[''.$option['identifier']])) { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1&amp;{$option['identifier']}={$id}{$sorturladdarray[$option['identifier']]}" class="xi2">{$value['content']}</a></li>

EOF;
 } } if(!($_GET[''.$option['identifier']] == 'all' || !isset($_GET[''.$option['identifier']]))) { if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { if((preg_match('/^'.$value['foptionid'].'\./i', $_GET[''.$option['identifier']]) || preg_match('/^'.$value['foptionid'].'$/i', $_GET[''.$option['identifier']])) && ($showoption[$value['count']][$id] = $value)) { } } if(ksort($showoption)) { } if(is_array($showoption)) foreach($showoption as $optioncount => $values) { if($tmpcount != $optioncount && ($tmpcount = $optioncount)) { 
$fontsearch .= <<<EOF

</ul><ul class="subtsm cl">
EOF;
 if(is_array($values)) foreach($values as $id => $value) { 
$fontsearch .= <<<EOF
<li
EOF;
 if(preg_match('/^'.$value['optionid'].'\./i', $_GET[''.$option['identifier']]) || preg_match('/^'.$value['optionid'].'$/i', $_GET[''.$option['identifier']])) { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1&amp;{$option['identifier']}={$id}{$sorturladdarray[$option['identifier']]}" class="xi2">{$value['content']}</a></li>

EOF;
 } 
$fontsearch .= <<<EOF

</ul><ul>

EOF;
 } } } } else { if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$fontsearch .= <<<EOF
<li
EOF;
 if($_GET[''.$option['identifier']] && !strcmp($id, $_GET[''.$option['identifier']])) { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1&amp;{$option['identifier']}={$id}{$sorturladdarray[$option['identifier']]}" class="xi2">{$value}</a></li>

EOF;
 } } 
$fontsearch .= <<<EOF

                </ul>
            </td>
</tr>

EOF;
?>
     <?php } ?>
     <?php $fontsearch_html .= $fontsearch;?><?php } if($formsearch_html || $fontsearch_html) { ?>
<div>
<?php if($fontsearch_html) { ?>
    <div class="ptn pbn mbm bbs">
    <table id="fontsearch" class="tsm cl">
         <?php echo $fontsearch_html;?>
    </table>
    </div>
<?php } if($formsearch_html) { ?>
    <form method="post" autocomplete="off" name="searhsort" id="searhsort" class="bbs bm_c pns mfm cl" action="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=sortid&amp;sortid=<?php echo $_GET['sortid'];?>">
        <input type="hidden" name="formhash" value="<?php echo FORMHASH;?>" />
        <?php echo $formsearch_html;?>
        <div class="ptm cl"><button type="submit" class="pn pnc" name="searchsortsubmit"><em>搜索</em></button></div>
    </form>
<?php } ?>
</div>
<?php } } ?>
<form method="post" autocomplete="off" name="moderate" id="moderate" action="forum.php?mod=topicadmin&amp;action=moderate&amp;fid=<?php echo $_G['fid'];?>&amp;infloat=yes&amp;nopost=yes">
    <input type="hidden" name="formhash" value="<?php echo FORMHASH;?>" />
    <input type="hidden" name="listextra" value="<?php echo $extra;?>" />
    <table summary="forum_<?php echo $_G['fid'];?>" <?php if(!$separatepos) { ?>id="forum_<?php echo $_G['fid'];?>"<?php } ?> cellspacing="0" cellpadding="0">
    <tbody class="th" style="display:none;">
        <tr>
            <td class="icn">&nbsp;</td>
            <?php if(!$_G['gp_archiveid'] && $_G['forum']['ismoderator']) { ?>
            <td class="o">&nbsp;</td>
            <?php } ?>
            <th>
                置顶区
            </th>
            <td class="by">作者</td>
            <td class="num">点击/回复</td>
            <td class="by">最后发表</td>
        </tr>
    </tbody>
    <?php if((!$simplestyle || !$_G['forum']['allowside'] && $page == 1) && !empty($announcement)) { ?>
        <tbody>
            <tr>
                <td><img src="<?php echo IMGDIR;?>/ann_icon.gif" alt="公告" /></td>
                <?php if($_G['forum']['ismoderator'] && !$_G['gp_archiveid']) { ?><td>&nbsp;</td><?php } ?>
                <th><strong>公告: <?php if(empty($announcement['type'])) { ?><a href="forum.php?mod=announcement&amp;id=<?php echo $announcement['id'];?>#<?php echo $announcement['id'];?>" target="_blank"><?php echo $announcement['subject'];?></a><?php } else { ?><a href="<?php echo $announcement['message'];?>" target="_blank"><?php echo $announcement['subject'];?></a><?php } ?></strong></th>
                <td>
                    <cite><a href="home.php?mod=space&amp;uid=<?php echo $announcement['authorid'];?>"><?php echo $announcement['author'];?></a></cite>
                    <em><?php echo $announcement['starttime'];?></em>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </tbody>
    <?php } ?>
    <?php if($_G['forum_threadcount']) { ?>
        <?php if(is_array($_G['forum_threadlist'])) foreach($_G['forum_threadlist'] as $key => $thread) { ?>        <?php if($_G['setting']['forumseparator'] == 1 && $separatepos == $key + 1) { ?>
            <tbody class="th">
                <tr>
                    <td class="icn">&nbsp;</td>
                    <?php if($_G['forum']['ismoderator'] && !$_G['gp_archiveid']) { ?>
                    <td>&nbsp;</td>
                    <?php } ?>
                    <th><strong>板块主题</strong></th>
                    <td class="by">作者</td>
                    <td class="num">点击/回复</td>
                    <td class="by">最后发表</td>
                </tr>
            </tbody>
        <?php } ?>
        
        <!-- 置顶-->

                <?php if($tr != $thread['displayorder']) { ?>
                <?php if($thread['displayorder'] == 1) { ?>
                <tbody class="th">
                    <tr>
                        <td class="icn">&nbsp;</td>
                        <?php if(!$_G['gp_archiveid'] && $_G['forum']['ismoderator']) { ?>
                        <td class="o">&nbsp;</td>
                        <?php } ?>
                        <th><strong>本版置顶</strong></th>
                        <td class="by">作者</td>
                        <td class="num">点击/回复</td>
                        <td class="by">最后发表</td>
                    </tr>
                </tbody>
                <?php } elseif($thread['displayorder'] == 2) { ?>
                <tbody class="th">
                    <tr>
                        <td class="icn">&nbsp;</td>
                        <?php if(!$_G['gp_archiveid'] && $_G['forum']['ismoderator']) { ?>
                        <td class="o">&nbsp;</td>
                        <?php } ?>
                        <th><strong>分区置顶</strong></th>
                        <td class="by">作者</td>
                        <td class="num">点击/回复</td>
                        <td class="by">最后发表</td>
                    </tr>
                </tbody>
                <?php } elseif($thread['displayorder'] == 3) { ?>
                <tbody class="th">
                    <tr>
                        <td class="icn">&nbsp;</td>
                        <?php if(!$_G['gp_archiveid'] && $_G['forum']['ismoderator']) { ?>
                        <td class="o">&nbsp;</td>
                        <?php } ?>
                        <th><strong>全区置顶</strong></th>
                        <td class="by">作者</td>
                        <td class="num">点击/回复</td>
                        <td class="by">最后发表</td>
                    </tr>
                </tbody>
                <?php } ?>
                <?php $tr = $thread['displayorder'];?>                <?php } ?>
        <tbody id="<?php echo $thread['id'];?>">
            <tr>
                <td class="icn">
                    <a href="forum.php?mod=viewthread&amp;tid=<?php echo $thread['tid'];?>&amp;<?php if($_G['gp_archiveid']) { ?>archiveid=<?php echo $_G['gp_archiveid'];?>&amp;<?php } ?>extra=<?php echo $extra;?>" title="新窗口打开" target="_blank">
                    <?php if($thread['folder'] == 'lock') { ?>
                        <img src="<?php echo IMGDIR;?>/folder_lock.gif" />
                    <?php } elseif(in_array($thread['displayorder'], array(1, 2, 3, 4))) { ?>
                        <img src="<?php echo IMGDIR;?>/pin_<?php echo $thread['displayorder'];?>.gif" alt="<?php echo $_G['setting']['threadsticky'][3-$thread['displayorder']];?>" />
                    <?php } elseif($thread['digest'] > 0 && $_G['gp_filter'] != 'digest') { ?>
                        <img src="<?php echo IMGDIR;?>/digest_<?php echo $thread['digest'];?>.gif" class="vm" alt="" title="精华 <?php echo $thread['digest'];?>" />
                    <?php } elseif($thread['digest'] > 0 && $_G['gp_filter'] == 'digest') { ?>
                        <img src="<?php echo IMGDIR;?>/digest_<?php echo $thread['digest'];?>.gif" class="vm" alt="" title="精华 <?php echo $thread['digest'];?>" />
                    <?php } else { ?>
                        <img src="<?php echo IMGDIR;?>/folder_<?php echo $thread['folder'];?>.gif" />
                    <?php } ?>
                    </a>
                </td>
                <?php if(!$_G['gp_archiveid'] && $_G['forum']['ismoderator']) { ?>
                <td class="o">
                    <?php if($thread['fid'] == $_G['fid'] && $thread['digest'] >= 0) { ?>
                        <?php if($thread['displayorder'] <= 3 || $_G['adminid'] == 1) { ?>
                            <input onclick="tmodclick(this)" type="checkbox" class="pc" name="moderate[]" value="<?php echo $thread['tid'];?>" />
                        <?php } else { ?>
                            <input type="checkbox" disabled="disabled" />
                        <?php } ?>
                    <?php } else { ?>
                        <input type="checkbox" disabled="disabled" />
                    <?php } ?>
                </td>
                <?php } ?>
                <th class="<?php echo $thread['folder'];?>">
                    <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_thread'][$key])) { ?>
                        <label><?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_thread'][$key])) echo $_G['setting']['pluginhooks']['forumdisplay_thread'][$key];?></label>
                    <?php } ?>
                    <?php echo $thread['sorthtml'];?> <?php echo $thread['typehtml'];?>
                    <?php if($thread['moved']) { ?>
                        移动:<?php $thread[tid]=$thread[closed];?>                    <?php } ?>					
                    <?php if($thread['isgroup'] == 1 && $thread['displayorder'] < 3) { ?>
                        <?php $thread[tid]=$thread[closed];?>                        <?php echo $thread['displayorder'];?>[<a href="forum.php?mod=forumdisplay&amp;action=list&amp;fid=<?php echo $groupnames[$thread['tid']]['fid'];?>" target="_blank"><?php echo $groupnames[$thread['tid']]['name'];?></a>]
                    <?php } ?>
                    <a href="forum.php?mod=viewthread&amp;tid=<?php echo $thread['tid'];?>&amp;<?php if($_G['gp_archiveid']) { ?>archiveid=<?php echo $_G['gp_archiveid'];?>&amp;<?php } ?>extra=<?php echo $extra;?>"<?php echo $thread['highlight'];?><?php if($thread['isgroup'] == 1 || $thread['forumstick']) { ?> target="_blank"<?php } else { ?> onclick="atarget(this)"<?php } ?>><?php echo $thread['subject'];?></a>
                    <?php if($thread['readperm']) { ?> - [阅读权限 <span class="bold"><?php echo $thread['readperm'];?></span>]<?php } ?>
                    <?php if($thread['price'] > 0) { ?>
                        <?php if($thread['special'] == '3') { ?>
                        - <span style="color: #C60">[悬赏<?php echo $_G['setting']['extcredits'][$_G['setting']['creditstransextra']['2']]['title'];?> <span class="bold"><?php echo $thread['price'];?></span> <?php echo $_G['setting']['extcredits'][$_G['setting']['creditstransextra']['2']]['unit'];?>]</span>
                        <?php } else { ?>
                        - [售价 <?php echo $_G['setting']['extcredits'][$_G['setting']['creditstransextra']['1']]['title'];?> <span class="bold"><?php echo $thread['price'];?></span> <?php echo $_G['setting']['extcredits'][$_G['setting']['creditstransextra']['1']]['unit'];?>]
                        <?php } ?>
                    <?php } elseif($thread['special'] == '3' && $thread['price'] < 0) { ?>
                        - [已解决]
                    <?php } ?>
                    <?php if($thread['attachment'] == 2) { ?>
                        <img src="<?php echo STATICURL;?>image/filetype/image_s.gif" alt="" title="图片附件" class="vm" />
                    <?php } elseif($thread['attachment'] == 1) { ?>
                        <img src="<?php echo STATICURL;?>image/filetype/common.gif" alt="" title="附件" class="vm" />
                    <?php } ?>
                    <?php if($thread['displayorder'] == 0) { ?>
                        <?php if($thread['recommendicon'] && $_G['gp_filter'] != 'recommend') { ?>
                            <img src="<?php echo IMGDIR;?>/recommend_<?php echo $thread['recommendicon'];?>.gif" class="vm" alt="" title="评价指数" />
                        <?php } ?>
                        <?php if($thread['heatlevel']) { ?>
                            <img src="<?php echo IMGDIR;?>/hot_<?php echo $thread['heatlevel'];?>.gif" class="vm" alt="" title="<?php echo $thread['heatlevel'];?> 级热门" />
                        <?php } ?>
                        
                        <?php if($thread['folder'] == 'lock') { ?>
                            <img src="<?php echo IMGDIR;?>/folder_lock.gif" />
                        <?php } elseif($thread['special'] == 1) { ?>
                            <img src="<?php echo IMGDIR;?>/pollsmall.gif" alt="投票" />
                        <?php } elseif($thread['special'] == 2) { ?>
                            <img src="<?php echo IMGDIR;?>/tradesmall.gif" alt="商品" />
                        <?php } elseif($thread['special'] == 3) { ?>
                            <img src="<?php echo IMGDIR;?>/rewardsmall.gif" alt="悬赏" />
                        <?php } elseif($thread['special'] == 4) { ?>
                            <img src="<?php echo IMGDIR;?>/activitysmall.gif" alt="活动" />
                        <?php } elseif($thread['special'] == 5) { ?>
                            <img src="<?php echo IMGDIR;?>/debatesmall.gif" alt="辩论" />
                        <?php } ?>
                        <?php if($thread['rate'] > 0) { ?>
                            <img src="<?php echo IMGDIR;?>/agree.gif" class="vm" alt="" title="帖子被加分" />
                        <?php } ?>
                    <?php } ?>
                    <?php if($thread['multipage']) { ?>
                        <span class="tps"><?php echo $thread['multipage'];?></span>
                    <?php } ?>
                </th>
                <td class="by">
                    <cite>
                    <?php if($thread['authorid'] && $thread['author']) { ?>
                        <a href="home.php?mod=space&amp;uid=<?php echo $thread['authorid'];?>"><?php echo $thread['author'];?></a>
                    <?php } else { ?>
                        <?php if($_G['forum']['ismoderator']) { ?>
                            <a href="home.php?mod=space&amp;uid=<?php echo $thread['authorid'];?>">匿名</a>
                        <?php } else { ?>
                            匿名
                        <?php } ?>
                    <?php } ?>
                    </cite>
                    <em><?php echo $thread['dateline'];?></em>
                </td>
                <td class="num"><a class="lit" id="replies"><?php echo $thread['replies'];?></a>/<a><?php echo $thread['views'];?></a></td>
                <td class="by">
                    <cite><?php if($thread['lastposter']) { ?><a href="<?php if($thread['digest'] != -2) { ?>home.php?mod=space&username=<?php echo $thread['lastposterenc'];?><?php } else { ?>forum.php?mod=viewthread&tid=<?php echo $thread['tid'];?>&amp;page=<?php echo max(1, $thread['pages']);; } ?>"><?php echo $thread['lastposter'];?></a><?php } else { ?>匿名<?php } ?></cite>
                    <em><a style="font-family:Arial,Helvetica,sans-serif;font-size:12px;" href="<?php if($thread['digest'] != -2) { ?>forum.php?mod=redirect&tid=<?php echo $thread['tid'];?>&goto=lastpost<?php echo $highlight;?>#lastpost<?php } else { ?>forum.php?mod=viewthread&tid=<?php echo $thread['tid'];?>&amp;page=<?php echo max(1, $thread['pages']);; } ?>"><?php echo $thread['lastpost'];?></a></em>
                </td>
            </tr>
        </tbody>
        <?php } ?>
    <?php } else { ?>
        <tbody><tr><th colspan="<?php if(!$_G['gp_archiveid'] && $_G['forum']['ismoderator']) { if(!$simplestyle) { ?>5<?php } else { ?>6<?php } } else { if(!$simplestyle) { ?>4<?php } else { ?>5<?php } } ?>"><p class="emp">本版块或指定的范围内尚无主题</p></th></tr></tbody>
    <?php } ?>
    </table>
    <?php if($_G['forum']['ismoderator'] && $_G['forum_threadcount']) { ?>
        <?php include template('forum/topicadmin_modlayer'); ?>    <?php } ?>
</form>
</div>
    <div class="bm bw0 pgs cl">
    <?php if(empty($multipage)) { ?>
        <div style="visibility:hidden;width:516px;height:27px;float:left;"></div>
        <span style="margin-left:200px;font-size:14px;">
        <?php if(!$_G['setting']['closeforumorderby']) { ?>
                        排序:
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=author&amp;orderby=dateline<?php echo $forumdisplayadd['author'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新发布</a>|
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=lastpost&amp;orderby=lastpost<?php echo $forumdisplayadd['lastpost'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新回复</a>
        <?php } ?>
    </span>
    <?php if(!$_GET['archiveid']) { ?><a href="javascript:;" id="newspecial" onmouseover="$('newspecial').id = 'newspecialtmp';this.id = 'newspecial';showMenu({'ctrlid':this.id})"<?php if(!$_G['forum']['allowspecialonly'] && empty($_G['forum']['picstyle']) && !$_G['forum']['threadsorts']['required']) { ?> onclick="showWindow('newthread', 'forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>')"<?php } else { ?> onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>';return false;"<?php } ?> title="发新帖" style="float:right;"><img src="<?php echo IMGDIR;?>/pn_post.png" alt="发新帖" /></a><?php } ?>
    <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'])) echo $_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'];?>
    <?php } else { ?>	
    <span id="fd_page_bottom"><?php echo $multipage;?></span>
        <span style="margin-left:200px;font-size:14px;">
        <?php if(!$_G['setting']['closeforumorderby']) { ?>
                        排序:
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=author&amp;orderby=dateline<?php echo $forumdisplayadd['author'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新发布</a>|
                        <a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=lastpost&amp;orderby=lastpost<?php echo $forumdisplayadd['lastpost'];?><?php if($_GET['archiveid']) { ?>&amp;archiveid=<?php echo $_GET['archiveid'];?><?php } ?>" style="color:#5a63d3;">最新回复</a>
        <?php } ?>
    </span>
    <?php if(!$_GET['archiveid']) { ?><a href="javascript:;" id="newspecial" onmouseover="$('newspecial').id = 'newspecialtmp';this.id = 'newspecial';showMenu({'ctrlid':this.id})"<?php if(!$_G['forum']['allowspecialonly'] && empty($_G['forum']['picstyle']) && !$_G['forum']['threadsorts']['required']) { ?> onclick="showWindow('newthread', 'forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>')"<?php } else { ?> onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>';return false;"<?php } ?> title="发新帖" style="float:right;"><img src="<?php echo IMGDIR;?>/pn_post.png" alt="发新帖" /></a><?php } ?>
    <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'])) echo $_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'];?>
    <?php } ?>
</div>
<style>
    .xd_t{
        height:336px;
        width:974px;
        border:1px solid #ccc;
        padding-bottom:10px;
    }
    .xd_t ul li{
        float:left;
        list-style:none;
        width:186px;
        height:140px;
        background:#ccc;
        margin:5px 4px;
    }
    .xd_t1{
        height:146px;
        margin-top:1px;
    }
    .xd_t3{
        height:28px;
        width:974px;
        margin:3px 0;
    }
    .xd_t2{
        height:146px;
    }
    .xd_img{
        width:170px;
        height:88px;
        margin:1px 8px 4px 8px;
    }
    .xd_title{
        height:22px;
        margin:1px;
        text-align:center;
    }
    .xd_zz{
        height:20px;
        padding:1px 2px;
        text-align:center;
    }
</style>
<div class="xd_t">
    <div class="xd_t1">
        <ul>
            <li>
                <div class="xd_img"><img src="info.gif" width="170px" height="88"></div>
                <div class="xd_title"><a href="#">这是标题</a></div>
                <div class="xd_zz"><a href="#">这里是作者</a></div>
            </li>
            <li>
                <div class="xd_img"><img src="info.gif" width="170px" height="88"></div>
                <div class="xd_title"><a href="#">这是标题</a></div>
                <div class="xd_zz"><a href="#">这里是作者</a></div>
            </li>
            <li>
                <div class="xd_img"><img src="info.gif" width="170px" height="88"></div>
                <div class="xd_title"><a href="#">这是标题</a></div>
                <div class="xd_zz"><a href="#">这里是作者</a></div>
            </li>
            <li>
                <div class="xd_img"><img src="info.gif" width="170px" height="88"></div>
                <div class="xd_title"><a href="#">这是标题</a></div>
                <div class="xd_zz"><a href="#">这里是作者</a></div>
            </li>
            <li>
                <div class="xd_img"><img src="info.gif" width="170px" height="88"></div>
                <div class="xd_title"><a href="#">这是标题</a></div>
                <div class="xd_zz"><a href="#">这里是作者</a></div>
            </li>
        </ul>
    </div>
    <div class="xd_t3"></div>
    <div class="xd_t2">
        <ul>
            <li>11</li>
            <li>22</li>
            <li>33</li>
            <li>44</li>
            <li>55</li>
        </ul>
    </div>
</div>                <?php } else { ?>
                    <div id="threadlist" class="bm bmw"<?php if($_G['uid']) { ?> style="position: relative;"<?php } ?>>
<?php if($quicksearchlist && !$_GET['archiveid']) { ?><script type="text/javascript">
var forum_optionlist = <?php if($forum_optionlist) { ?>'<?php echo $forum_optionlist;?>'<?php } else { ?>''<?php } ?>;
</script>
<script src="<?php echo $_G['setting']['jspath'];?>threadsort.js?<?php echo VERHASH;?>" type="text/javascript"></script><?php if(is_array($quicksearchlist)) foreach($quicksearchlist as $optionid => $option) { ?><?php $formsearch = '';?>        <?php if(getstatus($option['search'], 1)) { ?>
        <?php
$__VERHASH = VERHASH;$formsearch = <<<EOF

            <div style="
EOF;
 if($option['type'] == 'checkbox') { 
$formsearch .= <<<EOF
clear:left;padding-bottom: 5px;
EOF;
 } else { 
$formsearch .= <<<EOF
float: left;width: 48%;height: 30px; overflow: hidden;
EOF;
 } 
$formsearch .= <<<EOF
">
                <span style="padding-right: 1em;">{$option['title']}:</span>
                
EOF;
 if(in_array($option['type'], array('radio', 'checkbox', 'select', 'range'))) { 
$formsearch .= <<<EOF

                    <span id="select_{$option['identifier']}">
                    
EOF;
 if($option['type'] == 'select') { 
$formsearch .= <<<EOF

                        
EOF;
 if($_GET['searchoption'][$optionid]['value']) { 
$formsearch .= <<<EOF

                            <script type="text/javascript">
                                changeselectthreadsort('{$_GET['searchoption'][$optionid]['value']}', {$optionid}, 'search');
                            </script>
                        
EOF;
 } else { 
$formsearch .= <<<EOF

                            <select name="searchoption[{$optionid}][value]" id="{$option['identifier']}" onchange="changeselectthreadsort(this.value, '{$optionid}', 'search');" class="ps vm">
                                <option value="0">请选择</option>
                            
EOF;
 if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$formsearch .= <<<EOF
                                
EOF;
 if(!$value['foptionid']) { 
$formsearch .= <<<EOF

                                <option value="{$id}">{$value['content']} 
EOF;
 if($value['level'] != 1) { 
$formsearch .= <<<EOF
&raquo;
EOF;
 } 
$formsearch .= <<<EOF
</option>
                                
EOF;
 } 
$formsearch .= <<<EOF

                            
EOF;
 } 
$formsearch .= <<<EOF

                            </select>
<input type="hidden" name="searchoption[{$optionid}][type]" value="{$option['type']}">
                        
EOF;
 } 
$formsearch .= <<<EOF

                    
EOF;
 } elseif($option['type'] != 'checkbox') { 
$formsearch .= <<<EOF

                        <select name="searchoption[{$optionid}][value]" id="{$option['identifier']}" class="ps vm">
                            <option value="0">请选择</option>
                        
EOF;
 if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$formsearch .= <<<EOF
                            <option value="{$id}" 
EOF;
 if($_GET['searchoption'][$optionid]['value'] == $id) { 
$formsearch .= <<<EOF
selected="selected"
EOF;
 } 
$formsearch .= <<<EOF
>{$value}</option>
                        
EOF;
 } 
$formsearch .= <<<EOF

                        </select>
                        <input type="hidden" name="searchoption[{$optionid}][type]" value="{$option['type']}">
                    
EOF;
 } else { 
$formsearch .= <<<EOF

                        
EOF;
 if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$formsearch .= <<<EOF
                            <label><input type="checkbox" class="pc" name="searchoption[{$optionid}][value][{$id}]" value="{$id}" 
EOF;
 if(is_array($_GET['searchoption'][$optionid]) && $_GET['searchoption'][$optionid]['value'][$id]) { 
$formsearch .= <<<EOF
checked="checked"
EOF;
 } 
$formsearch .= <<<EOF
>{$value}</label>
                        
EOF;
 } 
$formsearch .= <<<EOF

                        <input type="hidden" name="searchoption[{$optionid}][type]" value="checkbox">
                    
EOF;
 } 
$formsearch .= <<<EOF

                    </span>
                
EOF;
 } else { 
$formsearch .= <<<EOF

                    
EOF;
 if($option['type'] == 'calendar') { 
$formsearch .= <<<EOF

                        <script src="{$_G['setting']['jspath']}calendar.js?{$__VERHASH}" type="text/javascript"></script>
                        <input type="text" name="searchoption[{$optionid}][value]" size="15" class="px vm" value="
EOF;
 if(is_array($_GET['searchoption'][$optionid])) { 
$formsearch .= <<<EOF
{$_GET['searchoption'][$optionid]['value']}
EOF;
 } 
$formsearch .= <<<EOF
" onclick="showcalendar(event, this, false)" />
                    
EOF;
 } else { 
$formsearch .= <<<EOF

                        <input type="text" name="searchoption[{$optionid}][value]" size="15" class="px vm" value="
EOF;
 if(is_array($_GET['searchoption'][$optionid])) { 
$formsearch .= <<<EOF
{$_GET['searchoption'][$optionid]['value']}
EOF;
 } 
$formsearch .= <<<EOF
" />
                    
EOF;
 } 
$formsearch .= <<<EOF

                
EOF;
 } 
$formsearch .= <<<EOF

            </div>
            
EOF;
?>
<?php } ?>
    <?php $formsearch_html .= $formsearch;?><?php $fontsearch = '';$showoption = array();$tmpcount = 0;?><?php if(getstatus($option['search'], 2)) { ?>
    <?php
$fontsearch = <<<EOF

<tr>
<th width="8%">{$option['title']}:</th>
            <td>
                <ul class="cl">
                    <li
EOF;
 if($_GET[''.$option['identifier']] == 'all') { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1{$filterurladd}&amp;{$option['identifier']}=all{$sorturladdarray[$option['identifier']]}" class="xi2">不限</a></li>

EOF;
 if($option['type'] == 'select') { if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { if($value['foptionid'] == 0) { 
$fontsearch .= <<<EOF

<li
EOF;
 if(preg_match('/^'.$value['optionid'].'\./i', $_GET[''.$option['identifier']]) || preg_match('/^'.$value['optionid'].'$/i', $_GET[''.$option['identifier']])) { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1&amp;{$option['identifier']}={$id}{$sorturladdarray[$option['identifier']]}" class="xi2">{$value['content']}</a></li>

EOF;
 } } if(!($_GET[''.$option['identifier']] == 'all' || !isset($_GET[''.$option['identifier']]))) { if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { if((preg_match('/^'.$value['foptionid'].'\./i', $_GET[''.$option['identifier']]) || preg_match('/^'.$value['foptionid'].'$/i', $_GET[''.$option['identifier']])) && ($showoption[$value['count']][$id] = $value)) { } } if(ksort($showoption)) { } if(is_array($showoption)) foreach($showoption as $optioncount => $values) { if($tmpcount != $optioncount && ($tmpcount = $optioncount)) { 
$fontsearch .= <<<EOF

</ul><ul class="subtsm cl">
EOF;
 if(is_array($values)) foreach($values as $id => $value) { 
$fontsearch .= <<<EOF
<li
EOF;
 if(preg_match('/^'.$value['optionid'].'\./i', $_GET[''.$option['identifier']]) || preg_match('/^'.$value['optionid'].'$/i', $_GET[''.$option['identifier']])) { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1&amp;{$option['identifier']}={$id}{$sorturladdarray[$option['identifier']]}" class="xi2">{$value['content']}</a></li>

EOF;
 } 
$fontsearch .= <<<EOF

</ul><ul>

EOF;
 } } } } else { if(is_array($option['choices'])) foreach($option['choices'] as $id => $value) { 
$fontsearch .= <<<EOF
<li
EOF;
 if($_GET[''.$option['identifier']] && !strcmp($id, $_GET[''.$option['identifier']])) { 
$fontsearch .= <<<EOF
 class="a"
EOF;
 } 
$fontsearch .= <<<EOF
><a href="forum.php?mod=forumdisplay&amp;fid={$_G['fid']}&amp;filter=sortid&amp;sortid={$_GET['sortid']}&amp;searchsort=1&amp;{$option['identifier']}={$id}{$sorturladdarray[$option['identifier']]}" class="xi2">{$value}</a></li>

EOF;
 } } 
$fontsearch .= <<<EOF

                </ul>
            </td>
</tr>

EOF;
?>
     <?php } ?>
     <?php $fontsearch_html .= $fontsearch;?><?php } if($formsearch_html || $fontsearch_html) { ?>
<div>
<?php if($fontsearch_html) { ?>
    <div class="ptn pbn mbm bbs">
    <table id="fontsearch" class="tsm cl">
         <?php echo $fontsearch_html;?>
    </table>
    </div>
<?php } if($formsearch_html) { ?>
    <form method="post" autocomplete="off" name="searhsort" id="searhsort" class="bbs bm_c pns mfm cl" action="forum.php?mod=forumdisplay&amp;fid=<?php echo $_G['fid'];?>&amp;filter=sortid&amp;sortid=<?php echo $_GET['sortid'];?>">
        <input type="hidden" name="formhash" value="<?php echo FORMHASH;?>" />
        <?php echo $formsearch_html;?>
        <div class="ptm cl"><button type="submit" class="pn pnc" name="searchsortsubmit"><em>搜索</em></button></div>
    </form>
<?php } ?>
</div>
<?php } } ?>
<?php echo $sorttemplate['header'];?>
<form method="post" autocomplete="off" name="moderate" id="moderate" action="forum.php?mod=topicadmin&amp;action=moderate&amp;fid=<?php echo $_G['fid'];?>&amp;infloat=yes&amp;nopost=yes">
<?php echo $sorttemplate['body'];?>
<?php if($_G['forum']['ismoderator'] && $_G['forum_threadcount']) { include template('forum/topicadmin_modlayer'); } ?>
</form>
<?php echo $sorttemplate['footer'];?>
</div>

<div class="bm bw0 pgs cl">
<?php echo $multipage;?>
<span <?php if($_G['setting']['visitedforums']) { ?>id="visitedforumstmp" onmouseover="$('visitedforums').id = 'visitedforumstmp';this.id = 'visitedforums';showMenu({'ctrlid':this.id,'pos':'21'})"<?php } ?> class="pgb y"><a href="forum.php">返&nbsp;回</a></span>
<?php if(!$_GET['archiveid']) { ?><a href="javascript:;" id="newspecialtmp" onmouseover="$('newspecial').id = 'newspecialtmp';this.id = 'newspecial';showMenu({'ctrlid':this.id})"<?php if(!$_G['forum']['allowspecialonly'] && empty($_G['forum']['picstyle'])) { ?> onclick="showWindow('newthread', 'forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>')"<?php } else { ?> onclick="location.href='forum.php?mod=post&action=newthread&fid=<?php echo $_G['fid'];?>';return false;"<?php } ?> title="发新帖"><img src="<?php echo IMGDIR;?>/pn_post.png" alt="发新帖" /></a><?php } ?>
<?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'])) echo $_G['setting']['pluginhooks']['forumdisplay_postbutton_bottom'];?>
</div>                <?php } ?>
            <?php } ?>
            <!--[diy=diyfastposttop]--><div id="diyfastposttop" class="area"></div><!--[/diy]-->
            <!-------------------------------------加载底部编辑地址------------------------------------->
            <!--<?php echo $fastpost;?>-->
            <!--template forum/forumdisplay_fastpost-->
            <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_bottom'])) echo $_G['setting']['pluginhooks']['forumdisplay_bottom'];?>
            <!--[diy=diyforumdisplaybottom]--><div id="diyforumdisplaybottom" class="area"></div><!--[/diy]-->
        </div>

        
    </div>
</div>
<?php if($_G['group']['allowpost'] && ($_G['group']['allowposttrade'] || $_G['group']['allowpostpoll'] || $_G['group']['allowpostreward'] || $_G['group']['allowpostactivity'] || $_G['group']['allowpostdebate'] || $_G['setting']['threadplugins'] || $_G['forum']['threadsorts'])) { ?>
    <ul class="p_pop" id="newspecial_menu" style="display: none">
        <?php if(!$_G['forum']['allowspecialonly']) { ?><li><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>" style="font-size:12px;">发表帖子</a></li><?php } ?>
        <?php if($_G['forum']['threadsorts'] && !$_G['forum']['allowspecialonly']) { ?>
            <?php if(is_array($_G['forum']['threadsorts']['types'])) foreach($_G['forum']['threadsorts']['types'] as $id => $threadsorts) { ?>                <?php if($_G['forum']['threadsorts']['show'][$id]) { ?>
                    <li class="popupmenu_option"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;extra=<?php echo $extra;?>&amp;sortid=<?php echo $id;?>" style="font-size:12px;"><?php echo $threadsorts;?></a></li>
                <?php } ?>
            <?php } ?>
        <?php } ?>
        <?php if($_G['group']['allowpostpoll']) { ?><li class="poll"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=1" style="font-size:12px;">发起投票</a></li><?php } ?>
        <?php if($_G['group']['allowpostreward']) { ?><li class="reward"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=3" style="font-size:12px;">发布悬赏</a></li><?php } ?>
        <?php if($_G['group']['allowpostdebate']) { ?><li class="debate"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=5" style="font-size:12px;">发起辩论</a></li><?php } ?>
        <?php if($_G['group']['allowpostactivity']) { ?>
        <li class="activity"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=4" style="font-size:12px;">发起活动</a></li><?php } ?>
        <?php if($_G['group']['allowposttrade']) { ?><li class="trade"><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;special=2" style="font-size:12px;">出售商品</a></li><?php } ?>
        <?php if($_G['setting']['threadplugins']) { ?>
            <?php if(is_array($_G['forum']['threadplugin'])) foreach($_G['forum']['threadplugin'] as $tpid) { ?>                <?php if(array_key_exists($tpid, $_G['setting']['threadplugins']) && @in_array($tpid, $_G['group']['allowthreadplugin'])) { ?>
                    <li class="popupmenu_option"<?php if($_G['setting']['threadplugins'][$tpid]['icon']) { ?> style="background-image:url(source/plugin/<?php echo $tpid;?>/<?php echo $_G['setting']['threadplugins'][$tpid]['icon'];?>)"<?php } ?>><a href="forum.php?mod=post&amp;action=newthread&amp;fid=<?php echo $_G['fid'];?>&amp;specialextra=<?php echo $tpid;?>"><?php echo $_G['setting']['threadplugins'][$tpid]['name'];?></a></li>
                <?php } ?>
            <?php } ?>
        <?php } ?>
    </ul>
<?php } if($_G['setting']['visitedforums'] && $_G['forum']['status'] != 3) { ?>
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
<?php } if($_G['setting']['threadmaxpages'] > 1 && $page && !$subforumonly) { ?>
    <script type="text/javascript">document.onkeyup = function(e){keyPageScroll(e, <?php if($page > 1) { ?>1<?php } else { ?>0<?php } ?>, <?php if($page < $_G['setting']['threadmaxpages'] && $page < $_G['page_next']) { ?>1<?php } else { ?>0<?php } ?>, 'forum.php?mod=forumdisplay&fid=<?php echo $_G['fid'];?>&filter=<?php echo $filter;?>&orderby=<?php echo $_GET['orderby'];?><?php echo $forumdisplayadd['page'];?>&<?php echo $multipage_archive;?>', <?php echo $page;?>);}</script>
<?php } if(empty($_G['forum']['picstyle']) && $_GET['orderby'] == 'lastpost' && empty($_GET['filter']) ) { ?>
    <script type="text/javascript">checkForumnew_handle = setTimeout(function () {checkForumnew(<?php echo $_G['fid'];?>, lasttime);}, checkForumtimeout);</script>
<?php } ?>

<div class="wp mtn">
    <!--[diy=diy3]--><div id="diy3" class="area"></div><!--[/diy]-->
</div>	</div>
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
