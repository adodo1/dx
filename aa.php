<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>自驾搜索</title>
<style type="text/css">
#map {width:500px; height:500px; }
#position { padding:5px; width:500px;   border:solid 1px #CCCCCC; }
</style>
<script type="text/javascript" src="http://api.go2map.com/maps/js/api_v2.5.1.js"></script>
</head>
 
<body>
    <div id="position">
        <div>
            起始点：<input type="text" id="origin" size="35"/>
            <br />
            结束点：<input type="text" id="destination" size="35"/>
            <br />
            自驾策略： <label><input name="tactic" type="radio" value=0 checked/>距离短 </label><label><input name="tactic" type="radio" value=1 />时间短 </label><label><input name="tactic" type="radio" value=2 />不走高速路</label>
            <br />
            <input type="button" onclick="doSearch()"  value="查询" />
        </div>
    </div>
    <div id="map"></div>
</body>
<script>
 
            var flag=0;
            /*  创建地图  */
            var myLatLng = new sogou.maps.Point(12957062,4827187);
            var myOptions = {
              zoom: 10,
              center: myLatLng
            };
            var map = new sogou.maps.Map(document.getElementById("map"), myOptions);
            var bdr = null;
             
            //执行查询操作
            //执行查询操作   
    function doSearch(){
        var destination = document.getElementById("destination");
        var origin = document.getElementById("origin");
        var d = search(destination.value);
        var o = setTimeout(function(){
                     search(origin.value);
                }, 300);//做一延迟，保证起终点都已经查询到
        map.clearAll();
    }
     
    var targets = [];
     
    //在回调函数中执行路线查询操作
    function callback(a){
        var ps,b,c;
        (!!a&&a.data&&(ps=a.data.feature[0]));
        if(!!ps){
          b=sogou.maps.FeatureNode.loadFromJson(ps);
          targets.push(b);
        }
        if (targets.length > 1&&!flag) {
            flag=1;
            var tactics = document.getElementsByName("tactic");
            var tactic = 0;
            for (var i = 0; i < tactics.length; i++) {
                if (tactics[i].checked) {
                    tactic = tactics[i].value;
                }
            }
 
            var request={
                 'map':map,    
                 'destination':targets[0].points[0],
                 'origin':targets[1].points[0],
                 'tactic':tactic     
            }
            var nav=new sogou.maps.Driving();
            //for(var i in request) alert(i+">>:"+request[i]);
            nav.route(request,function(a){
                var option={
                   'map':map,
                   'drivingResult':a
               };
               bdr=new sogou.maps.DrivingRenderer(option);
               targets = [];
               flag=0;
            });
        }
    }
     
    //检索目标地点坐标信息
    function search(kw) {
        var search = new sogou.maps.Search();
        var request = {
            map:map,
            what:{keyword:kw},
            range:{
                city:"全国"
            }
        };
         
        search.search(request, callback);
    }
 
</script>
</html>
            