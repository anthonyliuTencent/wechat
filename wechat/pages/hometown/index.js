// pages/hometown/index.js
const utils = require('../../utils/utils.js')
const IMGPATH1 = 'https://mydear.site/static/image/scenety/';
const IMGPATH2 = 'https://mydear.site/static/image/house/';
const IMGPATH3 = 'https://mydear.site/static/image/people/';
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pics:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let url =utils.getCurrentPageUrlWithArgs(); 
   let flag = utils.getLinkValue(url)['flag']
   let pics = []
   let title=""
   switch (flag) {
     case '1': {
      title = '家乡风景'
      pics = [
         IMGPATH1 + '1.jpg',
         IMGPATH1 + '3.jpg',
         IMGPATH1 + '4.jpg',
         IMGPATH1 + '5.jpg',
         IMGPATH1 + '6.jpg',
         IMGPATH1 + '7.jpg'
      ];
      break;
     }
      case '2':{
       title = '家乡房产'
       pics = [
         IMGPATH2 + '1.jpg',
         IMGPATH2 + '2.jpg',
         IMGPATH2 + '3.jpg',
         IMGPATH2 + '4.jpg',
         IMGPATH2 + '5.jpg',
         IMGPATH2 + '6.jpg',
         IMGPATH2 + '7.jpg'
       ];
       break;
      }
      case '3':{
       title = '父老乡亲'
       pics = [
         IMGPATH3 + '1.jpg',
         IMGPATH3 + '2.jpg',
         IMGPATH3 + '3.jpg',
         IMGPATH3 + '4.jpg',
         IMGPATH3 + '5.jpg',
         IMGPATH3 + '6.jpg'
       ]
       break;
      }
    }
    wx.setNavigationBarTitle({
      title
    })
    this.setData({
      pics
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