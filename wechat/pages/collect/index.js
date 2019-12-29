// pages/collect/index.js
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
    utils.request({
      url: 'handler/user/addfavbook',
      data: {
        book_id: that.data.bookInfo.id
      },
      method: 'post',
      success: (data) => {
        let result = data.data
        console.log('result is:', result)
        if (result.retCode === '000000') {
          wx.showToast({
            title: '成功加入书架',
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: result.retMsg,
            icon: 'none',
            duration: 2000
          })
        }
      },
    })
  },
  tapBook: function(e) {
    console.log('e is:', e.target.dataset);
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