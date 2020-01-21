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
            that.renderData.helpArea.help = help === 'none'?'block':'none';
            let viewTemplate = JSON.parse(that.viewTemplateStr)
          var _temp = utils.goViews(viewTemplate, that.renderData);
          that.setData({
            viewData: _temp
          });`,
      wxfill:"cssFill",
      style: "{{css}}",
      child:[{
        type:'rich-text',
        hide:false,
        componentid: "xxxxz",
        id:"contentId",
        wxfill:"contentHtml",
        attr:{nodes:"{{html}}"}
      }]
    },{
      type:'view',
      wxfill: "helpArea",
      hide:false,
        style: `display:{{help}};border-top-right-radius: 20px;border-top-left-radius: 20px;border-top: 1px solid #dfdfdf;position: fixed;left: 0;bottom: 0;background: #ffecc2;width: 100%`,
      child:[{
          type: 'view',
          hide: false,
          style: 'display: flex;justify-content: center;position;',
          child: [{
            type: 'view',
            hide: false,
            style: 'font-size: 18px;padding: 5px 50px;',
            dataSize: "small",
            innerText: '小'
          }, {
            type: 'view',
            hide: false,
            style: 'font-size: 20px;padding: 5px 50px;',
            dataSize: "media",
            innerText: '中'
          }, {
            type: 'view',
            hide: false,
            style: 'font-size: 22px;padding: 5px 50px;',
            dataSize: "large",
            innerText: '大'
          }]
      },{
        type:'view',
        hide: false,
        style: 'display: flex;justify-content: center;position;border-bottom: 1px solid #dfdfdf;',
        child:[{
          type:'view',
          hide: false,
          style: `background-color: #ffffff;margin: 0.5em;
            border-radius: 5px; 
            padding: 12px;width: 50px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);`,
          dataColor:"1"
        },{
          type: 'view',
          hide: false,
          style: `background-color: #ffecc2;margin: 0.5em;
           width: 50px;
            border-radius: 5px;
            padding: 12px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);`,
          dataColor: "2"
        },{
          type: 'view',
          hide: false,
            style: `background-color: #CCFFCC;margin: 0.5em;width: 50px;
            border-radius: 5px;
            padding: 12px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);`,
          dataColor: "3"
        }]
      },{
        type:'view',
        hide:false,
        style:'display: flex;justify-content: space-between;position',
        child: [{
          type: 'view',
          hide: false,
          style: `margin: 0.5em;text-align: center;font-size: 14px;
            border-radius: 5px;
            padding: 12px 30px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
            text-decoration: none;`,
          innerText: '上一章'
          }, {
                type: 'view',
                hide: false,
                style: `width: 30%;;
                margin: 0.5em;
                text-align: center;
                font-size: 14px;
                border-radius: 5px;
                padding: 12px 30px;
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
                text-decoration: none;`,
                innerText: '目录'
              }, {
              type: 'view',
              hide: false,
              style: `background-color: #f03;margin: 0.5em;
              text-align: center;
              font-size: 14px;
              border-radius: 5px;
              display: block;
              padding: 12px 30px;
              box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
              text-decoration: none;`,
              innerText: '下一章'
            }]
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
        data: "let url = utils.getCurrentPageUrlWithArgs();data.book_id =utils.getLinkValue(url)[id]|| 10;data.chapter_id = utils.getLinkValue(url)['chapter_id'] || 1",
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
        wx.hideLoading()
        wx.setNavigationBarTitle({
          title: data.chapter_name
        })
        renderData.contentHtml ={
          html: content
        }
        renderData.helpArea = {
          help: 'none'
        }
        renderData.cssFill= {
          css:"font-size: 20px;background-color: #ffecc2;padding-bottom:160px"
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
              console.log('viewTemplate:', viewTemplate)
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