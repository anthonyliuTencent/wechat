
const utils = require('./utils.js')
const Canjs = require('./scriptParse.js')
function _createElement(tagName, props,children){
  let rootHtml = '<' + tagName
  //没有
  if(Array.isArray(props)) {
    children = props
    props = undefined
  }
  console.log('rootHtml is:', rootHtml)
  if (props) {
    let obj = []
    for (let key in props) {
      obj.push(key + '="' + props[key]+ '"')
    }
    rootHtml = rootHtml + ' ' + obj.join('&nbsp') + '>'
    console.log('rootHtml is:', rootHtml)
  }
  if (children.length > 0 && typeof(children[0]) == 'string' ) {
    rootHtml = rootHtml + children[0] + '</' + tagName + '>'
    return rootHtml;
  } else {
    for (let i = 0; i < children.length; i++) {
      let child = children[i]
      rootHtml += _createElement(child.tagName, child.props, child.children)
    }
  }
  //
  rootHtml = rootHtml  + '</' + tagName + '>'
  return rootHtml
}
function createElement(viewArray){
  var contentHtml =''
  viewArray.forEach((item,i) => {
    contentHtml += _createElement(item.tagName, item.props, item.children)
  })
  return contentHtml
}
function executeJs(jsStr, that, attr) {
  console.log('jsStr', jsStr);
  // jsStr ='wx.navigateTo({url:"/pages/book/index?id=10"})'
  // jsStr = 'console.log(attr.book_id)'
  // wx.navigateTo({ url: "/pages/book/index?id=10"})
  new Canjs(jsStr, { wx, that, attr }).run()
}
function getData(dataFunc, that){
  console.log('data is:', dataFunc)
  let data = {}
  if (dataFunc){
    new Canjs(dataFunc, { wx, that, utils, data }).run()
  }
  console.log('data is:',data)
  return data;
}
function doJs(json, that, wx, option){
  if (json.request) {
    // 调用微信接口
    utils.request({
      url: json.request.url,
      data: getData(json.request.data, that),
      success: (data) => {
        var data =data.data
        var renderData = {}
        new Canjs(json.request.callback, { data, utils, renderData}).run()
        if (option && option.viewData){
          // 初始化首屏
          var _temp = utils.goViews(option.viewData, renderData);
          that.setData({
            viewData: _temp
          },);
        }
      }
    })
  }
  if (json.func) {
    let viewData = option.viewData
    new Canjs(json.func, { wx, that, utils, viewData}).run()
  }
}
module.exports = {
  executeJs: executeJs,
  doJs: doJs,
  createElement: createElement
}