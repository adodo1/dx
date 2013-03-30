
<?php

  	if($_POST['start'] && $_POST['end']) {
		echo '<input type="hidden" name="starthidden" id="starthidden" value="'.$_POST['start'].'">';
		echo '<input type="hidden" name="endhidden" id="endhidden" value="'.$_POST['end'].'">';
	}
	

?>


<!DOCTYPE html>
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>驾车方案选择</title>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.3"></script>
</head>
<body>
<div style="width:520px;height:340px;border:1px solid gray" id="container"></div>
<div id="dvPolicy"> <input id="policy0" checked="true" type="radio" name="pickPolicy"/>最少时间<input id="policy1" type="radio" name="pickPolicy"/>最短距离<input id="policy2" type="radio" name="pickPolicy"/>避开高速</div> 
<div id="results" style="font-size:13px;margin-top:10px;"></div>
</body>
</html>
<script type="text/javascript">
    var map = new BMap.Map("container");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
    map.enableScrollWheelZoom();
    var start =document.getElementById('starthidden').value,end =document.getElementById('endhidden').value,routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
	
    var arrInput = document.getElementById("dvPolicy").getElementsByTagName("input");
    search(start,end,routePolicy[0]);
    document.getElementById("dvPolicy").onclick = function(e){ 
        e = e || window.event;
        var elem = e.srcElement || e.target , policyIndex;       
        if(elem.tagName.toLowerCase() == "input"){
            policyIndex = elem.getAttribute("id").replace("policy","");             
            map.clearOverlays();
            search(start,end,routePolicy[policyIndex]);             
        }
    }
    function search(start,end,route){ 
        var transit = new BMap.DrivingRoute(map, {
            renderOptions: {map: map,panel:"results"}, 
            policy: route
        });
        transit.search(start,end);
    }
</script>
