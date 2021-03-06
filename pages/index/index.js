//index.js
//获取应用实例
const app = getApp();



Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dengluhou:true,
    bigpicsrc : '/img/bingmayong.jpg',
    modepic: "scaleToFill",
    beijing:'/img/000beijing.jpg',
    shanghai:'/img/001shanghai.jpg',
    guangzhou:'/img/002guangzhou.jpg',
    xian:"/img/003xian.jpg"
  },
  //事件处理函数
  bindViewTap: function() {
    this.setData({
      motto :"this is a page"
    })
   
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
     // wx.navigateTo({
      //  url: '../login/login',
      //})

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        dengluhou : false
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          dengluhou: false
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            dengluhou: false
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      dengluhou: false
    })
  }
})
