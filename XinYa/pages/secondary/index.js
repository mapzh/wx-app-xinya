//index.js
//获取应用实例
var app = getApp()

function DetailService(title, desc) {
  this.title = title
  this.desc = desc
}

function SecondaryService(title, details) {
  this.title = title
  this.details = details
}

function Service(title, details) {
  this.title = title
  this.details = details
}

Page({
  data: {
    userInfo: {},
    services: []
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

    function getDetailServices() {
      var s1 = new DetailService("有限责任公司注册","线上提交材料，为你快速注册公司")
      var s2 = new DetailService("有限责任公司注册","线上提交材料，为你快速注册公司")
      var s3 = new DetailService("有限责任公司注册","线上提交材料，为你快速注册公司")
      return new Array(s1, s2, s3)
    }

    function getSecondaryServices() {
      var details = getDetailServices()
      var s1 = new SecondaryService("公司注册", details)
      var s2 = new SecondaryService("注册地址", details)
      return new Array(s1, s2)
    }

    function getServices() {
      var details = getSecondaryServices()
      var s1 = new Service("公司注册", details)
      var s2 = new Service("人事社保", details)
      var s3 = new Service("财税服务", details)
      var s4 = new Service("财税服务", details)
      var s5 = new Service("财税服务", details)

      return new Array(s1, s2, s3, s4, s5)
    }

    var services = getServices()
    console.log(services)
    that.setData({
      services: services
    })
  }
})
