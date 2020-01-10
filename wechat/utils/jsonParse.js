var window = (function () {
  return this
})();
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
    console.log('item is:',item)
    contentHtml += _createElement(item.tagName, item.props, item.children)
  })
  return contentHtml
}
function doJs(json, that, option){
  if (json.request) {
    // 调用微信接口
    utils.request({
      url: json.request.url,
      data: json.request.data,
      success: (data) => {
        var data =data.data
        var viewData = {}
        new Canjs(json.request.callback, { data, utils, viewData }).run()
        if (option && option.viewData){
          // 初始化首屏
          var _temp = utils.goViews(option.viewData, viewData);
          console.log('_temp is:', _temp)
          that.setData({
            viewData: _temp
          });
        }
      }
    })
  }
  if (json.func) {
    let viewData = option.viewData
    new Canjs(json.func, { wx, that, viewData }).run()
  }
}
module.exports = {
  doJs: doJs,
  createElement: createElement
}