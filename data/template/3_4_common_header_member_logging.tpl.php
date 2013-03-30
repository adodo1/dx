<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); 
0
|| checktplrefresh('./template/eis_y_car/common/header.htm', './template/default/common/header_common.htm', 1364655241, '4', './data/template/3_4_common_header_member_logging.tpl.php', './template/eis_y_car', 'common/header_member_logging')
|| checktplrefresh('./template/eis_y_car/common/header.htm', './template/eis_y_car/common/pubsearchform.htm', 1364655241, '4', './data/template/3_4_common_header_member_logging.tpl.php', './template/eis_y_car', 'common/header_member_logging')
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
<base href="<?php echo $_G['siteurl'];?>" /><link rel="stylesheet" type="text/css" href="data/cache/style_<?php echo STYLEID;?>_common.css?<?php echo VERHASH;?>" /><?php if($_G['uid'] && isset($_G['cookie']['extstyle']) && strpos($_G['cookie']['extstyle'], TPLDIR) !== false) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['cookie']['extstyle'];?>/style.css" /><?php } elseif($_G['style']['defaultextstyle']) { ?><link rel="stylesheet" id="css_extstyle" type="text/css" href="<?php echo $_G['style']['defaultextstyle'];?>/style.css" /><?php } ?><script type="text/javascript">var STYLEID = '<?php echo STYLEID;?>', STATICURL = '<?php echo STATICURL;?>', IMGDIR = '<?php echo IMGDIR;?>', VERHASH = '<?php echo VERHASH;?>', charset = '<?php echo CHARSET;?>', discuz_uid = '<?php echo $_G['uid'];?>', cookiepre = '<?php echo $_G['config']['cookie']['cookiepre'];?>', cookiedomain = '<?php echo $_G['config']['cookie']['cookiedomain'];?>', cookiepath = '<?php echo $_G['config']['cookie']['cookiepath'];?>', showusercard = '<?php echo $_G['setting']['showusercard'];?>', attackevasive = '<?php echo $_G['config']['security']['attackevasive'];?>', disallowfloat = '<?php echo $_G['setting']['disallowfloat'];?>', creditnotice = '<?php if($_G['setting']['creditnotice']) { ?><?php echo $_G['setting']['creditnames'];?><?php } ?>', defaultstyle = '<?php echo $_G['style']['defaultextstyle'];?>', REPORTURL = '<?php echo $_G['currenturl_encode'];?>', SITEURL = '<?php echo $_G['siteurl'];?>', JSPATH = '<?php echo $_G['setting']['jspath'];?>';</script>
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
    <div id="wp" class="wp">