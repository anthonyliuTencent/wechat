//index.js
const testData = require('../../debug/index/index.js');
var window = (function () {
  return this
})();
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
  getUser: function() {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  render: function(){
    var that = this;
    // that.setData({ "viewData": CONFIGDATA.viewData })
    CONFIGDATA.event && CONFIGDATA.event.onLoad
      && jsonParse.doJs(CONFIGDATA.event.onLoad, that, {
       viewData:CONFIGDATA.viewData
      })
    // 加载
    //wx.showLoading({ title: '加载中' });
    // 处理标题
    if (CONFIGDATA.pageInfo && CONFIGDATA.pageInfo.title) {
      wx.setNavigationBarTitle({
        title: CONFIGDATA.pageInfo.title
      });
    }
  },
  onLoad: function(options) {
    // 异步获取用户信息
    //this.getUser()
    var that = this
    CONFIGDATA = testData;
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
  init: function(){

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.init();
    
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
  },
  doJs:function(e){

  }
})