//index.js
// pages/collect/index.js
const utils = require('../../utils/util.js')
const app = getApp()
Page({
  globalData: {
    appid: 'wxd7e73eaf489c9767',
    secret: 'b77a7b426ccbc41e6119cc701b3a701f'
  },
  /**
   * 页面的初始数据
   */
  data: {
    loveInfo: [],
    otherInfo: [],
    motto: "读书给人以快乐、给人以光彩、给人以才干。",
    famous: "培根"
  },
  onLaunch: function() {
    var that = this
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.getUserInfo({
            success: function(res) {
              var objz = {};
              objz.avatarUrl = res.userInfo.avatarUrl;
              objz.nickName = res.userInfo.nickName;
              //console.log(objz);
              wx.setStorageSync('userInfo', objz); //存储userInfo
            }
          });
          var d = that.globalData; //这里存储了appid、secret、token串  
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
          wx.request({
            url: l,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function(res) {
              var obj = {};
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;
              console.log(obj);
              wx.setStorageSync('user', obj); //存储openid  
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    wx.request({
      url: `${utils.baseUrl}handler/book/getsomebook`,
      data: {},
      method: 'post',
      success: (data) => {
        console.log('data is:', data)
        let loveInfo = [],
          otherInfo = []
        data.data.forEach((item, i) => {
          if (item.love === 1) {
            loveInfo.push(item)
          } else {
            otherInfo.push(item)
          }
        })
        console.log('loveInfo', otherInfo)
        this.setData({
          loveInfo,
          otherInfo
        })
      }
    })
  },
  tapBook: function(e) {
    let dataset = e.target.dataset
    wx.navigateTo({
      url: `/pages/book/index?id=${dataset.book_id}`
    });
  },
  tapOtherBook: function(e) {
    let dataset = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/book/index?id=${dataset.book_id}`
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('asd')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log('share ')
  }
})