var json = {
  pageInfo: {
    title: '我的书架'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `margin-top: 5px;margin-left: 5px;border-left: 3px solid red;`,
    child:[{
      type: 'text',
      hide: false,
      style:`padding: 5px;font-weight: bold;color: #4c4c4c;font-size: 14px;height: 25px;padding: 11px 8px 0;`,
      innerText:'我的书架'
    }]
  },{
      type: 'view',
      hide: false,
      style: `text-align: left;`,
      child: [{
        wxfor: 'bookInfo',
        template: `{"bindtap":"wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});", "type":"image","hide":false,"style":"height:120px;width:85px;padding: 18px 3px;","attr":{"book_id":"{{book_id}}","src":"{{book_cover_img}}"},"child":[{"type":"view","hide":false,"style":"font-size: 14px;display: block;text-align: center;","innerText":"{{book_name}}"}]}`
      },{
          type: 'view',
          hide: false,
          wxfill:'bookFull',
          style: `display:{{kou}};padding-top: 50px;`,
          innerText:'您的书架是空的，快去收藏一本书吧~'
      }]
  }
  ],
  event: {
    onLoad: {
      request: {
        url: "handler/user/getfavmsg",
        callback: `wx.hideLoading();
         renderData.bookInfo = data;
         if(data.length <=0) {
           renderData.bookFull ={
             kou:'block'
           }
         } else {
           renderData.bookFull ={
             kou:'none'
           }
         }
        `
      },
      func: ''
    }
  }
}
module.exports = json