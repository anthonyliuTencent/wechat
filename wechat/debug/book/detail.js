var viewData = [
  {
    type: 'view',
    hide: false,
    style: `position: relative;border-radius: 3px;padding: 6px 8px;`,
    child: [{
      type: 'view',
      hide: false,
      componentid: "xxxxy",
      bindtap: `let help = that.renderData.helpArea.help;
          console.log('help is:', help);
            that.renderData.helpArea.help = help === 'none'?'block':'none';
            console.log('helo is:ss', that.renderData.helpArea.help)
            let viewTemplate = JSON.parse(that.viewTemplateStr)
            console.log('viewTemplate is:', viewTemplate)
          var _temp = utils.goViews(viewTemplate, that.renderData);
          that.setData({
            viewData: _temp
          });`,
      wxfill: "cssFill",
      style: "{{css}}",
      child: [{
        type: 'rich-text',
        hide: false,
        componentid: "xxxxz",
        id: "contentId",
        wxfill: "contentHtml",
        attr: { nodes: "{{html}}" }
      }]
    }, {
      type:'view',
      wxfill: "helpArea",
      hide: false,
        style: `display:{{help}};border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;background: {{color}};border-bottom: 1px solid #dfdfdf;position: fixed;left: 0;top: 0;;width: 100%;padding-bottom:10px;`,
      child:[{
        type:'view',
        hide:false,
        style:'padding-top:10px;display: flex;justify-content: center;font-size:12px',
        child:[
          {
            type: 'view',
            hide: false,
            bindtap: `
            wx.switchTab({
              url: '/pages/index/index'
            });`,
            style: 'background-color:blue;color:#ffffff;margin-right:50px;padding:5px 10px;border-radius: 8px',
            innerText: '回到首页'
          },
          {
          type: 'view',
          hide: false,
          bindtap: `utils.request({
          url:'handler/user/addfavbook',
          data: {
            book_id: that.book_id
          },
          method: 'post',
          success: function(data){
            let result = data.data
            console.log('result is:', result)
            if(result.retCode === '000000') {
              wx.showToast({
                title: '成功加入书架',
                icon: 'success',
                duration: 500
              })
            } else if(result.retCode == '-1'){
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
                      }
                    })
                  } else {
                    console.log('hello world!')
                  }
                }
              })
            } else{
              wx.showToast({
                title: result.retMsg,
                icon: 'none',
                duration: 500
              })
            }
          },
        })`,
            style: 'background-color:#f60;color:#ffffff;margin-left:50px;padding:5px 10px;border-radius: 8px',
          innerText:'加入书架'
        }]
      }]
    },{
      type: 'view',
      wxfill: "helpArea",
      hide: false,
      style: `display:{{help}};border-top-right-radius: 20px;border-top-left-radius: 20px;border-top: 1px solid #dfdfdf;position: fixed;left: 0;bottom: 0;background: {{color}};width: 100%`,
      child: [{
        type: 'view',
        hide: false,
        style: 'display: flex;justify-content: center;position;',
        child: [{
          type: 'view',
          hide: false,
          style: 'font-size: 18px;padding: 5px 50px;',
          dataSize: "small",
          bindtap: ` wx.setStorageSync('fontSize', '23px')
          var backColor = wx.getStorageSync('backColor') || "#ffecc2"
          that.renderData.cssFill= {
            css:"font-size: 23px;background-color: "+ backColor + ";padding-bottom:160px"
                }
                let viewTemplate = JSON.parse(that.viewTemplateStr)
          var _temp = utils.goViews(viewTemplate, that.renderData);
          that.setData({
            viewData: _temp
          });
                `,
          innerText: '小'
        }, {
          type: 'view',
          hide: false,
          style: 'font-size: 20px;padding: 5px 50px;',
          dataSize: "media",
          bindtap: `
          wx.setStorageSync('fontSize', '25px')
          var backColor = wx.getStorageSync('backColor') || "#ffecc2"
          that.renderData.cssFill= {
                css:"font-size: 25px;background-color: "+ backColor + ";padding-bottom:160px"
                }
                let viewTemplate = JSON.parse(that.viewTemplateStr)
          var _temp = utils.goViews(viewTemplate, that.renderData);
          that.setData({
            viewData: _temp
          });`,
          innerText: '中'
        }, {
          type: 'view',
          hide: false,
          style: 'font-size: 22px;padding: 5px 50px;',
          dataSize: "large",
          bindtap: `
          wx.setStorageSync('fontSize', '28px')
          var backColor = wx.getStorageSync('backColor') || "#ffecc2"
          that.renderData.cssFill= {
              css:"font-size: 28px;background-color: "+ backColor + ";padding-bottom:160px"
                }
                let viewTemplate = JSON.parse(that.viewTemplateStr)
              var _temp = utils.goViews(viewTemplate, that.renderData);
              that.setData({
                viewData: _temp
              });`,
          innerText: '大'
        }]
      }, {
        type: 'view',
        hide: false,
        style: 'display: flex;justify-content: center;position;border-bottom: 1px solid #dfdfdf;',
        child: [{
          type: 'view',
          hide: false,
          bindtap: `
          wx.setStorageSync('backColor', '#ffffff')
          var fontSize = wx.getStorageSync('fontSize') || "28px"
          that.renderData.cssFill= {
              css:"font-size:"+fontSize+";background-color: #ffffff;padding-bottom:160px"
                }
                renderData.helpArea.color = '#ffffff'
                let viewTemplate = JSON.parse(that.viewTemplateStr)
              var _temp = utils.goViews(viewTemplate, that.renderData);
              that.setData({
                viewData: _temp
              });`,
          style: `background-color: #ffffff;margin: 0.5em;
            border-radius: 5px; 
            padding: 12px;width: 50px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);`
        }, {
          type: 'view',
          hide: false,
          bindtap: `
          wx.setStorageSync('backColor', '#ffecc2')
          var fontSize = wx.getStorageSync('fontSize') || "20px"
          that.renderData.cssFill= {
            css:"font-size: "+fontSize+";background-color: #ffecc2;padding-bottom:160px"
              }
              let viewTemplate = JSON.parse(that.viewTemplateStr)
              that.renderData.helpArea.color = '#ffecc2'
            var _temp = utils.goViews(viewTemplate, that.renderData);
            that.setData({
              viewData: _temp
            });`,
          style: `background-color: #ffecc2;margin: 0.5em;
           width: 50px;
            border-radius: 5px;
            padding: 12px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);`
        }, {
          type: 'view',
          hide: false,
          bindtap: `
          wx.setStorageSync('backColor', '#CCFFCC')
          var fontSize = wx.getStorageSync('fontSize') || "20px"
          that.renderData.cssFill= {
          css:"font-size: "+fontSize+";background-color: #CCFFCC;padding-bottom:160px"
            }
            that.renderData.helpArea.color = '#CCFFCC'
            let viewTemplate = JSON.parse(that.viewTemplateStr)
          var _temp = utils.goViews(viewTemplate, that.renderData);
          that.setData({
            viewData: _temp
          });`,
          style: `background-color: #CCFFCC;margin: 0.5em;width: 50px;
          border-radius: 5px;
          padding: 12px;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);`
        }]
      }, {
        type: 'view',
        hide: false,
        style: 'display: flex;justify-content: space-between;position',
        child: [{
          type: 'view',
          hide: false,
          bindtap: `var data = that.renderData.data
          if (data.chapter_id === 0) {
            wx.showToast({
              title: '已经是第一章了',
              icon: 'none',
              duration: 2000
            })
          } else {
            var chapter_id = data.chapter_id - 1
            wx.redirectTo({
              url: '/pages/book/detail?book_id='
              + data.book_id+'&chapter_id='+ chapter_id
            });
          }`,
          style: `margin: 0.5em;text-align: center;font-size: 14px;
            border-radius: 5px;
            padding: 12px 30px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
            text-decoration: none;`,
          innerText: '上一章'
        }, {
          type: 'view',
          hide: false,
          style: `width: 30%;margin: 0.5em;text-align: center;
                font-size: 14px;border-radius: 5px;padding: 12px 30px;
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);text-decoration: none;`,
          bindtap: `var book_id = that.renderData.data.book_id
                wx.redirectTo({
                  url: '/pages/book/list?book_id='+ book_id
                });`,
          innerText: '目录'
        }, {
          type: 'view',
          hide: false,
          bindtap: `
              var data = that.renderData.data
              if (data.chapter_id === data.chapter_total -1) {
                wx.showToast({
                  title: '已经是最后一章了',
                  icon: 'none',
                  duration: 2000
                })
              } else {
                var chapter_id = data.chapter_id + 1
                wx.redirectTo({
                  url: '/pages/book/detail?book_id='
                  + data.book_id+'&chapter_id='+ chapter_id
                });
              }
              `,
            style: `background-color:#f60;;margin: 0.5em;
              text-align: center;
              font-size: 14px;
              border-radius: 5px;
              display: block;
              padding: 12px 30px;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
              text-decoration: none;`,
          innerText: '下一章'
        }]
      },{
        "type": "ad",
        "hide": false,
        "attr": {
        "unit-id": "adunit-c1f7dc73cf0c37e7"
        }
      }]
    }]
  }
]
var json = {
  viewData,
  event: {
    onLoad: {
      request: {
        url: "handler/book/getchaptercontent",
        data: "let url = utils.getCurrentPageUrlWithArgs();data.book_id =utils.getLinkValue(url)[book_id];data.chapter_id = utils.getLinkValue(url)[chapter_id]",
        callback: `
        let content = data.content.replace(/<p>/g,
          '<p style="text-indent:2em;" \
            padding: .4em; \
            text-align: justify; \
            word-break: break-all; \
            text-indent: 2em; \
            padding-bottom: 50px; \
            margin-block-start: 1em; \
            margin-block-end: 1em;\
            margin-inline-start: 0px;\
            margin-inline-end: 0px; \
             >')
             if(data.book_id > 17) {content = content.replace(/\s+/g, "")}
        wx.hideLoading()
        wx.setNavigationBarTitle({
          title: data.chapter_name
        })
        that.book_id = data.book_id
        renderData.data = {
          chapter_id:data.chapter_id,
          book_id: data.book_id,
          chapter_total: data.chapter_total
        }
        renderData.contentHtml ={
          html: content
        }
         var fontSize = wx.getStorageSync('fontSize') || "20px"
        var backColor = wx.getStorageSync('backColor') || "#ffecc2"
        renderData.helpArea = {
          help: 'none',
          color:backColor
        }
        var fontSize = wx.getStorageSync('fontSize') || "20px"
        var backColor = wx.getStorageSync('backColor') || "#ffecc2"
        renderData.cssFill= {
          css:"font-size: "+fontSize+";background-color:"+backColor+";padding-bottom:160px"
        }
        `
      }
    },
    onPageScroll: `
    utils.queryComponentMsg(that,'#yyyyy>>>#xxxxy>>>#xxxxz','#contentId', function(obj){
      let timeOutid = setTimeout(function(){
         if(!option || !option.scrollTop){
            clearTimeout(timeOutid)
          } else {
            var screenHeight = wx.getSystemInfoSync().windowHeight;
            var help = that.renderData.helpArea.help
            var judgeHeight = obj.height+100 - option.scrollTop - screenHeight
            if(judgeHeight >= 0 && help === 'block') {
              that.renderData.helpArea.help ='none';
              var viewTemplate = JSON.parse(that.viewTemplateStr)
              var _temp = utils.goViews(viewTemplate, that.renderData);
              that.setData({
                viewData: _temp
              });
            } else if(judgeHeight < 0 && help == 'none' ){
              that.renderData.helpArea.help ='block';
              var viewTemplate = JSON.parse(that.viewTemplateStr)
              var _temp = utils.goViews(viewTemplate, that.renderData);
              that.setData({
                viewData: _temp
              });
            } else {
              clearTimeout(timeOutid)
            }
          }
      },200)
    })
    `,
    onReachBottom: ``
  }
}
module.exports = json