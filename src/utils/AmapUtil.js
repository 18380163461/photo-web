import CommonUtil from "./CommonUtil.js"

/** log level **/
var ll={debug:false,info:false,error:true,temp:true};
var mll={debug:false};
var intervalTimer=null;


export default {
  showMap:function(map,mapConfig) {
    let that=this;
    mapConfig=that.setDefaultConfig(mapConfig);
    // 先销毁图表对象
    map=that.destroyMap(map);
    // 然后创建
    map=new AMap.Map(mapConfig.divId,{
      zoom:mapConfig.zoom,
      zooms:[mapConfig.minZoom,mapConfig.maxZoom],
      center:mapConfig.centerPoint
    });
    map.groups={polygonGroups:{},polygonLabelGroups:{},markerGroups:{},markerLabelGroups:{}};
    map.plugins={};

    if(mll.debug) {
      map.off("click");
      map.on("click",function(e) {
      });
    }

    if(mapConfig.isAddScale) {
      AMap.plugin('AMap.Scale',function(){
        var scale=new AMap.Scale();
        map.addControl(scale);
        map.plugins.scale=scale;
      });
    }

    if(mapConfig.isAddToolBar) {
      AMap.plugin('AMap.ToolBar',function(){
        var toolBar=new AMap.ToolBar({});
        map.addControl(toolBar);
        map.plugins.toolBar=toolBar;
      });
    }

    if(mapConfig.isAutoLocate||mapConfig.isAddGeolocation) {
      AMap.plugin('AMap.Geolocation',function() {
        var geolocation=new AMap.Geolocation({
          enableHighAccuracy:true,//是否使用高精度定位，默认:true
          timeout:10000,          //超过10秒后停止定位，默认：5s
          buttonPosition:'LB',    //定位按钮的停靠位置
          zoomToAccuracy:true     //定位成功后是否自动调整地图视野到定位点
        });
        map.addControl(geolocation);
        map.plugins.geolocation=geolocation;
      });
    }

    if(mapConfig.isAutoLocate) {
      map.on("complete",function() {
        that.locateCurrent();
      });
    }

    map.mapConfig=mapConfig;
    return map;
  },
  destroyMap:function(map) {
    if(!CommonUtil.isNullObj(map)) {
      if(typeof(map.destroy)==="function") {
        map.destroy();
      }
      map=null;
    }
    return map;
  },

  locateCurrent(map) {
    let that=this;
    if(!CommonUtil.isNullObj(map.plugins.geolocation)&&typeof(map.plugins.geolocation.getCurrentPosition)==="function") {
      map.plugins.geolocation.getCurrentPosition(function(status,result){
        if(ll.debug) {
        }
        if(status==='complete'){
        }else{
          that.$toast.fail("定位失败");
        }
      });
    }
  },


  addDrawMarkerTool(map,cbDrawMarker) {
    var mouseTool=new AMap.MouseTool(map);
    mouseTool.marker({});
    mouseTool.on('draw',function(e) {
      if(!CommonUtil.isNullObj(cbDrawMarker)&&typeof(cbDrawMarker)==="function") {
        var lnglat=[];
        var markerObj=e.obj;
        if(!CommonUtil.isNullObj(markerObj)&&!CommonUtil.isNullObj(markerObj.getPosition())) {
          var markerPoint=markerObj.getPosition();
          if(!CommonUtil.isNullObj(markerPoint)&&!CommonUtil.isNullObj(markerPoint.lng)&&!CommonUtil.isNullObj(markerPoint.lat)) {
            lnglat=[markerPoint.lng, markerPoint.lat];
          }
        }
        cbDrawMarker(lnglat);
      }
    });
    map.mouseTool=mouseTool;
    return map;
  },

  addDrawPolygonTool(map,cbDrawPolygon) {
    var mouseTool=new AMap.MouseTool(map);
    mouseTool.polygon(map.mapConfig.styleOverlayPolygon);
    mouseTool.on('draw',function(e) {
      if(!CommonUtil.isNullObj(cbDrawPolygon)&&typeof(cbDrawPolygon)==="function") {
        var lnglat=[];
        var path=e.obj.getPath();
        for(var i in path) {
          var markerPoint=path[i];
          if(!CommonUtil.isNullObj(markerPoint)&&!CommonUtil.isNullObj(markerPoint.lng)&&!CommonUtil.isNullObj(markerPoint.lat)) {
            lnglat.push([markerPoint.lng, markerPoint.lat]);
          }
        }
        cbDrawPolygon(lnglat);
      }
    });
    map.mouseTool=mouseTool;
    return map;
  },



  showPolygon(map,dataPolygon) {
    if(ll.debug) console.log("AmapUtil.showPolygon");
    if(!CommonUtil.isNullObj(map.dislayerPorvince)) map.dislayerPorvince.setMap(null);
    var amapPolygon=new AMap.Polygon({path:dataPolygon.lnglats});
    map.add(amapPolygon);
    map.setFitView();
    return map;
  },

  showPolygonList(map,dataPolygons) {
    if(ll.debug) console.log("AmapUtil.showPolygonList");
    if(ll.debug) console.log(dataPolygons);
    let that=this;

    if(map.mapConfig.isClearMap) map.clearMap();
    if(!CommonUtil.isNullArr(map.groups.polygonGroups)) {
      map.remove(map.groups.polygonGroups);
      map.groups.polygonGroups={};
    }
    if(!CommonUtil.isNullArr(map.groups.polygonLabelGroups)) {
      map.remove(map.groups.polygonLabelGroups);
      map.groups.polygonLabelGroups={};
    }

    var amapPolygonList=[];
    var amapPolygonLabelList=[];
    for(var i in dataPolygons) {
      if(CommonUtil.isNullObj(dataPolygons[i])||CommonUtil.isNullArr(dataPolygons[i].lnglats)) continue;
      var dataPolygon=dataPolygons[i];
      var centerPoint=that.calculateCenter(dataPolygon.lnglats);
      var amapPolygon=new AMap.Polygon({path:dataPolygon.lnglats});


      if(!CommonUtil.isNullObj(dataPolygon.areaStyle)) {
        amapPolygon.setOptions(dataPolygon.areaStyle);
      }
      if(!CommonUtil.isNullObj(dataPolygon.labelContent)) {
        dataPolygon.labelContent.position=centerPoint;
        var text=new AMap.Text(dataPolygon.labelContent);
        amapPolygon.label=text;
        amapPolygonLabelList.push(text);
      }

      if(map.mapConfig.isShowTooltip) {
        var content=map.mapConfig.tooltipText;
        amapPolygon.infoWindow=new AMap.InfoWindow({content:content});
      }

      amapPolygon.on('click',function(params) {
        clearTimeout(intervalTimer);
        intervalTimer=setTimeout(function() {
          if(mll.debug) {
            console.log(params);
          }
          if(typeof(dataPolygon.onPolygonClick)=="function") {
            dataPolygon.onPolygonClick(params.target.data);
          }
        }, 800);
      });
      amapPolygon.on('dblclick',function(params) {
        clearTimeout(intervalTimer);
        if(mll.debug) {
          console.log(params);
        }
        if(typeof(dataPolygon.onPolygonDblclick)=="function") {
          dataPolygon.onPolygonDblclick(params.target.data);
        }
      });

      amapPolygon.on('mouseover',function(params) {
        // console.log(params);
        if(!CommonUtil.isNullObj(amapPolygon.infoWindow)) {
          amapPolygon.infoWindow.open(map,params.lnglat);
        }
      });
      amapPolygon.on('mouseout',function(params) {
        // console.log(params);
        if(!CommonUtil.isNullObj(amapPolygon.infoWindow)) {
          amapPolygon.infoWindow.close();
        }
      });

      amapPolygon.dataPolygon=dataPolygon;
      amapPolygon.data=dataPolygon;
      if(ll.debug) console.log(amapPolygon);
      amapPolygonList.push(amapPolygon);
    }

    var polygonGroup=new AMap.OverlayGroup(amapPolygonList);
    var polygonLabelGroup=new AMap.OverlayGroup(amapPolygonLabelList);
    map.polygonGroups=polygonGroup;
    map.polygonGroups.polygonLabelGroups=polygonLabelGroup;
    map.add(polygonGroup);
    map.add(polygonLabelGroup);
    map.setFitView();
    return map;
  },

  addMarkerList(map,markerType,dataMarkers) {
    if(ll.debug) console.log("AmapUtil.addMarkerList");
    // 点类型不能为空
    if(CommonUtil.isNullStr(markerType)) return map;
    if(!CommonUtil.isNullArr(map.groups.markerGroups[markerType])) {
      map.remove(map.groups.markerGroups[markerType]);
      map.groups.markerGroups[markerType]=null;
    }else {
      map.groups.markerGroups[markerType]=[];
    }
    if(!CommonUtil.isNullArr(map.groups.markerLabelGroups[markerType])) {
      map.remove(map.groups.markerLabelGroups[markerType]);
      map.groups.markerLabelGroups[markerType]=null;
    }else {
      map.groups.markerLabelGroups[markerType]=[];
    }

    var amapMarkerList=[];
    var amapMarkerLabelList=[];
    for(var i in dataMarkers) {
      if(CommonUtil.isNullObj(dataMarkers[i])||CommonUtil.isNullArr(dataMarkers[i].lnglat)) continue;
      var dataMarker=dataMarkers[i];
      var amapMarker=new AMap.Marker({position:dataMarker.lnglat,clickable:map.mapConfig.isMarkerClickable,topWhenClick:map.mapConfig.isMarkerTopWhenClick});
      if(!CommonUtil.isNullObj(dataMarker.icon)) {
        amapMarker.setIcon(new AMap.Icon(dataMarker.icon));
      }
      if(!CommonUtil.isNullObj(dataMarker.labelContent)) {
        dataMarker.labelContent.position=dataMarkers[i].lnglat;
        var text=new AMap.Text(dataMarker.labelContent);
        amapMarker.label=text;
        amapMarkerLabelList.push(text);
      }
      amapMarkerList.push(amapMarker);
    }
    if(!CommonUtil.isNullArr(amapMarkerList)) {
      var markerGroup=new AMap.OverlayGroup(amapMarkerList);
      map.groups.markerGroups[markerType].push(markerGroup);
      map.add(markerGroup);
    }
    if(!CommonUtil.isNullArr(amapMarkerLabelList)) {
      var markerLabelGroup=new AMap.OverlayGroup(amapMarkerLabelList);
      map.groups.markerLabelGroups[markerType]=markerLabelGroup;
      map.add(markerLabelGroup);
    }
    map.setFitView();
    return map;
  },

  clearMarkers(map,markerType) {
    if(ll.debug) console.log("AmapUtil.clearMarkers");
    if(ll.debug) console.log(markerType);
    // 不传点类型则清除全部点
    if(CommonUtil.isNullStr(markerType)) {
      for(var i in map.groups.markerGroups) {
        map.remove(map.groups.markerGroups[i]);
        map.remove(map.groups.markerLabelGroups[i]);
      }
      map.groups.markerGroups={};
    }else if(!CommonUtil.isNullArr(map.groups.markerGroups[markerType])) {
      map.remove(map.groups.markerGroups[markerType]);
      if(!CommonUtil.isNullArr(map.groups.markerLabelGroups[markerType])) {
        map.remove(map.groups.markerLabelGroups[markerType]);
      }
    }
    map.setFitView();
    return map;
  },



  clearInfoWindow(map) {
    map.clearInfoWindow();
    return map;
  },













  calculateCenter:function(lnglatArray) {
    var total=lnglatArray.length;
    var X=0,Y=0,Z=0;
    for(var j=0;j<lnglatArray.length;j++) {
      var lng=lnglatArray[j][0]*Math.PI/180;
      var lat=lnglatArray[j][1]*Math.PI/180;
      var x,y,z;
      x=Math.cos(lat)*Math.cos(lng);
      y=Math.cos(lat)*Math.sin(lng);
      z=Math.sin(lat);
      X+=x;
      Y+=y;
      Z+=z;
    }
    X=X/total;
    Y=Y/total;
    Z=Z/total;
    var Lng=Math.atan2(Y,X);
    var Hyp=Math.sqrt(X*X+Y*Y);
    var Lat=Math.atan2(Z,Hyp);
    var reslng=Lng*180/Math.PI;
    var reslat=Lat*180/Math.PI;
    return [reslng,reslat];
  },

  getContextPath:function() {
    var pathName=document.location.pathname;
    var index=pathName.substr(1).indexOf("/");
    var result=pathName.substr(0,index+1);
    return result;
  },

  setDefaultConfig:function(mapConfig) {
    let that=this;
    /** judge null part * */
    mapConfig                            =CommonUtil.setDefaultObj(mapConfig,{});
    // map 对象 对应页面divId
    mapConfig.divId                      =CommonUtil.setDefaultStr(mapConfig.divId,"mapcontainer");
    // 展示省份名称
    mapConfig.provinceName               =CommonUtil.setDefaultStr(mapConfig.provinceName,"贵州");
    // 省份地图行政编码
    mapConfig.provinceMapCode            =CommonUtil.setDefaultStr(mapConfig.provinceMapCode,"520000");
    // 展示中心点坐标
    mapConfig.centerPoint                =CommonUtil.setDefaultStr(mapConfig.centerPoint,[106.647217,26.627152]);
    // 放大比例
    mapConfig.zoom                       =CommonUtil.setDefaultObj(mapConfig.zoom,6);
    // 最大放大比例
    mapConfig.minZoom                    =CommonUtil.setDefaultObj(mapConfig.minZoom,2);
    mapConfig.maxZoom                    =CommonUtil.setDefaultObj(mapConfig.maxZoom,20);
    // 是否添加比例尺
    mapConfig.isAddScale                 =CommonUtil.setDefaultObj(mapConfig.isAddScale,false);
    // 是否添加方向盘、定位及标尺
    mapConfig.isAddToolBar               =CommonUtil.setDefaultObj(mapConfig.isAddToolBar,true);
    mapConfig.toolBarOffsetX             =CommonUtil.setDefaultObj(mapConfig.toolBarOffsetX,0);
    mapConfig.toolBarOffsetY             =CommonUtil.setDefaultObj(mapConfig.toolBarOffsetY,-50);
    mapConfig.isShowtoolBarDirection     =CommonUtil.setDefaultObj(mapConfig.isShowtoolBarDirection,false);
    // 是否显示浮动提示框
    mapConfig.isShowTooltip              =CommonUtil.setDefaultObj(mapConfig.isShowTooltip,true);
    mapConfig.tooltipText                =CommonUtil.setDefaultStr(mapConfig.tooltipText,"单击显示看板，双击下钻地图");
    // 是否地图加载完成后自动定位
    mapConfig.isAutoLocate               =CommonUtil.setDefaultObj(mapConfig.isAutoLocate,false);
    // 是否地图加载完成显示所在城市
    mapConfig.resizeEnable               =CommonUtil.setDefaultObj(mapConfig.resizeEnable,false);
    // 是否添加定位工具
    mapConfig.isAddGeolocation           =CommonUtil.setDefaultObj(mapConfig.isAddGeolocation,false);

    // 点是否可点击
    mapConfig.isMarkerClickable          =CommonUtil.setDefaultObj(mapConfig.isMarkerClickable,true);
    mapConfig.isMarkerTopWhenClick       =CommonUtil.setDefaultObj(mapConfig.isMarkerTopWhenClick,true);



    /** extend resources **/
    mapConfig.iconPathBase               =that.getContextPath()+"/resources/template/images/";
    mapConfig.iconPathEmpty              =that.getContextPath()+"/resources/template/images/empty.png";
    mapConfig.iconPathCM                 =mapConfig.iconPathBase+"map-icon1.png";
    mapConfig.iconPathCT                 =mapConfig.iconPathBase+"map-icon2.png";
    mapConfig.iconPathCU                 =mapConfig.iconPathBase+"map-icon3.png";
    mapConfig.iconPathCUCT               =mapConfig.iconPathBase+"map-icon4.png";


    /** style **/
    mapConfig.styleOverlayPolygonRedEdgedWhiteFilled   ={strokeColor:"red",strokeWeight:3,strokeOpacity:0.8,fillOpacity:0.6,strokeStyle:'solid'};
    mapConfig.styleOverlayPolygonGreenEdged            ={strokeColor:"#00ce6d",strokeWeight:2,strokeOpacity:0.8,fillOpacity:0.1,strokeStyle:'solid'};
    mapConfig.styleOverlayPolygonGreenFilled           ={strokeColor:"#00ce6d",fillColor:"#00ce6d",strokeWeight:2,strokeOpacity:0.8,fillOpacity:0.15,strokeStyle:'solid'};
    mapConfig.styleOverlayLabelBlackBg                 ={color:"white",fontSize:"16px",height:"32px",backgroundColor:'#00ce6d',fontFamily:"微软雅黑",textAlign:"center",padding:"5px 0 0 0",border:"none",fontWeight:"bold"};
    mapConfig.styleOverlayInfoBoxBlackBg               ={color:"white",fontSize:"16px",height:"32px",backgroundColor:'#00ce6d',fontFamily:"微软雅黑",textAlign:"center",padding:"5px 0 0 0",border:"none",fontWeight:"bold"};
    mapConfig.styleOverlayLabelBackgroundBuleGreen     ="linear-gradient(to left,#00ca78 0%,#00a4ec 100%)";

    mapConfig.style                                    =CommonUtil.setDefaultObj(mapConfig.style,{});
    mapConfig.styleOverlayPolygon                      =CommonUtil.setDefaultObj(mapConfig.styleOverlayPolygon,mapConfig.styleOverlayPolygonGreenFilled);
    mapConfig.styleOverlayLabel                        =CommonUtil.setDefaultObj(mapConfig.styleOverlayLabel,{});
    mapConfig.styleOverlayMarkerIcon                   =CommonUtil.setDefaultObj(mapConfig.styleOverlayMarkerIcon,mapConfig.iconPathCM);
    mapConfig.styleOverlayMarkerLabel                  =CommonUtil.setDefaultObj(mapConfig.styleOverlayMarkerLabel,mapConfig.styleOverlayLabelBlackBg);
    mapConfig.styleOverlayMarkerInfoBox                =CommonUtil.setDefaultObj(mapConfig.styleOverlayMarkerInfoBox,mapConfig.styleOverlayInfoBoxBlackBg);




    return mapConfig;
  }
};
