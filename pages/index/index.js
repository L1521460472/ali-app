/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2023-05-23 09:15:41
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-05-24 11:25:01
 */
Page({
  data:{
    titleBarHeight: 0,
    statusBarHeight: 0,
    code: 81006105551115275674,
    count: null,
    toastShow: false,
    content: '1',
    drugInfo: {},
    drugInfoDetail: {}
  },
  handleTap(e) {
    console.log(my);
    var that = this;
    my.scan({
      scanType:['qrCode'],
      success: function(resp) {
        console.log(resp.result)
        my.request({
          url: `https://code.ipcipc.cn/prod-api/trace/barCode/${resp.result}`,
          method:'get',
          success: function(res){
            if(res.data.data){
              that.setData({
                drugInfo: JSON.parse(res.data.data.product),
                count: res.data.data.scanNumber,
              });
            }else{
              // msg
              that.setData({
                content: res.data.msg,
                toastShow: true
              })
            }
            
          },
          fail: function(res){
            console.log(res)
          }
        })
      }
    })
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
        // console.log(res)
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
    
    my.request({
      url: 'https://code.ipcipc.cn/prod-api/trace/barCode/81006105551115275674',
      method:'get',
      success: function(res){
        that.setData({
          count: res.data.data.scanNumber,
          drugInfo: JSON.parse(res.data.data.product),
        });
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
  showNavigationBarLoading() {
    my.showNavigationBarLoading()
  },
  // 验证详情
  toDetail(){
    console.log(123)
    my.navigateTo({
      url: '/pages/detail/index?id=1'  // url详解请见【路由使用须知】
    })
  },
  // 药品详情
  toDrugInfo(){
    console.log(123)
    my.navigateTo({
      url: '/pages/drugInfo/index?id=1'  // url详解请见【路由使用须知】
    })
  },
  handleCloseToast(e) {
    this.setData({
      toastShow: false
    })
  },
  //点击手机标题栏触发的事件,需要在 index.json 配置 titlePenetrate:"YES"
  onTitleBar(e) {
    console.log(e)
    // my.alert({
    //   title: '点击了标题栏'
    // });
  },
  // compareVersion(v1, v2) {
  //   var s1 = v1.split("."); 
  //   var s2 = v2.split("."); 
  //   var len = Math.max(s1.length, s2.length); 
  //   for (let i = 0; i < len; i++) {
  //       var num1 = parseInt(s1[i] || "0"); 
  //       var num2 = parseInt(s2[i] || "0"); 
  //       if (num1 > num2) { 
  //           return 1; 
  //       } else if (num1 < num2) { 
  //           return -1; 
  //       }
  //   }
  //   return 0;
  // } 
});
