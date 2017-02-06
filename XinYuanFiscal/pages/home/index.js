//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    icons: [],
    titles: [],
    userInfo: {}
  },
  //事件处理函数
  forwardToSecondary: function() {
    wx.navigateTo({
      url: '../secondary/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })


    var images = new Array('../../src/kaigongsi.png', '../../src/banshebao.png', '../../src/caishuifuwu.png', '../../src/zhuceshangbiao.png')
    var texts = new Array('开公司', '办社保', '财税服务', '注册商标')
    this.setData({
      icons: images
    })

    this.setData({
      titles: texts
    })
  }
})
