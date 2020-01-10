// pages/collect/index.js
const utils = require('../../utils/utils.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的书架'
    })
    utils.request({
      url: 'handler/user/getfavmsg',
      data: {},
      method: 'post',
      success: (data) => {
        let result = data.data
        this.setData({
          bookInfo: result
        })
      },
    })
  },
  tapBook: function(e) {
    console.log('e is:', e);
    let dataset = (e.target.dataset.book_id) ? e.target.dataset : e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/book/list?book_id=${dataset.book_id}` });
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