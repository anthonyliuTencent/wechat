var json = {
  pageInfo: {
    title: '我的书架'
  },
  viewData: [
    {
      "type": "ad",
      "hide": false,
      "attr": {
      "unit-id": "adunit-c1f7dc73cf0c37e7"
      }
    },
    {
      type: 'view',
      hide: false,
      style: `border-top: 1px solid #dfdfdf;
      display: flex; flex-direction: row;
      align-items: left;"`, 
      child: [{ 
        "type": "image", 
        "hide": true, 
        "wxfill": "userInfo", 
        "id": "1", 
        "attr": { "src": "{{avatarUrl}}" }, 
        "mode": "", 
        "style": "width: 120rpx;height: 120rpx;margin: 20rpx;border-radius: 50%;" 
      }, {
          "type": "button",
          "hide": false,
          "id": "2",
          "attr": { "open-type": "getUserInfo" },
          "style": "font-size:12px;color:#888888;width: 128rpx;height: 128rpx;margin: 20rpx;border-radius: 50%;padding:0; padding-top:48rpx",
          "innerText": "点击授权", 
          "bindtap": "setTimeout(that.onLoad, 2000)"
        },{
          "type": "view",
          "hide": false,
          "wxfill": "userInfo", 
          "style": "line-height: 168rpx;",
          "innerText": "{{nickName}}",
        }]
    },{
    type: 'view',
    hide: false,
    style: `position:relative;border-left: 3px solid red; color: #4c4c4c; font-size: 14px; height: 25px; border-top: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf; border-right: 1px solid #dfdfdf;padding: 11px 8px 0; background: #f2f2f2; line-height: 14px;width: 75%;
`,
    child: [{
      type: 'view',
      hide: false,
      style: ``,
      innerText: '我的收藏'
    }, {
      type: 'view',
      hide: false,
      bindtap: `that.onLoad()`,
      style: `width:50px;position:absolute;right: -60px;background-color:#ffffff;text-align: center;padding-top:5px;font-weight: bold;color: #f60;font-size: 14px;height: 20px; border: 1px solid #dfdfdf;border-radius: 4px;top: 5px;`,
      innerText: '刷新'
    }]
  }, {
    type: 'view',
    hide: false,
    style: `text-align: left;`,
    child: [{
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
      }]
    }, {
        type: 'button',
        hide: false,
        attr: { "open-type": "contact" },
        style: `width:100%;border-left: 3px solid red; color: #4c4c4c;font-size: 14px;height: 40px; border-top: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf; padding: 11px 8px 0; background: #f2f2f2; line-height: 14px; margin-top:10px;text-align: left;
`,
      innerText: '意见反馈',
      },
    {
      type: 'view',
      hide: false,
      style: `border-left: 3px solid red; color: #4c4c4c; font-size: 14px; height: 25px; border-top: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf; padding: 11px 8px 0; background: #f2f2f2; line-height: 14px;margin-top: 10px;`,
      innerText: '我的阅读轨迹',
      child: [{
        type: "view",
        hide: true,
        id: "3",
        style: `margin-top: 13px;`,
        child: [{
          wxfor: 'historyInfo',
          template: `{"type":"view",
                "hide":false,
                "style":"padding-top: 15px;color: #131313;color: #6F78A7;padding-bottom: 10px; border-bottom: 1px solid #ececec;",
                "bindtap":"wx.redirectTo({url: '/pages/book/detail?book_id={{book_id}}&chapter_id={{chapter_id}}'})",
                "innerText":"{{book_name}}:{{chapter_name}}"
                }`
        }]
      }, {
        type: "view",
        hide: true,
        id: "4",
        style: `padding-top: 25px;color: #131313;color: #6F78A7;padding-bottom: 10px;
; border-bottom: 1px solid #ececec;`,
        innerText: "您还没有阅读历史哦，赶紧去看一本吧~"
      },
        {
          type: 'view',
          hide: false,
          style: `border-left: 3px solid red; color: #4c4c4c; font-size: 14px; height: 25px; border-top: 1px solid #dfdfdf;padding: 11px 8px 0; background: #f2f2f2; line-height: 14px;margin-top: 10px;margin-left: -10px;`,
          innerText: '关于',
          child: [{
            type: 'view',
            hide: false,
            style: `background-color: #fff;color: #787878;font-size: 12px;line-height:14px;margin-top:20px;`,
            innerText: `关注微信公众号「 业余说健康 」一边享受健康，一边免费读书，永久拥有您的私人书籍库!`
          }, {
              type: 'view',
              hide: false,
              style: `background-color: #fff;color: #787878;font-size: 12px;line-height:14px;padding-bottom:30px`,
              innerText: `
            该小程序以用户价值为依归，分享有品位的小说，提升人生价值！联系QQ：374549213`
            }]
        }
      ]
    }
    ]
  }
  ],
  event: {
    onLoad: {
      request: {
        url: "handler/user/getfavmsg",
        callback: `wx.hideLoading();
        if(data.retCode === 1){
          wx.login({
            success: function (res) {
              if (res.code) {
                let code = res.code
                utils.request({
                  url: 'handler/user/getusermsg',
                  data: { code },
                  method: 'post',
                  success: function(data){
                    let userInfo={
                      openid: data.data.openid
                    }
                    wx.setStorageSync('userInfo', userInfo);
                    that.onLoad()
                  },
                })
              } else {
                console.log('hello world!')
              }
            }
          })
        } else {
          renderData.bookInfo = data.bookInfo;
          renderData.historyInfo = data.historyInfo
          console.log('data.userInfo.nickName',data.userInfo.nickName)
          if(!data.userInfo.nickName) {
            data.userInfo.nickName = "您好！";
          } else {
            console.log('comming in')
            data.userInfo.nickName = "您好！" + data.userInfo.nickName;
          }
          renderData.userInfo = data.userInfo
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
            if(obj.id === '1'){
              if(renderData.userInfo.avatarUrl) {
                obj.hide = false
              } else{
              obj.hide = true
              }
            } else if(obj.id === '2'){
              if(renderData.userInfo.avatarUrl) {
                obj.hide = true
              } else {
                obj.hide = false
              }
            }
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
        } `
      },
      func: ''
    }
  }
}
module.exports = json