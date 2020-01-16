var json = {
  pageInfo: {
    title: '首页'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `font-family: Times New Roman,Georgia,Serif;
            padding-top: 10px;
            margin-top: 10px;
            color: #FF6600;
            background-color: #ffffff;
            padding-left: 25px;
            padding-right: 25px;
            `,
    child: [{
      type: 'text',
      hide: false,
      style: "font-size: 15px;text-align: center;padding-left: 30rpx;padding-right: 30rpx;",
      innerText: '读书给人以快乐、给人以光彩、给人以才干。'
    }, {
      type: 'text',
      hide: false,
      style: "font-size: 12px;color:  #000000;display: block;text-align: right;padding-right:5px;",
      innerText: '--培根'
    }]
    },{
      type: 'view',
      hide: false,
      style: "padding-left: 12px;margin-top: 12px;padding-top: 5px;background-color: #ffffff;"
      ,
    child: [{
      type: 'view',
      hide:false,
      style: `border-left:3px solid red;color: #4c4c4c;font-size: 14px;height: 25px;border-top: 1px solid #dfdfdf;border-bottom: 1px solid #dfdfdf;padding: 11px 8px 0;background: #f2f2f2;line-height: 14px;`,
      child: [{
        type: 'view',
        hide: false,
        style: "padding-left: 7px;",
        innerText: '值得阅读'
      }, {
        type: 'view',
        hide: false,
          style: "font-family:'Franklin Gothic Medium', 'Arial Narrow';padding-left: 6px;font-size: 12px;color:#969696;margin-top: -13px;padding-left: 66px;",
        innerText: '个人强烈推荐'
      }]
    }]
  },{
      type: 'view',
      hide: false,
      style: "background-color:#ffffff;display: flex;justify-content:space-around",
      child:[{
        wxfor: 'loveInfo',
        template: `{"bindtap":"wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});", "type":"image","hide":false,"style":"height:120px;width:85px;padding: 18px 3px;","attr":{"book_id":"{{book_id}}","src":"{{book_cover_img}}"},"child":[{"type":"view","hide":false,"style":"font-size: 14px;display: block;text-align: center;","innerText":"{{book_name}}"}]}`
      }]
  },{
    type: 'view',
    hide: false,
    style: `
      padding-left: 12px;
      margin-top: 12px;
      padding-top: 5px;
      background-color: #ffffff;`,
    child:[{
      type: 'view',
      hide: false,
      style: `border-left: 3px solid red;
        color: #4c4c4c;
        font-size: 14px;
        height: 25px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        padding: 11px 8px 0;
        background: #f2f2f2;
        line-height: 14px;`,
      child:[{
        type: 'view',
        hide: false,
        style:`padding-left: 7px;`,
        innerText:'更多好书'
      }]
    }]
    },{
      wxfor: 'otherInfo',
      template: `{"bindtap":"wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});","type":"view","attr":{"book_id":"{{book_id}}"},"hide":false,"style":"padding-left: 12px;padding-top: 5px;padding-bottom: 5px;background-color: #ffffff;border-bottom:1px solid #eeeeee;","child":[{"type":"view","hide":false,"style":"width: 20%;padding-top: 6px;float: left;padding-top: 12px;","child":[{"type":"image","hide":false,"style":"width: 100%;","attr":{"mode":"widthFix","src":"{{book_cover_img}}"}}]},{"type":"view","hide":false,"style":"width: 78%;float: right;","child":[{"type":"view","hide":false,"child":[{"type":"view","hide":false,"style":"font-weight: bold;","attr":{"mode":"widthFix","src":"{{book_name}}"}}]},{"type":"view","hide":false,"style":"padding-top: 12px;font-size:12px;text-overflow:ellipsis;overflow:hidden;word-break: break-all;display:-webkit-box;-webkit-line-clamp:5;padding-right: 8px;-webkit-box-orient:vertical;","innerText":"{{book_introduce}}"},{"type":"view","hide":false,"style":"padding-top:4px;padding-right: 8px;float: right;font-size:12px;color: #969696;","innerText":"作者:黄易"}]}]}`
    }
  ],  
  event: {
    onLoad: {
      request: {
        url: "handler/book/getsomebook",
        callback: ` var loveInfo = []; var otherInfo = [];
	  		data.forEach(function(item,i){
	  			if (item.love === 1) {
		        loveInfo.push(item);
		      } else {
		        otherInfo.push(item);
		      }
	  		})
        renderData.loveInfo = loveInfo;
        renderData.otherInfo = otherInfo;
        `
      },
      func: ''
    }
  }
}
module.exports = json