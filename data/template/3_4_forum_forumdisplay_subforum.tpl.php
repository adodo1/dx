<?php if(!defined('IN_DISCUZ')) exit('Access Denied'); ?>
<div class="xd_sx">
<ul><?php if(is_array($sublist)) foreach($sublist as $sub_sx) { ?><li><a href="<?php echo 'http://'.$_SERVER['SERVER_NAME'].$_SERVER[PHP_SELF].'?mod=forumdisplay&fid='.$sub_sx[fid]?>"><?php echo $sub_sx['name'];?></a></li>
<?php } ?>
</ul>
</div>
<div class="bm bmw fl<?php if($_G['forum']['forumcolumns']) { ?> flg<?php } ?>">
    <div class="bm_h cl">
        <span class="o" style="display:none;"><img id="subforum_<?php echo $_G['forum']['fid'];?>_img" src="<?php echo IMGDIR;?>/<?php echo $collapseimg['subforum'];?>" title="收起/展开" alt="收起/展开" onclick="toggle_collapse('subforum_<?php echo $_G['forum']['fid'];?>');" /></span>
        <h2>子版块</h2>
    </div>
    <div id="subforum_<?php echo $_G['forum']['fid'];?>" class="bm_c" style="<?php echo $collapse['subforum'];?>">
        <table cellspacing="0" cellpadding="0" class="fl_tb">
            <tr>
            <?php if(is_array($sublist)) foreach($sublist as $sub) { ?>            <?php $forumurl = !empty($sub['domain']) && !empty($_G['setting']['domain']['root']['forum']) ? 'http://'.$sub['domain'].'.'.$_G['setting']['domain']['root']['forum'] : 'forum.php?mod=forumdisplay&fid='.$sub['fid'];?>            <?php if($_G['forum']['forumcolumns']) { ?>
                <?php if($sub['orderid'] && ($sub['orderid'] % $_G['forum']['forumcolumns'] == 0)) { ?>
                    </tr>
                    <?php if($_G['forum']['orderid'] < $_G['forum']['forumcolumns']) { ?>
            <tr class="fl_row">
                    <?php } ?>
                <?php } ?>
                <td class="fl_g" width="<?php echo $_G['forum']['forumcolwidth'];?>">
                    <div class="fl_icn_g"<?php if(!empty($sub['extra']['iconwidth']) && !empty($sub['icon'])) { ?> style="width: <?php echo $sub['extra']['iconwidth'];?>px;"<?php } ?>>
                    <?php if($sub['icon']) { ?>
                        <?php echo $sub['icon'];?>
                    <?php } else { ?>
                        <a href="<?php echo $forumurl;?>"<?php if($sub['redirect']) { ?> target="_blank"<?php } ?>><img src="<?php echo IMGDIR;?>/forum<?php if($sub['folder']) { ?>_new<?php } ?>.gif" alt="<?php echo $sub['name'];?>" /></a>
                    <?php } ?>
                    </div>
                    <dl<?php if(!empty($sub['extra']['iconwidth']) && !empty($sub['icon'])) { ?> style="margin-left: <?php echo $sub['extra']['iconwidth'];?>px;"<?php } ?>>
                        <dt><a href="<?php echo $forumurl;?>" <?php if(!empty($sub['redirect'])) { ?>target="_blank"<?php } ?> style="<?php if(!empty($sub['extra']['namecolor'])) { ?>color: <?php echo $sub['extra']['namecolor'];?>;<?php } ?>"><?php echo $sub['name'];?></a><?php if($sub['todayposts'] && !$sub['redirect']) { ?><em class="xw0 xi1" title="今日"> (<?php echo $sub['todayposts'];?>)</em><?php } ?></dt>
                        <?php if(empty($sub['redirect'])) { ?><dd><em>主题: <?php echo dnumber($sub['threads']); ?></em>, <em>帖数: <?php echo dnumber($sub['posts']); ?></em></dd><?php } ?>
                        <dd>
                        <?php if($sub['permission'] == 1) { ?>
                            私密版块
                        <?php } else { ?>
                            <?php if($sub['redirect']) { ?>
                                <a href="<?php echo $forumurl;?>" class="xi2">链接到外部地址</a>
                            <?php } elseif(is_array($sub['lastpost'])) { ?>
                                <?php if($_G['forum']['forumcolumns'] < 3) { ?>
                                    <a href="forum.php?mod=redirect&amp;tid=<?php echo $sub['lastpost']['tid'];?>&amp;goto=lastpost#lastpost" class="xi2"><?php echo cutstr($sub['lastpost']['subject'], 30); ?></a> <cite><?php echo $sub['lastpost']['dateline'];?> <?php if($sub['lastpost']['author']) { ?><?php echo $sub['lastpost']['author'];?><?php } else { ?><?php echo $_G['setting']['anonymoustext'];?><?php } ?></cite>
                                <?php } else { ?>
                                    <a href="forum.php?mod=redirect&amp;tid=<?php echo $sub['lastpost']['tid'];?>&amp;goto=lastpost#lastpost">最后发表: <?php echo $sub['lastpost']['dateline'];?></a>
                                <?php } ?>
                            <?php } else { ?>
                                从未
                            <?php } ?>
                        <?php } ?>
                        <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_subforum_extra'][$sub[fid]])) echo $_G['setting']['pluginhooks']['forumdisplay_subforum_extra'][$sub[fid]];?>
                        </dd>
                    </dl>
                </td>
            <?php } else { ?>
                <td class="fl_icn" <?php if(!empty($sub['extra']['iconwidth']) && !empty($sub['icon'])) { ?> style="width: <?php echo $sub['extra']['iconwidth'];?>px;"<?php } ?>>
                    <?php if($sub['icon']) { ?>
                        <?php echo $sub['icon'];?>
                    <?php } else { ?>
                        <a href="<?php echo $forumurl;?>"<?php if($sub['redirect']) { ?> target="_blank"<?php } ?>><img src="<?php echo IMGDIR;?>/forum<?php if($sub['folder']) { ?>_new<?php } ?>.gif" alt="<?php echo $sub['name'];?>" width="31" height="29"/></a>
                    <?php } ?>
                </td>
                <td>
                    <h2><a href="<?php echo $forumurl;?>" <?php if(!empty($sub['redirect'])) { ?>target="_blank"<?php } ?> style="<?php if(!empty($sub['extra']['namecolor'])) { ?>color: <?php echo $sub['extra']['namecolor'];?>;<?php } ?>"><?php echo $sub['name'];?></a><?php if($sub['todayposts'] && !$sub['redirect']) { ?><em class="xw0 xi1" title="今日"> (<?php echo $sub['todayposts'];?>)</em><?php } ?></h2>
                    <?php if($sub['description']) { ?><p class="xg2"><?php echo $sub['description'];?></p><?php } ?>
                    <?php if($sub['subforums']) { ?><p>子版块: <?php echo $sub['subforums'];?></p><?php } ?>
                    <?php if($sub['moderators']) { ?><p>版主: <?php echo $sub['moderators'];?></p><?php } ?>
                    <?php if(!empty($_G['setting']['pluginhooks']['forumdisplay_subforum_extra'][$sub[fid]])) echo $_G['setting']['pluginhooks']['forumdisplay_subforum_extra'][$sub[fid]];?>
                </td>
                <td class="fl_i">
                    <?php if(empty($sub['redirect'])) { ?>
<span class="xi2"><?php echo dnumber($sub['threads']); ?></span><span class="xg1">/<?php echo dnumber($sub['posts']); ?></span><?php } ?>
                </td>
                <td class="fl_by">
                    <div>
                    <?php if($sub['permission'] == 1) { ?>
                        私密版块
                    <?php } else { ?>
                        <?php if($sub['redirect']) { ?>
                            <a href="<?php echo $forumurl;?>" class="xi2">链接到外部地址</a>
                        <?php } elseif(is_array($sub['lastpost'])) { ?>
                            <a href="forum.php?mod=redirect&amp;tid=<?php echo $sub['lastpost']['tid'];?>&amp;goto=lastpost#lastpost" class="xi2"><?php echo cutstr($sub['lastpost']['subject'], 30); ?></a> <cite><?php echo $sub['lastpost']['dateline'];?> <?php if($sub['lastpost']['author']) { ?><?php echo $sub['lastpost']['author'];?><?php } else { ?><?php echo $_G['setting']['anonymoustext'];?><?php } ?></cite>
                        <?php } else { ?>
                            从未
                        <?php } ?>
                    <?php } ?>
                    </div>
                </td>
            </tr>
            <tr class="fl_row">
            <?php } ?>
            <?php } ?>
            <?php echo $_G['forum']['endrows'];?>
            </tr>
        </table>
    </div>
</div>