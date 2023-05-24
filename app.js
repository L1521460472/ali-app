/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2023-05-24 09:36:23
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-05-24 09:55:47
 */
App({
  data: {
    // titleBarHeight: 0,
    // statusBarHeight: 0,
  },
  onLaunch(options) {
    // const {
    //   titleBarHeight,
    //   statusBarHeight,
    // } = my.getSystemInfoSync();
    // this.setData({
    //   titleBarHeight,
    //   statusBarHeight,  
    // });
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});



// "tabBar": {
//   "textColor": "#dddddd",
//   "selectedColor": "#49a9ee",
//   "backgroundColor": "#ffffff",
//   "items": [
//     {
//       "pagePath": "pages/logs/index",
//       "name": "扫码历史",
//       "icon": "image/icon_component.png",
//       "activeIcon": "image/icon_component_HL.png"
//     },
//     {
//       "pagePath": "pages/index/index",
//       "name": "再扫一盒",
//       "icon": "image/icon_component.png",
//       "activeIcon": "image/icon_component_HL.png"
//     },
//     {
//       "pagePath": "pages/user/index",
//       "name": "我的",
//       "icon": "image/icon_API.png",
//       "activeIcon": "image/icon_API_HL.png"
//     }
//   ]
// },