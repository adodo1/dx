<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); 
0
|| checktplrefresh('./template/eis_y_car/forum/discuz.htm', './template/eis_y_car/common/header_discuz.htm', 1364652230, 'diy', './data/template/3_diy_forum_discuz.tpl.php', './template/eis_y_car', 'forum/discuz')
|| checktplrefresh('./template/eis_y_car/forum/discuz.htm', './template/eis_y_car/common/footer.htm', 1364652230, 'diy', './data/template/3_diy_forum_discuz.tpl.php', './template/eis_y_car', 'forum/discuz')
|| checktplrefresh('./template/eis_y_car/forum/discuz.htm', './template/default/common/header_common.htm', 1364652230, 'diy', './data/template/3_diy_forum_discuz.tpl.php', './template/eis_y_car', 'forum/discuz')
|| checktplrefresh('./template/eis_y_car/forum/discuz.htm', './template/eis_y_car/common/pubsearchform.htm', 1364652230, 'diy', './data/template/3_diy_forum_discuz.tpl.php', './template/eis_y_car', 'forum/discuz')
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
<base href="<?php echo $_G['siteurl'];?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_common.css?<?php echo VERHASH;?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_forum_index.css?<?php echo VERHASH;?>" /><?php if($_G['uid'] && isset($_G['cookie']['extstyle']) && strpos($_G['cookie']['extstyle'], TPLDIR) !== false) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['cookie']['extstyle'];?>/style.css" /><?php } elseif($_G['style']['defaultextstyle']) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['style']['defaultextstyle'];?>/style.css" /><?php } ?><script type="text/javascript">var STYLEID = '<?php echo STYLEID;?>', STATICURL = '<?php echo STATICURL;?>', IMGDIR = '<?php echo IMGDIR;?>', VERHASH = '<?php echo VERHASH;?>', charset = '<?php echo CHARSET;?>', discuz_uid = '<?php echo $_G['uid'];?>', cookiepre = '<?php echo $_G['config']['cookie']['cookiepre'];?>', cookiedomain = '<?php echo $_G['config']['cookie']['cookiedomain'];?>', cookiepath = '<?php echo $_G['config']['cookie']['cookiepath'];?>', showusercard = '<?php echo $_G['setting']['showusercard'];?>', attackevasive = '<?php echo $_G['config']['security']['attackevasive'];?>', disallowfloat = '<?php echo $_G['setting']['disallowfloat'];?>', creditnotice = '<?php if($_G['setting']['creditnotice']) { ?><?php echo $_G['setting']['creditnames'];?><?php } ?>', defaultstyle = '<?php echo $_G['style']['defaultextstyle'];?>', REPORTURL = '<?php echo $_G['currenturl_encode'];?>', SITEURL = '<?php echo $_G['siteurl'];?>', JSPATH = '<?php echo $_G['setting']['jspath'];?>';</script>
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
        a{ font-family:Arial,Helvetica,sans-serif}
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
        #xd_pop{width:50px;height:15px;position:absolute;right:500px;top:6px;background:#cb090e;}
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
    <div id="append_parent"></div><div id="ajaxwaitid"></div>
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
                            <li><a href="forum.php?mod=modcp&amp;fid=<?php echo $_G['fid'];?>" target="_blank"><?php echo $_G['setting']['navs']['2']['navname'];?>管理</a></li>
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
                    <?php $mnid = getcurrentnav();?>                    <div class="eis_hd_left z">
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
                    
                        <div class="dottom cl">
                        
                           <div class="gonggao1">
                              <div class="content01">
                                 <div class="title_g">
                                 活动公告
                                 </div>
                                 <div class="ggdiv">
                                   <ul class="gg_nr">
                                     <?php if(!empty($activitys)) { ?> 
                                     <?php if(is_array($activitys)) foreach($activitys as $key => $value) { ?>                                      <li>
                                      <a href="forum.php?mod=viewthread&amp;tid=<?php echo $value['tid'];?>"><?php echo $value['subject'];?></a> <span style="float:right;"><a href="forum.php?mod=forumdisplay&amp;fid=<?php echo $value['fid'];?>"><?php echo $value['name'];?></a></span>
                                      </li>
                                    <?php } ?>   
                                    <?php } ?>
                                   </ul>
                                 </div>
                              </div>
                              <!--<img src="<?php echo IMGDIR;?>/pic03.gif" height="98" width="145" border="0" id="eis_img001"/>-->
                           </div>
                           <div class="gonggao">
                             <div class="content02">
                                <div class="title_k">
                                 出行导航
                                </div>
                                <form action="map.php" method="post" name="form">
                                <table border="0" cellpadding="0" cellspacing="0" class="daohang_table">
                                   <tr>
                                     <td width="50">出发地</td>
                                     <td width="50">
                                     <select name="" onChange="objselect(this.selectedIndex,this.value,'0')">
