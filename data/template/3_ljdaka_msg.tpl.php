<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); include template('common/header_ajax'); ?><h3 class="flb">
<em>提示信息</em>
<span><a href="javascript:;" class="flbc" onclick="hideWindow('<?php echo $_GET['handlekey'];?>');" title="关闭">关闭</a></span>

</h3>
<form id="qiandao" method="post" action="/" onkeydown="$('qiandao').submit()">
<div class="f_c" style="width:350px;height:70px;margin:10px;" id="window">

<style>
.qdsmilea{padding:3px;margin:auto;float:left;list-style:none;float:left}
.qdsmilea li{float: left;padding:5px .4em;border:2px #fff solid;}
.qdsmilea li img{margin-bottom:5px;}
.qdsmilea li:hover{cursor:pointer;}
.alert_info {
    background-image: url(<?php echo $dizhi;?>);
}
</style>
<div class="c altw"><div class="alert_info"><?php if($check) { ?><p>您已签到,请明日再来！</p><?php } elseif(!$checksql) { ?><p>签到数据库表格未创建成功.</p><p><a href="http://www.seoeye.cn/thread-1846-1-1.html">请参照表格未创建成功的解决方案</a></p><?php } else { ?><p>您已累计签到<?php echo $myall;?>天获得<?php echo $jljifen2;?>.</p><p>预计明日签到您将获得<?php echo $mall;?>.</p><?php } ?></div></div>


</div>
<p class="o pns"><span class="z xg1"><a style="color:#369 !important;text-decoration: underline !important;" target="_blank" href="<?php echo $url;?>"><?php echo $wenzi;?></a></span><button class="pn pnc" value="true" id="fwin_dialog_submit" onclick="$('qiandao').submit()"><strong>确定</strong></button></p>
</form><?php include template('common/footer_ajax'); ?>