import API from './API';
const api = new API();
const getRegExpUrl = function(relativeUrl){
	return RegExp(api.baseURL + relativeUrl + ".*")
}
const getAllDates = function(begin, end){
	var arr = [];
	var ab = begin.split("-");
	var ae = end.split("-");
	var db = new Date();
	db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
	var de = new Date();
	de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
	var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
	var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
	for (var k = unixDb; k <= unixDe;) {
		k = k + 24 * 60 * 60 * 1000;
		arr.push(new Date(parseInt(k)));
	}
	return arr;
}
const getQueryString = function(url, paramName) {
	var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)", "i");
	var arr = url.split("?");
	if(arr.length <= 1) return null
	var r = arr[1].match(reg);
	if (r != null) return decodeURI(r[2]); return null;
}


export default {
	getQueryString,
	getRegExpUrl,
	getAllDates,
	isStatic: {
		getUserMenus: true,
		checkToken: true,
    common: {
    warningTypeList: true,
    roleTypeList: true,
    roleListByRoleType: true,
    userListByRoleId: true,
    kpiList: true,
    channelList: true,
    areaList: true,
    userInfo: true
    },
    base:{
    contractArea: {
      list: true,
    spotSceneList: true,
    blockSceneList: true,
    add: true,
    detail: true,
    edit: true,
    delete: true,
    getSpot:true,
    getBlock:true
    },
      gridUserMgr:{
        getGridList:true
      }
    },
    swing:{
      getSwingResources:true,
      getSwingProject:true,
      recordExposure:true
    },
    warning: {
    notify: {
    list: true,
    add: true,
    detail: true,
    edit: true,
    delete: true,
    getModelTypes: true,
    getMyModelType:true,
    seachMyTotal:true,
    seachMap:true,
    seachTotal:true,
    seachDetail:true,
    seachPoints:true,
    seachGridByProduce: true,
    seachMyTodoNum: true,
    seachMyZbList:true,
    },
      work:{
        transfer:true,
        feed:true
      },
    feek: true,
    process:{
    type: true,
    process:true
    },
    },
    contract:{
    manage:{
    getArea:true,
    getChannel:true,
    getChannelListById:true,
      getContractInfoByChannelId:true,
      getChannelContractKpiInfoByIds:true
    }
    },
		market:{
			common:{
				cuslist:true,
				newlist:true,
				addresslist:true,
				exechannelslist:true,
        getLocationPoint:true,
        getBtMessageFromRadiu:true
			},
			freeStall:{
				// addresslist:true,
				locationlist:true,
				post:true,
				gridlist:true,
				seargrid:true,
			},
			sceneMarket:{
				pmtablelist:true,
				locationlist:true,
				sceneTypelist:true,
				scenelist:true,
				post:true
			},
			groupStation:{
				locationlist:true,
				historylist:true,
				grouplist:true,
				post:true
			}
		},
		shake:{
			shake:{
				info:true
			},
			scene:{
    			info: true
    		},
    		unit:{
    			info: true
    		},
    		report:{
    			info: true
    		},
    		isp:{
    			info:true
    		},
    		detail:{
    			info:true
    		},
    		detail2:{
    			info:true
    		},
    		position:{
    			info:true
    		}
		},
		tb:{
			tb:{
				info:true
			}
		},
		cbBag:{
    		contractListByArea:{
    			info: true,
    			info2: true,
    			info3:true
    		}
    	},
		profile:{
		      kpi:{
		        getAreaInfo:true,
		        getOpTime:true,
		      },

			leftA:{
				list:true
			},
			leftA_2:{
				list:true
			},
			leftA_3:{
				list:true
			},
			leftA_4:{
			    list:true
			},
			leftB:{
				list:true
			},
			leftB_2:{
				list:true
			},
			leftB_khyh:{
				list:true
			},
			leftB_hyrh:{
				list:true
			},
			leftB_kdrh:{
				list:true
			},
			leftB_lwrh:{
				list:true
			},
			leftB_dsprh:{
				list:true
			},
			leftB_hhxd:{
				list:true
			},

			leftC:{
				list:true
			},
			leftD:{
				list:true
			},
			leftE:{
				list:true
			},
			leftF:{
				list:true
			},
			leftG:{
				list:true
			},

      fightmap:{
        getReses:true,
        getTypes:true,
        getLocation:true,
        getSceneList:true,
        getTypeDataList:true,
        getTypeDataDetail:true,
        getUserHeatMap:true,
        getLowSzlScene:true,
        getTypeWeakData:true,
        getTypeDataByTypeId:true,
        getCoverDataByCoverTypeId:true,
        getGjDataByGjBusiType:true,
        getTypeDetailListByBaseTypeId:true,
      }
		}
	}
}
