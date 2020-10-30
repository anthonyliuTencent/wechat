var viewData = [
  {
    "type": "ad",
    "hide": false,
    "attr": {
    "unit-id": "adunit-c1f7dc73cf0c37e7"
    }
  },
    {
      
      type: 'scroll-view',
      attr: { 'scroll-y': true},
      id:'1',
      hide: false,
      style: `padding-top:5px;background-color: #fff;text-align: center;padding-bottom: 5px;`,
      wxfor: 'categoryArray',
      template: `{
      "bindtap": "wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});",
      "type": "view",
      "attr": {
          "book_id": "{{book_id}}"
      },
      "hide": false,
      "style": "padding-left: 12px;padding-top: 5px;padding-bottom: 5px;background-color: #ffffff;border-bottom:1px solid #eeeeee;",
      "child": [{
          "type": "view",
          "hide": false,
          "style": "width: 20%;padding-top: 6px;float: left;padding-top: 12px;",
          "child": [{
              "type": "image",
              "hide": false,
              "style": "width: 100%;height:100px",
              "attr": {
                 "lazy-load":true,
                  "mode": "widthFix",
                  "src": "{{book_cover_img}}"
              }
          }]
      }, {
          "type": "view",
          "hide": false,
          "style": "width: 78%;float: right;padding-top: 10px;",
          "child": [{
              "type": "view",
              "hide": false,
              "child": [{
                  "type": "view",
                  "hide": false,
                  "style": "font-weight: bold;",
                  "innerText":"{{book_name}}"
              }]
          },{
              "type": "view",
              "hide": false,
              "style": "font-size:12px;color: #969696;",
              "innerText": "{{book_author}}/著"
      }, 
      {
              "type": "view",
              "hide": false,
              "style": "font-size:12px;text-overflow:ellipsis;overflow:hidden;word-break: break-all;display:-webkit-box;-webkit-line-clamp:3;padding-right: 8px;-webkit-box-orient:vertical;",
              "innerText": "{{book_introduce}}"
          }]
      }]
  }`
    },{
      type:"view",
      hide: true,
      id:'2',
      style: `text-indent:2em;font-size: 14px;margin-top: 40px;`,
      innerText:'对不起哦~没有搜索到您想要的书，如果找到该书，我们会及时通知您!',
      child:[
        {
          type: 'view',
          hide: true,
          style: `border-left:3px solid red;margin-top: 25px;
color: #4c4c4c;height: 25px;border-top: 1px solid #dfdfdf;border-bottom: 1px solid #dfdfdf;padding: 11px 8pxbackground: #f2f2f2;line-height: 14px;`,
          child: [{
            type: 'view',
            hide: false,
            style: "font-size: 14px",
            innerText: '大家都在搜'
          }]
        }]
  }, {
    type: 'view',
    hide: false,
    style: `text-align: center;background-color: #fff;color: #787878;font-size: 13px;
padding-top: 5px;padding-bottom: 10px;`,
    innerText: '-------我是有底线的-------'
  }
  ]
  var json = {
    pageInfo: {
      title: ''
    },
    viewData,
    event: {
      onReachBottom: `
      if( that.flag !== 1){
        wx.showLoading({title: '加载中...'})
        that.pageNo = that.pageNo+1
        console.log('xx:',that.pageNo)
        utils.request({
            url:'handler/category/getlocalbook',
            data: {
              category: that.category,
              pageNo:that.pageNo,
              pagesSize: that.pageSize
            },
            method: 'post',
            success: function(data){
              console.log('data is:',data)
              let result = data.data
              console.log('result is:', result)
              if(result.categoryArray.length === 0) {
                wx.hideLoading()
                that.flag = 1;
              }
              that.renderData.categoryArray = that.renderData.categoryArray.concat(result.categoryArray)
              console.log('that.',that)
              var viewTemplate = JSON.parse(that.viewTemplateStr)
              var _temp = utils.goViews(viewTemplate, that.renderData);
              wx.hideLoading()
            that.setData({
              viewData: _temp
            });
          }
        })
      }`,
      onReady: "wx.showLoading({title: '加载中...'})",
      onLoad: {
        request: {
          url: "handler/category/getlocalbook",
          data: `let url = utils.getCurrentPageUrlWithArgs();
          data.category = that.category = utils.getLinkValue(url)[category]
          data.wangben = utils.getLinkValue(url)[wangben]
          if(data.category) {
            that.category = data.category
          } else {
            that.category = data.wangben
          }
          data.pageNo = that.pageNo = 1
          data.pageSize = that.pageSize = 10;
          if(!data.category && !data.wangben){
            data.keyword = utils.getLinkValue(url)[keyword]
          }

          `,
          callback: `
          var title = data.title;
          wx.setNavigationBarTitle({
            title: title
          })
          wx.hideLoading()
          renderData.categoryArray = data.categoryArray;
          if(data.categoryArray.length < that.pageSize) {
            that.flag = 1
          }
          utils.depDealObj(option.viewData, function(obj){
            if(obj.id === '1'){
              if(renderData.categoryArray.length) {
                obj.hide = false
              } else{
                obj.hide = true
              }
            } else if(obj.id === '2'){
              if(renderData.categoryArray.length) {
                obj.hide = true
              } else{
                obj.hide = false
              }
            } 
          })
          `
        }
      }
    }
  }
  module.exports = json