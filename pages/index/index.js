/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2023-05-23 09:15:41
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-05-23 20:53:11
 */
Page({
  data:{
    code: 81006105551115275674,
    count: null,
    toastShow: false,
    content: '失败',
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
    my.getTitleColor({
      success: res => {
        //RGBA 格式的十六进制颜色值，如 #323239FF。
        console.log('导航栏背景色：',res.color);
      },
    });
    var that = this;
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
  }
});
