// JavaScript Document


function showItem_Menu(){
	var itemid = GetQueryString("item_id");
	if(itemid != ""){
	   //有几个菜单项，数值就是几
	   menu_ChinaOnclick(itemid,5);
	}
}

function menu_ChinaOnclick(num,linum){
	for (var i = 0; i < linum; i++) {
		if(num == i){
			var menu01 = document.getElementById("menuItem"+num);
			menu01.className = "Myactive";
		}
		else{
			var menu02 = document.getElementById("menuItem"+i);
			menu02.className = "";
		}
	}
}
//获取链接参数值
function GetQueryString(sProp)     
{
     var re = new RegExp("[&,?]"+sProp + "=([^//&]*)", "i");  
   
     var a = re.exec(document.location.search);  
   
     if (a == null)  
     {
         return "";  
	 }
     return a[1];  
}

