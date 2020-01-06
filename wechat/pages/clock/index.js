//index.js
//获取应用实例
const app = getApp();
// var login = require("../../utils/login");


Page({
  data: {
    hourdeg: "",
    minutedeg: "",
    seconddeg: ""
  },
  onShareAppMessage: function(){
    return {
      title: "【简约时钟】极简时钟小程序",
      path: "/pages/clock/index"
    };
  },
  onLoad: function(){
    // console.log(utils.getCookie());
    // 初始化
    //login.login();

    this.bindTime();
  },
  onShow: function(){
    // this.bindTime();
  },

  gohome: function () {
    wx.navigateBack({
      delta: 1
    });
  },
  bindTime: function(){
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDate = now.getDate();
    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();
    this.setData({
      hourdeg: "rotate(" + ((now.getTime() - new Date(nowYear + "/" + nowMonth + "/" + nowDate + " " + (nowHour >= 12 ? "12:00:00" : "00:00:00")).getTime()) / (1000 * 60 * 60 * 12)) * 360 + "deg)",
      minutedeg: "rotate(" + (nowMinute / 60 + nowSecond / 3600) * 360 + "deg)",
      seconddeg: "rotate(" + nowSecond * 6 + "deg)"
    })
  }
})