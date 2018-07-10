/**
 * 路由配置
 */
// 首页
import Home from '../routes/Home/Home';
// 分类
import Classify from '../routes/Classify/Classify';
// 购物车
import ShopCar from '../routes/ShopCar/ShopCar';
// 购物车详情
import ShopCarDetail from '../routes/ShopCar/ShopCarDetail';
// 我的
import Me from '../routes/Me/Me';
// 我的详情
import MeDetail from '../routes/Me/MeDetail';
// 基础布局
// import BasicLayout from '../layouts/BaseLayout';

export const getRouterData = () => {
  const routerConfig = [
    // 首页
    {
      path:'/home',
      component:Home,
    },
    // 分类
    {
      path:'/classify',
      component:Classify,
    },
    // 购物车
    {
      path:'/shopcar',
      component:ShopCar,
    },
    // 购物车详情
    {
      path:'/shopCarDetail',
      component:ShopCarDetail
    },
    // 我的
    {
      path:'/me',
      component:Me,
    },
    // 我的详情
    {
      path:'/meDetail',
      component:MeDetail,
    }
  ]

  return routerConfig;
}
