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
function handerView(view,data) {
  // 参数还是要处理一下的
  if (view.attr) {
    for (var i in view.attr) {
      if (/^jss\:/.test(view.attr[i])) {
        // 需要处理的
        // _temp.attr[i] = doSingleLine(_temp.attr[i].replace(/^jss\:/, ""));
      }
    }
  }
  // 判断child
  if (view.child && view.child.length) {
    view.child = goViews(view.child,data);
  }
  return view
}
function goViews(viewData,data){
  var _temp = [];
  viewData.forEach(function (ceil, index) {
    // 判断是否有wxfor
    if (ceil.wxfor) {
      // 替换wxfor
      let wxforData = data[ceil.wxfor];
      let tmpl = ceil.template;
      // console.log('tmpl is:', tmpl)
      // let tempForData = []
      wxforData.forEach(function(item, i){
        let tmplItem = tmpl.replace(/\{\{(.*?)\}\}/g, function($0, $1){
          return item[$1]
        })
        //console.log('tmpl:', tmplItem)
        _temp.push(JSON.parse(tmplItem))
      })
    } else {
      // 没有循环
      _temp.push(handerView(ceil,data));
    }
  });
  // console.log('_temp is:', _temp)
  return _temp;
}
module.exports = {
  goViews: goViews,
  formatTime: formatTime,
  baseUrl: 'https://mydear.site/',
  getCurrentPageUrl: getCurrentPageUrl,
  getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs,
  getLinkValue: getLinkValue,
  compare: compare,
  request:request
}
