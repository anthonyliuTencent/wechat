var viewData = [
  {
    type: 'view',
    hide: false,
    style: `margin:3px 0;padding: 15px 7px 5px;position: relative;background-color: #ffffff;`,
    child: [{
      type: 'view',
      hide: false,
      style: "padding: 5px;float:left;width:30%",
      child: [{
        type: 'image',
        hide: false,
        wxfill: 'bookInfo',
        style: "width:100%;",
        attr: { mode: "widthFix", src: "{{cover_img}}" }
      }]
    }, {
      type: 'view',
      hide: false,
      style: "float:right;width:65%;padding-top: 2px;",
      child: [{
        type: 'view',
        hide: false,
        style: 'color: #303030;font-size: 16px;line-height: 25px;font-weight: bold;',
        wxfill: 'bookInfo',
        innerText: '{{name}}'
      }, {
        type: 'view',
        hide: false,
        style: 'display: block;color: #787878;font-size: 13px;line-height: 18px;padding-top: 12px;',
        child: [{
          type: 'text',
          hide: false,
          wxfill: 'bookInfo',
          innerText: '作者:{{author}}'
        }]
      }]
    }, {
      type: 'view',
      hide: false,
      style: '',
      child: [{
        type: 'view',
        hide: false,
        wxfill: 'bookInfo',
        attr: { "book_id": "{{id}}" },
        bindtap: `utils.request({
          url:'handler/user/addfavbook',
          data: {
            book_id: "{{id}}"
          },
          method: 'post',
          success: function(data){
            let result = data.data
            console.log('result is:', result)
            if(result.retCode === '000000') {
              wx.showToast({
                title: '成功加入书架',
                icon: 'success',
                duration: 2000
              })
            } else {
              wx.showToast({
                title: result.retMsg,
                icon: 'none',
                duration: 2000
              })
            }
          },
        })`,
        style: `position: absolute;right: 25px;
              top: 50px;
              width: 54px;
              height: 23px;
              text-align: center;
              border-radius: 4px;
              font-size: 14px;
              line-height: 23px;
              overflow: hidden;border: 1px solid #ff4643;color: #ff4643;`,
        innerText: '+ 书架'
      }, {
        type: 'view',
        hide: false,
        style: 'padding: 5px;display: flex;justify-content:space-around;clear: both;font-size: 16px;',
        child: [{
          type: 'button',
          hide: false,
          wxfill: 'bookInfo',
          attr: { "open-type": "getUserInfo", "book_id": "{{id}}" },
          bindgetuserinfo: "bindgetuserinfo",
          bindgetuserinfo2: "wx.navigateTo({ url: '/pages/book/detail?book_id='+attr.book_id+'&chapter_id=0' });",
          style: `-webkit-box-flex: 1;
                  line-height: 38px;
                  border-radius: 2px;
                  text-align: center;
                  background: #b33836;
                  color: #fff;
                  overflow: hidden;
                  white-space: nowrap;
                  font-weight: normal;
                  padding: 1px 36px;`,
          innerText: '立即阅读',
          bindtap: ''
        }, {
          type: 'view',
          hide: false,
          wxfill: 'bookInfo',
          attr: { book_id: "{{id}}" },
          style: `-webkit-box-flex: 1;
                line-height: 35px;
                border-radius: 2px;
                text-align: center;
                background: #b33836;
                color: #fff;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding: 1.5px 44px;border: 1px solid #b33836;color: #b33836;background: #fff;margin-left: 8px;`,
          innerText: '进入目录',
          bindtap: 'wx.navigateTo({ url: "/pages/book/list?book_id="+attr.book_id});'
        }]
      }]
    }]
  }, {
    type: 'view',
    hide: false,
    style: 'background-color: #ffffff;',
    child: [{
      type: 'view',
      hide: false,
      style: 'padding: 5px;margin-left: 5px;border-left: 3px solid red;',
      child: [{
        type: 'text',
        hide: false,
        style: `display:inline-block;font-weight: bold;color: #4c4c4c;font-size: 14px;margin-top: -22px;padding-left: 4px;`,
        innerText: '作品介绍'
      }]
    }, {
      type: 'view',
      hide: false,
      style: ` padding: 5px;
              color: #787878;
              font-size: 13px;
              line-height: 18px;`,
      child: [{
        type: 'text',
        hide: false,
        wxfill: 'bookInfo',
        innerText: '{{introduce}}'
      }]
    }]
  }, 
  {
    type: 'view',
    hide: false,
    style: `margin-top: 5px;padding: 5px;background-color: #fff;overflow: hidden; `,
    child: [{
      type: 'view',
      hide: false,
      style: 'border-left: 3px solid red;',
      child: [{
        type: 'view',
        hide: false,
        style: `display:inline-block;font-weight: bold;color: #4c4c4c;font-size: 14px;margin-top: -22px;padding-left: 8px;`,
        innerText: '猜你喜欢'
      }]
    }]
  }, 
  {
    type: 'view',
    id: "1",
    hide: false,
    style: `padding-top:5px;background-color: #fff;text-align: center;padding-bottom: 5px;`,
    wxfor: 'loveArray',
    template: `{
            "bindtap": "wx.redirectTo({url: '/pages/book/index?id='+attr.book_id});",
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
                "style": "width: 100%;",
                "attr": {
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
  },
  {
    type: 'view',
    id: "2",
    hide: true,
    style: `text-align: center;padding:20px;background-color: #fff;color: #787878;font-size: 13px;border-bottom: 1px dashed rgb(204, 204, 204);`,
    innerText: "没猜到你喜欢的数据哦~"
  },
  {
    type: 'view',
    hide: false,
    style: `text-align: center;background-color: #fff;color: #787878;font-size: 13px;
padding-top: 5px;padding-bottom: 10px;`,
    innerText: '-------我是有底线的-------'
  }
]
var json = {
  viewData,
  event: {
    onReady: "wx.showLoading({title: '请您耐心等待3-5秒。。。'})",
    onLoad: {
      request: {
        url: "handler/book/getbookdetail",
        data: "let url = utils.getCurrentPageUrlWithArgs();data.book_id =utils.getLinkValue(url)[id]",
        callback: `let bookInfo = {
          author: data.book_author,
          cover_img: data.book_book_cover_img,
          id: data.book_id,
          introduce: data.book_introduce,
          name: data.book_name
        }
        wx.setNavigationBarTitle({
          title: data.book_name
        })
        wx.hideLoading()
        let compare = utils.compare('chapter_id')
        renderData.bookInfo = bookInfo;
        renderData.loveArray = data.lovebook;
        if(option && option.viewData){
          utils.depDealObj(option.viewData, function(obj){
            if(obj.id === '1'){
              if(renderData.loveArray.length) {
                obj.hide = false
              } else{
                obj.hide = true
              }
            } else if(obj.id === '2'){
              if(renderData.loveArray.length) {
                obj.hide = true
              } else{
                obj.hide = false
              }
            } 
          })
        }
        `,
        callbackFunc: 'that.setData({bookInfo,chapterArray});'
      }
    }
  }
}
module.exports = json