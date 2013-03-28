<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>�Լ�����</title>
<style type="text/css">
#map {width:500px; height:500px; }
#position { padding:5px; width:500px;   border:solid 1px #CCCCCC; }
</style>
<script type="text/javascript" src="http://api.go2map.com/maps/js/api_v2.5.1.js"></script>
</head>
 
<body>
    <div id="position">
        <div>
            ��ʼ�㣺<input type="text" id="origin" size="35"/>
            <br />
            �����㣺<input type="text" id="destination" size="35"/>
            <br />
            �Լݲ��ԣ� <label><input name="tactic" type="radio" value=0 checked/>����� </label><label><input name="tactic" type="radio" value=1 />ʱ��� </label><label><input name="tactic" type="radio" value=2 />���߸���·</label>
            <br />
            <input type="button" onclick="doSearch()"  value="��ѯ" />
        </div>
    </div>
    <div id="map"></div>
</body>
<script>
 
            var flag=0;
            /*  ������ͼ  */
            var myLatLng = new sogou.maps.Point(12957062,4827187);
            var myOptions = {
              zoom: 10,
              center: myLatLng
            };
            var map = new sogou.maps.Map(document.getElementById("map"), myOptions);
            var bdr = null;
             
            //ִ�в�ѯ����
            //ִ�в�ѯ����   
    function doSearch(){
        var destination = document.getElementById("destination");
        var origin = document.getElementById("origin");
        var d = search(destination.value);
        var o = setTimeout(function(){
                     search(origin.value);
                }, 300);//��һ�ӳ٣���֤���յ㶼�Ѿ���ѯ��
        map.clearAll();
    }
     
    var targets = [];
     
    //�ڻص�������ִ��·�߲�ѯ����
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
     
    //����Ŀ��ص�������Ϣ
    function search(kw) {
        var search = new sogou.maps.Search();
        var request = {
            map:map,
            what:{keyword:kw},
            range:{
                city:"ȫ��"
            }
        };
         
        search.search(request, callback);
    }
 
</script>
</html>
            