// pages/book/detail.js
const utils = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    chapter_total: 0,
    chapter_id: 0,
    book_id: 0,
    html: '',
    viewHeight: 10,
    windowHeight: 10,
    fontSize:'20px',
    backgroundColor:'#ffecc2',
    helpShow: "none",
    jumpShow: "none"
  },
  getScrollOffset() {
    wx.createSelectorQuery().selectViewport().scrollOffset(function(res) {
      res.id // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop // 节点的竖直滚动位置
    }).exec()
  },
  lookLast() {
    let data = this.data
    if (data.chapter_id === 0) {
      wx.showToast({
        title: '已经是第一章了',
        icon: 'none',
        duration: 2000
      })
    } else {
      let chapter_id = data.chapter_id - 1
      wx.navigateTo({
        url: `/pages/book/detail?book_id=${data.book_id}&chapter_id=${chapter_id}`
      });
    }
  },
  lookList() {
    let book_id = this.data.book_id
    wx.navigateTo({
      url: `/pages/book/list?book_id=${book_id}`
    });
  },
  lookNext() {
    let data = this.data
    if (data.chapter_id === data.chapter_total -1) {
      wx.showToast({
        title: '已经是最后一章了',
        icon: 'none',
        duration: 2000
      })
    } else {
      let chapter_id = data.chapter_id + 1
      wx.navigateTo({
        url: `/pages/book/detail?book_id=${data.book_id}&chapter_id=${chapter_id}`
      });
    }
  },
  changeColor(e) {
    let color = e.target.dataset.color;
    let backgroundColor = '#ffecc2'
    switch (color) {
      case '1': {
        backgroundColor = '#ffffff'
        break;
      }
      case '2': {
        backgroundColor = '#ffecc2'
        break;
      }
      case '3': {
        backgroundColor = '#CCFFCC'
        break;
      }
      default: {
        backgroundColor = '#ffecc2'
      }
    }
    this.setData({
      backgroundColor
    })
  },
  changeFont (e) {
    let size = e.target.dataset.size;
    let fontSize = '20px'
    switch(size) {
      case 'small': {
        fontSize = '16px'
        break;
      }
      case 'media': {
        fontSize = '20px'
        break;
      }
      case 'large': {
        fontSize = '24px'
        break;
      }
      default: {
        fontSize = '20px'
      }
    }
    this.setData({
      fontSize
    })
  },
  showHelp() {
    let helpShow = this.data.helpShow
    this.setData({
      helpShow: helpShow === 'none'?'block':'none'
    })
  },
  loadContent(param) {
    var that = this
    wx.request({
      url: `${utils.baseUrl}handler/book/getchaptercontent`,
      data: param,
      method: 'post',
      success: (result) => {
        let data = result.data
        let content = data.content.replace(/<p>/g,
          '<p style="text-indent:2em;" \
            padding: .4em; \
            text-align: justify; \
            word-break: break-all; \
            text-indent: 2em; \
            padding-bottom: 50px; \
            margin-block-start: 1em; \
            margin-block-end: 1em;\
            margin-inline-start: 0px;\
            margin-inline-end: 0px; \
             >')
        this.setData({
          title: data.chapter_name,
          chapter_total: data.chapter_total,
          chapter_id: data.chapter_id,
          book_id: param.book_id,
          html: content,
          jumpShow: "flex"
        })
        wx.hideLoading()
        wx.setNavigationBarTitle({
          title: that.data.title
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    const windowHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      windowHeight
    })
    const query = wx.createSelectorQuery();
    const obj = query.select('#book-conent').boundingClientRect()
    obj.exec((res) => {
      this.setData({
        viewHeight: res[0].height
      })
    })
    let url = utils.getCurrentPageUrlWithArgs()
    let book_id = utils.getLinkValue(url)['book_id'] || 1
    let chapter_id = utils.getLinkValue(url)['chapter_id'] || 1
    console.log('book_id is:', book_id)
    console.log('chapter_id is:', chapter_id)
    this.loadContent({
      book_id,
      chapter_id
    })
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
  onPageScroll: function(e) {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('ssss');
    console.log(this.getScrollOffset())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      navIsHide: 0
    })
    console.log(this.data.navIsHide);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})