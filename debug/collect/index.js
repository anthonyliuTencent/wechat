var json = {
  pageInfo: {
    title: '我的书架'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `border-left: 3px solid red; color: #4c4c4c; font-size: 14px; height: 25px; border-top: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf; border-right: 1px solid #dfdfdf;padding: 11px 8px 0; background: #f2f2f2; line-height: 14px;width: 75%;
`,
    child:[{
      type: 'view',
      hide: false,
      style:``,
      innerText:'我的书架'
    },{
        type: 'view',
        hide: false,
        bindtap:`that.onLoad()`,
        style: `width:50px;position:absolute;right: 6px;background-color:#ffffff;text-align: center;padding-top:5px;font-weight: bold;color: #f60;font-size: 14px;height: 20px; border: 1px solid #dfdfdf;border-radius: 4px;top: 5px;`,
        innerText: '刷新'
    }]
  },{
      type: 'view',
      hide: false,
      style: `text-align: left;`,
      child:[{
        type: 'view',
        hide: false,
        child: [{
          wxfor: 'bookInfo',
          template: `{"bindtap":"if(that.flag!==1){wx.navigateTo({url: '/pages/book/index?id='+attr.book_id})} that.flag=0;", "type":"image","hide":false,"style":"postion:relative;height:120px;width:85px;padding: 38px 3px;padding-top: 9px;","attr":{"book_id":"{{book_id}}","src":"{{book_cover_img}}","type":"image"},"child":[
          {"type":"view","hide":false,"style":"text-overflow: ellipsis;white-space: nowrap;font-size: 12px;display: block;text-align: center;","innerText":"{{book_name}}"},
         {"type":"view",
          "hide":false,
          "style": "font-size: 14px;background: #ffc743;border-radius: 4px;display: block;text-align: center;",
          "innerText":"删除","bindtap":"that.flag=1;utils.request({url:'handler/user/delfavbook',data: {book_id: '{{book_id}}'},method: 'post',success: function(data){let result = data.data;if(result.retCode === '000000') { wx.showToast({title: '删除成功',icon: 'success',duration: 500,success:function(){that.onLoad()}})}else{wx.showToast({title: '删除失败',icon: 'success',duration: 2000})} }})"}
          ]}`
        }, {
            type: 'view',
            hide: false,
            wxfill: 'bookFull',
            style: `display:{{kou}};padding-top: 20px;text-align:center`,
            innerText: '您的书架是空的，快去收藏一本书吧~'
          }],
    },{
          type: 'view',
          hide: false,
          style: `border-left: 3px solid red; color: #4c4c4c; font-size: 14px; height: 25px; border-top: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf; padding: 11px 8px 0; background: #f2f2f2; line-height: 14px;margin-top: 10px;`,
          innerText: '我的阅读轨迹',
          child:[{
            type:"view",
            hide:true,
            id: "3",
            style:`margin-top: 13px;`,
            child: [{
              wxfor: 'historyInfo',
              template: `{"type":"view",
                "hide":false,
                "style":"padding-top: 15px;color: #131313;color: #6F78A7;padding-bottom: 10px; border-bottom: 1px solid #ececec;",
                "bindtap":"wx.redirectTo({url: '/pages/book/detail?book_id={{book_id}}&chapter_id={{chapter_id}}'})",
                "innerText":"{{book_name}}:{{chapter_name}}"
                }`
            }]
          },{
            type:"view",
            hide:true,
            id:"4",
            style:`padding-top: 25px;color: #131313;color: #6F78A7;padding-bottom: 10px;
; border-bottom: 1px solid #ececec;`,
            innerText:"您还没有阅读历史哦，赶紧去看一本吧~"
          },{
              type: 'view',
              hide: false,
              style: `text-align: center;background-color: #fff;color: #787878;font-size: 13px;
padding-top: 5px;padding-bottom: 10px;`,
              innerText: '-------我是有底线的-------'
          }]
    }
      ]
    }
  ],
  event: {
    onLoad: {
      request: {
        url: "handler/user/getfavmsg",
        callback: `wx.hideLoading();
        console.log('data:',data)
         renderData.bookInfo = data.bookInfo;
         renderData.historyInfo = data.historyInfo
         if(renderData.bookInfo.length <=0) {
           renderData.bookFull ={
             kou:'block'
           }
         } else {
           renderData.bookFull ={
             kou:'none'
           }
         }
         utils.depDealObj(option.viewData, function(obj){
            if(obj.id === '3'){
              if(renderData.historyInfo.length) {
                obj.hide = false
              } else{
                obj.hide = true
              }
            } else if(obj.id === '4'){
              if(renderData.historyInfo.length) {
                obj.hide = true
              } else{
                obj.hide = false
              }
            } 
          })
        `
      },
      func: ''
    }
  }
}
module.exports = json