//index.js
// pages/collect/index.js
const utils = require('../../utils/util.js')
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loveInfo: [],
    otherInfo: [],
    motto: "读书给人以快乐、给人以光彩、给人以才干。",
    famous: "培根"
  },
  getUser: function() {
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
        let loveInfo = [],
          otherInfo = []
        data.data.forEach((item, i) => {
          if (item.love === 1) {
            loveInfo.push(item)
          } else {
            otherInfo.push(item)
          }
        })
        this.setData({
          loveInfo,
          otherInfo
        })
      }
    })
    // 异步获取用户信息
    this.getUser()
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