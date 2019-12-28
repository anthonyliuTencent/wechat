// pages/book/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navIsHide: 1,
    viewHeight:10,
    windowHeight: 10
  },
  getScrollOffset() {
    wx.createSelectorQuery().selectViewport().scrollOffset(function(res) {
      res.id // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop // 节点的竖直滚动位置
    }).exec()
  },
  showNavigtor() {
    this.setData({
      navIsHide: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const windowHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      windowHeight
    })
    const query = wx.createSelectorQuery();
    const obj = query.select('#book-conent').boundingClientRect()
    obj.exec((res) => {
      this.setData({viewHeight:res[0].height})
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
  onPageScroll: function (e) {
    console.log('ss:', this.data.viewHeight)
    console.log('e:', e.scrollTop)
    let data  =this.data;
    console.log(data.viewHeight - e.scrollTop - data.windowHeight);
    if ((data.viewHeight - e.scrollTop - data.windowHeight > 80) && data.navIsHide === 0) {
      this.setData({
        navIsHide: 1
      })
    }
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