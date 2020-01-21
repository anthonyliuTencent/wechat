//app.js
const utils = require('./utils/utils.js')
App({
  onLaunch: function () {
    //初始化加载，先判断用户登录状态
    wx.login({
      success: function (res) {
        console.log(res.code);
        if (res.code) {
          code = res.code
          utils.request({
            url: 'handler/user/getusermsg',
            data: { code },
            method: 'post',
            success: (data) => {
              let userInfo={
                openid: data.data.openid
              }
              wx.setStorageSync('userInfo', userInfo);
            },
          })
        } else {
          console.log('hello world!')
        }
      }
    })
  },
  getCurrentPages: function () {
    　　var pages = getCurrentPages();    //获取加载的页面
    　　var currentPage = pages[pages.length - 1];  //获取当前页面的对象
    　　var url = currentPage.route;  //当前页面url
    　　var options = currentPage.options;   //获取url中所带的参数
    　　//拼接url的参数
    　　var currentPage = url + '?';
    　　for (var key in options) {
      　　　　var value = options[key]
      　　　　currentPage += key + '=' + value + '&';
    　　}
    　　currentPage = currentPage.substring(0, currentPage.length - 1);
    　　return currentPage;
  },
  globalData: {
    userInfo: null
  }
})