// pages/book/list.js
const utils = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapterArray:[],
    array: [],
    index: 0
  },
  Allchapter:[],
  bindPickerChange: function(e){
    let index = e.detail.value
    let that = this
    this.setData({
      chapterArray: that.Allchapter.slice((index * 20), (index * 20)+20),
      index
    })
  },
  tapBook: function (e) {
    let dataset = (e.target.dataset.book_id) ? e.target.dataset : e.currentTarget.dataset
    console.log('dataset is:', dataset)
    wx.navigateTo({ url: `/pages/book/detail?book_id=${dataset.book_id}&chapter_id=${dataset.chapter_id}` });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置导航栏为对应导航
    wx.setNavigationBarTitle({
      title: '目录'
    })
    let url = utils.getCurrentPageUrlWithArgs()
    let book_id = utils.getLinkValue(url)['book_id'];
    wx.request({
      url: `${utils.baseUrl}handler/book/getbookdetail`,
      data: {
        book_id
      },
      method: 'post',
      success: (result) => {
        // console.log('data is:', result)
        let data = result.data
        let compare = utils.compare('chapter_id')
        let Allchapter = data.chapter.sort(compare)
        let len = Math.floor(Allchapter.length / 20)
        let tempArray = [];
        for(let i =0; i < len; i++) {
          tempArray.push((i*20+1) + '----' + ((i+1)*20 + '章'))
        }
        tempArray.push((len * 20 + 1) + '----' + (Allchapter.length + '章'))
        this.Allchapter = Allchapter
        this.setData({
          array: tempArray,
          chapterArray: Allchapter.slice(0,20)
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