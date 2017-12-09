// pages/login/login.js




var util = require('../../utils/util.js');
var app = getApp();
var sp = '\n\t';


Page({

  /**
   * 页面的初始数据
   */


  data: {
    condition1: true,
    condition2: false,
    condition3: false,
    condition4: false,
    items:[
      {name:'out' , vaule:'外向'},
      {name:"in" , vaule:'内向'}
    ],
  space: sp
  
  },

  /**
   * 生命周期函数--监听页面加载
   */

  nextquestion: function (e) {
    //e.detail // 自定义组件触发事件时提供的detail对象
    if(this.data.condition1){
      console.log("1 is ture")
      this.setData({
        condition1: false,
        condition2: true,
        condition3: false,
        condition4: false
      })
    }else{
    if (this.data.condition2) {
      console.log("2 is ture")
      this.setData({
        condition1: false,
        condition2: false,
        condition3: true,
        condition4: false
      })
    }else{
    if (this.data.condition3) {
      console.log("3 is ture")
      this.setData({
        condition1: false,
        condition2: false,
        condition3: false,
        condition4: true
      })
    }else{
    if (this.data.condition4) {
      console.log("4 is ture")
      this.setData({
        condition1: false,
        condition2: false,
        condition3: false,
        condition4: false
      })
    }
    }
    }
    }
    },
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})