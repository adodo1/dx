<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); ?>

<script src="<?php echo $_G['setting']['jspath'];?>logging.js?<?php echo VERHASH;?>" type="text/javascript"></script>


<form method="post" autocomplete="off" id="lsform" action="member.php?mod=logging&amp;action=login&amp;loginsubmit=yes&amp;infloat=yes&amp;lssubmit=yes" onsubmit="<?php if($_G['setting']['pwdsafety']) { ?>pwmd5('ls_password');<?php } ?>return lsSubmit();">
<div class="fastlg cl">
<span id="return_ls" style="display:none"></span>
<div class="y pns">
<a href="member.php?mod=logging&amp;action=login" onClick="showWindow('login', this.href)">登录</a><span class="pipe">|</span><a href="member.php?mod=<?php echo $_G['setting']['regname'];?>" class=""><?php echo $_G['setting']['reglinkname'];?></a><span class="pipe">|</span><a href="javascript:;" onclick="showWindow('login', 'member.php?mod=logging&action=login&viewlostpw=1')">找回密码</a>
<input type="hidden" name="quickforward" value="yes" />
<input type="hidden" name="handlekey" value="ls" />
</div>
  <?php if(!empty($_G['setting']['pluginhooks']['global_login_extra'])) echo $_G['setting']['pluginhooks']['global_login_extra'];?>
</div>
</form>

<?php if($_G['setting']['pwdsafety']) { ?>
<script src="<?php echo $_G['setting']['jspath'];?>md5.js?<?php echo VERHASH;?>" type="text/javascript" reload="1"></script>
<?php } ?>

