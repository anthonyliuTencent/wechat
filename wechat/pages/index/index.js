//index.js
// pages/collect/index.js
const utils = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo: [],
    motto: "读书给人以快乐、给人以光彩、给人以才干。",
    famous:"培根"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.request({
      url: `${utils.baseUrl}handler/user/getfavmsg`,
      data: {
        user_id: '1'
      },
      method: 'post',
      success: (data) => {
        console.log('data is:', data)
        this.setData({
          bookInfo: data.data
        })
      }
    })
  },
  tapBook: function (e) {
    console.log('e is:', e.target.dataset);
    wx.navigateTo({ url:'/pages/book/index?id=1'});
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
    console.log('asd')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('share ')
  }
})