<option value="选择省份">选择省份</option><option value="北京">北京</option><option value="上海">上海</option><option value="天津">天津</option><option value="重庆">重庆</option><option value="河北">河北</option><option value="山西">山西</option><option value="内蒙古">内蒙古</option><option value="辽宁">辽宁</option><option value="吉林">吉林</option><option value="黑龙江">黑龙江</option><option value="江苏">江苏</option><option value="浙江">浙江</option><option value="安徽">安徽</option><option value="福建">福建</option><option value="江西">江西</option><option value="山东">山东</option><option value="河南">河南</option><option value="湖北">湖北</option><option value="湖南">湖南</option><option value="广东">广东</option><option value="广西">广西</option><option value="海南">海南</option><option value="四川">四川</option><option value="贵州">贵州</option><option value="云南">云南</option><option value="西藏">西藏</option><option value="陕西">陕西</option><option value="甘肃">甘肃</option><option value="宁夏">宁夏</option><option value="青海">青海</option><option value="新疆">新疆</option><option value="香港">香港</option><option value="澳门">澳门</option><option value="台湾">台湾</option>
                                    </select>
                                    
                                    </td>
                                     <td style="padding-left:2px;padding-bottom:2px"><div id="objselectoptions0"></div></td>
                                     <td style="padding-left:2px;padding-bottom:2px;" width="150"><input type="text" name="mapstart"  id="Objselect0" value="<?php echo $mapstart;?>"/></td>
                                     <td rowspan="2" align="center"><input type="submit" name="submit" class="daohang_btn" value=""></td>
                                   </tr>
                                   <tr>
                                     <td>目的地</td>
                                     <td width="50">
                                     <select name="" onChange="objselect(this.selectedIndex,this.value,'1')">
