const Test = () => import ('@/views/pc/Test');
const Test2 = () => import ('@/views/pc/Test2.vuet');
export default [
  {
    path: '/pc',
    component: Test,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/pc2',
    component: Test2,
    meta: {
      title: '首页'
    }
  },
];
