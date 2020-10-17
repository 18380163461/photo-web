import axios from 'axios';
import config from './config';
import API from './API';
const api = new API();
import mockConst from './mock-const.js';

var Mock = require('mockjs');
var tokenId = 'SE-BRAIN-893044488eef88889effefef';

/**
 * 首页-菜单列表
 */
if(mockConst.isStatic.getUserMenus) {
	Mock.mock(mockConst.getRegExpUrl(api.url.deleWarn), 'get', {
		"status": 0,
		"msg": "成功"
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.addWarn), 'get', {
		"status": 0,
		"msg": "成功"
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.editWarn), 'get', {
		"status": 0,
		"msg": "成功"
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.getUserInfo), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"userId": "test",
			"userName": "测试账号",
			"userMobile": "13812345678",
			"userEmail": "test@zj.chinamobile.com"
		}
	});
	// Mock.mock(mockConst.getRegExpUrl(api.url.getAreaList), 'get', {
	// 	"status": 0,
	// 	"msg": "成功",
	// 	"obj": [{
	// 		"areaId": "330000",
	// 		"areaName": "杭州市"
	// 	}, {
	// 		"areaId": "330001",
	// 		"areaName": "温州市"
	// 	}]
	// });

  /**
   * 需求单大类
   */
  Mock.mock(mockConst.getRegExpUrl(api.url.requireBigType), 'get', {
  	"status": 0,
  	"msg": "成功",
  	"obj": [{
  		"columnValue": "1001",
  		"columnDesc": "网络类"
  	}, {
  		"columnValue": "1002",
  		"columnDesc": "市场类"
  	}]
  });
  /**
   * 需求单小类
   */
  Mock.mock(mockConst.getRegExpUrl(api.url.requireSmallType), 'get', {
    "status": 0,
    "msg": "成功",
    "obj": [{
      "columnValue": "1001",
      "columnDesc": "网络投诉类"
    }, {
      "columnValue": "1002",
      "columnDesc": "网络故障类"
    }, {
      "columnValue": "1003",
      "columnDesc": "建设需求类"
    }, {
      "columnValue": "1004",
      "columnDesc": "支撑诉求类"
    }, {
      "columnValue": "1005",
      "columnDesc": "其他类"
    }]
  });
	Mock.mock(mockConst.getRegExpUrl(api.url.getKpiList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"pageIndex": 1,
			"pageSize": 10,
			"total": 3,
			"list": [{
					"kpiId": "1",
					"kpiName": "指标1"
				},
				{
					"kpiId": "2",
					"kpiName": "指标2"
				},
				{
					"kpiId": "3",
					"kpiName": "指标3"
				}
			]
		}
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.getRoleList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [{
				"roleId": "1",
				"roleName": "角色1"
			},
			{
				"roleId": "2",
				"roleName": "角色2"
			},
			{
				"roleId": "3",
				"roleName": "角色3"
			},
			{
				"roleId": "4",
				"roleName": "角色4"
			},
			{
				"roleId": "5",
				"roleName": "角色5"
			}
		]
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.getRoleType), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [{
				"typeId": "1",
				"typeName": "省公司管理员"
			},
			{
				"typeId": "2",
				"typeName": "地市管理员"
			},
			{
				"typeId": "3",
				"typeName": "县区管理员"
			},
			{
				"typeId": "4",
				"typeName": "区域管理员"
			},
			{
				"typeId": "5",
				"typeName": "网格管理员"
			}
		]
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.getSingleWarn), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"id": "1",
			"warningLevel": "2",
			"provCode": "",
			"cityCode": "",
			"countyCode": "",
			"areaCode": "",
			"gridCode": "",
			"triggerTime": "09:00:00",
			"intervalDays": 1,
			"sendType": "sms,email",
			"sendContent": "",
			"kpiList": [{
					"id": "1",
					"kpiId": "1",
					"kpiName": "指标1",
					"type": "1",
					"minValue": '100',
					"maxValue": '150'
				},
				{
					"id": "2",
					"kpiId": "2",
					"kpiName": "指标2",
					"type": "2",
					"minValue": '40',
					"maxValue": '60'
				},
				{
					"id": "3",
					"kpiId": "3",
					"kpiName": "指标3",
					"type": "3",
					"rankType": "desc",
					"rankValue": '10'
				}
			],
			"kpiWarningRule": "or",
			"userList": [{
					"id": "1",
					"roleType": "1",
					"roleId": "1",
					"userId": "1",
					"userName": "用户1",
					"userMobile": "13812345678",
					"userEmail": "13812345678@139.com",
					"upLevel": "0"
				},
				{
					"id": "2",
					"roleType": "1",
					"roleId": "1",
					"userId": "2",
					"userName": "用户2",
					"userMobile": "13812345671",
					"userEmail": "13812345671@139.com",
					"upLevel": "1",
					"children": [{
						"userId": "1",
						"userName": "用户1"
					}]
				},
				{
					"id": "3",
					"roleType": "1",
					"roleId": "1",
					"userId": "3",
					"userName": "用户3",
					"userMobile": "13812345672",
					"userEmail": "13812345672@139.com",
					"upLevel": "2",
					"children": [{
						"userId": "1",
						"userName": "用户1"
					}]
				}
			]
		}
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.getWarnLevel), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [{
				"typeId": "1",
				"typeName": "省"
			},
			{
				"typeId": "2",
				"typeName": "地市"
			},
			{
				"typeId": "3",
				"typeName": "县区"
			},
			{
				"typeId": "4",
				"typeName": "区域中心"
			},
			{
				"typeId": "5",
				"typeName": "网格"
			}
		]
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.getWarnList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"pageIndex": 1,
			"pageSize": 10,
			"total": 3,
			"list": [{
					"id": "1",
					"warningLevelName": "营销中心",
					"areaLabel": "浙江省 / 杭州市 / 西湖区",
					"triggerTime": "08:00:00",
					"intervalDays": 7,
					"sendTypeNames": '短信、邮件'
				},
				{
					"id": "2",
					"warningLevelName": "营销中心",
					"areaLabel": "浙江省 / 杭州市 / 西湖区",
					"triggerTime": "09:00:00",
					"intervalDays": 7,
					"sendTypeNames": '短信、邮件'
				},
				{
					"id": "3",
					"warningLevelName": "营销中心",
					"areaLabel": "浙江省 / 杭州市 / 西湖区",
					"triggerTime": "10:00:00",
					"intervalDays": 7,
					"sendTypeNames": '短信、邮件'
				}
			]
		}
	});
	Mock.mock(mockConst.getRegExpUrl(api.url.getUserMenus), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [
		    {
		        "id": "15",
		        "name": "承包查询",
		        "type": 2,
		        "parentId": "2",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "18",
		        "name": "预警配置",
		        "type": 2,
		        "parentId": "3",
		        "url": "/warnTab",
		        "vuePath": "warning/warnTab",
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "19",
		        "name": "预警查询",
		        "type": 2,
		        "parentId": "3",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "34",
		        "name": "网格人员维护",
		        "type": 2,
		        "parentId": "33",
            "url": "/gridUserMgr",
            "vuePath": "base/gridUserMgr",
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "35",
		        "name": "承包区域维护",
		        "type": 2,
		        "parentId": "33",
		        "url": "/contractList",
		        "vuePath": "base/contractList",
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "36",
		        "name": "场景画图工具",
		        "type": 2,
		        "parentId": "33",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "41",
		        "name": "新增流程",
		        "type": 2,
		        "parentId": "4",
		        "url": "/triangle/flowConfig",
		        "vuePath": "triangle/triangleFlowConfig",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-video",
		        "outsideType": 1
		    },
		    {
		        "id": "1",
		        "name": "网格概况",
		        "type": 1,
		        "parentId": "0",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "2",
		        "name": "承包管理",
		        "type": 1,
		        "parentId": "0",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "3",
		        "name": "市场预警",
		        "type": 1,
		        "parentId": "0",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "4",
		        "name": "倒三角支撑",
		        "type": 1,
		        "parentId": "0",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "5",
		        "name": "网络营销",
		        "type": 1,
		        "parentId": "0",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "6",
		        "name": "运营报表",
		        "type": 1,
		        "parentId": "0",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
		    {
		        "id": "33",
		        "name": "基础管理",
		        "type": 1,
		        "parentId": "0",
		        "url": "#",
		        "vuePath": null,
		        "iconType": null,
		        "iconValue": null,
		        "outsideType": 1
		    },
        {
          "id": "21",
          "name": "任务协同",
          "type": 1,
          "parentId": "0",
          "url": "#",
          "vuePath": null,
          "iconType": null,
          "iconValue": null,
          "outsideType": 1
        }
        ,
        {
          "id": "46",
          "name": "大屏配置",
          "type": 1,
          "parentId": "0",
          "url": "#",
          "vuePath": null,
          "iconType": 1,
          "iconValue": "iconfont icon-profile-video",
          "outsideType": 1
        },
        {
          "id": "47",
          "name": "菜单配置",
          "type": 2,
          "parentId": "46",
          "url": "/menuManager",
          "vuePath": null,
          "iconType": 1,
          "iconValue": "iconfont icon-profile-operate",
          "outsideType": 1
        },
        {
          "id": "48",
          "name": "指标配置",
          "type": 2,
          "parentId": "46",
          "url": "/stockManage",
          "vuePath": null,
          "iconType": 1,
          "iconValue": "iconfont icon-profile-video",
          "outsideType": 1
        },
        {
          "id": "49",
          "name": "指标查询",
          "type": 2,
          "parentId": "46",
          "url": "/kpiSearch",
          "vuePath": null,
          "iconType": 1,
          "iconValue": "iconfont icon-profile-video",
          "outsideType": 1
        }
        ,

		    {
		        "id": "8",
		        "name": "宏观信息",
		        "type": 2,
		        "parentId": "1",
		        "url": "/profile/info",
		        "vuePath": "profile/profileMainA",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-info",
		        "outsideType": 1
		    },
		    {
		        "id": "9",
		        "name": "夏日风暴",
		        "type": 2,
		        "parentId": "1",
		        "url": "/profile/storm",
		        "vuePath": "profile/profileMainB",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-storm",
		        "outsideType": 1
		    },
		    {
		        "id": "10",
		        "name": "市场大势",
		        "type": 2,
		        "parentId": "1",
		        "url": "/profile/trend",
		        "vuePath": "profile/profileMainC",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-trend",
		        "outsideType": 1
		    },
		    {
		        "id": "11",
		        "name": "存量经营",
		        "type": 2,
		        "parentId": "1",
		        "url": "/profile/operate",
		        "vuePath": "profile/profileMainD",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-operate",
		        "outsideType": 1
		    },
		    {
		        "id": "12",
		        "name": "流量和4G",
		        "type": 2,
		        "parentId": "1",
		        "url": "/profile/stream",
		        "vuePath": "profile/profileMainE",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-stream",
		        "outsideType": 1
		    },
		    {
		        "id": "13",
		        "name": "宽带发展",
		        "type": 2,
		        "parentId": "1",
		        "url": "/profile/develop",
		        "vuePath": "profile/profileMainF",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-develop",
		        "outsideType": 1
		    },
		    {
		        "id": "14",
		        "name": "视频业务",
		        "type": 2,
		        "parentId": "1",
		        "url": "/profile/video",
		        "vuePath": "profile/profileMainG",
		        "iconType": "1",
		        "iconValue": "iconfont icon-profile-video",
		        "outsideType": 1
		    },
        {
        "id": "20",
        "name": "我的预警",
        "type": 2,
        "parentId": "3",
        "url": "/MyWarn",
        "vuePath": "warning/MyWarn",
        "iconType": null,
        "iconValue": null,
        "outsideType": 1
      },
      {
        "id": "15",
        "name": "作战地图",
        "type": 2,
        "parentId": "1",
        "url": "/profile/fright",
        "vuePath": "profile/fright",
        "iconType": "1",
        "iconValue": "iconfont icon-profile-info",
        "outsideType": 1
      },
      {
        "id": "22",
        "name": "问题单管理",
        "type": 2,
        "parentId": "21",
        "url": "/taskCooperation/question",
        "vuePath": "taskCooperation/questionManagement/questionManagement",
        "iconType": "1",
        "iconValue": "iconfont icon-yibiao",
        "outsideType": 1
      },
      {
        "id": "29",
        "name": "问题单管理",
        "type": 3,
        "parentId": "22",
        "url": "/taskCooperation/questionManagement",
        "vuePath": "taskCooperation/questionManagement/questionManagement",
        "iconType": "2",
        "iconValue": "iconfont icon-yibiao",
        "outsideType": 1
      },
      {
        "id": "23",
        "name": "需求单管理",
        "type": 2,
        "parentId": "21",
        "url": "/taskCooperation/requireManagement",
        "vuePath": "taskCooperation/requireManagement/requireManagement",
        "iconType": "1",
        "iconValue": "iconfont icon-shenhebijijishibenxiezi",
        "outsideType": 1
      },
      {
        "id": "26",
        "name": "活动营销需求单管理",
        "type": 3,
        "parentId": "23",
        "url": "/taskCooperation/requireManagement/activityMarketing",
        "vuePath": "taskCooperation/requireManagement/activityMarketing",
        "iconType": "2",
        "iconValue": "iconfont icon-profile-info",
        "outsideType": 1
      },
      {
        "id": "27",
        "name": "号卡资源需求单管理",
        "type": 3,
        "parentId": "23",
        "url": "/taskCooperation/requireManagement/cardResource",
        "vuePath": "taskCooperation/requireManagement/cardResource",
        "iconType": "2",
        "iconValue": "iconfont icon-profile-info",
        "outsideType": 1
      },
      {
        "id": "28",
        "name": "市场咨询需求单管理",
        "type": 3,
        "parentId": "23",
        "url": "/taskCooperation/requireManagement/marketingConsultation",
        "vuePath": "taskCooperation/requireManagement/marketingConsultation",
        "iconType": "2",
        "iconValue": "iconfont icon-profile-info",
        "outsideType": 1
      },
      {
        "id": "24",
        "name": "任务评价",
        "type": 2,
        "parentId": "21",
        "url": "/taskCooperation/evaluation",
        "vuePath": "taskCooperation/taskEvaluation/taskEvaluation",
        "iconType": "1",
        "iconValue": "iconfont icon-renwuwancheng",
        "outsideType": 1
      },
      {
        "id": "30",
        "name": "任务评价",
        "type": 3,
        "parentId": "24",
        "url": "/taskCooperation/taskEvaluation",
        "vuePath": "taskCooperation/taskEvaluation/taskEvaluation",
        "iconType": "2",
        "iconValue": "iconfont icon-renwuwancheng",
        "outsideType": 1
      },
      {
        "id": "25",
        "name": "配置管理",
        "type": 2,
        "parentId": "21",
        "url": "/taskCooperation/configuration",
        "vuePath": "taskCooperation/configurationManagement/configurationManagement",
        "iconType": "1",
        "iconValue": "iconfont icon-biaoge",
        "outsideType": 1
      },
      {
        "id": "31",
        "name": "配置管理",
        "type": 3,
        "parentId": "25",
        "url": "/taskCooperation/configurationManagement",
        "vuePath": "taskCooperation/configurationManagement/configurationManagement",
        "iconType": "2",
        "iconValue": "iconfont icon-biaoge",
        "outsideType": 1
      },
      {
        "id": "32",
        "name": "信息模板配置",
        "type": 3,
        "parentId": "25",
        "url": "/taskCooperation/infoTempalteconfiguration",
        "vuePath": "taskCooperation/configurationManagement/infoTempalteconfiguration",
        "iconType": "2",
        "iconValue": "iconfont icon-biaoge",
        "outsideType": 1
      },
      {
        "id": "100",
        "name": "网格信息采集管理",
        "type": 2,
        "parentId": "21",
        "url": "/taskCooperation/gridInfoManagement",
        "vuePath": "taskCooperation/gridInfoManagement/residenceCommunity",
        "iconType": "2",
        "iconValue": "iconfont icon-biaoge",
        "outsideType": 1
      },
      {
        "id": "101",
        "name": "住宅小区",
        "type": 3,
        "parentId": "100",
        "url": "/taskCooperation/gridInfoManagement/residenceCommunity",
        "vuePath": "taskCooperation/gridInfoManagement/residenceCommunity",
        "iconType": "2",
        "iconValue": "iconfont icon-biaoge",
        "outsideType": 1
      },
		]
	});
}

/**
 * 判断用户登录凭证是否有效
 */
if(mockConst.isStatic.swing.getSwingResources){
  Mock.mock(mockConst.getRegExpUrl(api.url.checkToken), 'get', {
    "status": 0,
    "msg": "成功",
    "obj": {
      "userName": "张三",
      "orgName": "浙江移动省公司管理员"
    }
  });
}
if(mockConst.isStatic.checkToken) {
	Mock.mock(mockConst.getRegExpUrl(api.url.swing.getSwingResources), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "zyname": "温州市乐清市柳市镇象山新村伟光路160号后面外墙GJ0964-028资源点",
        "zyid": 2414105,
        "lng": 120.903791,
        "liyongrate": 0.8333,
        "dznum": 62,
        "opdknum": 10,
        "dknum": 12,
        "yhnum": 9,
        "lat": 28.043286
      },
      {
        "zyname": "温州市乐清市柳市镇象山新村兴象路117号后面外墙GJ0964-030资源点",
        "zyid": 2414107,
        "lng": 120.904037,
        "liyongrate": 0.5,
        "dznum": 36,
        "opdknum": 2,
        "dknum": 4,
        "yhnum": 2,
        "lat": 28.043022
      },
      {
        "zyname": "温州市乐清市柳市镇虎啸路348号外墙GJ0913-010资源点",
        "zyid": 2121133,
        "lng": 120.907221,
        "liyongrate": 0.75,
        "dznum": 10,
        "opdknum": 9,
        "dknum": 12,
        "yhnum": 9,
        "lat": 28.043025
      },
      {
        "zyname": "温州市乐清市柳市镇长春村银河路33号对面B栋单元楼侧墙GJ0896-012资源点",
        "zyid": 2135947,
        "lng": 120.904453,
        "liyongrate": 0.25,
        "dznum": 6,
        "opdknum": 3,
        "dknum": 12,
        "yhnum": 3,
        "lat": 28.039601
      },
      {
        "zyname": "温州市乐清市柳市镇长春村长春六路12号侧墙GJ0896-014资源点",
        "zyid": 2135972,
        "lng": 120.905596,
        "liyongrate": 1,
        "dznum": 5,
        "opdknum": 4,
        "dknum": 4,
        "yhnum": 4,
        "lat": 28.039151
      },
      {
        "zyname": "温州市乐清市柳市镇上池村长江路308号单元楼2单元楼道口GJ0515-007资源点",
        "zyid": 2135924,
        "lng": 120.901173,
        "liyongrate": 0.0833,
        "dznum": 9,
        "opdknum": 1,
        "dknum": 12,
        "yhnum": 1,
        "lat": 28.040756
      },
      {
        "zyname": "温州市乐清市柳市镇长春村三医宿舍6栋2单元楼道口GJ0896-022资源点",
        "zyid": 2135957,
        "lng": 120.903956,
        "liyongrate": 0.5,
        "dznum": 11,
        "opdknum": 4,
        "dknum": 8,
        "yhnum": 4,
        "lat": 28.038981
      },
      {
        "zyname": "温州市乐清市柳市镇上池村池亭路12号单元1单元楼道口GJ0515-016资源点",
        "zyid": 2135938,
        "lng": 120.900821,
        "liyongrate": 0.1667,
        "dznum": 3,
        "opdknum": 2,
        "dknum": 12,
        "yhnum": 3,
        "lat": 28.041399
      },
      {
        "zyname": "温州市乐清市柳市镇上池村殿前路5号单元楼楼道口GJ0515-002资源点",
        "zyid": 2135935,
        "lng": 120.900574,
        "liyongrate": 0.8333,
        "dznum": 1,
        "opdknum": 10,
        "dknum": 12,
        "yhnum": 10,
        "lat": 28.040173
      },
      {
        "zyname": "温州市乐清市柳市镇上池村金池路金池圣庙侧墙GJ0515-001资源点",
        "zyid": 2135936,
        "lng": 120.900751,
        "liyongrate": 0.4167,
        "dznum": 27,
        "opdknum": 5,
        "dknum": 12,
        "yhnum": 5,
        "lat": 28.040361
      },
      {
        "zyname": "温州市乐清市长春村银河路32号GJ0231-008资源点",
        "zyid": 331377,
        "lng": 120.904365,
        "liyongrate": 0.6667,
        "dznum": 4,
        "opdknum": 16,
        "dknum": 24,
        "yhnum": 16,
        "lat": 28.039446
      },
      {
        "zyname": "温州市乐清市柳市镇长春村柳翁路奥卡拉冷风机外墙GJ0241-002资源点",
        "zyid": 2180290,
        "lng": 120.903364,
        "liyongrate": 0.5,
        "dznum": 0,
        "opdknum": 2,
        "dknum": 4,
        "yhnum": 2,
        "lat": 28.040935
      },
      {
        "zyname": "温州市乐清市柳市镇长春村银河路60号GJ0231-012资源点",
        "zyid": 331378,
        "lng": 120.904687,
        "liyongrate": 0.6875,
        "dznum": 2,
        "opdknum": 11,
        "dknum": 16,
        "yhnum": 10,
        "lat": 28.038759
      },
      {
        "zyname": "温州市乐清市柳市镇长春村三医宿舍4栋2单元楼道口GJ0896-020资源点",
        "zyid": 2135974,
        "lng": 120.904069,
        "liyongrate": 1,
        "dznum": 1,
        "opdknum": 4,
        "dknum": 4,
        "yhnum": 4,
        "lat": 28.039427
      },
      {
        "zyname": "温州市乐清市柳市镇长春村月渡南路47号前墙GJ0896-003资源点",
        "zyid": 2135944,
        "lng": 120.903491,
        "liyongrate": 0.75,
        "dznum": 3,
        "opdknum": 3,
        "dknum": 4,
        "yhnum": 3,
        "lat": 28.039195
      },
      {
        "zyname": "温州市乐清市长春村月渡南路15号GJ0231-019资源点",
        "zyid": 331398,
        "lng": 120.903755,
        "liyongrate": 0.625,
        "dznum": 22,
        "opdknum": 5,
        "dknum": 8,
        "yhnum": 5,
        "lat": 28.04021
      },
      {
        "zyname": "温州市乐清市柳市镇长春村银河路33号对面A栋单元楼侧墙GJ0896-011资源点",
        "zyid": 2135948,
        "lng": 120.904272,
        "liyongrate": 0.75,
        "dznum": 15,
        "opdknum": 3,
        "dknum": 4,
        "yhnum": 3,
        "lat": 28.039471
      },
      {
        "zyname": "温州市乐清市长春村长春五路16号旁GJ0231-006资源点",
        "zyid": 331391,
        "lng": 120.905486,
        "liyongrate": 0.8333,
        "dznum": 3,
        "opdknum": 20,
        "dknum": 24,
        "yhnum": 18,
        "lat": 28.038907
      },
      {
        "zyname": "温州市乐清市长春村5幢GJ0231-014资源点",
        "zyid": 331396,
        "lng": 120.903745,
        "liyongrate": 0.625,
        "dznum": 1,
        "opdknum": 10,
        "dknum": 16,
        "yhnum": 8,
        "lat": 28.039175
      }
    ]
  });
}
if(mockConst.isStatic.checkToken) {
  Mock.mock(mockConst.getRegExpUrl(api.url.swing.getSwingProject), 'get',{
    "status": 0,
    "msg": null,
    "obj": [
      {
        "dqhj": "经费不足无法建设",
        "jsfs": null,
        "qx": "龙湾",
        "wd": 27.99894,
        "zdbm": "龙湾白鹿外国语学校",
        "dqzrdw": "网优",
        "jzlx": null,
        "dqxh": "8",
        "ljbh": "LWZ1609220090",
        "zdmc": "龙湾白鹿外国语学校",
        "wlzs": "F",
        "yjsc": null,
        "jd": 120.726702,
        "xyhj": "-",
        "dqhjkssj": "2019-02-14 14:31:02"
      },
      {
        "dqhj": "已完成",
        "jsfs": "新建",
        "qx": "鹿城",
        "wd": 28.00065,
        "zdbm": null,
        "dqzrdw": null,
        "jzlx": "宏蜂窝站",
        "dqxh": "7",
        "ljbh": "LWZ1610200094",
        "zdmc": "鹿城红日花园东区宏站",
        "wlzs": "LTE-F+LTE-1800",
        "yjsc": "0",
        "jd": 120.7145,
        "xyhj": "-",
        "dqhjkssj": "2019-03-12 08:00:12"
      },
      {
        "dqhj": "经费不足无法建设",
        "jsfs": null,
        "qx": "鹿城",
        "wd": 28.007673,
        "zdbm": "假日花园西",
        "dqzrdw": "网优",
        "jzlx": null,
        "dqxh": "8",
        "ljbh": null,
        "zdmc": "鹿城假日花园西",
        "wlzs": "F",
        "yjsc": null,
        "jd": 120.712268,
        "xyhj": "-",
        "dqhjkssj": "2019-02-14 14:31:02"
      },
      {
        "dqhj": "经费不足无法建设",
        "jsfs": null,
        "qx": "鹿城",
        "wd": 28.01413,
        "zdbm": "鹿城巨江工业区东",
        "dqzrdw": "网优",
        "jzlx": null,
        "dqxh": "8",
        "ljbh": "LWZ1806220133",
        "zdmc": "鹿城巨江工业区北",
        "wlzs": "F",
        "yjsc": null,
        "jd": 120.71953,
        "xyhj": "-",
        "dqhjkssj": "2019-02-14 14:31:02"
      }
      ]
  }

  );
}
/**
 * 预警层级列表
 */
if(mockConst.isStatic.common.warningTypeList) {
	Mock.mock(mockConst.getRegExpUrl(api.url.common.warningTypeList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [{
				"typeId": "1",
				"typeName": "省"
			},
			{
				"typeId": "2",
				"typeName": "地市"
			},
			{
				"typeId": "3",
				"typeName": "县区"
			},
			{
				"typeId": "4",
				"typeName": "区域中心"
			},
			{
				"typeId": "5",
				"typeName": "网格"
			}
		]
	});
}

/**
 * 角色大类列表
 */
if(mockConst.isStatic.common.roleTypeList) {
	Mock.mock(mockConst.getRegExpUrl(api.url.common.roleTypeList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [{
				"typeId": "1",
				"typeName": "省公司管理员"
			},
			{
				"typeId": "2",
				"typeName": "地市管理员"
			},
			{
				"typeId": "3",
				"typeName": "县区管理员"
			},
			{
				"typeId": "4",
				"typeName": "区域管理员"
			},
			{
				"typeId": "5",
				"typeName": "网格管理员"
			}
		]
	});
}

/**
 * 角色大类的角色列表
 */
if(mockConst.isStatic.common.roleListByRoleType) {
	Mock.mock(mockConst.getRegExpUrl(api.url.common.roleListByRoleType), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [{
				"roleId": "1",
				"roleName": "角色1"
			},
			{
				"roleId": "2",
				"roleName": "角色2"
			},
			{
				"roleId": "3",
				"roleName": "角色3"
			},
			{
				"roleId": "4",
				"roleName": "角色4"
			},
			{
				"roleId": "5",
				"roleName": "角色5"
			}
		]
	});
}

/**
 * 角色的用户列表
 */
if(mockConst.isStatic.common.userListByRoleId) {
	Mock.mock(mockConst.getRegExpUrl(api.url.common.userListByRoleId), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": [{
				"userId": "1",
				"userName": "用户1",
				"userMobile": "13812345678",
				"userEmail": "13812345678@139.com",
			},
			{
				"userId": "2",
				"userName": "用户2",
				"userMobile": "13812345678",
				"userEmail": "13812345678@139.com",
			},
			{
				"userId": "3",
				"userName": "用户3",
				"userMobile": "13812345678",
				"userEmail": "13812345678@139.com",
			},
			{
				"userId": "4",
				"userName": "用户4",
				"userMobile": "13812345678",
				"userEmail": "13812345678@139.com",
			},
			{
				"userId": "5",
				"userName": "用户5",
				"userMobile": "13812345678",
				"userEmail": "13812345678@139.com",
			}
		]
	});
}

/**
 * 指标列表
 */
if(mockConst.isStatic.common.kpiList) {
	Mock.mock(mockConst.getRegExpUrl(api.url.common.kpiList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"pageIndex": 1,
			"pageSize": 10,
			"total": 3,
			"list": [{
					"kpiId": "1",
					"kpiName": "指标1"
				},
				{
					"kpiId": "2",
					"kpiName": "指标2"
				},
				{
					"kpiId": "3",
					"kpiName": "指标3"
				}
			]
		}
	});
}

/**
 * 渠道列表
 */
if(mockConst.isStatic.common.channelList) {
	Mock.mock(mockConst.getRegExpUrl(api.url.common.channelList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"pageIndex": 1,
			"pageSize": 10,
			"total": 3,
			"list": [{
					"channelId": "1",
					"channelName": "渠道1"
				},
				{
					"channelId": "2",
					"channelName": "渠道2"
				},
				{
					"channelId": "3",
					"channelName": "渠道3"
				}
			]
		}
	});
}

/**
 * 地域列表
 */
// if(mockConst.isStatic.common.areaList) {
// 	Mock.mock(mockConst.getRegExpUrl(api.url.common.areaList), 'get', {
// 		"status": 0,
// 		"msg": "成功",
// 		"obj": [{
// 			"areaId": "1",
// 			"areaName": "浙江省",
// 			"areaLevel": "1"
// 		}]
// 	});
// }

/**
 * 用户基础信息
 */
if(mockConst.isStatic.common.userInfo) {
	Mock.mock(mockConst.getRegExpUrl(api.url.common.userInfo), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"userId": "test",
			"userName": "测试账号",
			"userMobile": "13812345678",
			"userEmail": "test@zj.chinamobile.com"
		}
	});
}
if(mockConst.isStatic.profile.fightmap.getReses) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getReses), 'get', {"status":0,"msg":null,"obj":[{"id":"1","name":"资源","parentId":"0","children":[{"id":"3","name":"客户资源","parentId":"1","children":null,"kpiList":[{"kpiId":"GFMZB00001","kpiName":"移动用户","kpiValue":"458209","clickType":1,"clickParam":"userType=1"},{"kpiId":"GFMZB00002","kpiName":"有线宽带用户","kpiValue":"87365","clickType":2,"clickParam":null},{"kpiId":"GFMZB00003","kpiName":"漫入用户","kpiValue":"25456","clickType":1,"clickParam":"userType=3"},{"kpiId":"GFMZB00004","kpiName":"集团","kpiValue":"5531","clickType":3,"clickParam":"typeId=2"},{"kpiId":"GFMZB00005","kpiName":"集团成员","kpiValue":"149756","clickType":1,"clickParam":"userType=5"},{"kpiId":"GFMZB00006","kpiName":"异网用户","kpiValue":"240861","clickType":1,"clickParam":"userType=2"},{"kpiId":"GFMZB00022","kpiName":"易携用户","kpiValue":"61511","clickType":1,"clickParam":"userType=4"}],"clickType":null,"clickParam":null},{"id":"4","name":"渠道资源","parentId":"1","children":null,"kpiList":[{"kpiId":"GFMZB00007","kpiName":"营业厅","kpiValue":"17家","clickType":null,"clickParam":null},{"kpiId":"GFMZB00008","kpiName":"签约渠道","kpiValue":"150家","clickType":null,"clickParam":null},{"kpiId":"GFMZB00009","kpiName":"直销渠道","kpiValue":"5家","clickType":null,"clickParam":null},{"kpiId":"GFMZB00010","kpiName":"活跃泛渠道","kpiValue":"76家","clickType":null,"clickParam":null},{"kpiId":"GFMZB00011","kpiName":"电信渠道","kpiValue":"47家","clickType":null,"clickParam":null},{"kpiId":"GFMZB00012","kpiName":"联通渠道","kpiValue":"7家","clickType":null,"clickParam":null}],"clickType":4,"clickParam":"typeId=4,5&coverTypeId=1,2"},{"id":"5","name":"人力资源","parentId":"1","children":null,"kpiList":[{"kpiId":"GR0120","kpiName":"渠道经理","kpiValue":"6名","clickType":null,"clickParam":null},{"kpiId":"GR0110","kpiName":"客户经理","kpiValue":"9名","clickType":null,"clickParam":null},{"kpiId":"GR0150","kpiName":"装维工程师","kpiValue":"105名","clickType":null,"clickParam":null},{"kpiId":"GR0140","kpiName":"营业店长","kpiValue":"10名","clickType":null,"clickParam":null}],"clickType":null,"clickParam":null},{"id":"6","name":"网络资源","parentId":"1","children":null,"kpiList":[{"kpiId":"GFMZB00013","kpiName":"家集客资源点","kpiValue":"25971家","clickType":null,"clickParam":null}],"clickType":5,"clickParam":"coverTypeId=3"}],"kpiList":null,"clickType":null,"clickParam":null},{"id":"2","name":"攻坚","parentId":"0","children":[{"id":"7","name":"个人市场","parentId":"2","children":[{"id":"10","name":"份额攻坚","parentId":"7","children":null,"kpiList":[{"kpiId":"GFMZB00014","kpiName":"攻坚目标","kpiValue":"15个","clickType":null,"clickParam":null},{"kpiId":"GFMZB00015","kpiName":"已攻坚","kpiValue":"5个","clickType":null,"clickParam":null}],"clickType":null,"clickParam":null},{"id":"11","name":"易携攻坚","parentId":"7","children":null,"kpiList":[{"kpiId":"GFMZB00016","kpiName":"攻坚目标","kpiValue":"--个","clickType":null,"clickParam":null},{"kpiId":"GFMZB00017","kpiName":"已攻坚","kpiValue":"--个","clickType":null,"clickParam":null}],"clickType":6,"clickParam":"typeId=8"}],"kpiList":null,"clickType":null,"clickParam":null},{"id":"8","name":"家庭市场","parentId":"2","children":[{"id":"12","name":"高价值小区攻坚","parentId":"8","children":null,"kpiList":[{"kpiId":"GFMZB00018","kpiName":"攻坚目标","kpiValue":"203个","clickType":null,"clickParam":null},{"kpiId":"GFMZB00019","kpiName":"已攻坚","kpiValue":"30个","clickType":null,"clickParam":null}],"clickType":null,"clickParam":null}],"kpiList":null,"clickType":7,"clickParam":"typeId=1"},{"id":"9","name":"集团市场","parentId":"2","children":[{"id":"13","name":"集团赢回","parentId":"9","children":null,"kpiList":[{"kpiId":"GFMZB00020","kpiName":"攻坚目标","kpiValue":"--个","clickType":null,"clickParam":null},{"kpiId":"GFMZB00021","kpiName":"已攻坚","kpiValue":"--个","clickType":null,"clickParam":null}],"clickType":null,"clickParam":null},{"id":"14","name":"策反渠道攻坚","parentId":"9","children":null,"kpiList":[{"kpiId":"GFMZB00025","kpiName":"攻坚目标","kpiValue":"--个","clickType":null,"clickParam":null},{"kpiId":"GFMZB00026","kpiName":"已攻坚","kpiValue":"--个","clickType":null,"clickParam":null}],"clickType":null,"clickParam":null}],"kpiList":null,"clickType":null,"clickParam":null},{"id":"15","name":"重点项目","parentId":"2","children":null,"kpiList":[{"kpiId":"GFMZB00023","kpiName":"5G合作集团","kpiValue":"--个","clickType":null,"clickParam":null},{"kpiId":"GFMZB00024","kpiName":" DICT项目","kpiValue":"--个","clickType":null,"clickParam":null}],"clickType":null,"clickParam":null}],"kpiList":null,"clickType":null,"clickParam":null}]
  }
  );
}
if(mockConst.isStatic.profile.fightmap.getTypes) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getTypes), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "typeId": 1,
        "typeName": "攻坚小区",
        "status": 1,
        "sortId": 1
      },
      {
        "typeId": 2,
        "typeName": "集团",
        "status": 1,
        "sortId": 2
      },
      {
        "typeId": 3,
        "typeName": "楼宇",
        "status": 1,
        "sortId": 3
      },
      {
        "typeId": 4,
        "typeName": "自有渠道",
        "status": 1,
        "sortId": 4
      },
      {
        "typeId": 5,
        "typeName": "泛渠道",
        "status": 1,
        "sortId": 5
      },
      {
        "typeId": 6,
        "typeName": "电信",
        "status": 1,
        "sortId": 6
      },
      {
        "typeId": 7,
        "typeName": "联通",
        "status": 1,
        "sortId": 7
      }
    ]
  });
}
if(mockConst.isStatic.profile.fightmap.getLocation) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getLocation), 'get', {"status":0,"msg":null,"obj":{"gridId":"10007909","gridName":"余杭临平分局","gridLevel":"4","gridPid":"5714","center":"120.286899,30.446694","gridLocation":"120.229796,30.422628;120.229724,30.425182;120.229508,30.427548;120.223472,30.436516;120.232985,30.445841;120.240863,30.45694;120.24345,30.458061;120.251993,30.460186;120.257167,30.461462;120.26059,30.46224;120.272492,30.46494;120.271262,30.477547;120.270471,30.480597;120.267022,30.480348;120.266159,30.480908;120.264794,30.481779;120.263931,30.485452;120.261057,30.486448;120.25962,30.487008;120.257248,30.487941;120.254733,30.489062;120.254733,30.492423;120.255523,30.49373;120.256601,30.495161;120.25732,30.496779;120.258398,30.498522;120.258901,30.49958;120.259691,30.501136;120.258901,30.501385;120.257607,30.501883;120.255954,30.502256;120.253942,30.502754;120.25193,30.503376;120.249774,30.504123;120.246666,30.509475;120.248534,30.512524;120.25069,30.515511;120.253354,30.520819;120.26134,30.521387;120.276315,30.52246;120.280644,30.520251;120.285666,30.523735;120.291137,30.522623;120.29164,30.527227;120.304773,30.535237;120.322937,30.536831;120.32591,30.527196;120.331825,30.507981;120.332324,30.50646;120.332827,30.487541;120.333025,30.480134;120.343086,30.487105;120.346966,30.478282;120.345942,30.477893;120.342026,30.476492;120.342174,30.475492;120.342529,30.472897;120.342636,30.471761;120.342852,30.470283;120.343121,30.467995;120.343337,30.466719;120.343427,30.466158;120.34375,30.463575;120.344074,30.461084;120.344864,30.455263;120.346122,30.445316;120.341702,30.444802;120.341954,30.440537;120.336779,30.437408;120.337336,30.43297;120.337786,30.429654;120.338199,30.426742;120.329431,30.421215;120.327796,30.414363;120.324136,30.412514;120.321899,30.411393;120.319896,30.410388;120.316554,30.408714;120.312512,30.406674;120.312305,30.402773;120.320969,30.404739;120.325281,30.386859;120.347595,30.380877;120.350326,30.375986;120.340427,30.368383;120.337426,30.369536;120.331466,30.360698;120.310405,30.356557;120.301678,30.368878;120.301139,30.377711;120.288814,30.381029;120.292012,30.391419;120.297187,30.395468;120.293953,30.398833;120.290144,30.401761;120.286766,30.398833;120.278502,30.389176;120.270049,30.379074;120.264893,30.37419;120.260374,30.369626;120.256152,30.365622;120.255865,30.365746;120.255739,30.365622;120.255061,30.366249;120.25449,30.366868;120.254019,30.366958;120.253075,30.369404;120.251018,30.370175;120.249653,30.369084;120.24791,30.370144;120.24712,30.372784;120.24641,30.375105;120.248557,30.376624;120.246419,30.378829;120.247964,30.381033;120.241595,30.385395;120.247879,30.393085;120.245979,30.394725;120.243598,30.396812;120.242215,30.398034;120.241653,30.398537;120.241635,30.398716;120.241662,30.398879;120.241671,30.399066;120.241671,30.399315;120.24168,30.399565;120.241707,30.399954;120.241833,30.400709;120.241635,30.401636;120.241599,30.403598;120.241528,30.405997;120.241438,30.406869;120.241375,30.407648;120.240638,30.41063;120.239659,30.414001;120.239515,30.415652;120.238932,30.417645;120.234898,30.418766;120.232886,30.419265;120.231655,30.419786;120.230892,30.41995;120.229724,30.420199","children":[{"gridId":"571422","gridName":"东湖街道","gridLevel":"5","gridPid":"10007909","center":"120.32401,30.452547","gridLocation":"120.307212,30.458528;120.301894,30.454216;120.302909,30.449515;120.302981,30.449531;120.303062,30.449523;120.304544,30.443802;120.302172,30.443117;120.304364,30.440572;120.307257,30.437209;120.308011,30.43587;120.308999,30.435979;120.309233,30.43436;120.309664,30.432998;120.308074,30.431978;120.308793,30.429946;120.309583,30.427766;120.310419,30.425392;120.314326,30.427439;120.320938,30.431098;120.327864,30.434796;120.332409,30.437302;120.336784,30.437404;120.341967,30.440541;120.341698,30.444791;120.346126,30.445312;120.344375,30.458956;120.343773,30.463423;120.343503,30.465734;120.343369,30.466536;120.343162,30.467773;120.342937,30.469524;120.342722,30.471189;120.342407,30.473905;120.342174,30.475399;120.342039,30.476481;120.342443,30.476636;120.342865,30.476792;120.343252,30.476924;120.343845,30.47715;120.344258,30.47729;120.344644,30.477422;120.344976,30.477539;120.345282,30.477655;120.345614,30.47778;120.345048,30.478823;120.344554,30.479702;120.342165,30.479297;120.340036,30.47743;120.338957,30.475838;120.338976,30.474769;120.338994,30.474014;120.339021,30.472769;120.339012,30.471804;120.339111,30.471407;120.339236,30.470816;120.338814,30.470473;120.338491,30.469765;120.337206,30.466831;120.334942,30.461719;120.336101,30.456964;120.321962,30.454216;120.320102,30.460707","children":null},{"gridId":"571419","gridName":"星桥街道","gridLevel":"5","gridPid":"10007909","center":"120.2645425,30.3929555","gridLocation":"120.24787,30.393093;120.247115,30.392166;120.244097,30.38849;120.241608,30.385391;120.247951,30.381037;120.246423,30.378801;120.247887,30.377337;120.248543,30.376628;120.246405,30.375125;120.24707,30.372944;120.247888,30.370147;120.249657,30.369072;120.251014,30.370171;120.25308,30.369392;120.254005,30.366961;120.254499,30.366868;120.255047,30.366245;120.25573,30.365614;120.255892,30.365746;120.25617,30.365622;120.261012,30.370249;120.264327,30.373645;120.26774,30.376878;120.27004,30.379043;120.273672,30.383424;120.286712,30.39877;120.290144,30.401745;120.288707,30.403778;120.287269,30.40535;120.285652,30.40704;120.284098,30.408777;120.283155,30.40968;120.282535,30.410248;120.276336,30.41616;120.273677,30.418885;120.267263,30.416596;120.261742,30.415445;120.25584,30.418958;120.250666,30.420297;120.248977,30.419487;120.247899,30.418397;120.24736,30.416715;120.247762,30.414998;120.246935,30.415247;120.245462,30.415714;120.244744,30.415839;120.243522,30.416213;120.241186,30.416804;120.238941,30.417598;120.239497,30.415667;120.239668,30.413931;120.241159,30.40859;120.241465,30.40683;120.241573,30.404253;120.241617,30.40148;120.241824,30.400702;120.241707,30.399977;120.241662,30.398529;120.24389,30.396551","children":null},{"gridId":"571418","gridName":"南苑街道","gridLevel":"5","gridPid":"10007909","center":"120.3164285,30.396978500000003","gridLocation":"120.327999,30.434866;120.332382,30.437295;120.335725,30.437364;120.336784,30.437411;120.337134,30.434555;120.337521,30.431542;120.337934,30.428918;120.338194,30.426731;120.337548,30.426318;120.336604,30.425727;120.335535,30.425041;120.333478,30.423749;120.329436,30.421219;120.327792,30.414352;120.324136,30.412491;120.321872,30.411377;120.319752,30.410311;120.316455,30.408652;120.31253,30.406674;120.312395,30.404541;120.312323,30.402781;120.31721,30.403894;120.320965,30.404735;120.321207,30.403715;120.321674,30.401815;120.323264,30.395219;120.325268,30.38687;120.330181,30.385554;120.333631,30.38462;120.337287,30.383638;120.347618,30.380865;120.348857,30.378599;120.350339,30.375974;120.345111,30.37197;120.34044,30.368379;120.337413,30.369524;120.336829,30.368652;120.336353,30.367943;120.335832,30.367164;120.335041,30.366003;120.333146,30.36316;120.331475,30.36069;120.328546,30.360106;120.325645,30.359545;120.320579,30.358548;120.316051,30.357668;120.314021,30.35727;120.311946,30.35685;120.31041,30.356546;120.307688,30.360386;120.304283,30.365178;120.301678,30.36887;120.301382,30.37352;120.301121,30.377703;120.30016,30.377984;120.29892,30.378303;120.296136,30.379043;120.293531,30.379759;120.288796,30.381037;120.290827,30.387556;120.292003,30.391419;120.294779,30.393599;120.297169,30.395468;120.293935,30.398848;120.290144,30.401761;120.288671,30.403816;120.28727,30.405354;120.285815,30.406864;120.28517,30.407597;120.284595,30.40822;120.28402,30.408843;120.283354,30.409492;120.282518,30.410271;120.282887,30.410353;120.284564,30.41096;120.292154,30.413806;120.293659,30.415044;120.294548,30.415788;120.295914,30.416944;120.296394,30.417247;120.301966,30.420697;120.306924,30.423811;120.308721,30.424559;120.310589,30.425493;120.314398,30.427486;120.31853,30.429759;120.323058,30.432266;120.325573,30.433589","children":null},{"gridId":"571420","gridName":"临平街道","gridLevel":"5","gridPid":"10007909","center":"120.2669365,30.4375965","gridLocation":"120.254692,30.460843;120.256067,30.461193;120.257131,30.461454;120.258829,30.461867;120.25975,30.462065;120.260621,30.46226;120.261537,30.462462;120.262508,30.462664;120.263316,30.462867;120.263954,30.463007;120.264803,30.463228;120.265899,30.463462;120.266653,30.463656;120.267417,30.463812;120.268135,30.463952;120.268863,30.464123;120.269375,30.464225;120.270134,30.464415;120.270583,30.464516;120.271302,30.464664;120.272057,30.464843;120.27247,30.464929;120.272726,30.464427;120.273013,30.463688;120.273175,30.463283;120.273373,30.4628;120.27393,30.461493;120.274495,30.460084;120.281969,30.448924;120.287907,30.449103;120.303062,30.449531;120.30455,30.443798;120.302178,30.443113;120.307246,30.437228;120.308001,30.435878;120.30901,30.435986;120.309225,30.434398;120.309657,30.432997;120.308076,30.43197;120.310419,30.4254;120.309889,30.425127;120.309188,30.424785;120.308595,30.424496;120.307993,30.424255;120.307472,30.424037;120.306915,30.423796;120.305747,30.423064;120.3044,30.422231;120.302792,30.421211;120.301777,30.420565;120.299343,30.419078;120.295911,30.416944;120.292183,30.413807;120.28285,30.410326;120.282517,30.410264;120.276409,30.416088;120.27366,30.418875;120.267204,30.416567;120.261748,30.415434;120.258955,30.417092;120.255865,30.418953;120.250681,30.4203;120.248975,30.419467;120.247906,30.418416;120.247358,30.416695;120.247771,30.41499;120.245417,30.415714;120.244744,30.415839;120.243234,30.416283;120.241267,30.416773;120.238958,30.417622;120.235832,30.418502;120.232922,30.419249;120.231646,30.419771;120.229724,30.420191;120.229796,30.422496;120.229706,30.425026;120.229508,30.427548;120.227272,30.430865;120.223454,30.436501;120.227927,30.440906;120.232976,30.445818;120.23541,30.449251;120.237135,30.451679;120.240854,30.456948;120.243468,30.458061;120.247373,30.459045;120.250592,30.459828;120.252855,30.460388","children":null},{"gridId":"571414","gridName":"运河街道","gridLevel":"5","gridPid":"10007909","center":"120.29681149999999,30.4928775","gridLocation":"120.253367,30.520831;120.258667,30.521196;120.27631,30.522464;120.280649,30.520247;120.285679,30.523739;120.29115,30.522627;120.291653,30.527239;120.304759,30.535233;120.314686,30.536104;120.319456,30.536532;120.322932,30.53682;120.324387,30.532169;120.325995,30.526858;120.331852,30.507903;120.332328,30.506433;120.33258,30.497129;120.332679,30.493092;120.332778,30.489801;120.332849,30.487016;120.333029,30.480138;120.343099,30.487101;120.346396,30.47957;120.346966,30.478274;120.346297,30.478029;120.345623,30.477764;120.344541,30.479706;120.342156,30.479289;120.340036,30.477422;120.338958,30.475835;120.33903,30.472909;120.33903,30.47182;120.339245,30.470824;120.338814,30.47045;120.334951,30.461722;120.336101,30.456959;120.321975,30.454212;120.320089,30.460695;120.307211,30.45852;120.301891,30.454212;120.302897,30.449542;120.281966,30.448935;120.276584,30.456975;120.274492,30.46008;120.272721,30.464423;120.272501,30.464925;120.272357,30.466217;120.272241,30.467314;120.272043,30.469376;120.271792,30.471928;120.271477,30.475158;120.271253,30.477539;120.270471,30.480597;120.267035,30.480352;120.264794,30.481772;120.263913,30.485452;120.260733,30.486564;120.257158,30.487973;120.254737,30.489073;120.254733,30.492423;120.255532,30.493761;120.256619,30.495177;120.257338,30.496818;120.25842,30.498541;120.259691,30.501144;120.259027,30.501346;120.257576,30.501894;120.256094,30.502213;120.254378,30.502633;120.251921,30.503368;120.24977,30.504111;120.248184,30.506845;120.246657,30.509436;120.248651,30.512718;120.250717,30.515565","children":null}]}});
}
if(mockConst.isStatic.profile.fightmap.getSceneList) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getSceneList), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "sceneId": "103956",
        "regionLocation": "120.20702545339,30.245609759025;120.20657142351,30.245149937637;120.20612474453,30.244238299036;120.20656707885,30.243795919801;120.207018865,30.244708555663;120.20791017787,30.245168022435",
        "hasContract": 0
      },
      {
        "sceneId": "104240",
        "regionLocation": "120.20880714962,30.24113577639;120.20745936764,30.239756282351;120.20968956688,30.238448604896;120.21148259812,30.236675028903;120.21237663283,30.237593112547;120.21371003406,30.238059162719;120.21327048438,30.238053641426;120.21327241176,30.238955296013;120.21326906464,30.239409435679;120.21371768522,30.239863903523;120.2119289791,30.240732783328;120.21014190611,30.240700830538;120.21014254596,30.240249621641;120.21103200524,30.239368941731;120.21103196216,30.238470033358;120.21147993665,30.238476581801;120.21148059101,30.238021579259;120.2110361244,30.23801238123",
        "hasContract": 0
      },
      {
        "sceneId": "104166",
        "regionLocation": "120.19852593239,30.249547667689;120.19897405983,30.250004212115;120.19853124995,30.249998409312;120.19897315784,30.250459496365;120.19942566412,30.250464212181;120.19942367316,30.25091486983;120.19897521975,30.250905859955;120.19853250983,30.250451547361;120.19808794168,30.250899007444;120.19808109771,30.24999458553;120.1967357104,30.2504405525",
        "hasContract": 0
      },
      {
        "sceneId": "103905",
        "regionLocation": "120.20656039432,30.237496625014;120.20745832287,30.237506960514;120.20745604335,30.237961936214;120.20791095273,30.238868829823;120.20835337345,30.238870179686;120.20879671132,30.238434790041;120.20879478495,30.237526355628;120.20969493564,30.237543826956;120.20968956688,30.238448604896;120.20745936764,30.239756282351;120.20612045525,30.237941747375",
        "hasContract": 0
      },
      {
        "sceneId": "103887",
        "regionLocation": "120.21371768522,30.239863903523;120.21326906464,30.239409435679;120.21326415749,30.238505824219;120.21415928555,30.237173319639;120.21639613505,30.239005312591;120.21505212124,30.240332138151;120.21416053519,30.240772768765",
        "hasContract": 0
      },
      {
        "sceneId": "104015",
        "regionLocation": "120.1927040416,30.242763726434;120.19224969141,30.241859747148;120.19135638938,30.24095626401;120.1926971896,30.240505377103;120.19493923004,30.242321073556;120.19359390259,30.243210856046;120.19315247525,30.243215277522",
        "hasContract": 1
      },
      {
        "sceneId": "104015",
        "regionLocation": "120.1927040416,30.242763726434;120.19224969141,30.241859747148;120.19135638938,30.24095626401;120.1926971896,30.240505377103;120.19493923004,30.242321073556;120.19359390259,30.243210856046;120.19315247525,30.243215277522",
        "hasContract": 1
      },
      {
        "sceneId": "104219",
        "regionLocation": "120.20566737007,30.237931203387;120.20612045525,30.237941747375;120.20567536113,30.238386075195;120.20522630039,30.238374346723;120.20477536894,30.239267581162;120.20523040221,30.239279018821;120.2052274855,30.240175444125;120.20388636803,30.240164104376;120.20388414209,30.239258916735;120.20522372323,30.237930686296",
        "hasContract": 0
      },
      {
        "sceneId": "103731",
        "regionLocation": "120.201974,30.240043;120.201052,30.240918;120.201798,30.241578;120.200909,30.242428;120.199254,30.241075;120.201181,30.239343;120.201974,30.240043;",
        "hasContract": 1
      },
      {
        "sceneId": "103902",
        "regionLocation": "120.205385,30.241044;120.204855,30.240544;120.204857,30.238941;120.205522,30.238988;120.205576,30.238832;120.20625,30.238278;120.207334,30.23937;120.205385,30.241044;",
        "hasContract": 0
      },
      {
        "sceneId": "104016",
        "regionLocation": "120.191836,30.2418;120.189913,30.242907;120.190632,30.244444;120.192815,30.243071;120.191836,30.2418;",
        "hasContract": 0
      }
    ]
  });
}
if(mockConst.isStatic.profile.fightmap.getTypeDataList) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getTypeDataList), 'get', {"status":0,"msg":null,"obj":[{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171569440","lng":"120.312123","lat":"30.410227","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717101001","lng":"120.304000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100588","lng":"120.303000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100733","lng":"120.313553","lat":"30.410409","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171454874","lng":"120.314306","lat":"30.413147","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717123535","lng":"120.2975917","lat":"30.43809722","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"265695","lng":"120.305536","lat":"30.467593","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"235304","lng":"120.293927","lat":"30.437638","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"238274","lng":"120.31881","lat":"30.440068","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"235190","lng":"120.293147","lat":"30.437195","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717149627","lng":"120.250223","lat":"30.409661","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171558352","lng":"120.315254","lat":"30.413621","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717120361","lng":"120.298000","lat":"30.429000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717119692","lng":"120.258000","lat":"30.394000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171906983","lng":"120.299859","lat":"30.446878","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171400316","lng":"120.326960","lat":"30.429810","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717155900","lng":"120.298745","lat":"30.462625","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171385611","lng":"120.246322","lat":"30.433454","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717105603","lng":"120.258778","lat":"30.398979","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717152480","lng":"120.259000","lat":"30.395000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717105635","lng":"120.300000","lat":"30.405000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"229916","lng":"120.256439","lat":"30.390533","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"10210140","lng":"120.318809","lat":"30.439265","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160439","lat":"30.40791912","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160373","lat":"30.40793179","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.316169","lat":"30.40767853","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149376","lat":"30.41077397","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40128457","lng":"120.2551","lat":"30.386578","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40118131","lng":"120.260602","lat":"30.39984","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40140140","lng":"120.261053","lat":"30.399437","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3148234","lat":"30.41115015","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3139345","lat":"30.41245467","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.31609","lat":"30.40783048","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"ZD571225157","lng":"120.2624476","lat":"30.04424591","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100979","lng":"120.292000","lat":"30.432000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"235128","lng":"120.266639","lat":"30.402327","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD0000807","lng":"120.302524","lat":"30.483796","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00002894","lng":"120.3049818","lat":"30.42081962","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"19623","lng":"120.308571","lat":"30.451421","typeId":7},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004344","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001287","lng":"120.277479","lat":"30.433426","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005033","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005044","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001106","lng":"120.282906","lat":"30.43433","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005409","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005640","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005698","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006164","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002488","lng":"120.297471","lat":"30.43618676","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002555","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002691","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002693","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003051","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003604","lng":"120.3035396","lat":"30.4473492","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003855","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003941","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003942","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004078","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00001562","lng":"120.306693","lat":"30.415145","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00004814","lng":"120.3113072","lat":"30.41672221","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00005525","lng":"120.3364396","lat":"30.38037395","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000592","lng":"120.315169","lat":"30.423524","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00003676","lng":"120.2600856","lat":"30.40851754","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00005571","lng":"120.2678784","lat":"30.40333158","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD0000852","lng":"120.262869","lat":"30.4011","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00006435","lng":"120.2544876","lat":"30.38448012","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00006488","lng":"120.2562488","lat":"30.39380806","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002124","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002147","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002209","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001842","lng":"120.28003","lat":"30.438473","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002460","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40101289","lng":"120.312301","lat":"30.456261","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40131134","lng":"120.261448","lat":"30.405885","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008286","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008616","lng":"120.2871092","lat":"30.43594783","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001664","lng":"120.311414","lat":"30.430409","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00003690","lng":"120.320181","lat":"30.43384499","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00003718","lng":"120.3315885","lat":"30.44394408","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00004679","lng":"120.3241425","lat":"30.43940856","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006548","lng":"120.2678942","lat":"30.44971651","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006725","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006955","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007168","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007555","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007582","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00008148","lng":"120.3253145","lat":"30.4428151","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40073057","lng":"120.309549","lat":"30.427415","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40128476","lng":"120.26","lat":"30.438198","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"509176","lng":"120.2814526747208","lat":"30.430046121583707","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"509077","lng":"120.2905118780781","lat":"30.443756922774167","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"509064","lng":"120.30439351341732","lat":"30.448316976212514","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"225834","lng":"120.29556","lat":"30.46523","typeId":7},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40073055","lng":"120.310039","lat":"30.426664","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40154174","lng":"120.310085","lat":"30.426571","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40156677","lng":"120.302482","lat":"30.372239","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"57171120826","lng":"120.287551","lat":"30.462503","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717102509","lng":"120.298000","lat":"30.406000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717146859","lng":"120.281000","lat":"30.414000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717123520","lng":"120.2975917","lat":"30.43809722","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717104535","lng":"120.267000","lat":"30.412000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717154403","lng":"120.305752","lat":"30.433987","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717114235","lng":"120.303000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717123530","lng":"120.299859","lat":"30.446878","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40128389","lng":"120.310789","lat":"30.423827","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40112180","lng":"120.300182","lat":"30.400925","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40139771","lng":"120.314013","lat":"30.504436","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171124358","lng":"120.301000","lat":"30.420000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171563601","lng":"120.2936361","lat":"30.43586389","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717159710","lng":"120.320143","lat":"30.4113434","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40154157","lng":"120.309636","lat":"30.4272","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40133803","lng":"120.307888","lat":"30.448411","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40127430","lng":"120.264766","lat":"30.401629","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40154834","lng":"120.255873","lat":"30.385155","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717101156","lng":"120.256000","lat":"30.397000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171447229","lng":"120.296000","lat":"30.437000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171451219","lng":"120.296000","lat":"30.437000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40154163","lng":"120.310243","lat":"30.426648","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40136062","lng":"120.31181","lat":"30.40722","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40131305","lng":"120.32688","lat":"30.38331","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"10102260","lng":"120.326689","lat":"30.382994","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717101122","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171103811","lng":"120.2907944","lat":"30.44327222","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717146438","lng":"120.2886611","lat":"30.44375833","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171316247","lng":"120.3127463","lat":"30.38254713","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717105244","lng":"120.308000","lat":"30.426000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717119699","lng":"120.294525","lat":"30.44806667","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717158751","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40128368","lng":"120.281763","lat":"30.436896","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40151180","lng":"120.306851","lat":"30.431678","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40129036","lng":"120.328443","lat":"30.44565","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40161874","lng":"120.309316","lat":"30.430291","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171103342","lng":"120.317191","lat":"30.411636","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40067572","lng":"120.312132","lat":"30.425593","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40156308","lng":"120.304292","lat":"30.373366","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40102004","lng":"120.312576","lat":"30.380417","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40154151","lng":"120.307827","lat":"30.40144","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40155692","lng":"120.302102","lat":"30.370595","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40105045","lng":"120.264509","lat":"30.401557","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40153868","lng":"120.282382","lat":"30.502348","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717156619","lng":"120.260251","lat":"30.406048","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717106387","lng":"120.297808","lat":"30.446287","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717153752","lng":"120.306000","lat":"30.431000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"57171390598","lng":"120.274000","lat":"30.406000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171128500","lng":"120.301673","lat":"30.443317","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171386742","lng":"120.304917","lat":"30.416973","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171133671","lng":"120.323105","lat":"30.435011","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171569734","lng":"120.310919","lat":"30.413357","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171579636","lng":"120.315016","lat":"30.413443","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"236684","lng":"120.298669","lat":"30.406119","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"19754","lng":"120.304676","lat":"30.467621","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"234969","lng":"120.306372","lat":"30.468387","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171126880","lng":"120.311000","lat":"30.400000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"265466","lng":"120.307804","lat":"30.422269","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717102736","lng":"120.306000","lat":"30.429000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717123921","lng":"120.3211222","lat":"30.44588889","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717114661","lng":"120.298","lat":"30.416","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717101161","lng":"120.286997","lat":"30.453156","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"242306","lng":"120.313468","lat":"30.430899","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508927","lng":"120.30812461174853","lat":"30.420935377654654","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508971","lng":"120.3254664996647","lat":"30.42116172615726","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717113092","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171119212","lng":"120.302668","lat":"30.409223","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171446079","lng":"120.3007222","lat":"30.43335556","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"10203385","lng":"120.309889","lat":"30.432721","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161756","lat":"30.40766587","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3162217","lat":"30.40757723","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161229","lat":"30.40776717","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161953","lat":"30.40762788","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40136665","lng":"120.306015","lat":"30.468586","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00003434","lng":"120.3053416","lat":"30.46610567","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00006341","lng":"120.2821887","lat":"30.50139841","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00007414","lng":"120.2926005","lat":"30.46622002","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161492","lat":"30.40771652","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40099617","lng":"120.31419","lat":"30.438028","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3148264","lat":"30.41100434","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"ZD571224669","lng":"120.3039645","lat":"30.46702835","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"ZD571225197","lng":"120.269442","lat":"30.406838","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149141","lat":"30.40860806","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40140735","lng":"120.309589","lat":"30.427383","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40126767","lng":"120.31323","lat":"30.437884","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"ZD571225196","lng":"120.266753","lat":"30.42877475","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161361","lat":"30.40774184","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149347","lat":"30.41050323","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"ZD571222735","lng":"120.3039691","lat":"30.39890242","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00001542","lng":"120.303782","lat":"30.413559","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003483","lng":"120.3221256","lat":"30.42277313","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00005431","lng":"120.3157777","lat":"30.40742298","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00005927","lng":"120.3218228","lat":"30.41637045","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000881","lng":"120.315524","lat":"30.411691","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000376","lng":"120.315708","lat":"30.405374","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000270","lng":"120.307412","lat":"30.412778","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00007639","lng":"120.3108759","lat":"30.36966815","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00001359","lng":"120.262869","lat":"30.4011","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40154165","lng":"120.310023","lat":"30.400576","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008203","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD000074","lng":"120.306592","lat":"30.424739","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008347","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001628","lng":"120.319017","lat":"30.438657","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00004860","lng":"120.3228178","lat":"30.43886919","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001147","lng":"120.322898","lat":"30.439591","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006188","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006674","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006729","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007100","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007136","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007763","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006336","lng":"120.32475","lat":"30.4396678","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006507","lng":"120.3133853","lat":"30.43631918","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00008167","lng":"120.3086037","lat":"30.43843307","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40157532","lng":"120.287122","lat":"30.43859","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40046217","lng":"120.310979","lat":"30.428175","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509566","lng":"120.29157548000956","lat":"30.481308865592347","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"509154","lng":"120.27742229664685","lat":"30.428857204348617","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40061033","lng":"120.308811","lat":"30.42998","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40150665","lng":"120.309004","lat":"30.411377","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40156214","lng":"120.308866","lat":"30.410312","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717166221","lng":"120.304000","lat":"30.440000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717113908","lng":"120.3035694","lat":"30.40603333","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004480","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005025","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005123","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005203","lng":"120.2841143","lat":"30.43741755","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002713","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002956","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003574","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003677","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717148329","lng":"120.312000","lat":"30.410000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171384133","lng":"120.303000","lat":"30.421000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717145355","lng":"120.256191","lat":"30.408839","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717158145","lng":"120.276","lat":"30.488","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171129103","lng":"120.249000","lat":"30.451000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"57171386287","lng":"120.254898","lat":"30.411136","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717157157","lng":"120.304","lat":"30.423","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717124294","lng":"120.296000","lat":"30.424000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717168667","lng":"120.287591","lat":"30.431596","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717158141","lng":"120.302","lat":"30.424","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717104730","lng":"120.300000","lat":"30.416000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717119011","lng":"120.2970426","lat":"30.4417257","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717114602","lng":"120.263355","lat":"30.412638","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717148196","lng":"120.308000","lat":"30.484000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171334203","lng":"120.261629","lat":"30.445794","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717154432","lng":"120.302000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717118868","lng":"120.264828","lat":"30.413198","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717113674","lng":"120.301000","lat":"30.417000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717154616","lng":"120.260452","lat":"30.420170","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717105998","lng":"120.306000","lat":"30.426000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717102550","lng":"120.303000","lat":"30.419000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100828","lng":"120.303000","lat":"30.420000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717118860","lng":"120.306044","lat":"30.447043","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717104836","lng":"120.303000","lat":"30.440000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171128680","lng":"120.302702","lat":"30.409651","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171392766","lng":"120.293000","lat":"30.423000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100835","lng":"120.298258","lat":"30.421486","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717116282","lng":"120.313693","lat":"30.441250","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100966","lng":"120.304820","lat":"30.413479","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"19749","lng":"120.307248","lat":"30.422169","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"265699","lng":"120.301858","lat":"30.370809","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"265711","lng":"120.297061","lat":"30.433814","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717105933","lng":"120.312209","lat":"30.382956","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171571441","lng":"120.325786","lat":"30.385218","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"265696","lng":"120.3097","lat":"30.411174","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717151401","lng":"120.3132583","lat":"30.38276667","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171130915","lng":"120.299","lat":"30.419","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717153900","lng":"120.298000","lat":"30.423000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3144065","lat":"30.41191203","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149185","lat":"30.40901417","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40046571","lng":"120.304312","lat":"30.466665","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"ZD571218952","lng":"120.310971","lat":"30.41269153","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161426","lat":"30.40772918","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508602","lng":"120.30071976811729","lat":"30.402134104220792","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508830","lng":"120.31883745903698","lat":"30.426212031835853","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"57171906797","lng":"120.269000","lat":"30.411000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717103278","lng":"120.305000","lat":"30.429000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717114729","lng":"120.314707","lat":"30.417558","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"266297","lng":"120.314129","lat":"30.414094","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"226259","lng":"120.266232","lat":"30.402173","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001641","lng":"120.304609","lat":"30.474176","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001538","lng":"120.326815","lat":"30.461043","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004314","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004349","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004740","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005076","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005315","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005529","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006171","lng":"120.28338","lat":"30.43868011","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002885","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003039","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003378","lng":"120.3059892","lat":"30.43599774","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003399","lng":"120.3058412","lat":"30.43597685","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003862","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004105","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008057","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008175","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001446","lng":"120.329366","lat":"30.45105","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001135","lng":"120.312513","lat":"30.430127","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006057","lng":"120.3360666","lat":"30.4472527","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006258","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006274","lng":"120.2678942","lat":"30.44971651","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006629","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006824","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD0000641","lng":"120.306592","lat":"30.424739","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007127","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007228","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007302","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007604","lng":"120.2567319","lat":"30.4291277","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007682","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007884","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD0000838","lng":"120.312299","lat":"30.429223","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD0000800","lng":"120.310142","lat":"30.443297","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40128358","lng":"120.325943","lat":"30.367178","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40149848","lng":"120.307815","lat":"30.469076","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"19648","lng":"120.312051","lat":"30.428275","typeId":7},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509269","lng":"120.30084475964084","lat":"30.468760655073627","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006003","lng":"120.3230236","lat":"30.41280797","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006522","lng":"120.3026256","lat":"30.41119427","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006546","lng":"120.3083026","lat":"30.41327348","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006590","lng":"120.3081462","lat":"30.36900014","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00004411","lng":"120.2668021","lat":"30.40713908","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00005634","lng":"120.2695456","lat":"30.41692135","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00005941","lng":"120.2675933","lat":"30.40281644","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00005948","lng":"120.2618045","lat":"30.40412487","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007303","lng":"120.2537266","lat":"30.39359962","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007473","lng":"120.2742978","lat":"30.4022563","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007479","lng":"120.2617538","lat":"30.40517544","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002026","lng":"120.2882371","lat":"30.44336861","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40118130","lng":"120.310991","lat":"30.428592","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40163149","lng":"120.321025","lat":"30.41618","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"10013437","lng":"120.262358","lat":"30.396482","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"10014901","lng":"120.310977","lat":"30.428174","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40154170","lng":"120.310392","lat":"30.425373","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717102259","lng":"120.292780","lat":"30.444913","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717112636","lng":"120.304000","lat":"30.423000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717114561","lng":"120.306554","lat":"30.424962","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717124471","lng":"120.274000","lat":"30.507000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717146651","lng":"120.256324","lat":"30.440322","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171391113","lng":"120.291377","lat":"30.445873","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171589799","lng":"120.31115","lat":"30.412068","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717112590","lng":"120.292000","lat":"30.432000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717113607","lng":"120.321000","lat":"30.419000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717103875","lng":"120.298162","lat":"30.421887","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40099647","lng":"120.299098","lat":"30.436914","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40152592","lng":"120.299553","lat":"30.436854","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40097675","lng":"120.306457","lat":"30.448103","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171117392","lng":"120.304032","lat":"30.451347","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717122970","lng":"120.261","lat":"30.396","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717118672","lng":"120.303000","lat":"30.447000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717113439","lng":"120.304356","lat":"30.410392","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717103824","lng":"120.305062","lat":"30.429190","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717123405","lng":"120.245337","lat":"30.409903","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717101679","lng":"120.2975917","lat":"30.43809722","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717113920","lng":"120.294000","lat":"30.430000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40045310","lng":"120.301803","lat":"30.401921","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40092058","lng":"120.270662","lat":"30.403642","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40140556","lng":"120.31789","lat":"30.503883","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40043046","lng":"120.305445","lat":"30.4678","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171130436","lng":"120.299000","lat":"30.419000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717114241","lng":"120.29753","lat":"30.4196177","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717113608","lng":"120.293000","lat":"30.434000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717113713","lng":"120.261838","lat":"30.377609","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171986721","lng":"120.296105","lat":"30.380365","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717106421","lng":"120.297000","lat":"30.475000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717167431","lng":"120.297625","lat":"30.444453","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717114714","lng":"120.304000","lat":"30.427000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171578470","lng":"120.299859","lat":"30.446878","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717112571","lng":"120.306000","lat":"30.416000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717180994","lng":"120.260000","lat":"30.397000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717123289","lng":"120.289112","lat":"30.459503","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100992","lng":"120.296000","lat":"30.424000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717150326","lng":"120.271","lat":"30.485","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717170045","lng":"120.309050","lat":"30.440610","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717166698","lng":"120.304523","lat":"30.428380","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171455748","lng":"120.308000","lat":"30.391706","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"187818","lng":"120.313169","lat":"30.416926","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"234766","lng":"120.322715","lat":"30.438727","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171134399","lng":"120.3007222","lat":"30.43335556","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"ZD571224666","lng":"120.3092483","lat":"30.39647405","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161558","lat":"30.40770386","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3140363","lat":"30.41307908","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161097","lat":"30.4077925","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"ZD571225166","lng":"120.2673136","lat":"30.43377224","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"238076","lng":"120.261442","lat":"30.405088","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"237080","lng":"120.306064","lat":"30.405475","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"231114","lng":"120.305893","lat":"30.448041","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"238511","lng":"120.304647","lat":"30.429006","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"265217","lng":"120.290296","lat":"30.438088","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"19746","lng":"120.304715","lat":"30.428991","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"229902","lng":"120.283436","lat":"30.437466","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"19736","lng":"120.314695","lat":"30.503994","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171122553","lng":"120.291371","lat":"30.430221","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171130496","lng":"120.314710","lat":"30.410637","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171341800","lng":"120.296105","lat":"30.380365","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149111","lat":"30.40833732","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"ZD571222459","lng":"120.2956849","lat":"30.36386654","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149155","lat":"30.40874343","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3162019","lat":"30.40761522","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508571","lng":"120.31908379992926","lat":"30.35966284205413","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508545","lng":"120.31776286692455","lat":"30.39740381123365","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40043039","lng":"120.265716","lat":"30.402058","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40090303","lng":"120.313519","lat":"30.504508","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001274","lng":"120.303531","lat":"30.466799","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD0000812","lng":"120.30565","lat":"30.467549","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00002052","lng":"120.3071015","lat":"30.39612811","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00001793","lng":"120.313089","lat":"30.404056","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00002907","lng":"120.3081462","lat":"30.36900014","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004262","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004470","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004723","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004869","lng":"120.3052269","lat":"30.42976897","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004974","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005460","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005782","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005843","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006089","lng":"120.2909016","lat":"30.43698095","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006094","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006098","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003888","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003755","lng":"120.3288386","lat":"30.38099167","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00004515","lng":"120.3100904","lat":"30.3694941","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00005701","lng":"120.3138299","lat":"30.40489796","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000999","lng":"120.303674","lat":"30.413401","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006324","lng":"120.3182202","lat":"30.42139216","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006339","lng":"120.3170189","lat":"30.4247719","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006728","lng":"120.3237936","lat":"30.42871564","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00008119","lng":"120.3189637","lat":"30.41426504","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00005972","lng":"120.2681145","lat":"30.40300361","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007442","lng":"120.2600856","lat":"30.40851754","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002132","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002156","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002406","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40163112","lng":"120.303367","lat":"30.371265","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40150617","lng":"120.30498","lat":"30.421293","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40045175","lng":"120.306433","lat":"30.468421","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD000067","lng":"120.291061","lat":"30.435854","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008470","lng":"120.2767262","lat":"30.43088441","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001700","lng":"120.304824","lat":"30.447531","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD0000973","lng":"120.323257","lat":"30.438844","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006544","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD0000735","lng":"120.308448","lat":"30.42853","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006964","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007358","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007794","lng":"120.3058412","lat":"30.43597685","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007898","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007903","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007907","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD0000907","lng":"120.312155","lat":"30.43022","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006448","lng":"120.32475","lat":"30.4396678","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"509056","lng":"120.32537921732275","lat":"30.442882536218978","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"509293","lng":"120.33300282129845","lat":"30.445548279764","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40070349","lng":"120.303727","lat":"30.468485","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40128391","lng":"120.281926","lat":"30.501641","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"ZD571225160","lng":"120.309925","lat":"30.38286835","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149303","lat":"30.41009713","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3162085","lat":"30.40760255","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40066124","lng":"120.311718","lat":"30.431027","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40156675","lng":"120.309787","lat":"30.414113","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100495","lng":"120.305000","lat":"30.430000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717112543","lng":"120.304000","lat":"30.425000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717123529","lng":"120.264167","lat":"30.407399","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40109872","lng":"120.295045","lat":"30.437809","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40111802","lng":"120.310106","lat":"30.426033","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40154164","lng":"120.309559","lat":"30.427301","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40044207","lng":"120.267218","lat":"30.403038","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"265697","lng":"120.315373","lat":"30.410259","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"241327","lng":"120.281816","lat":"30.501625","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"237331","lng":"120.265255","lat":"30.405738","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717157356","lng":"120.260251","lat":"30.406048","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717160658","lng":"120.300000","lat":"30.400000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509272","lng":"120.28600358524697","lat":"30.46222169719665","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509525","lng":"120.29987062491993","lat":"30.48506675229667","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171120672","lng":"120.308","lat":"30.408","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40144241","lng":"120.305716","lat":"30.467532","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40130189","lng":"120.305252","lat":"30.466176","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717101879","lng":"120.245221","lat":"30.409761","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100691","lng":"120.304532","lat":"30.428388","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717113091","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171100293","lng":"120.299000","lat":"30.409000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171392688","lng":"120.293000","lat":"30.423000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717119462","lng":"120.297867","lat":"30.421199","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717123351","lng":"120.296105","lat":"30.380365","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717103643","lng":"120.251022","lat":"30.423407","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"265698","lng":"120.30193","lat":"30.370863","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717122612","lng":"120.321543","lat":"30.4125027","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171121608","lng":"120.304000","lat":"30.430000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717122645","lng":"120.318895","lat":"30.381379","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171577792","lng":"120.3074400000","lat":"30.407410","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717116352","lng":"120.3049159","lat":"30.4303746","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100738","lng":"120.300000","lat":"30.416000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717119601","lng":"120.252727","lat":"30.409268","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717156608","lng":"120.306944","lat":"30.461944444","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717102309","lng":"120.2970426","lat":"30.4417257","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40111804","lng":"120.305585","lat":"30.44776","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40035798","lng":"120.309356","lat":"30.428201","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40148395","lng":"120.3092","lat":"30.410832","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40154160","lng":"120.31023","lat":"30.400637","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40165128","lng":"120.256149","lat":"30.384143","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717101295","lng":"120.305752","lat":"30.433987","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"57171917631","lng":"120.249149","lat":"30.407726","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171119789","lng":"120.304356","lat":"30.410392","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"19753","lng":"120.264454","lat":"30.399415","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717124715","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717124915","lng":"120.305","lat":"30.429","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717151745","lng":"120.294000","lat":"30.430000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171388880","lng":"120.315000","lat":"30.450000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717116350","lng":"120.313918","lat":"30.447217","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717112588","lng":"120.280845","lat":"30.438559","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"ZD571222713","lng":"120.3069875","lat":"30.40571893","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160109","lat":"30.40798244","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717102843","lng":"120.2823333","lat":"30.461225","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717155010","lng":"120.249245","lat":"30.445621","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717182480","lng":"120.316725","lat":"30.445496","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717114077","lng":"120.263000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"57171100092","lng":"120.289665","lat":"30.450052","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3147394","lat":"30.41128535","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160241","lat":"30.40795711","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"10125815","lng":"120.320024","lat":"30.378481","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717158586","lng":"120.294000","lat":"30.414000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40050555","lng":"120.308459","lat":"30.451837","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40155456","lng":"120.313544","lat":"30.428413","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717114569","lng":"120.305547","lat":"30.424706","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717169066","lng":"120.321069","lat":"30.442566","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149332","lat":"30.41036787","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160768","lat":"30.40785581","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40152454","lng":"120.309877","lat":"30.427545","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717119566","lng":"120.252316","lat":"30.409294","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40143417","lng":"120.310832","lat":"30.425522","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149391","lat":"30.41090934","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161031","lat":"30.40780516","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"10217066","lng":"120.305542","lat":"30.467592","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717118831","lng":"120.251022","lat":"30.423407","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717119731","lng":"120.296105","lat":"30.380365","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717114829","lng":"120.261000","lat":"30.404000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171400282","lng":"120.314246","lat":"30.434460","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717102172","lng":"120.310496","lat":"30.437751","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128499","lng":"120.323981","lat":"30.449123","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128450","lng":"120.323966","lat":"30.449206","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40009796","lng":"120.326513","lat":"30.38341","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40156441","lng":"120.308244","lat":"30.410854","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"10013428","lng":"120.314623","lat":"30.503631","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171571208","lng":"120.313758","lat":"30.425908","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717116285","lng":"120.310546","lat":"30.440720","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717114606","lng":"120.2979556","lat":"30.49387778","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149096","lat":"30.40820195","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40139183","lng":"120.26562","lat":"30.402393","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40090651","lng":"120.264049","lat":"30.401407","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160175","lat":"30.40796977","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717105960","lng":"120.304000","lat":"30.420000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"19743","lng":"120.310758","lat":"30.438628","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161624","lat":"30.40769119","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3142628","lat":"30.41147936","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717103839","lng":"120.319648","lat":"30.502158","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40099618","lng":"120.329575","lat":"30.445719","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149244","lat":"30.40955565","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"10200897","lng":"120.289987","lat":"30.437952","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40154161","lng":"120.307966","lat":"30.401487","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40120183","lng":"120.265111","lat":"30.402169","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001374","lng":"120.295545","lat":"30.437315","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001365","lng":"120.282797","lat":"30.434173","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004735","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005030","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005541","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005739","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005960","lng":"120.3062146","lat":"30.43125675","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001744","lng":"120.255757","lat":"30.436171","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002664","lng":"120.2938603","lat":"30.43787211","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003016","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003416","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003774","lng":"120.275198","lat":"30.43187287","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001406","lng":"120.305039","lat":"30.430003","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40028445","lng":"120.309899","lat":"30.427325","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40046574","lng":"120.311637","lat":"30.432413","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"227198","lng":"120.309437","lat":"30.427985","typeId":7},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508573","lng":"120.32726986989113","lat":"30.367400877849786","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00001584","lng":"120.305041","lat":"30.414335","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003770","lng":"120.3273257","lat":"30.38027862","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00004475","lng":"120.2942681","lat":"30.40854549","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006547","lng":"120.312583","lat":"30.39787148","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000811","lng":"120.316789","lat":"30.41468","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000625","lng":"120.303566","lat":"30.373718","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000590","lng":"120.311986","lat":"30.420184","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00007089","lng":"120.3125035","lat":"30.4189979","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00008452","lng":"120.3352158","lat":"30.37950057","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00004423","lng":"120.251751","lat":"30.38421176","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00005515","lng":"120.2617258","lat":"30.39755636","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00006309","lng":"120.2515185","lat":"30.38571216","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00006310","lng":"120.2527628","lat":"30.39273692","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD0000611","lng":"120.253183","lat":"30.391863","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007474","lng":"120.2604412","lat":"30.40015302","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002258","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"10009881","lng":"120.3082","lat":"30.407","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40117832","lng":"120.326336","lat":"30.383875","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717171689","lng":"120.254779","lat":"30.446686","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717171488","lng":"120.273981","lat":"30.414903","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00002453","lng":"120.3094108","lat":"30.50471711","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001693","lng":"120.327713","lat":"30.455782","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001615","lng":"120.299578","lat":"30.480089","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00005757","lng":"120.2945011","lat":"30.47075525","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00005994","lng":"120.2988677","lat":"30.47109769","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00002270","lng":"120.3085487","lat":"30.41648223","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00001787","lng":"120.303566","lat":"30.373718","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00002911","lng":"120.3228858","lat":"30.42979212","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"19636","lng":"120.3037691","lat":"30.4070621","typeId":7},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008241","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008249","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008250","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008256","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008581","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008607","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00005197","lng":"120.3089235","lat":"30.44635748","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006332","lng":"120.2952758","lat":"30.43722658","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006545","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006587","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006883","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007196","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007239","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007245","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007276","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007461","lng":"120.2882371","lat":"30.44336861","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007647","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006500","lng":"120.3095799","lat":"30.43633093","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD0000519","lng":"120.311414","lat":"30.430409","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00007428","lng":"120.3227849","lat":"30.43771494","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40091209","lng":"120.309706","lat":"30.427499","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40154171","lng":"120.310517","lat":"30.425499","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"10228516","lng":"120.32576","lat":"30.385235","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171386025","lng":"120.263000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717100848","lng":"120.2896583","lat":"30.45736944","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717104703","lng":"120.3029528","lat":"30.41002778","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717102488","lng":"120.294562","lat":"30.456133","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004203","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004413","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004751","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001201","lng":"120.307336","lat":"30.430838","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005184","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001108","lng":"120.295481","lat":"30.437411","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005606","lng":"120.3062146","lat":"30.43125675","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006165","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002683","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002686","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002919","lng":"120.278952","lat":"30.43596139","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003674","lng":"120.2419325","lat":"30.45121618","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003740","lng":"120.3011776","lat":"30.4287027","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004047","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004149","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003973","lng":"120.3229981","lat":"30.41587699","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00004870","lng":"120.3098329","lat":"30.42269802","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00004871","lng":"120.3096007","lat":"30.41458622","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006504","lng":"120.3074781","lat":"30.41024501","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000261","lng":"120.314413","lat":"30.415581","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00008447","lng":"120.3138388","lat":"30.41023824","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD000031","lng":"120.313664","lat":"30.399758","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00003581","lng":"120.2631494","lat":"30.38879609","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00005682","lng":"120.2532939","lat":"30.39398258","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD0000957","lng":"120.271444","lat":"30.404849","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00006338","lng":"120.2619667","lat":"30.3967831","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007258","lng":"120.2600856","lat":"30.40851754","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171392349","lng":"120.313827","lat":"30.412396","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717124271","lng":"120.312289","lat":"30.479470","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717163169","lng":"120.308000","lat":"30.408000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717124892","lng":"120.302000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128448","lng":"120.324088","lat":"30.449353","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008302","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008465","lng":"120.2847075","lat":"30.4366775","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008620","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00003801","lng":"120.310343","lat":"30.44511192","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001373","lng":"120.309423","lat":"30.448527","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006303","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007063","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007065","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD0000681","lng":"120.306592","lat":"30.424739","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007083","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007283","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007472","lng":"120.2800215","lat":"30.43112274","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007638","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007842","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD0000155","lng":"120.285218","lat":"30.430338","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007987","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171906832","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40046585","lng":"120.305613","lat":"30.43017","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40128439","lng":"120.29449","lat":"30.456406","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171410400","lng":"120.300000","lat":"30.423000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171119922","lng":"120.3194222","lat":"30.44847222","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717124617","lng":"120.297687","lat":"30.4336008","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006160","lng":"120.3181202","lat":"30.44247941","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD0000761","lng":"120.312586","lat":"30.433583","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD0000134","lng":"120.312299","lat":"30.427853","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40084901","lng":"120.283732","lat":"30.437811","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40045173","lng":"120.312121","lat":"30.428847","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40135841","lng":"120.307431","lat":"30.448285","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40099629","lng":"120.30772","lat":"30.469026","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171569048","lng":"120.305","lat":"30.434","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717118880","lng":"120.2839222","lat":"30.44093333","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717118680","lng":"120.305539","lat":"30.38461","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717114290","lng":"120.296105","lat":"30.380365","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509476","lng":"120.28674433530001","lat":"30.48763631085899","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171453516","lng":"120.314306","lat":"30.413147","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717114653","lng":"120.305","lat":"30.494","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717121359","lng":"120.301000","lat":"30.419000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717119245","lng":"120.298000","lat":"30.406000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717123909","lng":"120.301000","lat":"30.427000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717166920","lng":"120.303000","lat":"30.419000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171584576","lng":"120.315513","lat":"30.413920","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717155663","lng":"120.301","lat":"30.425","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171134338","lng":"120.299022","lat":"30.431567","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717116353","lng":"120.2905222","lat":"30.44382222","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004258","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004265","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004737","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005842","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005890","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002498","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002505","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003609","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003835","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003945","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003020","lng":"120.3114243","lat":"30.36179963","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003518","lng":"120.3116601","lat":"30.42363224","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00004788","lng":"120.3229981","lat":"30.41587699","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"10191332","lng":"120.30572","lat":"30.430895","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40024302","lng":"120.3106","lat":"30.424772","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40130422","lng":"120.303723","lat":"30.466205","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717123922","lng":"120.255227","lat":"30.425522","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100553","lng":"120.301000","lat":"30.427000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717159797","lng":"120.321069","lat":"30.442566","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717103831","lng":"120.283479","lat":"30.403294","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171132197","lng":"120.3040444","lat":"30.41051667","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00001137","lng":"120.306981","lat":"30.422245","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006335","lng":"120.3093618","lat":"30.41088127","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006589","lng":"120.3380397","lat":"30.37008016","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000591","lng":"120.313824","lat":"30.416367","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000494","lng":"120.312082","lat":"30.413192","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000440","lng":"120.322809","lat":"30.416244","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00008485","lng":"120.3133996","lat":"30.41008528","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00003176","lng":"120.2746596","lat":"30.40217954","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD0000853","lng":"120.262869","lat":"30.4011","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00006327","lng":"120.2685526","lat":"30.39585944","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007475","lng":"120.2523811","lat":"30.39175114","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00007961","lng":"120.2745074","lat":"30.40576199","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002448","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40154168","lng":"120.290906","lat":"30.437965","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128377","lng":"120.313877","lat":"30.438008","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40155701","lng":"120.308831","lat":"30.410285","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717154019","lng":"120.291735","lat":"30.447610","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"509035","lng":"120.31417694184991","lat":"30.416359940601573","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"ZD571222742","lng":"120.3084565","lat":"30.40959907","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717102844","lng":"120.276000","lat":"30.489000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD0000131","lng":"120.287396","lat":"30.438283","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008147","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008575","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00005135","lng":"120.3239869","lat":"30.45131474","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006715","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007304","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007543","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD0000172","lng":"120.296775","lat":"30.43592","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00007244","lng":"120.3126955","lat":"30.43082511","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00007354","lng":"120.314594","lat":"30.44941586","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00007463","lng":"120.3053261","lat":"30.44611057","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40135946","lng":"120.32637","lat":"30.38376","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40135070","lng":"120.261377","lat":"30.39827","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100692","lng":"120.304356","lat":"30.410392","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717124464","lng":"120.290795","lat":"30.448429","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717113897","lng":"120.312000","lat":"30.412000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171368056","lng":"120.256814","lat":"30.461045","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171909712","lng":"120.3186","lat":"30.4489","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"10013460","lng":"120.305275","lat":"30.429632","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40154162","lng":"120.307903","lat":"30.401408","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149361","lat":"30.4106386","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149288","lat":"30.40996176","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149126","lat":"30.40847269","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161163","lat":"30.40777983","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149258","lat":"30.40969102","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717102307","lng":"120.273387","lat":"30.493240","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717169653","lng":"120.257785","lat":"30.458850","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"232383","lng":"120.270256","lat":"30.404361","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"250674","lng":"120.283129","lat":"30.437421","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"265465","lng":"120.307804","lat":"30.422323","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"234176","lng":"120.309967","lat":"30.444696","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40130135","lng":"120.32479","lat":"30.448075","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717124076","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171389370","lng":"120.315096","lat":"30.452293","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171590268","lng":"120.3127472","lat":"30.38254722","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717101604","lng":"120.308000","lat":"30.408000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717116351","lng":"120.306531","lat":"30.440039","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"508640","lng":"120.26483292224509","lat":"30.390653675944343","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717181241","lng":"120.253336","lat":"30.438555","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717169274","lng":"120.2975917","lat":"30.43809722","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128367","lng":"120.306554","lat":"30.44665","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717191535","lng":"120.2637611","lat":"30.41515556","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171120460","lng":"120.313000","lat":"30.456000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40154158","lng":"120.30474","lat":"30.467098","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40083177","lng":"120.304267","lat":"30.46659","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3162283","lat":"30.40756456","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160636","lat":"30.40788113","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149214","lat":"30.40928491","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571224756","lng":"120.3101585","lat":"30.42675505","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160834","lat":"30.40784315","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161295","lat":"30.40775451","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"265888","lng":"120.2566","lat":"30.388211","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"242681","lng":"120.253956","lat":"30.393816","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509547","lng":"120.30007314436416","lat":"30.47106980176887","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509580","lng":"120.29477712258203","lat":"30.473147820042204","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717156991","lng":"120.261000","lat":"30.397000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717158259","lng":"120.2959833","lat":"30.45720278","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128458","lng":"120.324782","lat":"30.448296","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40069924","lng":"120.309953","lat":"30.426975","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128462","lng":"120.323844","lat":"30.451198","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40154945","lng":"120.316996","lat":"30.424615","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40148394","lng":"120.301555","lat":"30.403958","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40044208","lng":"120.265865","lat":"30.402496","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"10217039","lng":"120.280932","lat":"30.501688","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717159647","lng":"120.296000","lat":"30.449000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717112554","lng":"120.303","lat":"30.424","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171127968","lng":"120.2833472","lat":"30.44903056","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717148342","lng":"120.260452","lat":"30.420170","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717119609","lng":"120.310000","lat":"30.413000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40136561","lng":"120.305048","lat":"30.466283","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40054815","lng":"120.305982","lat":"30.468133","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40138525","lng":"120.302632","lat":"30.404394","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40101291","lng":"120.309814","lat":"30.414063","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40127846","lng":"120.306582","lat":"30.468584","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40081260","lng":"120.30337","lat":"30.466402","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"508890","lng":"120.3079702350492","lat":"30.4278414182482","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3147077","lat":"30.41139095","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149317","lat":"30.4102325","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.316057","lat":"30.4078938","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171132431","lng":"120.309000","lat":"30.424000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"236281","lng":"120.321261","lat":"30.422541","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"265467","lng":"120.304705","lat":"30.373597","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717113899","lng":"120.314000","lat":"30.432000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717119553","lng":"120.262855","lat":"30.415591","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171506662","lng":"120.3021611","lat":"30.43323889","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171124232","lng":"120.305000","lat":"30.440000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509516","lng":"120.32279665188926","lat":"30.510990057365493","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"509204","lng":"120.30713847956436","lat":"30.45472785603814","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3162151","lat":"30.40758989","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160307","lat":"30.40794445","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171453585","lng":"120.297535","lat":"30.438452","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717180714","lng":"120.251272","lat":"30.437612","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717159391","lng":"120.304","lat":"30.412","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"57171917664","lng":"120.245885","lat":"30.411683","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717159105","lng":"120.304525","lat":"30.377575","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"57171125350","lng":"120.297000","lat":"30.458000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171532684","lng":"120.321000","lat":"30.450123","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717106001","lng":"120.296000","lat":"30.421000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00005517","lng":"120.2879502","lat":"30.45833103","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD0000832","lng":"120.305794","lat":"30.467829","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00008190","lng":"120.2961287","lat":"30.45586671","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149082","lat":"30.40806657","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149199","lat":"30.40914954","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149273","lat":"30.40982639","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160965","lat":"30.40781782","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40154159","lng":"120.292024","lat":"30.437483","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40135809","lng":"120.313016","lat":"30.427836","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006543","lng":"120.3088244","lat":"30.44460748","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00005","lng":"120.329797","lat":"30.449182","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40148392","lng":"120.310796","lat":"30.400684","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40086023","lng":"120.25918","lat":"30.39619","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40128474","lng":"120.268927","lat":"30.403979","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717158104","lng":"120.294000","lat":"30.455000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717161187","lng":"120.304000","lat":"30.409000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171134522","lng":"120.296000","lat":"30.426000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171451207","lng":"120.3152472","lat":"30.44225556","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717151986","lng":"120.301000","lat":"30.419000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717122948","lng":"120.297000","lat":"30.409000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160504","lat":"30.40790646","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149229","lat":"30.40942028","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161887","lat":"30.40764054","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.314917","lat":"30.4088788","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3161822","lat":"30.4076532","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3144119","lat":"30.41182998","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3160702","lat":"30.40786847","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"265246","lng":"120.281322","lat":"30.501497","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"57171385273","lng":"120.271825","lat":"30.417918","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171129699","lng":"120.317","lat":"30.443","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717113592","lng":"120.298000","lat":"30.428000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717119476","lng":"120.268000","lat":"30.416000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717114010","lng":"120.301316","lat":"30.430638","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717153031","lng":"120.3062944","lat":"30.38059167","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171602212","lng":"120.3028600000","lat":"30.4189600000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40128370","lng":"120.305811","lat":"30.408547","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40136537","lng":"120.311278","lat":"30.422721","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"ZD571224672","lng":"120.304286","lat":"30.42748196","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3146499","lat":"30.41151136","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"ZD571219833","lng":"120.3149125","lat":"30.40805093","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"508622","lng":"120.26279248810695","lat":"30.395337775183854","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171120950","lng":"120.304000","lat":"30.410000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171367942","lng":"120.3","lat":"30.423","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"ZD571122806","lng":"120.3148258","lat":"30.44638792","typeId":3},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"5717101253","lng":"120.292525","lat":"30.45891111","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717149992","lng":"120.306000","lat":"30.429000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171449107","lng":"120.315914","lat":"30.411548","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717101264","lng":"120.298000","lat":"30.406000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171389383","lng":"120.300000","lat":"30.420000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40154166","lng":"120.308534","lat":"30.430127","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40130420","lng":"120.283966","lat":"30.438307","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"10013450","lng":"120.326111","lat":"30.444956","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40148250","lng":"120.308498","lat":"30.410299","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717156869","lng":"120.247656","lat":"30.410197","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"241301","lng":"120.281974","lat":"30.432787","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"230974","lng":"120.303919","lat":"30.467877","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717123533","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171103225","lng":"120.284060","lat":"30.412170","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40153870","lng":"120.290906","lat":"30.437969","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40045900","lng":"120.305508","lat":"30.447814","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"12014001","lng":"120.311245","lat":"30.428161","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"509324","lng":"120.32315206850754","lat":"30.45294286004497","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508416","lng":"120.30740876776683","lat":"30.36882012988854","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40164973","lng":"120.262132","lat":"30.403301","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40042206","lng":"120.305264","lat":"30.46768","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171446523","lng":"120.320143","lat":"30.4113434","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171128004","lng":"120.304000","lat":"30.440000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171589764","lng":"120.3127472","lat":"30.38254722","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717114575","lng":"120.305098","lat":"30.426255","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"231027","lng":"120.310603","lat":"30.41331","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"234704","lng":"120.308811","lat":"30.42998","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171125303","lng":"120.287507","lat":"30.407021","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001862","lng":"120.304284","lat":"30.466773","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00002454","lng":"120.3144504","lat":"30.50192685","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001661","lng":"120.302488","lat":"30.479688","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717101185","lng":"120.313497","lat":"30.428419","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717165434","lng":"120.298000","lat":"30.422000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"57171402734","lng":"120.323000","lat":"30.523000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100946","lng":"120.298632","lat":"30.414353","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"265175","lng":"120.304121","lat":"30.467298","typeId":6},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40117563","lng":"120.311678","lat":"30.432533","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717123852","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"57171584918","lng":"120.310207","lat":"30.438982","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717119215","lng":"120.300000","lat":"30.435000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"40151900","lng":"120.289755","lat":"30.439294","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"508736","lng":"120.26188241506986","lat":"30.38864451432352","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"235136","lng":"120.30665","lat":"30.468368","typeId":7},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"256676","lng":"120.281974","lat":"30.501629","typeId":7},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509550","lng":"120.30834422340632","lat":"30.469551295372437","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"509199","lng":"120.28803589442808","lat":"30.458296948752697","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717165992","lng":"120.303306","lat":"30.411897","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40154943","lng":"120.306177","lat":"30.407553","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40064664","lng":"120.25538","lat":"30.384811","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717149244","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717165568","lng":"120.310000","lat":"30.423000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100683","lng":"120.304000","lat":"30.436000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717159333","lng":"120.314552","lat":"30.442212","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717171636","lng":"120.244919","lat":"30.387902","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"509062","lng":"120.30488143968307","lat":"30.45124155185217","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"508674","lng":"120.25877070556196","lat":"30.406395858509484","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"508950","lng":"120.3216498823818","lat":"30.411258552057046","typeId":1},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40114821","lng":"120.261893","lat":"30.403677","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717122649","lng":"120.305","lat":"30.427","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40162972","lng":"120.30764","lat":"30.400965","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00001421","lng":"120.303387","lat":"30.482579","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD0000349","lng":"120.300369","lat":"30.480214","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"FQD00007528","lng":"120.3064763","lat":"30.46866529","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"5717165378","lng":"120.249000","lat":"30.387000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717122946","lng":"120.306","lat":"30.422","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171578126","lng":"120.268707","lat":"30.429128","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171407557","lng":"120.293000","lat":"30.423000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171120535","lng":"120.304","lat":"30.44","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717194906","lng":"120.303000","lat":"30.440000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"57171553808","lng":"120.308980","lat":"30.408380","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004430","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004582","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004619","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005012","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005351","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00005650","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006080","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006185","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002825","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002870","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003334","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00003612","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001490","lng":"120.302955","lat":"30.435795","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00004062","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003559","lng":"120.3230236","lat":"30.41280797","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00003909","lng":"120.3199296","lat":"30.41566617","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00001366","lng":"120.315173","lat":"30.405925","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00004868","lng":"120.3155234","lat":"30.41169108","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD0000880","lng":"120.315524","lat":"30.411691","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00006326","lng":"120.3189928","lat":"30.39824737","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00007805","lng":"120.3160845","lat":"30.4234444","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00007873","lng":"120.3096668","lat":"30.40560796","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"FQD00008500","lng":"120.3257917","lat":"30.43286562","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00001477","lng":"120.272629","lat":"30.405117","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00001460","lng":"120.264753","lat":"30.408571","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD00006325","lng":"120.2658549","lat":"30.40581863","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"FQD0000587","lng":"120.276471","lat":"30.40642","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00002018","lng":"120.2756561","lat":"30.44135207","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00001782","lng":"120.295269","lat":"30.432559","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40099656","lng":"120.310766","lat":"30.438959","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40128364","lng":"120.309002","lat":"30.44851","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571419","targetId":"40127428","lng":"120.267412","lat":"30.4031","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717196193","lng":"120.263000","lat":"30.418000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717100479","lng":"120.315303","lat":"30.411563","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717112467","lng":"120.301000","lat":"30.419000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008240","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008258","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00002544","lng":"120.3074593","lat":"30.43830646","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00001610","lng":"120.328982","lat":"30.441158","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006671","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00006683","lng":"120.2666015","lat":"30.44384381","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007331","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007552","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007809","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00007994","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"FQD00008041","lng":"120.3050922","lat":"30.42439054","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"FQD00006129","lng":"120.3162604","lat":"30.45615172","typeId":5},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"5717113610","lng":"120.331000","lat":"30.426000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"57171122470","lng":"120.305000","lat":"30.434000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571420","targetId":"5717100681","lng":"120.301000","lat":"30.420000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"40133805","lng":"120.312801","lat":"30.430627","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571418","targetId":"40074846","lng":"120.299942","lat":"30.403539","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40128357","lng":"120.30393","lat":"30.468125","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571422","targetId":"5717168039","lng":"120.317000","lat":"30.443000","typeId":2},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"40000260","lng":"120.305921","lat":"30.467868","typeId":4},{"provId":"1","cityId":"2","countyId":"5714","areaId":"10007909","gridId":"571414","targetId":"10225885","lng":"120.305597","lat":"30.467885","typeId":4}]});
}
if(mockConst.isStatic.profile.fightmap.getTypeDataDetail) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getTypeDataDetail), 'get', {
    "status":0,"msg":null,"obj":[{"dictType":1,"optionText":"集团名称","optionValue":"杭州红星文化大厦有限公司","hideNovalue":0},{"dictType":2,"optionText":"5G","optionValue":"0","hideNovalue":0},{"dictType":2,"optionText":"雪亮","optionValue":"0","hideNovalue":0},{"dictType":4,"optionText":"集团类型","optionValue":"B1","hideNovalue":0},{"dictType":4,"optionText":"集团成员数","optionValue":"105","hideNovalue":0},{"dictType":4,"optionText":"对应客户经理","optionValue":"吕丹阳","hideNovalue":0},{"dictType":4,"optionText":"承包/结对渠道","optionValue":"武林望江指定专营店","hideNovalue":0},{"dictType":5,"optionText":"信息化收入","optionValue":"","hideNovalue":0},{"dictType":5,"optionText":"全业务收入","optionValue":"","hideNovalue":0},{"dictType":5,"optionText":"合约率","optionValue":"95.24%","hideNovalue":0},{"dictType":5,"optionText":"宽带渗透率","optionValue":"21.9%","hideNovalue":0},{"dictType":5,"optionText":"双网率","optionValue":"97.14%","hideNovalue":0},{"dictType":5,"optionText":"统一支付","optionValue":"49.52%","hideNovalue":0},{"dictType":5,"optionText":"成员的捆绑率提升","optionValue":"","hideNovalue":0},{"dictType":5,"optionText":"信息化收入提升率","optionValue":"","hideNovalue":0}]});
}
if(mockConst.isStatic.profile.fightmap.getUserHeatMap) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getUserHeatMap), 'get', {
    "status":0,"msg":null,"obj":[
      {"stayLng":120.18058,"stayLat":30.243412,"num":50}

      ]
  });
}
if(mockConst.isStatic.profile.fightmap.seachMyZbList) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.seachMyZbList), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "produceId": 61416,
        "areaName": "富阳富春分局",
        "content": "营销中心网格的移动日同份额环比指标小于20%",
        "createTime": "2019-07-16 11:11:00",
        "handleType": null,
        "handlerId": null
      }
    ]
  });
}
if(mockConst.isStatic.profile.fightmap.getGjDataByGjBusiType) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getGjDataByGjBusiType), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "typeId": 6,
        "typeName": "宽带资源满小区",
        "readType": 1,
        "baseTypeId": 18,
        "data": [
          {
            "targetId": "508845",
            "targetName": "长树新区",
            "location": "120.32471807565382,30.432255546367024;120.32617092345417,30.430338241876875;120.32770279982002,30.43050060969422;120.32790730047365,30.434030641184663;120.32471807565382,30.432255546367024",
            "lng": 120.32624,
            "lat": 30.431875,
            "hasGj": 1
          },
          {
            "targetId": "508611",
            "targetName": "东海水景城三期",
            "location": "120.30101509930246,30.404786154938897;120.30139955916013,30.40387353861123;120.30321530082834,30.404491033301493;120.30284202892967,30.405363720897483;120.30101509930246,30.404786154938897",
            "lng": 120.301895,
            "lat": 30.40466,
            "hasGj": 0
          },
          {
            "targetId": "508824",
            "targetName": "合和财富中心",
            "location": "120.31548122046839,30.421073190124446;120.31718422898649,30.421688360467908;120.31661303620639,30.422806461773966;120.31492660144437,30.422220803565775;120.31548122046839,30.421073190124446",
            "lng": 120.31594,
            "lat": 30.421772,
            "hasGj": 1
          },
          {
            "targetId": "508825",
            "targetName": "九悦印象",
            "location": "120.31492660144437,30.422220803565775;120.31661011559486,30.422806691509827;120.31525253793019,30.423911922339535;120.31463783680736,30.425339502149445;120.31380873771077,30.42460206836396;120.31492660144437,30.422220803565775",
            "lng": 120.315025,
            "lat": 30.423517,
            "hasGj": 0
          },
          {
            "targetId": "508571",
            "targetName": "万常村",
            "location": "120.31761697282359,30.35826406047623;120.31363380446402,30.356356745582676;120.31456103104075,30.354901406786688;120.32115176760011,30.35791847154939;120.32574744198119,30.358540449096665;120.32536993299972,30.361842939264587;120.32142324021709,30.3679427498905;120.31463303541328,30.362934695364196;120.31761697282359,30.35826406047623",
            "lng": 120.319084,
            "lat": 30.359663,
            "hasGj": 1
          },
          {
            "targetId": "508997",
            "targetName": "金桥花苑小区",
            "location": "120.30934266627524,30.415656143049695;120.30777552163694,30.4146033896682;120.30822041442732,30.413735442565326;120.30892260111318,30.41396317901798;120.30881082018814,30.414229048548243;120.30980258427454,30.414553438265834;120.30934266627524,30.415656143049695",
            "lng": 120.30889,
            "lat": 30.414629,
            "hasGj": 0
          },
          {
            "targetId": "508416",
            "targetName": "朗诗未来街区",
            "location": "120.30582410084351,30.368070028933722;120.30881643347361,30.368088283629803;120.30977829186534,30.36970855781449;120.30680091180822,30.370163750130974;120.30582410084351,30.368070028933722",
            "lng": 120.30741,
            "lat": 30.36882,
            "hasGj": 1
          },
          {
            "targetId": "508982",
            "targetName": "理想银泰城",
            "location": "120.31051691082752,30.407890047604436;120.31069801021431,30.412366154817008;120.30550234951535,30.410137501415402;120.30547525594818,30.409869142098536;120.31051691082752,30.407890047604436",
            "lng": 120.30854,
            "lat": 30.40963,
            "hasGj": 1
          },
          {
            "targetId": "508990",
            "targetName": "胡姬花园",
            "location": "120.31162950780715,30.41274383951465;120.31449107639999,30.41390339356628;120.31398645805336,30.41532343777346;120.31084824834905,30.414103020479406;120.31162950780715,30.41274383951465",
            "lng": 120.312515,
            "lat": 30.413763,
            "hasGj": 0
          },
          {
            "targetId": "508476",
            "targetName": "高地村",
            "location": "120.32507114864151,30.38013460531996;120.3242261438661,30.380075726383726;120.32412954441813,30.382488025332357;120.32569827305923,30.382775923494357;120.32560237847105,30.38405264009872;120.32514646283941,30.384065644912464;120.3246588429587,30.38539492961042;120.32289595052715,30.38490243442599;120.32382140566838,30.374259232516906;120.33193040647471,30.374871625619324;120.32992118278509,30.381825707359727;120.32776083162544,30.381234527072696;120.32507114864151,30.38013460531996",
            "lng": 120.32584,
            "lat": 30.381247,
            "hasGj": 1
          },
          {
            "targetId": "508832",
            "targetName": "赞成龙尚府",
            "location": "120.32383971320135,30.430092984809537;120.32616533629577,30.43033748150107;120.3247166275714,30.432248234304158;120.3234593418176,30.43155587782051;120.32383971320135,30.430092984809537",
            "lng": 120.3244,
            "lat": 30.430866,
            "hasGj": 0
          },
          {
            "targetId": "508952",
            "targetName": "晴彩巴黎",
            "location": "120.32266952920672,30.416950748946384;120.32373119535447,30.414682580514217;120.32516145108103,30.415449566909597;120.32616594526462,30.418569782854256;120.32451225501889,30.419007111810473;120.32411715931467,30.41777408265879;120.32266952920672,30.416950748946384",
            "lng": 120.32415,
            "lat": 30.417055,
            "hasGj": 1
          },
          {
            "targetId": "508965",
            "targetName": "联盟住宅小区",
            "location": "120.30454683217478,30.401383523120852;120.30580815357065,30.4014926522427;120.30622445966432,30.40441447805504;120.30710687568524,30.404694556608742;120.30836650838965,30.404584570005554;120.30830953380354,30.40874792575006;120.30547658113376,30.409869591611947;120.30454683217478,30.401383523120852",
            "lng": 120.3063,
            "lat": 30.404572,
            "hasGj": 1
          },
          {
            "targetId": "508610",
            "targetName": "东海水景城",
            "location": "120.29861320377664,30.40527429911864;120.29928402821848,30.4053664802099;120.29973731889956,30.404808546769463;120.30028452170698,30.40462832199399;120.30101509930246,30.404786154938897;120.30283855371576,30.40536198652249;120.30321650534123,30.404494098034878;120.30495311250444,30.40508442661068;120.30550445157635,30.410133036909123;120.29831239231547,30.406945716828844;120.29861320377664,30.40527429911864",
            "lng": 120.301125,
            "lat": 30.405651,
            "hasGj": 1
          },
          {
            "targetId": "509035",
            "targetName": "河畔新村",
            "location": "120.31398645805336,30.41532343777346;120.31521842113992,30.41569589257736;120.31446279877504,30.418010809065855;120.31323057322781,30.41744612581774;120.31398645805336,30.41532343777346",
            "lng": 120.31418,
            "lat": 30.41636,
            "hasGj": 0
          },
          {
            "targetId": "508609",
            "targetName": "东海水景城和苑",
            "location": "120.29861558243448,30.40527750179561;120.29901413641082,30.403088263676104;120.30139856572893,30.4038742741337;120.30101571016947,30.404782745818157;120.3002867325508,30.404627954146495;120.29973559369184,30.404810414552998;120.29928574889519,30.40536832209225;120.29861558243448,30.40527750179561",
            "lng": 120.29974,
            "lat": 30.404638,
            "hasGj": 1
          },
          {
            "targetId": "508394",
            "targetName": "保亿风景晨园",
            "location": "120.30742000621969,30.376530348647066;120.30462616896094,30.377054742930692;120.30259022098143,30.373839521837223;120.30546322409373,30.37318509139625;120.30742000621969,30.376530348647066",
            "lng": 120.305504,
            "lat": 30.375427,
            "hasGj": 1
          },
          {
            "targetId": "508939",
            "targetName": "余杭区南苑街道新丰村",
            "location": "120.29489670818982,30.410767757481125;120.29557881631341,30.410015607583272;120.30089391549296,30.412534879466914;120.30031235217291,30.41358425071202;120.303047826231,30.41494810867162;120.30452764670741,30.41560199200788;120.30514994748353,30.414551739952554;120.306477170642,30.41520648783339;120.30571253934872,30.416474586615635;120.30613956139264,30.4166857272722;120.30570652237338,30.4174632979518;120.30650448974453,30.418026247520366;120.30592104378907,30.41875912649413;120.29489670818982,30.410767757481125",
            "lng": 120.30255,
            "lat": 30.41467,
            "hasGj": 1
          },
          {
            "targetId": "508591",
            "targetName": "良熟新苑",
            "location": "120.29054562893442,30.405899287108074;120.28888278167443,30.40384567643223;120.29069602812358,30.402144176410026;120.29195084564013,30.402962048824296;120.29054562893442,30.405899287108074",
            "lng": 120.29053,
            "lat": 30.40415,
            "hasGj": 1
          },
          {
            "targetId": "508927",
            "targetName": "爱民弄小区",
            "location": "120.30794491928786,30.420141935043837;120.30897908511342,30.42081821582456;120.3084822334493,30.42197085013194;120.30727190160425,30.42160395222911;120.30794491928786,30.420141935043837",
            "lng": 120.30813,
            "lat": 30.420935,
            "hasGj": 0
          },
          {
            "targetId": "508863",
            "targetName": "中山花苑",
            "location": "120.31135032298413,30.422546606560104;120.31380744642681,30.42460394717506;120.31096436177732,30.423601998934238;120.31135032298413,30.422546606560104",
            "lng": 120.31187,
            "lat": 30.423325,
            "hasGj": 1
          },
          {
            "targetId": "508831",
            "targetName": "东方俊园",
            "location": "120.32210187783562,30.428360491145252;120.32761000434269,30.428906826994037;120.32770124764873,30.43050203300197;120.32383762939514,30.430096701286523;120.32345938024784,30.431554700759218;120.32133055653674,30.430372975206936;120.32210187783562,30.428360491145252",
            "lng": 120.32402,
            "lat": 30.429737,
            "hasGj": 0
          },
          {
            "targetId": "509005",
            "targetName": "大美公寓",
            "location": "120.31515675321303,30.410489424350157;120.31500695504602,30.41126305706371;120.31269631614401,30.410590303722742;120.312774559192,30.40971110406897;120.31515675321303,30.410489424350157",
            "lng": 120.314156,
            "lat": 30.41051,
            "hasGj": 0
          },
          {
            "targetId": "509019",
            "targetName": "凤仪家园",
            "location": "120.32266882340262,30.416951663605584;120.32200319775758,30.4183799000728;120.31754889496025,30.416755018639723;120.31824271111212,30.415298757964237;120.32266882340262,30.416951663605584",
            "lng": 120.320625,
            "lat": 30.416868,
            "hasGj": 1
          },
          {
            "targetId": "508549",
            "targetName": "余之城",
            "location": "120.30875796847056,30.398817768568442;120.31134410349732,30.39897082329302;120.3112924735764,30.396872320075524;120.31382468062388,30.397159954151427;120.31370505147063,30.39866594378199;120.31261769999733,30.401514654612434;120.30912035117845,30.4006877055953;120.30875796847056,30.398817768568442",
            "lng": 120.31118,
            "lat": 30.39894,
            "hasGj": 1
          },
          {
            "targetId": "508602",
            "targetName": "西安住宅小区",
            "location": "120.30438608729554,30.39991981560661;120.30494976812975,30.40508214283538;120.30038444796001,30.40354311405482;120.3004942414608,30.402953852376722;120.3000368127163,30.402844855259097;120.30005628798592,30.402640989339957;120.29913720235278,30.402467407236106;120.29900791045418,30.40308741397;120.2971898185479,30.40246176937029;120.29788878509129,30.398553970773087;120.30438608729554,30.39991981560661",
            "lng": 120.30072,
            "lat": 30.402134,
            "hasGj": 1
          },
          {
            "targetId": "509322",
            "targetName": "长树村",
            "location": "120.327408075555,30.425519392084833;120.33904104073852,30.42924359609065;120.33885082990406,30.43377974011342;120.34309446319982,30.43558761443474;120.34210212831425,30.43903174773461;120.34680600980073,30.439841509549257;120.34650262046937,30.44184843617354;120.33050258188507,30.4388187513798;120.32765995742167,30.437784941652904;120.32791102220646,30.434030633482447;120.327408075555,30.425519392084833",
            "lng": 120.33612,
            "lat": 30.434637,
            "hasGj": 1
          },
          {
            "targetId": "508573",
            "targetName": "天万村",
            "location": "120.32382394807705,30.37426409285541;120.31949871626,30.374782652640302;120.32142135118723,30.367954021169286;120.3253651922604,30.361852812304384;120.32575720651317,30.358564380487714;120.33256814354128,30.35943639349086;120.33366539428977,30.36334384084717;120.33485741340805,30.364668575968214;120.33191738529733,30.374877915879136;120.32382394807705,30.37426409285541",
            "lng": 120.32727,
            "lat": 30.367401,
            "hasGj": 1
          },
          {
            "targetId": "508826",
            "targetName": "东安景苑",
            "location": "120.31463783680736,30.425339502149445;120.31525045853554,30.423917143265733;120.31661258948975,30.422806071070266;120.31748261401026,30.423811077061966;120.31624741331184,30.42677073614213;120.31463783680736,30.425339502149445",
            "lng": 120.31581,
            "lat": 30.424664,
            "hasGj": 1
          },
          {
            "targetId": "508950",
            "targetName": "东和新区",
            "location": "120.31957991864101,30.41246119148881;120.32061788189118,30.410208549530466;120.32188657755141,30.407598223360317;120.32307261568727,30.409369804011337;120.32516238187891,30.415452352462534;120.31957991864101,30.41246119148881",
            "lng": 120.32165,
            "lat": 30.411259,
            "hasGj": 1
          },
          {
            "targetId": "508749",
            "targetName": "经建绅世郡",
            "location": "120.2848912998264,30.40995473999503;120.28604048191683,30.41026652536555;120.28717494263664,30.408455896694555;120.28869576535934,30.409016571990573;120.28699025575635,30.41200261959101;120.28429972913136,30.41124644282741;120.2848912998264,30.40995473999503",
            "lng": 120.28614,
            "lat": 30.410128,
            "hasGj": 0
          },
          {
            "targetId": "508545",
            "targetName": "红联九漾华庭",
            "location": "120.3209200575402,30.39701961976963;120.32012682846751,30.399557112195776;120.3171255599685,30.398861221054542;120.3172759873788,30.39785946817116;120.31389050127163,30.39706332129285;120.31408107630499,30.39444631638196;120.3209200575402,30.39701961976963",
            "lng": 120.317764,
            "lat": 30.397404,
            "hasGj": 1
          },
          {
            "targetId": "508614",
            "targetName": "康城一品",
            "location": "120.29831346957648,30.40694608404906;120.30093199116139,30.408098736543888;120.30043382480713,30.409191786381623;120.3005802011746,30.40988453694154;120.30122300190114,30.410456767864268;120.2971584325068,30.410756260341376;120.29557513425286,30.410006589352612;120.29831346957648,30.40694608404906",
            "lng": 120.299065,
            "lat": 30.409037,
            "hasGj": 1
          },
          {
            "targetId": "508613",
            "targetName": "康城国际",
            "location": "120.29303402250103,30.405253754838345;120.29393022724057,30.404243888737845;120.29831377581189,30.40694571334639;120.29557526972397,30.410004075908848;120.29605769334944,30.407260937557325;120.29303402250103,30.405253754838345",
            "lng": 120.29499,
            "lat": 30.406494,
            "hasGj": 0
          },
          {
            "targetId": "508954",
            "targetName": "美好桂花星城",
            "location": "120.32266952920672,30.416950748946384;120.32411674955507,30.417773271321348;120.32451372044835,30.41900813049649;120.32274757685317,30.419480472239083;120.32171300613172,30.418987252531586;120.32266952920672,30.416950748946384",
            "lng": 120.323074,
            "lat": 30.418192,
            "hasGj": 0
          },
          {
            "targetId": "508393",
            "targetName": "怡丰城",
            "location": "120.30259328500479,30.37383578905977;120.30189383464423,30.371369226954673;120.30448585921084,30.37072933295583;120.30546322409373,30.37318509139625;120.30259328500479,30.37383578905977",
            "lng": 120.303406,
            "lat": 30.372591,
            "hasGj": 0
          },
          {
            "targetId": "509020",
            "targetName": "世纪嘉园",
            "location": "120.32108905473548,30.416362640086874;120.32228075831364,30.413903268902764;120.32373652964623,30.414682424595018;120.32266882340262,30.416951663605584;120.32108905473548,30.416362640086874",
            "lng": 120.322174,
            "lat": 30.415653,
            "hasGj": 1
          },
          {
            "targetId": "508828",
            "targetName": "嘉利花园",
            "location": "120.31850843167999,30.423493891812324;120.31886805687053,30.422672313233697;120.31806444031704,30.422377610533797;120.3185349749198,30.421093712187584;120.32028367864766,30.42195766123334;120.31939094957129,30.423806123464317;120.31850843167999,30.423493891812324",
            "lng": 120.31888,
            "lat": 30.422699,
            "hasGj": 0
          },
          {
            "targetId": "508971",
            "targetName": "新安新秀家园南区",
            "location": "120.32451226982812,30.419006192082676;120.32616594526462,30.418569782854256;120.32699252551917,30.421739184266986;120.327408075555,30.425519392084833;120.32370494181467,30.423663855300717;120.32496946984321,30.420627484428636;120.32451226982812,30.419006192082676",
            "lng": 120.32547,
            "lat": 30.421162,
            "hasGj": 1
          },
          {
            "targetId": "508574",
            "targetName": "钱塘社区",
            "location": "120.33957759150465,30.3772953669847;120.34194754848748,30.372855898622298;120.34576740287208,30.37392058909117;120.35053023479946,30.373240435942318;120.35093492581316,30.373541901466808;120.3500371744987,30.37736542330782;120.35036421804013,30.37748172550971;120.34635128910884,30.379448157328117;120.33957759150465,30.3772953669847",
            "lng": 120.34612,
            "lat": 30.375828,
            "hasGj": 0
          },
          {
            "targetId": "508830",
            "targetName": "新安新秀家园北区",
            "location": "120.31748261401026,30.423811077061966;120.31820963922358,30.424648947818667;120.31886202690247,30.42490591718358;120.31861518114727,30.42542618508512;120.31947172367451,30.42710549135369;120.32210263144019,30.428361024921625;120.3210632876124,30.43106782989398;120.31624741331184,30.42677073614213;120.31748261401026,30.423811077061966",
            "lng": 120.31884,
            "lat": 30.426212,
            "hasGj": 1
          },
          {
            "targetId": "508964",
            "targetName": "华元欢乐城",
            "location": "120.30960885400224,30.402955104070973;120.30596731077632,30.40260707130693;120.30581017728616,30.401493722217985;120.30454507344491,30.40138187502756;120.30438664715673,30.399918795957404;120.30911777611311,30.400686930477402;120.30960885400224,30.402955104070973",
            "lng": 120.30701,
            "lat": 30.401714,
            "hasGj": 1
          },
          {
            "targetId": "508844",
            "targetName": "毓秀家园",
            "location": "120.32210344088588,30.428361504511244;120.32370494181467,30.423663855300717;120.32494785486034,30.424286276655668;120.32412785834715,30.428557859444904;120.32210344088588,30.428361504511244",
            "lng": 120.323395,
            "lat": 30.426645,
            "hasGj": 1
          },
          {
            "targetId": "508607",
            "targetName": "梧桐蓝山",
            "location": "120.29170893575424,30.401201147663166;120.29389494642065,30.402279304333973;120.29491232759149,30.402292494134016;120.29490202661395,30.403146076155924;120.29393060521474,30.404244461386387;120.29069602812358,30.402144176410026;120.29170893575424,30.401201147663166",
            "lng": 120.293106,
            "lat": 30.402359,
            "hasGj": 1
          },
          {
            "targetId": "508518",
            "targetName": "联胜安置房",
            "location": "120.31411711885862,30.386893067522347;120.31406883542343,30.383644930521363;120.31628813562232,30.38395612968721;120.31569731913561,30.387062155839;120.31411711885862,30.386893067522347",
            "lng": 120.31486,
            "lat": 30.38569,
            "hasGj": 0
          },
          {
            "targetId": "508847",
            "targetName": "水岸家园二期",
            "location": "120.31563547237887,30.427738734844876;120.31706896344538,30.428566446135235;120.3166364989615,30.429147813239833;120.3154740221426,30.429133851595548;120.31563547237887,30.427738734844876",
            "lng": 120.31609,
            "lat": 30.428465,
            "hasGj": 0
          },
          {
            "targetId": "508948",
            "targetName": "广宇鼎悦府",
            "location": "120.3176684100082,30.406347490851694;120.31653593680682,30.408800074103823;120.31554808249324,30.408473449321914;120.31574808329442,30.407269155299044;120.31605051123107,30.40536759435809;120.3176684100082,30.406347490851694",
            "lng": 120.316536,
            "lat": 30.4071,
            "hasGj": 1
          },
          {
            "targetId": "508820",
            "targetName": "东海花园",
            "location": "120.31099171732188,30.41738453519448;120.31291638925481,30.41832977842863;120.31209818366119,30.420481988185497;120.30979624397408,30.419406250478357;120.31099171732188,30.41738453519448",
            "lng": 120.311356,
            "lat": 30.418598,
            "hasGj": 1
          },
          {
            "targetId": "508833",
            "targetName": "野风珑园",
            "location": "120.32790816944946,30.434032095984445;120.32784732996663,30.434950544167574;120.32106427327743,30.431067388488554;120.32133055653674,30.430372975206936;120.32790816944946,30.434032095984445",
            "lng": 120.32521,
            "lat": 30.432892,
            "hasGj": 1
          },
          {
            "targetId": "508819",
            "targetName": "南苑一区",
            "location": "120.30817434581341,30.41753707384867;120.3102466193058,30.41863821031981;120.31008611951299,30.4189120806638;120.30870125498413,30.418230091678684;120.3085063172546,30.41882686491441;120.30752922536513,30.418384883285842;120.30817434581341,30.41753707384867",
            "lng": 120.30878,
            "lat": 30.418295,
            "hasGj": 0
          },
          {
            "targetId": "508953",
            "targetName": "东湖村",
            "location": "120.3269894244431,30.42178345527796;120.3261658536764,30.418568176543218;120.33177070995394,30.41709707718456;120.33513322362265,30.41948376599685;120.33519765489433,30.421679538280213;120.3394421728189,30.42237119493988;120.33905496222287,30.429240943982755;120.32740784699865,30.425519157852413;120.3269894244431,30.42178345527796",
            "lng": 120.332016,
            "lat": 30.421947,
            "hasGj": 1
          },
          {
            "targetId": "508592",
            "targetName": "绿城风华苑",
            "location": "120.29392876643786,30.404244006674425;120.29259283954153,30.40576062743435;120.29211718297249,30.40782950532028;120.29054500360662,30.405904484456606;120.29195192833355,30.40295970915627;120.29392876643786,30.404244006674425",
            "lng": 120.29251,
            "lat": 30.405157,
            "hasGj": 1
          }
        ],
        "hasGjCols": [
          {
            "text": "小区名称",
            "key": "1"
          },
          {
            "text": "占比",
            "key": "8"
          }
        ],
        "hasGjData": [
          {
            "1": "东海水景城和苑",
            "8": "35.86%",
            "targetId": "508609"
          },
          {
            "1": "广宇鼎悦府",
            "8": "30.68%",
            "targetId": "508948"
          },
          {
            "1": "梧桐蓝山",
            "8": "55.54%",
            "targetId": "508607"
          },
          {
            "1": "康城一品",
            "8": "22.82%",
            "targetId": "508614"
          },
          {
            "1": "朗诗未来街区",
            "8": "48.67%",
            "targetId": "508416"
          },
          {
            "1": "野风珑园",
            "8": "50.9%",
            "targetId": "508833"
          },
          {
            "1": "东湖村",
            "8": "26.55%",
            "targetId": "508953"
          },
          {
            "1": "晴彩巴黎",
            "8": "53.96%",
            "targetId": "508952"
          },
          {
            "1": "新安新秀家园北区",
            "8": "42.6%",
            "targetId": "508830"
          },
          {
            "1": "东海水景城",
            "8": "45.82%",
            "targetId": "508610"
          },
          {
            "1": "东和新区",
            "8": "33.56%",
            "targetId": "508950"
          },
          {
            "1": "新安新秀家园南区",
            "8": "54.34%",
            "targetId": "508971"
          },
          {
            "1": "高地村",
            "8": "56.21%",
            "targetId": "508476"
          },
          {
            "1": "长树村",
            "8": "33.33%",
            "targetId": "509322"
          },
          {
            "1": "天万村",
            "8": "39.12%",
            "targetId": "508573"
          },
          {
            "1": "万常村",
            "8": "43.29%",
            "targetId": "508571"
          },
          {
            "1": "绿城风华苑",
            "8": "44.92%",
            "targetId": "508592"
          },
          {
            "1": "保亿风景晨园",
            "8": "57.76%",
            "targetId": "508394"
          },
          {
            "1": "世纪嘉园",
            "8": "39.3%",
            "targetId": "509020"
          },
          {
            "1": "良熟新苑",
            "8": "38.39%",
            "targetId": "508591"
          },
          {
            "1": "余杭区南苑街道新丰村",
            "8": "34.81%",
            "targetId": "508939"
          },
          {
            "1": "东安景苑",
            "8": "32.58%",
            "targetId": "508826"
          },
          {
            "1": "合和财富中心",
            "8": "51.49%",
            "targetId": "508824"
          },
          {
            "1": "余之城",
            "8": "28.74%",
            "targetId": "508549"
          },
          {
            "1": "长树新区",
            "8": "53.96%",
            "targetId": "508845"
          },
          {
            "1": "联盟住宅小区",
            "8": "46.7%",
            "targetId": "508965"
          },
          {
            "1": "毓秀家园",
            "8": "29.17%",
            "targetId": "508844"
          },
          {
            "1": "西安住宅小区",
            "8": "46.74%",
            "targetId": "508602"
          },
          {
            "1": "凤仪家园",
            "8": "19.52%",
            "targetId": "509019"
          },
          {
            "1": "华元欢乐城",
            "8": "14.93%",
            "targetId": "508964"
          },
          {
            "1": "东海花园",
            "8": "39.02%",
            "targetId": "508820"
          },
          {
            "1": "红联九漾华庭",
            "8": "38.09%",
            "targetId": "508545"
          },
          {
            "1": "中山花苑",
            "8": "38.04%",
            "targetId": "508863"
          },
          {
            "1": "理想银泰城",
            "8": "36.81%",
            "targetId": "508982"
          }
        ]
      }
    ]
  });
}
if(mockConst.isStatic.profile.fightmap.getTypeWeakData) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getTypeWeakData), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "provId": "1",
        "cityId": "2",
        "countyId": "5714",
        "areaId": "10007909",
        "gridId": "571418",
        "targetId": "5717163169",
        "lng": "120.308000",
        "lat": "30.408000",
        "typeId": 2
      },
      {
        "provId": "1",
        "cityId": "2",
        "countyId": "5714",
        "areaId": "10007909",
        "gridId": "571418",
        "targetId": "57171132197",
        "lng": "120.3040444",
        "lat": "30.41051667",
        "typeId": 2
      },
      {
        "provId": "1",
        "cityId": "2",
        "countyId": "5714",
        "areaId": "10007909",
        "gridId": "571418",
        "targetId": "57171602212",
        "lng": "120.3028600000",
        "lat": "30.4189600000",
        "typeId": 2
      }
    ]});
}
if(mockConst.isStatic.profile.fightmap.getTypeDataByTypeId) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getTypeDataByTypeId), 'get', {
    "status": 0,
    "msg": null,
    "obj": {
      "types": [
        {
          "typeId": 1,
          "typeName": "攻坚小区",
          "status": 1,
          "sortId": 1,
          "isHide": 0
        },
        {
          "typeId": 2,
          "typeName": "集团",
          "status": 1,
          "sortId": 2,
          "isHide": 0
        }
      ],
      "data": [
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717163169",
          "lng": "120.308000",
          "lat": "30.408000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171132197",
          "lng": "120.3040444",
          "lat": "30.41051667",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171602212",
          "lng": "120.3028600000",
          "lat": "30.4189600000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717104703",
          "lng": "120.3029528",
          "lat": "30.41002778",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171386742",
          "lng": "120.304917",
          "lat": "30.416973",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100738",
          "lng": "120.300000",
          "lat": "30.416000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717114290",
          "lng": "120.296105",
          "lat": "30.380365",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171130915",
          "lng": "120.299",
          "lat": "30.419",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717153031",
          "lng": "120.3062944",
          "lat": "30.38059167",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171569440",
          "lng": "120.312123",
          "lat": "30.410227",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100733",
          "lng": "120.313553",
          "lat": "30.410409",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100588",
          "lng": "120.303000",
          "lat": "30.418000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171449107",
          "lng": "120.315914",
          "lat": "30.411548",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717124892",
          "lng": "120.302000",
          "lat": "30.418000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171122526",
          "lng": "120.311000",
          "lat": "30.414000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717113897",
          "lng": "120.312000",
          "lat": "30.412000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717113674",
          "lng": "120.301000",
          "lat": "30.417000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717103847",
          "lng": "120.303000",
          "lat": "30.417000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171553808",
          "lng": "120.308980",
          "lat": "30.408380",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171132431",
          "lng": "120.309000",
          "lat": "30.424000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717105635",
          "lng": "120.300000",
          "lat": "30.405000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171584576",
          "lng": "120.315513",
          "lat": "30.413920",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717114661",
          "lng": "120.298",
          "lat": "30.416",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717119609",
          "lng": "120.310000",
          "lat": "30.413000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717159105",
          "lng": "120.304525",
          "lat": "30.377575",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717113439",
          "lng": "120.304356",
          "lat": "30.410392",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717113607",
          "lng": "120.321000",
          "lat": "30.419000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100692",
          "lng": "120.304356",
          "lat": "30.410392",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717112467",
          "lng": "120.301000",
          "lat": "30.419000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100479",
          "lng": "120.315303",
          "lat": "30.411563",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717165992",
          "lng": "120.303306",
          "lat": "30.411897",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171130436",
          "lng": "120.299000",
          "lat": "30.419000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171103342",
          "lng": "120.317191",
          "lat": "30.411636",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717148329",
          "lng": "120.312000",
          "lat": "30.410000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717122948",
          "lng": "120.297000",
          "lat": "30.409000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171384133",
          "lng": "120.303000",
          "lat": "30.421000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717158586",
          "lng": "120.294000",
          "lat": "30.414000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717102550",
          "lng": "120.303000",
          "lat": "30.419000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717113610",
          "lng": "120.331000",
          "lat": "30.426000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717122645",
          "lng": "120.318895",
          "lat": "30.381379",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717159391",
          "lng": "120.304",
          "lat": "30.412",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717113908",
          "lng": "120.3035694",
          "lat": "30.40603333",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717113032",
          "lng": "120.304000",
          "lat": "30.420000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717104730",
          "lng": "120.300000",
          "lat": "30.416000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171453516",
          "lng": "120.314306",
          "lat": "30.413147",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717121359",
          "lng": "120.301000",
          "lat": "30.419000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717114235",
          "lng": "120.303000",
          "lat": "30.418000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171119212",
          "lng": "120.302668",
          "lat": "30.409223",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717118680",
          "lng": "120.305539",
          "lat": "30.38461",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100828",
          "lng": "120.303000",
          "lat": "30.420000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717161187",
          "lng": "120.304000",
          "lat": "30.409000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171316247",
          "lng": "120.3127463",
          "lat": "30.38254713",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171331206",
          "lng": "120.312000",
          "lat": "30.411000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171120950",
          "lng": "120.304000",
          "lat": "30.410000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717101001",
          "lng": "120.304000",
          "lat": "30.418000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171579636",
          "lng": "120.315016",
          "lat": "30.413443",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171130496",
          "lng": "120.314710",
          "lat": "30.410637",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171408411",
          "lng": "120.296105",
          "lat": "30.380365",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100966",
          "lng": "120.304820",
          "lat": "30.413479",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717151401",
          "lng": "120.3132583",
          "lat": "30.38276667",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171400316",
          "lng": "120.326960",
          "lat": "30.429810",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717112571",
          "lng": "120.306000",
          "lat": "30.416000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171392349",
          "lng": "120.313827",
          "lat": "30.412396",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171128680",
          "lng": "120.302702",
          "lat": "30.409651",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171454874",
          "lng": "120.314306",
          "lat": "30.413147",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717114729",
          "lng": "120.314707",
          "lat": "30.417558",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171455748",
          "lng": "120.308000",
          "lat": "30.391706",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171125303",
          "lng": "120.287507",
          "lat": "30.407021",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171592539",
          "lng": "120.315713365",
          "lat": "30.4130486233",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717123351",
          "lng": "120.296105",
          "lat": "30.380365",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717151986",
          "lng": "120.301000",
          "lat": "30.419000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717154432",
          "lng": "120.302000",
          "lat": "30.418000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717119731",
          "lng": "120.296105",
          "lat": "30.380365",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171308138",
          "lng": "120.310000",
          "lat": "30.409000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717100946",
          "lng": "120.298632",
          "lat": "30.414353",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171589799",
          "lng": "120.31115",
          "lat": "30.412068",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717119245",
          "lng": "120.298000",
          "lat": "30.406000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171571208",
          "lng": "120.313758",
          "lat": "30.425908",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717166920",
          "lng": "120.303000",
          "lat": "30.419000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717105960",
          "lng": "120.304000",
          "lat": "30.420000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171446523",
          "lng": "120.320143",
          "lat": "30.4113434",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717122946",
          "lng": "120.306",
          "lat": "30.422",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171577792",
          "lng": "120.3074400000",
          "lat": "30.407410",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717159710",
          "lng": "120.320143",
          "lat": "30.4113434",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717102509",
          "lng": "120.298000",
          "lat": "30.406000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171120672",
          "lng": "120.308",
          "lat": "30.408",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171590268",
          "lng": "120.3127472",
          "lat": "30.38254722",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717165568",
          "lng": "120.310000",
          "lat": "30.423000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171569734",
          "lng": "120.310919",
          "lat": "30.413357",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717101264",
          "lng": "120.298000",
          "lat": "30.406000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717101604",
          "lng": "120.308000",
          "lat": "30.408000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717122612",
          "lng": "120.321543",
          "lat": "30.4125027",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171558352",
          "lng": "120.315254",
          "lat": "30.413621",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171589764",
          "lng": "120.3127472",
          "lat": "30.38254722",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717160658",
          "lng": "120.300000",
          "lat": "30.400000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171341800",
          "lng": "120.296105",
          "lat": "30.380365",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171126880",
          "lng": "120.311000",
          "lat": "30.400000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171100293",
          "lng": "120.299000",
          "lat": "30.409000",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171119789",
          "lng": "120.304356",
          "lat": "30.410392",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "5717105933",
          "lng": "120.312209",
          "lat": "30.382956",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171571441",
          "lng": "120.325786",
          "lat": "30.385218",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171103358",
          "lng": "120.310709256",
          "lat": "30.4255374369",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171368046",
          "lng": "120.315721511",
          "lat": "30.4127591964",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171587327",
          "lng": "120.29119881",
          "lat": "30.4033281497",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171573953",
          "lng": "120.312790798",
          "lat": "30.409771459",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171572783",
          "lng": "120.314945241",
          "lat": "30.4121096409",
          "typeId": 2
        },
        {
          "provId": "1",
          "cityId": "2",
          "countyId": "5714",
          "areaId": "10007909",
          "gridId": "571418",
          "targetId": "57171986721",
          "lng": "120.296105",
          "lat": "30.380365",
          "typeId": 2
        }
      ]
    }
  });
}

if(mockConst.isStatic.profile.fightmap.getCoverDataByCoverTypeId) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getCoverDataByCoverTypeId), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "typeId": 1,
        "typeName": "存量小区弱覆盖圈",
        "radius": 1000,
        "data": [
          {
            "lng": "120.183773",
            "lat": "30.270031"
          }
        ]
      },
      {
        "typeId": 2,
        "typeName": "渠道份额弱覆盖圈",
        "radius": 1000,
        "data": [
          {
            "lng": "120.224523",
            "lat": "30.226301"
          }
        ]
      },
      {
        "typeId": 3,
        "typeName": "弱覆盖区",
        "radius": 1000,
        "data": [
          {
            "lng": "120.160187",
            "lat": "30.315172"
          }
        ]
      }
    ]
  });
}
if(mockConst.isStatic.profile.fightmap.getLowSzlScene) {
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.fightmap.getLowSzlScene), 'get', {"status":0,"msg":null,"obj":[{"sceneId":"508950","sceneName":"东和新区","regionLocation":"120.31957991864101,30.41246119148881;120.32061788189118,30.410208549530466;120.32188657755141,30.407598223360317;120.32307261568727,30.409369804011337;120.32516238187891,30.415452352462534;120.31957991864101,30.41246119148881","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"69.5%"},{"sceneId":"508640","sceneName":"星乐小区一区","regionLocation":"120.26586508501889,30.3886067840482;120.26695879398208,30.3897010921626;120.26508880917336,30.394094608224737;120.26038683803225,30.392259111237976;120.26586508501889,30.3886067840482","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"69.4%"},{"sceneId":"509176","sceneName":"星河嘉园","regionLocation":"120.28136660134751,30.42832511086088;120.28372214806836,30.429206669649645;120.28157331580218,30.43265497830684;120.27923470703838,30.431718738240292;120.28136660134751,30.42832511086088","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"68.2%"},{"sceneId":"508971","sceneName":"新安新秀家园南区","regionLocation":"120.32451226982812,30.419006192082676;120.32616594526462,30.418569782854256;120.32699252551917,30.421739184266986;120.327408075555,30.425519392084833;120.32370494181467,30.423663855300717;120.32496946984321,30.420627484428636;120.32451226982812,30.419006192082676","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"67.3%"},{"sceneId":"509269","sceneName":"东湖北路兴旺小区","regionLocation":"120.29895723800213,30.470038474809467;120.29967554278919,30.467590183669376;120.30023367409581,30.467648031713985;120.30055329720999,30.466156360296523;120.30125691004991,30.46844981336532;120.30379000792124,30.46931897170275;120.3033341690564,30.470844930222107;120.29895723800213,30.470038474809467","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"67.3%"},{"sceneId":"509154","sceneName":"环桥花苑二期","regionLocation":"120.27551932595058,30.42993875798028;120.27801766216209,30.4261097466754;120.28014656523222,30.427230907674065;120.27790860393871,30.431067851433063;120.27551932595058,30.42993875798028","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"67.0%"},{"sceneId":"508602","sceneName":"西安住宅小区","regionLocation":"120.30438608729554,30.39991981560661;120.30494976812975,30.40508214283538;120.30038444796001,30.40354311405482;120.3004942414608,30.402953852376722;120.3000368127163,30.402844855259097;120.30005628798592,30.402640989339957;120.29913720235278,30.402467407236106;120.29900791045418,30.40308741397;120.2971898185479,30.40246176937029;120.29788878509129,30.398553970773087;120.30438608729554,30.39991981560661","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"66.0%"},{"sceneId":"509547","sceneName":"滩里新苑","regionLocation":"120.30333780005064,30.470854763698124;120.30311542682911,30.47266995919124;120.29502236762333,30.471552382631597;120.29555232726707,30.469417139625243;120.30333780005064,30.470854763698124","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"64.9%"},{"sceneId":"509199","sceneName":"乾南嘉苑","regionLocation":"120.28821236863214,30.45652519283006;120.29001696443706,30.457064455393148;120.2876952268705,30.46077072526562;120.28604254356854,30.46059917744458;120.28821236863214,30.45652519283006","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"64.4%"},{"sceneId":"508622","sceneName":"星乐小区三区","regionLocation":"120.26214610920346,30.39660140842305;120.26256836281094,30.395147301790544;120.26153558695218,30.394944516727968;120.26220630126495,30.39297091745711;120.26509027960843,30.394095676410732;120.26385466770526,30.39700319705452;120.26214610920346,30.39660140842305","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"64.4%"},{"sceneId":"509293","sceneName":"胡桥社区","regionLocation":"120.32884689559421,30.44565338319439;120.3292309155464,30.44410830114129;120.33493870128281,30.44526078400017;120.33539795250927,30.445037632437984;120.33571563618143,30.445418808355498;120.3363095435722,30.446473071536897;120.33473603010712,30.44678087425141;120.32884689559421,30.44565338319439","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"63.4%"},{"sceneId":"509064","sceneName":"东湖街道横塘社区","regionLocation":"120.30370173583071,30.447374574183158;120.3052924698903,30.447774234968563;120.3052006786862,30.448563446051274;120.30535189351461,30.44941095025098;120.3031125667514,30.449404077637944;120.30370173583071,30.447374574183158","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"63.4%"},{"sceneId":"509525","sceneName":"圣塘河村","regionLocation":"120.29859544727552,30.483682974184653;120.3017763884439,30.484067443674522;120.30147373944911,30.48658070297014;120.2989121021557,30.487319666469382;120.29859544727552,30.483682974184653","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"62.1%"},{"sceneId":"508830","sceneName":"新安新秀家园北区","regionLocation":"120.31748261401026,30.423811077061966;120.31820963922358,30.424648947818667;120.31886202690247,30.42490591718358;120.31861518114727,30.42542618508512;120.31947172367451,30.42710549135369;120.32210263144019,30.428361024921625;120.3210632876124,30.43106782989398;120.31624741331184,30.42677073614213;120.31748261401026,30.423811077061966","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"59.9%"},{"sceneId":"508674","sceneName":"南星小区","regionLocation":"120.25722161756663,30.406566112101782;120.2583480334224,30.40513145165941;120.26133964787134,30.40577729796589;120.25972261138288,30.40793831871855;120.25722161756663,30.406566112101782","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"59.5%"},{"sceneId":"508927","sceneName":"爱民弄小区","regionLocation":"120.30794491928786,30.420141935043837;120.30897908511342,30.42081821582456;120.3084822334493,30.42197085013194;120.30727190160425,30.42160395222911;120.30794491928786,30.420141935043837","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"58.8%"},{"sceneId":"509272","sceneName":"乾北嘉苑","regionLocation":"120.2840751419001,30.463128592976076;120.2854704701348,30.460538876150697;120.28769771952007,30.4607701527102;120.28726933887926,30.46207316641404;120.28743369914756,30.463690801952815;120.2840751419001,30.463128592976076","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"57.6%"},{"sceneId":"508890","sceneName":"木桥浜路北大街片区","regionLocation":"120.30674518589028,30.427867983382683;120.30728466543036,30.426995923219792;120.30964420791997,30.427800661967467;120.30943193011511,30.428674539288362;120.30674518589028,30.427867983382683","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"57.1%"},{"sceneId":"508573","sceneName":"天万村","regionLocation":"120.32382394807705,30.37426409285541;120.31949871626,30.374782652640302;120.32142135118723,30.367954021169286;120.3253651922604,30.361852812304384;120.32575720651317,30.358564380487714;120.33256814354128,30.35943639349086;120.33366539428977,30.36334384084717;120.33485741340805,30.364668575968214;120.33191738529733,30.374877915879136;120.32382394807705,30.37426409285541","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"57.0%"},{"sceneId":"509566","sceneName":"南横港村","regionLocation":"120.28802436557234,30.48247865098361;120.28811309102699,30.478479201065813;120.29709963476638,30.479656120701527;120.29661594310973,30.483451704227175;120.28802436557234,30.48247865098361","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"56.9%"},{"sceneId":"509516","sceneName":"新宇村南","regionLocation":"120.31291455399816,30.507815133322623;120.32600855227462,30.50693928132515;120.32595036616343,30.509546630828655;120.32687016139212,30.509559734232198;120.32748410691808,30.50835897105014;120.32995288765036,30.50916400945238;120.32788811236932,30.514338072735523;120.32203421366978,30.5141583598209;120.32255620900926,30.51642586210826;120.31618945333861,30.51676944282202;120.31291455399816,30.507815133322623","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"55.8%"},{"sceneId":"508416","sceneName":"朗诗未来街区","regionLocation":"120.30582410084351,30.368070028933722;120.30881643347361,30.368088283629803;120.30977829186534,30.36970855781449;120.30680091180822,30.370163750130974;120.30582410084351,30.368070028933722","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"55.7%"},{"sceneId":"509550","sceneName":"南栅口","regionLocation":"120.30742540301647,30.473163089308613;120.30773313658727,30.472179256249465;120.30617417353174,30.47174152449504;120.30584891474541,30.47287723082709;120.30314936641146,30.47237647081532;120.30334183350598,30.470845990547566;120.30445059550212,30.4671182397394;120.3064769282088,30.46841867065397;120.30682107986743,30.46789361479963;120.30836178945225,30.468853538142444;120.30861981069677,30.465753813004973;120.30891372066736,30.465861078593637;120.31092096349181,30.466089736563024;120.31194285610064,30.46513449864168;120.31329073885806,30.465112798813937;120.3157298408121,30.47102907171733;120.31356946684183,30.474311604481993;120.30742540301647,30.473163089308613","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"54.9%"},{"sceneId":"508736","sceneName":"星乐小区二区","regionLocation":"120.26586440941406,30.388606594425998;120.26038793680749,30.392257915736355;120.2572698447803,30.390711210185124;120.258351731823,30.38540741615955;120.26355615818026,30.3862773550081;120.26586440941406,30.388606594425998","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"54.6%"},{"sceneId":"508571","sceneName":"万常村","regionLocation":"120.31761697282359,30.35826406047623;120.31363380446402,30.356356745582676;120.31456103104075,30.354901406786688;120.32115176760011,30.35791847154939;120.32574744198119,30.358540449096665;120.32536993299972,30.361842939264587;120.32142324021709,30.3679427498905;120.31463303541328,30.362934695364196;120.31761697282359,30.35826406047623","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":1,"kdSzl":"53.8%"},{"sceneId":"509056","sceneName":"枣李家园","regionLocation":"120.32497707367466,30.44134118958156;120.3270991067418,30.44176133311685;120.32597097521524,30.44465267784683;120.32494083247458,30.444363958986354;120.32524241912324,30.443455326496366;120.32444704035521,30.443262077923325;120.32497707367466,30.44134118958156","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"52.5%"},{"sceneId":"509324","sceneName":"华惠家园","regionLocation":"120.32204910173898,30.4539262650823;120.32324416337872,30.45118412383888;120.32492025503507,30.451487387708248;120.32349772064589,30.454190258513144;120.32204910173898,30.4539262650823","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"52.0%"},{"sceneId":"509035","sceneName":"河畔新村","regionLocation":"120.31398645805336,30.41532343777346;120.31521842113992,30.41569589257736;120.31446279877504,30.418010809065855;120.31323057322781,30.41744612581774;120.31398645805336,30.41532343777346","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"51.7%"},{"sceneId":"509476","sceneName":"道墩坝社区","regionLocation":"120.27939768404418,30.492784626574643;120.27806197100423,30.481401771870512;120.29287457577476,30.483043438326774;120.29292041999815,30.486213111920893;120.29119476135696,30.48623829794965;120.28991825199391,30.486256426593073;120.29018933418375,30.492368187061743;120.27939768404418,30.492784626574643","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"51.6%"},{"sceneId":"509580","sceneName":"滩里村","regionLocation":"120.28828146613189,30.468105493918436;120.29555232726707,30.469417139625243;120.29502436656688,30.471557148855993;120.29869117047693,30.472053468999043;120.29825062501864,30.474094781171665;120.29924970424373,30.474215412835445;120.29922876209368,30.475801938634735;120.29709918017969,30.479650457860064;120.2881121577101,30.478476864603024;120.28828146613189,30.468105493918436","hasContract":null,"isLowSzl":0,"isLowFgl":0,"poorCove":0,"kdSzl":"50.0%"},{"sceneId":"508549","sceneName":"余之城","regionLocation":"120.30875796847056,30.398817768568442;120.31134410349732,30.39897082329302;120.3112924735764,30.396872320075524;120.31382468062388,30.397159954151427;120.31370505147063,30.39866594378199;120.31261769999733,30.401514654612434;120.30912035117845,30.4006877055953;120.30875796847056,30.398817768568442","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"50.0%"},{"sceneId":"508850","sceneName":"肖家弄","regionLocation":"120.31225890992376,30.428984097435475;120.31242772217617,30.428160203769902;120.31251178751899,30.427924560889412;120.31412829895622,30.428080818468604;120.31407571763906,30.428709099419674;120.31225890992376,30.428984097435475","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.8%"},{"sceneId":"508794","sceneName":"理想家园","regionLocation":"120.31495308740423,30.43375223859875;120.315767899957,30.433837211517933;120.3157170980769,30.43454331186415;120.31772280397013,30.43474612273837;120.31766709465491,30.435157862282335;120.31827471196652,30.43518939642845;120.31809395928427,30.436327988892096;120.31482015571474,30.43492772950195;120.31495308740423,30.43375223859875","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.7%"},{"sceneId":"508846","sceneName":"水岸家园","regionLocation":"120.3166384655903,30.42914783856604;120.31627692144646,30.430591089442895;120.31532326633415,30.430471086448854;120.31547583519175,30.429132321829986;120.3166384655903,30.42914783856604","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.3%"},{"sceneId":"508847","sceneName":"水岸家园二期","regionLocation":"120.31563547237887,30.427738734844876;120.31706896344538,30.428566446135235;120.3166364989615,30.429147813239833;120.3154740221426,30.429133851595548;120.31563547237887,30.427738734844876","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.3%"},{"sceneId":"508649","sceneName":"星运丽园","regionLocation":"120.26754129570152,30.398579117998253;120.27136863861244,30.399525479077848;120.27068354855741,30.401433252081638;120.26704402441301,30.400139608369642;120.26754129570152,30.398579117998253","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.1%"},{"sceneId":"508805","sceneName":"赞成檀府","regionLocation":"120.32239324184687,30.438318074360144;120.32268580622524,30.43702103615559;120.3232573085079,30.434510123954578;120.32552369998713,30.436210622465403;120.3241647106648,30.43915340556865;120.32239324184687,30.438318074360144","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.1%"},{"sceneId":"508611","sceneName":"东海水景城三期","regionLocation":"120.30101509930246,30.404786154938897;120.30139955916013,30.40387353861123;120.30321530082834,30.404491033301493;120.30284202892967,30.405363720897483;120.30101509930246,30.404786154938897","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.0%"},{"sceneId":"508609","sceneName":"东海水景城和苑","regionLocation":"120.29861558243448,30.40527750179561;120.29901413641082,30.403088263676104;120.30139856572893,30.4038742741337;120.30101571016947,30.404782745818157;120.3002867325508,30.404627954146495;120.29973559369184,30.404810414552998;120.29928574889519,30.40536832209225;120.29861558243448,30.40527750179561","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"49.0%"},{"sceneId":"509182","sceneName":"金帝海珀华庭","regionLocation":"120.28992717402093,30.43352745949642;120.29390292127098,30.434687144877298;120.29261547934597,30.437109395267083;120.28884893157446,30.435626929221606;120.28992717402093,30.43352745949642","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"48.7%"},{"sceneId":"509005","sceneName":"大美公寓","regionLocation":"120.31515675321303,30.410489424350157;120.31500695504602,30.41126305706371;120.31269631614401,30.410590303722742;120.312774559192,30.40971110406897;120.31515675321303,30.410489424350157","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"48.3%"},{"sceneId":"509515","sceneName":"新宇村北","regionLocation":"120.31618112899787,30.516762203787483;120.32255187148057,30.516433768496274;120.32202858000419,30.514166208395597;120.32788811236932,30.514338072735523;120.32883322704622,30.51821901286887;120.32559263815429,30.525969240902793;120.31955741602069,30.525930660311538;120.31618112899787,30.516762203787483","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"48.1%"},{"sceneId":"509264","sceneName":"褚家坝社区农民高层公寓","regionLocation":"120.30413212291711,30.463029929074523;120.3057949648951,30.46269400625458;120.30447213115666,30.467029491215758;120.30334146230382,30.466661887659825;120.30413212291711,30.463029929074523","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"48.0%"},{"sceneId":"509100","sceneName":"红枫苑小区","regionLocation":"120.31029783395417,30.442040951913874;120.3107496584584,30.440065538604735;120.31408075670286,30.440743750308382;120.31358991551862,30.442641674118313;120.31029783395417,30.442040951913874","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"47.8%"},{"sceneId":"509172","sceneName":"元茂欣苑","regionLocation":"120.27884010516938,30.440266331004377;120.28168477062331,30.441669740161714;120.27957434700453,30.445315858366275;120.27628635452695,30.444133972680504;120.27884010516938,30.440266331004377","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"47.7%"},{"sceneId":"509165","sceneName":"金帝海珀二期","regionLocation":"120.28602240631156,30.434434848473455;120.288854532086,30.435625548420155;120.28722833673379,30.43876045139053;120.28431626116907,30.43767655572002;120.28525701061754,30.43592999965503;120.28602240631156,30.434434848473455","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"47.4%"},{"sceneId":"508746","sceneName":"钱江社区","regionLocation":"120.29032854511733,30.41423162274938;120.29175900523687,30.41334733792228;120.29463937146016,30.41615103073862;120.29396334022933,30.41611119801818;120.29295955874245,30.417328763768726;120.28910258763875,30.416024513594834;120.29032854511733,30.41423162274938","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":1,"kdSzl":"47.3%"},{"sceneId":"508656","sceneName":"银领时代","regionLocation":"120.26704409370087,30.40013805512744;120.2706828212786,30.401432580326972;120.26975831251167,30.403914138044257;120.26630389609029,30.402456849848743;120.26704409370087,30.40013805512744","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"47.2%"},{"sceneId":"509169","sceneName":"顺达花苑西区","regionLocation":"120.2813396591257,30.43657028551437;120.28439497265879,30.43770572281614;120.28168666189234,30.441668053913677;120.27883809771245,30.44026676666055;120.2813396591257,30.43657028551437","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"47.1%"},{"sceneId":"508935","sceneName":"保安弄小区","regionLocation":"120.30638156538541,30.42701677231648;120.30623345683826,30.4272163754625;120.30642644507594,30.427306698635597;120.30618126168521,30.427699079218883;120.30588465320741,30.427610287197563;120.30556139368973,30.428348789212958;120.3050306316914,30.42819240626927;120.30465373931712,30.42862419603115;120.30438269013351,30.428077167974486;120.30467390578345,30.4275376099925;120.3052041229905,30.427762650062306;120.30553870919623,30.427020794170495;120.30505133044042,30.426843600743588;120.30523987217938,30.42650137259535;120.30638156538541,30.42701677231648","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"46.8%"},{"sceneId":"509215","sceneName":"东夏东港小区","regionLocation":"120.27708696685615,30.435005526804744;120.28133256234426,30.436570419097823;120.27993208434259,30.438647162840596;120.27733891066329,30.436544176325576;120.27769051499934,30.4357736773875;120.27686463219938,30.43537434383993;120.27708696685615,30.435005526804744","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"46.8%"},{"sceneId":"509554","sceneName":"嘉丰万悦城","regionLocation":"120.30504826898115,30.4650766040703;120.3085335186046,30.46667054844244;120.30836238848481,30.46885234009956;120.30463133784492,30.466529795980758;120.30504826898115,30.4650766040703","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"46.7%"},{"sceneId":"509045","sceneName":"格之林花园","regionLocation":"120.29571001797699,30.436698492279245;120.29641921604498,30.43689399181878;120.29675227762546,30.436184507659902;120.29719707533047,30.436433524682048;120.29688266948374,30.437009859781025;120.29767794671695,30.437288083422203;120.29762825732931,30.437442983027736;120.29822714370152,30.437630373625375;120.29769131080967,30.438643984220004;120.29508686457845,30.437975791657408;120.29571001797699,30.436698492279245","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"46.6%"},{"sceneId":"508789","sceneName":"东海·水漾人家","regionLocation":"120.31950741406428,30.435161481145126;120.3210636242252,30.431069462446086;120.32325358486204,30.43451368254823;120.32239765548337,30.43831813518569;120.3216684147165,30.437978607443778;120.32219975347512,30.435503652160435;120.31950741406428,30.435161481145126","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"46.1%"},{"sceneId":"508613","sceneName":"康城国际","regionLocation":"120.29303402250103,30.405253754838345;120.29393022724057,30.404243888737845;120.29831377581189,30.40694571334639;120.29557526972397,30.410004075908848;120.29605769334944,30.407260937557325;120.29303402250103,30.405253754838345","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"46.0%"},{"sceneId":"509019","sceneName":"凤仪家园","regionLocation":"120.32266882340262,30.416951663605584;120.32200319775758,30.4183799000728;120.31754889496025,30.416755018639723;120.31824271111212,30.415298757964237;120.32266882340262,30.416951663605584","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.7%"},{"sceneId":"508845","sceneName":"长树新区","regionLocation":"120.32471807565382,30.432255546367024;120.32617092345417,30.430338241876875;120.32770279982002,30.43050060969422;120.32790730047365,30.434030641184663;120.32471807565382,30.432255546367024","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.7%"},{"sceneId":"509223","sceneName":"章家河社区","regionLocation":"120.29034643245059,30.45652568984657;120.2923718786188,30.457217802837793;120.29168453487067,30.45870336581023;120.28945082152723,30.457979398786243;120.29034643245059,30.45652568984657","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.5%"},{"sceneId":"509057","sceneName":"禾丰安置房","regionLocation":"120.28965569957656,30.44269028590768;120.2909795004189,30.440186600553886;120.2939467989545,30.441269785527677;120.29275195075758,30.44380840865437;120.28965569957656,30.44269028590768","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.4%"},{"sceneId":"509043","sceneName":"汀洲花苑","regionLocation":"120.29261726240932,30.437110513420084;120.29375317934561,30.434970388207482;120.29594462767358,30.43631449917234;120.29508496267286,30.43803257174315;120.29261726240932,30.437110513420084","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.3%"},{"sceneId":"509189","sceneName":"荷裕庭","regionLocation":"120.28594758029745,30.441145129372163;120.28753423208151,30.441726009829814;120.28638397367708,30.443488388747426;120.28509814697884,30.442870684887644;120.28594758029745,30.441145129372163","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.3%"},{"sceneId":"508574","sceneName":"钱塘社区","regionLocation":"120.33957759150465,30.3772953669847;120.34194754848748,30.372855898622298;120.34576740287208,30.37392058909117;120.35053023479946,30.373240435942318;120.35093492581316,30.373541901466808;120.3500371744987,30.37736542330782;120.35036421804013,30.37748172550971;120.34635128910884,30.379448157328117;120.33957759150465,30.3772953669847","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.2%"},{"sceneId":"508965","sceneName":"联盟住宅小区","regionLocation":"120.30454683217478,30.401383523120852;120.30580815357065,30.4014926522427;120.30622445966432,30.40441447805504;120.30710687568524,30.404694556608742;120.30836650838965,30.404584570005554;120.30830953380354,30.40874792575006;120.30547658113376,30.409869591611947;120.30454683217478,30.401383523120852","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"45.2%"},{"sceneId":"509333","sceneName":"新塘村","regionLocation":"120.33596721246347,30.458042163688766;120.34401203540872,30.459543963304867;120.34320100589088,30.46433018401273;120.34549286458119,30.465291007504238;120.34544106587597,30.4664234707392;120.34400886499179,30.466556860440367;120.3439053687994,30.46799195487387;120.33828778723596,30.466591541927343;120.33683773989385,30.466370102039306;120.33486111177729,30.463118972633488;120.33596721246347,30.458042163688766","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":1,"kdSzl":"45.0%"},{"sceneId":"508627","sceneName":"华丽嘉苑","regionLocation":"120.25891124536366,30.399337715227343;120.25930258367448,30.398568368088405;120.25745678043697,30.397979058550234;120.25767273406484,30.39755498934032;120.26158694814428,30.398551421936787;120.26108851183224,30.400258533342182;120.25891124536366,30.399337715227343","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"44.9%"},{"sceneId":"508714","sceneName":"民乐村","regionLocation":"120.2474836049055,30.39233772699751;120.24032552190006,30.383543681427117;120.24382739067404,30.38076362906171;120.24561151732783,30.382014725494827;120.2464432909536,30.381507374958915;120.24478651607387,30.37999823075028;120.24520805053635,30.379053714840396;120.24581029415921,30.378622423631523;120.2515179182588,30.385632466293117;120.2504480808192,30.38602580107335;120.24945279185665,30.386038892830996;120.24784634610295,30.391882825129322;120.2474836049055,30.39233772699751","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"44.7%"},{"sceneId":"509205","sceneName":"玲珑香榭","regionLocation":"120.30467965179393,30.460640859635916;120.30631668680854,30.460969911322014;120.30579644649583,30.462693869341223;120.30413212294317,30.46302992916373;120.30467965179393,30.460640859635916","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"44.5%"},{"sceneId":"509185","sceneName":"新城山语院","regionLocation":"120.28702763214349,30.432557980832687;120.28819223471835,30.430366689656704;120.29116162465303,30.431162151960454;120.28992555327979,30.43353373918633;120.28702763214349,30.432557980832687","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"44.5%"},{"sceneId":"508592","sceneName":"绿城风华苑","regionLocation":"120.29392876643786,30.404244006674425;120.29259283954153,30.40576062743435;120.29211718297249,30.40782950532028;120.29054500360662,30.405904484456606;120.29195192833355,30.40295970915627;120.29392876643786,30.404244006674425","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"44.4%"},{"sceneId":"508824","sceneName":"合和财富中心","regionLocation":"120.31548122046839,30.421073190124446;120.31718422898649,30.421688360467908;120.31661303620639,30.422806461773966;120.31492660144437,30.422220803565775;120.31548122046839,30.421073190124446","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"44.4%"},{"sceneId":"508647","sceneName":"汤家锦锈公寓二区","regionLocation":"120.25479009412383,30.409672744053932;120.25181891869599,30.4079811445436;120.25327931989861,30.406085295976276;120.25622405549205,30.40784194389825;120.25479009412383,30.409672744053932","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"43.5%"},{"sceneId":"508877","sceneName":"顺昌花苑","regionLocation":"120.3085340026107,30.432273111054233;120.30971381225646,30.432770872564994;120.30939368015702,30.433743061929857;120.30830991026136,30.4335077254146;120.3085340026107,30.432273111054233","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"43.4%"},{"sceneId":"508394","sceneName":"保亿风景晨园","regionLocation":"120.30742000621969,30.376530348647066;120.30462616896094,30.377054742930692;120.30259022098143,30.373839521837223;120.30546322409373,30.37318509139625;120.30742000621969,30.376530348647066","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"43.3%"},{"sceneId":"508997","sceneName":"金桥花苑小区","regionLocation":"120.30934266627524,30.415656143049695;120.30777552163694,30.4146033896682;120.30822041442732,30.413735442565326;120.30892260111318,30.41396317901798;120.30881082018814,30.414229048548243;120.30980258427454,30.414553438265834;120.30934266627524,30.415656143049695","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"43.2%"},{"sceneId":"508826","sceneName":"东安景苑","regionLocation":"120.31463783680736,30.425339502149445;120.31525045853554,30.423917143265733;120.31661258948975,30.422806071070266;120.31748261401026,30.423811077061966;120.31624741331184,30.42677073614213;120.31463783680736,30.425339502149445","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"42.7%"},{"sceneId":"508831","sceneName":"东方俊园","regionLocation":"120.32210187783562,30.428360491145252;120.32761000434269,30.428906826994037;120.32770124764873,30.43050203300197;120.32383762939514,30.430096701286523;120.32345938024784,30.431554700759218;120.32133055653674,30.430372975206936;120.32210187783562,30.428360491145252","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"42.5%"},{"sceneId":"508739","sceneName":"天湖苑","regionLocation":"120.25018905515438,30.392407497362967;120.25243750629056,30.39287418378986;120.25144698618253,30.396403784138183;120.24960862943254,30.39452182592049;120.25018905515438,30.392407497362967","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"42.5%"},{"sceneId":"508887","sceneName":"赵家弄","regionLocation":"120.31172356310789,30.426641421639797;120.31203815608845,30.42672304896138;120.3124102016,30.425998643981256;120.31309827362948,30.426324681297373;120.31242700178323,30.428164295084482;120.31147197386785,30.42803873494944;120.31172356310789,30.426641421639797","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"42.1%"},{"sceneId":"509356","sceneName":"塘湾村","regionLocation":"120.33698278111527,30.474097277487157;120.33846642680285,30.470020507110558;120.33788292325261,30.468464958219762;120.33697886069874,30.467364785305776;120.3368589118192,30.46634236239441;120.3382423219825,30.46659571080452;120.34389635893342,30.467989173480337;120.34367056308653,30.470547455392303;120.34803291381711,30.47079578344859;120.3474060627456,30.476924385242278;120.34224547411542,30.479443456407008;120.33698278111527,30.474097277487157","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"42.0%"},{"sceneId":"508863","sceneName":"中山花苑","regionLocation":"120.31135032298413,30.422546606560104;120.31380744642681,30.42460394717506;120.31096436177732,30.423601998934238;120.31135032298413,30.422546606560104","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.9%"},{"sceneId":"508646","sceneName":"星雅嘉园","regionLocation":"120.25829940879451,30.39633966598339;120.25894913857313,30.39507434477419;120.26147245669083,30.395680944585838;120.26099624671068,30.397027395651236;120.25829940879451,30.39633966598339","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.8%"},{"sceneId":"508982","sceneName":"理想银泰城","regionLocation":"120.31051691082752,30.407890047604436;120.31069801021431,30.412366154817008;120.30550234951535,30.410137501415402;120.30547525594818,30.409869142098536;120.31051691082752,30.407890047604436","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.6%"},{"sceneId":"509097","sceneName":"都市港湾","regionLocation":"120.3093740554464,30.445078450579366;120.30962932855807,30.444197635373605;120.31123445071175,30.444452702760017;120.31099517400341,30.44535465276341;120.3093740554464,30.445078450579366","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.5%"},{"sceneId":"508844","sceneName":"毓秀家园","regionLocation":"120.32210344088588,30.428361504511244;120.32370494181467,30.423663855300717;120.32494785486034,30.424286276655668;120.32412785834715,30.428557859444904;120.32210344088588,30.428361504511244","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.3%"},{"sceneId":"509153","sceneName":"褚家坝安置房小区","regionLocation":"120.28014641531935,30.427229198909117;120.28157652437461,30.427991864109494;120.27923344631604,30.431719609978014;120.27790097390066,30.431081558600336;120.28014641531935,30.427229198909117","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.3%"},{"sceneId":"508952","sceneName":"晴彩巴黎","regionLocation":"120.32266952920672,30.416950748946384;120.32373119535447,30.414682580514217;120.32516145108103,30.415449566909597;120.32616594526462,30.418569782854256;120.32451225501889,30.419007111810473;120.32411715931467,30.41777408265879;120.32266952920672,30.416950748946384","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.3%"},{"sceneId":"509050","sceneName":"华宇家园","regionLocation":"120.31800238550018,30.436731632317496;120.31776367075382,30.437860657523395;120.31546800437931,30.437674177092976;120.31475767122406,30.436396365854744;120.31800238550018,30.436731632317496","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.0%"},{"sceneId":"508757","sceneName":"温莎花园","regionLocation":"120.24748314943918,30.39233804232925;120.24784108374418,30.39188854540375;120.25018748903243,30.392406063544357;120.24961105355459,30.394521843583266;120.24748314943918,30.39233804232925","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.0%"},{"sceneId":"508621","sceneName":"悦泽公寓","regionLocation":"120.26235135149437,30.395889566903296;120.25894544469858,30.395069813380637;120.26038676696848,30.39225807829414;120.26220394835029,30.392973032998523;120.26154084116875,30.394942789064253;120.2625670942372,30.39514710922603;120.26235135149437,30.395889566903296","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"41.0%"},{"sceneId":"508954","sceneName":"美好桂花星城","regionLocation":"120.32266952920672,30.416950748946384;120.32411674955507,30.417773271321348;120.32451372044835,30.41900813049649;120.32274757685317,30.419480472239083;120.32171300613172,30.418987252531586;120.32266952920672,30.416950748946384","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"40.9%"},{"sceneId":"508964","sceneName":"华元欢乐城","regionLocation":"120.30960885400224,30.402955104070973;120.30596731077632,30.40260707130693;120.30581017728616,30.401493722217985;120.30454507344491,30.40138187502756;120.30438664715673,30.399918795957404;120.30911777611311,30.400686930477402;120.30960885400224,30.402955104070973","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"40.7%"},{"sceneId":"509124","sceneName":"红丰村","regionLocation":"120.318106637252,30.44194250096685;120.31924887300899,30.44217030423726;120.3194654586561,30.44149097428149;120.32140870781045,30.44196698393286;120.32091706103692,30.444088838936278;120.31775059661939,30.44346286035416;120.318106637252,30.44194250096685","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"40.5%"},{"sceneId":"508545","sceneName":"红联九漾华庭","regionLocation":"120.3209200575402,30.39701961976963;120.32012682846751,30.399557112195776;120.3171255599685,30.398861221054542;120.3172759873788,30.39785946817116;120.31389050127163,30.39706332129285;120.31408107630499,30.39444631638196;120.3209200575402,30.39701961976963","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"40.1%"},{"sceneId":"509505","sceneName":"杭信村","regionLocation":"120.24479316226223,30.507564021191325;120.25529399480507,30.504626252592118;120.26893894824896,30.50466899457734;120.26887760400395,30.507998622964454;120.26969315540371,30.507936123259576;120.26983108381387,30.509209183347426;120.27102851056922,30.50900589738772;120.27121816438556,30.506954344167276;120.27779528348901,30.506213266512855;120.27748156126479,30.504624576341797;120.28132332539819,30.504606036939084;120.28228697310348,30.51026473848028;120.26219785536591,30.51093819691165;120.26213630314774,30.50891711307785;120.259329186599,30.508921478644897;120.25929970417411,30.509782288897917;120.259992679488,30.50977009710681;120.25991933155807,30.511001256924086;120.24494153858839,30.511341169122552;120.24479316226223,30.507564021191325","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":1,"kdSzl":"40.1%"},{"sceneId":"509501","sceneName":"杭南村","regionLocation":"120.2645812495709,30.492351412032324;120.2656536141586,30.480063329607397;120.278066910879,30.48140666547065;120.27939038277808,30.492784569144984;120.27638194417328,30.49290666499827;120.2762929569553,30.500447086895754;120.2645812495709,30.492351412032324","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":1,"kdSzl":"39.9%"},{"sceneId":"508618","sceneName":"桐鹤名苑二区","regionLocation":"120.26355459672271,30.38627170207827;120.26559513221704,30.38487111807641;120.26783259428147,30.387379586095584;120.26586440941406,30.388606594425998;120.26355459672271,30.38627170207827","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"39.7%"},{"sceneId":"508740","sceneName":"枫桥庭","regionLocation":"120.25018911130998,30.39240606213785;120.2478460361769,30.391886756578266;120.24889864225595,30.38806935252816;120.25128029604248,30.3885263936054;120.25018911130998,30.39240606213785","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"39.7%"},{"sceneId":"509077","sceneName":"禾丰花苑三期","regionLocation":"120.28911955337232,30.443706260830602;120.28965677779249,30.4426889575523;120.29274960993389,30.443805876094473;120.29191389591949,30.44487725856285;120.28911955337232,30.443706260830602","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"39.7%"},{"sceneId":"509048","sceneName":"星火住宅小区三期","regionLocation":"120.30419638816376,30.436113242313297;120.30761899020065,30.43641143244593;120.30701456628115,30.437642058407384;120.30417004620672,30.436894383330127;120.3034628261405,30.437926961979493;120.3039290288695,30.438176700963847;120.30259195679622,30.440024609906224;120.30408766692574,30.440413155873088;120.30130355836438,30.443058764768917;120.29923237012308,30.442553213722572;120.30156356558334,30.43973179220035;120.30092902622987,30.439565442893443;120.30252833026708,30.43564042660769;120.30419638816376,30.436113242313297","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"39.5%"},{"sceneId":"508875","sceneName":"名门天地小区","regionLocation":"120.3097124694589,30.432772716581624;120.31165628928373,30.43358704591638;120.31151626830311,30.43528403710908;120.31036744536999,30.43501369190169;120.3091819680345,30.435027479392023;120.30922057558007,30.434279731077265;120.3097124694589,30.432772716581624","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"39.2%"},{"sceneId":"508734","sceneName":"天星苑","regionLocation":"120.25647686178658,30.386726115218437;120.25785543513436,30.38785929099547;120.25727114370382,30.390706664734758;120.2562543386059,30.39019636768797;120.25646841533644,30.389582257316132;120.25649253697843,30.388912712044835;120.25629160128638,30.388381172530003;120.25592194077083,30.387934503216723;120.25544589969522,30.387599235897085;120.25495500466484,30.387441464737034;120.25528139602353,30.38628107911201;120.25647686178658,30.386726115218437","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.7%"},{"sceneId":"509499","sceneName":"唐公村东","regionLocation":"120.28289068434528,30.49494545900905;120.2834479670691,30.49262379712712;120.28904825275195,30.492412040229443;120.28917937244343,30.49527593046487;120.28389452381333,30.49551365078146;120.28405165420763,30.49500827552785;120.28289068434528,30.49494545900905","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.7%"},{"sceneId":"509503","sceneName":"唐公村西","regionLocation":"120.27631071991154,30.49920624819962;120.27635004814692,30.49606130057545;120.27816515720644,30.495948925286427;120.27800048887534,30.495182432994106;120.27635680893142,30.495333106027292;120.27638173926675,30.492908467372008;120.27940621735188,30.492786803637827;120.28048787221917,30.497064047433067;120.2795755376881,30.497135002728342;120.27927178044925,30.49811180675761;120.2807303888165,30.497996771184482;120.28099824541397,30.499086801588884;120.27631071991154,30.49920624819962","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.7%"},{"sceneId":"508872","sceneName":"星育佳园","regionLocation":"120.30451965642176,30.432776384481425;120.30574694674338,30.433011279953632;120.30599899966869,30.432486185065603;120.306754210927,30.432600463990216;120.30654210684968,30.433800780746285;120.30421728996593,30.433484854884064;120.30451965642176,30.432776384481425","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.7%"},{"sceneId":"509166","sceneName":"凯文杭庄","regionLocation":"120.28992690194086,30.433530685116743;120.29058611981242,30.43226432799101;120.29181462991505,30.432687230589934;120.2920591938734,30.432066522426915;120.29484535663394,30.432921983281492;120.29390598823987,30.43468712746168;120.28992690194086,30.433530685116743","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.5%"},{"sceneId":"509155","sceneName":"上环桥二期","regionLocation":"120.2759021246077,30.42177475227351;120.27935147447234,30.42406925291691;120.27551631496588,30.429926752076675;120.27162095976124,30.42805053468026;120.2759021246077,30.42177475227351","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.4%"},{"sceneId":"508990","sceneName":"胡姬花园","regionLocation":"120.31162950780715,30.41274383951465;120.31449107639999,30.41390339356628;120.31398645805336,30.41532343777346;120.31084824834905,30.414103020479406;120.31162950780715,30.41274383951465","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.4%"},{"sceneId":"509151","sceneName":"绿城蓝庭西区","regionLocation":"120.27923229942047,30.431718778427932;120.27708635461524,30.4350041133651;120.272167042339,30.432548905199244;120.27443403055,30.429411603168486;120.27923229942047,30.431718778427932","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.3%"},{"sceneId":"508614","sceneName":"康城一品","regionLocation":"120.29831346957648,30.40694608404906;120.30093199116139,30.408098736543888;120.30043382480713,30.409191786381623;120.3005802011746,30.40988453694154;120.30122300190114,30.410456767864268;120.2971584325068,30.410756260341376;120.29557513425286,30.410006589352612;120.29831346957648,30.40694608404906","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.2%"},{"sceneId":"508665","sceneName":"黄鹤山居","regionLocation":"120.26512389213258,30.406590327616694;120.2658045236528,30.404034958706447;120.26820511967453,30.405126840341058;120.26767572541414,30.407126673534027;120.26512389213258,30.406590327616694","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.0%"},{"sceneId":"509316","sceneName":"双林社区","regionLocation":"120.33630967201259,30.44647492167144;120.33827079990816,30.450303805597002;120.32944223534908,30.44863802242956;120.33003612872079,30.445882368470034;120.33474391117201,30.44677984925197;120.33630967201259,30.44647492167144","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"38.0%"},{"sceneId":"508924","sceneName":"藕花苑小区","regionLocation":"120.30510697050495,30.421572582169624;120.30770184488904,30.42246873386176;120.30684707450907,30.423680249302706;120.30458285454804,30.422265143847717;120.30510697050495,30.421572582169624","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.9%"},{"sceneId":"508825","sceneName":"九悦印象","regionLocation":"120.31492660144437,30.422220803565775;120.31661011559486,30.422806691509827;120.31525253793019,30.423911922339535;120.31463783680736,30.425339502149445;120.31380873771077,30.42460206836396;120.31492660144437,30.422220803565775","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.8%"},{"sceneId":"508815","sceneName":"文明小区","regionLocation":"120.31436294702856,30.434733488731492;120.31426781637781,30.435683296983726;120.31349118037998,30.435576462767354;120.31354325101148,30.434925657760832;120.31290437400482,30.43485676183248;120.31295384689508,30.434138361041438;120.31436294702856,30.434733488731492","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.7%"},{"sceneId":"508750","sceneName":"擎天半岛","regionLocation":"120.27748632579107,30.403695748734258;120.27934502559334,30.40447045328745;120.27824585363713,30.406702687282056;120.27897460950658,30.406965602521712;120.27876010008848,30.407296367177256;120.27799708647926,30.40721166769181;120.27673670355864,30.406807841777734;120.27488960773465,30.406067970643644;120.27748632579107,30.403695748734258","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.7%"},{"sceneId":"509177","sceneName":"月欣花苑","regionLocation":"120.283721661639,30.429203605218465;120.28562751438466,30.429918080831797;120.28339901859216,30.433395750814206;120.28156854584988,30.432661397470028;120.283721661639,30.429203605218465","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.6%"},{"sceneId":"508756","sceneName":"天泉苑","regionLocation":"120.25128029604248,30.3885263936054;120.25242951370127,30.388766842433164;120.2523523570964,30.389194655227378;120.2524747978541,30.389761299267395;120.25271331348173,30.390184815638772;120.25307813366109,30.390578438345447;120.25243755721347,30.392876006347027;120.25018839210739,30.39240641220342;120.25128029604248,30.3885263936054","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.4%"},{"sceneId":"509471","sceneName":"五杭村","regionLocation":"120.28427707376191,30.50083766291631;120.2931355769869,30.500620282590717;120.29311034048736,30.50463384289032;120.28690384321004,30.50461920744619;120.28690261822369,30.502644752697936;120.2857852333543,30.502707590032216;120.28592583622405,30.504613699197872;120.28511058815381,30.50460944612615;120.28485073314528,30.50345677886214;120.28427707376191,30.50083766291631","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.3%"},{"sceneId":"508852","sceneName":"进修弄小区","regionLocation":"120.3119187615141,30.43059061039362;120.31225488798998,30.428982694126795;120.31407571763906,30.428709099419674;120.31401008570445,30.429622409079112;120.3154097936331,30.429707644463694;120.31526475135185,30.431003606188412;120.3119187615141,30.43059061039362","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.1%"},{"sceneId":"509610","sceneName":"梅林小区","regionLocation":"120.26032205230665,30.431398469210574;120.25881442388932,30.431949459575105;120.25805145205031,30.432224138080215;120.25787064472138,30.431835912416922;120.2560873238943,30.432088839569918;120.25563222062071,30.43103567043145;120.25525067213006,30.43028809378678;120.25632915449273,30.428520447997354;120.25803449823769,30.42958809721106;120.26032205230665,30.431398469210574","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"37.1%"},{"sceneId":"508915","sceneName":"风清苑小区","regionLocation":"120.30399587940457,30.4318492563785;120.30480990813514,30.432092449583507;120.30422009161218,30.433483093927297;120.30368122173006,30.433060837240593;120.3032479979389,30.432319929820753;120.30399587940457,30.4318492563785","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.8%"},{"sceneId":"509479","sceneName":"东华链条集团公司北区宿舍","regionLocation":"120.2900333665414,30.488899858450992;120.28992266759309,30.4862583652973;120.29292421620791,30.48621347380727;120.29297001299825,30.487119044891266;120.29139027339615,30.48713679735158;120.29159818173837,30.488895322949478;120.2900333665414,30.488899858450992","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":1,"kdSzl":"36.7%"},{"sceneId":"508948","sceneName":"广宇鼎悦府","regionLocation":"120.3176684100082,30.406347490851694;120.31653593680682,30.408800074103823;120.31554808249324,30.408473449321914;120.31574808329442,30.407269155299044;120.31605051123107,30.40536759435809;120.3176684100082,30.406347490851694","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.6%"},{"sceneId":"509528","sceneName":"螺蛳桥村","regionLocation":"120.31426327859722,30.499479979308543;120.30995066268387,30.499953810274928;120.30923116737658,30.497121685181586;120.3038692824237,30.497088882961815;120.30270860057287,30.492046213336497;120.30820541140947,30.492029386299354;120.30760329914533,30.486229763611416;120.31200850877767,30.48548276864998;120.3125681515755,30.487807975983095;120.31185393441056,30.487971239207553;120.31231015213437,30.489408248178634;120.31534550196518,30.488601725892334;120.31778648228995,30.491804036644876;120.31349363835267,30.49219865951834;120.31426327859722,30.499479979308543","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.3%"},{"sceneId":"508956","sceneName":"雍熙山","regionLocation":"120.30198963418027,30.43024787959473;120.30066065899206,30.42815036517424;120.30216480366748,30.42699017554967;120.30400049571799,30.428415402263514;120.30198963418027,30.43024787959473","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.2%"},{"sceneId":"509041","sceneName":"新月花园小区","regionLocation":"120.29375324072318,30.43497174847761;120.29506530347648,30.432500226928866;120.29730894084399,30.43362696094815;120.2959469270859,30.436312909787574;120.29375324072318,30.43497174847761","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.2%"},{"sceneId":"508932","sceneName":"瓶山公寓","regionLocation":"120.3084161306287,30.425241104417907;120.30876210519783,30.42452195483145;120.30926104611216,30.424681028013257;120.3085684864258,30.426377909688973;120.30737920126911,30.425999002375352;120.30784118983989,30.425048948233137;120.3084161306287,30.425241104417907","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.1%"},{"sceneId":"509179","sceneName":"蓝江晶品阁","regionLocation":"120.28394615302811,30.435451048833144;120.28525458060803,30.435934379906502;120.28431596114078,30.437674521213573;120.28306096401671,30.437209545261283;120.28394615302811,30.435451048833144","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.1%"},{"sceneId":"508476","sceneName":"高地村","regionLocation":"120.32507114864151,30.38013460531996;120.3242261438661,30.380075726383726;120.32412954441813,30.382488025332357;120.32569827305923,30.382775923494357;120.32560237847105,30.38405264009872;120.32514646283941,30.384065644912464;120.3246588429587,30.38539492961042;120.32289595052715,30.38490243442599;120.32382140566838,30.374259232516906;120.33193040647471,30.374871625619324;120.32992118278509,30.381825707359727;120.32776083162544,30.381234527072696;120.32507114864151,30.38013460531996","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.1%"},{"sceneId":"509353","sceneName":"费庄社区","regionLocation":"120.32055160838271,30.461129443887785;120.32300023118525,30.461528903560787;120.32130286670194,30.46397974606308;120.33686490497777,30.466345336230876;120.33697947989766,30.467397758869787;120.33794006396167,30.46855108950588;120.33844028325062,30.470018712326628;120.33700127331025,30.47405829718605;120.33632878737762,30.473405338274535;120.33474961454225,30.473365967953523;120.33477910507852,30.47553414450145;120.32358640201059,30.473058625159634;120.32316948263811,30.4703948747276;120.31894082086622,30.469061249893475;120.32055160838271,30.461129443887785","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"36.0%"},{"sceneId":"508518","sceneName":"联胜安置房","regionLocation":"120.31411711885862,30.386893067522347;120.31406883542343,30.383644930521363;120.31628813562232,30.38395612968721;120.31569731913561,30.387062155839;120.31411711885862,30.386893067522347","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"35.9%"},{"sceneId":"508939","sceneName":"余杭区南苑街道新丰村","regionLocation":"120.29489670818982,30.410767757481125;120.29557881631341,30.410015607583272;120.30089391549296,30.412534879466914;120.30031235217291,30.41358425071202;120.303047826231,30.41494810867162;120.30452764670741,30.41560199200788;120.30514994748353,30.414551739952554;120.306477170642,30.41520648783339;120.30571253934872,30.416474586615635;120.30613956139264,30.4166857272722;120.30570652237338,30.4174632979518;120.30650448974453,30.418026247520366;120.30592104378907,30.41875912649413;120.29489670818982,30.410767757481125","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"35.6%"},{"sceneId":"508653","sceneName":"太平家园","regionLocation":"120.27001003047538,30.40401991792463;120.27489085900255,30.406066878550423;120.27457188683566,30.407988086809116;120.26938489804026,30.405659055157756;120.27001003047538,30.40401991792463","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"35.6%"},{"sceneId":"508874","sceneName":"邱山小区","regionLocation":"120.30252268067123,30.43111738093356;120.30306286360917,30.43006876358213;120.30242497294755,30.429857724541325;120.30379700018584,30.428601710815705;120.30437928114821,30.428072472125365;120.30553672183574,30.43034786154702;120.30480308843502,30.432087131917687;120.30399953641205,30.431852872456417;120.30324595756636,30.432318279602583;120.30252268067123,30.43111738093356","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"35.5%"},{"sceneId":"508833","sceneName":"野风珑园","regionLocation":"120.32790816944946,30.434032095984445;120.32784732996663,30.434950544167574;120.32106427327743,30.431067388488554;120.32133055653674,30.430372975206936;120.32790816944946,30.434032095984445","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"35.5%"},{"sceneId":"509059","sceneName":"中铁逸都","regionLocation":"120.29482182636441,30.444560869222055;120.29694969961297,30.44200508546605;120.30130220765194,30.443055261753013;120.2985110323134,30.44576083608222;120.29482182636441,30.444560869222055","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"35.4%"},{"sceneId":"508709","sceneName":"爵士花园","regionLocation":"120.2515179182588,30.385632466293117;120.2501044107676,30.383898342389333;120.25250536185388,30.382950765715698;120.25315799892009,30.38497279262917;120.25232718355603,30.3852328323648;120.2515179182588,30.385632466293117","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.8%"},{"sceneId":"509073","sceneName":"东湖春天","regionLocation":"120.3084511941111,30.444844259362906;120.30887381753854,30.44342927178027;120.30980810664512,30.443612268938423;120.30937229337084,30.445076616385297;120.3084511941111,30.444844259362906","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.8%"},{"sceneId":"509523","sceneName":"运河丽园三期","regionLocation":"120.30448730225606,30.482863342256106;120.30473044457754,30.482868013643532;120.3047619218298,30.482454582057823;120.30661591031125,30.482560529204964;120.30638767000974,30.484428089810343;120.30440178441489,30.484383670013106;120.30448730225606,30.482863342256106","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.8%"},{"sceneId":"509537","sceneName":"运河丽园一期","regionLocation":"120.3019788510058,30.482284874316786;120.30476294519838,30.482456192733142;120.30473548910864,30.48286315532279;120.30448894994667,30.482862084832945;120.30439629553042,30.484380025971433;120.30175497567213,30.484247694802153;120.3019788510058,30.482284874316786","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.8%"},{"sceneId":"508713","sceneName":"爱尚公寓","regionLocation":"120.25127159530244,30.38852036413076;120.2516156104493,30.387620794399016;120.25247169345194,30.38679364671655;120.25322318244724,30.38771737551292;120.25292824110682,30.38792977538178;120.25258912552525,30.388296509439282;120.25242752190249,30.388764940437667;120.25127159530244,30.38852036413076","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.6%"},{"sceneId":"508791","sceneName":"梅堰小区","regionLocation":"120.31827463951694,30.435190062065026;120.31889368617597,30.435213249906926;120.3189672057851,30.434364557380402;120.31778252942458,30.43430090712997;120.3177246979198,30.434748484063068;120.3157224281092,30.434538627298124;120.31576365721892,30.433836109674523;120.3149521135644,30.43375297926912;120.3153234341816,30.43046832973981;120.32101061159108,30.431210270400925;120.32079529167856,30.431781173181353;120.31659903527452,30.431264759105566;120.31638600445224,30.43253596903444;120.31802993758036,30.432772494716225;120.31797898073513,30.433057567460168;120.32020936350301,30.433323541151342;120.31950554491064,30.43515489001855;120.31928829000064,30.436868535223105;120.31803697536364,30.436738444583426;120.31827463951694,30.435190062065026","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.5%"},{"sceneId":"508650","sceneName":"华庭嘉苑","regionLocation":"120.27000772922658,30.404019490638017;120.2693893455974,30.405653741560165;120.26580451277925,30.40403582985543;120.26630534800044,30.40245801442131;120.27000772922658,30.404019490638017","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.1%"},{"sceneId":"508393","sceneName":"怡丰城","regionLocation":"120.30259328500479,30.37383578905977;120.30189383464423,30.371369226954673;120.30448585921084,30.37072933295583;120.30546322409373,30.37318509139625;120.30259328500479,30.37383578905977","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.0%"},{"sceneId":"508881","sceneName":"九曲营小区","regionLocation":"120.30943164372759,30.428674615465145;120.31225671800252,30.428987508346847;120.31191763050553,30.430594536797564;120.30905141757724,30.430182679350715;120.30943164372759,30.428674615465145","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"34.0%"},{"sceneId":"509218","sceneName":"万陈花苑","regionLocation":"120.27064707827378,30.445462336768387;120.27238308515905,30.44262440310337;120.27628635452695,30.444133972680504;120.2743612593846,30.44705059796032;120.27064707827378,30.445462336768387","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.9%"},{"sceneId":"509062","sceneName":"奥坦斯布艺公司宿舍","regionLocation":"120.30420023992848,30.45149252857788;120.30446884416136,30.450594926428217;120.3058746261676,30.45094503354202;120.30566324822944,30.45168274213486;120.30420023992848,30.45149252857788","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.7%"},{"sceneId":"508828","sceneName":"嘉利花园","regionLocation":"120.31850843167999,30.423493891812324;120.31886805687053,30.422672313233697;120.31806444031704,30.422377610533797;120.3185349749198,30.421093712187584;120.32028367864766,30.42195766123334;120.31939094957129,30.423806123464317;120.31850843167999,30.423493891812324","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.7%"},{"sceneId":"508711","sceneName":"蓝调公寓","regionLocation":"120.25151892603746,30.38563307884628;120.25233340805602,30.385231836788957;120.25317020250282,30.384967425267806;120.2542068319465,30.38482910345233;120.25565733050843,30.3849414774689;120.25528129388445,30.386280273818628;120.25380147184337,30.38626010230948;120.2524729482024,30.38678530874662;120.25151892603746,30.38563307884628","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.7%"},{"sceneId":"509180","sceneName":"赞成香颂","regionLocation":"120.28339263071506,30.43337961339539;120.28602161618232,30.434436344182934;120.28525260755467,30.435930865479136;120.28241769640098,30.434892953413026;120.28339263071506,30.43337961339539","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.6%"},{"sceneId":"508735","sceneName":"紫韵公寓","regionLocation":"120.25565826144992,30.38494135146481;120.2569963941359,30.385402795444598;120.25819964360274,30.386143017486404;120.25785543513436,30.38785929099547;120.25647844771694,30.386727490228196;120.25528139602353,30.38628107911201;120.25565826144992,30.38494135146481","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.6%"},{"sceneId":"509178","sceneName":"莱茵知己","regionLocation":"120.28460218274655,30.43152182278028;120.28702747739015,30.432559232765744;120.28603750670388,30.434439682691895;120.28339932688613,30.43338495082722;120.28460218274655,30.43152182278028","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.3%"},{"sceneId":"509322","sceneName":"长树村","regionLocation":"120.327408075555,30.425519392084833;120.33904104073852,30.42924359609065;120.33885082990406,30.43377974011342;120.34309446319982,30.43558761443474;120.34210212831425,30.43903174773461;120.34680600980073,30.439841509549257;120.34650262046937,30.44184843617354;120.33050258188507,30.4388187513798;120.32765995742167,30.437784941652904;120.32791102220646,30.434030633482447;120.327408075555,30.425519392084833","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.2%"},{"sceneId":"508857","sceneName":"星火住宅小区二期","regionLocation":"120.30825960722109,30.43377937475639;120.30800180945006,30.435204229934055;120.30631011800668,30.43516759613239;120.30658436702996,30.433567319716904;120.30825960722109,30.43377937475639","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"33.1%"},{"sceneId":"509529","sceneName":"明智村","regionLocation":"120.31804874013253,30.484471930539335;120.3175793518798,30.481142815524425;120.3180322881743,30.478441166953143;120.32328671792796,30.479561602677858;120.32384266097323,30.47701640600707;120.3348664616737,30.47886521981251;120.33493987358311,30.481816784544222;120.33257302791812,30.481717630041036;120.33222170865416,30.48727606248796;120.33330498602211,30.487327803102534;120.33330035020131,30.48782872528083;120.32457334382913,30.48891737968111;120.32278659783651,30.493107027500745;120.31843908173818,30.494402966722912;120.31778918908715,30.49180325109875;120.31534499746431,30.48860054164141;120.31482984989029,30.4887377327442;120.31458761416494,30.487621899557507;120.31379557552118,30.487737357630646;120.31358751944873,30.486949402772638;120.31242587350394,30.4871886198144;120.31199995622656,30.48549170979361;120.31804874013253,30.484471930539335","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":1,"kdSzl":"33.1%"},{"sceneId":"508712","sceneName":"天水苑","regionLocation":"120.25379696697476,30.386258005030417;120.25528139602353,30.38628107911201;120.2549566838509,30.387440387869074;120.25437855052813,30.387402929593282;120.25379529106107,30.387493765512293;120.25322348932801,30.387715404377165;120.25246460576427,30.386792169128388;120.25379696697476,30.386258005030417","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"32.9%"},{"sceneId":"509023","sceneName":"荷花塘小区","regionLocation":"120.29633647331336,30.435540018646346;120.29730941873387,30.43362515074215;120.30082082332822,30.434657552951112;120.29964447697404,30.43700022362039;120.29633647331336,30.435540018646346","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"32.8%"},{"sceneId":"508931","sceneName":"香山人家","regionLocation":"120.3045815440359,30.42226548358569;120.30544223105062,30.422800735915008;120.3049590752326,30.424118948348664;120.30418807214554,30.425545782996274;120.30300574916306,30.424337384050904;120.3045815440359,30.42226548358569","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"32.8%"},{"sceneId":"508771","sceneName":"五月花城小区","regionLocation":"120.27489083757774,30.406067846347835;120.2767420556005,30.406809768457446;120.27781322754302,30.407526267764382;120.27716588400412,30.408962902927;120.27457990075395,30.407978380371024;120.27489083757774,30.406067846347835","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"32.7%"},{"sceneId":"508657","sceneName":"惠都家园","regionLocation":"120.27289460546463,30.40522934759588;120.27322589567586,30.40398426457051;120.27396033251321,30.402611553679904;120.27247224844024,30.402071268211966;120.27365513839591,30.400327677973177;120.27557522524202,30.400990816385367;120.27748638185037,30.40369434935411;120.27489129286025,30.40606591938553;120.27289460546463,30.40522934759588","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"32.1%"},{"sceneId":"508891","sceneName":"方家弄","regionLocation":"120.30964481917317,30.42780065950265;120.30728573300854,30.426995447663437;120.30697114697308,30.4268306033339;120.30738004106846,30.42599962611993;120.30989226077679,30.42680506956067;120.30964481917317,30.42780065950265","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"32.0%"},{"sceneId":"508591","sceneName":"良熟新苑","regionLocation":"120.29054562893442,30.405899287108074;120.28888278167443,30.40384567643223;120.29069602812358,30.402144176410026;120.29195084564013,30.402962048824296;120.29054562893442,30.405899287108074","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"32.0%"},{"sceneId":"509597","sceneName":"屯里村","regionLocation":"120.23362116659645,30.421849275416843;120.2378725817386,30.41938250028509;120.2495894004703,30.425058635379596;120.24661817269357,30.430075995044685;120.24822100508493,30.43268500183478;120.24902593369848,30.435022836256078;120.2440079805086,30.43257320713764;120.23191623453778,30.430202178101784;120.23362116659645,30.421849275416843","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"31.7%"},{"sceneId":"509181","sceneName":"万宝城","regionLocation":"120.28723013517055,30.438761268472454;120.28884822353778,30.435627906573682;120.2926184638628,30.437109375519547;120.29098044010101,30.440187641420152;120.28723013517055,30.438761268472454","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"31.5%"},{"sceneId":"508629","sceneName":"华艺星座","regionLocation":"120.25651599871696,30.399819504658417;120.25714399229167,30.398595564436445;120.26108900441129,30.400258771668355;120.26050349979185,30.401634866162276;120.25651599871696,30.399819504658417","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"31.4%"},{"sceneId":"508737","sceneName":"天月苑","regionLocation":"120.25490427489873,30.390942046698555;120.25561108699516,30.390635518296918;120.25625633514976,30.39019676536749;120.25727116525678,30.3907071156614;120.25650278927067,30.39366986152353;120.25425270036865,30.393261800137378;120.25490427489873,30.390942046698555","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"31.3%"},{"sceneId":"508607","sceneName":"梧桐蓝山","regionLocation":"120.29170893575424,30.401201147663166;120.29389494642065,30.402279304333973;120.29491232759149,30.402292494134016;120.29490202661395,30.403146076155924;120.29393060521474,30.404244461386387;120.29069602812358,30.402144176410026;120.29170893575424,30.401201147663166","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"31.3%"},{"sceneId":"508610","sceneName":"东海水景城","regionLocation":"120.29861320377664,30.40527429911864;120.29928402821848,30.4053664802099;120.29973731889956,30.404808546769463;120.30028452170698,30.40462832199399;120.30101509930246,30.404786154938897;120.30283855371576,30.40536198652249;120.30321650534123,30.404494098034878;120.30495311250444,30.40508442661068;120.30550445157635,30.410133036909123;120.29831239231547,30.406945716828844;120.29861320377664,30.40527429911864","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"30.9%"},{"sceneId":"509020","sceneName":"世纪嘉园","regionLocation":"120.32108905473548,30.416362640086874;120.32228075831364,30.413903268902764;120.32373652964623,30.414682424595018;120.32266882340262,30.416951663605584;120.32108905473548,30.416362640086874","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"30.9%"},{"sceneId":"509087","sceneName":"华立和郡","regionLocation":"120.31093206733279,30.439270419789455;120.30983261169271,30.43897690920849;120.310063665628,30.438086756201503;120.3096271054297,30.437972171739055;120.30978576555903,30.437471482946968;120.31126751793624,30.437660788786236;120.31093206733279,30.439270419789455","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"30.9%"},{"sceneId":"508652","sceneName":"星桥桂花城","regionLocation":"120.27068325263622,30.40143281276519;120.27395715341487,30.402605910454216;120.27322935785311,30.40400006772895;120.27289460546463,30.40522934759588;120.26975831251167,30.403914138044257;120.27068325263622,30.40143281276519","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"30.9%"},{"sceneId":"509196","sceneName":"东夏东港三期","regionLocation":"120.27768751111071,30.435773427414553;120.27734090395887,30.436538850605036;120.27993220515778,30.43865115917684;120.27883809771245,30.44026676666055;120.27496012348742,30.438500340123326;120.27686213340537,30.435374377205815;120.27768751111071,30.435773427414553","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"30.9%"},{"sceneId":"508885","sceneName":"东湖公寓","regionLocation":"120.31309826234583,30.426325979253907;120.31120469745723,30.425422133409988;120.31162687120563,30.42448872774231;120.31356981089094,30.425178992353647;120.31309826234583,30.426325979253907","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":0,"kdSzl":"30.7%"},{"sceneId":"509518","sceneName":"双桥村","regionLocation":"120.30566956105238,30.50480054697104;120.30698939891204,30.50671347430832;120.31290163188018,30.507820868320337;120.3089004398951,30.51040311643634;120.30903146997639,30.511670802322485;120.29748342449359,30.517809472184865;120.29326762603385,30.517565270943663;120.29333594830189,30.513390807708305;120.2868825628547,30.513763844638504;120.282297987417,30.510273085609388;120.28132329985273,30.50460603643113;120.30566956105238,30.50480054697104","hasContract":null,"isLowSzl":0,"isLowFgl":1,"poorCove":1,"kdSzl":"30.2%"},{"sceneId":"509055","sceneName":"临东家园","regionLocation":"120.32171295527375,30.44066245196281;120.32237961920185,30.438316432323553;120.32747479854024,30.44071098681585;120.32710574815925,30.441764124063027;120.32171295527375,30.44066245196281","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"29.7%"},{"sceneId":"508832","sceneName":"赞成龙尚府","regionLocation":"120.32383971320135,30.430092984809537;120.32616533629577,30.43033748150107;120.3247166275714,30.432248234304158;120.3234593418176,30.43155587782051;120.32383971320135,30.430092984809537","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"29.7%"},{"sceneId":"508858","sceneName":"东湖小区","regionLocation":"120.31100440373675,30.431271163661012;120.31173258784932,30.43129964312408;120.31164618488712,30.43203675520668;120.31104821248721,30.431971050245146;120.31100440373675,30.431271163661012","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"29.3%"},{"sceneId":"508633","sceneName":"紫桂公寓","regionLocation":"120.2613399413598,30.405774393067933;120.26243630388124,30.402518312059726;120.2647907867355,30.403582908680818;120.26397789677527,30.40634564091739;120.2613399413598,30.405774393067933","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"29.3%"},{"sceneId":"509216","sceneName":"众安理想湾","regionLocation":"120.27496012348742,30.438500340123326;120.27884006475543,30.440262653117863;120.27628579839686,30.44413343845282;120.27238520080002,30.442625254226236;120.27496012348742,30.438500340123326","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"29.0%"},{"sceneId":"508873","sceneName":"百姓弄小区","regionLocation":"120.30553951363946,30.430340118305274;120.30692639265379,30.431600041301483;120.30675215959148,30.4325996605955;120.30599889151476,30.43248330936186;120.30574277619979,30.433012876021298;120.30451977529155,30.432776900021096;120.30553951363946,30.430340118305274","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.8%"},{"sceneId":"508655","sceneName":"汤家锦绣公寓一区","regionLocation":"120.25478471282918,30.4031651331385;120.25834679099833,30.40513146282299;120.25622405549205,30.40784194389825;120.25327823698684,30.40608368384112;120.25478471282918,30.4031651331385","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.8%"},{"sceneId":"508641","sceneName":"美好桂花金座","regionLocation":"120.25829899935175,30.396344454781197;120.26099222780925,30.3970260719812;120.26122646716566,30.396381911690835;120.26214566484013,30.396601380189743;120.26158546692656,30.398543990443233;120.25766838696546,30.39755287302926;120.25829899935175,30.396344454781197","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.7%"},{"sceneId":"509582","sceneName":"龙安村","regionLocation":"120.28811611013212,30.478476800793665;120.27794799887548,30.47768975652028;120.2776350049816,30.466220024962762;120.28828080782121,30.468106093466943;120.28811611013212,30.478476800793665","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":1,"kdSzl":"28.5%"},{"sceneId":"509032","sceneName":"莱茵旺角七号","regionLocation":"120.31306394824783,30.437911943051038;120.31269730655362,30.439489801221708;120.31093277055682,30.43926962493844;120.31126800865441,30.43766135702849;120.31306394824783,30.437911943051038","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.4%"},{"sceneId":"508617","sceneName":"美好桂花星座","regionLocation":"120.26764387110896,30.390397586675405;120.26952388512099,30.38917240163859;120.27040148077074,30.390182519675488;120.26968169167128,30.392446074725836;120.26764387110896,30.390397586675405","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.4%"},{"sceneId":"508708","sceneName":"天风苑","regionLocation":"120.25574068845789,30.396652009129195;120.25396593875791,30.39748731278527;120.25320826982309,30.396968727338937;120.25425346159547,30.393261686708154;120.25650779915699,30.393672946080667;120.25574068845789,30.396652009129195","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.3%"},{"sceneId":"509616","sceneName":"书香名邸","regionLocation":"120.27355809175806,30.41904765452182;120.27467650397297,30.42035321238166;120.27313154177465,30.4216531843537;120.27184807113984,30.420700168561634;120.27355809175806,30.41904765452182","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.3%"},{"sceneId":"509173","sceneName":"临城花苑","regionLocation":"120.26684950082706,30.435042419544484;120.2694758294281,30.43120363380934;120.26978693323757,30.431346816829127;120.26819649904174,30.435922535558078;120.26684950082706,30.435042419544484","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"28.2%"},{"sceneId":"509512","sceneName":"戚家桥村","regionLocation":"120.30266550874104,30.52221161716519;120.29748293298354,30.51780964211022;120.30903035589856,30.511669789367687;120.30918203411942,30.513167442883468;120.31432521586949,30.511657745280033;120.31953401626266,30.52593734877529;120.31589229914275,30.525953617470694;120.31428766001915,30.526530160974215;120.30628155687036,30.525559465438665;120.30614387584721,30.522883325665454;120.30266550874104,30.52221161716519","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":1,"kdSzl":"28.1%"},{"sceneId":"508634","sceneName":"美耀湾","regionLocation":"120.25834764772267,30.405131595239897;120.2605047709855,30.401636337008533;120.26243622030638,30.402515779559273;120.26133809485901,30.405775959591104;120.25834764772267,30.405131595239897","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"27.6%"},{"sceneId":"508819","sceneName":"南苑一区","regionLocation":"120.30817434581341,30.41753707384867;120.3102466193058,30.41863821031981;120.31008611951299,30.4189120806638;120.30870125498413,30.418230091678684;120.3085063172546,30.41882686491441;120.30752922536513,30.418384883285842;120.30817434581341,30.41753707384867","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"27.5%"},{"sceneId":"508953","sceneName":"东湖村","regionLocation":"120.3269894244431,30.42178345527796;120.3261658536764,30.418568176543218;120.33177070995394,30.41709707718456;120.33513322362265,30.41948376599685;120.33519765489433,30.421679538280213;120.3394421728189,30.42237119493988;120.33905496222287,30.429240943982755;120.32740784699865,30.425519157852413;120.3269894244431,30.42178345527796","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":1,"kdSzl":"27.3%"},{"sceneId":"508749","sceneName":"经建绅世郡","regionLocation":"120.2848912998264,30.40995473999503;120.28604048191683,30.41026652536555;120.28717494263664,30.408455896694555;120.28869576535934,30.409016571990573;120.28699025575635,30.41200261959101;120.28429972913136,30.41124644282741;120.2848912998264,30.40995473999503","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"27.0%"},{"sceneId":"508860","sceneName":"水车河弄小区","regionLocation":"120.30601472812052,30.430768656428484;120.30629625058941,30.430325219007933;120.3074707538908,30.430682055414156;120.30758193089754,30.429772003079336;120.3090501945373,30.43018202707441;120.30853317660325,30.432273321715225;120.30693303031431,30.43160168665836;120.30601472812052,30.430768656428484","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"26.7%"},{"sceneId":"509058","sceneName":"绿城莲园","regionLocation":"120.2927540854694,30.443807851897155;120.29394717610641,30.441268031807347;120.29695195689379,30.442005540149264;120.29481985372199,30.444561864510717;120.2927540854694,30.443807851897155","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"26.5%"},{"sceneId":"508820","sceneName":"东海花园","regionLocation":"120.31099171732188,30.41738453519448;120.31291638925481,30.41832977842863;120.31209818366119,30.420481988185497;120.30979624397408,30.419406250478357;120.31099171732188,30.41738453519448","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"26.5%"},{"sceneId":"508808","sceneName":"珑昕泽第","regionLocation":"120.31627906407077,30.430589675070106;120.31664004776165,30.42914339501039;120.31754399824284,30.4279240681189;120.32106159028163,30.431069835405935;120.32100971496732,30.431211269563814;120.31627906407077,30.430589675070106","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"26.3%"},{"sceneId":"509204","sceneName":"易居时代","regionLocation":"120.30664557138753,30.45523299107076;120.30686140081266,30.453777154988142;120.30790459653066,30.453933704029062;120.30763525770347,30.455462439032004;120.30664557138753,30.45523299107076","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"26.1%"},{"sceneId":"509168","sceneName":"顺达花苑东区","regionLocation":"120.28434871489183,30.43770749140493;120.28722777052425,30.438760303193447;120.28484784153794,30.443236172569485;120.28168666189234,30.441668053913677;120.28434871489183,30.43770749140493","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"26.0%"},{"sceneId":"509469","sceneName":"长虹社区","regionLocation":"120.29932245571248,30.492110896507924;120.30248572545158,30.4979918750531;120.3041945521103,30.498493205520802;120.30566777979278,30.504800583352676;120.29309665627164,30.50464409720974;120.29313964098736,30.500607586254485;120.28658576272638,30.500779458107253;120.28620602926362,30.495406489458517;120.28918639081645,30.49526302294443;120.28904680083312,30.4924081583298;120.29932245571248,30.492110896507924","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"25.9%"},{"sceneId":"508635","sceneName":"桐鹤名苑小区","regionLocation":"120.26586445559118,30.388605832021128;120.2678261179516,30.387377061989195;120.26953165802402,30.38916704928558;120.2676450037618,30.390388740199636;120.26586445559118,30.388605832021128","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"25.1%"},{"sceneId":"508880","sceneName":"天都花园","regionLocation":"120.31031925084137,30.433025345654524;120.30853255349676,30.432274909048814;120.30905033514253,30.430183114171065;120.31106966101252,30.43047336449367;120.31098703392786,30.431115834249223;120.31074013016739,30.431090340107247;120.31031925084137,30.433025345654524","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"25.1%"},{"sceneId":"508731","sceneName":"周杨社区","regionLocation":"120.25703716402259,30.380025913371785;120.2562001020219,30.383008617436943;120.25250169636085,30.38295210489911;120.25010679620691,30.38389763650103;120.24581257134399,30.378620264245512;120.25271535078322,30.373540916405062;120.25385661158988,30.366345991608473;120.26400435084042,30.376641999807404;120.25905254918604,30.381942932635862;120.25703716402259,30.380025913371785","hasContract":null,"isLowSzl":1,"isLowFgl":1,"poorCove":0,"kdSzl":"25.0%"}]});
}
/**
 * 承包区域-查询列表
 */
if(mockConst.isStatic.base.contractArea.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.list), 'get', function(options) {
		let pageIndex = api.getUrlArg(options.url, 'pageIndex');
		let pageSize = api.getUrlArg(options.url, 'pageSize');
		console.info(pageIndex, pageSize);
		let beginTime = (new Date()).getTime();
		let endTime = (new Date()).getTime();
		return {
			"status": 0,
			"msg": "成功",
			"obj": {
				"pageIndex": pageIndex,
				"pageSize": pageSize,
				"total": 20,
				"list": [{
						"id": "1",
						"name": "承包渠道1",
						"channelName": "渠道1",
						"beginDate": beginTime,
						"endDate": endTime
					},
					{
						"id": "2",
						"name": "承包渠道2",
						"channelName": "渠道2",
						"beginDate": beginTime,
						"endDate": endTime
					},
					{
						"id": "3",
						"name": "承包渠道3",
						"channelName": "渠道3",
						"beginDate": beginTime,
						"endDate": endTime
					},
					{
						"id": "4",
						"name": "承包渠道4",
						"channelName": "渠道4",
						"beginDate": 1561210799,
						"endDate": 1563802799
					},
					{
						"id": "5",
						"name": "承包渠道5",
						"channelName": "渠道5",
						"beginDate": 1561210799,
						"endDate": 1563802799
					},
					{
						"id": "6",
						"name": "承包渠道6",
						"channelName": "渠道6",
						"beginDate": 1561210799,
						"endDate": 1563802799
					},
					{
						"id": "7",
						"name": "承包渠道7",
						"channelName": "渠道7",
						"beginDate": 1561210799,
						"endDate": 1563802799
					},
					{
						"id": "8",
						"name": "承包渠道8",
						"channelName": "渠道8",
						"beginDate": 1561210799,
						"endDate": 1563802799
					},
					{
						"id": "9",
						"name": "承包渠道9",
						"channelName": "渠道9",
						"beginDate": 1561210799,
						"endDate": 1563802799
					},
					{
						"id": "10",
						"name": "承包渠道10",
						"channelName": "渠道10",
						"beginDate": 1561210799,
						"endDate": 1563802799
					}
				]
			}
		}
	});
}

/**
 * 承包区域-点状承包列表
 */
if(mockConst.isStatic.base.contractArea.spotSceneList) {
	Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.spotSceneList), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"pageIndex": 1,
			"pageSize": 10,
			"total": 3,
			"list": [{
					"sceneId": "1",
					"sceneName": "xx小区",
					"sceneType": 1,
					"sceneTypeName": "省高价值小区",
					"sceneLocation": "",
					"coverHouseholds": 245,
					"accessHouseholds": 210,
					"othernetBroadbandUsers": 210
				},
				{
					"sceneId": "2",
					"sceneName": "xx小区",
					"sceneType": 2,
					"sceneTypeName": "市高价值小区",
					"sceneLocation": "",
					"coverHouseholds": 245,
					"accessHouseholds": 210,
					"othernetBroadbandUsers": 210
				},
				{
					"sceneId": "3",
					"sceneName": "xx小区",
					"sceneType": 3,
					"sceneTypeName": "高价值商区",
					"sceneLocation": "",
					"coverHouseholds": 245,
					"accessHouseholds": 210,
					"othernetBroadbandUsers": 210
				}
			]
		}
	});
}

/**
 * 承包区域-连片承包列表
 */
if(mockConst.isStatic.base.contractArea.blockSceneList) {
	Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.blockSceneList), 'get',
    {"status":0,"msg":null,"obj":{"pageIndex":1,"pageSize":10,"total":10,"list":[{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001819","REGION_NAME_5":"奔跑队1","REGION_ID_6":"45379","REGION_NAME_6":"王纸纺村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"69","KD_YH":"49","KD_SZL":".0909","KD_FG":"308","KD_SZYH":"28","AREA_ID":"45379","AREA_NAME":"王纸纺村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001819","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.761577,29.472007;119.761217,29.472109;119.761182,29.471276;119.761119,29.468886;119.759376,29.464507;119.762248,29.463221;119.764404,29.462152;119.762751,29.460328;119.762535,29.458818;119.763613,29.457246;119.764188,29.454289;119.767853,29.451396;119.768787,29.449509;119.772165,29.449383;119.77468,29.44737;119.778777,29.444665;119.780501,29.441898;119.780789,29.44108;119.787688,29.44303;119.791281,29.442841;119.792143,29.441583;119.791856,29.445735;119.789556,29.45039;119.786969,29.453786;119.779208,29.458378;119.775543,29.462592;119.775429,29.465812;119.777037,29.46799;119.77727,29.468296;119.773632,29.468328;119.76809,29.470568;119.764757,29.471512","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":1,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001819","REGION_NAME_5":"奔跑队1","REGION_ID_6":"52943","REGION_NAME_6":"童坞村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"66","KD_YH":"11","KD_SZL":".0264","KD_FG":"455","KD_SZYH":"12","AREA_ID":"52943","AREA_NAME":"童坞村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001819","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.744522,29.493037;119.747827,29.494861;119.751852,29.495301;119.755661,29.491591;119.759685,29.491088;119.759972,29.493415;119.760979,29.494861;119.762703,29.494924;119.763566,29.494295;119.766297,29.492031;119.770896,29.492534;119.774992,29.481216;119.781244,29.476814;119.782035,29.473984;119.78261,29.473167;119.780598,29.472475;119.779448,29.471909;119.777435,29.468262;119.773627,29.468262;119.767734,29.470651;119.765075,29.471532;119.761266,29.471972;119.761122,29.469016;119.759398,29.464551;119.755229,29.465872;119.752355,29.467884;119.74524,29.470085;119.743875,29.470966;119.742653,29.473104;119.744737,29.48675","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":2,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001819","REGION_NAME_5":"奔跑队1","REGION_ID_6":"52944","REGION_NAME_6":"塘波村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"136","KD_YH":"60","KD_SZL":".1792","KD_FG":"318","KD_SZYH":"57","AREA_ID":"52944","AREA_NAME":"塘波村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001819","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.739599,29.458387;119.739635,29.458985;119.740282,29.459111;119.745348,29.459173;119.755158,29.457255;119.759218,29.456909;119.762811,29.454708;119.764248,29.45433;119.767267,29.451751;119.767878,29.451405;119.768812,29.449456;119.768452,29.4476;119.76874,29.446436;119.764033,29.445713;119.75814,29.443794;119.749121,29.442284;119.746785,29.446153;119.740892,29.446468;119.744593,29.448921;119.743659,29.450682","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":3,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44134","REGION_NAME_6":"上赵村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"2","KD_YH":"74","KD_SZL":".3245","KD_FG":"188","KD_SZYH":"61","AREA_ID":"44134","AREA_NAME":"上赵村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.828337,29.469896;119.82813,29.469157;119.825669,29.468505;119.825346,29.467361;119.825921,29.464845;119.826316,29.462109;119.826711,29.461154;119.82743,29.459845;119.82973,29.459153;119.831383,29.458744;119.833179,29.458713;119.836713,29.455949;119.835689,29.458906;119.835551,29.462172;119.834222,29.463084;119.831984,29.465635;119.828822,29.466225;119.829064,29.468363;119.828741,29.469063","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":4,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44274","REGION_NAME_6":"马桥村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"110","KD_YH":"87","KD_SZL":".9344","KD_FG":"61","KD_SZYH":"57","AREA_ID":"44274","AREA_NAME":"马桥村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.806813,29.450583;119.81259,29.451322;119.815742,29.451417;119.81612,29.451165;119.816245,29.451307;119.816245,29.451417;119.816928,29.451338;119.81719,29.4439;119.81719,29.441132;119.820064,29.441006;119.821502,29.440251;119.828113,29.441132;119.830439,29.441855;119.829882,29.44;119.829774,29.437232;119.827654,29.434605;119.824186,29.433001;119.823468,29.432214;119.820521,29.431947;119.818653,29.430767;119.816389,29.4305;119.813389,29.432057;119.812652,29.432796;119.812239,29.432985;119.809544,29.433614;119.810622,29.435234;119.807352,29.439575;119.806238,29.440943;119.8087,29.443947;119.808628,29.447139;119.807101,29.450269","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":5,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44320","REGION_NAME_6":"寿溪村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"485","KD_YH":"148","KD_SZL":".7043","KD_FG":"186","KD_SZYH":"131","AREA_ID":"44320","AREA_NAME":"寿溪村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.814072,29.451338;119.812491,29.451275;119.809508,29.450866;119.806769,29.450568;119.799339,29.455175;119.793375,29.45876;119.788919,29.463163;119.786296,29.46593;119.783601,29.471622;119.781876,29.474326;119.781265,29.476747;119.77778,29.479294;119.774905,29.481337;119.772462,29.488097;119.775983,29.488789;119.776989,29.488977;119.778167,29.489182;119.79139,29.48981;119.796708,29.483523;119.801595,29.47736;119.805907,29.470317;119.808925,29.461134;119.812231,29.454593;119.814818,29.452077;119.815724,29.451401","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":6,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44329","REGION_NAME_6":"前吴村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"121","KD_YH":"21","KD_SZL":".6531","KD_FG":"49","KD_SZYH":"32","AREA_ID":"44329","AREA_NAME":"前吴村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.821972,29.451672;119.822367,29.451405;119.822382,29.451432;119.822978,29.451169;119.825008,29.448999;119.826913,29.446939;119.830219,29.446436;119.833183,29.44609;119.83665,29.446939;119.837118,29.448842;119.837369,29.449848;119.838052,29.452286;119.839669,29.454094;119.836579,29.453638;119.835267,29.453418;119.83259,29.452977;119.82655,29.45203;119.826571,29.452034;119.826571,29.452034;119.825637,29.452065;119.824703,29.452097;119.823805,29.452097;119.821433,29.452191;119.821074,29.453119;119.82014,29.452569;119.821379,29.451971","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":7,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44351","REGION_NAME_6":"民生村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"131","KD_YH":"29","KD_SZL":".3929","KD_FG":"84","KD_SZYH":"33","AREA_ID":"44351","AREA_NAME":"民生村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.848032,29.448527;119.851841,29.448213;119.856225,29.448622;119.857698,29.453528;119.860069,29.451892;119.861291,29.448747;119.862549,29.446137;119.862513,29.445099;119.861147,29.443369;119.861542,29.441073;119.855793,29.437613;119.85565,29.434876;119.861327,29.432737;119.866429,29.428176;119.867364,29.422639;119.871424,29.420311;119.873903,29.416914;119.870885,29.415089;119.863267,29.417291;119.855075,29.41943;119.850727,29.420563;119.847709,29.421475;119.846092,29.423363;119.84457,29.42553;119.843109,29.427924;119.842355,29.430881;119.841241,29.434184;119.84142,29.437644;119.841636,29.443369;119.838438,29.445728;119.836677,29.446986;119.838043,29.452238;119.838043,29.452333;119.838079,29.452333;119.839624,29.454031;119.83966,29.454062;119.839696,29.454094;119.843325,29.455163;119.845193,29.454912;119.846415,29.45227;119.84717,29.450509","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":8,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44362","REGION_NAME_6":"罗源村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"223","KD_YH":"71","KD_SZL":".4649","KD_FG":"114","KD_SZYH":"53","AREA_ID":"44362","AREA_NAME":"罗源村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.846078,29.423359;119.843133,29.42792;119.841264,29.434338;119.841695,29.443397;119.836665,29.446919;119.833215,29.446039;119.830772,29.442767;119.82991,29.44;119.829766,29.437232;119.82761,29.434589;119.824161,29.432954;119.823495,29.432246;119.82283,29.43212;119.822848,29.431444;119.822471,29.428896;119.820333,29.42759;119.819937,29.425199;119.82089,29.421739;119.824249,29.419584;119.828741,29.418546;119.828867,29.416831;119.830987,29.416784;119.830753,29.415069;119.830052,29.413858;119.833053,29.412709;119.834813,29.415211;119.835029,29.412631;119.838856,29.414094;119.840634,29.414802;119.845719,29.419442;119.847893,29.421393;119.847713,29.421487","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":9,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44196","REGION_NAME_6":"塘岭金村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"1223","KD_YH":"265","KD_SZL":".641","KD_FG":"376","KD_SZYH":"241","AREA_ID":"44196","AREA_NAME":"塘岭金村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.835533,29.462219;119.834168,29.463163;119.832012,29.465616;119.82885,29.466213;119.829064,29.468387;119.828346,29.469959;119.828202,29.472569;119.82698,29.474518;119.823387,29.476279;119.82159,29.477914;119.81947,29.481121;119.815015,29.48656;119.811565,29.494043;119.80887,29.495332;119.810918,29.495049;119.823638,29.494829;119.823998,29.494829;119.822615,29.489685;119.826424,29.48129;119.835335,29.476511;119.836449,29.474499;119.837797,29.474137;119.83945,29.473194;119.841821,29.471119;119.842612,29.469766;119.843258,29.468226;119.844696,29.464987;119.844983,29.463226;119.845235,29.460207;119.845522,29.459075;119.843366,29.455238;119.839593,29.454106;119.836719,29.455993;119.835713,29.458917;119.835533,29.462156;119.835569,29.462062","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":10,"pid":"","areaLevel":1}]}}
	);
}

/**
 * 承包区域-新增
 */
if(mockConst.isStatic.base.contractArea.add) {
	Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.add), 'post', {
		"status": 0,
		"msg": "成功"
	});
}

/**
 * 承包区域-获取详情信息
 */
if(mockConst.isStatic.base.contractArea.detail) {
	Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.detail), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"id": "1",
			"name": "承包区域1",
			"channelId": "1",
			"channelName": "渠道1",
			"beginDate": "2019-06-22",
			"endDate": "2019-09-22",
			"sceneType": "1",
			"sceneList": [
			  {
					"sceneId": "1",
					"sceneName": "xx小区",
					"sceneType": 1,
					"sceneTypeName": "省高价值小区",
					"sceneLocation": "",
					"coverHouseholds": 245,
					"accessHouseholds": 210,
					"othernetBroadbandUsers": 210,
					"permeateRate": 80,
					"installRate": 90,
					"households": 3120
				},
				{
					"sceneId": "2",
					"sceneName": "xx小区",
					"sceneType": 2,
					"sceneTypeName": "市高价值小区",
					"sceneLocation": "",
					"coverHouseholds": 245,
					"accessHouseholds": 210,
					"othernetBroadbandUsers": 210,
					"permeateRate": 80,
					"installRate": 90,
					"households": 3120
				},
				{
					"sceneId": "3",
					"sceneName": "xx小区",
					"sceneType": 3,
					"sceneTypeName": "高价值商区",
					"sceneLocation": "",
					"coverHouseholds": 245,
					"accessHouseholds": 210,
					"othernetBroadbandUsers": 210,
					"permeateRate": 80,
					"installRate": 90,
					"households": 3120
				}
			],
			"kpiList": [{
					"kpiId": "1",
					"kpiName": "指标1",
					"kpiValue": 123,
				},
				{
					"kpiId": "2",
					"kpiName": "指标2",
					"kpiValue": 123,
				}
			]
		}
	});
}

/**
 * 承包区域-修改
 */
if(mockConst.isStatic.base.contractArea.edit) {
	Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.edit), 'post', {
		"status": 0,
		"msg": "成功"
	});
}

/**
 * 承包区域-删除
 */
if(mockConst.isStatic.base.contractArea.delete) {
	Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.delete), 'post', {
		"status": 0,
		"msg": "成功"
	});
}
if(mockConst.isStatic.base.gridUserMgr.getGridList) {
  Mock.mock(mockConst.getRegExpUrl(api.url.base.gridUserMgr.getGridList), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "userId": "wangchunqin",
        "userName": "王春琴"
      },
      {
        "userId": "xuanqi",
        "userName": "徐安琪"
      },
      {
        "userId": "xiaxiaoyan3",
        "userName": "夏小燕"
      },
      {
        "userId": "wangqing46",
        "userName": "王清"
      },
      {
        "userId": "helijun6",
        "userName": "何利军"
      },
      {
        "userId": "wangjianjun15",
        "userName": "王建军"
      },
      {
        "userId": "liwenjun12",
        "userName": "李文军"
      },
      {
        "userId": "qzwangxiaoh",
        "userName": "王晓红"
      }
    ]
  });
}
if(mockConst.isStatic.warning.work.transfer) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.work.transfer), 'post', {
    "status": 0,
    "msg": null,
    "obj": 6121
  });
}
if(mockConst.isStatic.warning.work.feed) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.work.feed), 'get', {
    "status": 0,
    "msg": null,
    "obj": {
      "id": 788,
      "warningDate": "2019-07-17 12:12:14",
      "processTimeLimit": "2019-07-17 12:12:14",
      "visitTime": "2019-07-17 12:12:15",
      "processType": 1,
      "content": "12113",
      "status": 1,
      "createOperator": "liucun",
      "createTime": "2019-07-24 14:21:22",
      "processName": "外呼",
      "warningProduceId": 61352,
      "handlerContent": "同意你的请求了，小伙子"
    }
  });
}
/**
 * 市场预警-告知型预警-列表
 */
if(mockConst.isStatic.warning.notify.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.list), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"pageIndex": 1,
			"pageSize": 10,
			"total": 3,
			"list": [{
					"id": "1",
					"warningLevelName": "营销中心",
					"areaLabel": "浙江省 / 杭州市 / 西湖区",
					"triggerTime": "09:00:00",
					"intervalDays": 7,
					"sendTypeNames": "短信、邮件"
				},
				{
					"id": "2",
					"warningLevelName": "营销中心",
					"areaLabel": "浙江省 / 杭州市 / 西湖区",
					"triggerTime": "09:00:00",
					"intervalDays": 7,
					"sendTypeNames": "短信、邮件"
				},
				{
					"id": "3",
					"warningLevelName": "营销中心",
					"areaLabel": "浙江省 / 杭州市 / 西湖区",
					"triggerTime": "09:00:00",
					"intervalDays": 7,
					"sendTypeNames": "短信、邮件"
				}
			]
		}
	});
}

/**
 * 市场预警-告知型预警-新增
 */
if(mockConst.isStatic.warning.notify.add) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.add), 'post', {
		"status": 0,
		"msg": "成功"
	});
}
if(mockConst.isStatic.warning.notify.seachMap) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.seachMap), 'get', function(options){
    let modelType = api.getUrlArg(options.url, 'modelType');
    let areaLevel = api.getUrlArg(options.url, 'areaLevel');



  });
}
if(mockConst.isStatic.warning.notify.seachTotal) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.seachTotal), 'get', {
    "status": 0,
    "msg": null,
    "obj": {
      "areaId": "1",
      "areaName": "浙江省",
      "kpiNum": 0,
      "modelNum": 0,
      "todoNum": 0,
      "doingNum": 0,
      "stallDoingNum": 0,
      "feedbackDoingNum": 0,
      "nablaDoingNum": 0,
      "doneNum": 0
    }
  });
}
if(mockConst.isStatic.warning.notify.seachDetail) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.seachDetail), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "todoNum": 0,//未处理
        "doneNum": 0,//已处理
        "areaId": "9",
        "kpiNum": 0,//预警提醒
        "areaName": "丽水市",
        "doingNum": 0//处理中
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "8",
        "kpiNum": 0,
        "areaName": "温州市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "2",
        "kpiNum": 0,
        "areaName": "杭州市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "7",
        "kpiNum": 0,
        "areaName": "台州市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "10",
        "kpiNum": 0,
        "areaName": "金华市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "6",
        "kpiNum": 0,
        "areaName": "绍兴市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "5",
        "kpiNum": 0,
        "areaName": "宁波市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "4",
        "kpiNum": 0,
        "areaName": "嘉兴市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "3",
        "kpiNum": 0,
        "areaName": "湖州市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "24",
        "kpiNum": 0,
        "areaName": "舟山市",
        "doingNum": 0
      },
      {
        "todoNum": 0,
        "doneNum": 0,
        "areaId": "25",
        "kpiNum": 0,
        "areaName": "衢州市",
        "doingNum": 0
      }
    ]
  });
}
if(mockConst.isStatic.warning.notify.seachPoints) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.seachPoints), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "id": 182877,
        "status": 0,
        "name": "杭州市余杭区运河街道戚家桥社区委员会",
        "point": "120.308899334,30.5216262772",
        "location": null,
        "curAssign": 1,
        "handleCycle": 0
      },
      {
        "id": 183990,
        "status": 0,
        "name": "杭州中凌广告器材有限公司",
        "point": "120.297616539,30.4687841699",
        "location": null,
        "curAssign": 1,
        "handleCycle": 0
      },
      {
        "id": 182369,
        "status": 0,
        "name": "杭州富龙布艺有限公司",
        "point": "120.32353788,30.4556193763",
        "location": null,
        "curAssign": 1,
        "handleCycle": 0
      },
      {
        "id": 182359,
        "status": 0,
        "name": "杭州九林木业有限公司",
        "point": "120.329563489,30.4595566469",
        "location": null,
        "curAssign": 1,
        "handleCycle": 0
      },
      {
        "id": 181168,
        "status": 0,
        "name": "杭州隆森丝绸有限公司",
        "point": "120.295057973,30.4560916288",
        "location": null,
        "curAssign": 1,
        "handleCycle": 0
      },
      {
        "id": 179104,
        "status": 0,
        "name": "杭州华奥丝绸有限公司",
        "point": "120.283969736,30.5028870583",
        "location": null,
        "curAssign": 1,
        "handleCycle": 0
      },
      {
        "id": 182571,
        "status": 0,
        "name": "杭州伊丝顿布艺有限公司",
        "point": "120.293724378,30.464993144",
        "location": null,
        "curAssign": 1,
        "handleCycle": 0
      }
    ]
  });
}
if(mockConst.isStatic.warning.notify.seachGridByProduce) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.seachGridByProduce), 'get', {
    "status": 0,
    "msg": null,
    "obj": {
      "reason": [],
      "createTime": "2019-08-01 09:18:57",
      "gridName": "",
      "gridManager": "",
      "kpiData": [
        {
          "kpiValue": "",
          "kpiName": "集团成员数"
        },
        {
          "kpiValue": "",
          "kpiName": "移动日新增"
        },
        {
          "kpiValue": "15",
          "kpiName": "移动月新增"
        },
        {
          "kpiValue": "1",
          "kpiName": "电信日新增"
        },
        {
          "kpiValue": "8",
          "kpiName": "电信月新增"
        },
        {
          "kpiValue": "1",
          "kpiName": "联通日新增"
        },
        {
          "kpiValue": "6",
          "kpiName": "联通月新增"
        },
        {
          "kpiValue": "",
          "kpiName": "虚拟网渗透率"
        },
        {
          "kpiValue": 0,
          "kpiName": "当月预警次数"
        }
      ]
    }
  });
}
/**
 * 市场预警-告知型预警-获取详情信息
 */
if(mockConst.isStatic.warning.notify.detail) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.detail), 'get', {
		"status": 0,
		"msg": "成功",
		"obj": {
			"id": "1",
			"warningLevel": "2",
			"provCode": "330000",
			"cityCode": "",
			"countyCode": "",
			"areaCode": "",
			"gridCode": "",
			"triggerTime": "09:00:00",
			"intervalDays": 1,
			"sendType": "sms,email",
			"sendContent": "",
			"kpiList": [{
					"id": "1",
					"kpiId": "1",
					"kpiName": "指标1",
					"type": "1",
					"minValue": 100,
					"maxValue": 150
				},
				{
					"id": "2",
					"kpiId": "2",
					"kpiName": "指标2",
					"type": "2",
					"minValue": 40,
					"maxValue": 60
				},
				{
					"id": "3",
					"kpiId": "3",
					"kpiName": "指标3",
					"type": "3",
					"rankType": "desc",
					"rankValue": 10
				}
			],
			"kpiWarningRule": "or",
			"userList": [{
					"id": "1",
					"roleType": "1",
					"roleId": "1",
					"userId": "1",
					"userName": "用户1",
					"userMobile": "13812345678",
					"userEmail": "13812345678@139.com",
					"upLevel": "0"
				},
				{
					"id": "2",
					"roleType": "1",
					"roleId": "1",
					"userId": "2",
					"userName": "用户2",
					"userMobile": "13812345671",
					"userEmail": "13812345671@139.com",
					"upLevel": "1",
					"children": [{
						"userId": "1",
						"userName": "用户1"
					}]
				},
				{
					"id": "3",
					"roleType": "1",
					"roleId": "1",
					"userId": "2",
					"userName": "用户3",
					"userMobile": "13812345672",
					"userEmail": "13812345672@139.com",
					"upLevel": "2",
					"children": [{
						"userId": "1",
						"userName": "用户1"
					}]
				}
			]
		}
	});
}

/**
 * 市场预警-告知型预警-修改
 */
if(mockConst.isStatic.warning.notify.edit) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.edit), 'post', {
		"status": 0,
		"msg": "成功"
	});
}

/**
 * 市场预警-告知型预警-删除
 */
if(mockConst.isStatic.warning.notify.delete) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.delete), 'post', {
		"status": 0,
		"msg": "成功"
	});
}

/**
 * 市场预警-告知型预警-删除
 */
if(mockConst.isStatic.warning.notify.getModelTypes) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.getModelTypes), 'get', {
	    "status": 0,
	    "msg": "成功",
	    "obj": [
	        {
	            "id": 1,
	            "typeName": "集团异动预警",
	            "warningReason": "1、通信双降：集团双降成员占比超30%；<br>2、异网突增：集团异网新增成员达到10户或新增异网成员占集团成员总数30%及以上"
	        },
	        {
	            "id": 2,
	            "typeName": "异网着火点预警",
	            "warningReason": "1、新增低份额：日新增份额低于50%且异网用户日新增>=10户；<br>2、异网突增：日增幅较近30天日均异网新增量>=30%且日异网用户日新增>=10户"
	        },
	        {
	            "id": 3,
	            "typeName": "异网主卡突增",
	            "warningReason": "当月异网主卡新增量/近3个月异网主卡月均新增量-1>=30%，且当月异网主卡新增量>=30户"
	        },
	        {
	            "id": 4,
	            "typeName": "双降用户突增",
	            "warningReason": "当月双降用户新增量/近3个月双降用户月均新增量>=30%，且当月双降用户新增量>=30户"
	        }
	    ]
	});
}
if(mockConst.isStatic.warning.notify.getMyModelType) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.getMyModelType), 'get', {
    "status": 0,
    "msg": "成功",
    "obj": [
      {
        "id": 1,
        "typeName": "集团异动预警",
        "warningReason": "1、通信双降：集团双降成员占比超网突增：集团异网新增成员达到10户或增异成员占集团成员总数30%及以上",
  "todoNum": 15
},
  {
    "id": 2,
    "typeName": "异网着火点预警",
    "warningReason": "1、新增低份额：日新增份额低于50%且异网用异网新增量>=30%且日异网用户日新增>=10户",
    "todoNum": 0
  },
  {
    "id": 3,
    "typeName": "异网主卡突增",
    "warningReason": "当月异网主卡新增量/近3个月异网主卡月均新增量-1>=30%，且当月异网主卡新增量>=30户",
    "todoNum": 0
  },
  {
    "id": 4,
    "typeName": "双降用户突增",
    "warningReason": "当月双降用户新增量/近3个月双降用户月均新增量>=30%，且当月双降用户新增量>=30户",
    "todoNum": 0
  }
]
});
}
if(mockConst.isStatic.warning.notify.seachMyTotal) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.notify.seachMyTotal), 'get', {
    "status": 0,
    "msg": null,
    "obj": [
      {
        "typeKey": "total",//总量
        "typeValue": "15",
        "data": null
      },
      {
        "typeKey": "doneRate",//处理率
        "typeValue": "0.0%",
        "data": null
      },
      {
        "typeKey": "todo",//未处理
        "typeValue": "15",
        "data": [
          {
            "produceId": 182385,
            "areaName": "杭州冬春水产商行",
            "content": "杭州冬春水产商行2019-07-30通信双降成员占比值为50%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57",
            "curAssign": 1,
            "handleCycle": 1
          },
          {
            "produceId": 183319,
            "areaName": "杭州柯林清洁服务有限公司",
            "content": "杭州柯林清洁服务有限公司2019-07-30通信双降成员占比值为33%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57",
            "curAssign": 1,
            "handleCycle": 1
          },
          {
            "produceId": 183987,
            "areaName": "紫晶置业有限公司",
            "content": "紫晶置业有限公司2019-07-30通信双降成员占比值为33%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57",
            "curAssign": 1,
            "handleCycle": 0
          },
          {
            "produceId": 180411,
            "areaName": "杭州市上城区望江街道近江西园社区居委会",
            "content": "杭州市上城区望江街道近江西园社区居委会2019-07-30通信双降成员占比值为40%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57",
            "curAssign": 1,
            "handleCycle": 0
          },
          {
            "produceId": 180422,
            "areaName": "浙江东方集团建业进出口有限公司",
            "content": "浙江东方集团建业进出口有限公司2019-07-30通信双降成员占比值为50%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57",
            "curAssign": 1,
            "handleCycle": 0
          },
          {
            "produceId": 181885,
            "areaName": "杭州政兴人力资源开发有限公司",
            "content": "杭州政兴人力资源开发有限公司2019-07-30通信双降成员占比值为50%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 181865,
            "areaName": "浙江金剑安全器材有限公司",
            "content": "浙江金剑安全器材有限公司2019-07-30通信双降成员占比值为100%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 181068,
            "areaName": "泉州亲亲商贸有限公司杭州经营部",
            "content": "泉州亲亲商贸有限公司杭州经营部2019-07-30通信双降成员占比值为100%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 182856,
            "areaName": "杭州欧恩服饰有限公司",
            "content": "杭州欧恩服饰有限公司2019-07-30通信双降成员占比值为100%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 182575,
            "areaName": "杭州云天荣业机械装备有限公司",
            "content": "杭州云天荣业机械装备有限公司2019-07-30通信双降成员占比值为50%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 181486,
            "areaName": "杭州新星微型计算机有限公司",
            "content": "杭州新星微型计算机有限公司2019-07-30通信双降成员占比值为33%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 182083,
            "areaName": "杭州绿鑫食品有限公司",
            "content": "杭州绿鑫食品有限公司2019-07-30通信双降成员占比值为40%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 181610,
            "areaName": "浙江省机械工业联合会",
            "content": "浙江省机械工业联合会2019-07-30通信双降成员占比值为50%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 181611,
            "areaName": "杭州绿通投资管理有限公司",
            "content": "杭州绿通投资管理有限公司2019-07-30通信双降成员占比值为50%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          },
          {
            "produceId": 181574,
            "areaName": "杭州迅马网络科技有限公司",
            "content": "杭州迅马网络科技有限公司2019-07-30通信双降成员占比值为50%（预警阈值为30%），请及时登录智慧网格运营平台处理。",
            "createTime": "2019-08-01 09:18:57"
          }
        ]
      },
      {
        "typeKey": "doing",//正在处理
        "typeValue": "0",
        "data": null
      },
      {
        "typeKey": "done",//已处理
        "typeValue": "0",
        "data": null
      },

    ]
  });
}

//网络营销
// common

if(mockConst.isStatic.market.common.cuslist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.common.cuslist), 'get', {"status":0,"msg":"成功","obj":[{"groupName":"夏日风暴-赢回目标客户群","groupId":"IMP000136693"},{"groupName":"飞享8升18元语音","groupId":"IMP000129180"},{"groupName":"夏日风暴-两网沉默拍照用户","groupId":"IMP000136715"},{"groupName":"夏日风暴-重点客户合约目标拍照","groupId":"IMP000136719"},{"groupName":"飞享18升28元语音","groupId":"IMP000129181"},{"groupName":"8-易携用户-异网集团","groupId":"IMP000133271"},{"groupName":"夏日风暴-异网主卡拍照用户","groupId":"IMP000136712"},{"groupName":"夏日风暴-宽带电视沉默拍照用户-可更新","groupId":"IMP000136713"},{"groupName":"夏日风暴-爱看沉默拍照客户-可更新","groupId":"IMP000136714"},{"groupName":"夏日风暴-重点客户宽带目标客户拍照","groupId":"IMP000136721"}]});
}
if(mockConst.isStatic.market.common.newlist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.common.newlist), 'get', {
		"status": 0,
		"msg": "成功",
		"obj":{
			"data":[
				{
					"groupName":"第一个客户群",
					"groupId":"IMP000119741"
				},{
					"groupName":"第个二客户群",
					"groupId":"IMP000119743"
				}
	        ]
		}
	});
}

if(mockConst.isStatic.market.common.addresslist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.common.addresslist), 'get', {
		"status": 0,
		"msg": "成功",
		"obj":{
			"data":[
				{
					id:1,
					name:'地点1'
				},{
					id:2,
					name:'地点2'
				},{
					id:3,
					name:'地点3'
				},{
					id:4,
					name:'文三路'
				},{
					id:5,
					name:'三墩'
				},{
					id:6,
					name:'西溪'
				},{
					id:7,
					name:'地点7'
				},{
					id:8,
					name:'地点8'
				},{
					id:9,
					name:'地点9'
				}
	        ]
		}
	});
}

if(mockConst.isStatic.market.common.exechannelslist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.common.exechannelslist), 'get', {
		"status": 0,
		"msg": "成功",
		"obj":[
			{
				"name":"萧山楼塔建飞通讯特约代销店",
				"id":"4498"
			},{
				"name":"萧山新街镇长山天通通讯商行",
				"id":"10029301"
			},{
				"name":"杭州市江干区东宇通讯器材商店1",
				"id":"10029370"
			},{
				"name":"10193430萧山四海通讯非授权代理点",
				"id":"10193430"
			},{
				"name":"10217037萧山久联通讯非授权网点",
				"id":"10217037"
			},{
				"name":"萧山党山阿健通讯非授权（专）",
				"id":"10105718"
			},{
				"name":"滨江秋虎通讯非授权网点",
				"id":"40016041"
			},{
				"name":"萧山临浦桃源永兴通讯非授权网点",
				"id":"10232664"
			},{
				"name":"武林三鼎天发指定专营店(天发通讯）",
				"id":"40042109"
			},{
				"name":"余杭中国联通丘山通讯特约代",
				"id":"4545"
			},{
				"name":"10222215萧山蜀山周旺通讯非授权网点",
				"id":"10222215"
			},{
				"name":"10222286萧山君诚通讯非授权网点",
				"id":"10222286"
			}
		]
	});
}


// freeStall
// if(mockConst.isStatic.market.freeStall.addresslist) {
// 	Mock.mock(mockConst.getRegExpUrl(api.url.market.freeStall.addresslist), 'get', {
// 		"status": 0,
// 		"msg": "成功",
// 		"obj":{
//             "lng":"118.324341",
// 			"count":"16",
// 			"age4":"29",
// 			"age3":"83",
// 			"fillStyle":"rgba(145,186,255,0.4)",
// 			"id":"6573516037",
// 			"allCount":"177",
// 			"lat":"28.867881",
// 			"age2":"34",
// 			"age1":"4"
// 		}
// 	});
// }
if(mockConst.isStatic.market.freeStall.post) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.freeStall.post), 'post', {
		"status": 0,
		"msg": "成功",
		"obj":{
		}
	});
}
if(mockConst.isStatic.market.freeStall.gridlist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.freeStall.gridlist), 'get', {

	});
}
if(mockConst.isStatic.market.freeStall.seargrid) {
 Mock.mock(mockConst.getRegExpUrl(api.url.market.freeStall.seargrid), 'get', {

   }

 );
}




// sceneMarket
if(mockConst.isStatic.market.sceneMarket.pmtablelist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.sceneMarket.pmtablelist), 'get', {
		"status": 0,
		"msg": "成功",
		"obj":{
			"data":[
				{
					"gridLatCent":28.918506,
					"sink":"1",
					"name":"星月湾翡翠园",
					"count":0,
					"sum":0,
					"location":"118.53755805016804,28.9331367160397;118.54282934097075,28.93493082486973;118.54265921924795,28.945558668072913;118.53622955515084,28.946088263852452;118.53256775115607,28.944499127907775;118.53310257244341,28.943336366236466;118.53301272398215,28.942614394912447;118.53787575649193,28.93850205807398",
					"poiId":"31627125",
					"gridLngCent":118.500966
				},{
					"gridLatCent":28.922556,
					"sink":"0",
					"name":"衢州市常山县东方广场综合业务区翡翠园",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"543072",
					"gridLngCent":118.525716
				},{
					"gridLatCent":28.907256,
					"sink":"1",
					"name":"竹园小区",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"563264",
					"gridLngCent":118.527966
				},{
					"gridLatCent":28.905906,
					"sink":"",
					"name":"江滨小区",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"563262",
					"gridLngCent":118.534266
				},{
					"gridLatCent":28.897806,
					"sink":"",
					"name":"衢州市常山县白龙路综合业务区城南小区",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"563267",
					"gridLngCent":118.518066
				},{
					"gridLatCent":28.939206,
					"sink":"",
					"name":"衢州市常山县辉埠综合业务区永盛路社区",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"542439",
					"gridLngCent":118.510416
				},{
					"gridLatCent":28.914006,
					"sink":"",
					"name":"衢州市常山县东方广场综合业务区滨江北路社区",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"543077",
					"gridLngCent":118.533366
				},{
					"gridLatCent":28.883406,
					"sink":"",
					"name":"衢州市常山县二都桥综合业务区常山南社区",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"543003",
					"gridLngCent":118.498716
				},{
					"gridLatCent":28.985106,
					"sink":"",
					"name":"衢州市常山县大桥综合业务区常山县东案乡中心小学",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"543174",
					"gridLngCent":118.669266
				},{
					"gridLatCent":28.912656,
					"sink":"",
					"name":"衢州市常山县东方广场综合业务区常山育才小学",
					"count":0,
					"sum":0,
					"location":null,
					"poiId":"543050",
					"gridLngCent":118.530666
				}
			]
		}
	});
}
if(mockConst.isStatic.market.sceneMarket.sceneTypelist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.sceneMarket.sceneTypelist), 'get', {
		"status":0,
		"msg":"成功",
		"obj":[
			"聚类",
			"家庭",
			"集团"
		]
	});
}
if(mockConst.isStatic.market.sceneMarket.scenelist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.sceneMarket.scenelist), 'get', {
		"status":0,
		"msg":"成功",
		"obj1":[
			{
				"name":"专业市场",
				"id":"279d7150ae1647068cb73d03b925ff05"
			},{
				"name":"商超集市",
				"id":"47cb9ecfb48645659aa5a17d86df10a3"
			},{
				"name":"施工工地",
				"id":"34c7894e6bf64ae0b41c62ae29d6e38d"
			},{
				"name":"交通枢纽",
				"id":"7bbcf9770da8474ebbf0df6f9ee1e162"
			},{
				"name":"商业中心",
				"id":"dc5f526b23b34ea492d4af12702bee6f"
			},{
				"name":"休闲娱乐",
				"id":"f6791faae3e84b598ee0584278ccbfe3"
			}
		],
		"obj2":[
			{
				"name":"住宅小区",
				"id":"11cc0e3dc8b44ad2aeef03e42fd04ff8"
			},{
				"name":"城中村",
				"id":"afc5813ebea345a5a697fd4475170252"
			},{
				"name":"农林村庄",
				"id":"132bdece488346c7bf32ae5981751e5b"
			},{
				"name":"商住楼宇",
				"id":"e2b10bb60ed5456486b5de3d4edc6f73"
			}
		],
		"obj3":[
			{
				"name":"单位园区",
				"id":"50091a2f25234654815734cab2561a17"
			},{
				"name":"商务楼宇",
				"id":"e49cec2b2d104c14b7d5658317a47157"
			},{
				"name":"研究院校",
				"id":"92741822d1f14a2aa16ec9aaa239c995"
			},{
				"name":"施工工地",
				"id":"9c8e2b8949ca431786d0484e0ba59f02"
			},{
				"name":"工业园区",
				"id":"26c300136ce6490a9d1b3d9bc2630200"
			}
		]
	});
}
if(mockConst.isStatic.market.sceneMarket.post) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.sceneMarket.post), 'post', {
		"status": 0,
		"msg": "成功",
		"obj":{

		}
	});
}

//groupStation
if(mockConst.isStatic.market.groupStation.locationlist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.groupStation.locationlist), 'get', {
		"status":0,
		"msg":"成功",
		"obj":[
			{
				"GRP_LNG_ESOP":null,
				"GRP_ID":"5717156218",
				"LIANG_WANG_LV":1,
				"NUM":6,
				"BXL_LV":0.5,
				"BROADBAND_LV":0.666666666666667,
				"GRP_NAME":"杭州蓝天净化机械有限公司",
				"GRP_LNG":120.042793002,
				"GRP_LVL":1,
				"VPMN_LV":0.666666666666667,
				"GRP_LAT_ESOP":null,
				"GRP_LAT":30.3087959496,
				"UP_50_LV":1
			},{
				"GRP_LNG_ESOP":null,
				"GRP_ID":"5717156219",
				"LIANG_WANG_LV":1,
				"NUM":6,
				"BXL_LV":0.5,
				"BROADBAND_LV":0.666666666666667,
				"GRP_NAME":"杭州蓝天净化机械有限公司(分部)",
				"GRP_LNG":120.042793002,
				"GRP_LVL":2,
				"VPMN_LV":0.666666666666667,
				"GRP_LAT_ESOP":null,
				"GRP_LAT":30.3087959496,
				"UP_50_LV":1
			}
		]
	});
}
if(mockConst.isStatic.market.groupStation.historylist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.groupStation.historylist), 'get', {
		"status":0,
		"msg":"成功",
		"obj":[
			{
				"btcount":121,
				"time":"2019-07-07"
			}
		]
	});
}
if(mockConst.isStatic.market.groupStation.grouplist) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.groupStation.grouplist),'get',{
		"status":0,
		"msg":"成功",
		"obj":{
			"GRP_LNG_ESOP":null,
			"GRP_ID":"5717156218",
			"LIANG_WANG_LV":1,//双网渗透率
			"NUM":6,//集团用户数
			"BXL_LV":0.5,//不限量渗透率
			"BROADBAND_LV":0.666666666666667,//家宽渗透率
			"GRP_NAME":"杭州蓝天净化机械有限公司",
			"GRP_LNG":120.042793002,
			"GRP_LVL":1,
			"VPMN_LV":0.666666666666667,//虚拟网渗透率
			"GRP_LAT_ESOP":null,
			"GRP_LAT":30.3087959496,
			"UP_50_LV":0.805//50元及以上资费用户占比
		}
	});
}
if(mockConst.isStatic.market.groupStation.post) {
	Mock.mock(mockConst.getRegExpUrl(api.url.market.groupStation.post), 'post', {
		"status": 0,
		"msg": "成功",
		"obj":{

		}
	});
}




//网络概况
//leftA.list
if(mockConst.isStatic.profile.leftA.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.profile.leftA.list), 'get', {

	});
}
if(mockConst.isStatic.profile.leftA.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.profile.leftA.list), 'get', {
		"status":0,"msg":null,"obj":{"l1":{"item_1":{"value":381370017,"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"201901","value":"63415653"},{"data":"201902","value":"63380603"},{"data":"201903","value":"63845996"},{"data":"201904","value":"63761023"},{"data":"201905","value":"63453149"},{"data":"201906","value":"63513593"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":"63513593","valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"l2":{"item_1":{"value":"41.33","valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":".2094","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":".0938","valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"l3":{"item_1":{"value":".3523","valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"l4":{"item_1":{"value":[{"data":"201901","value":".0627"},{"data":"201902","value":".0627"},{"data":"201903","value":".0625"},{"data":"201904","value":".0625"},{"data":"201905","value":".0627"},{"data":"201906","value":".0627"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":".0627","valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"l5":{"item_1":{"value":[{"data":"201901","value":".3745"},{"data":"201902","value":".3728"},{"data":"201903","value":".3746"},{"data":"201904","value":".3737"},{"data":"201905","value":".3717"},{"data":"201906","value":".3699"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":".3699","valueType":"2","growthRate":null,"growthRateType":null,"rank":null}}}
	})
}


//leftB.list



if(mockConst.isStatic.profile.leftC.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.profile.leftC.list),'get', {
		"status":0,"msg":null,"obj":{"l1":{"item_1":{"value":".8341","valueType":"2","growthRate":"-.0003","growthRateType":"2","rank":null},"item_2":{"value":".1144","valueType":"2","growthRate":".0004","growthRateType":"2","rank":null},"item_3":{"value":".0515","valueType":"2","growthRate":"-.0001","growthRateType":"2","rank":null},"item_4":{"value":[{"data":"20190601","value":".8356"},{"data":"20190602","value":".8359"},{"data":"20190603","value":".8345"},{"data":"20190604","value":".8339"},{"data":"20190605","value":".8335"},{"data":"20190606","value":".8326"},{"data":"20190607","value":".8331"},{"data":"20190608","value":".8336"},{"data":"20190609","value":".834"},{"data":"20190610","value":".8338"},{"data":"20190611","value":".8337"},{"data":"20190612","value":".8336"},{"data":"20190613","value":".8339"},{"data":"20190614","value":".8338"},{"data":"20190615","value":".8338"},{"data":"20190616","value":".834"},{"data":"20190617","value":".8339"},{"data":"20190618","value":".834"},{"data":"20190619","value":".8341"},{"data":"20190620","value":".834"},{"data":"20190621","value":".834"},{"data":"20190622","value":".8341"},{"data":"20190623","value":".8342"},{"data":"20190624","value":".8341"},{"data":"20190625","value":".8342"},{"data":"20190626","value":".8342"},{"data":"20190627","value":".8342"},{"data":"20190628","value":".8341"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_5":{"value":[{"data":"20190601","value":".1132"},{"data":"20190602","value":".1128"},{"data":"20190603","value":".1139"},{"data":"20190604","value":".1145"},{"data":"20190605","value":".1149"},{"data":"20190606","value":".1154"},{"data":"20190607","value":".1148"},{"data":"20190608","value":".1144"},{"data":"20190609","value":".1141"},{"data":"20190610","value":".1144"},{"data":"20190611","value":".1145"},{"data":"20190612","value":".1145"},{"data":"20190613","value":".1144"},{"data":"20190614","value":".1145"},{"data":"20190615","value":".1145"},{"data":"20190616","value":".1143"},{"data":"20190617","value":".1144"},{"data":"20190618","value":".1144"},{"data":"20190619","value":".1143"},{"data":"20190620","value":".1144"},{"data":"20190621","value":".1144"},{"data":"20190622","value":".1143"},{"data":"20190623","value":".1143"},{"data":"20190624","value":".1143"},{"data":"20190625","value":".1142"},{"data":"20190626","value":".1143"},{"data":"20190627","value":".1143"},{"data":"20190628","value":".1144"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_6":{"value":[{"data":"20190601","value":".0512"},{"data":"20190602","value":".0513"},{"data":"20190603","value":".0516"},{"data":"20190604","value":".0516"},{"data":"20190605","value":".0517"},{"data":"20190606","value":".052"},{"data":"20190607","value":".0521"},{"data":"20190608","value":".052"},{"data":"20190609","value":".0519"},{"data":"20190610","value":".0519"},{"data":"20190611","value":".0518"},{"data":"20190612","value":".0518"},{"data":"20190613","value":".0517"},{"data":"20190614","value":".0517"},{"data":"20190615","value":".0517"},{"data":"20190616","value":".0517"},{"data":"20190617","value":".0517"},{"data":"20190618","value":".0517"},{"data":"20190619","value":".0516"},{"data":"20190620","value":".0516"},{"data":"20190621","value":".0516"},{"data":"20190622","value":".0516"},{"data":"20190623","value":".0516"},{"data":"20190624","value":".0516"},{"data":"20190625","value":".0515"},{"data":"20190626","value":".0515"},{"data":"20190627","value":".0515"},{"data":"20190628","value":".0515"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"l2":{"item_1":{"value":"6407207","valueType":"1","growthRate":".0059","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"20190601","value":"4488156"},{"data":"20190602","value":"5106378"},{"data":"20190603","value":"5370179"},{"data":"20190604","value":"5520526"},{"data":"20190605","value":"5626797"},{"data":"20190606","value":"5720015"},{"data":"20190607","value":"5799100"},{"data":"20190608","value":"5862551"},{"data":"20190609","value":"5912944"},{"data":"20190610","value":"5949050"},{"data":"20190611","value":"5988202"},{"data":"20190612","value":"6023425"},{"data":"20190613","value":"6055123"},{"data":"20190614","value":"6087185"},{"data":"20190615","value":"6116335"},{"data":"20190616","value":"6140616"},{"data":"20190617","value":"6162782"},{"data":"20190618","value":"6182732"},{"data":"20190619","value":"6202145"},{"data":"20190620","value":"6222361"},{"data":"20190621","value":"6241707"},{"data":"20190622","value":"6271601"},{"data":"20190623","value":"6304245"},{"data":"20190624","value":"6321841"},{"data":"20190625","value":"6345952"},{"data":"20190626","value":"6369245"},{"data":"20190627","value":"6387690"},{"data":"20190628","value":"6407207"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":".8138","valueType":"2","growthRate":".001","growthRateType":"2","rank":null},"item_4":{"value":"881652","valueType":"1","growthRate":"-.0019","growthRateType":"2","rank":null},"item_5":{"value":[{"data":"20190601","value":"372915"},{"data":"20190602","value":"483362"},{"data":"20190603","value":"552100"},{"data":"20190604","value":"596302"},{"data":"20190605","value":"630214"},{"data":"20190606","value":"661940"},{"data":"20190607","value":"688028"},{"data":"20190608","value":"705783"},{"data":"20190609","value":"720721"},{"data":"20190610","value":"735529"},{"data":"20190611","value":"748638"},{"data":"20190612","value":"760078"},{"data":"20190613","value":"770317"},{"data":"20190614","value":"780389"},{"data":"20190615","value":"790128"},{"data":"20190616","value":"798767"},{"data":"20190617","value":"806946"},{"data":"20190618","value":"815322"},{"data":"20190619","value":"822815"},{"data":"20190620","value":"830288"},{"data":"20190621","value":"837220"},{"data":"20190622","value":"844197"},{"data":"20190623","value":"850277"},{"data":"20190624","value":"856418"},{"data":"20190625","value":"862061"},{"data":"20190626","value":"868383"},{"data":"20190627","value":"874948"},{"data":"20190628","value":"881652"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_6":{"value":".112","valueType":"2","growthRate":"-.0007","growthRateType":"2","rank":null},"item_7":{"value":"583935","valueType":"1","growthRate":".0006","growthRateType":"2","rank":null},"item_8":{"value":[{"data":"20190601","value":"233690"},{"data":"20190602","value":"307896"},{"data":"20190603","value":"353057"},{"data":"20190604","value":"383060"},{"data":"20190605","value":"406721"},{"data":"20190606","value":"430067"},{"data":"20190607","value":"450769"},{"data":"20190608","value":"463621"},{"data":"20190609","value":"474423"},{"data":"20190610","value":"484424"},{"data":"20190611","value":"493191"},{"data":"20190612","value":"501263"},{"data":"20190613","value":"508523"},{"data":"20190614","value":"515812"},{"data":"20190615","value":"522621"},{"data":"20190616","value":"528711"},{"data":"20190617","value":"534193"},{"data":"20190618","value":"539435"},{"data":"20190619","value":"544551"},{"data":"20190620","value":"549596"},{"data":"20190621","value":"554496"},{"data":"20190622","value":"559151"},{"data":"20190623","value":"563552"},{"data":"20190624","value":"567760"},{"data":"20190625","value":"571619"},{"data":"20190626","value":"575738"},{"data":"20190627","value":"579850"},{"data":"20190628","value":"583935"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_9":{"value":".0742","valueType":"2","growthRate":"-.0003","growthRateType":"2","rank":null}},"r1":{"item_1":{"value":"9885","valueType":"1","growthRate":".696","growthRateType":"2","rank":null},"item_2":{"value":"211856","valueType":"1","growthRate":".2446","growthRateType":"2","rank":null},"item_3":{"value":".6581","valueType":"2","growthRate":".0538","growthRateType":"2","rank":null},"item_4":{"value":"2853","valueType":"1","growthRate":".2009","growthRateType":"2","rank":null},"item_5":{"value":"67676","valueType":"1","growthRate":"-.0304","growthRateType":"2","rank":null},"item_6":{"value":".2102","valueType":"2","growthRate":"-.0376","growthRateType":"2","rank":null},"item_7":{"value":"1465","valueType":"1","growthRate":".1031","growthRateType":"2","rank":null},"item_8":{"value":"42394","valueType":"1","growthRate":".0181","growthRateType":"2","rank":null},"item_9":{"value":".1317","valueType":"2","growthRate":"-.0161","growthRateType":"2","rank":null}},"r2":{"item_1":{"value":".9907","valueType":"2","growthRate":"0","growthRateType":"2","rank":null},"item_2":{"value":"0","valueType":"2","growthRate":"0","growthRateType":"2","rank":null},"item_3":{"value":".0093","valueType":"2","growthRate":"0","growthRateType":"2","rank":null},"item_4":{"value":[{"data":"20190601","value":"0"},{"data":"20190602","value":"0"},{"data":"20190603","value":"0"},{"data":"20190604","value":"0"},{"data":"20190605","value":"0"},{"data":"20190606","value":"0"},{"data":"20190607","value":"0"},{"data":"20190608","value":"0"},{"data":"20190609","value":"0"},{"data":"20190610","value":"0"},{"data":"20190611","value":"0"},{"data":"20190612","value":"0"},{"data":"20190613","value":"0"},{"data":"20190614","value":"0"},{"data":"20190615","value":"0"},{"data":"20190616","value":"0"},{"data":"20190617","value":"0"},{"data":"20190618","value":"0"},{"data":"20190619","value":"0"},{"data":"20190620","value":"0"},{"data":"20190621","value":"0"},{"data":"20190622","value":"0"},{"data":"20190623","value":"1"},{"data":"20190624","value":"1"},{"data":"20190625","value":"1"},{"data":"20190626","value":"1"},{"data":"20190627","value":"1"},{"data":"20190628","value":".9907"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_5":{"value":[{"data":"20190601","value":"0"},{"data":"20190602","value":"0"},{"data":"20190603","value":"0"},{"data":"20190604","value":"0"},{"data":"20190605","value":"0"},{"data":"20190606","value":"0"},{"data":"20190607","value":"0"},{"data":"20190608","value":"0"},{"data":"20190609","value":"0"},{"data":"20190610","value":"0"},{"data":"20190611","value":"0"},{"data":"20190612","value":"0"},{"data":"20190613","value":"0"},{"data":"20190614","value":"0"},{"data":"20190615","value":"0"},{"data":"20190616","value":"0"},{"data":"20190617","value":"0"},{"data":"20190618","value":"0"},{"data":"20190619","value":"0"},{"data":"20190620","value":"0"},{"data":"20190621","value":"0"},{"data":"20190622","value":"0"},{"data":"20190623","value":"0"},{"data":"20190624","value":"0"},{"data":"20190625","value":"0"},{"data":"20190626","value":"0"},{"data":"20190627","value":"0"},{"data":"20190628","value":"0"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_6":{"value":[{"data":"20190601","value":"0"},{"data":"20190602","value":"0"},{"data":"20190603","value":"0"},{"data":"20190604","value":"0"},{"data":"20190605","value":"0"},{"data":"20190606","value":"0"},{"data":"20190607","value":"0"},{"data":"20190608","value":"0"},{"data":"20190609","value":"0"},{"data":"20190610","value":"0"},{"data":"20190611","value":"0"},{"data":"20190612","value":"0"},{"data":"20190613","value":"0"},{"data":"20190614","value":"0"},{"data":"20190615","value":"0"},{"data":"20190616","value":"0"},{"data":"20190617","value":"0"},{"data":"20190618","value":"0"},{"data":"20190619","value":"0"},{"data":"20190620","value":"0"},{"data":"20190621","value":"0"},{"data":"20190622","value":"0"},{"data":"20190623","value":"0"},{"data":"20190624","value":"0"},{"data":"20190625","value":"0"},{"data":"20190626","value":"0"},{"data":"20190627","value":"0"},{"data":"20190628","value":".0093"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}}}
	})
}




if(mockConst.isStatic.profile.leftD.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.profile.leftD.list), 'get', {
	"status":0,"msg":null,"obj":{"l1":{"item_1":{"value":"4337685589.93","valueType":"1","growthRate":"-.0118","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"4476264686.08"},{"data":"201902","value":"4383350213.38"},{"data":"201903","value":"4477033943.05"},{"data":"201904","value":"4429220391.52"},{"data":"201905","value":"4389502810.02"},{"data":"201906","value":"4337685589.93"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"l2":{"item_1":{"value":"76.7949","valueType":"1","growthRate":"-.016","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"79.657"},{"data":"201902","value":"78.523"},{"data":"201903","value":"79.0847"},{"data":"201904","value":"78.5585"},{"data":"201905","value":"78.042"},{"data":"201906","value":"76.7949"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"l3":{"item_1":{"value":"16784334760","valueType":"1","growthRate":"-.0316","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"18124242017"},{"data":"201902","value":"14407786871"},{"data":"201903","value":"18041903535"},{"data":"201904","value":"17460432048"},{"data":"201905","value":"17331958729"},{"data":"201906","value":"16784334760"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"l4":{"item_1":{"value":".2022","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"201901","value":null},{"data":"201902","value":null},{"data":"201903","value":null},{"data":"201904","value":".202"},{"data":"201905","value":".2018"},{"data":"201906","value":".2022"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"r1":{"item_1":{"value":".6248","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"201901","value":".6231"},{"data":"201902","value":".6233"},{"data":"201903","value":".6266"},{"data":"201904","value":".6216"},{"data":"201905","value":".6216"},{"data":"201906","value":".6248"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"r2":{"item_1":{"value":".4356","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"201901","value":null},{"data":"201902","value":null},{"data":"201903","value":null},{"data":"201904","value":null},{"data":"201905","value":".4232"},{"data":"201906","value":".4356"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"r3":{"item_1":{"value":".089","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"201901","value":null},{"data":"201902","value":null},{"data":"201903","value":null},{"data":"201904","value":null},{"data":"201905","value":".0885"},{"data":"201906","value":".089"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}}}
	})
}


//leftE.list
if(mockConst.isStatic.profile.leftE.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.profile.leftE.list), 'get',{
		"status":0,"msg":null,"obj":{"l1":{"item_1":{"value":"51342386","valueType":"1","growthRate":".0061","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"49625060"},{"data":"201902","value":"49583160"},{"data":"201903","value":"50668044"},{"data":"201904","value":"50802614"},{"data":"201905","value":"51029941"},{"data":"201906","value":"51342386"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"l2":{"item_1":{"value":".2231","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"201901","value":".2129"},{"data":"201902","value":".2172"},{"data":"201903","value":".2251"},{"data":"201904","value":".2263"},{"data":"201905","value":".2239"},{"data":"201906","value":".2231"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"l3":{"item_1":{"value":".4831","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"201901","value":".494"},{"data":"201902","value":".4964"},{"data":"201903","value":".499"},{"data":"201904","value":".4952"},{"data":"201905","value":".4899"},{"data":"201906","value":".4831"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"l4":{"item_1":{"value":"9275.0147","valueType":"1","growthRate":".0084","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"7953.5592"},{"data":"201902","value":"7331.0664"},{"data":"201903","value":"8147.8893"},{"data":"201904","value":"8373.5525"},{"data":"201905","value":"9198.1669"},{"data":"201906","value":"9275.0147"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"r1":{"item_1":{"value":"4753.4691","valueType":"1","growthRate":".0145","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"3938.1595"},{"data":"201902","value":"3624.9929"},{"data":"201903","value":"4119.1113"},{"data":"201904","value":"4245.8204"},{"data":"201905","value":"4685.23"},{"data":"201906","value":"4753.4691"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"r2":{"item_1":{"value":"46363687","valueType":"1","growthRate":".0081","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"45061832"},{"data":"201902","value":"44997421"},{"data":"201903","value":"45842291"},{"data":"201904","value":"45826943"},{"data":"201905","value":"45989839"},{"data":"201906","value":"46363687"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"r3":{"item_1":{"value":".8208","valueType":"2","growthRate":".0038","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":".8019"},{"data":"201902","value":".8061"},{"data":"201903","value":".8098"},{"data":"201904","value":".8128"},{"data":"201905","value":".8177"},{"data":"201906","value":".8208"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}}}
	})
}


if(mockConst.isStatic.profile.leftF.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.profile.leftF.list), 'get', {
		"status":0,"msg":null,"obj":{"l1":{"item_1":{"value":"13461686","valueType":"1","growthRate":".0096","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"20190601","value":"13339088"},{"data":"20190602","value":"13347334"},{"data":"20190603","value":"13352630"},{"data":"20190604","value":"13337590"},{"data":"20190605","value":"13342845"},{"data":"20190606","value":"13348294"},{"data":"20190607","value":"13353051"},{"data":"20190608","value":"13360212"},{"data":"20190609","value":"13361488"},{"data":"20190610","value":"13366699"},{"data":"20190611","value":"13373075"},{"data":"20190612","value":"13380470"},{"data":"20190613","value":"13386846"},{"data":"20190614","value":"13393524"},{"data":"20190615","value":"13400624"},{"data":"20190616","value":"13372127"},{"data":"20190617","value":"13368631"},{"data":"20190618","value":"13375429"},{"data":"20190619","value":"13375612"},{"data":"20190620","value":"13383825"},{"data":"20190621","value":"13391279"},{"data":"20190622","value":"13402169"},{"data":"20190623","value":"13411354"},{"data":"20190624","value":"13419322"},{"data":"20190625","value":"13432180"},{"data":"20190626","value":"13441872"},{"data":"20190627","value":"13451273"},{"data":"20190628","value":"13461686"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"l2":{"item_1":{"value":"344076","valueType":"1","growthRate":".1732","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"20190601","value":"11219"},{"data":"20190602","value":"22192"},{"data":"20190603","value":"32562"},{"data":"20190604","value":"42581"},{"data":"20190605","value":"53688"},{"data":"20190606","value":"64295"},{"data":"20190607","value":"75279"},{"data":"20190608","value":"87569"},{"data":"20190609","value":"99702"},{"data":"20190610","value":"110226"},{"data":"20190611","value":"120170"},{"data":"20190612","value":"131100"},{"data":"20190613","value":"140400"},{"data":"20190614","value":"151934"},{"data":"20190615","value":"163222"},{"data":"20190616","value":"174887"},{"data":"20190617","value":"187269"},{"data":"20190618","value":"198741"},{"data":"20190619","value":"209150"},{"data":"20190620","value":"223692"},{"data":"20190621","value":"237034"},{"data":"20190622","value":"253419"},{"data":"20190623","value":"269396"},{"data":"20190624","value":"283113"},{"data":"20190625","value":"299798"},{"data":"20190626","value":"313913"},{"data":"20190627","value":"328186"},{"data":"20190628","value":"344076"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":".2711","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_4":{"value":[{"data":"20190601","value":".2684"},{"data":"20190602","value":".2669"},{"data":"20190603","value":".2673"},{"data":"20190604","value":".2672"},{"data":"20190605","value":".2674"},{"data":"20190606","value":".2674"},{"data":"20190607","value":".2666"},{"data":"20190608","value":".2679"},{"data":"20190609","value":".2681"},{"data":"20190610","value":".2683"},{"data":"20190611","value":".2686"},{"data":"20190612","value":".2688"},{"data":"20190613","value":".2689"},{"data":"20190614","value":".269"},{"data":"20190615","value":".2693"},{"data":"20190616","value":".2687"},{"data":"20190617","value":".2689"},{"data":"20190618","value":".2692"},{"data":"20190619","value":".2693"},{"data":"20190620","value":".2695"},{"data":"20190621","value":".2695"},{"data":"20190622","value":".2698"},{"data":"20190623","value":".2699"},{"data":"20190624","value":".2702"},{"data":"20190625","value":".2704"},{"data":"20190626","value":".2707"},{"data":"20190627","value":".2709"},{"data":"20190628","value":".2711"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_5":{"value":".7373","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_6":{"value":[{"data":"20190601","value":".8769"},{"data":"20190602","value":".8624"},{"data":"20190603","value":".8419"},{"data":"20190604","value":".8253"},{"data":"20190605","value":".8051"},{"data":"20190606","value":".7967"},{"data":"20190607","value":".795"},{"data":"20190608","value":".7873"},{"data":"20190609","value":".7854"},{"data":"20190610","value":".7805"},{"data":"20190611","value":".7733"},{"data":"20190612","value":".771"},{"data":"20190613","value":".767"},{"data":"20190614","value":".7634"},{"data":"20190615","value":".7626"},{"data":"20190616","value":".7632"},{"data":"20190617","value":".761"},{"data":"20190618","value":".7586"},{"data":"20190619","value":".7566"},{"data":"20190620","value":".7585"},{"data":"20190621","value":".7561"},{"data":"20190622","value":".7531"},{"data":"20190623","value":".7554"},{"data":"20190624","value":".751"},{"data":"20190625","value":".7477"},{"data":"20190626","value":".7427"},{"data":"20190627","value":".7396"},{"data":"20190628","value":".7373"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"r1":{"item_1":{"value":"11831484","valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"20190601","value":"11636836"},{"data":"20190602","value":"11644480"},{"data":"20190603","value":"11651624"},{"data":"20190604","value":"11643448"},{"data":"20190605","value":"11650501"},{"data":"20190606","value":"11657667"},{"data":"20190607","value":"11664233"},{"data":"20190608","value":"11672940"},{"data":"20190609","value":"11677274"},{"data":"20190610","value":"11684280"},{"data":"20190611","value":"11692127"},{"data":"20190612","value":"11700887"},{"data":"20190613","value":"11708549"},{"data":"20190614","value":"11717089"},{"data":"20190615","value":"11725834"},{"data":"20190616","value":"11716508"},{"data":"20190617","value":"11720534"},{"data":"20190618","value":"11728931"},{"data":"20190619","value":"11733427"},{"data":"20190620","value":"11743782"},{"data":"20190621","value":"11752325"},{"data":"20190622","value":"11763640"},{"data":"20190623","value":"11773319"},{"data":"20190624","value":"11783376"},{"data":"20190625","value":"11797591"},{"data":"20190626","value":"11808664"},{"data":"20190627","value":"11819428"},{"data":"20190628","value":"11831484"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":"98.5523","valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_4":{"value":[{"data":"20190601","value":"98.2637"},{"data":"20190602","value":"98.1036"},{"data":"20190603","value":"98.1206"},{"data":"20190604","value":"98.1473"},{"data":"20190605","value":"98.159"},{"data":"20190606","value":"98.1713"},{"data":"20190607","value":"98.1798"},{"data":"20190608","value":"98.1873"},{"data":"20190609","value":"98.1994"},{"data":"20190610","value":"98.2115"},{"data":"20190611","value":"98.2233"},{"data":"20190612","value":"98.2333"},{"data":"20190613","value":"98.2476"},{"data":"20190614","value":"98.2618"},{"data":"20190615","value":"98.2753"},{"data":"20190616","value":"98.3551"},{"data":"20190617","value":"98.3945"},{"data":"20190618","value":"98.408"},{"data":"20190619","value":"98.4321"},{"data":"20190620","value":"98.4482"},{"data":"20190621","value":"98.4592"},{"data":"20190622","value":"98.468"},{"data":"20190623","value":"98.474"},{"data":"20190624","value":"98.4895"},{"data":"20190625","value":"98.5026"},{"data":"20190626","value":"98.5227"},{"data":"20190627","value":"98.5397"},{"data":"20190628","value":"98.5523"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null}},"r2":{"item_1":{"value":"138232","valueType":"1","growthRate":"-.1161","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"20190601","value":"4486"},{"data":"20190602","value":"15393"},{"data":"20190603","value":"22456"},{"data":"20190604","value":"27599"},{"data":"20190605","value":"32414"},{"data":"20190606","value":"36302"},{"data":"20190607","value":"41101"},{"data":"20190608","value":"44946"},{"data":"20190609","value":"48497"},{"data":"20190610","value":"52076"},{"data":"20190611","value":"57660"},{"data":"20190612","value":"62595"},{"data":"20190613","value":"67441"},{"data":"20190614","value":"73791"},{"data":"20190615","value":"81843"},{"data":"20190616","value":"85931"},{"data":"20190617","value":"90017"},{"data":"20190618","value":"93095"},{"data":"20190619","value":"96124"},{"data":"20190620","value":"99335"},{"data":"20190621","value":"102688"},{"data":"20190622","value":"106171"},{"data":"20190623","value":"110273"},{"data":"20190624","value":"114241"},{"data":"20190625","value":"120486"},{"data":"20190626","value":"125444"},{"data":"20190627","value":"131643"},{"data":"20190628","value":"138232"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":"322349","valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_4":{"value":[{"data":"20190601","value":"325007"},{"data":"20190602","value":"324979"},{"data":"20190603","value":"324920"},{"data":"20190604","value":"324800"},{"data":"20190605","value":"324774"},{"data":"20190606","value":"324746"},{"data":"20190607","value":"324696"},{"data":"20190608","value":"324629"},{"data":"20190609","value":"324574"},{"data":"20190610","value":"324530"},{"data":"20190611","value":"324457"},{"data":"20190612","value":"324404"},{"data":"20190613","value":"324375"},{"data":"20190614","value":"323857"},{"data":"20190615","value":"323443"},{"data":"20190616","value":"323357"},{"data":"20190617","value":"323239"},{"data":"20190618","value":"323172"},{"data":"20190619","value":"323120"},{"data":"20190620","value":"323077"},{"data":"20190621","value":"323023"},{"data":"20190622","value":"322964"},{"data":"20190623","value":"322842"},{"data":"20190624","value":"322708"},{"data":"20190625","value":"322650"},{"data":"20190626","value":"322584"},{"data":"20190627","value":"322488"},{"data":"20190628","value":"322349"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_5":{"value":".8098","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_6":{"value":".8945","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_7":{"value":".0103","valueType":"2","growthRate":null,"growthRateType":null,"rank":null}}}
	})
}

//leftG.list
if(mockConst.isStatic.profile.leftG.list) {
	Mock.mock(mockConst.getRegExpUrl(api.url.profile.leftG.list), 'get', {
		"status":0,"msg":null,"obj":{"l1":{"item_1":{"value":"7517176","valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"20190601","value":"7429989"},{"data":"20190602","value":"7436125"},{"data":"20190603","value":"7439372"},{"data":"20190604","value":"7433705"},{"data":"20190605","value":"7437408"},{"data":"20190606","value":"7441495"},{"data":"20190607","value":"7444917"},{"data":"20190608","value":"7449637"},{"data":"20190609","value":"7451767"},{"data":"20190610","value":"7455621"},{"data":"20190611","value":"7460025"},{"data":"20190612","value":"7464728"},{"data":"20190613","value":"7469014"},{"data":"20190614","value":"7473326"},{"data":"20190615","value":"7478865"},{"data":"20190616","value":"7472067"},{"data":"20190617","value":"7473359"},{"data":"20190618","value":"7477491"},{"data":"20190619","value":"7481288"},{"data":"20190620","value":"7485323"},{"data":"20190621","value":"7488888"},{"data":"20190622","value":"7494290"},{"data":"20190623","value":"7498809"},{"data":"20190624","value":"7502254"},{"data":"20190625","value":"7505629"},{"data":"20190626","value":"7509654"},{"data":"20190627","value":"7513102"},{"data":"20190628","value":"7517176"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":".0138","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_4":{"value":[{"data":"20190601","value":".0131"},{"data":"20190602","value":".0128"},{"data":"20190603","value":".0125"},{"data":"20190604","value":".0129"},{"data":"20190605","value":".0129"},{"data":"20190606","value":".013"},{"data":"20190607","value":".013"},{"data":"20190608","value":".0131"},{"data":"20190609","value":".0133"},{"data":"20190610","value":".0134"},{"data":"20190611","value":".0132"},{"data":"20190612","value":".0132"},{"data":"20190613","value":".0133"},{"data":"20190614","value":".0132"},{"data":"20190615","value":".0133"},{"data":"20190616","value":".0126"},{"data":"20190617","value":".0122"},{"data":"20190618","value":".0121"},{"data":"20190619","value":".0121"},{"data":"20190620","value":".0123"},{"data":"20190621","value":".0123"},{"data":"20190622","value":".0124"},{"data":"20190623","value":".0127"},{"data":"20190624","value":".0127"},{"data":"20190625","value":".0127"},{"data":"20190626","value":".0128"},{"data":"20190627","value":".0129"},{"data":"20190628","value":".0138"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"l2":{"item_1":{"value":"207304","valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_2":{"value":[{"data":"20190601","value":"8468"},{"data":"20190602","value":"16451"},{"data":"20190603","value":"23171"},{"data":"20190604","value":"30084"},{"data":"20190605","value":"37172"},{"data":"20190606","value":"44256"},{"data":"20190607","value":"51508"},{"data":"20190608","value":"59740"},{"data":"20190609","value":"67959"},{"data":"20190610","value":"75062"},{"data":"20190611","value":"81898"},{"data":"20190612","value":"88914"},{"data":"20190613","value":"94909"},{"data":"20190614","value":"102052"},{"data":"20190615","value":"110024"},{"data":"20190616","value":"117989"},{"data":"20190617","value":"124903"},{"data":"20190618","value":"131757"},{"data":"20190619","value":"138572"},{"data":"20190620","value":"145482"},{"data":"20190621","value":"152080"},{"data":"20190622","value":"160661"},{"data":"20190623","value":"169588"},{"data":"20190624","value":"176754"},{"data":"20190625","value":"183573"},{"data":"20190626","value":"191262"},{"data":"20190627","value":"199012"},{"data":"20190628","value":"207304"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":".4094","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_4":{"value":[{"data":"20190601","value":".5058"},{"data":"20190602","value":".4918"},{"data":"20190603","value":".468"},{"data":"20190604","value":".4625"},{"data":"20190605","value":".4546"},{"data":"20190606","value":".4536"},{"data":"20190607","value":".4534"},{"data":"20190608","value":".4541"},{"data":"20190609","value":".4547"},{"data":"20190610","value":".4539"},{"data":"20190611","value":".4527"},{"data":"20190612","value":".4488"},{"data":"20190613","value":".4458"},{"data":"20190614","value":".444"},{"data":"20190615","value":".446"},{"data":"20190616","value":".4473"},{"data":"20190617","value":".4432"},{"data":"20190618","value":".4418"},{"data":"20190619","value":".4425"},{"data":"20190620","value":".4352"},{"data":"20190621","value":".4298"},{"data":"20190622","value":".4258"},{"data":"20190623","value":".4234"},{"data":"20190624","value":".4205"},{"data":"20190625","value":".413"},{"data":"20190626","value":".4118"},{"data":"20190627","value":".4106"},{"data":"20190628","value":".4094"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_5":{"value":".4833","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_6":{"value":[{"data":"20190601","value":".9561"},{"data":"20190602","value":".7806"},{"data":"20190603","value":".6702"},{"data":"20190604","value":".6286"},{"data":"20190605","value":".6025"},{"data":"20190606","value":".5983"},{"data":"20190607","value":".5973"},{"data":"20190608","value":".5895"},{"data":"20190609","value":".584"},{"data":"20190610","value":".5414"},{"data":"20190611","value":".5264"},{"data":"20190612","value":".524"},{"data":"20190613","value":".4961"},{"data":"20190614","value":".5263"},{"data":"20190615","value":".5358"},{"data":"20190616","value":".5318"},{"data":"20190617","value":".4968"},{"data":"20190618","value":".4986"},{"data":"20190619","value":".5007"},{"data":"20190620","value":".4962"},{"data":"20190621","value":".5058"},{"data":"20190622","value":".5148"},{"data":"20190623","value":".507"},{"data":"20190624","value":".4708"},{"data":"20190625","value":".4807"},{"data":"20190626","value":".4781"},{"data":"20190627","value":".4763"},{"data":"20190628","value":".4833"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"r1":{"item_1":{"value":"3778530","valueType":"1","growthRate":".5022","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":".511"},{"data":"201902","value":".5135"},{"data":"201903","value":".5027"},{"data":"201904","value":".5003"},{"data":"201905","value":".4964"},{"data":"201906","value":".5022"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}},"r2":{"item_1":{"value":"10846685","valueType":"1","growthRate":".9964","growthRateType":"2","rank":null},"item_2":{"value":[{"data":"201901","value":"10990061"},{"data":"201902","value":"10484543"},{"data":"201903","value":"10938431"},{"data":"201904","value":"10736778"},{"data":"201905","value":"10886348"},{"data":"201906","value":"10846685"}],"valueType":"1","growthRate":null,"growthRateType":null,"rank":null},"item_3":{"value":".2113","valueType":"2","growthRate":null,"growthRateType":null,"rank":null},"item_4":{"value":[{"data":"201901","value":".2215"},{"data":"201902","value":".2115"},{"data":"201903","value":".2159"},{"data":"201904","value":".2113"},{"data":"201905","value":".2133"},{"data":"201906","value":".2113"}],"valueType":"2","growthRate":null,"growthRateType":null,"rank":null}}}
	})
}

//网格概况地图
if(mockConst.isStatic.profile.kpi.getAreaInfo){
  Mock.mock(mockConst.getRegExpUrl(api.url.profile.kpi.getAreaInfo), 'get', {
    "status": 0,
    "msg": null,
    "obj": {
      "path": "浙江省",
      "map": {
        "pid": "0",
        "grid_name": "浙江省",
        "grid_id": "1",
        "grid_level": "1",
        "center": "admin",
        "grid_location": null,
        "child": [
          {
            "pid": "1",
            "grid_name": "嘉兴市",
            "grid_id": "4",
            "grid_level": "2",
            "center": "jiaxing",
            "grid_location": "121.250505,30.456056;121.187265,30.446094;121.102177,30.402247;121.057334,30.357383;121.025785,30.332324;120.959598,30.291544;120.88256,30.25761;120.868833,30.251995;120.856473,30.250997;120.748029,30.281565;120.726542,30.293665;120.709294,30.308133;120.687448,30.36;120.680549,30.376203;120.664307,30.39664;120.659133,30.401375;120.646844,30.40424;120.562547,30.402247;120.499738,30.400876;120.476397,30.398305;120.466084,30.396499;120.46303,30.394879;120.459329,30.390518;120.458431,30.387963;120.45534,30.381421;120.45243,30.37709;120.449771,30.373476;120.447076,30.369207;120.44239,30.362742;120.437374,30.356587;120.435829,30.354063;120.433191,30.350776;120.432164,30.348391;120.431769,30.346739;120.430368,30.344214;120.429361,30.340692;120.427873,30.337312;120.426307,30.33477;120.425481,30.331965;120.42275,30.32838;120.420307,30.323922;120.417252,30.326666;120.41312,30.330562;120.409635,30.330999;120.407083,30.33304;120.40173,30.338074;120.390932,30.344744;120.390429,30.345274;120.390411,30.345913;120.390186,30.346708;120.390052,30.347752;120.390447,30.348905;120.394049,30.354795;120.395486,30.357311;120.395585,30.358083;120.39554,30.358363;120.39554,30.358745;120.39537,30.359758;120.394687,30.361152;120.394471,30.362445;120.394534,30.363848;120.394938,30.364938;120.395918,30.366387;120.399089,30.370804;120.399699,30.371786;120.399699,30.372089;120.40075,30.373102;120.404254,30.376521;120.404442,30.376638;120.40552,30.376771;120.405826,30.376919;120.405979,30.37702;120.40738,30.378562;120.407299,30.378998;120.406783,30.386183;120.405889,30.386359;120.405673,30.386355;120.404901,30.386546;120.40486,30.387282;120.404115,30.388407;120.402911,30.388933;120.401765,30.388937;120.399663,30.388555;120.39439,30.387418;120.390088,30.386931;120.38596,30.386888;120.379667,30.384575;120.377601,30.383582;120.376137,30.383162;120.37333,30.382355;120.368986,30.380922;120.366826,30.38026;120.365622,30.380027;120.364522,30.379937;120.362384,30.380408;120.359931,30.379668;120.357668,30.378103;120.355548,30.377223;120.353738,30.375634;120.352745,30.374656;120.351321,30.372849;120.349947,30.374247;120.349992,30.377335;120.347068,30.380038;120.345141,30.381168;120.343223,30.38202;120.339459,30.382624;120.333813,30.383917;120.330651,30.388169;120.327574,30.392398;120.325463,30.395058;120.32342,30.397787;120.32218,30.399446;120.321026,30.400202;120.317693,30.40012;120.31634,30.400129;120.315133,30.400517;120.314077,30.401381;120.313516,30.402339;120.31352,30.403624;120.313691,30.40408;120.314109,30.404469;120.31573,30.404835;120.316826,30.405481;120.317325,30.406645;120.317217,30.407634;120.317936,30.408483;120.318762,30.409016;120.319548,30.408592;120.320357,30.407249;120.320824,30.406299;120.321542,30.405917;120.325086,30.408471;120.327624,30.410663;120.329411,30.412213;120.329236,30.413704;120.333916,30.420267;120.336432,30.424841;120.337752,30.42727;120.33808,30.427877;120.338902,30.428952;120.338996,30.42945;120.33905,30.431034;120.338206,30.432521;120.338417,30.434187;120.339432,30.435137;120.340497,30.436005;120.341826,30.436351;120.346991,30.436028;120.348002,30.436666;120.34833,30.43741;120.348002,30.438414;120.348011,30.438647;120.348128,30.440387;120.346973,30.443719;120.346574,30.446677;120.345244,30.456806;120.344948,30.463242;120.344961,30.466079;120.34497,30.468752;120.345554,30.470729;120.347656,30.470841;120.349197,30.471211;120.350827,30.471791;120.351074,30.472156;120.35107,30.472682;120.34965,30.475674;120.349116,30.476273;120.348191,30.477452;120.346062,30.47802;120.343686,30.477922;120.341548,30.47744;120.339944,30.475923;120.337829,30.474429;120.336831,30.474238;120.335713,30.474397;120.334873,30.476712;120.334846,30.479529;120.333952,30.481081;120.333328,30.482591;120.332551,30.484493;120.332317,30.486687;120.332861,30.487419;120.334424,30.490145;120.33389,30.493958;120.334199,30.497003;120.333651,30.499917;120.331392,30.503044;120.331554,30.503269;120.332205,30.503608;120.332129,30.504176;120.332699,30.50633;120.331087,30.508271;120.329223,30.512355;120.328886,30.515828;120.327678,30.520071;120.326487,30.524282;120.324269,30.527377;120.322903,30.52765;120.321178,30.52758;120.31821,30.526448;120.313143,30.526001;120.306532,30.525464;120.307367,30.527626;120.307807,30.529045;120.308584,30.532327;120.308589,30.535632;120.307893,30.539155;120.307668,30.541748;120.307726,30.546095;120.307578,30.54987;120.307358,30.552634;120.307416,30.555868;120.307039,30.55876;120.306469,30.560758;120.3061,30.562686;120.30429,30.565085;120.3035,30.566122;120.302584,30.567572;120.302615,30.569691;120.302561,30.570316;120.303482,30.570697;120.305031,30.570581;120.306675,30.570767;120.307569,30.571568;120.309285,30.572295;120.311014,30.57292;120.31295,30.572979;120.315991,30.573768;120.316745,30.574537;120.31741,30.575167;120.318299,30.576403;120.32059,30.577223;120.321583,30.577744;120.322876,30.578894;120.325826,30.584666;120.324891,30.587526;120.32058,30.59219;120.312387,30.598655;120.309944,30.600521;120.30865,30.602013;120.308435,30.60394;120.3098,30.606302;120.310016,30.614694;120.31289,30.616994;120.31598,30.618237;120.322089,30.617802;120.331287,30.618486;120.339264,30.620661;120.343289,30.629052;120.346451,30.637752;120.346595,30.642289;120.350403,30.653411;120.348104,30.658631;120.348391,30.663042;120.346666,30.667142;120.348535,30.668447;120.35335,30.669379;120.360464,30.669006;120.364632,30.667826;120.366214,30.664036;120.368801,30.662234;120.371963,30.660867;120.373831,30.661489;120.375843,30.664098;120.377784,30.664409;120.381018,30.662793;120.382886,30.662793;120.384755,30.664533;120.385329,30.666521;120.38497,30.668882;120.384323,30.670745;120.384539,30.672982;120.387557,30.677082;120.394097,30.6782;120.397187,30.678076;120.400924,30.677144;120.405739,30.677579;120.412422,30.677392;120.414003,30.678138;120.415153,30.679566;120.416806,30.683666;120.418387,30.683977;120.421046,30.6823;120.42428,30.681741;120.426867,30.681741;120.435491,30.685902;120.439659,30.686275;120.447492,30.687766;120.460572,30.686834;120.461793,30.688449;120.461937,30.691058;120.459637,30.69466;120.45705,30.695591;120.455254,30.697455;120.454966,30.699939;120.453385,30.701057;120.449504,30.69969;120.447923,30.700932;120.447923,30.704162;120.451373,30.707764;120.461434,30.70677;120.471639,30.709254;120.474944,30.70826;120.483137,30.718196;120.484718,30.724653;120.49521,30.738436;120.488167,30.740919;120.487449,30.745388;120.474369,30.771208;120.47825,30.773318;120.484287,30.772449;120.49133,30.768477;120.498228,30.770339;120.511164,30.763388;120.539335,30.799874;120.570955,30.843788;120.597401,30.858669;120.623848,30.854701;120.638795,30.864621;120.652593,30.861645;120.657193,30.852717;120.687088,30.887433;120.70606,30.87375;120.710085,30.878957;120.708935,30.888626;120.718421,30.891601;120.711235,30.945926;120.690538,30.962773;120.706635,30.977636;120.713534,30.975654;120.725033,30.978627;120.733656,30.978085;120.738687,30.974989;120.745011,30.96892;120.752341,30.96892;120.773326,30.98259;120.774619,30.996784;120.777494,31.002479;120.78238,31.003098;120.806671,31.011316;120.831967,31.011316;120.853383,30.996288;120.862294,31.000251;120.870774,30.99666;120.874511,31.000993;120.88026,31.001241;120.885434,31.005575;120.898226,31.00867;120.898945,31.015974;120.901532,31.016964;120.901819,31.022782;120.91188,31.022659;120.916192,31.016345;120.925103,31.01845;120.94695,31.015278;120.956149,31.027161;120.953849,31.036073;120.961898,31.036073;120.973396,31.02419;120.994093,31.02122;120.998692,31.017258;120.999267,31.010032;120.99898,31.006194;121.006598,31.006317;121.007604,30.979076;121.000705,30.978271;120.998836,30.974307;121.001423,30.963965;121.007029,30.944083;121.006382,30.91577;121.012347,30.915274;121.011412,30.91323;121.010334,30.91323;121.010334,30.911061;121.005807,30.91199;121.005088,30.909574;121.002358,30.909945;120.999555,30.908396;120.999914,30.906289;120.997183,30.901641;120.999699,30.90034;121.000381,30.896095;121.014503,30.894049;121.014754,30.889401;121.023953,30.888471;121.027546,30.884752;121.026756,30.883203;121.028624,30.881839;121.026468,30.878058;121.025462,30.878616;121.023019,30.876942;121.024887,30.874463;121.020935,30.870309;121.022444,30.868697;121.02115,30.866899;121.022516,30.866155;121.021725,30.865039;121.020072,30.865287;121.019713,30.86442;121.017413,30.861878;121.021869,30.860018;121.019713,30.85791;121.017413,30.859274;121.010442,30.851585;121.008286,30.852019;121.005052,30.849539;121.002034,30.843958;121.000094,30.845074;120.996285,30.840176;120.996285,30.838501;120.998872,30.837881;120.997219,30.835276;120.999375,30.832734;120.996788,30.829633;121.000956,30.8274;121.00613,30.834904;121.011592,30.834718;121.020539,30.841803;121.038937,30.832873;121.043536,30.816995;121.050435,30.824935;121.05392,30.836827;121.067754,30.844919;121.066964,30.851523;121.073467,30.855213;121.087158,30.855244;121.103579,30.863273;121.104728,30.862188;121.103974,30.861692;121.105196,30.860452;121.106453,30.860855;121.106777,30.860297;121.105591,30.859987;121.106848,30.858468;121.108142,30.857104;121.107926,30.856174;121.110621,30.856856;121.11152,30.855802;121.11443,30.856794;121.117017,30.857724;121.118778,30.859429;121.117556,30.860297;121.116838,30.859987;121.116478,30.861072;121.117664,30.861444;121.123162,30.856794;121.130204,30.853445;121.126503,30.848764;121.126575,30.845416;121.125785,30.842656;121.12927,30.841974;121.131857,30.842036;121.136888,30.840672;121.138289,30.842625;121.13872,30.841385;121.141128,30.83909;121.139511,30.838067;121.139547,30.837447;121.141056,30.836486;121.140265,30.835773;121.140876,30.835307;121.140876,30.834687;121.141882,30.834346;121.143787,30.836548;121.144254,30.836052;121.143966,30.833912;121.144649,30.832145;121.14411,30.830532;121.143571,30.830625;121.140481,30.826036;121.13908,30.825229;121.138397,30.822996;121.137786,30.822066;121.136816,30.821353;121.135774,30.817135;121.134804,30.815925;121.134804,30.813227;121.133726,30.808947;121.133079,30.804481;121.133187,30.801937;121.132935,30.799859;121.13254,30.798494;121.133295,30.795454;121.13272,30.794213;121.133834,30.786302;121.133654,30.784627;121.138972,30.782952;121.142745,30.783169;121.144505,30.784348;121.145943,30.784968;121.146338,30.785589;121.147811,30.785558;121.149248,30.785837;121.150434,30.785402;121.15162,30.785185;121.157441,30.784999;121.160316,30.783665;121.1624,30.781586;121.166208,30.78078;121.166532,30.779725;121.167466,30.779632;121.170556,30.779942;121.172425,30.78078;121.176234,30.781524;121.177024,30.781059;121.17803,30.780842;121.178641,30.780997;121.180725,30.779632;121.180869,30.778515;121.183923,30.779725;121.190606,30.781028;121.193194,30.781804;121.192583,30.785247;121.194236,30.785868;121.194954,30.785558;121.195817,30.785465;121.196499,30.786737;121.197362,30.787357;121.199302,30.783851;121.203255,30.779725;121.204368,30.780128;121.207351,30.780097;121.206776,30.782672;121.20577,30.784782;121.205734,30.787047;121.205159,30.787884;121.206345,30.788412;121.205878,30.789746;121.210405,30.792197;121.213855,30.792383;121.21734,30.791979;121.223664,30.792383;121.226143,30.787915;121.226287,30.786985;121.227114,30.786116;121.227904,30.781866;121.228695,30.781059;121.232827,30.779415;121.234516,30.77881;121.234731,30.778205;121.233042,30.777646;121.232503,30.777662;121.233707,30.776405;121.235001,30.775009;121.235953,30.773085;121.236995,30.769905;121.237678,30.765483;121.238468,30.763202;121.239007,30.76328;121.239187,30.762907;121.239546,30.762674;121.238935,30.761806;121.242277,30.760192;121.245403,30.758454;121.249787,30.756561;121.249895,30.75563;121.251368,30.755723;121.254099,30.753954;121.262938,30.749795;121.267322,30.744705;121.272065,30.740236;121.27458,30.741167;121.276017,30.738746;121.278173,30.738622;121.274939,30.735518;121.276377,30.733718;121.277455,30.732724;121.276233,30.731731;121.275586,30.726392;121.276449,30.723039;121.273215,30.721487;121.273574,30.719562;121.274652,30.718568;121.273574,30.717389;121.272352,30.717202;121.272712,30.716209;121.271634,30.715464;121.272712,30.712794;121.273861,30.712794;121.273574,30.709999;121.276592,30.703913;121.281335,30.6982;121.289959,30.689256;121.495419,30.673976;121.524165,30.676958;121.547162,30.686896;121.531064,30.256612;121.48852,30.295536;121.464374,30.324469;121.427579,30.362369;121.390785,30.394272;121.367573,30.413335;121.35399,30.428159;121.301098,30.449083",
            "child": null,
            "data": {
              "value": ".8471",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "湖州市",
            "grid_id": "3",
            "grid_level": "2",
            "center": "1",
            "grid_location": "119.255823,30.627376;119.261752,30.623896;119.261716,30.621907;119.264626,30.622404;119.274975,30.624393;119.283599,30.627376;119.288773,30.626382;119.289348,30.625885;119.293372,30.625388;119.303721,30.628371;119.311769,30.629365;119.317519,30.630857;119.320968,30.634337;119.326142,30.638812;119.334766,30.653228;119.347414,30.672612;119.355463,30.675594;119.360062,30.677582;119.361212,30.678575;119.365812,30.68106;119.369261,30.683048;119.37616,30.687023;119.380759,30.689508;119.388808,30.690501;119.393407,30.694476;119.397432,30.694476;119.401456,30.694476;119.401456,30.690004;119.402606,30.68752;119.404331,30.684042;119.405481,30.681557;119.406631,30.676091;119.40893,30.666151;119.412955,30.662175;119.41353,30.658199;119.418704,30.653725;119.420429,30.652234;119.424453,30.651737;119.429052,30.651737;119.435376,30.653228;119.4417,30.654222;119.444575,30.65621;119.448599,30.657701;119.449174,30.674103;119.449174,30.677085;119.456073,30.680066;119.464122,30.686526;119.465272,30.689011;119.469584,30.694228;119.472746,30.699196;119.475908,30.703171;119.47792,30.705903;119.483094,30.707145;119.485394,30.708139;119.486831,30.7141;119.487694,30.724532;119.485107,30.734465;119.484819,30.736452;119.484532,30.741915;119.485681,30.745639;119.488269,30.748619;119.489706,30.751102;119.488556,30.753088;119.487694,30.753585;119.485681,30.755074;119.483957,30.756812;119.483382,30.758798;119.483382,30.76277;119.484819,30.766742;119.485394,30.768728;119.485969,30.7727;119.485394,30.776175;119.485107,30.779898;119.486256,30.782629;119.491718,30.784118;119.496317,30.784366;119.500629,30.783621;119.504079,30.781636;119.505516,30.780147;119.506666,30.778409;119.508678,30.777168;119.511265,30.777416;119.513852,30.778657;119.518164,30.77965;119.522189,30.780395;119.524776,30.781388;119.52765,30.782132;119.530237,30.78387;119.531675,30.786352;119.533399,30.788833;119.535412,30.792556;119.538574,30.797023;119.540873,30.800497;119.540873,30.803723;119.541161,30.806453;119.542886,30.808686;119.546335,30.810175;119.547485,30.810919;119.549785,30.817122;119.552659,30.823573;119.554384,30.826302;119.555821,30.828287;119.558983,30.832256;119.56272,30.834737;119.565595,30.836225;119.569907,30.837465;119.572206,30.836473;119.575943,30.835977;119.577668,30.835729;119.580542,30.837217;119.581692,30.838209;119.581692,30.84069;119.580542,30.844907;119.57853,30.851108;119.57853,30.854084;119.578818,30.857804;119.578818,30.859044;119.574793,30.862516;119.573644,30.864252;119.573069,30.865244;119.572206,30.865988;119.568757,30.869955;119.565882,30.873923;119.564157,30.876155;119.563008,30.880618;119.563008,30.884833;119.56272,30.88756;119.56387,30.892022;119.564732,30.894006;119.56502,30.894997;119.563295,30.899212;119.562145,30.903178;119.562433,30.909871;119.563582,30.912597;119.568182,30.916563;119.567607,30.924246;119.568182,30.925485;119.571056,30.927963;119.575943,30.930442;119.580542,30.932672;119.585717,30.935398;119.586579,30.936389;119.584567,30.941593;119.584567,30.944071;119.584854,30.946796;119.584854,30.949026;119.586004,30.951256;119.587441,30.953238;119.587729,30.954724;119.587729,30.956954;119.587441,30.959432;119.586579,30.961661;119.586579,30.965873;119.585142,30.969836;119.586292,30.973304;119.588304,30.978753;119.591178,30.982716;119.592041,30.984202;119.593766,30.986184;119.597502,30.98866;119.598365,30.989651;119.602677,30.992128;119.603827,30.993861;119.607276,30.996338;119.611013,30.997823;119.616762,31.001043;119.617912,31.002528;119.61705,31.003767;119.61705,31.004757;119.619637,31.007481;119.623374,31.009709;119.631997,31.015404;119.634297,31.017385;119.634872,31.024317;119.637172,31.027783;119.638609,31.031249;119.641484,31.032486;119.640046,31.033229;119.636309,31.033724;119.63286,31.035457;119.63171,31.042388;119.631997,31.044616;119.633435,31.048328;119.637172,31.052288;119.639184,31.053773;119.635159,31.054021;119.633435,31.056248;119.631423,31.059465;119.631997,31.06392;119.633147,31.066394;119.636309,31.069859;119.635734,31.070849;119.635447,31.072333;119.63401,31.074065;119.63401,31.07654;119.634297,31.079261;119.634585,31.082478;119.63171,31.084457;119.630848,31.087179;119.63056,31.089405;119.631135,31.092127;119.633722,31.094848;119.637459,31.097074;119.637747,31.098806;119.639184,31.103753;119.642346,31.108206;119.644646,31.106969;119.647808,31.106969;119.651832,31.107464;119.654132,31.109195;119.654419,31.114637;119.651832,31.12082;119.648957,31.122551;119.644646,31.124777;119.642058,31.127992;119.636597,31.136647;119.635734,31.138872;119.639471,31.140603;119.642921,31.142086;119.643783,31.142581;119.642921,31.146537;119.643496,31.150246;119.645795,31.153954;119.64982,31.157168;119.651545,31.158899;119.654994,31.160876;119.656719,31.161618;119.661318,31.162607;119.66333,31.164337;119.667355,31.166315;119.66793,31.167551;119.667642,31.171259;119.670804,31.173236;119.686039,31.175708;119.687189,31.174225;119.689489,31.168787;119.695238,31.166068;119.700412,31.163348;119.702425,31.162854;119.704724,31.161371;119.706736,31.159887;119.709611,31.159146;119.710761,31.15964;119.711623,31.160382;119.712486,31.160876;119.71536,31.16582;119.71651,31.169034;119.717372,31.172;119.71996,31.175213;119.721397,31.176449;119.725709,31.176944;119.731458,31.177191;119.738069,31.179168;119.745831,31.180651;119.747268,31.180898;119.751292,31.178427;119.754454,31.176449;119.756179,31.177932;119.761928,31.178179;119.769977,31.180157;119.771414,31.181145;119.774289,31.182381;119.775151,31.182875;119.776876,31.183617;119.781763,31.184853;119.7855,31.186088;119.790387,31.184358;119.794124,31.182134;119.796711,31.180404;119.799585,31.178427;119.800735,31.175955;119.801598,31.174719;119.801885,31.172989;119.800448,31.171506;119.799298,31.168787;119.798435,31.167551;119.798723,31.165079;119.799585,31.164832;119.803035,31.165573;119.804185,31.166562;119.810796,31.168045;119.815395,31.168539;119.816545,31.169034;119.81712,31.172;119.81712,31.175461;119.81942,31.178427;119.825744,31.17991;119.83293,31.181145;119.83753,31.181392;119.838967,31.179415;119.842129,31.181145;119.846153,31.179662;119.848453,31.177191;119.85219,31.176202;119.856214,31.175461;119.858227,31.175461;119.860526,31.176696;119.864263,31.176944;119.868,31.176449;119.872312,31.175708;119.875762,31.174966;119.877486,31.17373;119.879786,31.171753;119.883236,31.170023;119.884385,31.169034;119.885535,31.168292;119.888122,31.169281;119.894446,31.171259;119.899621,31.173236;119.904507,31.175213;119.908532,31.176696;119.926929,31.176696;119.928366,31.176944;119.927217,31.17373;119.928366,31.169775;119.931528,31.164584;119.93469,31.161371;119.937852,31.158404;119.94044,31.156179;119.942739,31.154696;119.945039,31.152718;119.946764,31.150493;119.948201,31.148268;119.948776,31.145548;119.948776,31.143323;119.948776,31.142086;119.948201,31.138625;119.948488,31.136647;119.949063,31.134174;119.949926,31.130959;119.951076,31.124529;119.9528,31.120325;119.954525,31.117852;119.955675,31.113647;119.956825,31.110432;119.958549,31.106969;119.959987,31.10499;119.965448,31.098064;119.968036,31.095343;119.97206,31.088663;119.974072,31.086436;119.977234,31.082725;119.978097,31.079509;119.979821,31.077035;119.982983,31.074313;119.985858,31.072333;119.98787,31.070849;119.989595,31.070106;119.993619,31.066147;119.994769,31.061693;119.995631,31.05897;119.997069,31.054763;119.999081,31.050308;120.001093,31.046596;120.002818,31.043625;120.002243,31.04115;120.003393,31.039665;120.00828,31.035705;120.012304,31.032239;120.020065,31.027783;120.022653,31.026545;120.028977,31.022832;120.034726,31.019861;120.039325,31.018375;120.045074,31.016395;120.048524,31.016147;120.053985,31.013919;120.05801,31.012681;120.061172,31.010947;120.063759,31.009214;120.067208,31.005995;120.070083,31.003519;120.072095,31.00129;120.074107,30.999309;120.076695,30.997823;120.078994,30.995347;120.080719,30.994109;120.086181,30.991137;120.092505,30.987174;120.096242,30.983707;120.101416,30.980239;120.10544,30.975038;120.109177,30.971818;120.116364,30.966368;120.122688,30.961413;120.131024,30.955963;120.134761,30.953733;120.13936,30.950513;120.142235,30.949274;120.152871,30.947044;120.158045,30.946053;120.167244,30.944566;120.176442,30.942832;120.184204,30.942088;120.190528,30.940849;120.198289,30.938867;120.205188,30.938124;120.205476,30.937628;120.21065,30.938124;120.227035,30.937132;120.233072,30.935893;120.239108,30.934654;120.249169,30.933911;120.257793,30.933663;120.266992,30.933663;120.280502,30.933911;120.290851,30.935398;120.300912,30.936389;120.310398,30.938124;120.315285,30.938124;120.322758,30.939858;120.333682,30.942584;120.338281,30.944566;120.350929,30.946548;120.363003,30.95076;120.372776,30.954229;120.378813,30.955715;120.376513,30.948035;120.373638,30.945805;120.372201,30.945062;120.371339,30.942832;120.369614,30.942584;120.368177,30.940354;120.367027,30.938619;120.367027,30.937876;120.367602,30.936637;120.368177,30.934407;120.369614,30.932176;120.369902,30.930442;120.369902,30.928211;120.368177,30.926972;120.367314,30.925485;120.365015,30.92499;120.365015,30.922511;120.36444,30.919537;120.364727,30.916067;120.365302,30.913589;120.366739,30.911606;120.366739,30.909127;120.368177,30.906648;120.369327,30.902186;120.369327,30.900203;120.369902,30.896981;120.370764,30.894254;120.371339,30.892022;120.372201,30.891527;120.373926,30.891279;120.378813,30.891775;120.383125,30.895493;120.390598,30.897229;120.394623,30.897724;120.39951,30.897724;120.401809,30.897229;120.401522,30.895989;120.406696,30.896981;120.417332,30.89884;120.423369,30.901195;120.424375,30.901443;120.424806,30.90293;120.425525,30.905161;120.425668,30.907268;120.427393,30.908631;120.427824,30.910243;120.428255,30.912597;120.423656,30.928335;120.424375,30.931805;120.425093,30.933168;120.431849,30.932796;120.439035,30.927592;120.441335,30.925237;120.442772,30.923131;120.444641,30.919661;120.443778,30.915819;120.443778,30.912845;120.443203,30.90826;120.441622,30.89413;120.441622,30.893138;120.442341,30.892518;120.445215,30.891527;120.447228,30.889543;120.44924,30.886444;120.450533,30.884709;120.452833,30.882229;120.454845,30.880246;120.45542,30.879626;120.456283,30.878882;120.458726,30.878138;120.459445,30.877394;120.460307,30.874295;120.459445,30.873055;120.45887,30.872683;120.456283,30.872063;120.453695,30.871319;120.45154,30.870327;120.450677,30.869707;120.449958,30.868468;120.449527,30.867724;120.448809,30.866608;120.448234,30.865244;120.44809,30.86326;120.44809,30.86264;120.448521,30.861648;120.448952,30.861028;120.449671,30.860036;120.45039,30.859292;120.451252,30.858796;120.452258,30.8583;120.453121,30.857804;120.454558,30.85706;120.457289,30.856688;120.459013,30.856068;120.46002,30.85582;120.461313,30.853216;120.461601,30.852472;120.462175,30.85148;120.463325,30.849743;120.464475,30.848999;120.465769,30.847883;120.466344,30.846891;120.46735,30.845403;120.467493,30.843915;120.467493,30.84193;120.467637,30.840566;120.467781,30.83945;120.468212,30.838085;120.468643,30.837093;120.469074,30.835729;120.469218,30.834737;120.468356,30.833248;120.468212,30.832752;120.468068,30.831636;120.466775,30.830767;120.464188,30.830147;120.4639,30.829775;120.4639,30.828287;120.464044,30.82655;120.4639,30.823077;120.464763,30.822457;120.465769,30.821216;120.468068,30.819479;120.468643,30.818983;120.469506,30.817494;120.470512,30.816254;120.47123,30.814517;120.471949,30.813525;120.472811,30.812904;120.473961,30.81216;120.475686,30.81154;120.477842,30.811912;120.480285,30.812036;120.481435,30.812036;120.482585,30.809058;120.482872,30.807197;120.482729,30.805833;120.482585,30.80422;120.482585,30.802855;120.482441,30.80149;120.482297,30.799257;120.482441,30.797395;120.482872,30.795286;120.483016,30.794169;120.483591,30.792308;120.484741,30.789454;120.486322,30.78722;120.487328,30.784986;120.490059,30.781139;120.490777,30.779774;120.491209,30.77903;120.49782,30.768728;120.497533,30.768977;120.496383,30.768977;120.494227,30.76848;120.492215,30.768108;120.490059,30.767859;120.489628,30.767984;120.489053,30.768977;120.488334,30.770218;120.487903,30.77059;120.483735,30.771831;120.481866,30.772328;120.47971,30.773072;120.477123,30.773321;120.475686,30.773445;120.477267,30.769969;120.478129,30.767859;120.481579,30.761777;120.481435,30.761281;120.479423,30.761281;120.478704,30.761157;120.478704,30.760784;120.478848,30.760412;120.480429,30.760412;120.480429,30.759667;120.481148,30.756564;120.481435,30.755447;120.481866,30.754081;120.48201,30.75284;120.48201,30.751226;120.48201,30.74924;120.48201,30.747874;120.482441,30.747874;120.482729,30.747874;120.482872,30.748743;120.486537,30.748246;120.486969,30.745298;120.486789,30.744832;120.489161,30.744181;120.488154,30.742442;120.489196,30.740797;120.492071,30.74086;120.492574,30.738407;120.492107,30.737662;120.491712,30.737197;120.491316,30.737166;120.491245,30.736855;120.491245,30.736669;120.493724,30.734993;120.493832,30.734776;120.484705,30.719875;120.485567,30.719533;120.485531,30.719192;120.486286,30.718975;120.485495,30.717019;120.484633,30.717174;120.484561,30.717112;120.484417,30.716864;120.48413,30.716864;120.483914,30.716957;120.483447,30.717112;120.483196,30.717174;120.483268,30.717453;120.48316,30.717515;120.482657,30.717578;120.482549,30.717484;120.482513,30.71736;120.482369,30.717174;120.482513,30.717143;120.482657,30.717019;120.482872,30.717205;120.48298,30.717267;120.483268,30.71705;120.483627,30.716832;120.483627,30.716708;120.483519,30.716491;120.483268,30.716025;120.481435,30.715622;120.480968,30.715591;120.47335,30.707642;120.473171,30.707673;120.472883,30.707766;120.470584,30.708543;120.470404,30.708512;120.470332,30.708418;120.470296,30.708325;120.469937,30.70817;120.469362,30.708015;120.468931,30.707922;120.468787,30.707704;120.468715,30.707487;120.468715,30.707239;120.468643,30.707052;120.468428,30.706897;120.467961,30.706804;120.467529,30.706742;120.466919,30.70668;120.46638,30.706618;120.466056,30.706587;120.465733,30.709039;120.464188,30.708853;120.464655,30.707394;120.461457,30.705438;120.459984,30.705841;120.459696,30.705997;120.461493,30.707301;120.461601,30.707673;120.461493,30.707766;120.458295,30.706866;120.457576,30.707332;120.456354,30.707083;120.455923,30.707456;120.452402,30.707642;120.45233,30.709226;120.451899,30.709319;120.451791,30.70758;120.449384,30.707922;120.449168,30.706121;120.449527,30.70373;120.448737,30.703419;120.448701,30.70314;120.449384,30.702612;120.449851,30.702457;120.450066,30.701929;120.449635,30.700283;120.448485,30.699942;120.447767,30.699848;120.447371,30.701184;120.4473,30.701215;120.447443,30.699258;120.447371,30.699041;120.447982,30.699103;120.448162,30.699103;120.448593,30.698265;120.449887,30.698793;120.450174,30.698606;120.450462,30.698606;120.450354,30.69929;120.451863,30.700314;120.453336,30.698979;120.453228,30.698513;120.453085,30.698389;120.4533,30.698016;120.453875,30.698172;120.454342,30.696836;120.456031,30.696122;120.455995,30.695594;120.456426,30.695253;120.456354,30.694756;120.46275,30.691775;120.460055,30.686216;120.4533,30.687396;120.454306,30.685408;120.448126,30.68575;120.446581,30.688141;120.438137,30.685905;120.433717,30.68547;120.433358,30.685408;120.432855,30.686402;120.432064,30.686309;120.43228,30.684849;120.429657,30.684445;120.428758,30.683576;120.428507,30.683452;120.426746,30.682955;120.425381,30.682147;120.421895,30.682551;120.417512,30.682054;120.415535,30.682489;120.413092,30.676153;120.404756,30.677085;120.40454,30.67811;120.403211,30.678203;120.403211,30.676867;120.397893,30.677085;120.397677,30.675966;120.39394,30.676277;120.392647,30.675718;120.391281,30.67665;120.390131,30.676277;120.389916,30.676277;120.389377,30.67696;120.389053,30.676929;120.389053,30.67665;120.389161,30.676401;120.389089,30.676215;120.386035,30.675469;120.386358,30.675283;120.386358,30.673606;120.385855,30.67314;120.386071,30.670065;120.387293,30.669847;120.387221,30.665902;120.384885,30.662361;120.376944,30.664101;120.376441,30.662268;120.374393,30.663045;120.374213,30.66233;120.37292,30.66261;120.37256,30.662299;120.372057,30.662237;120.37177,30.662299;120.371914,30.662113;120.373135,30.661336;120.372129,30.660591;120.369902,30.660249;120.369614,30.66146;120.36753,30.661585;120.367566,30.663417;120.366991,30.663542;120.366883,30.664722;120.365769,30.664598;120.365266,30.665188;120.365158,30.665623;120.364045,30.665654;120.364045,30.667487;120.364188,30.66758;120.364548,30.667673;120.363973,30.667673;120.363577,30.667797;120.361601,30.667673;120.361206,30.667642;120.360739,30.669816;120.359302,30.670003;120.358511,30.671214;120.357864,30.671028;120.357864,30.66789;120.356463,30.668636;120.356391,30.668046;120.355888,30.668046;120.354954,30.665157;120.354523,30.665095;120.353768,30.663448;120.352798,30.66379;120.352654,30.664008;120.352295,30.663635;120.35136,30.663821;120.35136,30.664442;120.35154,30.664722;120.351145,30.664505;120.350714,30.664101;120.350318,30.663852;120.347264,30.665281;120.34712,30.664971;120.346222,30.665033;120.345791,30.665064;120.345575,30.663914;120.347408,30.663386;120.347156,30.661926;120.350139,30.661398;120.349564,30.657701;120.351612,30.657515;120.35136,30.653973;120.350534,30.653849;120.350534,30.650991;120.348917,30.647387;120.347336,30.643224;120.346833,30.641422;120.346833,30.63732;120.339,30.619918;120.330646,30.618271;120.326819,30.618178;120.321842,30.617727;120.318393,30.618084;120.316057,30.61824;120.314674,30.617774;120.313739,30.617432;120.309679,30.614479;120.310002,30.608916;120.309679,30.605963;120.309104,30.60531;120.308529,30.604005;120.308529,30.603414;120.308637,30.602233;120.309212,30.6013;120.313739,30.597819;120.315069,30.596917;120.31665,30.59499;120.317728,30.59412;120.320782,30.592068;120.32204,30.590762;120.324088,30.588648;120.324843,30.587778;120.325633,30.585757;120.325849,30.584482;120.325381,30.583177;120.323369,30.57957;120.322615,30.57814;120.321393,30.577394;120.319453,30.576585;120.318518,30.576399;120.317979,30.575901;120.316291,30.573849;120.315788,30.5736;120.313344,30.572948;120.312733,30.572761;120.311224,30.57273;120.310649,30.572668;120.307667,30.571486;120.307415,30.571144;120.306948,30.570864;120.306301,30.570584;120.305475,30.57046;120.304972,30.570429;120.304253,30.570429;120.303714,30.570522;120.303211,30.570522;120.302888,30.570336;120.30278,30.570118;120.302708,30.567786;120.303391,30.566231;120.305008,30.56421;120.306301,30.562531;120.306445,30.561411;120.306876,30.559545;120.307559,30.555409;120.307451,30.554476;120.307415,30.552299;120.307523,30.551149;120.307631,30.550247;120.307667,30.549096;120.307667,30.545053;120.307667,30.542005;120.307739,30.540698;120.308242,30.53709;120.308457,30.536282;120.308601,30.535411;120.308673,30.532176;120.308457,30.530869;120.308026,30.529625;120.307379,30.527696;120.306517,30.525083;120.306445,30.521785;120.305511,30.521661;120.30472,30.520852;120.303283,30.52023;120.296672,30.518674;120.295162,30.518363;120.293725,30.517057;120.293581,30.514879;120.293007,30.513572;120.292647,30.51351;120.290922,30.513572;120.290491,30.514008;120.289557,30.51407;120.288551,30.514319;120.287976,30.51407;120.287186,30.513697;120.286251,30.512888;120.284886,30.51127;120.284239,30.510647;120.282514,30.510523;120.281077,30.510585;120.278921,30.510772;120.276909,30.511145;120.273819,30.511394;120.270729,30.511768;120.270297,30.511768;120.269722,30.511643;120.26771,30.511332;120.266632,30.51127;120.264117,30.511581;120.263183,30.512079;120.261889,30.51239;120.259877,30.512514;120.257146,30.512576;120.25535,30.512576;120.252834,30.512079;120.250103,30.511892;120.248019,30.511705;120.246582,30.511643;120.245792,30.511519;120.245145,30.511519;120.243492,30.511705;120.242414,30.512079;120.240546,30.51239;120.239036,30.512888;120.237455,30.513323;120.235515,30.51407;120.233862,30.514568;120.232712,30.515065;120.231347,30.515563;120.230341,30.515874;120.228257,30.515937;120.226748,30.516061;120.225526,30.516185;120.224089,30.516185;120.223298,30.516123;120.22222,30.515999;120.220783,30.51575;120.220064,30.515439;120.219274,30.515065;120.218411,30.51463;120.217621,30.514257;120.2118,30.511456;120.210794,30.511705;120.210362,30.511954;120.208781,30.515128;120.20871,30.51575;120.20871,30.517181;120.207991,30.519421;120.207991,30.520043;120.207488,30.520479;120.206625,30.52023;120.206051,30.519794;120.205044,30.518737;120.20411,30.51687;120.203176,30.515377;120.203104,30.514194;120.203104,30.512763;120.203535,30.511892;120.203607,30.510523;120.203104,30.509776;120.202314,30.509341;120.201236,30.50903;120.200804,30.50903;120.19908,30.508905;120.197139,30.508656;120.195055,30.508594;120.193762,30.50847;120.19254,30.508221;120.191821,30.508034;120.190456,30.507723;120.189953,30.507412;120.189162,30.506914;120.188731,30.506603;120.187797,30.506043;120.187078,30.505545;120.186647,30.505109;120.186288,30.504673;120.185929,30.504176;120.185641,30.503616;120.185138,30.50262;120.184994,30.502122;120.184922,30.501002;120.184922,30.500317;120.185138,30.500006;120.185425,30.499508;120.185857,30.499135;120.185929,30.498886;120.186144,30.497952;120.186144,30.49733;120.185857,30.496396;120.185569,30.495899;120.185066,30.495214;120.184707,30.494654;120.184491,30.494094;120.184204,30.493471;120.184132,30.492911;120.184132,30.492413;120.184419,30.491542;120.184779,30.490982;120.185138,30.490546;120.185354,30.490359;120.185785,30.490048;120.186,30.489924;120.186647,30.489426;120.187078,30.488866;120.187078,30.488181;120.187078,30.487683;120.186791,30.487372;120.186144,30.486936;120.185138,30.486749;120.183916,30.487496;120.18327,30.487994;120.182551,30.488368;120.181689,30.488928;120.180898,30.489426;120.180395,30.48955;120.180036,30.489488;120.179748,30.489052;120.179748,30.488305;120.179964,30.487123;120.180251,30.486314;120.180323,30.485753;120.180539,30.485069;120.180826,30.48426;120.181185,30.483388;120.181617,30.482641;120.181976,30.482019;120.182192,30.481334;120.182192,30.480898;120.182192,30.480151;120.182192,30.479218;120.181832,30.477911;120.181617,30.477413;120.181473,30.477164;120.181042,30.476479;120.180754,30.476417;120.179964,30.47623;120.178311,30.475919;120.177233,30.475607;120.175868,30.475109;120.174143,30.474549;120.173137,30.474113;120.170262,30.473615;120.169472,30.473553;120.168394,30.473304;120.167028,30.47318;120.165735,30.472993;120.163507,30.472806;120.162357,30.472619;120.16092,30.472433;120.159842,30.47237;120.158692,30.47237;120.157398,30.472619;120.155386,30.472931;120.154308,30.473242;120.15359,30.47374;120.152943,30.474549;120.152368,30.476915;120.15244,30.479093;120.152512,30.479902;120.152799,30.481521;120.15323,30.48289;120.153446,30.483886;120.153733,30.484695;120.154164,30.486563;120.154164,30.487061;120.153805,30.48787;120.153661,30.488119;120.152512,30.488243;120.151362,30.488243;120.149853,30.488056;120.148559,30.487683;120.1436,30.487123;120.142666,30.487123;120.14051,30.486749;120.138426,30.4865;120.136989,30.486127;120.135264,30.486002;120.133252,30.485816;120.132102,30.485567;120.130449,30.48538;120.129227,30.485256;120.128078,30.485256;120.127215,30.484695;120.126353,30.484073;120.121825,30.482392;120.121035,30.482206;120.120101,30.482081;120.11852,30.482081;120.116939,30.482517;120.115142,30.483264;120.114136,30.484446;120.113489,30.485505;120.112339,30.486812;120.111764,30.487496;120.107596,30.488741;120.106662,30.489177;120.105728,30.48955;120.105081,30.489861;120.104291,30.490235;120.103644,30.490733;120.103284,30.492289;120.102997,30.492911;120.10271,30.494654;120.103069,30.495587;120.103356,30.496272;120.103859,30.497019;120.104362,30.497641;120.104722,30.498077;120.104865,30.498637;120.105368,30.499446;120.1058,30.500068;120.105872,30.500691;120.105943,30.501251;120.105943,30.501749;120.105512,30.501998;120.104506,30.502122;120.103859,30.502246;120.102781,30.502371;120.101416,30.502495;120.099979,30.502558;120.09811,30.502371;120.096385,30.50206;120.095739,30.501811;120.095164,30.501749;120.092577,30.501935;120.091067,30.502122;120.08999,30.502371;120.089055,30.502433;120.088265,30.50262;120.087259,30.502682;120.086037,30.502682;120.085246,30.502682;120.084887,30.502433;120.084887,30.502184;120.084456,30.501873;120.084168,30.501624;120.084097,30.5015;120.083737,30.501251;120.083306,30.501002;120.082587,30.50094;120.081581,30.50094;120.08036,30.500815;120.080144,30.500815;120.079354,30.500691;120.078707,30.500504;120.077701,30.500131;120.076838,30.500068;120.076192,30.499819;120.075473,30.499508;120.075401,30.499322;120.075042,30.498699;120.074539,30.497268;120.074539,30.496832;120.074323,30.49621;120.074179,30.49565;120.073964,30.494592;120.07382,30.493907;120.07382,30.493409;120.073748,30.492475;120.073604,30.491604;120.073533,30.490048;120.073604,30.489488;120.073604,30.488492;120.073389,30.487932;120.073173,30.487123;120.072742,30.486065;120.072311,30.485131;120.071664,30.483948;120.067783,30.478471;120.06764,30.477101;120.067352,30.475358;120.06764,30.474362;120.06764,30.47237;120.067927,30.470627;120.068215,30.468511;120.068071,30.466145;120.067783,30.464651;120.067783,30.463032;120.068071,30.461787;120.069221,30.459297;120.069796,30.458549;120.071664,30.456931;120.073389,30.455685;120.07497,30.454689;120.075114,30.453319;120.07612,30.451327;120.076407,30.449584;120.076407,30.447093;120.074682,30.443979;120.074539,30.443232;120.073389,30.441613;120.072095,30.440368;120.071233,30.440243;120.070371,30.440368;120.070945,30.439122;120.072095,30.437752;120.072814,30.436133;120.07267,30.434638;120.071089,30.433767;120.069077,30.433642;120.065915,30.433517;120.064046,30.433642;120.062465,30.433642;120.060597,30.433144;120.059735,30.43277;120.057722,30.432397;120.055566,30.432147;120.054129,30.432147;120.053411,30.432521;120.051542,30.434265;120.05068,30.436009;120.050392,30.436756;120.048236,30.437752;120.047805,30.438001;120.046368,30.438749;120.044068,30.439496;120.041768,30.440119;120.039756,30.440492;120.037313,30.440866;120.034726,30.440866;120.033145,30.440617;120.031133,30.440617;120.027396,30.440617;120.024521,30.440741;120.021359,30.440866;120.019922,30.441489;120.017478,30.44236;120.01561,30.442983;120.013885,30.445349;120.012735,30.446844;120.011729,30.449334;120.010292,30.450455;120.006555,30.450206;120.00483,30.450331;120.001812,30.450455;119.999512,30.450704;119.995919,30.450953;119.994338,30.451701;119.990745,30.45195;119.988589,30.450704;119.98672,30.449459;119.984852,30.447965;119.982408,30.446097;119.981115,30.444228;119.979103,30.442609;119.977953,30.440119;119.976516,30.438624;119.974935,30.437503;119.971629,30.437503;119.967029,30.437379;119.964155,30.438375;119.962718,30.438998;119.960849,30.440243;119.959699,30.44236;119.959556,30.443357;119.958693,30.4451;119.958693,30.446844;119.958118,30.448712;119.9574,30.449584;119.955244,30.451825;119.953231,30.451701;119.952225,30.452448;119.950213,30.452448;119.94892,30.452448;119.946907,30.452323;119.945614,30.452074;119.943602,30.45195;119.94317,30.451825;119.942596,30.45195;119.941015,30.452572;119.94044,30.452821;119.938859,30.453444;119.937996,30.454565;119.937421,30.456184;119.937421,30.45718;119.937709,30.459546;119.937709,30.460542;119.937421,30.461787;119.937421,30.462534;119.936415,30.463655;119.936415,30.463904;119.935697,30.464775;119.934834,30.465522;119.932535,30.466518;119.932247,30.466892;119.931816,30.467141;119.92772,30.467266;119.92427,30.465896;119.917227,30.461911;119.910903,30.463157;119.908747,30.464277;119.899118,30.459795;119.890925,30.465024;119.88072,30.466394;119.875833,30.471125;119.884026,30.481085;119.877702,30.483077;119.873678,30.482953;119.861892,30.495899;119.856574,30.507225;119.846369,30.501002;119.826247,30.508221;119.813455,30.510834;119.800232,30.51071;119.788159,30.516808;119.772061,30.518923;119.767031,30.523154;119.771917,30.528256;119.77393,30.542316;119.776804,30.552268;119.775511,30.556125;119.757976,30.556498;119.736416,30.555627;119.721181,30.569558;119.708821,30.562344;119.700772,30.556125;119.702496,30.547914;119.708533,30.536593;119.712989,30.530994;119.714282,30.523403;119.716151,30.502869;119.712701,30.500628;119.716869,30.492413;119.710545,30.476852;119.708246,30.468511;119.705658,30.46988;119.704365,30.46876;119.702209,30.468884;119.703215,30.466269;119.703215,30.458425;119.712845,30.446532;119.71572,30.441862;119.715863,30.435822;119.711192,30.433953;119.703143,30.431338;119.69301,30.421746;119.686039,30.411033;119.670229,30.402872;119.665343,30.403184;119.646298,30.400194;119.64673,30.403184;119.637818,30.40605;119.640549,30.40904;119.6371,30.435448;119.651329,30.436694;119.643711,30.447529;119.635663,30.44043;119.628764,30.434327;119.617553,30.43084;119.612666,30.432459;119.602317,30.425982;119.589669,30.427227;119.580902,30.434327;119.576662,30.442423;119.572278,30.44865;119.569835,30.448151;119.55848,30.4451;119.55345,30.44043;119.551437,30.437129;119.544754,30.431213;119.542239,30.430217;119.541808,30.428473;119.542454,30.423428;119.543173,30.41857;119.541233,30.41558;119.537568,30.414708;119.534693,30.414023;119.524057,30.408417;119.519242,30.407918;119.511984,30.41041;119.496317,30.413836;119.458768,30.409663;119.45381,30.408168;119.450719,30.402125;119.446623,30.396643;119.442527,30.39683;119.437209,30.389416;119.432466,30.388855;119.424633,30.382312;119.417446,30.380443;119.413637,30.379259;119.409469,30.379509;119.403612,30.386518;119.397647,30.389696;119.391611,30.390444;119.385502,30.39063;119.381694,30.389696;119.378028,30.389509;119.37422,30.390755;119.372495,30.395615;119.372567,30.398543;119.374866,30.404586;119.372567,30.411625;119.368758,30.414739;119.364374,30.415985;119.358481,30.412995;119.353738,30.414926;119.355607,30.427258;119.358338,30.429251;119.356613,30.433735;119.354457,30.43934;119.355894,30.443575;119.351726,30.447062;119.340946,30.451545;119.340803,30.457771;119.342096,30.462129;119.33994,30.468853;119.338934,30.486034;119.335772,30.496988;119.340803,30.507941;119.338216,30.519141;119.333329,30.529096;119.333616,30.534322;119.331029,30.537184;119.323699,30.537184;119.316513,30.534446;119.310763,30.527354;119.30832,30.525612;119.285323,30.513168;119.275837,30.516528;119.266782,30.523745;119.266926,30.531211;119.263045,30.532207;119.25974,30.533824;119.256434,30.534571;119.248529,30.534695;119.244648,30.544026;119.24278,30.548381;119.243355,30.552859;119.243929,30.556342;119.246373,30.557213;119.248241,30.558706;119.250254,30.559452;119.249966,30.561194;119.249966,30.563308;119.249535,30.565174;119.250397,30.56704;119.253128,30.569403;119.256434,30.571766;119.259237,30.572263;119.261464,30.573787;119.263045,30.575777;119.265165,30.577456;119.266926,30.579321;119.268795,30.579197;119.270735,30.579819;119.271382,30.581;119.270771,30.58212;119.270591,30.58355;119.270124,30.585446;119.270771,30.586783;119.269944,30.588804;119.26707,30.592286;119.265273,30.592845;119.262866,30.593747;119.261321,30.594026;119.259883,30.594959;119.25974,30.597073;119.26071,30.60099;119.260171,30.602046;119.258015,30.602637;119.255787,30.603632;119.251691,30.605435;119.249535,30.605714;119.244792,30.612801;119.246229,30.621379",
            "child": null,
            "data": {
              "value": ".8313",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "台州市",
            "grid_id": "7",
            "grid_level": "2",
            "center": null,
            "grid_location": "120.40186,28.792368;120.521442,28.883493;120.67322,28.915874;120.735311,29.004868;120.705415,29.089745;120.746809,29.120041;120.719213,29.16244;120.795102,29.220963;120.903186,29.25727;120.923883,29.30566;121.002072,29.317753;121.098657,29.325815;121.163048,29.339921;121.202142,29.32783;121.174546,29.259287;121.179146,29.21491;121.229738,29.20684;121.271132,29.152347;121.268832,29.111963;121.294129,29.109943;121.347021,29.136195;121.390715,29.194733;121.411412,29.160422;121.4873,29.154366;121.544792,29.134176;121.574688,29.174551;121.767859,29.101864;121.788556,29.000824;121.96333,28.867299;121.984027,28.764001;121.954132,28.624081;121.988627,28.589578;121.977128,28.386393;121.880543,28.37419;121.733364,28.349778;121.756361,28.26022;121.703469,28.213376;121.662075,28.201152;121.530994,28.250039;121.480401,28.237819;121.464304,28.172625;121.496499,28.148166;121.588486,28.121664;121.572388,28.044156;121.464304,28.005381;121.386115,28.007422;121.298728,28.029872;121.14695,28.013545;121.100957,28.084956;121.160748,28.262257;121.222264,28.32765;121.210766,28.38258;121.259059,28.419184;121.18317,28.50048;121.102682,28.516731;121.040591,28.45984;120.949179,28.435194;120.824423,28.467969;120.743935,28.435448;120.677244,28.463904;120.576634,28.534757;120.482348,28.583489;120.450153,28.589578;120.434055,28.542881;120.413358,28.471779;120.378863,28.494131;120.342069,28.496162;120.296075,28.518509;120.291476,28.54085;120.348968,28.585519;120.381163,28.577399;120.385762,28.601757;120.365065,28.632197;120.33287,28.664657;120.33517,28.707245;120.362766,28.741708;120.374264,28.778185;120.374264,28.778185;120.40186,28.792368",
            "child": null,
            "data": {
              "value": ".7911",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "丽水市",
            "grid_id": "9",
            "grid_level": "2",
            "center": "lishui",
            "grid_location": "119.657063,28.554024;119.696157,28.533717;119.721454,28.566207;119.74445,28.592598;119.765147,28.602747;119.749049,28.639273;119.792743,28.647389;119.81344,28.685928;119.831837,28.712288;119.874956,28.747826;119.882933,28.752576;119.890694,28.757326;119.896515,28.760999;119.899965,28.762836;119.910457,28.774551;119.914553,28.778983;119.917787,28.786201;119.921093,28.793735;119.914769,28.796521;119.915254,28.800762;119.921398,28.801538;119.935753,28.803326;119.949102,28.798467;119.956846,28.797739;119.964499,28.79698;119.970374,28.796489;119.972225,28.796331;119.974273,28.79728;119.978585,28.799512;119.985124,28.802804;119.987927,28.804165;119.998707,28.797549;120.010492,28.790111;120.015271,28.787198;120.024937,28.776783;120.032303,28.768773;120.034962,28.765955;120.043263,28.762852;120.052461,28.769612;120.057779,28.773728;120.073733,28.784682;120.092058,28.789303;120.099317,28.784096;120.10406,28.780234;120.108228,28.778904;120.115343,28.776593;120.12005,28.77444;120.124577,28.772034;120.128997,28.768456;120.133237,28.765258;120.140315,28.77558;120.138267,28.781959;120.146604,28.783985;120.15264,28.780566;120.158677,28.780946;120.16457,28.777274;120.168019,28.774361;120.171469,28.77664;120.176355,28.772841;120.17923,28.776134;120.178368,28.77968;120.181673,28.780819;120.180667,28.783605;120.187423,28.786264;120.196478,28.784998;120.201508,28.786771;120.205676,28.78981;120.208838,28.795381;120.201939,28.803231;120.199927,28.809561;120.205676,28.813739;120.215881,28.834498;120.233272,28.844749;120.240746,28.850824;120.245058,28.860188;120.255119,28.860441;120.254975,28.863984;120.261012,28.866767;120.261299,28.872335;120.259862,28.879673;120.262305,28.883847;120.262162,28.891058;120.258856,28.905604;120.261443,28.911169;120.254975,28.910157;120.250376,28.912307;120.258425,28.926851;120.253825,28.930771;120.259431,28.937599;120.262018,28.936713;120.264605,28.938989;120.262305,28.945185;120.265467,28.944679;120.270498,28.951;120.275672,28.94038;120.277397,28.929506;120.309305,28.933047;120.306718,28.924827;120.315629,28.918631;120.309305,28.907881;120.31261,28.889666;120.320084,28.880052;120.332445,28.868539;120.347537,28.85829;120.352998,28.850191;120.363634,28.839434;120.380738,28.834245;120.388787,28.830827;120.393386,28.838675;120.390799,28.844623;120.400716,28.855886;120.405172,28.854367;120.406897,28.845888;120.413796,28.84766;120.418539,28.851583;120.42745,28.832093;120.41897,28.825638;120.414514,28.812979;120.409484,28.795761;120.404022,28.787277;120.398991,28.784872;120.393099,28.784872;120.389218,28.788037;120.373983,28.772081;120.369815,28.75777;120.371396,28.75207;120.369958,28.741302;120.364065,28.734208;120.347537,28.72952;120.344375,28.726353;120.344087,28.722045;120.348974,28.724072;120.353429,28.722172;120.352711,28.718117;120.355729,28.712922;120.354723,28.70798;120.337907,28.699869;120.327558,28.684153;120.327271,28.665772;120.340781,28.653094;120.357598,28.646374;120.362916,28.624309;120.379301,28.606171;120.382894,28.582702;120.371396,28.570141;120.363778,28.576358;120.348543,28.573186;120.330433,28.577881;120.322815,28.554151;120.31376,28.556182;120.307149,28.551359;120.29177,28.537905;120.294213,28.51112;120.305424,28.508327;120.312898,28.522673;120.321809,28.51861;120.350555,28.499185;120.376714,28.498931;120.388787,28.480771;120.386056,28.458798;120.375707,28.453209;120.382463,28.436439;120.376857,28.41039;120.364065,28.418396;120.356591,28.428816;120.341069,28.428307;120.333451,28.412296;120.335751,28.399841;120.345524,28.39374;120.336326,28.374927;120.359322,28.364502;120.362484,28.345429;120.373983,28.331949;120.416526,28.303457;120.426013,28.272921;120.438373,28.242631;120.441248,28.23423;120.424,28.213351;120.430612,28.196797;120.433199,28.185081;120.418539,28.177694;120.42285,28.161135;120.390655,28.147122;120.411927,28.130813;120.414227,28.114502;120.39238,28.093854;120.365359,28.08799;120.376857,28.064278;120.378007,28.056117;120.357598,28.049231;120.351561,28.04209;120.349549,28.021173;120.352423,27.983666;120.330577,27.966821;120.318791,27.976265;120.294932,27.974989;120.277397,27.956867;120.262449,27.956101;120.250376,27.960951;120.250088,27.944358;120.23974,27.931848;120.206682,27.932869;120.175924,27.953803;120.160689,27.975244;120.0825,27.969629;120.067265,27.95074;119.997413,27.936954;119.965793,27.936444;119.957744,27.948187;119.966942,27.966056;119.949982,27.972181;119.910313,27.951251;119.88013,27.961461;119.845635,27.938997;119.806541,27.910399;119.790443,27.896097;119.778945,27.795931;119.703056,27.750928;119.647864,27.71614;119.638666,27.675199;119.521383,27.658818;119.502986,27.642434;119.468491,27.535882;119.440895,27.507177;119.401801,27.537932;119.355807,27.515379;119.325912,27.48872;119.279918,27.451796;119.263821,27.425121;119.171834,27.421017;119.102844,27.437434;119.114343,27.486669;119.059151,27.476413;118.983262,27.501025;118.962565,27.460003;118.902774,27.466157;118.852181,27.523581;118.888976,27.570728;118.905074,27.621952;118.865979,27.71;118.893575,27.71614;118.836084,27.812291;118.826885,27.842959;118.808488,27.922656;118.737198,27.957377;118.728,28.034948;118.716501,28.071673;118.767094,28.110423;118.810787,28.165466;118.773993,28.177694;118.757895,28.165466;118.796989,28.218443;118.768531,28.24925;118.734036,28.260195;118.718226,28.310581;118.694367,28.31923;118.719376,28.343395;118.734899,28.354585;118.737773,28.370605;118.748984,28.4095;118.721388,28.411025;118.7234,28.428053;118.7234,28.498169;118.749271,28.526608;118.792103,28.537271;118.832347,28.556562;118.857643,28.546663;118.878915,28.525592;118.903061,28.558847;118.909673,28.597672;118.935831,28.648149;118.961415,28.65525;118.97665,28.660067;118.987286,28.674519;119.037017,28.71685;119.070074,28.740669;119.106581,28.755363;119.154299,28.747763;119.195981,28.782972;119.248586,28.771828;119.273594,28.813865;119.325049,28.818676;119.336835,28.793102;119.359257,28.769042;119.375354,28.791836;119.394902,28.791329;119.415598,28.774614;119.423935,28.757136;119.47424,28.773601;119.48775,28.745483;119.47194,28.739655;119.472228,28.712035;119.468491,28.677815;119.496949,28.653728;119.501836,28.637752;119.529719,28.647389;119.525695,28.637498;119.516784,28.628621;119.523395,28.620504;119.525695,28.613655;119.510172,28.59412;119.50787,28.558429;119.509739,28.561221;119.514338,28.562109;119.518075,28.560459;119.520231,28.558937;119.522531,28.558937;119.524543,28.557667;119.526555,28.558048;119.530005,28.554241;119.533238,28.555891;119.535107,28.554241;119.533598,28.55183;119.533813,28.549989;119.534819,28.549989;119.536904,28.547451;119.535107,28.545484;119.536688,28.542184;119.538125,28.540026;119.536832,28.539328;119.534532,28.542628;119.535035,28.536599;119.536185,28.537995;119.538556,28.538947;119.539347,28.536218;119.541215,28.537551;119.541215,28.534124;119.542796,28.531141;119.545096,28.53387;119.547324,28.532093;119.54718,28.531141;119.549552,28.529617;119.550989,28.529935;119.551492,28.533235;119.554654,28.535901;119.555085,28.534822;119.552498,28.532347;119.55336,28.530887;119.55487,28.531014;119.556307,28.533045;119.560906,28.533616;119.564859,28.533108;119.569243,28.533045;119.570895,28.531839;119.57377,28.535266;119.577579,28.536028;119.579807,28.536726;119.583687,28.532981;119.58879,28.538693;119.591233,28.538376;119.593173,28.536345;119.591233,28.532791;119.59188,28.531775;119.593605,28.534568;119.595257,28.531522;119.597054,28.530506;119.59806,28.527333;119.598707,28.526507;119.600288,28.527142;119.600504,28.525619;119.601582,28.526063;119.603163,28.529491;119.604672,28.528285;119.604097,28.531204;119.607403,28.530506;119.607331,28.529364;119.608768,28.526698;119.610852,28.52784;119.613942,28.527586;119.616242,28.52784;119.636366,28.52153;119.654763,28.537779",
            "child": null,
            "data": {
              "value": ".8438",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "宁波市",
            "grid_id": "5",
            "grid_level": "2",
            "center": null,
            "grid_location": "120.8826,30.2509;120.9814,30.3003;121.1023,30.3937;121.1572,30.4266;121.1792,30.4376;121.2561,30.4486;121.3,30.4431;121.344,30.4211;121.5198,30.2563;121.6736,30.163;121.7285,30.1025;121.7505,30.0641;121.7834,30.0256;121.7834,29.9982;121.8713,29.9487;121.9482,29.9652;121.9922,29.9542;122.0471,29.9158;122.113,29.9268;122.1899,29.9158;122.1021,29.8334;122.0032,29.7565;121.9482,29.751;121.9373,29.718;122.0032,29.6686;122.0032,29.6576;122.0581,29.6301;122.124,29.5697;122.179,29.5477;122.157,29.5313;122.157,29.5148;122.168,29.4818;122.179,29.4763;122.2559,29.4873;122.2778,29.4653;122.2778,29.4489;122.2559,29.4269;122.2119,29.0808;122.2119,29.0314;122.2229,28.9709;122.2339,28.9435;122.2998,28.905;122.3108,28.8721;122.2998,28.8556;122.2449,28.8391;122.0142,28.8556;121.9702,28.8501;121.7834,28.9984;121.7505,29.0973;121.7065,29.1248;121.6736,29.1302;121.5857,29.1687;121.5637,29.1687;121.5308,29.1357;121.4978,29.1357;121.4429,29.1577;121.4099,29.1522;121.3989,29.1577;121.3989,29.1852;121.377,29.1907;121.333,29.1193;121.311,29.1083;121.3,29.1138;121.2891,29.1028;121.2671,29.1083;121.2561,29.1193;121.2671,29.1577;121.2561,29.1577;121.2341,29.1962;121.2231,29.2072;121.1682,29.2072;121.1792,29.2236;121.1572,29.2401;121.1682,29.2566;121.1792,29.2566;121.1792,29.2786;121.2012,29.328;121.1902,29.339;121.2341,29.3665;121.2341,29.4104;121.2122,29.4159;121.2122,29.4379;121.2231,29.4489;121.2122,29.4598;121.2341,29.5148;121.2231,29.5313;121.1462,29.5422;121.1353,29.5532;121.1133,29.5532;121.1023,29.5807;121.1023,29.5917;121.1023,29.6246;121.0693,29.6356;121.0803,29.6631;121.0583,29.6851;121.0254,29.6686;120.9924,29.6741;120.9924,29.6851;121.0144,29.6906;121.0034,29.707;121.0364,29.718;121.0254,29.729;121.0364,29.74;121.0254,29.762;121.0474,29.762;121.0583,29.7784;121.0803,29.7839;121.1023,29.8059;121.0913,29.8169;121.1023,29.8389;121.0693,29.8608;121.0583,29.8553;121.0364,29.8718;121.0144,29.8938;121.0364,29.9268;121.0474,29.9542;121.0693,29.9597;121.0913,29.9872;121.0693,30.0037;121.0583,30.0037;121.0474,30.0092;121.0474,30.0037;121.0364,30.0146;120.9924,30.0256;120.9924,30.0531;120.9705,30.0696;120.9705,30.0916;120.9485,30.0916;120.9265,30.1135;120.9375,30.1245;120.9265,30.1685;120.8826,30.2509",
            "child": null,
            "data": {
              "value": ".7794",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "衢州市",
            "grid_id": "25",
            "grid_level": "2",
            "center": "1",
            "grid_location": "118.463096,28.242049;118.46827,28.245104;118.476032,28.243831;118.479481,28.246631;118.490692,28.23823;118.496441,28.245104;118.502478,28.246376;118.503053,28.249177;118.50449,28.252995;118.501041,28.254268;118.501041,28.257577;118.493567,28.263686;118.496729,28.276157;118.501184,28.277429;118.504346,28.279847;118.514551,28.269539;118.519869,28.269285;118.531511,28.271067;118.545884,28.27463;118.547321,28.286463;118.556232,28.282519;118.568593,28.285318;118.57463,28.284046;118.585266,28.284427;118.597483,28.272594;118.598058,28.269794;118.595327,28.264067;118.59547,28.25694;118.601363,28.254268;118.607112,28.25694;118.621342,28.25605;118.62666,28.260631;118.630253,28.26114;118.633127,28.261522;118.640601,28.273739;118.647069,28.273866;118.652243,28.277684;118.660723,28.271576;118.668054,28.269539;118.674953,28.27183;118.682139,28.27921;118.690619,28.291552;118.693637,28.301857;118.70068,28.311398;118.695649,28.318013;118.695506,28.320811;118.700393,28.315341;118.701974,28.322973;118.701542,28.326916;118.708729,28.334038;118.712609,28.333021;118.71764,28.338744;118.723389,28.337472;118.728276,28.346119;118.732157,28.345738;118.732588,28.350061;118.738193,28.356165;118.742505,28.364048;118.739774,28.367989;118.737906,28.370532;118.741355,28.373964;118.74308,28.378287;118.746817,28.382736;118.747392,28.387566;118.751273,28.39354;118.756878,28.396845;118.756878,28.402183;118.754435,28.401929;118.755441,28.407902;118.749117,28.409173;118.755297,28.41629;118.747392,28.417179;118.744374,28.415527;118.740205,28.415527;118.737331,28.415146;118.733738,28.416544;118.733306,28.413875;118.729857,28.411334;118.723245,28.412223;118.721952,28.414129;118.724683,28.424168;118.728995,28.429124;118.724683,28.431411;118.723533,28.432809;118.728563,28.440813;118.731151,28.45682;118.72497,28.460758;118.72497,28.470411;118.729282,28.479809;118.727701,28.486286;118.724683,28.488445;118.723102,28.489207;118.723102,28.493017;118.726551,28.499874;118.731151,28.499493;118.734456,28.505334;118.74308,28.509269;118.751129,28.524504;118.756159,28.524631;118.759896,28.522727;118.765071,28.524123;118.767945,28.521711;118.77082,28.520569;118.773838,28.518411;118.777,28.517903;118.7793,28.522981;118.780162,28.525901;118.786055,28.530851;118.788498,28.530217;118.792092,28.532628;118.792954,28.534152;118.798272,28.535548;118.805602,28.533136;118.81207,28.539229;118.812357,28.542402;118.818538,28.545067;118.822418,28.548367;118.83406,28.543798;118.838229,28.53961;118.845415,28.541641;118.852026,28.53999;118.854757,28.526535;118.857057,28.529582;118.864818,28.529582;118.866256,28.527678;118.866112,28.518791;118.868555,28.513078;118.874879,28.517649;118.877323,28.520442;118.88221,28.530217;118.890115,28.534025;118.890115,28.539102;118.892702,28.541514;118.900463,28.544179;118.904919,28.551286;118.906643,28.556997;118.913255,28.562074;118.915123,28.568545;118.911099,28.572986;118.906931,28.574255;118.910812,28.577935;118.909662,28.582376;118.910093,28.587577;118.909806,28.592018;118.911961,28.594048;118.910237,28.597473;118.918286,28.599503;118.917136,28.610031;118.915842,28.612821;118.925328,28.621573;118.927484,28.626392;118.924897,28.631719;118.930934,28.641229;118.942288,28.646428;118.946313,28.643892;118.95508,28.64795;118.959105,28.645667;118.961979,28.642624;118.972615,28.654163;118.980233,28.662784;118.984832,28.663798;118.992018,28.677109;119.001073,28.682813;119.003229,28.687629;119.008547,28.691939;119.014296,28.694093;119.017315,28.700937;119.024645,28.70664;119.029244,28.709428;119.037149,28.709428;119.045342,28.713736;119.046923,28.721339;119.051953,28.72438;119.053678,28.728941;119.058852,28.728814;119.064027,28.732868;119.076962,28.736036;119.081993,28.742116;119.088461,28.735782;119.094353,28.739963;119.099384,28.74807;119.103552,28.743383;119.114907,28.74085;119.119937,28.738316;119.123243,28.739583;119.128273,28.737429;119.142934,28.740089;119.151845,28.74313;119.159894,28.74731;119.162625,28.748957;119.166074,28.747564;119.166793,28.75377;119.170386,28.749844;119.172254,28.751237;119.17053,28.753137;119.173404,28.754784;119.176135,28.75453;119.176423,28.763523;119.182603,28.765043;119.186915,28.770869;119.188927,28.775935;119.195251,28.778341;119.205743,28.775048;119.204019,28.770869;119.204019,28.767956;119.208618,28.768336;119.212067,28.772262;119.217385,28.772262;119.222991,28.766183;119.232908,28.764916;119.23722,28.762003;119.244694,28.76175;119.250587,28.765296;119.251018,28.769096;119.257198,28.779354;119.261798,28.780494;119.266397,28.788345;119.261654,28.787965;119.265966,28.79075;119.267403,28.794676;119.273583,28.792776;119.276602,28.796828;119.27344,28.802779;119.270709,28.804045;119.267259,28.800373;119.267116,28.804678;119.272433,28.807463;119.277751,28.803791;119.283069,28.806577;119.292412,28.806703;119.301323,28.803791;119.306353,28.808223;119.311815,28.812907;119.318858,28.811514;119.32202,28.805184;119.327194,28.806577;119.332225,28.807969;119.331075,28.811894;119.335674,28.813033;119.340274,28.818983;119.345448,28.827717;119.33783,28.835185;119.335818,28.839868;119.337399,28.842652;119.331506,28.846069;119.311097,28.843158;119.31469,28.86505;119.323313,28.865303;119.326188,28.867201;119.333806,28.865303;119.337111,28.873654;119.336824,28.879094;119.34516,28.890732;119.34631,28.898828;119.340848,28.905279;119.332656,28.907682;119.330931,28.914258;119.324607,28.920961;119.326907,28.92387;119.327625,28.930825;119.327338,28.936135;119.320726,28.937273;119.321158,28.939928;119.316558,28.941825;119.314977,28.945871;119.316989,28.947388;119.313252,28.954215;119.31857,28.96319;119.322739,28.966983;119.328344,28.965213;119.322739,28.971027;119.328488,28.986447;119.322164,28.989733;119.326044,28.995167;119.320151,29.000095;119.321445,29.009825;119.328775,29.024101;119.324176,29.030797;119.326619,29.039639;119.33165,29.030544;119.3328,29.041155;119.333231,29.046712;119.325326,29.057953;119.328631,29.068182;119.335962,29.071087;119.334381,29.078537;119.329063,29.08485;119.325901,29.093561;119.320439,29.09192;119.314977,29.085355;119.307072,29.084092;119.308222,29.087627;119.302042,29.089521;119.299167,29.094697;119.30161,29.098863;119.293562,29.102777;119.287094,29.109341;119.287669,29.11338;119.278326,29.117419;119.270852,29.117672;119.267978,29.125371;119.26999,29.128147;119.265966,29.134962;119.256048,29.136729;119.252743,29.13471;119.249293,29.143038;119.25188,29.147455;119.251737,29.153259;119.246562,29.156918;119.244119,29.165497;119.241388,29.171048;119.24455,29.172057;119.245412,29.183284;119.241963,29.190095;119.236358,29.193248;119.231327,29.18959;119.221841,29.193879;119.234777,29.198797;119.237076,29.204599;119.233052,29.211408;119.236358,29.216326;119.233627,29.223135;119.243975,29.228052;119.252455,29.235743;119.259498,29.247719;119.248,29.251753;119.2457,29.255156;119.24455,29.251501;119.23837,29.251248;119.23377,29.251753;119.237651,29.258685;119.231614,29.266752;119.234202,29.268768;119.232333,29.272045;119.229602,29.271415;119.228596,29.275322;119.230465,29.279228;119.230321,29.289687;119.221266,29.294097;119.209768,29.295483;119.210199,29.289561;119.200569,29.289561;119.196257,29.274691;119.192376,29.270785;119.190221,29.272171;119.186915,29.269146;119.189789,29.261836;119.196401,29.254778;119.201144,29.258181;119.206893,29.252131;119.208905,29.247341;119.215086,29.247593;119.21178,29.243307;119.216379,29.236373;119.210199,29.235365;119.211205,29.231961;119.210055,29.227548;119.214942,29.225531;119.213361,29.223009;119.209911,29.222631;119.203012,29.225783;119.201288,29.229817;119.191227,29.227422;119.190364,29.222378;119.194964,29.217209;119.18749,29.203716;119.183178,29.206616;119.179441,29.203716;119.175848,29.206868;119.174554,29.214182;119.168949,29.21847;119.161044,29.213552;119.159031,29.220235;119.15127,29.22717;119.140347,29.222378;119.136753,29.219857;119.128992,29.225909;119.128848,29.229943;119.131579,29.233726;119.127411,29.237382;119.109014,29.229943;119.109014,29.226413;119.092341,29.231078;119.076962,29.223387;119.062733,29.227548;119.053966,29.221622;119.045198,29.221622;119.036143,29.219226;119.027807,29.220361;119.024789,29.214182;119.004235,29.208886;118.988856,29.222757;118.984113,29.237886;118.987563,29.245324;118.982532,29.25982;118.969022,29.264105;118.965141,29.267886;118.960254,29.266878;118.958386,29.273053;118.954936,29.282252;118.964854,29.294097;118.961692,29.297373;118.956949,29.296869;118.954649,29.299011;118.948181,29.300775;118.943438,29.307452;118.932802,29.310224;118.926909,29.310476;118.922454,29.316144;118.912249,29.323576;118.902763,29.331764;118.893852,29.330504;118.890402,29.324332;118.884653,29.323198;118.877898,29.326347;118.87143,29.324206;118.860506,29.315263;118.854901,29.303672;118.85217,29.299011;118.84254,29.298255;118.837797,29.292459;118.828742,29.287923;118.827018,29.281118;118.822562,29.279102;118.816238,29.281748;118.794104,29.268138;118.78663,29.266626;118.78045,29.255156;118.773982,29.251122;118.76737,29.252383;118.762915,29.248727;118.761334,29.240155;118.76737,29.235365;118.765358,29.219983;118.754578,29.213678;118.742793,29.214056;118.732444,29.207499;118.729857,29.19905;118.720658,29.198293;118.71764,29.192113;118.711747,29.186437;118.699386,29.193374;118.687457,29.201698;118.627953,29.192996;118.626516,29.197788;118.63284,29.203968;118.631259,29.218848;118.620767,29.218091;118.60625,29.239903;118.614874,29.246963;118.606106,29.268138;118.609412,29.272297;118.612143,29.280362;118.623354,29.266626;118.629534,29.2665;118.636433,29.261584;118.63399,29.272801;118.627235,29.284773;118.614155,29.297751;118.616024,29.306066;118.603088,29.315263;118.602801,29.325466;118.593602,29.330126;118.587278,29.328489;118.587997,29.331638;118.583397,29.334157;118.581241,29.331764;118.572618,29.339068;118.557382,29.341084;118.542722,29.337305;118.540853,29.342973;118.534242,29.341209;118.52763,29.348514;118.523462,29.353677;118.526193,29.36098;118.519007,29.36652;118.501184,29.362491;118.493854,29.361106;118.486093,29.368787;118.473732,29.362617;118.462952,29.358839;118.456197,29.36715;118.456341,29.37206;118.440674,29.375459;118.425439,29.385279;118.418396,29.393587;118.415666,29.40416;118.406467,29.406803;118.41466,29.41901;118.398131,29.424925;118.390082,29.423289;118.384045,29.433859;118.376715,29.43411;118.370535,29.445937;118.354293,29.45185;118.345382,29.462039;118.343657,29.479396;118.336471,29.484427;118.329428,29.495745;118.309737,29.495493;118.306719,29.490086;118.316493,29.422785;118.295365,29.419388;118.287459,29.426686;118.279267,29.424925;118.272799,29.427945;118.248796,29.431719;118.216889,29.420143;118.20654,29.400132;118.202228,29.393335;118.193461,29.395223;118.194179,29.387796;118.208552,29.376215;118.204097,29.368031;118.208265,29.352166;118.204384,29.34335;118.193604,29.340328;118.183256,29.332267;118.180238,29.322065;118.166727,29.314633;118.175207,29.306822;118.177651,29.298255;118.169171,29.298129;118.152211,29.286285;118.145168,29.287545;118.137263,29.283891;118.123034,29.288175;118.116566,29.293593;118.105642,29.285151;118.073303,29.289813;118.07934,29.265869;118.075747,29.246332;118.082502,29.233726;118.072154,29.216578;118.051025,29.217209;118.042833,29.211156;118.028604,29.169786;118.028604,29.165875;118.043839,29.157296;118.038521,29.12739;118.053181,29.11439;118.043552,29.110098;118.037659,29.102146;118.03809,29.097727;118.048726,29.088006;118.076322,29.07437;118.077184,29.062121;118.065686,29.053028;118.072585,29.043934;118.07201,29.038881;118.086239,29.030544;118.09012,29.024733;118.090263,29.01829;118.091126,29.008308;118.097019,28.998831;118.105067,29.011341;118.109954,29.004518;118.100612,28.990365;118.109667,28.992007;118.11944,29.010709;118.128208,29.016521;118.131801,29.00755;118.126052,28.99542;118.130651,28.987837;118.146318,28.976589;118.15566,28.985941;118.165577,28.9867;118.17492,28.98038;118.187137,28.976336;118.199641,28.955606;118.210421,28.954341;118.212289,28.948652;118.2212,28.949032;118.227812,28.942584;118.207115,28.920835;118.197916,28.916914;118.192742,28.909326;118.195186,28.904393;118.199066,28.903381;118.243766,28.920076;118.250521,28.920202;118.257276,28.923617;118.271074,28.917547;118.276105,28.896804;118.282716,28.888329;118.289184,28.864038;118.303845,28.840627;118.295508,28.834678;118.300108,28.826451;118.330434,28.815438;118.357743,28.814806;118.368091,28.811261;118.373697,28.803538;118.374415,28.795182;118.382895,28.787838;118.379446,28.784672;118.379877,28.775048;118.383327,28.774542;118.385914,28.75491;118.388932,28.755924;118.393963,28.754024;118.393388,28.753137;118.393531,28.747817;118.387638,28.745917;118.392669,28.74351;118.391663,28.739203;118.400574,28.734769;118.393819,28.734009;118.393244,28.729954;118.401436,28.713863;118.393244,28.710695;118.390513,28.704866;118.393675,28.699543;118.402586,28.702331;118.406898,28.697895;118.411785,28.697642;118.419834,28.691178;118.416528,28.683066;118.43047,28.679897;118.431188,28.653275;118.422852,28.646682;118.425727,28.634762;118.433201,28.626265;118.431045,28.618529;118.420984,28.608255;118.41351,28.609524;118.413797,28.596331;118.421702,28.596712;118.423571,28.586055;118.416097,28.583137;118.417534,28.572986;118.410923,28.57324;118.414516,28.559028;118.42817,28.547225;118.42084,28.545194;118.425152,28.534025;118.42702,28.524123;118.43047,28.515745;118.437656,28.522346;118.445992,28.513078;118.438662,28.506095;118.414372,28.498477;118.424433,28.492636;118.43665,28.493525;118.454041,28.477269;118.471289,28.481333;118.482356,28.469268;118.472582,28.464568;118.465396,28.458725;118.469995,28.45212;118.463671,28.453771;118.465971,28.448436;118.45131,28.418196;118.456772,28.416036;118.439093,28.411207;118.431476,28.398625;118.438375,28.400023;118.439812,28.39354;118.45591,28.383753;118.463527,28.359979;118.474594,28.331113;118.472295,28.327934;118.482356,28.31903;118.472582,28.316868;118.46209,28.302621;118.439237,28.291552;118.433344,28.28799;118.430326,28.279465;118.434494,28.26903;118.440674,28.266485;118.439093,28.26114;118.449442,28.25974;118.444268,28.253377;118.448867,28.24994",
            "child": null,
            "data": {
              "value": ".8287",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "杭州市",
            "grid_id": "2",
            "grid_level": "2",
            "center": "xuwei20",
            "grid_location": "120.693514,30.255543;120.678896,30.239005;120.652349,30.222104;120.622715,30.17265;120.618588,30.157061;120.610352,30.156607;120.612427,30.154301;120.609296,30.151815;120.602388,30.154737;120.600234,30.15212;120.59468,30.153122;120.593811,30.156868;120.587185,30.157724;120.57853,30.157795;120.568957,30.152737;120.565795,30.16123;120.543566,30.164753;120.534485,30.160469;120.525358,30.160316;120.505798,30.175025;120.510999,30.178345;120.503217,30.175456;120.494438,30.179016;120.488817,30.174938;120.471087,30.174954;120.471351,30.159847;120.466989,30.156303;120.458221,30.15579;120.454541,30.138076;120.450163,30.136545;120.447591,30.138412;120.433699,30.134265;120.435436,30.149009;120.431541,30.149942;120.429133,30.157811;120.426519,30.153558;120.419744,30.154097;120.419917,30.139298;120.413459,30.134411;120.413856,30.141455;120.406398,30.141439;120.406876,30.1474;120.393827,30.162434;120.371241,30.158026;120.367152,30.152255;120.361446,30.15681;120.36291,30.147546;120.347691,30.146868;120.347796,30.142044;120.336424,30.129315;120.326294,30.129248;120.321069,30.141994;120.309123,30.135092;120.305907,30.130958;120.312178,30.129327;120.30876,30.122452;120.295403,30.111386;120.296044,30.103886;120.309115,30.101685;120.321281,30.108591;120.34464,30.09612;120.343066,30.078423;120.348108,30.071311;120.349127,30.060002;120.341986,30.053658;120.335651,30.053777;120.334417,30.047843;120.341242,30.0393;120.344779,30.037809;120.353962,30.033848;120.355607,30.022107;120.367948,30.013965;120.367109,30.009796;120.375338,29.998248;120.372452,29.990447;120.376046,29.977861;120.355405,29.976168;120.352666,29.959177;120.338447,29.949659;120.336808,29.941194;120.32622,29.929181;120.312805,29.931895;120.303035,29.938708;120.295495,29.923861;120.284618,29.92161;120.274267,29.925063;120.275485,29.934212;120.266079,29.945094;120.25991,29.937984;120.254043,29.938601;120.253723,29.942727;120.24216,29.943928;120.220803,29.941358;120.222974,29.935975;120.230999,29.935042;120.230464,29.930912;120.219149,29.935421;120.2103,29.933921;120.207701,29.930988;120.209527,29.923998;120.202021,29.922543;120.198789,29.91814;120.193459,29.918536;120.192653,29.912068;120.174801,29.91863;120.167315,29.906806;120.158304,29.907418;120.156811,29.883617;120.150802,29.872473;120.131836,29.853766;120.124371,29.852905;120.115406,29.844024;120.112037,29.848175;120.107195,29.838957;120.10936,29.830482;120.10167,29.82384;120.084136,29.834336;120.074973,29.830326;120.069439,29.826754;120.04443,29.829323;120.037064,29.813217;120.042418,29.795009;120.036022,29.788396;120.036166,29.775983;120.018308,29.769086;120.017194,29.763913;120.015325,29.763286;119.997898,29.759649;119.986723,29.76454;119.983885,29.772691;119.980651,29.772628;119.98119,29.772189;119.968434,29.761091;119.951366,29.761405;119.933256,29.749897;119.919458,29.762;119.912344,29.760182;119.898123,29.770144;119.895808,29.77069;119.894982,29.762586;119.893823,29.758228;119.901198,29.753619;119.904917,29.751306;119.906651,29.735243;119.916415,29.728375;119.918841,29.711186;119.924895,29.705273;119.936528,29.701744;119.939593,29.703861;119.935477,29.710276;119.943131,29.713194;119.957066,29.70414;119.973718,29.700598;119.978737,29.696024;119.979052,29.678222;119.976018,29.677067;119.965103,29.678235;119.951036,29.672909;119.945583,29.672148;119.931154,29.675408;119.92749,29.669584;119.917892,29.672223;119.914769,29.668862;119.901846,29.66665;119.889462,29.669253;119.881921,29.675089;119.865697,29.677263;119.858735,29.674666;119.84694,29.680455;119.843679,29.682087;119.842485,29.68273;119.841586,29.687782;119.830744,29.677294;119.821868,29.677929;119.821428,29.677106;119.817305,29.67181;119.810765,29.66788;119.797318,29.660716;119.782765,29.632914;119.785766,29.609884;119.78016,29.604844;119.771483,29.602583;119.771033,29.591961;119.77527,29.585609;119.767721,29.572628;119.770285,29.563432;119.755181,29.556126;119.745596,29.557422;119.729024,29.548137;119.752146,29.524126;119.741461,29.516497;119.733048,29.517234;119.733095,29.513508;119.725042,29.510823;119.725135,29.49363;119.71889,29.489271;119.713013,29.477773;119.714462,29.466712;119.72205,29.454506;119.715888,29.439611;119.706778,29.438401;119.697425,29.444207;119.695154,29.427205;119.685192,29.423362;119.679583,29.430708;119.657273,29.43313;119.650554,29.440194;119.631439,29.425312;119.631641,29.416482;119.618306,29.400539;119.611716,29.398387;119.612408,29.393745;119.624675,29.38435;119.625468,29.376962;119.622392,29.374113;119.610747,29.375261;119.595674,29.384118;119.586018,29.384243;119.580821,29.378151;119.564711,29.377746;119.557609,29.373045;119.540344,29.378769;119.532025,29.37368;119.531132,29.361247;119.518173,29.342797;119.506157,29.341635;119.498484,29.336845;119.485001,29.33915;119.48223,29.350711;119.467668,29.356297;119.461056,29.370675;119.463811,29.375754;119.457578,29.402711;119.447861,29.41223;119.444883,29.429231;119.433946,29.427957;119.438516,29.42086;119.432889,29.411355;119.411951,29.40606;119.407469,29.416215;119.399611,29.417341;119.394639,29.435762;119.389772,29.436734;119.386628,29.436977;119.374493,29.421413;119.366456,29.421856;119.3618,29.416286;119.352633,29.414133;119.34333,29.416535;119.334086,29.402237;119.346388,29.387738;119.339038,29.359155;119.354682,29.341668;119.35047,29.32898;119.355143,29.324849;119.329429,29.312366;119.335252,29.299834;119.332004,29.29773;119.32884,29.301705;119.32893,29.290457;119.318707,29.284502;119.294184,29.287067;119.294151,29.274907;119.288111,29.267363;119.27671,29.257702;119.265104,29.253256;119.243963,29.256236;119.245478,29.264466;119.240221,29.276161;119.233778,29.280988;119.234973,29.289599;119.214396,29.289862;119.206383,29.295968;119.207185,29.281368;119.21117,29.279064;119.203961,29.275529;119.19791,29.265786;119.200073,29.262531;119.207089,29.263023;119.221011,29.252331;119.217481,29.249844;119.216498,29.236091;119.219894,29.230613;119.212831,29.227827;119.208839,29.234825;119.196983,29.234209;119.195935,29.229471;119.201303,29.223678;119.19567,29.210958;119.183823,29.213207;119.176559,29.223631;119.157832,29.233957;119.144246,29.226127;119.137684,29.226879;119.135272,29.232797;119.138716,29.241225;119.1326,29.242788;119.112623,29.232912;119.091408,29.23609;119.083926,29.229838;119.069061,29.232148;119.00944,29.213314;119.005104,29.221893;118.993377,29.231468;118.991063,29.244864;118.994458,29.248964;118.985467,29.264336;118.973036,29.274819;118.968436,29.273776;118.955784,29.287505;118.95743,29.292009;118.968098,29.295756;118.96928,29.30062;118.956173,29.305456;118.948918,29.31274;118.933147,29.316459;118.906551,29.338593;118.895017,29.328741;118.884568,29.332102;118.875739,29.327805;118.866926,29.320368;118.85984,29.306576;118.834909,29.293233;118.832696,29.286101;118.81847,29.286837;118.799687,29.274028;118.792453,29.272746;118.790844,29.265093;118.783066,29.257437;118.771159,29.25561;118.770454,29.252931;118.768593,29.245915;118.773423,29.239819;118.771585,29.226248;118.759258,29.219323;118.746403,29.217095;118.737222,29.20592;118.729551,29.204433;118.721628,29.195529;118.714998,29.194537;118.690698,29.208628;118.635131,29.197781;118.633342,29.202519;118.639891,29.211095;118.638712,29.22376;118.626355,29.224669;118.613595,29.244433;118.621672,29.256154;118.612871,29.273977;118.619319,29.285073;118.627379,29.283471;118.641104,29.267336;118.642586,29.27258;118.637714,29.2834;118.620628,29.301996;118.623487,29.308534;118.609713,29.321977;118.607159,29.333359;118.602218,29.336468;118.594149,29.333669;118.592522,29.338011;118.585979,29.338089;118.577748,29.344369;118.55518,29.342033;118.548469,29.342918;118.546091,29.348952;118.525289,29.349937;118.530846,29.365297;118.526737,29.368605;118.511486,29.363944;118.499374,29.367893;118.493627,29.372616;118.485359,29.372115;118.476288,29.365821;118.469749,29.366605;118.463247,29.372521;118.463768,29.379052;118.454066,29.381916;118.446538,29.384088;118.43044,29.394661;118.428716,29.405266;118.412636,29.413824;118.418385,29.425385;118.409752,29.430914;118.395389,29.428909;118.389064,29.437952;118.379255,29.440013;118.371844,29.454567;118.357489,29.460063;118.352225,29.476343;118.351156,29.479755;118.364325,29.482254;118.390547,29.512975;118.400203,29.513368;118.419742,29.515631;118.436031,29.509517;118.455521,29.518405;118.46905,29.513871;118.498361,29.521917;118.50526,29.549311;118.498523,29.559758;118.506844,29.581045;118.541359,29.596457;118.555957,29.619445;118.561123,29.619493;118.573176,29.632691;118.576837,29.642663;118.608253,29.649218;118.626247,29.659511;118.639716,29.654256;118.647143,29.647506;118.653476,29.649082;118.678369,29.673088;118.681162,29.68172;118.688443,29.687154;118.68899,29.694432;118.697738,29.699974;118.698959,29.70518;118.706915,29.712386;118.725475,29.715329;118.733129,29.731295;118.750592,29.744284;118.754899,29.755831;118.75375,29.772754;118.753278,29.77963;118.742782,29.793859;118.747084,29.820315;118.752263,29.823581;118.765648,29.822722;118.77276,29.828768;118.766325,29.834482;118.757554,29.835331;118.760826,29.850216;118.772209,29.854026;118.784854,29.847801;118.790088,29.849486;118.813776,29.873726;118.847556,29.896866;118.851759,29.9046;118.851273,29.91853;118.844685,29.945056;118.85339,29.948076;118.87026,29.942287;118.880321,29.952129;118.890813,29.94461;118.900883,29.943914;118.898004,29.968707;118.905569,29.987355;118.898027,29.99891;118.901202,30.007016;118.896016,30.016329;118.897878,30.018931;118.904157,30.023114;118.906098,30.022676;118.908686,30.035016;118.901747,30.038292;118.896751,30.047016;118.90348,30.057732;118.894278,30.068068;118.885016,30.070192;118.883415,30.076203;118.876849,30.100945;118.874773,30.108758;118.880102,30.120526;118.894193,30.124394;118.894364,30.133511;118.901154,30.141714;118.902942,30.153938;118.887245,30.152385;118.871981,30.156899;118.862669,30.153612;118.851926,30.161627;118.859095,30.171966;118.908896,30.189184;118.918215,30.194557;118.925145,30.203987;118.935703,30.208697;118.931001,30.21995;118.909273,30.223886;118.899202,30.248461;118.88798,30.254333;118.88855,30.257948;118.895862,30.260009;118.884299,30.288259;118.883717,30.296339;118.887997,30.304103;118.88539,30.317729;118.886064,30.320429;118.905876,30.328494;118.915991,30.337814;118.928647,30.340842;118.941383,30.349414;118.942533,30.356803;118.955918,30.364531;118.961595,30.364835;118.965554,30.352862;118.973338,30.356882;118.980523,30.352632;118.993417,30.354718;118.994588,30.338256;119.013296,30.333394;119.030816,30.319635;119.053727,30.319134;119.057632,30.311966;119.062842,30.309845;119.069112,30.310838;119.079562,30.321554;119.096463,30.329448;119.131844,30.311031;119.157335,30.310657;119.164437,30.304524;119.171245,30.305513;119.176607,30.301388;119.194361,30.297435;119.207263,30.296573;119.211912,30.307049;119.21915,30.304647;119.225586,30.306483;119.228239,30.302603;119.233782,30.294425;119.240779,30.300069;119.244157,30.307568;119.24925,30.318917;119.252022,30.328136;119.246169,30.332563;119.254147,30.346953;119.267314,30.343179;119.277539,30.348572;119.284194,30.347676;119.295522,30.355705;119.306771,30.369599;119.332789,30.377244;119.348896,30.368542;119.355665,30.354574;119.381746,30.360648;119.392245,30.369917;119.406051,30.373908;119.409128,30.379427;119.42427,30.382064;119.436686,30.389802;119.44079,30.396605;119.446425,30.396824;119.457091,30.417147;119.474042,30.414967;119.504872,30.41098;119.522982,30.408644;119.541846,30.417653;119.541712,30.421156;119.541382,30.430052;119.557889,30.445482;119.572129,30.448851;119.585958,30.430125;119.597901,30.427089;119.611421,30.432635;119.624129,30.433198;119.641546,30.447366;119.648332,30.446324;119.649535,30.442666;119.651734,30.435932;119.637067,30.431051;119.641973,30.412344;119.63848,30.405839;119.648942,30.402321;119.673592,30.404907;119.687857,30.415387;119.682198,30.418034;119.695323,30.436575;119.707414,30.439388;119.704733,30.456552;119.69969,30.45616;119.699128,30.460148;119.693408,30.462249;119.69729,30.465862;119.696129,30.474559;119.702817,30.477003;119.708997,30.491459;119.710803,30.500446;119.705355,30.504886;119.71046,30.513656;119.709319,30.530292;119.69608,30.552438;119.691793,30.568026;119.69432,30.57099;119.707649,30.569621;119.720798,30.574698;119.72228,30.570104;119.722954,30.568013;119.724169,30.564228;119.734705,30.564341;119.741216,30.559866;119.743556,30.563338;119.756622,30.564336;119.768103,30.569591;119.772282,30.559372;119.767298,30.548303;119.7722,30.538358;119.762534,30.531589;119.762557,30.528379;119.786556,30.522629;119.791433,30.516697;119.803478,30.516232;119.822137,30.521878;119.836567,30.507938;119.846822,30.508266;119.854014,30.512608;119.859548,30.501093;119.868076,30.494065;119.865749,30.489945;119.876433,30.489407;119.882693,30.485567;119.874881,30.481876;119.876458,30.471887;119.888523,30.471107;119.895069,30.465806;119.904184,30.471162;119.913718,30.466682;119.918613,30.471551;119.927519,30.473436;119.925693,30.466824;119.931958,30.469722;119.935957,30.468071;119.933708,30.461964;119.938927,30.455566;119.94444,30.454958;119.951927,30.461617;119.95602,30.456614;119.956275,30.445159;119.967379,30.439924;119.975202,30.443143;119.976677,30.448792;119.986156,30.456863;119.99188,30.456979;120.001042,30.457158;120.004428,30.457232;120.012289,30.448706;120.042526,30.445678;120.041538,30.441957;120.039978,30.436087;120.068574,30.440508;120.066072,30.446342;120.072011,30.455921;120.06294,30.469699;120.062673,30.485176;120.068295,30.494082;120.07149,30.510229;120.077254,30.507794;120.080026,30.510807;120.099361,30.510101;120.102023,30.508074;120.098559,30.502305;120.099959,30.497071;120.116005,30.48752;120.149592,30.496769;120.15053,30.484227;120.154083,30.480003;120.18297,30.49109;120.176758,30.497224;120.179237,30.498679;120.184665,30.494268;120.186965,30.496261;120.180517,30.499705;120.184292,30.501677;120.17871,30.50631;120.184152,30.504755;120.190283,30.507194;120.185508,30.509288;120.185783,30.513147;120.193276,30.518156;120.197686,30.515677;120.2036,30.528568;120.206824,30.518599;120.214848,30.52512;120.233781,30.524847;120.232876,30.529169;120.245257,30.520228;120.276314,30.522461;120.280655,30.520249;120.285675,30.523737;120.291127,30.522622;120.291651,30.527223;120.304776,30.535241;120.318782,30.536462;120.32295,30.53682;120.32631,30.52587;120.32746,30.522106;120.33231,30.506472;120.333023,30.480128;120.343073,30.487068;120.346943,30.478266;120.342025,30.476525;120.346138,30.445309;120.34169,30.444814;120.341962,30.440556;120.336748,30.437435;120.338179,30.426732;120.329403,30.421195;120.327788,30.414359;120.312512,30.406666;120.312305,30.402765;120.316886,30.403801;120.320985,30.404732;120.325268,30.386886;120.331718,30.385141;120.33576,30.384051;120.34756,30.380866;120.350312,30.376029;120.350941,30.37634;120.351498,30.376652;120.355792,30.381956;120.406331,30.392213;120.407283,30.379347;120.39397,30.377166;120.386191,30.364141;120.423466,30.334947;120.43851,30.369203;120.453833,30.386917;120.471117,30.392026;120.513221,30.39723;120.657329,30.394462;120.672842,30.390934;120.682715,30.383426;120.706596,30.328574;120.730141,30.302066;120.693514,30.255543",
            "child": null,
            "data": {
              "value": ".7561",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "舟山市",
            "grid_id": "24",
            "grid_level": "2",
            "center": "zhoushan",
            "grid_location": "121.745791,30.081269;121.846977,29.972704;121.881471,29.959688;121.906768,29.965696;121.944712,29.988221;121.969434,30.009239;121.995305,29.979712;122.018027,29.95548;122.026651,29.939457;122.057409,29.929192;122.095915,29.925389;122.134448,29.928941;122.16203,29.930397;122.202849,29.922384;122.220097,29.886317;122.199183,29.852181;122.01866,29.769952;122.001412,29.727808;122.046256,29.675605;122.143991,29.610313;122.281971,29.582174;122.388905,29.706729;122.487791,29.801046;122.542983,29.919317;122.532634,29.99942;122.483191,30.065456;122.546432,30.14444;122.686711,30.132446;122.793646,30.192399;122.785597,30.261299;122.705109,30.40593;122.594725,30.565273;122.656816,30.632913;122.860336,30.666716;122.892531,30.740865;122.867235,30.809746;122.723506,30.918861;122.607373,30.921835;122.283121,30.746203;122.032458,30.705474;121.964618,30.660751;121.974966,30.501567;121.826638,30.336135;121.647481,30.18372",
            "child": null,
            "data": {
              "value": ".8291",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "金华市",
            "grid_id": "10",
            "grid_level": "2",
            "center": null,
            "grid_location": "119.93724,28.802509;119.929523,28.80779;119.922908,28.80653;119.931168,28.800423;119.927492,28.794035;119.932948,28.786056;119.923089,28.785958;119.921789,28.780208;119.908561,28.76998;119.910326,28.762134;119.896475,28.752743;119.887728,28.759015;119.878942,28.749443;119.882594,28.7439;119.878373,28.73802;119.881408,28.731087;119.877103,28.730537;119.873349,28.722448;119.870187,28.725944;119.855273,28.720622;119.850848,28.723692;119.844618,28.716081;119.838119,28.716338;119.841852,28.709599;119.839327,28.702199;119.829908,28.696417;119.820696,28.695336;119.826862,28.694049;119.814791,28.687865;119.818345,28.686101;119.821556,28.688665;119.822709,28.684916;119.818,28.665885;119.820193,28.657664;119.815855,28.655898;119.815198,28.64986;119.805935,28.643876;119.804169,28.637976;119.799874,28.641006;119.800346,28.636496;119.796987,28.639106;119.78405,28.63738;119.770888,28.644708;119.76072,28.639568;119.764748,28.631845;119.768493,28.63101;119.766875,28.625977;119.770919,28.623441;119.770188,28.619672;119.779436,28.614083;119.77607,28.605617;119.783522,28.589479;119.776792,28.588855;119.771261,28.593635;119.756774,28.597098;119.757794,28.579437;119.752075,28.576599;119.747435,28.583844;119.742574,28.572653;119.736976,28.571501;119.742378,28.567106;119.736394,28.566068;119.730467,28.570936;119.727841,28.569661;119.724799,28.56585;119.726548,28.558057;119.715896,28.548948;119.714537,28.537057;119.709061,28.535228;119.711879,28.529005;119.696854,28.536172;119.684022,28.529985;119.684123,28.534505;119.678797,28.533617;119.672568,28.540105;119.673282,28.552188;119.669352,28.550092;119.667035,28.552171;119.661869,28.550292;119.660097,28.544979;119.655371,28.545949;119.655456,28.532354;119.650024,28.532423;119.652706,28.53656;119.649814,28.53944;119.649697,28.535828;119.640535,28.530533;119.638971,28.517028;119.63553,28.524473;119.626609,28.527642;119.621928,28.533431;119.610743,28.536208;119.608325,28.532434;119.604627,28.532839;119.599779,28.539346;119.597404,28.538445;119.596003,28.544364;119.590678,28.539161;119.584106,28.54216;119.577147,28.537624;119.56584,28.539037;119.560356,28.536656;119.559534,28.541102;119.554614,28.535371;119.54448,28.544158;119.540749,28.542668;119.540095,28.547741;119.544096,28.546221;119.540694,28.560405;119.520771,28.567688;119.503579,28.55573;119.49743,28.572097;119.504492,28.580863;119.505362,28.5926;119.523715,28.613656;119.522613,28.618126;119.518559,28.613178;119.51482,28.614825;119.515989,28.624793;119.504936,28.626477;119.515574,28.629298;119.512085,28.633789;119.51926,28.636005;119.527618,28.644715;119.511106,28.641994;119.500739,28.636511;119.500594,28.632233;119.49692,28.630748;119.492219,28.636;119.49302,28.642373;119.488603,28.645533;119.473938,28.638454;119.468186,28.639039;119.461463,28.654312;119.470783,28.658995;119.482268,28.659974;119.486986,28.66511;119.48234,28.670065;119.469912,28.671577;119.466525,28.687576;119.472717,28.712585;119.470982,28.718112;119.46599,28.720026;119.470843,28.726976;119.467244,28.746809;119.475996,28.746232;119.475845,28.750927;119.482273,28.751862;119.478165,28.761369;119.480645,28.771714;119.47202,28.773501;119.469256,28.769436;119.440728,28.76352;119.429515,28.756024;119.424339,28.756386;119.419171,28.771014;119.412976,28.772366;119.394217,28.79405;119.385309,28.794159;119.378209,28.792149;119.374617,28.780126;119.366077,28.776358;119.364039,28.766594;119.356922,28.763127;119.348187,28.764763;119.341767,28.780797;119.33123,28.788639;119.326785,28.810547;119.337021,28.814874;119.34567,28.828933;119.3518,28.832773;119.341846,28.842788;119.34414,28.847985;119.339416,28.851548;119.332844,28.853052;119.317356,28.848757;119.320656,28.866359;119.316345,28.868626;119.319402,28.872946;119.321496,28.870638;119.325385,28.873566;119.328574,28.870964;119.3321,28.873503;119.340803,28.871705;119.344098,28.880803;119.337898,28.887656;119.344656,28.886645;119.347333,28.895467;119.351443,28.895449;119.350695,28.906978;119.339526,28.913556;119.335929,28.924648;119.330782,28.926636;119.334062,28.931482;119.333446,28.940071;119.323313,28.946743;119.323322,28.951246;119.320295,28.95079;119.322677,28.953886;119.320246,28.960701;119.329988,28.973277;119.329134,28.979117;119.334887,28.992001;119.32885,28.994767;119.331522,29.001928;119.326763,29.00517;119.329572,29.023152;119.334185,29.025705;119.331709,29.044278;119.339082,29.039913;119.340579,29.048466;119.331226,29.063979;119.335664,29.073535;119.343002,29.079726;119.331055,29.098956;119.320903,29.092244;119.312655,29.090752;119.314112,29.093628;119.309611,29.096073;119.306556,29.093786;119.307421,29.105237;119.297682,29.109702;119.29571,29.114063;119.292013,29.11335;119.292419,29.121223;119.286216,29.121261;119.28416,29.124811;119.276946,29.123217;119.273445,29.140305;119.262486,29.142181;119.258891,29.140136;119.255286,29.148711;119.258145,29.159214;119.249274,29.16748;119.248224,29.176411;119.252076,29.187238;119.248196,29.191029;119.249227,29.195134;119.241824,29.197923;119.23762,29.194523;119.2358,29.197708;119.228147,29.198964;119.230136,29.202174;119.240611,29.202159;119.243707,29.20781;119.239785,29.214937;119.243088,29.221423;119.240403,29.228226;119.251098,29.233581;119.266518,29.254852;119.277099,29.257183;119.292291,29.2743;119.289854,29.28364;119.2952,29.287124;119.291812,29.292669;119.302146,29.289486;119.302877,29.277447;119.305599,29.28416;119.307912,29.279359;119.310934,29.27989;119.314817,29.288196;119.319951,29.289165;119.325269,29.285271;119.322575,29.290974;119.32721,29.289246;119.326737,29.291834;119.329963,29.288414;119.333521,29.300748;119.338069,29.293724;119.332803,29.308036;119.334472,29.316455;119.338919,29.315675;119.352958,29.323547;119.358643,29.32003;119.360265,29.322201;119.352556,29.329533;119.354332,29.346864;119.346122,29.35058;119.347043,29.355444;119.340872,29.355369;119.344455,29.37822;119.353425,29.395541;119.349022,29.397519;119.344309,29.394833;119.342342,29.39717;119.34927,29.400068;119.337002,29.404332;119.339884,29.404826;119.342088,29.412957;119.361857,29.415692;119.368572,29.422637;119.376331,29.422307;119.389446,29.439029;119.397078,29.434637;119.400739,29.420968;119.411632,29.41198;119.434565,29.411598;119.437744,29.418922;119.430557,29.415969;119.430503,29.420454;119.437195,29.424027;119.437957,29.428515;119.445825,29.430269;119.450643,29.415806;119.461226,29.414886;119.460692,29.409329;119.471342,29.404122;119.466668,29.400912;119.47062,29.400643;119.467517,29.397472;119.474829,29.394534;119.475203,29.387389;119.471349,29.386864;119.469874,29.380006;119.466015,29.377979;119.465848,29.367945;119.473754,29.363819;119.473022,29.359066;119.481137,29.360858;119.486684,29.356993;119.484051,29.351226;119.488581,29.34578;119.485363,29.342283;119.496666,29.342099;119.491453,29.338507;119.497955,29.3357;119.50068,29.34064;119.504074,29.337976;119.504654,29.341129;119.513947,29.34359;119.517454,29.339089;119.532911,29.3608;119.531046,29.371774;119.543448,29.37921;119.558386,29.372993;119.56742,29.378577;119.58075,29.377673;119.590837,29.384559;119.599825,29.383104;119.610626,29.374729;119.621655,29.372838;119.627494,29.377213;119.625846,29.387334;119.613907,29.393622;119.612818,29.397472;119.617902,29.397706;119.631556,29.412148;119.628674,29.415147;119.633752,29.425415;119.645749,29.428812;119.64766,29.435862;119.639907,29.436032;119.641493,29.440708;119.650538,29.437809;119.64904,29.442577;119.653965,29.443353;119.655693,29.434655;119.663454,29.430404;119.67571,29.436757;119.686182,29.428159;119.684394,29.421957;119.687946,29.420936;119.691555,29.423286;119.688262,29.426168;119.696186,29.425257;119.696718,29.428561;119.689127,29.431392;119.692429,29.433666;119.688747,29.434607;119.696868,29.437229;119.699215,29.446277;119.702515,29.440573;119.708175,29.438934;119.714242,29.438389;119.711615,29.441612;119.717488,29.442159;119.717051,29.445628;119.711478,29.447185;119.719822,29.450922;119.724742,29.459876;119.71483,29.469366;119.715443,29.482143;119.711187,29.485124;119.712967,29.488786;119.709477,29.489234;119.709809,29.494915;119.714953,29.50141;119.720486,29.496715;119.718116,29.494676;119.720324,29.491182;119.726166,29.508775;119.720693,29.510928;119.730515,29.512417;119.734602,29.516335;119.730023,29.52119;119.72002,29.523174;119.721335,29.526311;119.72778,29.523249;119.731499,29.527865;119.730755,29.52312;119.734008,29.52263;119.737224,29.526754;119.740752,29.523802;119.741427,29.527712;119.735337,29.531252;119.734417,29.543486;119.727815,29.539438;119.729334,29.542655;119.72481,29.543735;119.724288,29.54724;119.730597,29.550495;119.724193,29.557555;119.7352,29.552286;119.731117,29.559155;119.738497,29.555082;119.75118,29.558044;119.751225,29.562955;119.756302,29.567539;119.762468,29.564638;119.768371,29.56649;119.771334,29.561263;119.769718,29.571627;119.767101,29.567866;119.758124,29.570295;119.762911,29.574353;119.758262,29.579649;119.763959,29.58474;119.77653,29.587317;119.772176,29.591871;119.773738,29.598678;119.767786,29.600487;119.76621,29.610147;119.768228,29.612796;119.770986,29.609079;119.772407,29.614819;119.776009,29.612565;119.771715,29.602886;119.777709,29.604264;119.779498,29.612116;119.785512,29.613332;119.786316,29.623083;119.776323,29.628471;119.774866,29.637102;119.783921,29.645165;119.782003,29.64814;119.78924,29.660285;119.797044,29.658724;119.800153,29.662901;119.80384,29.662054;119.822136,29.67797;119.831176,29.677471;119.840401,29.685623;119.860529,29.674846;119.866127,29.677632;119.887406,29.673986;119.890375,29.679903;119.897822,29.683289;119.893794,29.668873;119.904066,29.667158;119.916736,29.669289;119.919051,29.672691;119.928117,29.670172;119.930377,29.676012;119.93409,29.678588;119.933129,29.674676;119.941836,29.683125;119.958664,29.687066;119.956304,29.682344;119.962094,29.685282;119.969228,29.677833;119.976415,29.676571;119.974124,29.680326;119.977653,29.682117;119.978599,29.677598;119.995288,29.667668;119.996051,29.661986;120.010136,29.661609;120.025953,29.653789;120.03568,29.660367;120.034343,29.674418;120.040156,29.67416;120.03855,29.67155;120.046768,29.65983;120.030953,29.654835;120.030274,29.650651;120.038851,29.642413;120.049663,29.638174;120.05146,29.633206;120.047188,29.62497;120.023616,29.623931;120.022483,29.615446;120.011733,29.597171;120.015481,29.591803;120.011489,29.588555;120.011845,29.580451;120.036699,29.571598;120.04895,29.576584;120.053855,29.565921;120.06117,29.563957;120.057648,29.554844;120.063544,29.551062;120.063059,29.546954;120.073841,29.546306;120.080484,29.540414;120.085297,29.54317;120.098835,29.540507;120.092488,29.527555;120.093233,29.519961;120.085185,29.522014;120.079335,29.517717;120.084005,29.509835;120.098759,29.505143;120.105945,29.512768;120.110905,29.512809;120.117754,29.506143;120.114475,29.504967;120.116989,29.502608;120.111754,29.49439;120.126833,29.496805;120.125919,29.501546;120.136468,29.501157;120.137335,29.507497;120.143308,29.509724;120.146405,29.515249;120.155515,29.514028;120.163765,29.523152;120.171005,29.520229;120.187485,29.532142;120.187276,29.540749;120.193812,29.556688;120.202334,29.562129;120.205867,29.557994;120.219368,29.557142;120.215106,29.52909;120.22661,29.529668;120.229068,29.522396;120.250132,29.518453;120.255476,29.510931;120.253025,29.506049;120.258349,29.501083;120.26167,29.50397;120.270778,29.502252;120.273383,29.505645;120.282232,29.499211;120.278332,29.505946;120.284769,29.502161;120.292654,29.490492;120.274896,29.487519;120.269068,29.478556;120.271423,29.468021;120.268968,29.465114;120.279021,29.461619;120.279552,29.456272;120.289444,29.447598;120.285662,29.439312;120.286741,29.423129;120.267123,29.404634;120.267228,29.395989;120.27724,29.375108;120.284356,29.368124;120.291776,29.366551;120.296074,29.360455;120.3055,29.361596;120.302289,29.367;120.313553,29.369978;120.319939,29.382879;120.331605,29.386775;120.338846,29.40804;120.343162,29.41197;120.341347,29.414346;120.344842,29.415254;120.342517,29.416983;120.354913,29.416684;120.36227,29.420917;120.375553,29.421709;120.376474,29.429058;120.368933,29.440213;120.377423,29.452616;120.385292,29.451854;120.384932,29.457882;120.390255,29.461352;120.417186,29.455087;120.431951,29.483043;120.462263,29.487941;120.468115,29.494904;120.4738,29.495917;120.474741,29.501294;120.485294,29.495591;120.486506,29.490501;120.494407,29.492695;120.494306,29.485953;120.497326,29.486226;120.502336,29.478969;120.500311,29.471471;120.508532,29.475173;120.515946,29.474579;120.524472,29.46722;120.527506,29.461274;120.518754,29.455841;120.517532,29.448403;120.520403,29.4471;120.51597,29.441025;120.517283,29.429191;120.523339,29.428892;120.518251,29.4236;120.52345,29.413008;120.521576,29.410441;120.533856,29.403689;120.535174,29.406437;120.545846,29.394768;120.554634,29.397277;120.561086,29.388848;120.564174,29.39044;120.563967,29.382163;120.558666,29.377738;120.56131,29.371423;120.567194,29.369148;120.574919,29.372355;120.57862,29.37044;120.574075,29.368895;120.583733,29.36482;120.576578,29.354222;120.579425,29.344603;120.587736,29.346277;120.585503,29.349624;120.589375,29.354137;120.596066,29.354338;120.603642,29.341817;120.609469,29.339634;120.618308,29.344444;120.629339,29.342206;120.638461,29.337095;120.637198,29.329585;120.643374,29.328122;120.646744,29.335507;120.650739,29.333368;120.659897,29.342397;120.660887,29.336701;120.66876,29.331268;120.678382,29.333246;120.683718,29.341721;120.692901,29.347079;120.704458,29.346211;120.707127,29.348473;120.711458,29.343113;120.703999,29.32444;120.710119,29.325566;120.715862,29.310305;120.724437,29.311165;120.725258,29.316573;120.730328,29.316902;120.735474,29.322066;120.741874,29.319095;120.742284,29.315102;120.745686,29.317198;120.749621,29.315336;120.756833,29.320436;120.757377,29.325463;120.777875,29.312564;120.781021,29.305826;120.777091,29.29992;120.780394,29.296045;120.769685,29.300729;120.765134,29.294734;120.768948,29.294231;120.769127,29.290784;120.762195,29.284728;120.785116,29.28353;120.781367,29.277518;120.777144,29.277032;120.782243,29.273488;120.777543,29.271153;120.775765,29.264565;120.780686,29.260506;120.780023,29.25326;120.783715,29.24761;120.7799,29.231766;120.790088,29.226124;120.788834,29.221456;120.781203,29.219561;120.783934,29.215324;120.778752,29.212628;120.783352,29.204449;120.778667,29.200655;120.773442,29.206453;120.770846,29.200904;120.767528,29.20366;120.770778,29.197653;120.762388,29.193843;120.761032,29.185615;120.745875,29.174355;120.729844,29.168992;120.732678,29.165476;120.726435,29.156155;120.719655,29.154907;120.718196,29.149924;120.72285,29.146132;120.719954,29.143692;120.724963,29.142216;120.726207,29.136208;120.734643,29.139835;120.735939,29.136468;120.741516,29.136903;120.743224,29.13261;120.750084,29.1327;120.753272,29.128459;120.751325,29.123707;120.742395,29.119319;120.735081,29.120648;120.73038,29.126075;120.725431,29.117561;120.728649,29.114822;120.716429,29.104784;120.701825,29.098615;120.700289,29.093756;120.711434,29.080366;120.708772,29.062042;120.70228,29.060529;120.703024,29.056135;120.696286,29.057795;120.707225,29.050385;120.703998,29.045118;120.69828,29.047176;120.702349,29.034311;120.71228,29.027403;120.71537,29.030192;120.713361,29.038716;120.721457,29.043327;120.721643,29.034824;120.724373,29.036158;120.726069,29.031426;120.731166,29.031637;120.7265,29.017472;120.732883,29.019711;120.735586,29.013601;120.727561,29.001;120.735381,28.989544;120.725637,28.985366;120.722586,28.97915;120.720281,28.980847;120.71585,28.977973;120.710283,28.981304;120.704181,28.9781;120.703796,28.985437;120.699925,28.98619;120.680936,28.979732;120.68021,28.962866;120.667072,28.944648;120.671322,28.92236;120.655389,28.906693;120.645169,28.90676;120.645685,28.901913;120.62589,28.90224;120.611966,28.897344;120.596164,28.88654;120.5884,28.875989;120.568101,28.866795;120.559937,28.867406;120.551871,28.873338;120.541085,28.87135;120.538638,28.879737;120.543194,28.882996;120.538286,28.885901;120.536442,28.883325;120.530225,28.884679;120.525004,28.889076;120.526916,28.893722;120.521502,28.89634;120.517438,28.889748;120.51774,28.880257;120.502,28.875249;120.509299,28.862633;120.503599,28.85996;120.504872,28.85363;120.493518,28.851967;120.494782,28.84692;120.489682,28.842674;120.491721,28.838872;120.487893,28.833945;120.483563,28.835836;120.480846,28.845445;120.474288,28.847817;120.469908,28.845549;120.45056,28.847106;120.432572,28.836193;120.424894,28.855815;120.421022,28.851701;120.41317,28.850987;120.407498,28.861347;120.398355,28.850722;120.400876,28.844897;120.396816,28.836817;120.39159,28.835249;120.386801,28.839649;120.380708,28.838328;120.374376,28.843373;120.363681,28.845065;120.358386,28.855298;120.354085,28.856143;120.353227,28.863899;120.343529,28.866187;120.340833,28.87151;120.322829,28.881614;120.325103,28.884582;120.322385,28.891134;120.317652,28.894211;120.31396,28.892798;120.309304,28.897458;120.313913,28.90002;120.314412,28.912511;120.320842,28.920648;120.311725,28.931385;120.313988,28.937976;120.283596,28.936258;120.277145,28.955454;120.269867,28.950078;120.271288,28.945264;120.260712,28.937163;120.265078,28.931546;120.256666,28.918806;120.268524,28.916119;120.265354,28.909909;120.268897,28.89454;120.268178,28.873629;120.261018,28.869602;120.260959,28.865771;120.252144,28.866215;120.250155,28.856495;120.236006,28.848216;120.234385,28.841062;120.231081,28.846454;120.227487,28.83925;120.222738,28.840058;120.218775,28.83605;120.218345,28.827176;120.206509,28.813468;120.209304,28.809865;120.207027,28.806116;120.21578,28.800751;120.213328,28.794266;120.20546,28.789451;120.188998,28.789507;120.183601,28.778762;120.172435,28.779803;120.15307,28.789421;120.1459,28.788662;120.144131,28.785443;120.147639,28.781008;120.140644,28.765192;120.128822,28.765909;120.116495,28.769333;120.115198,28.774532;120.102508,28.774665;120.095852,28.783172;120.097622,28.791734;120.092659,28.789328;120.091928,28.793705;120.066297,28.77744;120.064722,28.77349;120.035737,28.763889;120.031971,28.771068;120.01767,28.778065;120.017052,28.787679;120.010627,28.787866;119.989625,28.798856;119.988934,28.803294;119.979378,28.801643;119.973841,28.791596;119.966789,28.79504;119.957224,28.793019;119.950903,28.7983;119.93724,28.802509",
            "child": null,
            "data": {
              "value": ".8341",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "温州市",
            "grid_id": "8",
            "grid_level": "2",
            "center": null,
            "grid_location": "121.169887,27.536286;121.180531,27.559348;121.202906,27.579867;121.228497,27.594173;121.250642,27.621105;121.251089,27.643144;121.239855,27.699144;121.253944,27.815711;121.265105,27.837687;121.25648,27.881504;121.254148,27.913772;121.257023,27.936772;121.282403,27.985807;121.295616,27.999873;121.307103,28.003551;121.379221,28.00603;121.354705,28.019118;121.31562,28.03145;121.282794,28.036375;121.258677,28.036489;121.147058,28.016821;121.13928,28.021541;121.1162,28.065612;121.095414,28.09302;121.126673,28.143993;121.13755,28.169793;121.149328,28.215074;121.15602,28.272069;121.189891,28.28887;121.214118,28.310533;121.221535,28.358589;121.212348,28.377643;121.232792,28.388803;121.250945,28.390564;121.262874,28.416438;121.243401,28.423083;121.214489,28.451793;121.213449,28.466408;121.202054,28.474252;121.200806,28.483677;121.192427,28.487579;121.191587,28.492234;121.177971,28.502804;121.178942,28.511586;121.158644,28.525684;121.135762,28.528564;121.122889,28.542791;121.111578,28.541963;121.095257,28.528734;121.092804,28.505611;121.08536,28.498943;121.081761,28.489991;121.072208,28.486742;121.061817,28.488483;121.046608,28.48128;121.032479,28.482378;121.029137,28.478637;121.013044,28.484994;121.003516,28.480642;120.99748,28.485727;120.974101,28.492698;120.951445,28.51158;120.93414,28.510939;120.916539,28.494114;120.8978,28.489567;120.870837,28.501064;120.869909,28.509358;120.863225,28.519348;120.851883,28.520658;120.846471,28.525425;120.84344,28.532945;120.84785,28.540707;120.845436,28.546171;120.838982,28.54792;120.833298,28.57152;120.805126,28.579092;120.802696,28.598909;120.792655,28.606162;120.78395,28.605786;120.775764,28.600296;120.771527,28.606108;120.750088,28.617172;120.716661,28.60825;120.714173,28.597819;120.693768,28.589514;120.683256,28.592236;120.673802,28.584517;120.661772,28.590592;120.656634,28.585593;120.645,28.584945;120.644852,28.581336;120.659692,28.570085;120.65621,28.563217;120.647784,28.562879;120.639204,28.56803;120.628839,28.56304;120.633346,28.544985;120.6328,28.540636;120.62695,28.539051;120.612334,28.541107;120.590921,28.53711;120.573948,28.550071;120.554791,28.557122;120.547891,28.548895;120.529513,28.55728;120.523872,28.564125;120.50805,28.566139;120.504903,28.571293;120.507012,28.57289;120.496517,28.587043;120.487377,28.587028;120.478521,28.593814;120.459489,28.59105;120.449118,28.57513;120.438336,28.56889;120.437782,28.543934;120.43194,28.536112;120.424523,28.513329;120.42635,28.49942;120.419206,28.490949;120.416222,28.480727;120.405813,28.474843;120.393974,28.479776;120.389873,28.459571;120.378156,28.456915;120.388148,28.434374;120.383133,28.42459;120.384276,28.41969;120.352762,28.439819;120.344965,28.438415;120.34816,28.419215;120.340109,28.417451;120.337766,28.412674;120.344099,28.401642;120.350496,28.400981;120.35524,28.391005;120.351994,28.377415;120.360127,28.377595;120.361712,28.367746;120.369987,28.362313;120.363994,28.343467;120.355404,28.34157;120.36354,28.333543;120.378894,28.331445;120.385534,28.324671;120.400942,28.32011;120.410549,28.309265;120.421168,28.304182;120.432765,28.2739;120.428014,28.257331;120.442953,28.248669;120.445373,28.243564;120.443547,28.235371;120.422445,28.212632;120.431159,28.2024;120.43625,28.188817;120.424614,28.160217;120.415918,28.161204;120.400252,28.156969;120.392464,28.150331;120.397704,28.144095;120.40511,28.143628;120.413228,28.136513;120.412569,28.128792;120.417944,28.121596;120.401948,28.102786;120.376584,28.08817;120.380802,28.061623;120.374564,28.057466;120.357431,28.058652;120.351654,28.053388;120.354707,28.032348;120.341216,27.998418;120.355589,27.99399;120.357106,27.990436;120.350185,27.987217;120.342551,27.976775;120.335449,27.972628;120.331186,27.984875;120.298588,27.982483;120.289949,27.974735;120.287118,27.965161;120.281786,27.96038;120.267978,27.960479;120.255515,27.968294;120.248006,27.941294;120.236381,27.937633;120.201915,27.944706;120.194432,27.954225;120.184925,27.958581;120.183462,27.965295;120.178896,27.966702;120.179958,27.978898;120.153167,27.987225;120.150382,27.982702;120.14553,27.982566;120.122793,27.993233;120.104738,27.988038;120.114944,27.974929;120.11359,27.970954;120.103462,27.968909;120.086358,27.974162;120.074172,27.971365;120.073514,27.965403;120.079176,27.966865;120.074569,27.960674;120.073164,27.947404;120.062765,27.948412;120.055387,27.954005;120.042415,27.954746;120.037592,27.943762;120.011684,27.948433;119.974398,27.942736;119.969522,27.946457;119.968694,27.956059;119.976897,27.977873;119.968665,27.982696;119.965125,27.979486;119.952176,27.979507;119.939964,27.970514;119.933178,27.975044;119.925794,27.971021;119.920806,27.965044;119.920218,27.955826;119.909408,27.961418;119.895773,27.96271;119.88168,27.980468;119.871981,27.972607;119.874793,27.962438;119.871775,27.956044;119.852048,27.964054;119.839811,27.964402;119.841738,27.949069;119.850576,27.935563;119.840798,27.917385;119.831886,27.917388;119.821711,27.926333;119.81495,27.927945;119.808369,27.926899;119.792759,27.915908;119.796447,27.913381;119.797567,27.904534;119.806753,27.896345;119.79407,27.868072;119.798207,27.859565;119.794402,27.854659;119.793308,27.831249;119.788411,27.822688;119.789256,27.817412;119.795458,27.812424;119.793994,27.800708;119.78064,27.802655;119.778429,27.810068;119.774555,27.811595;119.769998,27.805665;119.761448,27.802685;119.754857,27.788939;119.743023,27.777353;119.740983,27.771013;119.743631,27.763907;119.739473,27.757815;119.72666,27.751251;119.710633,27.761416;119.703615,27.759266;119.687932,27.751248;119.684525,27.738406;119.67107,27.726806;119.657176,27.723415;119.654734,27.716668;119.656825,27.703365;119.662588,27.698616;119.653368,27.692041;119.649415,27.679509;119.641997,27.674715;119.650929,27.668737;119.646143,27.657446;119.654177,27.645014;119.647576,27.631729;119.634476,27.628017;119.63179,27.621045;119.636429,27.61412;119.638089,27.587895;119.67931,27.580942;119.683654,27.577377;119.678629,27.570353;119.678525,27.562329;119.673623,27.560572;119.665785,27.545784;119.673188,27.539264;119.689906,27.54246;119.691413,27.546814;119.714388,27.521142;119.709629,27.507498;119.716106,27.502702;119.713282,27.491097;119.717859,27.488625;119.713636,27.478477;119.716503,27.470135;119.710932,27.465035;119.708227,27.451726;119.70086,27.445404;119.694101,27.446128;119.692454,27.44359;119.696843,27.4357;119.71068,27.43047;119.717776,27.409337;119.729609,27.408464;119.739706,27.395593;119.746826,27.391874;119.747103,27.382846;119.755444,27.384102;119.756285,27.378509;119.748456,27.369804;119.755237,27.366142;119.75642,27.357452;119.774441,27.352969;119.7756,27.340179;119.78864,27.334919;119.785097,27.326265;119.779133,27.332765;119.776059,27.331101;119.772474,27.3145;119.776755,27.30969;119.79725,27.308625;119.798833,27.315026;119.802069,27.315765;119.816542,27.309979;119.826146,27.302;119.829942,27.307821;119.848537,27.305369;119.852341,27.311961;119.845852,27.313844;119.842631,27.319863;119.852883,27.329313;119.863023,27.320688;119.877563,27.3219;119.871489,27.314076;119.880408,27.313705;119.879665,27.30912;119.882944,27.307767;119.88623,27.316772;119.891453,27.313934;119.893431,27.319543;119.902909,27.317183;119.910462,27.32381;119.918963,27.324027;119.92614,27.319082;119.9431,27.322489;119.951837,27.319484;119.950772,27.329106;119.944994,27.331666;119.944479,27.342387;119.953588,27.344418;119.957884,27.352432;119.969415,27.360292;119.970328,27.372454;119.994146,27.376804;120.002819,27.384559;120.014469,27.381507;120.01603,27.370238;120.0236,27.370826;120.03902,27.349089;120.057525,27.34761;120.060485,27.355469;120.103351,27.385738;120.104876,27.397958;120.130403,27.404479;120.139156,27.401028;120.137089,27.413113;120.139029,27.422953;120.143915,27.426747;120.151632,27.426223;120.16317,27.430999;120.183951,27.424214;120.199702,27.43305;120.208917,27.4342;120.223595,27.425944;120.246878,27.4333;120.251396,27.438775;120.262425,27.440249;120.268522,27.437102;120.26778,27.416628;120.281737,27.394312;120.297806,27.402018;120.313366,27.397855;120.325575,27.414019;120.330578,27.410484;120.327588,27.404284;120.338249,27.402053;120.347221,27.405829;120.356439,27.397229;120.358033,27.389891;120.349697,27.372461;120.361355,27.361427;120.358401,27.351288;120.365256,27.343428;120.381208,27.335498;120.389883,27.318789;120.407983,27.301222;120.410135,27.290788;120.420947,27.277566;120.432676,27.274358;120.435985,27.270459;120.436683,27.264863;120.428511,27.258919;120.41855,27.261395;120.407233,27.251777;120.407682,27.248315;120.418449,27.24316;120.42118,27.235186;120.414072,27.226176;120.422359,27.198163;120.437022,27.176632;120.480632,27.144883;120.551962,27.126673;120.596284,27.121367;120.629454,27.104614;120.702889,27.057022;120.762671,27.034744;120.862607,27.019485;120.884016,27.020185;120.907626,27.02584;120.942903,27.046233;120.961283,27.07007;120.962012,27.085543;120.95391,27.106827;120.92967,27.122592;120.900995,27.129736;120.833935,27.138576;120.727547,27.14715;120.68674,27.155792;120.680091,27.199882;120.679371,27.246289;120.692597,27.332719;120.701421,27.348372;120.722034,27.366349;120.755291,27.375623;121.035493,27.350133;121.079994,27.360154;121.113167,27.373127;121.174405,27.41925;121.182281,27.43261;121.191481,27.468234;121.184047,27.487098;121.165653,27.505759;121.169887,27.536286",
            "child": null,
            "data": {
              "value": ".8209",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          },
          {
            "pid": "1",
            "grid_name": "绍兴市",
            "grid_id": "6",
            "grid_level": "2",
            "center": "sxcs3",
            "grid_location": "120.1135,29.8444;120.1465,29.8718;120.1465,29.9048;120.1904,29.9158;120.2124,29.9377;120.2234,29.9432;120.2454,29.9377;120.2563,29.9432;120.2673,29.9268;120.2783,29.9213;120.2893,29.9377;120.3113,29.9268;120.3223,29.9323;120.3442,29.9707;120.3662,29.9762;120.3552,30.0146;120.3442,30.0366;120.3333,30.0366;120.3223,30.0476;120.3333,30.0586;120.3333,30.097;120.3113,30.108;120.3003,30.097;120.2893,30.1025;120.3113,30.1355;120.3223,30.1245;120.3442,30.141;120.3552,30.141;120.3552,30.152;120.3882,30.1575;120.3992,30.1355;120.4102,30.1355;120.4102,30.1465;120.4321,30.13;120.4431,30.1355;120.4541,30.1465;120.4651,30.152;120.4651,30.1685;120.498,30.1685;120.509,30.1575;120.542,30.1575;120.564,30.1465;120.6079,30.152;120.6409,30.2179;120.6738,30.2344;120.7178,30.2838;120.8496,30.2454;120.8826,30.2509;120.9265,30.1685;120.9375,30.1245;120.9265,30.1135;120.9485,30.0916;120.9705,30.0916;120.9705,30.0696;120.9924,30.0531;120.9924,30.0256;121.0364,30.0146;121.0474,30.0037;121.0474,30.0092;121.0583,30.0037;121.0693,30.0037;121.0913,29.9872;121.0693,29.9597;121.0474,29.9542;121.0364,29.9268;121.0144,29.8938;121.0364,29.8718;121.0583,29.8553;121.0693,29.8608;121.1023,29.8389;121.0913,29.8169;121.1023,29.8059;121.0803,29.7839;121.0583,29.7784;121.0474,29.762;121.0254,29.762;121.0364,29.74;121.0254,29.729;121.0364,29.718;121.0034,29.707;121.0144,29.6906;120.9924,29.6851;120.9924,29.6741;121.0254,29.6686;121.0583,29.6851;121.0803,29.6631;121.0693,29.6356;121.1023,29.6246;121.1023,29.5917;121.1023,29.5807;121.1133,29.5532;121.1353,29.5532;121.1462,29.5422;121.2231,29.5313;121.2341,29.5148;121.2122,29.4598;121.2231,29.4489;121.2122,29.4379;121.2122,29.4159;121.2341,29.4104;121.2341,29.3665;121.1902,29.339;121.2012,29.328;121.1682,29.3225;121.1572,29.339;121.1462,29.3335;121.1243,29.339;121.1133,29.3335;121.1243,29.3115;121.1133,29.3005;121.0913,29.3115;121.1023,29.317;121.0583,29.3225;121.0254,29.306;121.0034,29.3225;120.9924,29.3115;120.9705,29.306;120.9595,29.2841;120.9155,29.306;120.9045,29.295;120.9045,29.2786;120.8936,29.2676;120.9045,29.2401;120.8826,29.2401;120.8496,29.2511;120.8276,29.2346;120.8057,29.2346;120.7727,29.2236;120.7727,29.2511;120.7727,29.2731;120.7617,29.2841;120.7727,29.306;120.7507,29.317;120.7068,29.3005;120.6958,29.317;120.7068,29.3335;120.7068,29.3445;120.6738,29.328;120.6519,29.3335;120.6409,29.328;120.6079,29.3335;120.5859,29.35;120.575,29.339;120.575,29.361;120.553,29.3719;120.553,29.3884;120.52,29.4049;120.509,29.4214;120.509,29.4434;120.498,29.4598;120.498,29.4708;120.4761,29.4873;120.4321,29.4818;120.4102,29.4543;120.3882,29.4543;120.3662,29.4434;120.3772,29.4159;120.3333,29.4049;120.3223,29.3829;120.3113,29.3774;120.3003,29.3555;120.3003,29.35;120.2673,29.3665;120.2673,29.3884;120.2783,29.4379;120.2563,29.4598;120.2673,29.4928;120.2124,29.5258;120.2014,29.5477;120.1904,29.5422;120.1685,29.5148;120.1355,29.5093;120.1245,29.4928;120.0806,29.5093;120.0916,29.5203;120.0806,29.5367;120.0476,29.5477;120.0586,29.5587;120.0366,29.5752;120.0037,29.5752;120.0146,29.6027;120.0476,29.6301;120.0256,29.6411;120.0366,29.6521;120.0366,29.6686;120.0256,29.6686;120.0256,29.6521;120.0146,29.6521;119.9927,29.6576;119.9707,29.6741;119.9707,29.696;119.9377,29.707;119.9268,29.7015;119.9377,29.696;119.9158,29.7015;119.9158,29.718;119.9048,29.729;119.9048,29.7455;119.8938,29.7565;119.8938,29.762;119.9268,29.7455;119.9707,29.7675;119.9927,29.7565;120.0037,29.7565;120.0256,29.7729;120.0366,29.7894;120.0256,29.8114;120.0366,29.8224;120.0806,29.8279;120.0916,29.8169;120.1135,29.8444",
            "child": null,
            "data": {
              "value": ".8049",
              "valueType": "2",
              "growthRate": null,
              "growthRateType": null,
              "rank": null
            }
          }
        ],
        "data": null
      }
    }
  });
}


if(mockConst.isStatic.contract.manage.getArea) {
  Mock.mock(mockConst.getRegExpUrl(api.url.contract.manage.getArea), 'post', {"status":0,"msg":null,"obj":{"pid":"","list":[{"cityId":"570","sumConut":1184,"contractedCount":1,"progress":0.000844594594594594594594594594594594594595,"progressPresent":"0.08%","location":"118.463096,28.242049;118.46827,28.245104;118.476032,28.243831;118.479481,28.246631;118.490692,28.23823;118.496441,28.245104;118.502478,28.246376;118.503053,28.249177;118.50449,28.252995;118.501041,28.254268;118.501041,28.257577;118.493567,28.263686;118.496729,28.276157;118.501184,28.277429;118.504346,28.279847;118.514551,28.269539;118.519869,28.269285;118.531511,28.271067;118.545884,28.27463;118.547321,28.286463;118.556232,28.282519;118.568593,28.285318;118.57463,28.284046;118.585266,28.284427;118.597483,28.272594;118.598058,28.269794;118.595327,28.264067;118.59547,28.25694;118.601363,28.254268;118.607112,28.25694;118.621342,28.25605;118.62666,28.260631;118.630253,28.26114;118.633127,28.261522;118.640601,28.273739;118.647069,28.273866;118.652243,28.277684;118.660723,28.271576;118.668054,28.269539;118.674953,28.27183;118.682139,28.27921;118.690619,28.291552;118.693637,28.301857;118.70068,28.311398;118.695649,28.318013;118.695506,28.320811;118.700393,28.315341;118.701974,28.322973;118.701542,28.326916;118.708729,28.334038;118.712609,28.333021;118.71764,28.338744;118.723389,28.337472;118.728276,28.346119;118.732157,28.345738;118.732588,28.350061;118.738193,28.356165;118.742505,28.364048;118.739774,28.367989;118.737906,28.370532;118.741355,28.373964;118.74308,28.378287;118.746817,28.382736;118.747392,28.387566;118.751273,28.39354;118.756878,28.396845;118.756878,28.402183;118.754435,28.401929;118.755441,28.407902;118.749117,28.409173;118.755297,28.41629;118.747392,28.417179;118.744374,28.415527;118.740205,28.415527;118.737331,28.415146;118.733738,28.416544;118.733306,28.413875;118.729857,28.411334;118.723245,28.412223;118.721952,28.414129;118.724683,28.424168;118.728995,28.429124;118.724683,28.431411;118.723533,28.432809;118.728563,28.440813;118.731151,28.45682;118.72497,28.460758;118.72497,28.470411;118.729282,28.479809;118.727701,28.486286;118.724683,28.488445;118.723102,28.489207;118.723102,28.493017;118.726551,28.499874;118.731151,28.499493;118.734456,28.505334;118.74308,28.509269;118.751129,28.524504;118.756159,28.524631;118.759896,28.522727;118.765071,28.524123;118.767945,28.521711;118.77082,28.520569;118.773838,28.518411;118.777,28.517903;118.7793,28.522981;118.780162,28.525901;118.786055,28.530851;118.788498,28.530217;118.792092,28.532628;118.792954,28.534152;118.798272,28.535548;118.805602,28.533136;118.81207,28.539229;118.812357,28.542402;118.818538,28.545067;118.822418,28.548367;118.83406,28.543798;118.838229,28.53961;118.845415,28.541641;118.852026,28.53999;118.854757,28.526535;118.857057,28.529582;118.864818,28.529582;118.866256,28.527678;118.866112,28.518791;118.868555,28.513078;118.874879,28.517649;118.877323,28.520442;118.88221,28.530217;118.890115,28.534025;118.890115,28.539102;118.892702,28.541514;118.900463,28.544179;118.904919,28.551286;118.906643,28.556997;118.913255,28.562074;118.915123,28.568545;118.911099,28.572986;118.906931,28.574255;118.910812,28.577935;118.909662,28.582376;118.910093,28.587577;118.909806,28.592018;118.911961,28.594048;118.910237,28.597473;118.918286,28.599503;118.917136,28.610031;118.915842,28.612821;118.925328,28.621573;118.927484,28.626392;118.924897,28.631719;118.930934,28.641229;118.942288,28.646428;118.946313,28.643892;118.95508,28.64795;118.959105,28.645667;118.961979,28.642624;118.972615,28.654163;118.980233,28.662784;118.984832,28.663798;118.992018,28.677109;119.001073,28.682813;119.003229,28.687629;119.008547,28.691939;119.014296,28.694093;119.017315,28.700937;119.024645,28.70664;119.029244,28.709428;119.037149,28.709428;119.045342,28.713736;119.046923,28.721339;119.051953,28.72438;119.053678,28.728941;119.058852,28.728814;119.064027,28.732868;119.076962,28.736036;119.081993,28.742116;119.088461,28.735782;119.094353,28.739963;119.099384,28.74807;119.103552,28.743383;119.114907,28.74085;119.119937,28.738316;119.123243,28.739583;119.128273,28.737429;119.142934,28.740089;119.151845,28.74313;119.159894,28.74731;119.162625,28.748957;119.166074,28.747564;119.166793,28.75377;119.170386,28.749844;119.172254,28.751237;119.17053,28.753137;119.173404,28.754784;119.176135,28.75453;119.176423,28.763523;119.182603,28.765043;119.186915,28.770869;119.188927,28.775935;119.195251,28.778341;119.205743,28.775048;119.204019,28.770869;119.204019,28.767956;119.208618,28.768336;119.212067,28.772262;119.217385,28.772262;119.222991,28.766183;119.232908,28.764916;119.23722,28.762003;119.244694,28.76175;119.250587,28.765296;119.251018,28.769096;119.257198,28.779354;119.261798,28.780494;119.266397,28.788345;119.261654,28.787965;119.265966,28.79075;119.267403,28.794676;119.273583,28.792776;119.276602,28.796828;119.27344,28.802779;119.270709,28.804045;119.267259,28.800373;119.267116,28.804678;119.272433,28.807463;119.277751,28.803791;119.283069,28.806577;119.292412,28.806703;119.301323,28.803791;119.306353,28.808223;119.311815,28.812907;119.318858,28.811514;119.32202,28.805184;119.327194,28.806577;119.332225,28.807969;119.331075,28.811894;119.335674,28.813033;119.340274,28.818983;119.345448,28.827717;119.33783,28.835185;119.335818,28.839868;119.337399,28.842652;119.331506,28.846069;119.311097,28.843158;119.31469,28.86505;119.323313,28.865303;119.326188,28.867201;119.333806,28.865303;119.337111,28.873654;119.336824,28.879094;119.34516,28.890732;119.34631,28.898828;119.340848,28.905279;119.332656,28.907682;119.330931,28.914258;119.324607,28.920961;119.326907,28.92387;119.327625,28.930825;119.327338,28.936135;119.320726,28.937273;119.321158,28.939928;119.316558,28.941825;119.314977,28.945871;119.316989,28.947388;119.313252,28.954215;119.31857,28.96319;119.322739,28.966983;119.328344,28.965213;119.322739,28.971027;119.328488,28.986447;119.322164,28.989733;119.326044,28.995167;119.320151,29.000095;119.321445,29.009825;119.328775,29.024101;119.324176,29.030797;119.326619,29.039639;119.33165,29.030544;119.3328,29.041155;119.333231,29.046712;119.325326,29.057953;119.328631,29.068182;119.335962,29.071087;119.334381,29.078537;119.329063,29.08485;119.325901,29.093561;119.320439,29.09192;119.314977,29.085355;119.307072,29.084092;119.308222,29.087627;119.302042,29.089521;119.299167,29.094697;119.30161,29.098863;119.293562,29.102777;119.287094,29.109341;119.287669,29.11338;119.278326,29.117419;119.270852,29.117672;119.267978,29.125371;119.26999,29.128147;119.265966,29.134962;119.256048,29.136729;119.252743,29.13471;119.249293,29.143038;119.25188,29.147455;119.251737,29.153259;119.246562,29.156918;119.244119,29.165497;119.241388,29.171048;119.24455,29.172057;119.245412,29.183284;119.241963,29.190095;119.236358,29.193248;119.231327,29.18959;119.221841,29.193879;119.234777,29.198797;119.237076,29.204599;119.233052,29.211408;119.236358,29.216326;119.233627,29.223135;119.243975,29.228052;119.252455,29.235743;119.259498,29.247719;119.248,29.251753;119.2457,29.255156;119.24455,29.251501;119.23837,29.251248;119.23377,29.251753;119.237651,29.258685;119.231614,29.266752;119.234202,29.268768;119.232333,29.272045;119.229602,29.271415;119.228596,29.275322;119.230465,29.279228;119.230321,29.289687;119.221266,29.294097;119.209768,29.295483;119.210199,29.289561;119.200569,29.289561;119.196257,29.274691;119.192376,29.270785;119.190221,29.272171;119.186915,29.269146;119.189789,29.261836;119.196401,29.254778;119.201144,29.258181;119.206893,29.252131;119.208905,29.247341;119.215086,29.247593;119.21178,29.243307;119.216379,29.236373;119.210199,29.235365;119.211205,29.231961;119.210055,29.227548;119.214942,29.225531;119.213361,29.223009;119.209911,29.222631;119.203012,29.225783;119.201288,29.229817;119.191227,29.227422;119.190364,29.222378;119.194964,29.217209;119.18749,29.203716;119.183178,29.206616;119.179441,29.203716;119.175848,29.206868;119.174554,29.214182;119.168949,29.21847;119.161044,29.213552;119.159031,29.220235;119.15127,29.22717;119.140347,29.222378;119.136753,29.219857;119.128992,29.225909;119.128848,29.229943;119.131579,29.233726;119.127411,29.237382;119.109014,29.229943;119.109014,29.226413;119.092341,29.231078;119.076962,29.223387;119.062733,29.227548;119.053966,29.221622;119.045198,29.221622;119.036143,29.219226;119.027807,29.220361;119.024789,29.214182;119.004235,29.208886;118.988856,29.222757;118.984113,29.237886;118.987563,29.245324;118.982532,29.25982;118.969022,29.264105;118.965141,29.267886;118.960254,29.266878;118.958386,29.273053;118.954936,29.282252;118.964854,29.294097;118.961692,29.297373;118.956949,29.296869;118.954649,29.299011;118.948181,29.300775;118.943438,29.307452;118.932802,29.310224;118.926909,29.310476;118.922454,29.316144;118.912249,29.323576;118.902763,29.331764;118.893852,29.330504;118.890402,29.324332;118.884653,29.323198;118.877898,29.326347;118.87143,29.324206;118.860506,29.315263;118.854901,29.303672;118.85217,29.299011;118.84254,29.298255;118.837797,29.292459;118.828742,29.287923;118.827018,29.281118;118.822562,29.279102;118.816238,29.281748;118.794104,29.268138;118.78663,29.266626;118.78045,29.255156;118.773982,29.251122;118.76737,29.252383;118.762915,29.248727;118.761334,29.240155;118.76737,29.235365;118.765358,29.219983;118.754578,29.213678;118.742793,29.214056;118.732444,29.207499;118.729857,29.19905;118.720658,29.198293;118.71764,29.192113;118.711747,29.186437;118.699386,29.193374;118.687457,29.201698;118.627953,29.192996;118.626516,29.197788;118.63284,29.203968;118.631259,29.218848;118.620767,29.218091;118.60625,29.239903;118.614874,29.246963;118.606106,29.268138;118.609412,29.272297;118.612143,29.280362;118.623354,29.266626;118.629534,29.2665;118.636433,29.261584;118.63399,29.272801;118.627235,29.284773;118.614155,29.297751;118.616024,29.306066;118.603088,29.315263;118.602801,29.325466;118.593602,29.330126;118.587278,29.328489;118.587997,29.331638;118.583397,29.334157;118.581241,29.331764;118.572618,29.339068;118.557382,29.341084;118.542722,29.337305;118.540853,29.342973;118.534242,29.341209;118.52763,29.348514;118.523462,29.353677;118.526193,29.36098;118.519007,29.36652;118.501184,29.362491;118.493854,29.361106;118.486093,29.368787;118.473732,29.362617;118.462952,29.358839;118.456197,29.36715;118.456341,29.37206;118.440674,29.375459;118.425439,29.385279;118.418396,29.393587;118.415666,29.40416;118.406467,29.406803;118.41466,29.41901;118.398131,29.424925;118.390082,29.423289;118.384045,29.433859;118.376715,29.43411;118.370535,29.445937;118.354293,29.45185;118.345382,29.462039;118.343657,29.479396;118.336471,29.484427;118.329428,29.495745;118.309737,29.495493;118.306719,29.490086;118.316493,29.422785;118.295365,29.419388;118.287459,29.426686;118.279267,29.424925;118.272799,29.427945;118.248796,29.431719;118.216889,29.420143;118.20654,29.400132;118.202228,29.393335;118.193461,29.395223;118.194179,29.387796;118.208552,29.376215;118.204097,29.368031;118.208265,29.352166;118.204384,29.34335;118.193604,29.340328;118.183256,29.332267;118.180238,29.322065;118.166727,29.314633;118.175207,29.306822;118.177651,29.298255;118.169171,29.298129;118.152211,29.286285;118.145168,29.287545;118.137263,29.283891;118.123034,29.288175;118.116566,29.293593;118.105642,29.285151;118.073303,29.289813;118.07934,29.265869;118.075747,29.246332;118.082502,29.233726;118.072154,29.216578;118.051025,29.217209;118.042833,29.211156;118.028604,29.169786;118.028604,29.165875;118.043839,29.157296;118.038521,29.12739;118.053181,29.11439;118.043552,29.110098;118.037659,29.102146;118.03809,29.097727;118.048726,29.088006;118.076322,29.07437;118.077184,29.062121;118.065686,29.053028;118.072585,29.043934;118.07201,29.038881;118.086239,29.030544;118.09012,29.024733;118.090263,29.01829;118.091126,29.008308;118.097019,28.998831;118.105067,29.011341;118.109954,29.004518;118.100612,28.990365;118.109667,28.992007;118.11944,29.010709;118.128208,29.016521;118.131801,29.00755;118.126052,28.99542;118.130651,28.987837;118.146318,28.976589;118.15566,28.985941;118.165577,28.9867;118.17492,28.98038;118.187137,28.976336;118.199641,28.955606;118.210421,28.954341;118.212289,28.948652;118.2212,28.949032;118.227812,28.942584;118.207115,28.920835;118.197916,28.916914;118.192742,28.909326;118.195186,28.904393;118.199066,28.903381;118.243766,28.920076;118.250521,28.920202;118.257276,28.923617;118.271074,28.917547;118.276105,28.896804;118.282716,28.888329;118.289184,28.864038;118.303845,28.840627;118.295508,28.834678;118.300108,28.826451;118.330434,28.815438;118.357743,28.814806;118.368091,28.811261;118.373697,28.803538;118.374415,28.795182;118.382895,28.787838;118.379446,28.784672;118.379877,28.775048;118.383327,28.774542;118.385914,28.75491;118.388932,28.755924;118.393963,28.754024;118.393388,28.753137;118.393531,28.747817;118.387638,28.745917;118.392669,28.74351;118.391663,28.739203;118.400574,28.734769;118.393819,28.734009;118.393244,28.729954;118.401436,28.713863;118.393244,28.710695;118.390513,28.704866;118.393675,28.699543;118.402586,28.702331;118.406898,28.697895;118.411785,28.697642;118.419834,28.691178;118.416528,28.683066;118.43047,28.679897;118.431188,28.653275;118.422852,28.646682;118.425727,28.634762;118.433201,28.626265;118.431045,28.618529;118.420984,28.608255;118.41351,28.609524;118.413797,28.596331;118.421702,28.596712;118.423571,28.586055;118.416097,28.583137;118.417534,28.572986;118.410923,28.57324;118.414516,28.559028;118.42817,28.547225;118.42084,28.545194;118.425152,28.534025;118.42702,28.524123;118.43047,28.515745;118.437656,28.522346;118.445992,28.513078;118.438662,28.506095;118.414372,28.498477;118.424433,28.492636;118.43665,28.493525;118.454041,28.477269;118.471289,28.481333;118.482356,28.469268;118.472582,28.464568;118.465396,28.458725;118.469995,28.45212;118.463671,28.453771;118.465971,28.448436;118.45131,28.418196;118.456772,28.416036;118.439093,28.411207;118.431476,28.398625;118.438375,28.400023;118.439812,28.39354;118.45591,28.383753;118.463527,28.359979;118.474594,28.331113;118.472295,28.327934;118.482356,28.31903;118.472582,28.316868;118.46209,28.302621;118.439237,28.291552;118.433344,28.28799;118.430326,28.279465;118.434494,28.26903;118.440674,28.266485;118.439093,28.26114;118.449442,28.25974;118.444268,28.253377;118.448867,28.24994","name":"衢州市","gridId":"25","txyh":1501735,"kdyh":381631,"kdszl":"0.3118","kdfg":853310,"kdszyh":266070,"channelCounts":null,"centralPoint":"118.67947471265677,28.931765959390134"},{"cityId":"571","sumConut":393,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"120.693514,30.255543;120.678896,30.239005;120.652349,30.222104;120.622715,30.17265;120.618588,30.157061;120.610352,30.156607;120.612427,30.154301;120.609296,30.151815;120.602388,30.154737;120.600234,30.15212;120.59468,30.153122;120.593811,30.156868;120.587185,30.157724;120.57853,30.157795;120.568957,30.152737;120.565795,30.16123;120.543566,30.164753;120.534485,30.160469;120.525358,30.160316;120.505798,30.175025;120.510999,30.178345;120.503217,30.175456;120.494438,30.179016;120.488817,30.174938;120.471087,30.174954;120.471351,30.159847;120.466989,30.156303;120.458221,30.15579;120.454541,30.138076;120.450163,30.136545;120.447591,30.138412;120.433699,30.134265;120.435436,30.149009;120.431541,30.149942;120.429133,30.157811;120.426519,30.153558;120.419744,30.154097;120.419917,30.139298;120.413459,30.134411;120.413856,30.141455;120.406398,30.141439;120.406876,30.1474;120.393827,30.162434;120.371241,30.158026;120.367152,30.152255;120.361446,30.15681;120.36291,30.147546;120.347691,30.146868;120.347796,30.142044;120.336424,30.129315;120.326294,30.129248;120.321069,30.141994;120.309123,30.135092;120.305907,30.130958;120.312178,30.129327;120.30876,30.122452;120.295403,30.111386;120.296044,30.103886;120.309115,30.101685;120.321281,30.108591;120.34464,30.09612;120.343066,30.078423;120.348108,30.071311;120.349127,30.060002;120.341986,30.053658;120.335651,30.053777;120.334417,30.047843;120.341242,30.0393;120.344779,30.037809;120.353962,30.033848;120.355607,30.022107;120.367948,30.013965;120.367109,30.009796;120.375338,29.998248;120.372452,29.990447;120.376046,29.977861;120.355405,29.976168;120.352666,29.959177;120.338447,29.949659;120.336808,29.941194;120.32622,29.929181;120.312805,29.931895;120.303035,29.938708;120.295495,29.923861;120.284618,29.92161;120.274267,29.925063;120.275485,29.934212;120.266079,29.945094;120.25991,29.937984;120.254043,29.938601;120.253723,29.942727;120.24216,29.943928;120.220803,29.941358;120.222974,29.935975;120.230999,29.935042;120.230464,29.930912;120.219149,29.935421;120.2103,29.933921;120.207701,29.930988;120.209527,29.923998;120.202021,29.922543;120.198789,29.91814;120.193459,29.918536;120.192653,29.912068;120.174801,29.91863;120.167315,29.906806;120.158304,29.907418;120.156811,29.883617;120.150802,29.872473;120.131836,29.853766;120.124371,29.852905;120.115406,29.844024;120.112037,29.848175;120.107195,29.838957;120.10936,29.830482;120.10167,29.82384;120.084136,29.834336;120.074973,29.830326;120.069439,29.826754;120.04443,29.829323;120.037064,29.813217;120.042418,29.795009;120.036022,29.788396;120.036166,29.775983;120.018308,29.769086;120.017194,29.763913;120.015325,29.763286;119.997898,29.759649;119.986723,29.76454;119.983885,29.772691;119.980651,29.772628;119.98119,29.772189;119.968434,29.761091;119.951366,29.761405;119.933256,29.749897;119.919458,29.762;119.912344,29.760182;119.898123,29.770144;119.895808,29.77069;119.894982,29.762586;119.893823,29.758228;119.901198,29.753619;119.904917,29.751306;119.906651,29.735243;119.916415,29.728375;119.918841,29.711186;119.924895,29.705273;119.936528,29.701744;119.939593,29.703861;119.935477,29.710276;119.943131,29.713194;119.957066,29.70414;119.973718,29.700598;119.978737,29.696024;119.979052,29.678222;119.976018,29.677067;119.965103,29.678235;119.951036,29.672909;119.945583,29.672148;119.931154,29.675408;119.92749,29.669584;119.917892,29.672223;119.914769,29.668862;119.901846,29.66665;119.889462,29.669253;119.881921,29.675089;119.865697,29.677263;119.858735,29.674666;119.84694,29.680455;119.843679,29.682087;119.842485,29.68273;119.841586,29.687782;119.830744,29.677294;119.821868,29.677929;119.821428,29.677106;119.817305,29.67181;119.810765,29.66788;119.797318,29.660716;119.782765,29.632914;119.785766,29.609884;119.78016,29.604844;119.771483,29.602583;119.771033,29.591961;119.77527,29.585609;119.767721,29.572628;119.770285,29.563432;119.755181,29.556126;119.745596,29.557422;119.729024,29.548137;119.752146,29.524126;119.741461,29.516497;119.733048,29.517234;119.733095,29.513508;119.725042,29.510823;119.725135,29.49363;119.71889,29.489271;119.713013,29.477773;119.714462,29.466712;119.72205,29.454506;119.715888,29.439611;119.706778,29.438401;119.697425,29.444207;119.695154,29.427205;119.685192,29.423362;119.679583,29.430708;119.657273,29.43313;119.650554,29.440194;119.631439,29.425312;119.631641,29.416482;119.618306,29.400539;119.611716,29.398387;119.612408,29.393745;119.624675,29.38435;119.625468,29.376962;119.622392,29.374113;119.610747,29.375261;119.595674,29.384118;119.586018,29.384243;119.580821,29.378151;119.564711,29.377746;119.557609,29.373045;119.540344,29.378769;119.532025,29.37368;119.531132,29.361247;119.518173,29.342797;119.506157,29.341635;119.498484,29.336845;119.485001,29.33915;119.48223,29.350711;119.467668,29.356297;119.461056,29.370675;119.463811,29.375754;119.457578,29.402711;119.447861,29.41223;119.444883,29.429231;119.433946,29.427957;119.438516,29.42086;119.432889,29.411355;119.411951,29.40606;119.407469,29.416215;119.399611,29.417341;119.394639,29.435762;119.389772,29.436734;119.386628,29.436977;119.374493,29.421413;119.366456,29.421856;119.3618,29.416286;119.352633,29.414133;119.34333,29.416535;119.334086,29.402237;119.346388,29.387738;119.339038,29.359155;119.354682,29.341668;119.35047,29.32898;119.355143,29.324849;119.329429,29.312366;119.335252,29.299834;119.332004,29.29773;119.32884,29.301705;119.32893,29.290457;119.318707,29.284502;119.294184,29.287067;119.294151,29.274907;119.288111,29.267363;119.27671,29.257702;119.265104,29.253256;119.243963,29.256236;119.245478,29.264466;119.240221,29.276161;119.233778,29.280988;119.234973,29.289599;119.214396,29.289862;119.206383,29.295968;119.207185,29.281368;119.21117,29.279064;119.203961,29.275529;119.19791,29.265786;119.200073,29.262531;119.207089,29.263023;119.221011,29.252331;119.217481,29.249844;119.216498,29.236091;119.219894,29.230613;119.212831,29.227827;119.208839,29.234825;119.196983,29.234209;119.195935,29.229471;119.201303,29.223678;119.19567,29.210958;119.183823,29.213207;119.176559,29.223631;119.157832,29.233957;119.144246,29.226127;119.137684,29.226879;119.135272,29.232797;119.138716,29.241225;119.1326,29.242788;119.112623,29.232912;119.091408,29.23609;119.083926,29.229838;119.069061,29.232148;119.00944,29.213314;119.005104,29.221893;118.993377,29.231468;118.991063,29.244864;118.994458,29.248964;118.985467,29.264336;118.973036,29.274819;118.968436,29.273776;118.955784,29.287505;118.95743,29.292009;118.968098,29.295756;118.96928,29.30062;118.956173,29.305456;118.948918,29.31274;118.933147,29.316459;118.906551,29.338593;118.895017,29.328741;118.884568,29.332102;118.875739,29.327805;118.866926,29.320368;118.85984,29.306576;118.834909,29.293233;118.832696,29.286101;118.81847,29.286837;118.799687,29.274028;118.792453,29.272746;118.790844,29.265093;118.783066,29.257437;118.771159,29.25561;118.770454,29.252931;118.768593,29.245915;118.773423,29.239819;118.771585,29.226248;118.759258,29.219323;118.746403,29.217095;118.737222,29.20592;118.729551,29.204433;118.721628,29.195529;118.714998,29.194537;118.690698,29.208628;118.635131,29.197781;118.633342,29.202519;118.639891,29.211095;118.638712,29.22376;118.626355,29.224669;118.613595,29.244433;118.621672,29.256154;118.612871,29.273977;118.619319,29.285073;118.627379,29.283471;118.641104,29.267336;118.642586,29.27258;118.637714,29.2834;118.620628,29.301996;118.623487,29.308534;118.609713,29.321977;118.607159,29.333359;118.602218,29.336468;118.594149,29.333669;118.592522,29.338011;118.585979,29.338089;118.577748,29.344369;118.55518,29.342033;118.548469,29.342918;118.546091,29.348952;118.525289,29.349937;118.530846,29.365297;118.526737,29.368605;118.511486,29.363944;118.499374,29.367893;118.493627,29.372616;118.485359,29.372115;118.476288,29.365821;118.469749,29.366605;118.463247,29.372521;118.463768,29.379052;118.454066,29.381916;118.446538,29.384088;118.43044,29.394661;118.428716,29.405266;118.412636,29.413824;118.418385,29.425385;118.409752,29.430914;118.395389,29.428909;118.389064,29.437952;118.379255,29.440013;118.371844,29.454567;118.357489,29.460063;118.352225,29.476343;118.351156,29.479755;118.364325,29.482254;118.390547,29.512975;118.400203,29.513368;118.419742,29.515631;118.436031,29.509517;118.455521,29.518405;118.46905,29.513871;118.498361,29.521917;118.50526,29.549311;118.498523,29.559758;118.506844,29.581045;118.541359,29.596457;118.555957,29.619445;118.561123,29.619493;118.573176,29.632691;118.576837,29.642663;118.608253,29.649218;118.626247,29.659511;118.639716,29.654256;118.647143,29.647506;118.653476,29.649082;118.678369,29.673088;118.681162,29.68172;118.688443,29.687154;118.68899,29.694432;118.697738,29.699974;118.698959,29.70518;118.706915,29.712386;118.725475,29.715329;118.733129,29.731295;118.750592,29.744284;118.754899,29.755831;118.75375,29.772754;118.753278,29.77963;118.742782,29.793859;118.747084,29.820315;118.752263,29.823581;118.765648,29.822722;118.77276,29.828768;118.766325,29.834482;118.757554,29.835331;118.760826,29.850216;118.772209,29.854026;118.784854,29.847801;118.790088,29.849486;118.813776,29.873726;118.847556,29.896866;118.851759,29.9046;118.851273,29.91853;118.844685,29.945056;118.85339,29.948076;118.87026,29.942287;118.880321,29.952129;118.890813,29.94461;118.900883,29.943914;118.898004,29.968707;118.905569,29.987355;118.898027,29.99891;118.901202,30.007016;118.896016,30.016329;118.897878,30.018931;118.904157,30.023114;118.906098,30.022676;118.908686,30.035016;118.901747,30.038292;118.896751,30.047016;118.90348,30.057732;118.894278,30.068068;118.885016,30.070192;118.883415,30.076203;118.876849,30.100945;118.874773,30.108758;118.880102,30.120526;118.894193,30.124394;118.894364,30.133511;118.901154,30.141714;118.902942,30.153938;118.887245,30.152385;118.871981,30.156899;118.862669,30.153612;118.851926,30.161627;118.859095,30.171966;118.908896,30.189184;118.918215,30.194557;118.925145,30.203987;118.935703,30.208697;118.931001,30.21995;118.909273,30.223886;118.899202,30.248461;118.88798,30.254333;118.88855,30.257948;118.895862,30.260009;118.884299,30.288259;118.883717,30.296339;118.887997,30.304103;118.88539,30.317729;118.886064,30.320429;118.905876,30.328494;118.915991,30.337814;118.928647,30.340842;118.941383,30.349414;118.942533,30.356803;118.955918,30.364531;118.961595,30.364835;118.965554,30.352862;118.973338,30.356882;118.980523,30.352632;118.993417,30.354718;118.994588,30.338256;119.013296,30.333394;119.030816,30.319635;119.053727,30.319134;119.057632,30.311966;119.062842,30.309845;119.069112,30.310838;119.079562,30.321554;119.096463,30.329448;119.131844,30.311031;119.157335,30.310657;119.164437,30.304524;119.171245,30.305513;119.176607,30.301388;119.194361,30.297435;119.207263,30.296573;119.211912,30.307049;119.21915,30.304647;119.225586,30.306483;119.228239,30.302603;119.233782,30.294425;119.240779,30.300069;119.244157,30.307568;119.24925,30.318917;119.252022,30.328136;119.246169,30.332563;119.254147,30.346953;119.267314,30.343179;119.277539,30.348572;119.284194,30.347676;119.295522,30.355705;119.306771,30.369599;119.332789,30.377244;119.348896,30.368542;119.355665,30.354574;119.381746,30.360648;119.392245,30.369917;119.406051,30.373908;119.409128,30.379427;119.42427,30.382064;119.436686,30.389802;119.44079,30.396605;119.446425,30.396824;119.457091,30.417147;119.474042,30.414967;119.504872,30.41098;119.522982,30.408644;119.541846,30.417653;119.541712,30.421156;119.541382,30.430052;119.557889,30.445482;119.572129,30.448851;119.585958,30.430125;119.597901,30.427089;119.611421,30.432635;119.624129,30.433198;119.641546,30.447366;119.648332,30.446324;119.649535,30.442666;119.651734,30.435932;119.637067,30.431051;119.641973,30.412344;119.63848,30.405839;119.648942,30.402321;119.673592,30.404907;119.687857,30.415387;119.682198,30.418034;119.695323,30.436575;119.707414,30.439388;119.704733,30.456552;119.69969,30.45616;119.699128,30.460148;119.693408,30.462249;119.69729,30.465862;119.696129,30.474559;119.702817,30.477003;119.708997,30.491459;119.710803,30.500446;119.705355,30.504886;119.71046,30.513656;119.709319,30.530292;119.69608,30.552438;119.691793,30.568026;119.69432,30.57099;119.707649,30.569621;119.720798,30.574698;119.72228,30.570104;119.722954,30.568013;119.724169,30.564228;119.734705,30.564341;119.741216,30.559866;119.743556,30.563338;119.756622,30.564336;119.768103,30.569591;119.772282,30.559372;119.767298,30.548303;119.7722,30.538358;119.762534,30.531589;119.762557,30.528379;119.786556,30.522629;119.791433,30.516697;119.803478,30.516232;119.822137,30.521878;119.836567,30.507938;119.846822,30.508266;119.854014,30.512608;119.859548,30.501093;119.868076,30.494065;119.865749,30.489945;119.876433,30.489407;119.882693,30.485567;119.874881,30.481876;119.876458,30.471887;119.888523,30.471107;119.895069,30.465806;119.904184,30.471162;119.913718,30.466682;119.918613,30.471551;119.927519,30.473436;119.925693,30.466824;119.931958,30.469722;119.935957,30.468071;119.933708,30.461964;119.938927,30.455566;119.94444,30.454958;119.951927,30.461617;119.95602,30.456614;119.956275,30.445159;119.967379,30.439924;119.975202,30.443143;119.976677,30.448792;119.986156,30.456863;119.99188,30.456979;120.001042,30.457158;120.004428,30.457232;120.012289,30.448706;120.042526,30.445678;120.041538,30.441957;120.039978,30.436087;120.068574,30.440508;120.066072,30.446342;120.072011,30.455921;120.06294,30.469699;120.062673,30.485176;120.068295,30.494082;120.07149,30.510229;120.077254,30.507794;120.080026,30.510807;120.099361,30.510101;120.102023,30.508074;120.098559,30.502305;120.099959,30.497071;120.116005,30.48752;120.149592,30.496769;120.15053,30.484227;120.154083,30.480003;120.18297,30.49109;120.176758,30.497224;120.179237,30.498679;120.184665,30.494268;120.186965,30.496261;120.180517,30.499705;120.184292,30.501677;120.17871,30.50631;120.184152,30.504755;120.190283,30.507194;120.185508,30.509288;120.185783,30.513147;120.193276,30.518156;120.197686,30.515677;120.2036,30.528568;120.206824,30.518599;120.214848,30.52512;120.233781,30.524847;120.232876,30.529169;120.245257,30.520228;120.276314,30.522461;120.280655,30.520249;120.285675,30.523737;120.291127,30.522622;120.291651,30.527223;120.304776,30.535241;120.318782,30.536462;120.32295,30.53682;120.32631,30.52587;120.32746,30.522106;120.33231,30.506472;120.333023,30.480128;120.343073,30.487068;120.346943,30.478266;120.342025,30.476525;120.346138,30.445309;120.34169,30.444814;120.341962,30.440556;120.336748,30.437435;120.338179,30.426732;120.329403,30.421195;120.327788,30.414359;120.312512,30.406666;120.312305,30.402765;120.316886,30.403801;120.320985,30.404732;120.325268,30.386886;120.331718,30.385141;120.33576,30.384051;120.34756,30.380866;120.350312,30.376029;120.350941,30.37634;120.351498,30.376652;120.355792,30.381956;120.406331,30.392213;120.407283,30.379347;120.39397,30.377166;120.386191,30.364141;120.423466,30.334947;120.43851,30.369203;120.453833,30.386917;120.471117,30.392026;120.513221,30.39723;120.657329,30.394462;120.672842,30.390934;120.682715,30.383426;120.706596,30.328574;120.730141,30.302066;120.693514,30.255543","name":"杭州市","gridId":"2","txyh":6929595,"kdyh":1652291,"kdszl":"0.218","kdfg":4647282,"kdszyh":1013271,"channelCounts":null,"centralPoint":"119.5406485,29.8846175"},{"cityId":"572","sumConut":838,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"119.255823,30.627376;119.261752,30.623896;119.261716,30.621907;119.264626,30.622404;119.274975,30.624393;119.283599,30.627376;119.288773,30.626382;119.289348,30.625885;119.293372,30.625388;119.303721,30.628371;119.311769,30.629365;119.317519,30.630857;119.320968,30.634337;119.326142,30.638812;119.334766,30.653228;119.347414,30.672612;119.355463,30.675594;119.360062,30.677582;119.361212,30.678575;119.365812,30.68106;119.369261,30.683048;119.37616,30.687023;119.380759,30.689508;119.388808,30.690501;119.393407,30.694476;119.397432,30.694476;119.401456,30.694476;119.401456,30.690004;119.402606,30.68752;119.404331,30.684042;119.405481,30.681557;119.406631,30.676091;119.40893,30.666151;119.412955,30.662175;119.41353,30.658199;119.418704,30.653725;119.420429,30.652234;119.424453,30.651737;119.429052,30.651737;119.435376,30.653228;119.4417,30.654222;119.444575,30.65621;119.448599,30.657701;119.449174,30.674103;119.449174,30.677085;119.456073,30.680066;119.464122,30.686526;119.465272,30.689011;119.469584,30.694228;119.472746,30.699196;119.475908,30.703171;119.47792,30.705903;119.483094,30.707145;119.485394,30.708139;119.486831,30.7141;119.487694,30.724532;119.485107,30.734465;119.484819,30.736452;119.484532,30.741915;119.485681,30.745639;119.488269,30.748619;119.489706,30.751102;119.488556,30.753088;119.487694,30.753585;119.485681,30.755074;119.483957,30.756812;119.483382,30.758798;119.483382,30.76277;119.484819,30.766742;119.485394,30.768728;119.485969,30.7727;119.485394,30.776175;119.485107,30.779898;119.486256,30.782629;119.491718,30.784118;119.496317,30.784366;119.500629,30.783621;119.504079,30.781636;119.505516,30.780147;119.506666,30.778409;119.508678,30.777168;119.511265,30.777416;119.513852,30.778657;119.518164,30.77965;119.522189,30.780395;119.524776,30.781388;119.52765,30.782132;119.530237,30.78387;119.531675,30.786352;119.533399,30.788833;119.535412,30.792556;119.538574,30.797023;119.540873,30.800497;119.540873,30.803723;119.541161,30.806453;119.542886,30.808686;119.546335,30.810175;119.547485,30.810919;119.549785,30.817122;119.552659,30.823573;119.554384,30.826302;119.555821,30.828287;119.558983,30.832256;119.56272,30.834737;119.565595,30.836225;119.569907,30.837465;119.572206,30.836473;119.575943,30.835977;119.577668,30.835729;119.580542,30.837217;119.581692,30.838209;119.581692,30.84069;119.580542,30.844907;119.57853,30.851108;119.57853,30.854084;119.578818,30.857804;119.578818,30.859044;119.574793,30.862516;119.573644,30.864252;119.573069,30.865244;119.572206,30.865988;119.568757,30.869955;119.565882,30.873923;119.564157,30.876155;119.563008,30.880618;119.563008,30.884833;119.56272,30.88756;119.56387,30.892022;119.564732,30.894006;119.56502,30.894997;119.563295,30.899212;119.562145,30.903178;119.562433,30.909871;119.563582,30.912597;119.568182,30.916563;119.567607,30.924246;119.568182,30.925485;119.571056,30.927963;119.575943,30.930442;119.580542,30.932672;119.585717,30.935398;119.586579,30.936389;119.584567,30.941593;119.584567,30.944071;119.584854,30.946796;119.584854,30.949026;119.586004,30.951256;119.587441,30.953238;119.587729,30.954724;119.587729,30.956954;119.587441,30.959432;119.586579,30.961661;119.586579,30.965873;119.585142,30.969836;119.586292,30.973304;119.588304,30.978753;119.591178,30.982716;119.592041,30.984202;119.593766,30.986184;119.597502,30.98866;119.598365,30.989651;119.602677,30.992128;119.603827,30.993861;119.607276,30.996338;119.611013,30.997823;119.616762,31.001043;119.617912,31.002528;119.61705,31.003767;119.61705,31.004757;119.619637,31.007481;119.623374,31.009709;119.631997,31.015404;119.634297,31.017385;119.634872,31.024317;119.637172,31.027783;119.638609,31.031249;119.641484,31.032486;119.640046,31.033229;119.636309,31.033724;119.63286,31.035457;119.63171,31.042388;119.631997,31.044616;119.633435,31.048328;119.637172,31.052288;119.639184,31.053773;119.635159,31.054021;119.633435,31.056248;119.631423,31.059465;119.631997,31.06392;119.633147,31.066394;119.636309,31.069859;119.635734,31.070849;119.635447,31.072333;119.63401,31.074065;119.63401,31.07654;119.634297,31.079261;119.634585,31.082478;119.63171,31.084457;119.630848,31.087179;119.63056,31.089405;119.631135,31.092127;119.633722,31.094848;119.637459,31.097074;119.637747,31.098806;119.639184,31.103753;119.642346,31.108206;119.644646,31.106969;119.647808,31.106969;119.651832,31.107464;119.654132,31.109195;119.654419,31.114637;119.651832,31.12082;119.648957,31.122551;119.644646,31.124777;119.642058,31.127992;119.636597,31.136647;119.635734,31.138872;119.639471,31.140603;119.642921,31.142086;119.643783,31.142581;119.642921,31.146537;119.643496,31.150246;119.645795,31.153954;119.64982,31.157168;119.651545,31.158899;119.654994,31.160876;119.656719,31.161618;119.661318,31.162607;119.66333,31.164337;119.667355,31.166315;119.66793,31.167551;119.667642,31.171259;119.670804,31.173236;119.686039,31.175708;119.687189,31.174225;119.689489,31.168787;119.695238,31.166068;119.700412,31.163348;119.702425,31.162854;119.704724,31.161371;119.706736,31.159887;119.709611,31.159146;119.710761,31.15964;119.711623,31.160382;119.712486,31.160876;119.71536,31.16582;119.71651,31.169034;119.717372,31.172;119.71996,31.175213;119.721397,31.176449;119.725709,31.176944;119.731458,31.177191;119.738069,31.179168;119.745831,31.180651;119.747268,31.180898;119.751292,31.178427;119.754454,31.176449;119.756179,31.177932;119.761928,31.178179;119.769977,31.180157;119.771414,31.181145;119.774289,31.182381;119.775151,31.182875;119.776876,31.183617;119.781763,31.184853;119.7855,31.186088;119.790387,31.184358;119.794124,31.182134;119.796711,31.180404;119.799585,31.178427;119.800735,31.175955;119.801598,31.174719;119.801885,31.172989;119.800448,31.171506;119.799298,31.168787;119.798435,31.167551;119.798723,31.165079;119.799585,31.164832;119.803035,31.165573;119.804185,31.166562;119.810796,31.168045;119.815395,31.168539;119.816545,31.169034;119.81712,31.172;119.81712,31.175461;119.81942,31.178427;119.825744,31.17991;119.83293,31.181145;119.83753,31.181392;119.838967,31.179415;119.842129,31.181145;119.846153,31.179662;119.848453,31.177191;119.85219,31.176202;119.856214,31.175461;119.858227,31.175461;119.860526,31.176696;119.864263,31.176944;119.868,31.176449;119.872312,31.175708;119.875762,31.174966;119.877486,31.17373;119.879786,31.171753;119.883236,31.170023;119.884385,31.169034;119.885535,31.168292;119.888122,31.169281;119.894446,31.171259;119.899621,31.173236;119.904507,31.175213;119.908532,31.176696;119.926929,31.176696;119.928366,31.176944;119.927217,31.17373;119.928366,31.169775;119.931528,31.164584;119.93469,31.161371;119.937852,31.158404;119.94044,31.156179;119.942739,31.154696;119.945039,31.152718;119.946764,31.150493;119.948201,31.148268;119.948776,31.145548;119.948776,31.143323;119.948776,31.142086;119.948201,31.138625;119.948488,31.136647;119.949063,31.134174;119.949926,31.130959;119.951076,31.124529;119.9528,31.120325;119.954525,31.117852;119.955675,31.113647;119.956825,31.110432;119.958549,31.106969;119.959987,31.10499;119.965448,31.098064;119.968036,31.095343;119.97206,31.088663;119.974072,31.086436;119.977234,31.082725;119.978097,31.079509;119.979821,31.077035;119.982983,31.074313;119.985858,31.072333;119.98787,31.070849;119.989595,31.070106;119.993619,31.066147;119.994769,31.061693;119.995631,31.05897;119.997069,31.054763;119.999081,31.050308;120.001093,31.046596;120.002818,31.043625;120.002243,31.04115;120.003393,31.039665;120.00828,31.035705;120.012304,31.032239;120.020065,31.027783;120.022653,31.026545;120.028977,31.022832;120.034726,31.019861;120.039325,31.018375;120.045074,31.016395;120.048524,31.016147;120.053985,31.013919;120.05801,31.012681;120.061172,31.010947;120.063759,31.009214;120.067208,31.005995;120.070083,31.003519;120.072095,31.00129;120.074107,30.999309;120.076695,30.997823;120.078994,30.995347;120.080719,30.994109;120.086181,30.991137;120.092505,30.987174;120.096242,30.983707;120.101416,30.980239;120.10544,30.975038;120.109177,30.971818;120.116364,30.966368;120.122688,30.961413;120.131024,30.955963;120.134761,30.953733;120.13936,30.950513;120.142235,30.949274;120.152871,30.947044;120.158045,30.946053;120.167244,30.944566;120.176442,30.942832;120.184204,30.942088;120.190528,30.940849;120.198289,30.938867;120.205188,30.938124;120.205476,30.937628;120.21065,30.938124;120.227035,30.937132;120.233072,30.935893;120.239108,30.934654;120.249169,30.933911;120.257793,30.933663;120.266992,30.933663;120.280502,30.933911;120.290851,30.935398;120.300912,30.936389;120.310398,30.938124;120.315285,30.938124;120.322758,30.939858;120.333682,30.942584;120.338281,30.944566;120.350929,30.946548;120.363003,30.95076;120.372776,30.954229;120.378813,30.955715;120.376513,30.948035;120.373638,30.945805;120.372201,30.945062;120.371339,30.942832;120.369614,30.942584;120.368177,30.940354;120.367027,30.938619;120.367027,30.937876;120.367602,30.936637;120.368177,30.934407;120.369614,30.932176;120.369902,30.930442;120.369902,30.928211;120.368177,30.926972;120.367314,30.925485;120.365015,30.92499;120.365015,30.922511;120.36444,30.919537;120.364727,30.916067;120.365302,30.913589;120.366739,30.911606;120.366739,30.909127;120.368177,30.906648;120.369327,30.902186;120.369327,30.900203;120.369902,30.896981;120.370764,30.894254;120.371339,30.892022;120.372201,30.891527;120.373926,30.891279;120.378813,30.891775;120.383125,30.895493;120.390598,30.897229;120.394623,30.897724;120.39951,30.897724;120.401809,30.897229;120.401522,30.895989;120.406696,30.896981;120.417332,30.89884;120.423369,30.901195;120.424375,30.901443;120.424806,30.90293;120.425525,30.905161;120.425668,30.907268;120.427393,30.908631;120.427824,30.910243;120.428255,30.912597;120.423656,30.928335;120.424375,30.931805;120.425093,30.933168;120.431849,30.932796;120.439035,30.927592;120.441335,30.925237;120.442772,30.923131;120.444641,30.919661;120.443778,30.915819;120.443778,30.912845;120.443203,30.90826;120.441622,30.89413;120.441622,30.893138;120.442341,30.892518;120.445215,30.891527;120.447228,30.889543;120.44924,30.886444;120.450533,30.884709;120.452833,30.882229;120.454845,30.880246;120.45542,30.879626;120.456283,30.878882;120.458726,30.878138;120.459445,30.877394;120.460307,30.874295;120.459445,30.873055;120.45887,30.872683;120.456283,30.872063;120.453695,30.871319;120.45154,30.870327;120.450677,30.869707;120.449958,30.868468;120.449527,30.867724;120.448809,30.866608;120.448234,30.865244;120.44809,30.86326;120.44809,30.86264;120.448521,30.861648;120.448952,30.861028;120.449671,30.860036;120.45039,30.859292;120.451252,30.858796;120.452258,30.8583;120.453121,30.857804;120.454558,30.85706;120.457289,30.856688;120.459013,30.856068;120.46002,30.85582;120.461313,30.853216;120.461601,30.852472;120.462175,30.85148;120.463325,30.849743;120.464475,30.848999;120.465769,30.847883;120.466344,30.846891;120.46735,30.845403;120.467493,30.843915;120.467493,30.84193;120.467637,30.840566;120.467781,30.83945;120.468212,30.838085;120.468643,30.837093;120.469074,30.835729;120.469218,30.834737;120.468356,30.833248;120.468212,30.832752;120.468068,30.831636;120.466775,30.830767;120.464188,30.830147;120.4639,30.829775;120.4639,30.828287;120.464044,30.82655;120.4639,30.823077;120.464763,30.822457;120.465769,30.821216;120.468068,30.819479;120.468643,30.818983;120.469506,30.817494;120.470512,30.816254;120.47123,30.814517;120.471949,30.813525;120.472811,30.812904;120.473961,30.81216;120.475686,30.81154;120.477842,30.811912;120.480285,30.812036;120.481435,30.812036;120.482585,30.809058;120.482872,30.807197;120.482729,30.805833;120.482585,30.80422;120.482585,30.802855;120.482441,30.80149;120.482297,30.799257;120.482441,30.797395;120.482872,30.795286;120.483016,30.794169;120.483591,30.792308;120.484741,30.789454;120.486322,30.78722;120.487328,30.784986;120.490059,30.781139;120.490777,30.779774;120.491209,30.77903;120.49782,30.768728;120.497533,30.768977;120.496383,30.768977;120.494227,30.76848;120.492215,30.768108;120.490059,30.767859;120.489628,30.767984;120.489053,30.768977;120.488334,30.770218;120.487903,30.77059;120.483735,30.771831;120.481866,30.772328;120.47971,30.773072;120.477123,30.773321;120.475686,30.773445;120.477267,30.769969;120.478129,30.767859;120.481579,30.761777;120.481435,30.761281;120.479423,30.761281;120.478704,30.761157;120.478704,30.760784;120.478848,30.760412;120.480429,30.760412;120.480429,30.759667;120.481148,30.756564;120.481435,30.755447;120.481866,30.754081;120.48201,30.75284;120.48201,30.751226;120.48201,30.74924;120.48201,30.747874;120.482441,30.747874;120.482729,30.747874;120.482872,30.748743;120.486537,30.748246;120.486969,30.745298;120.486789,30.744832;120.489161,30.744181;120.488154,30.742442;120.489196,30.740797;120.492071,30.74086;120.492574,30.738407;120.492107,30.737662;120.491712,30.737197;120.491316,30.737166;120.491245,30.736855;120.491245,30.736669;120.493724,30.734993;120.493832,30.734776;120.484705,30.719875;120.485567,30.719533;120.485531,30.719192;120.486286,30.718975;120.485495,30.717019;120.484633,30.717174;120.484561,30.717112;120.484417,30.716864;120.48413,30.716864;120.483914,30.716957;120.483447,30.717112;120.483196,30.717174;120.483268,30.717453;120.48316,30.717515;120.482657,30.717578;120.482549,30.717484;120.482513,30.71736;120.482369,30.717174;120.482513,30.717143;120.482657,30.717019;120.482872,30.717205;120.48298,30.717267;120.483268,30.71705;120.483627,30.716832;120.483627,30.716708;120.483519,30.716491;120.483268,30.716025;120.481435,30.715622;120.480968,30.715591;120.47335,30.707642;120.473171,30.707673;120.472883,30.707766;120.470584,30.708543;120.470404,30.708512;120.470332,30.708418;120.470296,30.708325;120.469937,30.70817;120.469362,30.708015;120.468931,30.707922;120.468787,30.707704;120.468715,30.707487;120.468715,30.707239;120.468643,30.707052;120.468428,30.706897;120.467961,30.706804;120.467529,30.706742;120.466919,30.70668;120.46638,30.706618;120.466056,30.706587;120.465733,30.709039;120.464188,30.708853;120.464655,30.707394;120.461457,30.705438;120.459984,30.705841;120.459696,30.705997;120.461493,30.707301;120.461601,30.707673;120.461493,30.707766;120.458295,30.706866;120.457576,30.707332;120.456354,30.707083;120.455923,30.707456;120.452402,30.707642;120.45233,30.709226;120.451899,30.709319;120.451791,30.70758;120.449384,30.707922;120.449168,30.706121;120.449527,30.70373;120.448737,30.703419;120.448701,30.70314;120.449384,30.702612;120.449851,30.702457;120.450066,30.701929;120.449635,30.700283;120.448485,30.699942;120.447767,30.699848;120.447371,30.701184;120.4473,30.701215;120.447443,30.699258;120.447371,30.699041;120.447982,30.699103;120.448162,30.699103;120.448593,30.698265;120.449887,30.698793;120.450174,30.698606;120.450462,30.698606;120.450354,30.69929;120.451863,30.700314;120.453336,30.698979;120.453228,30.698513;120.453085,30.698389;120.4533,30.698016;120.453875,30.698172;120.454342,30.696836;120.456031,30.696122;120.455995,30.695594;120.456426,30.695253;120.456354,30.694756;120.46275,30.691775;120.460055,30.686216;120.4533,30.687396;120.454306,30.685408;120.448126,30.68575;120.446581,30.688141;120.438137,30.685905;120.433717,30.68547;120.433358,30.685408;120.432855,30.686402;120.432064,30.686309;120.43228,30.684849;120.429657,30.684445;120.428758,30.683576;120.428507,30.683452;120.426746,30.682955;120.425381,30.682147;120.421895,30.682551;120.417512,30.682054;120.415535,30.682489;120.413092,30.676153;120.404756,30.677085;120.40454,30.67811;120.403211,30.678203;120.403211,30.676867;120.397893,30.677085;120.397677,30.675966;120.39394,30.676277;120.392647,30.675718;120.391281,30.67665;120.390131,30.676277;120.389916,30.676277;120.389377,30.67696;120.389053,30.676929;120.389053,30.67665;120.389161,30.676401;120.389089,30.676215;120.386035,30.675469;120.386358,30.675283;120.386358,30.673606;120.385855,30.67314;120.386071,30.670065;120.387293,30.669847;120.387221,30.665902;120.384885,30.662361;120.376944,30.664101;120.376441,30.662268;120.374393,30.663045;120.374213,30.66233;120.37292,30.66261;120.37256,30.662299;120.372057,30.662237;120.37177,30.662299;120.371914,30.662113;120.373135,30.661336;120.372129,30.660591;120.369902,30.660249;120.369614,30.66146;120.36753,30.661585;120.367566,30.663417;120.366991,30.663542;120.366883,30.664722;120.365769,30.664598;120.365266,30.665188;120.365158,30.665623;120.364045,30.665654;120.364045,30.667487;120.364188,30.66758;120.364548,30.667673;120.363973,30.667673;120.363577,30.667797;120.361601,30.667673;120.361206,30.667642;120.360739,30.669816;120.359302,30.670003;120.358511,30.671214;120.357864,30.671028;120.357864,30.66789;120.356463,30.668636;120.356391,30.668046;120.355888,30.668046;120.354954,30.665157;120.354523,30.665095;120.353768,30.663448;120.352798,30.66379;120.352654,30.664008;120.352295,30.663635;120.35136,30.663821;120.35136,30.664442;120.35154,30.664722;120.351145,30.664505;120.350714,30.664101;120.350318,30.663852;120.347264,30.665281;120.34712,30.664971;120.346222,30.665033;120.345791,30.665064;120.345575,30.663914;120.347408,30.663386;120.347156,30.661926;120.350139,30.661398;120.349564,30.657701;120.351612,30.657515;120.35136,30.653973;120.350534,30.653849;120.350534,30.650991;120.348917,30.647387;120.347336,30.643224;120.346833,30.641422;120.346833,30.63732;120.339,30.619918;120.330646,30.618271;120.326819,30.618178;120.321842,30.617727;120.318393,30.618084;120.316057,30.61824;120.314674,30.617774;120.313739,30.617432;120.309679,30.614479;120.310002,30.608916;120.309679,30.605963;120.309104,30.60531;120.308529,30.604005;120.308529,30.603414;120.308637,30.602233;120.309212,30.6013;120.313739,30.597819;120.315069,30.596917;120.31665,30.59499;120.317728,30.59412;120.320782,30.592068;120.32204,30.590762;120.324088,30.588648;120.324843,30.587778;120.325633,30.585757;120.325849,30.584482;120.325381,30.583177;120.323369,30.57957;120.322615,30.57814;120.321393,30.577394;120.319453,30.576585;120.318518,30.576399;120.317979,30.575901;120.316291,30.573849;120.315788,30.5736;120.313344,30.572948;120.312733,30.572761;120.311224,30.57273;120.310649,30.572668;120.307667,30.571486;120.307415,30.571144;120.306948,30.570864;120.306301,30.570584;120.305475,30.57046;120.304972,30.570429;120.304253,30.570429;120.303714,30.570522;120.303211,30.570522;120.302888,30.570336;120.30278,30.570118;120.302708,30.567786;120.303391,30.566231;120.305008,30.56421;120.306301,30.562531;120.306445,30.561411;120.306876,30.559545;120.307559,30.555409;120.307451,30.554476;120.307415,30.552299;120.307523,30.551149;120.307631,30.550247;120.307667,30.549096;120.307667,30.545053;120.307667,30.542005;120.307739,30.540698;120.308242,30.53709;120.308457,30.536282;120.308601,30.535411;120.308673,30.532176;120.308457,30.530869;120.308026,30.529625;120.307379,30.527696;120.306517,30.525083;120.306445,30.521785;120.305511,30.521661;120.30472,30.520852;120.303283,30.52023;120.296672,30.518674;120.295162,30.518363;120.293725,30.517057;120.293581,30.514879;120.293007,30.513572;120.292647,30.51351;120.290922,30.513572;120.290491,30.514008;120.289557,30.51407;120.288551,30.514319;120.287976,30.51407;120.287186,30.513697;120.286251,30.512888;120.284886,30.51127;120.284239,30.510647;120.282514,30.510523;120.281077,30.510585;120.278921,30.510772;120.276909,30.511145;120.273819,30.511394;120.270729,30.511768;120.270297,30.511768;120.269722,30.511643;120.26771,30.511332;120.266632,30.51127;120.264117,30.511581;120.263183,30.512079;120.261889,30.51239;120.259877,30.512514;120.257146,30.512576;120.25535,30.512576;120.252834,30.512079;120.250103,30.511892;120.248019,30.511705;120.246582,30.511643;120.245792,30.511519;120.245145,30.511519;120.243492,30.511705;120.242414,30.512079;120.240546,30.51239;120.239036,30.512888;120.237455,30.513323;120.235515,30.51407;120.233862,30.514568;120.232712,30.515065;120.231347,30.515563;120.230341,30.515874;120.228257,30.515937;120.226748,30.516061;120.225526,30.516185;120.224089,30.516185;120.223298,30.516123;120.22222,30.515999;120.220783,30.51575;120.220064,30.515439;120.219274,30.515065;120.218411,30.51463;120.217621,30.514257;120.2118,30.511456;120.210794,30.511705;120.210362,30.511954;120.208781,30.515128;120.20871,30.51575;120.20871,30.517181;120.207991,30.519421;120.207991,30.520043;120.207488,30.520479;120.206625,30.52023;120.206051,30.519794;120.205044,30.518737;120.20411,30.51687;120.203176,30.515377;120.203104,30.514194;120.203104,30.512763;120.203535,30.511892;120.203607,30.510523;120.203104,30.509776;120.202314,30.509341;120.201236,30.50903;120.200804,30.50903;120.19908,30.508905;120.197139,30.508656;120.195055,30.508594;120.193762,30.50847;120.19254,30.508221;120.191821,30.508034;120.190456,30.507723;120.189953,30.507412;120.189162,30.506914;120.188731,30.506603;120.187797,30.506043;120.187078,30.505545;120.186647,30.505109;120.186288,30.504673;120.185929,30.504176;120.185641,30.503616;120.185138,30.50262;120.184994,30.502122;120.184922,30.501002;120.184922,30.500317;120.185138,30.500006;120.185425,30.499508;120.185857,30.499135;120.185929,30.498886;120.186144,30.497952;120.186144,30.49733;120.185857,30.496396;120.185569,30.495899;120.185066,30.495214;120.184707,30.494654;120.184491,30.494094;120.184204,30.493471;120.184132,30.492911;120.184132,30.492413;120.184419,30.491542;120.184779,30.490982;120.185138,30.490546;120.185354,30.490359;120.185785,30.490048;120.186,30.489924;120.186647,30.489426;120.187078,30.488866;120.187078,30.488181;120.187078,30.487683;120.186791,30.487372;120.186144,30.486936;120.185138,30.486749;120.183916,30.487496;120.18327,30.487994;120.182551,30.488368;120.181689,30.488928;120.180898,30.489426;120.180395,30.48955;120.180036,30.489488;120.179748,30.489052;120.179748,30.488305;120.179964,30.487123;120.180251,30.486314;120.180323,30.485753;120.180539,30.485069;120.180826,30.48426;120.181185,30.483388;120.181617,30.482641;120.181976,30.482019;120.182192,30.481334;120.182192,30.480898;120.182192,30.480151;120.182192,30.479218;120.181832,30.477911;120.181617,30.477413;120.181473,30.477164;120.181042,30.476479;120.180754,30.476417;120.179964,30.47623;120.178311,30.475919;120.177233,30.475607;120.175868,30.475109;120.174143,30.474549;120.173137,30.474113;120.170262,30.473615;120.169472,30.473553;120.168394,30.473304;120.167028,30.47318;120.165735,30.472993;120.163507,30.472806;120.162357,30.472619;120.16092,30.472433;120.159842,30.47237;120.158692,30.47237;120.157398,30.472619;120.155386,30.472931;120.154308,30.473242;120.15359,30.47374;120.152943,30.474549;120.152368,30.476915;120.15244,30.479093;120.152512,30.479902;120.152799,30.481521;120.15323,30.48289;120.153446,30.483886;120.153733,30.484695;120.154164,30.486563;120.154164,30.487061;120.153805,30.48787;120.153661,30.488119;120.152512,30.488243;120.151362,30.488243;120.149853,30.488056;120.148559,30.487683;120.1436,30.487123;120.142666,30.487123;120.14051,30.486749;120.138426,30.4865;120.136989,30.486127;120.135264,30.486002;120.133252,30.485816;120.132102,30.485567;120.130449,30.48538;120.129227,30.485256;120.128078,30.485256;120.127215,30.484695;120.126353,30.484073;120.121825,30.482392;120.121035,30.482206;120.120101,30.482081;120.11852,30.482081;120.116939,30.482517;120.115142,30.483264;120.114136,30.484446;120.113489,30.485505;120.112339,30.486812;120.111764,30.487496;120.107596,30.488741;120.106662,30.489177;120.105728,30.48955;120.105081,30.489861;120.104291,30.490235;120.103644,30.490733;120.103284,30.492289;120.102997,30.492911;120.10271,30.494654;120.103069,30.495587;120.103356,30.496272;120.103859,30.497019;120.104362,30.497641;120.104722,30.498077;120.104865,30.498637;120.105368,30.499446;120.1058,30.500068;120.105872,30.500691;120.105943,30.501251;120.105943,30.501749;120.105512,30.501998;120.104506,30.502122;120.103859,30.502246;120.102781,30.502371;120.101416,30.502495;120.099979,30.502558;120.09811,30.502371;120.096385,30.50206;120.095739,30.501811;120.095164,30.501749;120.092577,30.501935;120.091067,30.502122;120.08999,30.502371;120.089055,30.502433;120.088265,30.50262;120.087259,30.502682;120.086037,30.502682;120.085246,30.502682;120.084887,30.502433;120.084887,30.502184;120.084456,30.501873;120.084168,30.501624;120.084097,30.5015;120.083737,30.501251;120.083306,30.501002;120.082587,30.50094;120.081581,30.50094;120.08036,30.500815;120.080144,30.500815;120.079354,30.500691;120.078707,30.500504;120.077701,30.500131;120.076838,30.500068;120.076192,30.499819;120.075473,30.499508;120.075401,30.499322;120.075042,30.498699;120.074539,30.497268;120.074539,30.496832;120.074323,30.49621;120.074179,30.49565;120.073964,30.494592;120.07382,30.493907;120.07382,30.493409;120.073748,30.492475;120.073604,30.491604;120.073533,30.490048;120.073604,30.489488;120.073604,30.488492;120.073389,30.487932;120.073173,30.487123;120.072742,30.486065;120.072311,30.485131;120.071664,30.483948;120.067783,30.478471;120.06764,30.477101;120.067352,30.475358;120.06764,30.474362;120.06764,30.47237;120.067927,30.470627;120.068215,30.468511;120.068071,30.466145;120.067783,30.464651;120.067783,30.463032;120.068071,30.461787;120.069221,30.459297;120.069796,30.458549;120.071664,30.456931;120.073389,30.455685;120.07497,30.454689;120.075114,30.453319;120.07612,30.451327;120.076407,30.449584;120.076407,30.447093;120.074682,30.443979;120.074539,30.443232;120.073389,30.441613;120.072095,30.440368;120.071233,30.440243;120.070371,30.440368;120.070945,30.439122;120.072095,30.437752;120.072814,30.436133;120.07267,30.434638;120.071089,30.433767;120.069077,30.433642;120.065915,30.433517;120.064046,30.433642;120.062465,30.433642;120.060597,30.433144;120.059735,30.43277;120.057722,30.432397;120.055566,30.432147;120.054129,30.432147;120.053411,30.432521;120.051542,30.434265;120.05068,30.436009;120.050392,30.436756;120.048236,30.437752;120.047805,30.438001;120.046368,30.438749;120.044068,30.439496;120.041768,30.440119;120.039756,30.440492;120.037313,30.440866;120.034726,30.440866;120.033145,30.440617;120.031133,30.440617;120.027396,30.440617;120.024521,30.440741;120.021359,30.440866;120.019922,30.441489;120.017478,30.44236;120.01561,30.442983;120.013885,30.445349;120.012735,30.446844;120.011729,30.449334;120.010292,30.450455;120.006555,30.450206;120.00483,30.450331;120.001812,30.450455;119.999512,30.450704;119.995919,30.450953;119.994338,30.451701;119.990745,30.45195;119.988589,30.450704;119.98672,30.449459;119.984852,30.447965;119.982408,30.446097;119.981115,30.444228;119.979103,30.442609;119.977953,30.440119;119.976516,30.438624;119.974935,30.437503;119.971629,30.437503;119.967029,30.437379;119.964155,30.438375;119.962718,30.438998;119.960849,30.440243;119.959699,30.44236;119.959556,30.443357;119.958693,30.4451;119.958693,30.446844;119.958118,30.448712;119.9574,30.449584;119.955244,30.451825;119.953231,30.451701;119.952225,30.452448;119.950213,30.452448;119.94892,30.452448;119.946907,30.452323;119.945614,30.452074;119.943602,30.45195;119.94317,30.451825;119.942596,30.45195;119.941015,30.452572;119.94044,30.452821;119.938859,30.453444;119.937996,30.454565;119.937421,30.456184;119.937421,30.45718;119.937709,30.459546;119.937709,30.460542;119.937421,30.461787;119.937421,30.462534;119.936415,30.463655;119.936415,30.463904;119.935697,30.464775;119.934834,30.465522;119.932535,30.466518;119.932247,30.466892;119.931816,30.467141;119.92772,30.467266;119.92427,30.465896;119.917227,30.461911;119.910903,30.463157;119.908747,30.464277;119.899118,30.459795;119.890925,30.465024;119.88072,30.466394;119.875833,30.471125;119.884026,30.481085;119.877702,30.483077;119.873678,30.482953;119.861892,30.495899;119.856574,30.507225;119.846369,30.501002;119.826247,30.508221;119.813455,30.510834;119.800232,30.51071;119.788159,30.516808;119.772061,30.518923;119.767031,30.523154;119.771917,30.528256;119.77393,30.542316;119.776804,30.552268;119.775511,30.556125;119.757976,30.556498;119.736416,30.555627;119.721181,30.569558;119.708821,30.562344;119.700772,30.556125;119.702496,30.547914;119.708533,30.536593;119.712989,30.530994;119.714282,30.523403;119.716151,30.502869;119.712701,30.500628;119.716869,30.492413;119.710545,30.476852;119.708246,30.468511;119.705658,30.46988;119.704365,30.46876;119.702209,30.468884;119.703215,30.466269;119.703215,30.458425;119.712845,30.446532;119.71572,30.441862;119.715863,30.435822;119.711192,30.433953;119.703143,30.431338;119.69301,30.421746;119.686039,30.411033;119.670229,30.402872;119.665343,30.403184;119.646298,30.400194;119.64673,30.403184;119.637818,30.40605;119.640549,30.40904;119.6371,30.435448;119.651329,30.436694;119.643711,30.447529;119.635663,30.44043;119.628764,30.434327;119.617553,30.43084;119.612666,30.432459;119.602317,30.425982;119.589669,30.427227;119.580902,30.434327;119.576662,30.442423;119.572278,30.44865;119.569835,30.448151;119.55848,30.4451;119.55345,30.44043;119.551437,30.437129;119.544754,30.431213;119.542239,30.430217;119.541808,30.428473;119.542454,30.423428;119.543173,30.41857;119.541233,30.41558;119.537568,30.414708;119.534693,30.414023;119.524057,30.408417;119.519242,30.407918;119.511984,30.41041;119.496317,30.413836;119.458768,30.409663;119.45381,30.408168;119.450719,30.402125;119.446623,30.396643;119.442527,30.39683;119.437209,30.389416;119.432466,30.388855;119.424633,30.382312;119.417446,30.380443;119.413637,30.379259;119.409469,30.379509;119.403612,30.386518;119.397647,30.389696;119.391611,30.390444;119.385502,30.39063;119.381694,30.389696;119.378028,30.389509;119.37422,30.390755;119.372495,30.395615;119.372567,30.398543;119.374866,30.404586;119.372567,30.411625;119.368758,30.414739;119.364374,30.415985;119.358481,30.412995;119.353738,30.414926;119.355607,30.427258;119.358338,30.429251;119.356613,30.433735;119.354457,30.43934;119.355894,30.443575;119.351726,30.447062;119.340946,30.451545;119.340803,30.457771;119.342096,30.462129;119.33994,30.468853;119.338934,30.486034;119.335772,30.496988;119.340803,30.507941;119.338216,30.519141;119.333329,30.529096;119.333616,30.534322;119.331029,30.537184;119.323699,30.537184;119.316513,30.534446;119.310763,30.527354;119.30832,30.525612;119.285323,30.513168;119.275837,30.516528;119.266782,30.523745;119.266926,30.531211;119.263045,30.532207;119.25974,30.533824;119.256434,30.534571;119.248529,30.534695;119.244648,30.544026;119.24278,30.548381;119.243355,30.552859;119.243929,30.556342;119.246373,30.557213;119.248241,30.558706;119.250254,30.559452;119.249966,30.561194;119.249966,30.563308;119.249535,30.565174;119.250397,30.56704;119.253128,30.569403;119.256434,30.571766;119.259237,30.572263;119.261464,30.573787;119.263045,30.575777;119.265165,30.577456;119.266926,30.579321;119.268795,30.579197;119.270735,30.579819;119.271382,30.581;119.270771,30.58212;119.270591,30.58355;119.270124,30.585446;119.270771,30.586783;119.269944,30.588804;119.26707,30.592286;119.265273,30.592845;119.262866,30.593747;119.261321,30.594026;119.259883,30.594959;119.25974,30.597073;119.26071,30.60099;119.260171,30.602046;119.258015,30.602637;119.255787,30.603632;119.251691,30.605435;119.249535,30.605714;119.244792,30.612801;119.246229,30.621379","name":"湖州市","gridId":"3","txyh":2125446,"kdyh":504001,"kdszl":"0.2835","kdfg":863678,"kdszyh":244865,"channelCounts":null,"centralPoint":"119.87824565278189,30.748464176649208"},{"cityId":"573","sumConut":813,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"121.250505,30.456056;121.187265,30.446094;121.102177,30.402247;121.057334,30.357383;121.025785,30.332324;120.959598,30.291544;120.88256,30.25761;120.868833,30.251995;120.856473,30.250997;120.748029,30.281565;120.726542,30.293665;120.709294,30.308133;120.687448,30.36;120.680549,30.376203;120.664307,30.39664;120.659133,30.401375;120.646844,30.40424;120.562547,30.402247;120.499738,30.400876;120.476397,30.398305;120.466084,30.396499;120.46303,30.394879;120.459329,30.390518;120.458431,30.387963;120.45534,30.381421;120.45243,30.37709;120.449771,30.373476;120.447076,30.369207;120.44239,30.362742;120.437374,30.356587;120.435829,30.354063;120.433191,30.350776;120.432164,30.348391;120.431769,30.346739;120.430368,30.344214;120.429361,30.340692;120.427873,30.337312;120.426307,30.33477;120.425481,30.331965;120.42275,30.32838;120.420307,30.323922;120.417252,30.326666;120.41312,30.330562;120.409635,30.330999;120.407083,30.33304;120.40173,30.338074;120.390932,30.344744;120.390429,30.345274;120.390411,30.345913;120.390186,30.346708;120.390052,30.347752;120.390447,30.348905;120.394049,30.354795;120.395486,30.357311;120.395585,30.358083;120.39554,30.358363;120.39554,30.358745;120.39537,30.359758;120.394687,30.361152;120.394471,30.362445;120.394534,30.363848;120.394938,30.364938;120.395918,30.366387;120.399089,30.370804;120.399699,30.371786;120.399699,30.372089;120.40075,30.373102;120.404254,30.376521;120.404442,30.376638;120.40552,30.376771;120.405826,30.376919;120.405979,30.37702;120.40738,30.378562;120.407299,30.378998;120.406783,30.386183;120.405889,30.386359;120.405673,30.386355;120.404901,30.386546;120.40486,30.387282;120.404115,30.388407;120.402911,30.388933;120.401765,30.388937;120.399663,30.388555;120.39439,30.387418;120.390088,30.386931;120.38596,30.386888;120.379667,30.384575;120.377601,30.383582;120.376137,30.383162;120.37333,30.382355;120.368986,30.380922;120.366826,30.38026;120.365622,30.380027;120.364522,30.379937;120.362384,30.380408;120.359931,30.379668;120.357668,30.378103;120.355548,30.377223;120.353738,30.375634;120.352745,30.374656;120.351321,30.372849;120.349947,30.374247;120.349992,30.377335;120.347068,30.380038;120.345141,30.381168;120.343223,30.38202;120.339459,30.382624;120.333813,30.383917;120.330651,30.388169;120.327574,30.392398;120.325463,30.395058;120.32342,30.397787;120.32218,30.399446;120.321026,30.400202;120.317693,30.40012;120.31634,30.400129;120.315133,30.400517;120.314077,30.401381;120.313516,30.402339;120.31352,30.403624;120.313691,30.40408;120.314109,30.404469;120.31573,30.404835;120.316826,30.405481;120.317325,30.406645;120.317217,30.407634;120.317936,30.408483;120.318762,30.409016;120.319548,30.408592;120.320357,30.407249;120.320824,30.406299;120.321542,30.405917;120.325086,30.408471;120.327624,30.410663;120.329411,30.412213;120.329236,30.413704;120.333916,30.420267;120.336432,30.424841;120.337752,30.42727;120.33808,30.427877;120.338902,30.428952;120.338996,30.42945;120.33905,30.431034;120.338206,30.432521;120.338417,30.434187;120.339432,30.435137;120.340497,30.436005;120.341826,30.436351;120.346991,30.436028;120.348002,30.436666;120.34833,30.43741;120.348002,30.438414;120.348011,30.438647;120.348128,30.440387;120.346973,30.443719;120.346574,30.446677;120.345244,30.456806;120.344948,30.463242;120.344961,30.466079;120.34497,30.468752;120.345554,30.470729;120.347656,30.470841;120.349197,30.471211;120.350827,30.471791;120.351074,30.472156;120.35107,30.472682;120.34965,30.475674;120.349116,30.476273;120.348191,30.477452;120.346062,30.47802;120.343686,30.477922;120.341548,30.47744;120.339944,30.475923;120.337829,30.474429;120.336831,30.474238;120.335713,30.474397;120.334873,30.476712;120.334846,30.479529;120.333952,30.481081;120.333328,30.482591;120.332551,30.484493;120.332317,30.486687;120.332861,30.487419;120.334424,30.490145;120.33389,30.493958;120.334199,30.497003;120.333651,30.499917;120.331392,30.503044;120.331554,30.503269;120.332205,30.503608;120.332129,30.504176;120.332699,30.50633;120.331087,30.508271;120.329223,30.512355;120.328886,30.515828;120.327678,30.520071;120.326487,30.524282;120.324269,30.527377;120.322903,30.52765;120.321178,30.52758;120.31821,30.526448;120.313143,30.526001;120.306532,30.525464;120.307367,30.527626;120.307807,30.529045;120.308584,30.532327;120.308589,30.535632;120.307893,30.539155;120.307668,30.541748;120.307726,30.546095;120.307578,30.54987;120.307358,30.552634;120.307416,30.555868;120.307039,30.55876;120.306469,30.560758;120.3061,30.562686;120.30429,30.565085;120.3035,30.566122;120.302584,30.567572;120.302615,30.569691;120.302561,30.570316;120.303482,30.570697;120.305031,30.570581;120.306675,30.570767;120.307569,30.571568;120.309285,30.572295;120.311014,30.57292;120.31295,30.572979;120.315991,30.573768;120.316745,30.574537;120.31741,30.575167;120.318299,30.576403;120.32059,30.577223;120.321583,30.577744;120.322876,30.578894;120.325826,30.584666;120.324891,30.587526;120.32058,30.59219;120.312387,30.598655;120.309944,30.600521;120.30865,30.602013;120.308435,30.60394;120.3098,30.606302;120.310016,30.614694;120.31289,30.616994;120.31598,30.618237;120.322089,30.617802;120.331287,30.618486;120.339264,30.620661;120.343289,30.629052;120.346451,30.637752;120.346595,30.642289;120.350403,30.653411;120.348104,30.658631;120.348391,30.663042;120.346666,30.667142;120.348535,30.668447;120.35335,30.669379;120.360464,30.669006;120.364632,30.667826;120.366214,30.664036;120.368801,30.662234;120.371963,30.660867;120.373831,30.661489;120.375843,30.664098;120.377784,30.664409;120.381018,30.662793;120.382886,30.662793;120.384755,30.664533;120.385329,30.666521;120.38497,30.668882;120.384323,30.670745;120.384539,30.672982;120.387557,30.677082;120.394097,30.6782;120.397187,30.678076;120.400924,30.677144;120.405739,30.677579;120.412422,30.677392;120.414003,30.678138;120.415153,30.679566;120.416806,30.683666;120.418387,30.683977;120.421046,30.6823;120.42428,30.681741;120.426867,30.681741;120.435491,30.685902;120.439659,30.686275;120.447492,30.687766;120.460572,30.686834;120.461793,30.688449;120.461937,30.691058;120.459637,30.69466;120.45705,30.695591;120.455254,30.697455;120.454966,30.699939;120.453385,30.701057;120.449504,30.69969;120.447923,30.700932;120.447923,30.704162;120.451373,30.707764;120.461434,30.70677;120.471639,30.709254;120.474944,30.70826;120.483137,30.718196;120.484718,30.724653;120.49521,30.738436;120.488167,30.740919;120.487449,30.745388;120.474369,30.771208;120.47825,30.773318;120.484287,30.772449;120.49133,30.768477;120.498228,30.770339;120.511164,30.763388;120.539335,30.799874;120.570955,30.843788;120.597401,30.858669;120.623848,30.854701;120.638795,30.864621;120.652593,30.861645;120.657193,30.852717;120.687088,30.887433;120.70606,30.87375;120.710085,30.878957;120.708935,30.888626;120.718421,30.891601;120.711235,30.945926;120.690538,30.962773;120.706635,30.977636;120.713534,30.975654;120.725033,30.978627;120.733656,30.978085;120.738687,30.974989;120.745011,30.96892;120.752341,30.96892;120.773326,30.98259;120.774619,30.996784;120.777494,31.002479;120.78238,31.003098;120.806671,31.011316;120.831967,31.011316;120.853383,30.996288;120.862294,31.000251;120.870774,30.99666;120.874511,31.000993;120.88026,31.001241;120.885434,31.005575;120.898226,31.00867;120.898945,31.015974;120.901532,31.016964;120.901819,31.022782;120.91188,31.022659;120.916192,31.016345;120.925103,31.01845;120.94695,31.015278;120.956149,31.027161;120.953849,31.036073;120.961898,31.036073;120.973396,31.02419;120.994093,31.02122;120.998692,31.017258;120.999267,31.010032;120.99898,31.006194;121.006598,31.006317;121.007604,30.979076;121.000705,30.978271;120.998836,30.974307;121.001423,30.963965;121.007029,30.944083;121.006382,30.91577;121.012347,30.915274;121.011412,30.91323;121.010334,30.91323;121.010334,30.911061;121.005807,30.91199;121.005088,30.909574;121.002358,30.909945;120.999555,30.908396;120.999914,30.906289;120.997183,30.901641;120.999699,30.90034;121.000381,30.896095;121.014503,30.894049;121.014754,30.889401;121.023953,30.888471;121.027546,30.884752;121.026756,30.883203;121.028624,30.881839;121.026468,30.878058;121.025462,30.878616;121.023019,30.876942;121.024887,30.874463;121.020935,30.870309;121.022444,30.868697;121.02115,30.866899;121.022516,30.866155;121.021725,30.865039;121.020072,30.865287;121.019713,30.86442;121.017413,30.861878;121.021869,30.860018;121.019713,30.85791;121.017413,30.859274;121.010442,30.851585;121.008286,30.852019;121.005052,30.849539;121.002034,30.843958;121.000094,30.845074;120.996285,30.840176;120.996285,30.838501;120.998872,30.837881;120.997219,30.835276;120.999375,30.832734;120.996788,30.829633;121.000956,30.8274;121.00613,30.834904;121.011592,30.834718;121.020539,30.841803;121.038937,30.832873;121.043536,30.816995;121.050435,30.824935;121.05392,30.836827;121.067754,30.844919;121.066964,30.851523;121.073467,30.855213;121.087158,30.855244;121.103579,30.863273;121.104728,30.862188;121.103974,30.861692;121.105196,30.860452;121.106453,30.860855;121.106777,30.860297;121.105591,30.859987;121.106848,30.858468;121.108142,30.857104;121.107926,30.856174;121.110621,30.856856;121.11152,30.855802;121.11443,30.856794;121.117017,30.857724;121.118778,30.859429;121.117556,30.860297;121.116838,30.859987;121.116478,30.861072;121.117664,30.861444;121.123162,30.856794;121.130204,30.853445;121.126503,30.848764;121.126575,30.845416;121.125785,30.842656;121.12927,30.841974;121.131857,30.842036;121.136888,30.840672;121.138289,30.842625;121.13872,30.841385;121.141128,30.83909;121.139511,30.838067;121.139547,30.837447;121.141056,30.836486;121.140265,30.835773;121.140876,30.835307;121.140876,30.834687;121.141882,30.834346;121.143787,30.836548;121.144254,30.836052;121.143966,30.833912;121.144649,30.832145;121.14411,30.830532;121.143571,30.830625;121.140481,30.826036;121.13908,30.825229;121.138397,30.822996;121.137786,30.822066;121.136816,30.821353;121.135774,30.817135;121.134804,30.815925;121.134804,30.813227;121.133726,30.808947;121.133079,30.804481;121.133187,30.801937;121.132935,30.799859;121.13254,30.798494;121.133295,30.795454;121.13272,30.794213;121.133834,30.786302;121.133654,30.784627;121.138972,30.782952;121.142745,30.783169;121.144505,30.784348;121.145943,30.784968;121.146338,30.785589;121.147811,30.785558;121.149248,30.785837;121.150434,30.785402;121.15162,30.785185;121.157441,30.784999;121.160316,30.783665;121.1624,30.781586;121.166208,30.78078;121.166532,30.779725;121.167466,30.779632;121.170556,30.779942;121.172425,30.78078;121.176234,30.781524;121.177024,30.781059;121.17803,30.780842;121.178641,30.780997;121.180725,30.779632;121.180869,30.778515;121.183923,30.779725;121.190606,30.781028;121.193194,30.781804;121.192583,30.785247;121.194236,30.785868;121.194954,30.785558;121.195817,30.785465;121.196499,30.786737;121.197362,30.787357;121.199302,30.783851;121.203255,30.779725;121.204368,30.780128;121.207351,30.780097;121.206776,30.782672;121.20577,30.784782;121.205734,30.787047;121.205159,30.787884;121.206345,30.788412;121.205878,30.789746;121.210405,30.792197;121.213855,30.792383;121.21734,30.791979;121.223664,30.792383;121.226143,30.787915;121.226287,30.786985;121.227114,30.786116;121.227904,30.781866;121.228695,30.781059;121.232827,30.779415;121.234516,30.77881;121.234731,30.778205;121.233042,30.777646;121.232503,30.777662;121.233707,30.776405;121.235001,30.775009;121.235953,30.773085;121.236995,30.769905;121.237678,30.765483;121.238468,30.763202;121.239007,30.76328;121.239187,30.762907;121.239546,30.762674;121.238935,30.761806;121.242277,30.760192;121.245403,30.758454;121.249787,30.756561;121.249895,30.75563;121.251368,30.755723;121.254099,30.753954;121.262938,30.749795;121.267322,30.744705;121.272065,30.740236;121.27458,30.741167;121.276017,30.738746;121.278173,30.738622;121.274939,30.735518;121.276377,30.733718;121.277455,30.732724;121.276233,30.731731;121.275586,30.726392;121.276449,30.723039;121.273215,30.721487;121.273574,30.719562;121.274652,30.718568;121.273574,30.717389;121.272352,30.717202;121.272712,30.716209;121.271634,30.715464;121.272712,30.712794;121.273861,30.712794;121.273574,30.709999;121.276592,30.703913;121.281335,30.6982;121.289959,30.689256;121.495419,30.673976;121.524165,30.676958;121.547162,30.686896;121.531064,30.256612;121.48852,30.295536;121.464374,30.324469;121.427579,30.362369;121.390785,30.394272;121.367573,30.413335;121.35399,30.428159;121.301098,30.449083","name":"嘉兴市","gridId":"4","txyh":3266547,"kdyh":841921,"kdszl":"0.3462","kdfg":1891632,"kdszyh":654943,"channelCounts":null,"centralPoint":"120.90946439188207,30.602750303314153"},{"cityId":"574","sumConut":121,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"120.8826,30.2509;120.9814,30.3003;121.1023,30.3937;121.1572,30.4266;121.1792,30.4376;121.2561,30.4486;121.3,30.4431;121.344,30.4211;121.5198,30.2563;121.6736,30.163;121.7285,30.1025;121.7505,30.0641;121.7834,30.0256;121.7834,29.9982;121.8713,29.9487;121.9482,29.9652;121.9922,29.9542;122.0471,29.9158;122.113,29.9268;122.1899,29.9158;122.1021,29.8334;122.0032,29.7565;121.9482,29.751;121.9373,29.718;122.0032,29.6686;122.0032,29.6576;122.0581,29.6301;122.124,29.5697;122.179,29.5477;122.157,29.5313;122.157,29.5148;122.168,29.4818;122.179,29.4763;122.2559,29.4873;122.2778,29.4653;122.2778,29.4489;122.2559,29.4269;122.2119,29.0808;122.2119,29.0314;122.2229,28.9709;122.2339,28.9435;122.2998,28.905;122.3108,28.8721;122.2998,28.8556;122.2449,28.8391;122.0142,28.8556;121.9702,28.8501;121.7834,28.9984;121.7505,29.0973;121.7065,29.1248;121.6736,29.1302;121.5857,29.1687;121.5637,29.1687;121.5308,29.1357;121.4978,29.1357;121.4429,29.1577;121.4099,29.1522;121.3989,29.1577;121.3989,29.1852;121.377,29.1907;121.333,29.1193;121.311,29.1083;121.3,29.1138;121.2891,29.1028;121.2671,29.1083;121.2561,29.1193;121.2671,29.1577;121.2561,29.1577;121.2341,29.1962;121.2231,29.2072;121.1682,29.2072;121.1792,29.2236;121.1572,29.2401;121.1682,29.2566;121.1792,29.2566;121.1792,29.2786;121.2012,29.328;121.1902,29.339;121.2341,29.3665;121.2341,29.4104;121.2122,29.4159;121.2122,29.4379;121.2231,29.4489;121.2122,29.4598;121.2341,29.5148;121.2231,29.5313;121.1462,29.5422;121.1353,29.5532;121.1133,29.5532;121.1023,29.5807;121.1023,29.5917;121.1023,29.6246;121.0693,29.6356;121.0803,29.6631;121.0583,29.6851;121.0254,29.6686;120.9924,29.6741;120.9924,29.6851;121.0144,29.6906;121.0034,29.707;121.0364,29.718;121.0254,29.729;121.0364,29.74;121.0254,29.762;121.0474,29.762;121.0583,29.7784;121.0803,29.7839;121.1023,29.8059;121.0913,29.8169;121.1023,29.8389;121.0693,29.8608;121.0583,29.8553;121.0364,29.8718;121.0144,29.8938;121.0364,29.9268;121.0474,29.9542;121.0693,29.9597;121.0913,29.9872;121.0693,30.0037;121.0583,30.0037;121.0474,30.0092;121.0474,30.0037;121.0364,30.0146;120.9924,30.0256;120.9924,30.0531;120.9705,30.0696;120.9705,30.0916;120.9485,30.0916;120.9265,30.1135;120.9375,30.1245;120.9265,30.1685;120.8826,30.2509","name":"宁波市","gridId":"5","txyh":0,"kdyh":0,"kdszl":"0","kdfg":0,"kdszyh":0,"channelCounts":null,"centralPoint":"121.60230289405645,29.637518245237573"},{"cityId":"575","sumConut":1672,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"120.1135,29.8444;120.1465,29.8718;120.1465,29.9048;120.1904,29.9158;120.2124,29.9377;120.2234,29.9432;120.2454,29.9377;120.2563,29.9432;120.2673,29.9268;120.2783,29.9213;120.2893,29.9377;120.3113,29.9268;120.3223,29.9323;120.3442,29.9707;120.3662,29.9762;120.3552,30.0146;120.3442,30.0366;120.3333,30.0366;120.3223,30.0476;120.3333,30.0586;120.3333,30.097;120.3113,30.108;120.3003,30.097;120.2893,30.1025;120.3113,30.1355;120.3223,30.1245;120.3442,30.141;120.3552,30.141;120.3552,30.152;120.3882,30.1575;120.3992,30.1355;120.4102,30.1355;120.4102,30.1465;120.4321,30.13;120.4431,30.1355;120.4541,30.1465;120.4651,30.152;120.4651,30.1685;120.498,30.1685;120.509,30.1575;120.542,30.1575;120.564,30.1465;120.6079,30.152;120.6409,30.2179;120.6738,30.2344;120.7178,30.2838;120.8496,30.2454;120.8826,30.2509;120.9265,30.1685;120.9375,30.1245;120.9265,30.1135;120.9485,30.0916;120.9705,30.0916;120.9705,30.0696;120.9924,30.0531;120.9924,30.0256;121.0364,30.0146;121.0474,30.0037;121.0474,30.0092;121.0583,30.0037;121.0693,30.0037;121.0913,29.9872;121.0693,29.9597;121.0474,29.9542;121.0364,29.9268;121.0144,29.8938;121.0364,29.8718;121.0583,29.8553;121.0693,29.8608;121.1023,29.8389;121.0913,29.8169;121.1023,29.8059;121.0803,29.7839;121.0583,29.7784;121.0474,29.762;121.0254,29.762;121.0364,29.74;121.0254,29.729;121.0364,29.718;121.0034,29.707;121.0144,29.6906;120.9924,29.6851;120.9924,29.6741;121.0254,29.6686;121.0583,29.6851;121.0803,29.6631;121.0693,29.6356;121.1023,29.6246;121.1023,29.5917;121.1023,29.5807;121.1133,29.5532;121.1353,29.5532;121.1462,29.5422;121.2231,29.5313;121.2341,29.5148;121.2122,29.4598;121.2231,29.4489;121.2122,29.4379;121.2122,29.4159;121.2341,29.4104;121.2341,29.3665;121.1902,29.339;121.2012,29.328;121.1682,29.3225;121.1572,29.339;121.1462,29.3335;121.1243,29.339;121.1133,29.3335;121.1243,29.3115;121.1133,29.3005;121.0913,29.3115;121.1023,29.317;121.0583,29.3225;121.0254,29.306;121.0034,29.3225;120.9924,29.3115;120.9705,29.306;120.9595,29.2841;120.9155,29.306;120.9045,29.295;120.9045,29.2786;120.8936,29.2676;120.9045,29.2401;120.8826,29.2401;120.8496,29.2511;120.8276,29.2346;120.8057,29.2346;120.7727,29.2236;120.7727,29.2511;120.7727,29.2731;120.7617,29.2841;120.7727,29.306;120.7507,29.317;120.7068,29.3005;120.6958,29.317;120.7068,29.3335;120.7068,29.3445;120.6738,29.328;120.6519,29.3335;120.6409,29.328;120.6079,29.3335;120.5859,29.35;120.575,29.339;120.575,29.361;120.553,29.3719;120.553,29.3884;120.52,29.4049;120.509,29.4214;120.509,29.4434;120.498,29.4598;120.498,29.4708;120.4761,29.4873;120.4321,29.4818;120.4102,29.4543;120.3882,29.4543;120.3662,29.4434;120.3772,29.4159;120.3333,29.4049;120.3223,29.3829;120.3113,29.3774;120.3003,29.3555;120.3003,29.35;120.2673,29.3665;120.2673,29.3884;120.2783,29.4379;120.2563,29.4598;120.2673,29.4928;120.2124,29.5258;120.2014,29.5477;120.1904,29.5422;120.1685,29.5148;120.1355,29.5093;120.1245,29.4928;120.0806,29.5093;120.0916,29.5203;120.0806,29.5367;120.0476,29.5477;120.0586,29.5587;120.0366,29.5752;120.0037,29.5752;120.0146,29.6027;120.0476,29.6301;120.0256,29.6411;120.0366,29.6521;120.0366,29.6686;120.0256,29.6686;120.0256,29.6521;120.0146,29.6521;119.9927,29.6576;119.9707,29.6741;119.9707,29.696;119.9377,29.707;119.9268,29.7015;119.9377,29.696;119.9158,29.7015;119.9158,29.718;119.9048,29.729;119.9048,29.7455;119.8938,29.7565;119.8938,29.762;119.9268,29.7455;119.9707,29.7675;119.9927,29.7565;120.0037,29.7565;120.0256,29.7729;120.0366,29.7894;120.0256,29.8114;120.0366,29.8224;120.0806,29.8279;120.0916,29.8169;120.1135,29.8444","name":"绍兴市","gridId":"6","txyh":2745739,"kdyh":834034,"kdszl":"0.249","kdfg":2572299,"kdszyh":640378,"channelCounts":null,"centralPoint":"120.64034962242079,29.730725262705274"},{"cityId":"576","sumConut":264,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"120.40186,28.792368;120.521442,28.883493;120.67322,28.915874;120.735311,29.004868;120.705415,29.089745;120.746809,29.120041;120.719213,29.16244;120.795102,29.220963;120.903186,29.25727;120.923883,29.30566;121.002072,29.317753;121.098657,29.325815;121.163048,29.339921;121.202142,29.32783;121.174546,29.259287;121.179146,29.21491;121.229738,29.20684;121.271132,29.152347;121.268832,29.111963;121.294129,29.109943;121.347021,29.136195;121.390715,29.194733;121.411412,29.160422;121.4873,29.154366;121.544792,29.134176;121.574688,29.174551;121.767859,29.101864;121.788556,29.000824;121.96333,28.867299;121.984027,28.764001;121.954132,28.624081;121.988627,28.589578;121.977128,28.386393;121.880543,28.37419;121.733364,28.349778;121.756361,28.26022;121.703469,28.213376;121.662075,28.201152;121.530994,28.250039;121.480401,28.237819;121.464304,28.172625;121.496499,28.148166;121.588486,28.121664;121.572388,28.044156;121.464304,28.005381;121.386115,28.007422;121.298728,28.029872;121.14695,28.013545;121.100957,28.084956;121.160748,28.262257;121.222264,28.32765;121.210766,28.38258;121.259059,28.419184;121.18317,28.50048;121.102682,28.516731;121.040591,28.45984;120.949179,28.435194;120.824423,28.467969;120.743935,28.435448;120.677244,28.463904;120.576634,28.534757;120.482348,28.583489;120.450153,28.589578;120.434055,28.542881;120.413358,28.471779;120.378863,28.494131;120.342069,28.496162;120.296075,28.518509;120.291476,28.54085;120.348968,28.585519;120.381163,28.577399;120.385762,28.601757;120.365065,28.632197;120.33287,28.664657;120.33517,28.707245;120.362766,28.741708;120.374264,28.778185;120.374264,28.778185;120.40186,28.792368","name":"台州市","gridId":"7","txyh":3735271,"kdyh":1026251,"kdszl":"0.2534","kdfg":2466067,"kdszyh":624890,"channelCounts":null,"centralPoint":"121.24776857606815,28.70545358771195"},{"cityId":"577","sumConut":120,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"121.169887,27.536286;121.180531,27.559348;121.202906,27.579867;121.228497,27.594173;121.250642,27.621105;121.251089,27.643144;121.239855,27.699144;121.253944,27.815711;121.265105,27.837687;121.25648,27.881504;121.254148,27.913772;121.257023,27.936772;121.282403,27.985807;121.295616,27.999873;121.307103,28.003551;121.379221,28.00603;121.354705,28.019118;121.31562,28.03145;121.282794,28.036375;121.258677,28.036489;121.147058,28.016821;121.13928,28.021541;121.1162,28.065612;121.095414,28.09302;121.126673,28.143993;121.13755,28.169793;121.149328,28.215074;121.15602,28.272069;121.189891,28.28887;121.214118,28.310533;121.221535,28.358589;121.212348,28.377643;121.232792,28.388803;121.250945,28.390564;121.262874,28.416438;121.243401,28.423083;121.214489,28.451793;121.213449,28.466408;121.202054,28.474252;121.200806,28.483677;121.192427,28.487579;121.191587,28.492234;121.177971,28.502804;121.178942,28.511586;121.158644,28.525684;121.135762,28.528564;121.122889,28.542791;121.111578,28.541963;121.095257,28.528734;121.092804,28.505611;121.08536,28.498943;121.081761,28.489991;121.072208,28.486742;121.061817,28.488483;121.046608,28.48128;121.032479,28.482378;121.029137,28.478637;121.013044,28.484994;121.003516,28.480642;120.99748,28.485727;120.974101,28.492698;120.951445,28.51158;120.93414,28.510939;120.916539,28.494114;120.8978,28.489567;120.870837,28.501064;120.869909,28.509358;120.863225,28.519348;120.851883,28.520658;120.846471,28.525425;120.84344,28.532945;120.84785,28.540707;120.845436,28.546171;120.838982,28.54792;120.833298,28.57152;120.805126,28.579092;120.802696,28.598909;120.792655,28.606162;120.78395,28.605786;120.775764,28.600296;120.771527,28.606108;120.750088,28.617172;120.716661,28.60825;120.714173,28.597819;120.693768,28.589514;120.683256,28.592236;120.673802,28.584517;120.661772,28.590592;120.656634,28.585593;120.645,28.584945;120.644852,28.581336;120.659692,28.570085;120.65621,28.563217;120.647784,28.562879;120.639204,28.56803;120.628839,28.56304;120.633346,28.544985;120.6328,28.540636;120.62695,28.539051;120.612334,28.541107;120.590921,28.53711;120.573948,28.550071;120.554791,28.557122;120.547891,28.548895;120.529513,28.55728;120.523872,28.564125;120.50805,28.566139;120.504903,28.571293;120.507012,28.57289;120.496517,28.587043;120.487377,28.587028;120.478521,28.593814;120.459489,28.59105;120.449118,28.57513;120.438336,28.56889;120.437782,28.543934;120.43194,28.536112;120.424523,28.513329;120.42635,28.49942;120.419206,28.490949;120.416222,28.480727;120.405813,28.474843;120.393974,28.479776;120.389873,28.459571;120.378156,28.456915;120.388148,28.434374;120.383133,28.42459;120.384276,28.41969;120.352762,28.439819;120.344965,28.438415;120.34816,28.419215;120.340109,28.417451;120.337766,28.412674;120.344099,28.401642;120.350496,28.400981;120.35524,28.391005;120.351994,28.377415;120.360127,28.377595;120.361712,28.367746;120.369987,28.362313;120.363994,28.343467;120.355404,28.34157;120.36354,28.333543;120.378894,28.331445;120.385534,28.324671;120.400942,28.32011;120.410549,28.309265;120.421168,28.304182;120.432765,28.2739;120.428014,28.257331;120.442953,28.248669;120.445373,28.243564;120.443547,28.235371;120.422445,28.212632;120.431159,28.2024;120.43625,28.188817;120.424614,28.160217;120.415918,28.161204;120.400252,28.156969;120.392464,28.150331;120.397704,28.144095;120.40511,28.143628;120.413228,28.136513;120.412569,28.128792;120.417944,28.121596;120.401948,28.102786;120.376584,28.08817;120.380802,28.061623;120.374564,28.057466;120.357431,28.058652;120.351654,28.053388;120.354707,28.032348;120.341216,27.998418;120.355589,27.99399;120.357106,27.990436;120.350185,27.987217;120.342551,27.976775;120.335449,27.972628;120.331186,27.984875;120.298588,27.982483;120.289949,27.974735;120.287118,27.965161;120.281786,27.96038;120.267978,27.960479;120.255515,27.968294;120.248006,27.941294;120.236381,27.937633;120.201915,27.944706;120.194432,27.954225;120.184925,27.958581;120.183462,27.965295;120.178896,27.966702;120.179958,27.978898;120.153167,27.987225;120.150382,27.982702;120.14553,27.982566;120.122793,27.993233;120.104738,27.988038;120.114944,27.974929;120.11359,27.970954;120.103462,27.968909;120.086358,27.974162;120.074172,27.971365;120.073514,27.965403;120.079176,27.966865;120.074569,27.960674;120.073164,27.947404;120.062765,27.948412;120.055387,27.954005;120.042415,27.954746;120.037592,27.943762;120.011684,27.948433;119.974398,27.942736;119.969522,27.946457;119.968694,27.956059;119.976897,27.977873;119.968665,27.982696;119.965125,27.979486;119.952176,27.979507;119.939964,27.970514;119.933178,27.975044;119.925794,27.971021;119.920806,27.965044;119.920218,27.955826;119.909408,27.961418;119.895773,27.96271;119.88168,27.980468;119.871981,27.972607;119.874793,27.962438;119.871775,27.956044;119.852048,27.964054;119.839811,27.964402;119.841738,27.949069;119.850576,27.935563;119.840798,27.917385;119.831886,27.917388;119.821711,27.926333;119.81495,27.927945;119.808369,27.926899;119.792759,27.915908;119.796447,27.913381;119.797567,27.904534;119.806753,27.896345;119.79407,27.868072;119.798207,27.859565;119.794402,27.854659;119.793308,27.831249;119.788411,27.822688;119.789256,27.817412;119.795458,27.812424;119.793994,27.800708;119.78064,27.802655;119.778429,27.810068;119.774555,27.811595;119.769998,27.805665;119.761448,27.802685;119.754857,27.788939;119.743023,27.777353;119.740983,27.771013;119.743631,27.763907;119.739473,27.757815;119.72666,27.751251;119.710633,27.761416;119.703615,27.759266;119.687932,27.751248;119.684525,27.738406;119.67107,27.726806;119.657176,27.723415;119.654734,27.716668;119.656825,27.703365;119.662588,27.698616;119.653368,27.692041;119.649415,27.679509;119.641997,27.674715;119.650929,27.668737;119.646143,27.657446;119.654177,27.645014;119.647576,27.631729;119.634476,27.628017;119.63179,27.621045;119.636429,27.61412;119.638089,27.587895;119.67931,27.580942;119.683654,27.577377;119.678629,27.570353;119.678525,27.562329;119.673623,27.560572;119.665785,27.545784;119.673188,27.539264;119.689906,27.54246;119.691413,27.546814;119.714388,27.521142;119.709629,27.507498;119.716106,27.502702;119.713282,27.491097;119.717859,27.488625;119.713636,27.478477;119.716503,27.470135;119.710932,27.465035;119.708227,27.451726;119.70086,27.445404;119.694101,27.446128;119.692454,27.44359;119.696843,27.4357;119.71068,27.43047;119.717776,27.409337;119.729609,27.408464;119.739706,27.395593;119.746826,27.391874;119.747103,27.382846;119.755444,27.384102;119.756285,27.378509;119.748456,27.369804;119.755237,27.366142;119.75642,27.357452;119.774441,27.352969;119.7756,27.340179;119.78864,27.334919;119.785097,27.326265;119.779133,27.332765;119.776059,27.331101;119.772474,27.3145;119.776755,27.30969;119.79725,27.308625;119.798833,27.315026;119.802069,27.315765;119.816542,27.309979;119.826146,27.302;119.829942,27.307821;119.848537,27.305369;119.852341,27.311961;119.845852,27.313844;119.842631,27.319863;119.852883,27.329313;119.863023,27.320688;119.877563,27.3219;119.871489,27.314076;119.880408,27.313705;119.879665,27.30912;119.882944,27.307767;119.88623,27.316772;119.891453,27.313934;119.893431,27.319543;119.902909,27.317183;119.910462,27.32381;119.918963,27.324027;119.92614,27.319082;119.9431,27.322489;119.951837,27.319484;119.950772,27.329106;119.944994,27.331666;119.944479,27.342387;119.953588,27.344418;119.957884,27.352432;119.969415,27.360292;119.970328,27.372454;119.994146,27.376804;120.002819,27.384559;120.014469,27.381507;120.01603,27.370238;120.0236,27.370826;120.03902,27.349089;120.057525,27.34761;120.060485,27.355469;120.103351,27.385738;120.104876,27.397958;120.130403,27.404479;120.139156,27.401028;120.137089,27.413113;120.139029,27.422953;120.143915,27.426747;120.151632,27.426223;120.16317,27.430999;120.183951,27.424214;120.199702,27.43305;120.208917,27.4342;120.223595,27.425944;120.246878,27.4333;120.251396,27.438775;120.262425,27.440249;120.268522,27.437102;120.26778,27.416628;120.281737,27.394312;120.297806,27.402018;120.313366,27.397855;120.325575,27.414019;120.330578,27.410484;120.327588,27.404284;120.338249,27.402053;120.347221,27.405829;120.356439,27.397229;120.358033,27.389891;120.349697,27.372461;120.361355,27.361427;120.358401,27.351288;120.365256,27.343428;120.381208,27.335498;120.389883,27.318789;120.407983,27.301222;120.410135,27.290788;120.420947,27.277566;120.432676,27.274358;120.435985,27.270459;120.436683,27.264863;120.428511,27.258919;120.41855,27.261395;120.407233,27.251777;120.407682,27.248315;120.418449,27.24316;120.42118,27.235186;120.414072,27.226176;120.422359,27.198163;120.437022,27.176632;120.480632,27.144883;120.551962,27.126673;120.596284,27.121367;120.629454,27.104614;120.702889,27.057022;120.762671,27.034744;120.862607,27.019485;120.884016,27.020185;120.907626,27.02584;120.942903,27.046233;120.961283,27.07007;120.962012,27.085543;120.95391,27.106827;120.92967,27.122592;120.900995,27.129736;120.833935,27.138576;120.727547,27.14715;120.68674,27.155792;120.680091,27.199882;120.679371,27.246289;120.692597,27.332719;120.701421,27.348372;120.722034,27.366349;120.755291,27.375623;121.035493,27.350133;121.079994,27.360154;121.113167,27.373127;121.174405,27.41925;121.182281,27.43261;121.191481,27.468234;121.184047,27.487098;121.165653,27.505759;121.169887,27.536286","name":"温州市","gridId":"8","txyh":0,"kdyh":0,"kdszl":"0","kdfg":0,"kdszyh":0,"channelCounts":null,"centralPoint":"120.5803537221294,27.823247672006616"},{"cityId":"578","sumConut":2417,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"119.657063,28.554024;119.696157,28.533717;119.721454,28.566207;119.74445,28.592598;119.765147,28.602747;119.749049,28.639273;119.792743,28.647389;119.81344,28.685928;119.831837,28.712288;119.874956,28.747826;119.882933,28.752576;119.890694,28.757326;119.896515,28.760999;119.899965,28.762836;119.910457,28.774551;119.914553,28.778983;119.917787,28.786201;119.921093,28.793735;119.914769,28.796521;119.915254,28.800762;119.921398,28.801538;119.935753,28.803326;119.949102,28.798467;119.956846,28.797739;119.964499,28.79698;119.970374,28.796489;119.972225,28.796331;119.974273,28.79728;119.978585,28.799512;119.985124,28.802804;119.987927,28.804165;119.998707,28.797549;120.010492,28.790111;120.015271,28.787198;120.024937,28.776783;120.032303,28.768773;120.034962,28.765955;120.043263,28.762852;120.052461,28.769612;120.057779,28.773728;120.073733,28.784682;120.092058,28.789303;120.099317,28.784096;120.10406,28.780234;120.108228,28.778904;120.115343,28.776593;120.12005,28.77444;120.124577,28.772034;120.128997,28.768456;120.133237,28.765258;120.140315,28.77558;120.138267,28.781959;120.146604,28.783985;120.15264,28.780566;120.158677,28.780946;120.16457,28.777274;120.168019,28.774361;120.171469,28.77664;120.176355,28.772841;120.17923,28.776134;120.178368,28.77968;120.181673,28.780819;120.180667,28.783605;120.187423,28.786264;120.196478,28.784998;120.201508,28.786771;120.205676,28.78981;120.208838,28.795381;120.201939,28.803231;120.199927,28.809561;120.205676,28.813739;120.215881,28.834498;120.233272,28.844749;120.240746,28.850824;120.245058,28.860188;120.255119,28.860441;120.254975,28.863984;120.261012,28.866767;120.261299,28.872335;120.259862,28.879673;120.262305,28.883847;120.262162,28.891058;120.258856,28.905604;120.261443,28.911169;120.254975,28.910157;120.250376,28.912307;120.258425,28.926851;120.253825,28.930771;120.259431,28.937599;120.262018,28.936713;120.264605,28.938989;120.262305,28.945185;120.265467,28.944679;120.270498,28.951;120.275672,28.94038;120.277397,28.929506;120.309305,28.933047;120.306718,28.924827;120.315629,28.918631;120.309305,28.907881;120.31261,28.889666;120.320084,28.880052;120.332445,28.868539;120.347537,28.85829;120.352998,28.850191;120.363634,28.839434;120.380738,28.834245;120.388787,28.830827;120.393386,28.838675;120.390799,28.844623;120.400716,28.855886;120.405172,28.854367;120.406897,28.845888;120.413796,28.84766;120.418539,28.851583;120.42745,28.832093;120.41897,28.825638;120.414514,28.812979;120.409484,28.795761;120.404022,28.787277;120.398991,28.784872;120.393099,28.784872;120.389218,28.788037;120.373983,28.772081;120.369815,28.75777;120.371396,28.75207;120.369958,28.741302;120.364065,28.734208;120.347537,28.72952;120.344375,28.726353;120.344087,28.722045;120.348974,28.724072;120.353429,28.722172;120.352711,28.718117;120.355729,28.712922;120.354723,28.70798;120.337907,28.699869;120.327558,28.684153;120.327271,28.665772;120.340781,28.653094;120.357598,28.646374;120.362916,28.624309;120.379301,28.606171;120.382894,28.582702;120.371396,28.570141;120.363778,28.576358;120.348543,28.573186;120.330433,28.577881;120.322815,28.554151;120.31376,28.556182;120.307149,28.551359;120.29177,28.537905;120.294213,28.51112;120.305424,28.508327;120.312898,28.522673;120.321809,28.51861;120.350555,28.499185;120.376714,28.498931;120.388787,28.480771;120.386056,28.458798;120.375707,28.453209;120.382463,28.436439;120.376857,28.41039;120.364065,28.418396;120.356591,28.428816;120.341069,28.428307;120.333451,28.412296;120.335751,28.399841;120.345524,28.39374;120.336326,28.374927;120.359322,28.364502;120.362484,28.345429;120.373983,28.331949;120.416526,28.303457;120.426013,28.272921;120.438373,28.242631;120.441248,28.23423;120.424,28.213351;120.430612,28.196797;120.433199,28.185081;120.418539,28.177694;120.42285,28.161135;120.390655,28.147122;120.411927,28.130813;120.414227,28.114502;120.39238,28.093854;120.365359,28.08799;120.376857,28.064278;120.378007,28.056117;120.357598,28.049231;120.351561,28.04209;120.349549,28.021173;120.352423,27.983666;120.330577,27.966821;120.318791,27.976265;120.294932,27.974989;120.277397,27.956867;120.262449,27.956101;120.250376,27.960951;120.250088,27.944358;120.23974,27.931848;120.206682,27.932869;120.175924,27.953803;120.160689,27.975244;120.0825,27.969629;120.067265,27.95074;119.997413,27.936954;119.965793,27.936444;119.957744,27.948187;119.966942,27.966056;119.949982,27.972181;119.910313,27.951251;119.88013,27.961461;119.845635,27.938997;119.806541,27.910399;119.790443,27.896097;119.778945,27.795931;119.703056,27.750928;119.647864,27.71614;119.638666,27.675199;119.521383,27.658818;119.502986,27.642434;119.468491,27.535882;119.440895,27.507177;119.401801,27.537932;119.355807,27.515379;119.325912,27.48872;119.279918,27.451796;119.263821,27.425121;119.171834,27.421017;119.102844,27.437434;119.114343,27.486669;119.059151,27.476413;118.983262,27.501025;118.962565,27.460003;118.902774,27.466157;118.852181,27.523581;118.888976,27.570728;118.905074,27.621952;118.865979,27.71;118.893575,27.71614;118.836084,27.812291;118.826885,27.842959;118.808488,27.922656;118.737198,27.957377;118.728,28.034948;118.716501,28.071673;118.767094,28.110423;118.810787,28.165466;118.773993,28.177694;118.757895,28.165466;118.796989,28.218443;118.768531,28.24925;118.734036,28.260195;118.718226,28.310581;118.694367,28.31923;118.719376,28.343395;118.734899,28.354585;118.737773,28.370605;118.748984,28.4095;118.721388,28.411025;118.7234,28.428053;118.7234,28.498169;118.749271,28.526608;118.792103,28.537271;118.832347,28.556562;118.857643,28.546663;118.878915,28.525592;118.903061,28.558847;118.909673,28.597672;118.935831,28.648149;118.961415,28.65525;118.97665,28.660067;118.987286,28.674519;119.037017,28.71685;119.070074,28.740669;119.106581,28.755363;119.154299,28.747763;119.195981,28.782972;119.248586,28.771828;119.273594,28.813865;119.325049,28.818676;119.336835,28.793102;119.359257,28.769042;119.375354,28.791836;119.394902,28.791329;119.415598,28.774614;119.423935,28.757136;119.47424,28.773601;119.48775,28.745483;119.47194,28.739655;119.472228,28.712035;119.468491,28.677815;119.496949,28.653728;119.501836,28.637752;119.529719,28.647389;119.525695,28.637498;119.516784,28.628621;119.523395,28.620504;119.525695,28.613655;119.510172,28.59412;119.50787,28.558429;119.509739,28.561221;119.514338,28.562109;119.518075,28.560459;119.520231,28.558937;119.522531,28.558937;119.524543,28.557667;119.526555,28.558048;119.530005,28.554241;119.533238,28.555891;119.535107,28.554241;119.533598,28.55183;119.533813,28.549989;119.534819,28.549989;119.536904,28.547451;119.535107,28.545484;119.536688,28.542184;119.538125,28.540026;119.536832,28.539328;119.534532,28.542628;119.535035,28.536599;119.536185,28.537995;119.538556,28.538947;119.539347,28.536218;119.541215,28.537551;119.541215,28.534124;119.542796,28.531141;119.545096,28.53387;119.547324,28.532093;119.54718,28.531141;119.549552,28.529617;119.550989,28.529935;119.551492,28.533235;119.554654,28.535901;119.555085,28.534822;119.552498,28.532347;119.55336,28.530887;119.55487,28.531014;119.556307,28.533045;119.560906,28.533616;119.564859,28.533108;119.569243,28.533045;119.570895,28.531839;119.57377,28.535266;119.577579,28.536028;119.579807,28.536726;119.583687,28.532981;119.58879,28.538693;119.591233,28.538376;119.593173,28.536345;119.591233,28.532791;119.59188,28.531775;119.593605,28.534568;119.595257,28.531522;119.597054,28.530506;119.59806,28.527333;119.598707,28.526507;119.600288,28.527142;119.600504,28.525619;119.601582,28.526063;119.603163,28.529491;119.604672,28.528285;119.604097,28.531204;119.607403,28.530506;119.607331,28.529364;119.608768,28.526698;119.610852,28.52784;119.613942,28.527586;119.616242,28.52784;119.636366,28.52153;119.654763,28.537779","name":"丽水市","gridId":"9","txyh":1399111,"kdyh":398252,"kdszl":"0.1501","kdfg":1229077,"kdszyh":184486,"channelCounts":null,"centralPoint":"119.51684742517934,28.20038742729589"},{"cityId":"579","sumConut":2884,"contractedCount":6,"progress":0.002080443828016643550624133148404993065187,"progressPresent":"0.21%","location":"119.93724,28.802509;119.929523,28.80779;119.922908,28.80653;119.931168,28.800423;119.927492,28.794035;119.932948,28.786056;119.923089,28.785958;119.921789,28.780208;119.908561,28.76998;119.910326,28.762134;119.896475,28.752743;119.887728,28.759015;119.878942,28.749443;119.882594,28.7439;119.878373,28.73802;119.881408,28.731087;119.877103,28.730537;119.873349,28.722448;119.870187,28.725944;119.855273,28.720622;119.850848,28.723692;119.844618,28.716081;119.838119,28.716338;119.841852,28.709599;119.839327,28.702199;119.829908,28.696417;119.820696,28.695336;119.826862,28.694049;119.814791,28.687865;119.818345,28.686101;119.821556,28.688665;119.822709,28.684916;119.818,28.665885;119.820193,28.657664;119.815855,28.655898;119.815198,28.64986;119.805935,28.643876;119.804169,28.637976;119.799874,28.641006;119.800346,28.636496;119.796987,28.639106;119.78405,28.63738;119.770888,28.644708;119.76072,28.639568;119.764748,28.631845;119.768493,28.63101;119.766875,28.625977;119.770919,28.623441;119.770188,28.619672;119.779436,28.614083;119.77607,28.605617;119.783522,28.589479;119.776792,28.588855;119.771261,28.593635;119.756774,28.597098;119.757794,28.579437;119.752075,28.576599;119.747435,28.583844;119.742574,28.572653;119.736976,28.571501;119.742378,28.567106;119.736394,28.566068;119.730467,28.570936;119.727841,28.569661;119.724799,28.56585;119.726548,28.558057;119.715896,28.548948;119.714537,28.537057;119.709061,28.535228;119.711879,28.529005;119.696854,28.536172;119.684022,28.529985;119.684123,28.534505;119.678797,28.533617;119.672568,28.540105;119.673282,28.552188;119.669352,28.550092;119.667035,28.552171;119.661869,28.550292;119.660097,28.544979;119.655371,28.545949;119.655456,28.532354;119.650024,28.532423;119.652706,28.53656;119.649814,28.53944;119.649697,28.535828;119.640535,28.530533;119.638971,28.517028;119.63553,28.524473;119.626609,28.527642;119.621928,28.533431;119.610743,28.536208;119.608325,28.532434;119.604627,28.532839;119.599779,28.539346;119.597404,28.538445;119.596003,28.544364;119.590678,28.539161;119.584106,28.54216;119.577147,28.537624;119.56584,28.539037;119.560356,28.536656;119.559534,28.541102;119.554614,28.535371;119.54448,28.544158;119.540749,28.542668;119.540095,28.547741;119.544096,28.546221;119.540694,28.560405;119.520771,28.567688;119.503579,28.55573;119.49743,28.572097;119.504492,28.580863;119.505362,28.5926;119.523715,28.613656;119.522613,28.618126;119.518559,28.613178;119.51482,28.614825;119.515989,28.624793;119.504936,28.626477;119.515574,28.629298;119.512085,28.633789;119.51926,28.636005;119.527618,28.644715;119.511106,28.641994;119.500739,28.636511;119.500594,28.632233;119.49692,28.630748;119.492219,28.636;119.49302,28.642373;119.488603,28.645533;119.473938,28.638454;119.468186,28.639039;119.461463,28.654312;119.470783,28.658995;119.482268,28.659974;119.486986,28.66511;119.48234,28.670065;119.469912,28.671577;119.466525,28.687576;119.472717,28.712585;119.470982,28.718112;119.46599,28.720026;119.470843,28.726976;119.467244,28.746809;119.475996,28.746232;119.475845,28.750927;119.482273,28.751862;119.478165,28.761369;119.480645,28.771714;119.47202,28.773501;119.469256,28.769436;119.440728,28.76352;119.429515,28.756024;119.424339,28.756386;119.419171,28.771014;119.412976,28.772366;119.394217,28.79405;119.385309,28.794159;119.378209,28.792149;119.374617,28.780126;119.366077,28.776358;119.364039,28.766594;119.356922,28.763127;119.348187,28.764763;119.341767,28.780797;119.33123,28.788639;119.326785,28.810547;119.337021,28.814874;119.34567,28.828933;119.3518,28.832773;119.341846,28.842788;119.34414,28.847985;119.339416,28.851548;119.332844,28.853052;119.317356,28.848757;119.320656,28.866359;119.316345,28.868626;119.319402,28.872946;119.321496,28.870638;119.325385,28.873566;119.328574,28.870964;119.3321,28.873503;119.340803,28.871705;119.344098,28.880803;119.337898,28.887656;119.344656,28.886645;119.347333,28.895467;119.351443,28.895449;119.350695,28.906978;119.339526,28.913556;119.335929,28.924648;119.330782,28.926636;119.334062,28.931482;119.333446,28.940071;119.323313,28.946743;119.323322,28.951246;119.320295,28.95079;119.322677,28.953886;119.320246,28.960701;119.329988,28.973277;119.329134,28.979117;119.334887,28.992001;119.32885,28.994767;119.331522,29.001928;119.326763,29.00517;119.329572,29.023152;119.334185,29.025705;119.331709,29.044278;119.339082,29.039913;119.340579,29.048466;119.331226,29.063979;119.335664,29.073535;119.343002,29.079726;119.331055,29.098956;119.320903,29.092244;119.312655,29.090752;119.314112,29.093628;119.309611,29.096073;119.306556,29.093786;119.307421,29.105237;119.297682,29.109702;119.29571,29.114063;119.292013,29.11335;119.292419,29.121223;119.286216,29.121261;119.28416,29.124811;119.276946,29.123217;119.273445,29.140305;119.262486,29.142181;119.258891,29.140136;119.255286,29.148711;119.258145,29.159214;119.249274,29.16748;119.248224,29.176411;119.252076,29.187238;119.248196,29.191029;119.249227,29.195134;119.241824,29.197923;119.23762,29.194523;119.2358,29.197708;119.228147,29.198964;119.230136,29.202174;119.240611,29.202159;119.243707,29.20781;119.239785,29.214937;119.243088,29.221423;119.240403,29.228226;119.251098,29.233581;119.266518,29.254852;119.277099,29.257183;119.292291,29.2743;119.289854,29.28364;119.2952,29.287124;119.291812,29.292669;119.302146,29.289486;119.302877,29.277447;119.305599,29.28416;119.307912,29.279359;119.310934,29.27989;119.314817,29.288196;119.319951,29.289165;119.325269,29.285271;119.322575,29.290974;119.32721,29.289246;119.326737,29.291834;119.329963,29.288414;119.333521,29.300748;119.338069,29.293724;119.332803,29.308036;119.334472,29.316455;119.338919,29.315675;119.352958,29.323547;119.358643,29.32003;119.360265,29.322201;119.352556,29.329533;119.354332,29.346864;119.346122,29.35058;119.347043,29.355444;119.340872,29.355369;119.344455,29.37822;119.353425,29.395541;119.349022,29.397519;119.344309,29.394833;119.342342,29.39717;119.34927,29.400068;119.337002,29.404332;119.339884,29.404826;119.342088,29.412957;119.361857,29.415692;119.368572,29.422637;119.376331,29.422307;119.389446,29.439029;119.397078,29.434637;119.400739,29.420968;119.411632,29.41198;119.434565,29.411598;119.437744,29.418922;119.430557,29.415969;119.430503,29.420454;119.437195,29.424027;119.437957,29.428515;119.445825,29.430269;119.450643,29.415806;119.461226,29.414886;119.460692,29.409329;119.471342,29.404122;119.466668,29.400912;119.47062,29.400643;119.467517,29.397472;119.474829,29.394534;119.475203,29.387389;119.471349,29.386864;119.469874,29.380006;119.466015,29.377979;119.465848,29.367945;119.473754,29.363819;119.473022,29.359066;119.481137,29.360858;119.486684,29.356993;119.484051,29.351226;119.488581,29.34578;119.485363,29.342283;119.496666,29.342099;119.491453,29.338507;119.497955,29.3357;119.50068,29.34064;119.504074,29.337976;119.504654,29.341129;119.513947,29.34359;119.517454,29.339089;119.532911,29.3608;119.531046,29.371774;119.543448,29.37921;119.558386,29.372993;119.56742,29.378577;119.58075,29.377673;119.590837,29.384559;119.599825,29.383104;119.610626,29.374729;119.621655,29.372838;119.627494,29.377213;119.625846,29.387334;119.613907,29.393622;119.612818,29.397472;119.617902,29.397706;119.631556,29.412148;119.628674,29.415147;119.633752,29.425415;119.645749,29.428812;119.64766,29.435862;119.639907,29.436032;119.641493,29.440708;119.650538,29.437809;119.64904,29.442577;119.653965,29.443353;119.655693,29.434655;119.663454,29.430404;119.67571,29.436757;119.686182,29.428159;119.684394,29.421957;119.687946,29.420936;119.691555,29.423286;119.688262,29.426168;119.696186,29.425257;119.696718,29.428561;119.689127,29.431392;119.692429,29.433666;119.688747,29.434607;119.696868,29.437229;119.699215,29.446277;119.702515,29.440573;119.708175,29.438934;119.714242,29.438389;119.711615,29.441612;119.717488,29.442159;119.717051,29.445628;119.711478,29.447185;119.719822,29.450922;119.724742,29.459876;119.71483,29.469366;119.715443,29.482143;119.711187,29.485124;119.712967,29.488786;119.709477,29.489234;119.709809,29.494915;119.714953,29.50141;119.720486,29.496715;119.718116,29.494676;119.720324,29.491182;119.726166,29.508775;119.720693,29.510928;119.730515,29.512417;119.734602,29.516335;119.730023,29.52119;119.72002,29.523174;119.721335,29.526311;119.72778,29.523249;119.731499,29.527865;119.730755,29.52312;119.734008,29.52263;119.737224,29.526754;119.740752,29.523802;119.741427,29.527712;119.735337,29.531252;119.734417,29.543486;119.727815,29.539438;119.729334,29.542655;119.72481,29.543735;119.724288,29.54724;119.730597,29.550495;119.724193,29.557555;119.7352,29.552286;119.731117,29.559155;119.738497,29.555082;119.75118,29.558044;119.751225,29.562955;119.756302,29.567539;119.762468,29.564638;119.768371,29.56649;119.771334,29.561263;119.769718,29.571627;119.767101,29.567866;119.758124,29.570295;119.762911,29.574353;119.758262,29.579649;119.763959,29.58474;119.77653,29.587317;119.772176,29.591871;119.773738,29.598678;119.767786,29.600487;119.76621,29.610147;119.768228,29.612796;119.770986,29.609079;119.772407,29.614819;119.776009,29.612565;119.771715,29.602886;119.777709,29.604264;119.779498,29.612116;119.785512,29.613332;119.786316,29.623083;119.776323,29.628471;119.774866,29.637102;119.783921,29.645165;119.782003,29.64814;119.78924,29.660285;119.797044,29.658724;119.800153,29.662901;119.80384,29.662054;119.822136,29.67797;119.831176,29.677471;119.840401,29.685623;119.860529,29.674846;119.866127,29.677632;119.887406,29.673986;119.890375,29.679903;119.897822,29.683289;119.893794,29.668873;119.904066,29.667158;119.916736,29.669289;119.919051,29.672691;119.928117,29.670172;119.930377,29.676012;119.93409,29.678588;119.933129,29.674676;119.941836,29.683125;119.958664,29.687066;119.956304,29.682344;119.962094,29.685282;119.969228,29.677833;119.976415,29.676571;119.974124,29.680326;119.977653,29.682117;119.978599,29.677598;119.995288,29.667668;119.996051,29.661986;120.010136,29.661609;120.025953,29.653789;120.03568,29.660367;120.034343,29.674418;120.040156,29.67416;120.03855,29.67155;120.046768,29.65983;120.030953,29.654835;120.030274,29.650651;120.038851,29.642413;120.049663,29.638174;120.05146,29.633206;120.047188,29.62497;120.023616,29.623931;120.022483,29.615446;120.011733,29.597171;120.015481,29.591803;120.011489,29.588555;120.011845,29.580451;120.036699,29.571598;120.04895,29.576584;120.053855,29.565921;120.06117,29.563957;120.057648,29.554844;120.063544,29.551062;120.063059,29.546954;120.073841,29.546306;120.080484,29.540414;120.085297,29.54317;120.098835,29.540507;120.092488,29.527555;120.093233,29.519961;120.085185,29.522014;120.079335,29.517717;120.084005,29.509835;120.098759,29.505143;120.105945,29.512768;120.110905,29.512809;120.117754,29.506143;120.114475,29.504967;120.116989,29.502608;120.111754,29.49439;120.126833,29.496805;120.125919,29.501546;120.136468,29.501157;120.137335,29.507497;120.143308,29.509724;120.146405,29.515249;120.155515,29.514028;120.163765,29.523152;120.171005,29.520229;120.187485,29.532142;120.187276,29.540749;120.193812,29.556688;120.202334,29.562129;120.205867,29.557994;120.219368,29.557142;120.215106,29.52909;120.22661,29.529668;120.229068,29.522396;120.250132,29.518453;120.255476,29.510931;120.253025,29.506049;120.258349,29.501083;120.26167,29.50397;120.270778,29.502252;120.273383,29.505645;120.282232,29.499211;120.278332,29.505946;120.284769,29.502161;120.292654,29.490492;120.274896,29.487519;120.269068,29.478556;120.271423,29.468021;120.268968,29.465114;120.279021,29.461619;120.279552,29.456272;120.289444,29.447598;120.285662,29.439312;120.286741,29.423129;120.267123,29.404634;120.267228,29.395989;120.27724,29.375108;120.284356,29.368124;120.291776,29.366551;120.296074,29.360455;120.3055,29.361596;120.302289,29.367;120.313553,29.369978;120.319939,29.382879;120.331605,29.386775;120.338846,29.40804;120.343162,29.41197;120.341347,29.414346;120.344842,29.415254;120.342517,29.416983;120.354913,29.416684;120.36227,29.420917;120.375553,29.421709;120.376474,29.429058;120.368933,29.440213;120.377423,29.452616;120.385292,29.451854;120.384932,29.457882;120.390255,29.461352;120.417186,29.455087;120.431951,29.483043;120.462263,29.487941;120.468115,29.494904;120.4738,29.495917;120.474741,29.501294;120.485294,29.495591;120.486506,29.490501;120.494407,29.492695;120.494306,29.485953;120.497326,29.486226;120.502336,29.478969;120.500311,29.471471;120.508532,29.475173;120.515946,29.474579;120.524472,29.46722;120.527506,29.461274;120.518754,29.455841;120.517532,29.448403;120.520403,29.4471;120.51597,29.441025;120.517283,29.429191;120.523339,29.428892;120.518251,29.4236;120.52345,29.413008;120.521576,29.410441;120.533856,29.403689;120.535174,29.406437;120.545846,29.394768;120.554634,29.397277;120.561086,29.388848;120.564174,29.39044;120.563967,29.382163;120.558666,29.377738;120.56131,29.371423;120.567194,29.369148;120.574919,29.372355;120.57862,29.37044;120.574075,29.368895;120.583733,29.36482;120.576578,29.354222;120.579425,29.344603;120.587736,29.346277;120.585503,29.349624;120.589375,29.354137;120.596066,29.354338;120.603642,29.341817;120.609469,29.339634;120.618308,29.344444;120.629339,29.342206;120.638461,29.337095;120.637198,29.329585;120.643374,29.328122;120.646744,29.335507;120.650739,29.333368;120.659897,29.342397;120.660887,29.336701;120.66876,29.331268;120.678382,29.333246;120.683718,29.341721;120.692901,29.347079;120.704458,29.346211;120.707127,29.348473;120.711458,29.343113;120.703999,29.32444;120.710119,29.325566;120.715862,29.310305;120.724437,29.311165;120.725258,29.316573;120.730328,29.316902;120.735474,29.322066;120.741874,29.319095;120.742284,29.315102;120.745686,29.317198;120.749621,29.315336;120.756833,29.320436;120.757377,29.325463;120.777875,29.312564;120.781021,29.305826;120.777091,29.29992;120.780394,29.296045;120.769685,29.300729;120.765134,29.294734;120.768948,29.294231;120.769127,29.290784;120.762195,29.284728;120.785116,29.28353;120.781367,29.277518;120.777144,29.277032;120.782243,29.273488;120.777543,29.271153;120.775765,29.264565;120.780686,29.260506;120.780023,29.25326;120.783715,29.24761;120.7799,29.231766;120.790088,29.226124;120.788834,29.221456;120.781203,29.219561;120.783934,29.215324;120.778752,29.212628;120.783352,29.204449;120.778667,29.200655;120.773442,29.206453;120.770846,29.200904;120.767528,29.20366;120.770778,29.197653;120.762388,29.193843;120.761032,29.185615;120.745875,29.174355;120.729844,29.168992;120.732678,29.165476;120.726435,29.156155;120.719655,29.154907;120.718196,29.149924;120.72285,29.146132;120.719954,29.143692;120.724963,29.142216;120.726207,29.136208;120.734643,29.139835;120.735939,29.136468;120.741516,29.136903;120.743224,29.13261;120.750084,29.1327;120.753272,29.128459;120.751325,29.123707;120.742395,29.119319;120.735081,29.120648;120.73038,29.126075;120.725431,29.117561;120.728649,29.114822;120.716429,29.104784;120.701825,29.098615;120.700289,29.093756;120.711434,29.080366;120.708772,29.062042;120.70228,29.060529;120.703024,29.056135;120.696286,29.057795;120.707225,29.050385;120.703998,29.045118;120.69828,29.047176;120.702349,29.034311;120.71228,29.027403;120.71537,29.030192;120.713361,29.038716;120.721457,29.043327;120.721643,29.034824;120.724373,29.036158;120.726069,29.031426;120.731166,29.031637;120.7265,29.017472;120.732883,29.019711;120.735586,29.013601;120.727561,29.001;120.735381,28.989544;120.725637,28.985366;120.722586,28.97915;120.720281,28.980847;120.71585,28.977973;120.710283,28.981304;120.704181,28.9781;120.703796,28.985437;120.699925,28.98619;120.680936,28.979732;120.68021,28.962866;120.667072,28.944648;120.671322,28.92236;120.655389,28.906693;120.645169,28.90676;120.645685,28.901913;120.62589,28.90224;120.611966,28.897344;120.596164,28.88654;120.5884,28.875989;120.568101,28.866795;120.559937,28.867406;120.551871,28.873338;120.541085,28.87135;120.538638,28.879737;120.543194,28.882996;120.538286,28.885901;120.536442,28.883325;120.530225,28.884679;120.525004,28.889076;120.526916,28.893722;120.521502,28.89634;120.517438,28.889748;120.51774,28.880257;120.502,28.875249;120.509299,28.862633;120.503599,28.85996;120.504872,28.85363;120.493518,28.851967;120.494782,28.84692;120.489682,28.842674;120.491721,28.838872;120.487893,28.833945;120.483563,28.835836;120.480846,28.845445;120.474288,28.847817;120.469908,28.845549;120.45056,28.847106;120.432572,28.836193;120.424894,28.855815;120.421022,28.851701;120.41317,28.850987;120.407498,28.861347;120.398355,28.850722;120.400876,28.844897;120.396816,28.836817;120.39159,28.835249;120.386801,28.839649;120.380708,28.838328;120.374376,28.843373;120.363681,28.845065;120.358386,28.855298;120.354085,28.856143;120.353227,28.863899;120.343529,28.866187;120.340833,28.87151;120.322829,28.881614;120.325103,28.884582;120.322385,28.891134;120.317652,28.894211;120.31396,28.892798;120.309304,28.897458;120.313913,28.90002;120.314412,28.912511;120.320842,28.920648;120.311725,28.931385;120.313988,28.937976;120.283596,28.936258;120.277145,28.955454;120.269867,28.950078;120.271288,28.945264;120.260712,28.937163;120.265078,28.931546;120.256666,28.918806;120.268524,28.916119;120.265354,28.909909;120.268897,28.89454;120.268178,28.873629;120.261018,28.869602;120.260959,28.865771;120.252144,28.866215;120.250155,28.856495;120.236006,28.848216;120.234385,28.841062;120.231081,28.846454;120.227487,28.83925;120.222738,28.840058;120.218775,28.83605;120.218345,28.827176;120.206509,28.813468;120.209304,28.809865;120.207027,28.806116;120.21578,28.800751;120.213328,28.794266;120.20546,28.789451;120.188998,28.789507;120.183601,28.778762;120.172435,28.779803;120.15307,28.789421;120.1459,28.788662;120.144131,28.785443;120.147639,28.781008;120.140644,28.765192;120.128822,28.765909;120.116495,28.769333;120.115198,28.774532;120.102508,28.774665;120.095852,28.783172;120.097622,28.791734;120.092659,28.789328;120.091928,28.793705;120.066297,28.77744;120.064722,28.77349;120.035737,28.763889;120.031971,28.771068;120.01767,28.778065;120.017052,28.787679;120.010627,28.787866;119.989625,28.798856;119.988934,28.803294;119.979378,28.801643;119.973841,28.791596;119.966789,28.79504;119.957224,28.793019;119.950903,28.7983;119.93724,28.802509","name":"金华市","gridId":"10","txyh":4094568,"kdyh":1123618,"kdszl":"0.383","kdfg":2656542,"kdszyh":1017522,"channelCounts":null,"centralPoint":"119.96296469938616,29.12078138722642"},{"cityId":"580","sumConut":210,"contractedCount":0,"progress":0,"progressPresent":"0.00%","location":"121.745791,30.081269;121.846977,29.972704;121.881471,29.959688;121.906768,29.965696;121.944712,29.988221;121.969434,30.009239;121.995305,29.979712;122.018027,29.95548;122.026651,29.939457;122.057409,29.929192;122.095915,29.925389;122.134448,29.928941;122.16203,29.930397;122.202849,29.922384;122.220097,29.886317;122.199183,29.852181;122.01866,29.769952;122.001412,29.727808;122.046256,29.675605;122.143991,29.610313;122.281971,29.582174;122.388905,29.706729;122.487791,29.801046;122.542983,29.919317;122.532634,29.99942;122.483191,30.065456;122.546432,30.14444;122.686711,30.132446;122.793646,30.192399;122.785597,30.261299;122.705109,30.40593;122.594725,30.565273;122.656816,30.632913;122.860336,30.666716;122.892531,30.740865;122.867235,30.809746;122.723506,30.918861;122.607373,30.921835;122.283121,30.746203;122.032458,30.705474;121.964618,30.660751;121.974966,30.501567;121.826638,30.336135;121.647481,30.18372","name":"舟山市","gridId":"24","txyh":786414,"kdyh":248112,"kdszl":"0.2958","kdfg":274772,"kdszyh":81278,"channelCounts":null,"centralPoint":"122.29897515941954,30.297248097116313"}],"centralPoint":""}
  }
  );
}
if(mockConst.isStatic.contract.manage.getChannel) {
  Mock.mock(mockConst.getRegExpUrl(api.url.contract.manage.getChannel), 'get', {
    "status": 0,
    "msg": "成功",
    "obj":{

    }
  });
}
if(mockConst.isStatic.base.contractArea.getSpot) {
  Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.getSpot), 'get', {
    "status": 0,
      "msg": null,
      "obj": [
      {
        "rankId": 2418,
        "highValueCommunity": "望江新园二园",
        "sceneId": "104015",
        "sceneName": "望江新园二园",
        "households": "958",
        "poiId": "104015",
        "poiName": "望江新园二园",
        "lng": 120,
        "lat": 30,
        "poiCentLng": 120,
        "poiCentLat": 30,
        "gridLngCent": 120,
        "gridLatCent": 30,
        "regionId2": null,
        "countyId": "5711",
        "areaId": "40021385",
        "gridId": "571144",
        "regionId6": null,
        "pCity": "571",
        "pCounty": "5711",
        "txYh": null,
        "kdYh": null,
        "kdSzl": null,
        "kdFg": null,
        "kdSzyh": null
      },
      {
        "rankId": 2624,
        "highValueCommunity": "上城区博莱精品酒店公寓",
        "sceneId": "560320",
        "sceneName": "博莱精品酒店",
        "households": "70",
        "poiId": "560320",
        "poiName": "博莱精品酒店",
        "lng": 120,
        "lat": 30,
        "poiCentLng": 120,
        "poiCentLat": 30,
        "gridLngCent": 120,
        "gridLatCent": 30,
        "regionId2": null,
        "countyId": "5711",
        "areaId": "40021385",
        "gridId": "571154",
        "regionId6": null,
        "pCity": "571",
        "pCounty": "5711",
        "txYh": null,
        "kdYh": null,
        "kdSzl": null,
        "kdFg": null,
        "kdSzyh": null
      }
    ]
  });
}
if(mockConst.isStatic.base.contractArea.getBlock) {
  Mock.mock(mockConst.getRegExpUrl(api.url.base.contractArea.getBlock), 'get',
    {"status":0,"msg":null,"obj":{"pageIndex":1,"pageSize":10,"total":10,"list":[{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001819","REGION_NAME_5":"奔跑队1","REGION_ID_6":"45379","REGION_NAME_6":"王纸纺村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"69","KD_YH":"49","KD_SZL":".0909","KD_FG":"308","KD_SZYH":"28","AREA_ID":"45379","AREA_NAME":"王纸纺村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001819","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.761577,29.472007;119.761217,29.472109;119.761182,29.471276;119.761119,29.468886;119.759376,29.464507;119.762248,29.463221;119.764404,29.462152;119.762751,29.460328;119.762535,29.458818;119.763613,29.457246;119.764188,29.454289;119.767853,29.451396;119.768787,29.449509;119.772165,29.449383;119.77468,29.44737;119.778777,29.444665;119.780501,29.441898;119.780789,29.44108;119.787688,29.44303;119.791281,29.442841;119.792143,29.441583;119.791856,29.445735;119.789556,29.45039;119.786969,29.453786;119.779208,29.458378;119.775543,29.462592;119.775429,29.465812;119.777037,29.46799;119.77727,29.468296;119.773632,29.468328;119.76809,29.470568;119.764757,29.471512","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":1,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001819","REGION_NAME_5":"奔跑队1","REGION_ID_6":"52943","REGION_NAME_6":"童坞村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"66","KD_YH":"11","KD_SZL":".0264","KD_FG":"455","KD_SZYH":"12","AREA_ID":"52943","AREA_NAME":"童坞村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001819","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.744522,29.493037;119.747827,29.494861;119.751852,29.495301;119.755661,29.491591;119.759685,29.491088;119.759972,29.493415;119.760979,29.494861;119.762703,29.494924;119.763566,29.494295;119.766297,29.492031;119.770896,29.492534;119.774992,29.481216;119.781244,29.476814;119.782035,29.473984;119.78261,29.473167;119.780598,29.472475;119.779448,29.471909;119.777435,29.468262;119.773627,29.468262;119.767734,29.470651;119.765075,29.471532;119.761266,29.471972;119.761122,29.469016;119.759398,29.464551;119.755229,29.465872;119.752355,29.467884;119.74524,29.470085;119.743875,29.470966;119.742653,29.473104;119.744737,29.48675","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":2,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001819","REGION_NAME_5":"奔跑队1","REGION_ID_6":"52944","REGION_NAME_6":"塘波村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"136","KD_YH":"60","KD_SZL":".1792","KD_FG":"318","KD_SZYH":"57","AREA_ID":"52944","AREA_NAME":"塘波村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001819","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.739599,29.458387;119.739635,29.458985;119.740282,29.459111;119.745348,29.459173;119.755158,29.457255;119.759218,29.456909;119.762811,29.454708;119.764248,29.45433;119.767267,29.451751;119.767878,29.451405;119.768812,29.449456;119.768452,29.4476;119.76874,29.446436;119.764033,29.445713;119.75814,29.443794;119.749121,29.442284;119.746785,29.446153;119.740892,29.446468;119.744593,29.448921;119.743659,29.450682","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":3,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44134","REGION_NAME_6":"上赵村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"2","KD_YH":"74","KD_SZL":".3245","KD_FG":"188","KD_SZYH":"61","AREA_ID":"44134","AREA_NAME":"上赵村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.828337,29.469896;119.82813,29.469157;119.825669,29.468505;119.825346,29.467361;119.825921,29.464845;119.826316,29.462109;119.826711,29.461154;119.82743,29.459845;119.82973,29.459153;119.831383,29.458744;119.833179,29.458713;119.836713,29.455949;119.835689,29.458906;119.835551,29.462172;119.834222,29.463084;119.831984,29.465635;119.828822,29.466225;119.829064,29.468363;119.828741,29.469063","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":4,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44274","REGION_NAME_6":"马桥村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"110","KD_YH":"87","KD_SZL":".9344","KD_FG":"61","KD_SZYH":"57","AREA_ID":"44274","AREA_NAME":"马桥村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.806813,29.450583;119.81259,29.451322;119.815742,29.451417;119.81612,29.451165;119.816245,29.451307;119.816245,29.451417;119.816928,29.451338;119.81719,29.4439;119.81719,29.441132;119.820064,29.441006;119.821502,29.440251;119.828113,29.441132;119.830439,29.441855;119.829882,29.44;119.829774,29.437232;119.827654,29.434605;119.824186,29.433001;119.823468,29.432214;119.820521,29.431947;119.818653,29.430767;119.816389,29.4305;119.813389,29.432057;119.812652,29.432796;119.812239,29.432985;119.809544,29.433614;119.810622,29.435234;119.807352,29.439575;119.806238,29.440943;119.8087,29.443947;119.808628,29.447139;119.807101,29.450269","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":5,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44320","REGION_NAME_6":"寿溪村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"485","KD_YH":"148","KD_SZL":".7043","KD_FG":"186","KD_SZYH":"131","AREA_ID":"44320","AREA_NAME":"寿溪村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.814072,29.451338;119.812491,29.451275;119.809508,29.450866;119.806769,29.450568;119.799339,29.455175;119.793375,29.45876;119.788919,29.463163;119.786296,29.46593;119.783601,29.471622;119.781876,29.474326;119.781265,29.476747;119.77778,29.479294;119.774905,29.481337;119.772462,29.488097;119.775983,29.488789;119.776989,29.488977;119.778167,29.489182;119.79139,29.48981;119.796708,29.483523;119.801595,29.47736;119.805907,29.470317;119.808925,29.461134;119.812231,29.454593;119.814818,29.452077;119.815724,29.451401","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":6,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44329","REGION_NAME_6":"前吴村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"121","KD_YH":"21","KD_SZL":".6531","KD_FG":"49","KD_SZYH":"32","AREA_ID":"44329","AREA_NAME":"前吴村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.821972,29.451672;119.822367,29.451405;119.822382,29.451432;119.822978,29.451169;119.825008,29.448999;119.826913,29.446939;119.830219,29.446436;119.833183,29.44609;119.83665,29.446939;119.837118,29.448842;119.837369,29.449848;119.838052,29.452286;119.839669,29.454094;119.836579,29.453638;119.835267,29.453418;119.83259,29.452977;119.82655,29.45203;119.826571,29.452034;119.826571,29.452034;119.825637,29.452065;119.824703,29.452097;119.823805,29.452097;119.821433,29.452191;119.821074,29.453119;119.82014,29.452569;119.821379,29.451971","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":7,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44351","REGION_NAME_6":"民生村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"131","KD_YH":"29","KD_SZL":".3929","KD_FG":"84","KD_SZYH":"33","AREA_ID":"44351","AREA_NAME":"民生村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.848032,29.448527;119.851841,29.448213;119.856225,29.448622;119.857698,29.453528;119.860069,29.451892;119.861291,29.448747;119.862549,29.446137;119.862513,29.445099;119.861147,29.443369;119.861542,29.441073;119.855793,29.437613;119.85565,29.434876;119.861327,29.432737;119.866429,29.428176;119.867364,29.422639;119.871424,29.420311;119.873903,29.416914;119.870885,29.415089;119.863267,29.417291;119.855075,29.41943;119.850727,29.420563;119.847709,29.421475;119.846092,29.423363;119.84457,29.42553;119.843109,29.427924;119.842355,29.430881;119.841241,29.434184;119.84142,29.437644;119.841636,29.443369;119.838438,29.445728;119.836677,29.446986;119.838043,29.452238;119.838043,29.452333;119.838079,29.452333;119.839624,29.454031;119.83966,29.454062;119.839696,29.454094;119.843325,29.455163;119.845193,29.454912;119.846415,29.45227;119.84717,29.450509","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":8,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44362","REGION_NAME_6":"罗源村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"223","KD_YH":"71","KD_SZL":".4649","KD_FG":"114","KD_SZYH":"53","AREA_ID":"44362","AREA_NAME":"罗源村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.846078,29.423359;119.843133,29.42792;119.841264,29.434338;119.841695,29.443397;119.836665,29.446919;119.833215,29.446039;119.830772,29.442767;119.82991,29.44;119.829766,29.437232;119.82761,29.434589;119.824161,29.432954;119.823495,29.432246;119.82283,29.43212;119.822848,29.431444;119.822471,29.428896;119.820333,29.42759;119.819937,29.425199;119.82089,29.421739;119.824249,29.419584;119.828741,29.418546;119.828867,29.416831;119.830987,29.416784;119.830753,29.415069;119.830052,29.413858;119.833053,29.412709;119.834813,29.415211;119.835029,29.412631;119.838856,29.414094;119.840634,29.414802;119.845719,29.419442;119.847893,29.421393;119.847713,29.421487","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":9,"pid":"","areaLevel":1},{"REGION_ID_1":"1","REGION_NAME_1":"浙江省","REGION_ID_2":"10","REGION_NAME_2":"金华市","COUNTY_ID":"5797","REGION_ID_3":"82","REGION_NAME_3":"浦江","REGION_ID_4":"51194","REGION_NAME_4":"浦阳分局","REGION_ID_5":"1000000000001845","REGION_NAME_5":"胜羽队1","REGION_ID_6":"44196","REGION_NAME_6":"塘岭金村","P_CITY":"579","P_COUNTY":"5797","TX_YH":"1223","KD_YH":"265","KD_SZL":".641","KD_FG":"376","KD_SZYH":"241","AREA_ID":"44196","AREA_NAME":"塘岭金村","AREA_LEVEL":"6","AREA_TYPE":null,"AREA_PID":"1000000000001845","CREATE_TIME":"2018-10-10 17:34:32","CREATOR":null,"AREA_CODE":"579","MAP_LEVEL":null,"AREA_LOCATION":"119.835533,29.462219;119.834168,29.463163;119.832012,29.465616;119.82885,29.466213;119.829064,29.468387;119.828346,29.469959;119.828202,29.472569;119.82698,29.474518;119.823387,29.476279;119.82159,29.477914;119.81947,29.481121;119.815015,29.48656;119.811565,29.494043;119.80887,29.495332;119.810918,29.495049;119.823638,29.494829;119.823998,29.494829;119.822615,29.489685;119.826424,29.48129;119.835335,29.476511;119.836449,29.474499;119.837797,29.474137;119.83945,29.473194;119.841821,29.471119;119.842612,29.469766;119.843258,29.468226;119.844696,29.464987;119.844983,29.463226;119.845235,29.460207;119.845522,29.459075;119.843366,29.455238;119.839593,29.454106;119.836719,29.455993;119.835713,29.458917;119.835533,29.462156;119.835569,29.462062","LAST_UPDATE_TIME":"2018-10-10 17:34:32","AREA_INFO":null,"P_DAY":"20190713","CENTRAL_POINT":null,"RN":10,"pid":"","areaLevel":1}]}}
  );
}
// 添加信息反馈接口
if(mockConst.isStatic.warning.feek) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.feek),'post',{
		"status": 0,
		"msg": "成功"
	})
}
//获取应对举措接口
if(mockConst.isStatic.warning.process.type) {
	Mock.mock(mockConst.getRegExpUrl(api.url.warning.process.type),'get',{
		"status": 0,
    "msg": null,
    "obj": [
      {
        "id": 1,
        "processName": "外呼"
      },
      {
        "id": 2,
        "processName": "现场摆摊"
      },
      {
        "id": 3,
        "processName": "其他"
      }
    ]
	})
}
if(mockConst.isStatic.warning.process.process) {
  Mock.mock(mockConst.getRegExpUrl(api.url.warning.process.process),'get',{
    "status": 0,
    "msg": null,
    "obj": [
      {
        "processName": "开始反馈",
        "handlerName": "liucun",
        "createTime": "2019-07-24 14:21:22",
        "handlerStatus": 1,
        "handlerContent": "xxfk",
        "handlerLevel": 1
      },
      {
        "processName": "反馈处理",
        "handlerName": "chenzhouce",
        "createTime": null,
        "handlerStatus": 1,
        "handlerContent": "btg",
        "handlerLevel": 1
      },
      {
        "processName": "反馈结束",
        "handlerName": "chenzhouce",
        "createTime": null,
        "handlerStatus": 1,
        "handlerContent": "btg",
        "handlerLevel": 1
      }
    ]
  })
}
//获取小区信息
if(mockConst.isStatic.shake.scene.info) {
	Mock.mock(mockConst.getRegExpUrl(api.url.shake.scene.list),'get',{
            "status":0,
            "msg":"返回成功",
            "obj":{
              "poiId":"12",
              "unitMsgs":[
                {
                  "segmName":"1单元",
                  "roomsMsgs":[
                    {
                      "segmId":"458",
                      "segmName":"101",
                      "installStatus":1
                    },
                    {
                      "segmId":"458",
                      "segmName":"102",
                      "installStatus":2
                    },
                    {
                      "segmId":"458",
                      "segmName":"103",
                      "installStatus":2
                    },
                    {
                      "segmId":"458",
                      "segmName":"104",
                      "installStatus":1
                    }
                  ]
                },
                {
                  "segmName":"2单元",
                  "roomsMsgs":[
                    {
                      "segmId":"458",
                      "segmName":"201",
                      "installStatus":1
                    },
                    {
                      "segmId":"458",
                      "segmName":"202",
                      "installStatus":2
                    },
                    {
                      "segmId":"458",
                      "segmName":"203",
                      "installStatus":2
                    },
                    {
                      "segmId":"458",
                      "segmName":"204",
                      "installStatus":1
                    }
                  ]
                }
              ]
            }
    })
}


