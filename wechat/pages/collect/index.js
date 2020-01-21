//index.js
const testData = require('../../debug/collect/index.js');
const utils = require('../../utils/utils.js')
const jsonParse = require('../../utils/jsonParse.js')
let app = getApp();
var CONFIGDATA = {};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    viewData: []
  },
  getUser: function () {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  render: function () {
    var that = this;
    wx.showLoading({ title: '加载中' });
    CONFIGDATA.event && CONFIGDATA.event.onLoad
      && jsonParse.initPage(CONFIGDATA.event.onLoad, that, wx, {
        viewData: CONFIGDATA.viewData
      })
    // 加载
    // 处理标题
    if (CONFIGDATA.pageInfo && CONFIGDATA.pageInfo.title) {
      wx.setNavigationBarTitle({
        title: CONFIGDATA.pageInfo.title
      });
    }
  },
  onLoad: function (options) {
    // 异步获取用户信息
    //this.getUser()
    var that = this
    currentPageUrl = app.getCurrentPages();
    console.log(app.getCurrentPages())
    CONFIGDATA = wx.getStorageSync(currentPageUrl);
    if (!CONFIGDATA) {
      console.log('not CONFIGDATA')
      CONFIGDATA = testData;
      // 到时放开
      //utils.setCache(currentPageUrl, CONFIGDATA, 60 * 24 * 7);
    }
    this.render()
    // utils.request({
    //   url: 'handler/view/getviewjs',
    //   data: {
    //     page: 'index/index'
    //   },
    //   method: 'post',
    //   success: (data) => {
    //     console.log('data is:', data.data)
    //     let virtualDom = data.data.data
    //     CONFIGDATA = virtualDom;
    //     console.log(' CONFIGDATA', CONFIGDATA.event)
    //     CONFIGDATA.event && CONFIGDATA.event.onLoad
    //       && jsonParse.doJs(CONFIGDATA.event.onLoad, this)
    //     // let dom = jsonParse.createElement(virtualDom.view)
    //     // WxParse.wxParse('article', 'html', dom, that, 5);
    //   },
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onReady
      && jsonParse.doJs(CONFIGDATA.event.onReady, that, wx)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onShow
      && jsonParse.doJs(CONFIGDATA.event.onShow, that, wx)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onHide
      && jsonParse.doJs(CONFIGDATA.event.onHide, that, wx)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onUnload
      && jsonParse.doJs(CONFIGDATA.event.onUnload, that, wx)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onPullDownRefresh
      && jsonParse.doJs(CONFIGDATA.event.onPullDownRefresh, that, wx)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onReachBottom
      && jsonParse.doJs(CONFIGDATA.event.onReachBottom, that, wx)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onShareAppMessage
      && jsonParse.doJs(CONFIGDATA.event.onShareAppMessage, that, wx)
  },
  onResize: function () {
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onResize
      && jsonParse.doJs(CONFIGDATA.event.onResize, that, wx)
  },
  onPageScroll: function (e) {
    console.log('e is:', e)
    var that = this;
    CONFIGDATA.event && CONFIGDATA.event.onPageScroll
      && jsonParse.doJs(CONFIGDATA.event.onPageScroll, that, wx, e)
  },
  onJss: function (e) {
    let detail = e.detail.detail;
    console.log('detail is:', detail)
    jsonParse.executeJs(detail.func, this, detail.attr, e.detail.option)
  }
})