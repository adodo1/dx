/**
*
**/
   		Whole = $('.wtlb'); //整体结构
		tabMenu = $('.tab_tit a'); //tab菜单
		tabContent = Whole.find('.wtxq'); //tab内容
		tabMenu.click(function(){
			var i = $(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			tabContent.eq(i).show().siblings('.wtxq').hide();
			})
		//点击增加选项
		$('.wtxq input').click(function(){
			boolean = $(this).attr("checked");
			hantext = $(this).parent().text();
			id = $(this).attr("id");
			text = $('.haved').html();
			$(this).parent().parent().find('.check-boxs').last().click(function(){
				eqi = $(this).parent().index();
				var id = $(this).find('input').attr("id");
				eqb = eqi-1;
				if(boolean){
				tabtext = $('.tab_tit a').eq(eqb).text();
				
				var hantexta =tabtext+'(其他)';
				Finaltext = text+'<span class="have">'+hantexta+'<a class="del '+id+'"></a></span>';//确定结构
				$('.haved').fadeIn(600).html(Finaltext);
					}else{
					$('.'+id+'').parent().remove();
					spanNum = $('.haved').find('span').size();
					if(spanNum == 0){
						$('.haved').hide();
						}
					}
		//点击隐藏span		
			$('.del').click(function(){
				$(this).parent().remove();
				textclass = $(this).attr('class').split(' ')[1];//获取class
				$('#'+textclass+'').removeAttr("checked");
				spanNum = $('.haved').find('span').size();
				if(spanNum == 0){
					$('.haved').hide();
					}
				})
				})
			if(boolean){
				Finaltext = text+'<span class="have">'+hantext+'<a class="del '+id+'"></a></span>';//确定结构
				$('.haved').fadeIn(600).html(Finaltext);
					}else{
					$('.'+id+'').parent().remove();
					spanNum = $('.haved').find('span').size();
					if(spanNum == 0){
						$('.haved').hide();
						}
					}
			//点击隐藏span		
			$('.del').click(function(){
				$(this).parent().remove();
				textclass = $(this).attr('class').split(' ')[1];//获取class
				$('#'+textclass+'').removeAttr("checked");
				spanNum = $('.haved').find('span').size();
				if(spanNum == 0){
					$('.haved').hide();
					}
				})	
			});
//cookie
/*$(function() {
		$('.sbt').bind('click',function(){
			text = $('.haved').html();
		 $.cookie('name',text);

		});
		
	});
	$(function() {
			var a = $.cookie('name');
		$('.dddd').html(a);
	
	});
jQuery.cookie = function(name, value, options) {
          if (typeof value != 'undefined') {
                    options = options || {};
                    if (value === null) {
                              value = '';
                              options = $.extend({}, options);
                              options.expires = -1;
                    }
                    var expires = '';
                    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                              var date;
                              if (typeof options.expires == 'number') {
                                        date = new Date();
                                        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                              } else {
                                        date = options.expires;
                              }
                              expires = '; expires=' + date.toUTCString();
                    }
                    var path = options.path ? '; path=' + (options.path) : '';
                    var domain = options.domain ? '; domain=' + (options.domain) : '';
                    var secure = options.secure ? '; secure' : '';
                    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
          } else {
                    var cookieValue = null;
                    if (document.cookie && document.cookie != '') {
                              var cookies = document.cookie.split(';');
                              for (var i = 0; i < cookies.length; i++) {
                                        var cookie = jQuery.trim(cookies[i]);
                                        if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                                  break;
                                        }
                              }
                    }
                    return cookieValue;
          }
};
*/
