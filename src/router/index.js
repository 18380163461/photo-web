import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
import API from '../api/API';

const api = new API();
Vue.use(Router)
const documentTitle = '我的照片';

const Test = () => import ('@/views/app/Test');
const PhotoList = () => import ('@/views/app/PhotoList');

const router = new Router({
  routes: [
    {
      path: '/app',
      component: Test,
      props: {pc: false}
    },
    {
      path: '/PhotoList',
      component: PhotoList,
      props: {pc: false}
    },
  ]
})

let applogin_PATH = '/applogin';

router.beforeEach((to, from, next) => {
  let isTest = api.getUrlStr('isTest');
  if (isTest != undefined) {
    sessionStorage.isTest = isTest;
  }
  let _ly_ = api.getUrlStr('_ly_');
  if (_ly_ != undefined) {
    sessionStorage._ly_ = _ly_;
  }
  sessionStorage.toPath = to.path;
  sessionStorage.fullPath = to.fullPath;

  next();
});
export default router;
