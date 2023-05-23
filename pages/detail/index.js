/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2023-05-22 19:48:49
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-05-22 20:53:11
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
    const {
      titleBarHeight,
      statusBarHeight,
    } = my.getSystemInfoSync();
    this.setData({
      titleBarHeight,
      statusBarHeight,  
    });
    my.setNavigationBar({
      frontColor: '#000000',
      backgroundColor: '#ffffff'
    })
    var that = this;
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
