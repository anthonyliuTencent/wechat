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
      style:"width:100%;",
      attr: { mode:"widthFix",src: "{{cover_img}}" }
    }]
  },{
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
    },{
      type:'view',
      hide:false,
      style:'',
      child:[{
        type: 'view',
        hide: false,
        style: `position: absolute;right: 25px;
              top: 50px;
              width: 54px;
              height: 23px;
              text-align: center;
              border-radius: 4px;
              font-size: 14px;
              line-height: 23px;
              overflow: hidden;border: 1px solid #ff4643;color: #ff4643;`,
        innerText:'+ 书架',
        bindtap:'console.log("xx")'
      },{
        type:'view',
        hide:false,
          style: 'padding: 5px;display: flex;justify-content:space-around;clear: both;font-size: 16px;',
        child:[{
          type: 'button',
          hide: false,
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
          bindtap: 'console.log("xx")'
        },{
          type: 'view',
          hide: false,
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
          bindtap: 'console.log("xx")'
        }]
      }]
    }]
  },{
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
  },{
    type: 'view',
    hide: false,
    style: `margin-top: 5px;padding: 5px;background-color: #fff;overflow: hidden; `,
    child:[{
      type: 'view',
      hide: false,
      style: 'border-left: 3px solid red;',
      child:[{
        type: 'view',
        hide: false,
        style: `display:inline-block;font-weight: bold;color: #4c4c4c;font-size: 14px;margin-top: -22px;padding-left: 8px;`,
        innerText: '目录'
      }]
    },{
      type: 'view',
      hide: false,
      wxfor: 'chapterArray',
        template: `{"type":"view","style":"border-bottom: 1px solid #dfdfdf;  position: relative;clear: both;height: 38px;padding: 0px 20px 15px 8px;font-size: 14px;","child":[{"type":"text","style":"display:inline-block","innerText":"{{chapter_name}}"},{"type":"view","style":"width: 10px;height: 10px;border-top: 2px solid #999;border-right: 2px solid #999;position: absolute;right: 20rpx;transform: rotate(45deg);margin-top: -22px;"}]}`
    }]
  },{
    type: 'view',
    hide:false,
    style:`text-align: center;background-color: #fff;color: #787878;font-size: 13px;
padding-top: 5px;padding-bottom: 10px;`,
    innerText:'-------我是有底线的-------'
  }
]
var json = {
  viewData, 
  event: {
    onLoad: {
      request: {
        url: "handler/book/getbookdetail",
        data: "let url = utils.getCurrentPageUrlWithArgs();data.book_id =utils.getLinkValue(url)['id'] || 10;",
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
        let compare = utils.compare('chapter_id')
        let chapterArray = data.chapter.sort(compare)
        renderData.bookInfo = bookInfo;
        renderData.chapterArray = chapterArray;
        `,
        callbackFunc: 'that.setData({bookInfo,chapterArray})'
      }
    }
  }
}
module.exports = json