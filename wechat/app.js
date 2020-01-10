//app.js
const utils = require('./utils/utils.js')
App({
  onLaunch: function () {
    var that = this
    let code;
    wx.login({
      success: function (res) {
        if (res.code) {
          code = res.code
          wx.getUserInfo({
            success: function (res) {
              wx.request({
                url: `${utils.baseUrl}handler/user/getusermsg`,
                data: {
                  code,
                  ...res.userInfo
                },
                method: 'post',
                success: (data) => {
                  wx.setStorage({
                    key: 'cookie',
                    data: data.header["Set-Cookie"], // 从返回数据的响应头中取cookie
                    success: (result) => {
                      console.log('cookie is ok')
                    }
                  })
                }
              })
            }
          });
        } else {
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})