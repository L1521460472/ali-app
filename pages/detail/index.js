/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2023-05-22 19:48:49
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-05-24 11:05:50
 */
Page({
  data: {
    titleBarHeight: 0,
    statusBarHeight: 0,
    count: 2,
    verifyObj: {},
    items: [
      {
        title: '生产信息',
        description: '描述信息',
        count: 1
      },
      {
        title: '使用信息',
        description: '描述信息',
        count: 2
      },
      {
        title: '药品效期',
        description: '描述信息',
        count: 3
      }
    ],
    iconList: [
      'DownOutline',
      'DownOutline',
      'DownOutline'
    ],
  },
  onLoad(query) {
    // 页面加载
    var that = this;
    function compareVersion(v1, v2) {
      var s1 = v1.split("."); 
      var s2 = v2.split("."); 
      var len = Math.max(s1.length, s2.length); 
      for (let i = 0; i < len; i++) {
          var num1 = parseInt(s1[i] || "0"); 
          var num2 = parseInt(s2[i] || "0"); 
          if (num1 > num2) { 
              return 1; 
          } else if (num1 < num2) { 
              return -1; 
          }
      }
      return 0;
    } 
    const clientVersion = my.env.clientVersion || my.getSystemInfo().clientVersion; 
    const sdkVersion = my.SDKVersion; 
    if(compareVersion(sdkVersion, '1.25.4') >= 0 && compareVersion(clientVersion,'10.1.90') >= 0) { 
        const res = my.getMenuButtonBoundingClientRect();
        that.setData({
          titleBarHeight:res.height,
          statusBarHeight: res.top,  
        });
    } else {
        console.log('当前环境不支持调用my.getMenuButtonBoundingClientRect');
    }
    // const {
    //   titleBarHeight,
    //   statusBarHeight,
    // } = my.getSystemInfoSync();
    // that.setData({
    //   titleBarHeight,
    //   statusBarHeight,  
    // });
    my.setNavigationBar({
      frontColor: '#000000',
      backgroundColor: '#ffffff'
    })
    my.request({
      url: 'https://code.ipcipc.cn/prod-api/trace/barCode/verify/81006105551115275674',
      method:'get',
      success: function(res){
        that.setData({
          verifyObj: res.data.data,
        });
        console.log(res.data.data)
      },
      fail: function(res){
        console.log(res)
      }
    })
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
