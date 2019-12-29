const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getCurrentPageUrl() {
  var pages = getCurrentPages() //获取加载的页面
  var currentPage = pages[pages.length - 1] //获取当前页面的对象
  var url = currentPage.route //当前页面url
  return url
}

/*获取当前页带参数的url*/
function getCurrentPageUrlWithArgs() {
  var pages = getCurrentPages() //获取加载的页面
  var currentPage = pages[pages.length - 1] //获取当前页面的对象
  var url = currentPage.route //当前页面url
  var options = currentPage.options //如果要获取url中所带的参数可以查看options

  //拼接url的参数
  var urlWithArgs = url + '?'
  for (var key in options) {
    var value = options[key]
    urlWithArgs += key + '=' + value + '&'
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

  return urlWithArgs
}
function getLinkValue(url) {
    //获取？后面第一个字符串的索引
    var index = url.indexOf('?') + 1;
    //取得url后面的字符串name=zs&age=18&b=2
    var params = url.substr(index);
    //使用&切割字符串，返回一个数组
    var arr = params.split('&');
    //定义一个空对象
    var o = {};
    //数组中每一项的样子 key=value
    for (var i = 0; i < arr.length; i++) {
      //临时数组
      var tmpArr = arr[i].split('=');
      var key = tmpArr[0];
      var value = tmpArr[1];
      o[key] = value;
    }
    return o;
}
function compare (prop) {
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
}
function request(obj) {
  wx.getStorage({
    key: 'cookie',
    success: (cookie) => {
      wx.request({
        url: `https://mydear.site/${obj.url}`,
        data: obj.data,
        header: {
          'content-type': 'application/json',
          'cookie': cookie.data // 设置cookie
        },
        method: 'post',
        success: (result) => {
          if (result.header) {
            if ('Set-Cookie' in result.header) {
              wx.setStorageSync(key, result.header['Set-Cookie']);
            }
            else if ('set-cookie' in result.header) {
              wx.setStorageSync(key, result.header['set-cookie'])
            }
          }
          obj.success(result)
        },
        fail: err => {
          obj.fail&& obj.fail(err)
        },
        complete: (res) => {
          obj.complete && obj.complete(res);
        }
      })
    }
  })
}
module.exports = {
  formatTime: formatTime,
  baseUrl: 'https://mydear.site/',
  getCurrentPageUrl: getCurrentPageUrl,
  getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs,
  getLinkValue: getLinkValue,
  compare: compare,
  request:request
}
