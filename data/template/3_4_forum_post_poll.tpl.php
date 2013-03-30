<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); ?>
<input type="hidden" name="polls" value="yes" />
<div class="exfm cl">
<div class="sinf sppoll z">
<input type="hidden" name="fid" value="<?php echo $_G['fid'];?>" />
<?php if($_GET['action'] == 'newthread') { ?>
<input type="hidden" name="tpolloption" value="1" />
<div class="cl">
<span class="y mtn"><input id="pollchecked" type="checkbox" class="pc" onclick="switchpollm(1)" /><label for="pollchecked">单框模式</label></span>
<h4><em>选项:</em>最多可填写 <?php echo $_G['setting']['maxpolloptions'];?> 个选项</h4>
</div>
<div id="pollm_c_1" class="mbm">
<span id="polloption_new"></span>
<p id="polloption_hidden" style="display: none">
<a href="javascript:;" class="d" onclick="delpolloption(this)">del</a>
<input type="text" name="polloption[]" class="px" autocomplete="off" style="width:340px;" tabindex="1" />
</p>
<p><a href="javascript:;" onclick="addpolloption()">+增加一项</a></p>
</div>
<div id="pollm_c_2" class="mbm" style="display:none">
<textarea name="polloptions" class="pt" style="width:340px;" tabindex="1" rows="6" onchange="switchpollm(0)" /></textarea>
<p class="cl">每行填写 1 个选项</p>
</div>
<?php } else { if(is_array($poll['polloption'])) foreach($poll['polloption'] as $key => $option) { ?><p>
<input type="hidden" name="polloptionid[<?php echo $poll['polloptionid'][$key];?>]" value="<?php echo $poll['polloptionid'][$key];?>" />
<input type="text" name="displayorder[<?php echo $poll['polloptionid'][$key];?>]" class="px onum pxs" autocomplete="off" tabindex="1" value="<?php echo $poll['displayorder'][$key];?>" />
<input type="text" name="polloption[<?php echo $poll['polloptionid'][$key];?>]" class="px" autocomplete="off" style="width:290px;" tabindex="1" value="<?php echo $option;?>"<?php if(!$_G['group']['alloweditpoll']) { ?> readonly="readonly"<?php } ?> />
</p>
<?php } ?>
<span id="polloption_new"></span>
<p id="polloption_hidden" style="display: none">
<a href="javascript:;" class="d" onclick="delpolloption(this)">del</a>
<input type="text" name="displayorder[]" class="px onum pxs" autocomplete="off" tabindex="1" /><input type="text" name="polloption[]" class="px" autocomplete="off" style="width:290px;" tabindex="1" />
</p>
<p><a href="javascript:;" onclick="addpolloption()">+增加一项</a></p>
<?php } ?>
</div>
<div class="sadd z">
<p class="mbn">
<label for="maxchoices">最多可选</label>
<input type="text" name="maxchoices" id="maxchoices" class="px pxs" value="<?php if($_GET['action'] == 'edit' && $poll['maxchoices']) { ?><?php echo $poll['maxchoices'];?><?php } else { ?>1<?php } ?>" tabindex="1" /> 项
</p>
<p class="mbn">
<label for="polldatas">记票天数</label>
<input type="text" name="expiration" id="polldatas" class="px pxs" value="<?php if($_GET['action'] == 'edit') { if(!$poll['expiration']) { ?>0<?php } elseif($poll['expiration'] < 0) { ?>关闭投票<?php } elseif($poll['expiration'] < TIMESTAMP) { ?>已结束<?php } else { echo (round(($poll['expiration'] - TIMESTAMP) / 86400)); } } ?>" tabindex="1" /> 天
</p>
<p class="mbn">
<input type="checkbox" name="visibilitypoll" id="visibilitypoll" class="pc" value="1"<?php if($_GET['action'] == 'edit' && !$poll['visible']) { ?> checked<?php } ?> tabindex="1" />
<label for="visibilitypoll">投票后结果可见</label>
</p>
<p class="mbn">
<input type="checkbox" name="overt" id="overt" class="pc" value="1"<?php if($_GET['action'] == 'edit' && $poll['overt']) { ?> checked<?php } ?> tabindex="1" />
<label for="overt">公开投票参与人</label>
</p>
<?php if(!empty($_G['setting']['pluginhooks']['post_poll_extra'])) echo $_G['setting']['pluginhooks']['post_poll_extra'];?>
</div>
</div>

<script type="text/javascript" reload="1">
var maxoptions = parseInt('<?php echo $_G['setting']['maxpolloptions'];?>');
<?php if($_GET['action'] == 'newthread') { ?>
var curoptions = 0;
addpolloption();
addpolloption();
addpolloption();
<?php } else { ?>
var curoptions = <?php echo count($poll['polloption']); ?>;
<?php } ?>
</script>