<option value="选择省份">选择省份</option><option value="北京">北京</option><option value="上海">上海</option><option value="天津">天津</option><option value="重庆">重庆</option><option value="河北">河北</option><option value="山西">山西</option><option value="内蒙古">内蒙古</option><option value="辽宁">辽宁</option><option value="吉林">吉林</option><option value="黑龙江">黑龙江</option><option value="江苏">江苏</option><option value="浙江">浙江</option><option value="安徽">安徽</option><option value="福建">福建</option><option value="江西">江西</option><option value="山东">山东</option><option value="河南">河南</option><option value="湖北">湖北</option><option value="湖南">湖南</option><option value="广东">广东</option><option value="广西">广西</option><option value="海南">海南</option><option value="四川">四川</option><option value="贵州">贵州</option><option value="云南">云南</option><option value="西藏">西藏</option><option value="陕西">陕西</option><option value="甘肃">甘肃</option><option value="宁夏">宁夏</option><option value="青海">青海</option><option value="新疆">新疆</option><option value="香港">香港</option><option value="澳门">澳门</option><option value="台湾">台湾</option>
                                    </select>
                                    </td>
                                     <td style="padding-left:2px;padding-bottom:2px"><div id="objselectoptions1"></div></td>
                                     <td style="padding-left:2px;padding-bottom:2px" ><input type="text" name="mapend" id="Objselect1" value="<?php echo $mapend;?>"/></td>
                                   </tr>
                                 </table>
                                </form>
                                <script language="javascript" type="text/javascript">
                                function objselect(c,a,t){
                                    var where=new Array(35);where[1]=[['东城'],['西城'],['崇文'],['宣武'],['朝阳'],['丰台'],['石景山'],['海淀'],['门头沟'],['房山'],['通州'],['顺义'],['昌平'],['大兴'],['平谷'],['怀柔'],['密云'],['延庆']];where[2]=[['黄浦'],['卢湾'],['徐汇'],['长宁'],['静安'],['普陀'],['闸北'],['虹口'],['杨浦'],['闵行'],['宝山'],['嘉定'],['浦东'],['金山'],['松江'],['青浦'],['南汇'],['奉贤'],['崇明']];where[3]=[['和平'],['东丽'],['河东'],['西青'],['河西'],['津南'],['南开'],['北辰'],['河北'],['武清'],['红挢'],['塘沽'],['汉沽'],['大港'],['宁河'],['静海'],['宝坻'],['蓟县']];where[4]=[['万州'],['涪陵'],['渝中'],['大渡口'],['江北'],['沙坪坝'],['九龙坡'],['南岸'],['北碚'],['万盛'],['双挢'],['渝北'],['巴南'],['黔江'],['长寿'],['綦江'],['潼南'],['铜梁'],['大足'],['荣昌'],['壁山'],['梁平'],['城口'],['丰都'],['垫江'],['武隆'],['忠县'],['开县'],['云阳'],['奉节'],['巫山'],['巫溪'],['石柱'],['秀山'],['酉阳'],['彭水'],['江津'],['合川'],['永川'],['南川']];where[5]=[['石家庄'],['邯郸'],['邢台'],['保定'],['张家口'],['承德'],['廊坊'],['唐山'],['秦皇岛'],['沧州'],['衡水']];where[6]=[['太原'],['大同'],['阳泉'],['长治'],['晋城'],['朔州'],['吕梁'],['忻州'],['晋中'],['临汾'],['运城']];where[7]=[['呼和浩特'],['包头'],['乌海'],['赤峰'],['呼伦贝尔盟'],['阿拉善盟'],['哲里木盟'],['兴安盟'],['乌兰察布盟'],['锡林郭勒盟'],['巴彦淖尔盟'],['伊克昭盟']];where[8]=[['沈阳'],['大连'],['鞍山'],['抚顺'],['本溪'],['丹东'],['锦州'],['营口'],['阜新'],['辽阳'],['盘锦'],['铁岭'],['朝阳'],['葫芦岛']];where[9]=[['长春'],['吉林'],['四平'],['辽源'],['通化'],['白山'],['松原'],['白城'],['延边']];where[10]=[['哈尔滨'],['齐齐哈尔'],['牡丹江'],['佳木斯'],['大庆'],['绥化'],['鹤岗'],['鸡西'],['黑河'],['双鸭山'],['伊春'],['七台河'],['大兴安岭']];where[11]=[['南京'],['镇江'],['苏州'],['南通'],['扬州'],['盐城'],['徐州'],['连云港'],['常州'],['无锡'],['宿迁'],['泰州'],['淮安']];where[12]=[['杭州'],['宁波'],['温州'],['嘉兴'],['湖州'],['绍兴'],['金华'],['衢州'],['舟山'],['台州'],['丽水']];where[13]=[['合肥'],['芜湖'],['蚌埠'],['马鞍山'],['淮北'],['铜陵'],['安庆'],['黄山'],['滁州'],['宿州'],['池州'],['淮南'],['巢湖'],['阜阳'],['六安'],['宣城'],['亳州']];where[14]=[['福州'],['厦门'],['莆田'],['三明'],['泉州'],['漳州'],['南平'],['龙岩'],['宁德']];where[15]=[['南昌市'],['景德镇'],['九江'],['鹰潭'],['萍乡'],['新馀'],['赣州'],['吉安'],['宜春'],['抚州'],['上饶']];where[16]=[['济南'],['青岛'],['淄博'],['枣庄'],['东营'],['烟台'],['潍坊'],['济宁'],['泰安'],['威海'],['日照'],['莱芜'],['临沂'],['德州'],['聊城'],['滨州'],['菏泽']];where[17]=[['郑州'],['开封'],['洛阳'],['平顶山'],['安阳'],['鹤壁'],['新乡'],['焦作'],['濮阳'],['许昌'],['漯河'],['三门峡'],['南阳'],['商丘'],['信阳'],['周口'],['驻马店'],['济源']];where[18]=[['武汉'],['宜昌'],['荆州'],['襄樊'],['黄石'],['荆门'],['黄冈'],['十堰'],['恩施'],['潜江'],['天门'],['仙桃'],['随州'],['咸宁'],['孝感'],['鄂州']];where[19]=[['长沙'],['常德'],['株洲'],['湘潭'],['衡阳'],['岳阳'],['邵阳'],['益阳'],['娄底'],['怀化'],['郴州'],['永州'],['湘西'],['张家界']];where[20]=[['广州'],['深圳'],['珠海'],['汕头'],['东莞'],['中山'],['佛山'],['韶关'],['江门'],['湛江'],['茂名'],['肇庆'],['惠州'],['梅州'],['汕尾'],['河源'],['阳江'],['清远'],['潮州'],['揭阳'],['云浮']];where[21]=[['南宁'],['柳州'],['桂林'],['梧州'],['北海'],['防城港'],['钦州'],['贵港'],['玉林'],['南宁地区'],['柳州地区'],['贺州'],['百色'],['河池']];where[22]=[['海口'],['三亚']];where[23]=[['成都'],['绵阳'],['德阳'],['自贡'],['攀枝花'],['广元'],['内江'],['乐山'],['南充'],['宜宾'],['广安'],['达川'],['雅安'],['眉山'],['甘孜'],['凉山'],['泸州']];where[24]=[['贵阳'],['六盘水'],['遵义'],['安顺'],['铜仁'],['黔西南'],['毕节'],['黔东南'],['黔南']];where[25]=[['昆明'],['大理'],['曲靖'],['玉溪'],['昭通'],['楚雄'],['红河'],['文山'],['思茅'],['西双版纳'],['保山'],['德宏'],['丽江'],['怒江'],['迪庆'],['临沧']];where[26]=[['拉萨'],['日喀则'],['山南'],['林芝'],['昌都'],['阿里'],['那曲']];where[27]=[['西安'],['宝鸡'],['咸阳'],['铜川'],['渭南'],['延安'],['榆林'],['汉中'],['安康'],['商洛']];where[28]=[['兰州'],['嘉峪关'],['金昌'],['白银'],['天水'],['酒泉'],['张掖'],['武威'],['定西'],['陇南'],['平凉'],['庆阳'],['临夏'],['甘南']];where[29]=[['银川'],['石嘴山'],['吴忠'],['固原']];where[30]=[['西宁'],['海东'],['海南'],['海北'],['黄南'],['玉树'],['果洛'],['海西']];where[31]=[['乌鲁木齐'],['石河子'],['克拉玛依'],['伊犁'],['巴音郭勒'],['昌吉'],['克孜勒苏柯尔克孜'],['博尔塔拉'],['吐鲁番'],['哈密'],['喀什'],['和田'],['阿克苏']];where[34]=[['台北'],['高雄'],['台中'],['台南'],['屏东'],['南投'],['云林'],['新竹'],['彰化'],['苗栗'],['嘉义'],['花莲'],['桃园'],['宜兰'],['基隆'],['台东'],['金门'],['马祖'],['澎湖']]; 
                                    
                                    var Obj1= 'objselectoptions'+t;
                                    var objselectoptions=document.getElementById(Obj1);
                                    var Obj2 = 'Objselect'+t;
                                    var Objselect=document.getElementById(Obj2);
                                    Objselect.value=a;
                                    D="<select name=\"\" onChange=\"objoptions(this.value,'"+a+"','"+t+"')\">";
                                    D+="<option value=\"选择城市\">选择城市</option>";
                                    for(i=0;i<where[c].length;i++){D+="<option value=\""+where[c][i]+"\">"+where[c][i]+"</option>"}
                                    objselectoptions.innerHTML=D;
                                    }
                              
                                function objoptions(c,a,t){
                                    var Obj3 = 'Objselect'+t;
                                    var Objselect = document.getElementById(Obj3);
                                    Objselect.value=a+c;
                                }
                                
                                </script>
                                
                              </div>
                              
                           </div>
                         </div>
                        
                    </div>
                    
                    <div class="eis_hd_right y" style="width:200px; height:260px;border-bottom:1px solid #CCC;">
                        <!--<img src="<?php echo IMGDIR;?>/weather.jpg">-->
                        <!--<iframe src="http://www.7stk.com/1/6/200904.htm" width="380" height="70" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" name="I2" align="middle" style=" margin-top:10px; padding-bottom:10px; border-bottom:1px solid #C7CEDE"></iframe>
                        <iframe src="http://www.7stk.com/1/6/200905.htm" width="380" height="70" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" name="I2" align="middle" style="margin-left:-50px; border-bottom:1px solid #C7CEDE; padding-bottom:10px; margin-top:10px"></iframe>-->
                        <!--<IFRAME id="tianqi8_wetherinfo" name="tianqi8_wetherinfo" src="http://tq.ss256.com/code/freeweather6.htm?id=&amp;fcolor=&amp;imgurl=tb/tbs/tb5&amp;bimg=&amp;bcolor=&amp;fsize=" frameBorder=0 width=260 height=195 ALIGN=CENTER MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 SCROLLING=NO allowtransparency=true></IFRAME>-->
                        <iframe src="http://www.thinkpage.cn/weather/weather.aspx?uid=&amp;cid=101010100&amp;l=zh-CHS&amp;p=CMA&amp;a=0&amp;u=C&amp;s=5&amp;m=1&amp;x=1&amp;d=2&amp;fc=&amp;bgc=&amp;bc=C6C6C6&amp;ti=1&amp;in=1&amp;li=2&amp;ct=iframe" frameborder="0" scrolling="no" width="200" height="300" allowTransparency="true"></iframe>
                        <!--<IFRAME id="tianqi8_wetherinfo" name="tianqi8_wetherinfo" src="http://tq.ss256.com/code/freeweather12.htm?id=&amp;fcolor=&amp;imgurl=tb/tbb/tb1&amp;bimg=&amp;bcolor=&amp;fsize=12" frameBorder=0 width=180 height=320 ALIGN=CENTER MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 SCROLLING=NO allowtransparency=true style="*+margin-right:45px;"></IFRAME>-->
                        <!--<IFRAME id="tianqi8_wetherinfo" name="tianqi8_wetherinfo" src="http://tq.ss256.com/code/freeweather13.htm?id=&amp;fcolor=&amp;imgurl=tb/tbb/tb1&amp;bimg=&amp;bcolor=&amp;fsize=" frameBorder=0 width=300 height=292 ALIGN=CENTER MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 SCROLLING=NO allowtransparency=true></IFRAME>-->
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
    <div id="wp" class="wp"><?php if(!empty($gid)) { ?>
<div id="pt" class="bm cl">
    <?php if(empty($gid) && $announcements) { ?>
    <div class="y">
        <div id="an">
            <dl class="cl">
                <dt class="z xw1">公告:&nbsp;</dt>
                <dd>
                    <div id="anc"><ul id="ancl"><?php echo $announcements;?></ul></div>
                </dd>
            </dl>
        </div>
        <script type="text/javascript">announcement();</script>
    </div>
    <?php } ?>
    <div class="z">
        <a href="./" class="nvhm" title="首页"><?php echo $_G['setting']['bbname'];?></a><em>&raquo;</em><a href="forum.php"<?php if($_G['setting']['forumjump']) { ?> id="fjump" onmouseover="delayShow(this, 'showForummenu(<?php echo $_G['fid'];?>)');" class="showmenu"<?php } ?>><?php echo $_G['setting']['navs']['2']['navname'];?></a><?php echo $navigation;?>
    </div>
    <div class="z"><?php if(!empty($_G['setting']['pluginhooks']['index_status_extra'])) echo $_G['setting']['pluginhooks']['index_status_extra'];?></div>
</div>
<?php } if(empty($gid)) { ?>
    <?php echo adshow("text/wp a_t");?><?php } if(empty($gid)) { ?>
    <div class="wp">
        <!--[diy=diy1]--><div id="diy1" class="area"></div><!--[/diy]-->
    </div>
<?php } ?>

