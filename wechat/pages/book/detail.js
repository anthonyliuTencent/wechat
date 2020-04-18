//index.js
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
    console.log('CONFIGDATA.viewData is:', CONFIGDATA)
    CONFIGDATA.event && CONFIGDATA.event.onLoad
      && jsonParse.initPage(CONFIGDATA.event.onLoad, that, wx, {
        viewData: CONFIGDATA.viewData
      })
    // 加载
    wx.showLoading({ title: '加载中' });
    // 处理标题
    if (CONFIGDATA.pageInfo && CONFIGDATA.pageInfo.title) {
      wx.setNavigationBarTitle({
        title: CONFIGDATA.pageInfo.title
      });
    }
  },
  getData: function (currentPageUrl) {
    var that = this
    utils.request({
      url: "handler/view/getviewjs",
      data: {
        page: currentPageUrl
      },
      success: function (data) {
        CONFIGDATA = data.data.data;
        console.log('CONFIGDATA', CONFIGDATA)
        // 到时放开
        //utils.setCache(currentPageUrl, CONFIGDATA, 60 * 24 * 7);
        that.render()
      }
    })
  },
  onLoad: function (options) {
    // 异步获取用户信息
    var that = this
    var url = app.getCurrentPages() //获取加载的页面
    var index = url.indexOf('?');
    var currentPageUrl = index > -1 ? url.substring(0, index) : url;
    this.getData(currentPageUrl);
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