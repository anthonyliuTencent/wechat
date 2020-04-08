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
function queryComponentMsg(that,pSeletor,cSelector, callback){
  var richTextDom = that.selectComponent(pSeletor);
  const query = wx.createSelectorQuery().in(richTextDom)
  query.select(cSelector).boundingClientRect()
  query.exec(function (res) {
    callback(res[0])
  })
}
function queryDomMsg(selector, callback){
  var query = wx.createSelectorQuery();
  //选择id
  query.select(selector).boundingClientRect()
  query.exec(function(res){
    callback(res[0])
  })
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
  let cookie = wx.getStorageSync('cookie') || {};
  // console.log('cookie is:', cookie)
  wx.request({
    url: `https://mydear.site/${obj.url}`,
    data: obj.data,
    header: {
      'content-type': 'application/json',
      'cookie': cookie// 设置cookie
    },
    method: 'post',
    success: (result) => {
      if (result.header) {
        if ('Set-Cookie' in result.header) {
          wx.setStorageSync('cookie', result.header['Set-Cookie']);
        }
        else if ('set-cookie' in result.header) {
          wx.setStorageSync('cookie', result.header['set-cookie'])
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
function goViews(viewData,renderData){
  var _temp = [];
  viewData.forEach(function (ceil, index) {
    // 判断是否有wxfor
    if (ceil.wxfor) {
      // 替换wxfor
      let wxforData = renderData[ceil.wxfor];
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
    } else if(ceil.wxfill){
      let fillData = renderData[ceil.wxfill];
      let arrayFlag = 0
      if(Array.isArray(fillData)) {
        // 数组获取下标
        arrayFlag = 1
      }
      for (var key in ceil){
        if (typeof ceil[key] === 'string' && key !== 'type'){
          if (arrayFlag) {
            ceil[key] = ceil[key].replace(/\{\{(.*?)\}\}/g, function ($0, $1) {
              return fillData[renderData[$1]]
            })
          } else {
            console.log('fillData is:', fillData)
            ceil[key] = ceil[key].replace(/\{\{(.*?)\}\}/g, function ($0, $1) {
              return fillData[$1]
            })
          }
          // console.log(' ceil[key] is:', ceil[key])
        } else if(key === 'attr'){
          let attrObj = ceil['attr']
          for (var key2 in attrObj) {
            // console.log('key2= is:', key2)
            attrObj[key2] = attrObj[key2].replace(/\{\{(.*?)\}\}/g, function ($0, $1) {
              return fillData[$1]
            })
          }
        }
      }
      _temp.push(handerView(ceil, renderData));
    }else if(ceil.attr){
      for (var key in ceil.attr){
        if (typeof ceil.attr[key] === 'string') {
          let regex = /\{\{(.*?)\}\}/
          let chooseKey = ceil.attr[key].match(regex);
          ceil.attr[key] = renderData[chooseKey[1]]
        }
      }
      _temp.push(handerView(ceil, renderData));
    }else {
      // 没有循环,也没有属性
      _temp.push(handerView(ceil, renderData));
    }
  });
  // console.log('_temp is:', _temp)
  return _temp;
}
function setCache(key, v, time) {
  // 要同时写两份
  wx.setStorageSync(key, v);
  // 同时写上时间
  if (time) {
    wx.setStorageSync(key + "__", new Date().getTime() + time * 60 * 1000);
  }
}
module.exports = {
  setCache,
  queryComponentMsg,
  queryDomMsg,
  goViews: goViews,
  formatTime: formatTime,
  baseUrl: 'https://mydear.site/',
  getCurrentPageUrl: getCurrentPageUrl,
  getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs,
  getLinkValue: getLinkValue,
  compare: compare,
  request:request
}
