// import Vue from 'vue'
import App from './App'
import router from './router'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import * as tool from  './api/tool.js'
//element-ui
// import ElementUI from 'element-ui';

/**
 * 按需引入vant组件
 */
import { Toast,NavBar,Tab, Tabs,Button,Cell, CellGroup,Row, Col,Checkbox, CheckboxGroup,Field,Picker,RadioGroup, Radio,Rate,Search,Swipe, SwipeItem,TreeSelect,Icon,Popup,Step, Steps,
  Loading, DatetimePicker, Collapse, CollapseItem, DropdownMenu, DropdownItem, Uploader, List, Tag,Tabbar, TabbarItem,Overlay} from 'vant';
// import { NavBar } from 'vant';
import 'vant/lib/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
import { Dialog } from 'vant';
// 全局注册
Vue.use(Overlay);
Vue.use(Dialog);
Vue.use(Toast);
// Vue.use(ElementUI);
// Vue.use(MintUI);
Vue.use(NavBar);
Vue.use(Tab).use(Tabs);
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Row).use(Col);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Field);
Vue.use(Picker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Rate);
Vue.use(Search);
Vue.use(Swipe).use(SwipeItem);
Vue.use(TreeSelect);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Step).use(Steps);
Vue.use(Loading)
Vue.use(DatetimePicker)
Vue.use(Step).use(Steps);
Vue.use(Collapse).use(CollapseItem)
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Uploader);
Vue.use(List);
Vue.use(Tag);
Vue.use(Tabbar).use(TabbarItem);

/**
 * 按需引入cube-ui组件
 */
import Cube from 'cube-ui'

Vue.use(Cube)

// my css
import './assets/css/global.css';
import './assets/css/other.css';
import './assets/css/left.css';
// iconfont
import '../static/fonts/iconfont/iconfont.css';
import '../static/fonts/shake/iconfont.css';
import '../static/fonts/shakePC/iconfont.css';
/**
 * 引入iconfont图标
 */
import './assets/iconfont/iconfont.css'


// md5
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

Vue.prototype.$tool = tool;
import API from './api/API';
const api = new API();
Vue.prototype.$api = api;
import BMap from 'vue-baidu-map';
Vue.use(BMap, {
  ak: 'sGZOkeDdDDh55kIiuYC2qUg1'    //这个地方是官方提供的ak密钥
})
import {post,fetch,patch,put,j_post} from './api/http';
import 'swiper/dist/css/swiper.min.css';

import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)


Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$jpost=j_post;

//  require('./api/mock.js');

Vue.config.productionTip = false

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Array.prototype.indexOf = function(val) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] == val) return i;
	}
	return -1;
};

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if(index > -1) {
		this.splice(index, 1);
	}
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