<div id="ct" class="cl">
    <div class="eis_dz1 cl" id="eis_board">
    <?php if(empty($gid)) { ?>
        <!--首页 <?php echo $a变量;?> 计数器 论坛首页循环分区和版块 第一个显示分区名字 从第二个到最后一个都显示除第一个分区外的所有分区的版块名字 点击第一个分区的名字进入论坛版块子页面 循环显示第一个分区里的子版块-->
        <?php $a=1?>        
        <?php if(is_array($catlist)) foreach($catlist as $key => $cat) { ?>        
            <?php if($a==1) { ?>
                
                <div class="eis_board1 eis_tables" huang='true'><a href="<?php if(!empty($caturl)) { ?><?php echo $caturl;?><?php } else { ?>forum.php?gid=<?php echo $cat['fid'];?><?php } ?>"><img src="<?php echo IMGDIR;?>/pic09.jpg" alt="<?php echo $forum['name'];?>" /></a><div class="boxcaption" style="height:60px; bottom:-40px" align="center"><div style="font-size:15px; font-weight:500;"><a href="<?php if(!empty($caturl)) { ?><?php echo $caturl;?><?php } else { ?>forum.php?gid=<?php echo $cat['fid'];?><?php } ?>" style="color:#FFF"><?php echo $cat['name'];?></a></div></div>
                </div>
                
               
            <?php } else { ?>
            
                <?php if(is_array($cat['forums'])) foreach($cat['forums'] as $forumid) { ?>                <?php $forum=$forumlist[$forumid];?>                <?php $forumurl = !empty($forum['domain']) && !empty($_G['setting']['domain']['root']['forum']) ? 'http://'.$forum['domain'].'.'.$_G['setting']['domain']['root']['forum'] : 'forum.php?mod=forumdisplay&fid='.$forum['fid'];?>                
                    <div class="eis_board1 boxgrid caption eis_tables" huang='true'><?php if($forum['icon']) { ?><?php echo $forum['icon'];?><?php } else { ?><a href="<?php echo $forumurl;?>"<?php if($forum['redirect']) { ?> target="_blank"<?php } ?>><img src="<?php echo IMGDIR;?>/forum<?php if($forum['folder']) { ?>_new<?php } ?>.gif" alt="<?php echo $forum['name'];?>" /></a><?php } ?><div class="boxcaption" align="center" style="bottom:-40px; height:60px;">
                        <div style="font-size:15px; font-weight:500; color:#FFF">
                        <a href="<?php echo $forumurl;?>"<?php if($forum['redirect']) { ?> target="_blank"<?php } ?> style="color:#FFF"><?php echo $forum['name'];?></a></div>
                        
                        <?php if(!$subforumonly) { ?><p>今日: <strong><?php echo $forum['todayposts'];?></strong><span class="pipe">|</span>主题: <strong><?php echo $forum['threads'];?></strong></p><?php } ?>
                        
                        </div>
                    </div>
                    
<script language="javascript">
    var global = function(demo,cdemo){
    var maxheight =-40;
    var tmpheight = 10;   
    var v1 = null,v2=null;
    var c = true;
    var autoheight = maxheight;
    var U = function(){
    // clearInterval(v2);
    if(autoheight<0){   
    v1 = setInterval(function(){
    autoheight+=tmpheight;
    if(autoheight>0) autoheight = 0;
    cdemo.style.bottom = autoheight+"px";
    if(autoheight>=0){
    clearInterval(v1);
        }
    },1);
}
} 
    var D = function(){   
// clearInterval(v1);
if(autoheight > maxheight){  
v2 = setInterval(function(){	   
autoheight-=tmpheight;
if(autoheight<maxheight)  autoheight = maxheight;
cdemo.style.bottom=autoheight+"px";		
if(autoheight<=maxheight){			
clearInterval(v2);
}
},1);
}
}
demo.onmouseover=function(){				
clearInterval(v2);
U();
}
demo.onmouseout=function(){
clearInterval(v1);
D();
}
  }
var demo =  function demo(){
      var demos = document.getElementById("eis_board").getElementsByTagName('div');
      for(var i =0;i<demos.length;i++){
            var dmeo = demos[i];
            if(dmeo.getAttribute("huang")=='true'){
                  var cdemo = dmeo.childNodes[1];
                  new global(dmeo,cdemo);
            }
      }
  }
  new demo();
</script>
       <?php } ?>
            <?php } ?>
        <?php $a++?>        <?php } ?>
    <?php } else { ?>
        <!--版块-->
<div class="xd_sx_q">
<ul><?php if(is_array($catlist)) foreach($catlist as $key => $cat) { if(is_array($cat['forums'])) foreach($cat['forums'] as $k => $forumid) { ?><?php $forum=$forumlist[$forumid];?><li><a href="<?php echo 'http://'.$_SERVER['SERVER_NAME'].$_SERVER[PHP_SELF].'?mod=forumdisplay&fid='.$forum[fid]?>"><?php echo $forum['name'];?></a></li>
<?php } } ?>
</ul>
</div>
        <?php if(is_array($catlist)) foreach($catlist as $key => $cat) { ?>         <div class="eis_board2">
        <?php if(is_array($cat['forums'])) foreach($cat['forums'] as $k => $forumid) { ?>        <?php $forum=$forumlist[$forumid];?>        <?php $forumurl = !empty($forum['domain']) && !empty($_G['setting']['domain']['root']['forum']) ? 'http://'.$forum['domain'].'.'.$_G['setting']['domain']['root']['forum'] : 'forum.php?mod=forumdisplay&fid='.$forum['fid'];?>                <?php if($k%5==0) { ?>
                <ul>
                <?php } ?>
                <li>
                <?php if($forum['icon']) { ?>
                  
                   <?php echo $forum['icon'];?>
                   </br></br></br></br></br></br></br></br></br>
                   <div align="center" style=" width:180px; height:20px"><?php echo $forum['name'];?></div>
                <?php } else { ?>
                    <a href="<?php echo $forumurl;?>"<?php if($forum['redirect']) { ?> target="_blank"<?php } ?>><img src="<?php echo IMGDIR;?>/forum<?php if($forum['folder']) { ?>_new<?php } ?>.gif" alt="<?php echo $forum['name'];?>" /></a>
                <?php } ?>
                </li>
                <?php if(($k+1)%5==0) { ?>
                </ul>
                <?php } ?>
           
        <?php } ?>
         </div>
        <?php } ?>
    <?php } ?>
</div>
</div>
<?php if($_G['group']['radminid'] == 1) { ?>
    <?php helper_manyou::checkupdate();?><?php } ?>	</div>
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
