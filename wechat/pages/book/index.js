// pages/book/index.js
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo: {},
    chapterArray:[]
  },
  jumpList: function(e) {
    let dataset = (e.target.dataset.book_id) ? e.target.dataset : e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/book/list?book_id=${dataset.book_id}`});
  },
  tapBook: function(e) {
    let dataset = (e.target.dataset.book_id) ? e.target.dataset : e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/book/detail?book_id=${dataset.book_id}&chapter_id=${dataset.chapter_id}` });
  },
  jumpContent: function(e) {
    let dataset = (e.target.dataset.book_id) ? e.target.dataset : e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/book/detail?book_id=${dataset.book_id}&chapter_id=${dataset.chapter_id}` });
  },
  addBook: function () {
    var that =this
    utils.request({
      url:'handler/user/addfavbook',
      data: {
        book_id: that.data.bookInfo.id
      },
      method: 'post',
      success: (data) => {
        let result = data.data
        console.log('result is:', result)
        if(result.retCode === '000000') {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = utils.getCurrentPageUrlWithArgs()
    let book_id = utils.getLinkValue(url)['id'] || 1;

    wx.request({
      url: `${utils.baseUrl}handler/book/getbookdetail`,
      data: {
        book_id
      },
      method: 'post',
      success: (result) => {
        // console.log('data is:', result)
        let data = result.data
        let bookInfo = {
          author: data.book_author,
          cover_img: data.book_book_cover_img,
          id: data.book_id,
          introduce: data.book_introduce,
          name: data.book_name
        }
        wx.setNavigationBarTitle({
          title: data.book_name
        })
        let compare = utils.compare('chapter_id')
        let chapterArray = data.chapter.sort(compare)
        this.setData({
          bookInfo,
          chapterArray
        })
      }
    })
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
    wx.reLaunch({
      url: '/pages/index/index',
    })

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