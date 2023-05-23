App({
  onLaunch(options) {
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