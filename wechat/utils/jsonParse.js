
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
// option是事件触发wx系统带上的属性
function executeJs(jsStr, that, attr, option) {
  console.log('jsStr', jsStr);
  attr = attr || {}
  // jsStr ='wx.navigateTo({url:"/pages/book/index?id=10"})'
  // jsStr = 'console.log(attr.book_id)'
  // wx.navigateTo({ url: "/pages/book/index?id=10"})
  new Canjs(jsStr, { wx, that, attr, utils, option}).run()
}
function getData(dataFunc, that){
  // console.log('data is:', dataFunc)
  let data = {}
  if (dataFunc){
    new Canjs(dataFunc, { wx, that, utils, data }).run()
  }
  console.log('data is:',data)
  return data;
}
function setData(that, option) {
  var _temp = utils.goViews(option.viewData, that.renderData);
  that.setData({
    viewData: _temp
  });
}
function initPage(json, that, wx, option){
  if (json.request) {
    // 调用微信接口
    utils.request({
      url: json.request.url,
      data: getData(json.request.data, that),
      success: (data) => {
        var data =data.data
        var renderData = {}
    new Canjs(json.request.callback, { data, utils, renderData, that, wx, option}).run()
        that.renderData = renderData
        if (option && option.viewData){
          // 初始化首屏
          // 缓存起来
          let tempStr;
          that.viewTemplateStr = tempStr = JSON.stringify(option.viewData)
          let tempObj = JSON.parse(tempStr)  
          var _temp = utils.goViews(tempObj, renderData);
          that.setData({
            viewData: _temp
          });
        }
      }
    })
  }
  if (json.func) {
    let viewData = option.viewData
    let renderData = {}
    console.log('renderData is:', renderData)
    new Canjs(json.func, { wx, that, utils, renderData,viewData}).run()
    that.renderData = renderData
    console.log('renderData is:', renderData)
    let tempStr;
    that.viewTemplateStr = tempStr = JSON.stringify(option.viewData)
    let tempObj = JSON.parse(tempStr)
    var _temp = utils.goViews(tempObj, renderData);
    console.log('_temp is:', _temp)
    that.setData({
      viewData: _temp
    });
  }
}
function doJs(jsStr, that, attr, option) {
  attr = attr || {}
  // jsStr ='wx.navigateTo({url:"/pages/book/index?id=10"})'
  // jsStr = 'console.log(attr.book_id)'
  // wx.navigateTo({ url: "/pages/book/index?id=10"})
  new Canjs(jsStr, { wx, that, attr, utils, option }).run()
}
module.exports = {
  executeJs: executeJs,
  doJs: doJs,
  initPage: initPage,
  createElement: createElement
}