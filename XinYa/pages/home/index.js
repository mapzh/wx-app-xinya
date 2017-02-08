//index.js
//获取应用实例
var app = getApp()

function Service(icon, title, forwardUrl) {
  this.icon = icon
  this.title = title
  this.forwardUrl = forwardUrl;
}

Page({
  data: {
    services: [],
    userInfo: {}
  },
  //事件处理函数
  forwardToSecondary: function(event) {
    wx.navigateTo({
      url: event.target.dataset.forwardUrl
    })
  },
  onLoad: function () {
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
    var services = new Array()
    for (var i=0;i<texts.length;i++) {
        var service = new Service(images[i], texts[i],'../secondary/index')
        services.push(service)
    }
    this.setData({
      services: services
    })
  }
})
