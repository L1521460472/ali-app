/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2023-05-22 19:48:49
 * @LastEditors: lijiancong
 * @LastEditTime: 2023-05-23 20:59:04
 */
Page({
  data: {
    titleBarHeight: 0,
    statusBarHeight: 0,
    randomLine: 0,
    productTypeOptions: [],
    drugList1: [],
    drugList2: [],
    drugList3: [],
    drugList4: [],
    drugList5: [],
    items : [
      {
        title: '第一项',
        content: ''
      }
    ]
  },
  onShow() {
    this.setData({
      randomLine: parseInt(Math.random()*20 + 1, 0),
    })
  },
  onChange(e) {
    console.log('collapse change', e);
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
    // my.request({
    //   url: 'https://code.ipcipc.cn/prod-api/system/dict/data/type/sys_product_type',
    //   method:'get',
    //   success: function(res){
    //     that.setData({
    //       productTypeOptions: res.data.data,
    //     });
    //   },
    //   fail: function(res){
    //     console.log(res)
    //   }
    // })
    my.request({
      url: 'https://code.ipcipc.cn/prod-api/trace/barCode/81006105551115275674',
      method:'get',
      success: function(res){
        // var obj = JSON.parse(res.data.data.product);
        var arr = JSON.parse(res.data.data.productAttrs);
        let brr = [];
        let crr = [
          // {k:'药品生产信息',v:obj.name},
          // {k:'药品有效期截止日期'},
          // {k:'药品生产批号'},
        ];
        let drr = [];
        let err = [];
        let frr = [];
        let grr = [];
        // console.log(arr)
        // for(let i=0;i < arr.length; i++){
        //   console.log(i+"-----"+arr[i]);
        // }
        arr.map((item,index)=>{
          if(item.type == '基本信息'){
            brr.push(item)
            // that.setData({
            //   drugList1: [...that.drugList1,item],
            // });
          }else if(item.type == '生产信息'){
            crr.push(item)
            // that.setData({
            //   drugList2: crr,
            // });
          }else if(item.type == '类别属性'){
            drr.push(item)
            // that.setData({
            //   drugList3: [item],
            // });
          }else if(item.type == '厂商信息'){
            err.push(item)
            // that.setData({
            //   drugList4: [item],
            // });
          }else{
            frr.push(item)
            console.log(frr)
            // that.setData({
            //   drugList5: [item],
            // });
          }
        })
        that.setData({
          drugList1: brr,
          drugList2: crr,
          drugList3: drr,
          drugList4: err,
          drugList5: frr,
        });
        console.log(that.drugList5)
        // that.setData({
        //   drugInfo: JSON.parse(res.data.data.product),
        //   count: res.data.data.scanNumber,
        // });
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
