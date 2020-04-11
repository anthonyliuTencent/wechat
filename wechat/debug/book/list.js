var viewData = [
  {
    type: 'view',
    hide: false,
    style: `padding-top:5px;background-color: #fff;text-align: center;padding-bottom: 5px;`,
    child: [{
      type: 'picker',
      attr: {range:"{{array}}"},
      bindchange:` let renderData = that.renderData;
      let index = option.value;
      renderData.index = index;
      renderData.chapterArray = renderData.Allchapter.slice((index * 20), (index * 20)+20);
          console.log('that.viewTemplateStr is:', that.viewTemplateStr)
          that.viewData = JSON.parse(that.viewTemplateStr)
          var _temp = utils.goViews(that.viewData, that.renderData);
          console.log('_temp:', _temp)
          that.setData({
            viewData: _temp
          });`,
      hide: false,
      style: "text-align: center;background-color: #f7e9cd;padding: 5px;margin-left: 40px;margin-right: 40px;border-radius: 25px;height: 25px;",
      child: [{
        type: 'view',
        hide: false,
        style: `width: 12px;top: 10px;
        height: 12px;
        border-top: 2px solid #999;
        border-right: 2px solid #999;
        position: absolute;
        right: 55px;
        transform: rotate(135deg);`,
      },{
        type:'view',
        hide: false,
        style:'text-align:center',
        wxfill:"array",
        innerText:"{{index}}",
      }]
    }]
  },{
    type: 'view',
    hide: false,
    style: " margin: 5px;width: 100 %;padding: 5px;background-color: #fff;",
    child:[{
      type: 'view',
      hide: false,
      wxfor:'chapterArray',
      template:`{"type":"view","bindtap":"wx.navigateTo({url: '/pages/book/detail?book_id={{book_id}}&chapter_id={{chapter_id}}'});","hide":false,"child":[{"type":"view","hide":false,"style":"position: relative;clear: both;line-height: 38px;height: 38px;padding: 0px 20px 0px 8px;font-size: 14px;border-bottom: 1px solid #dfdfdf;color: #4c4c4c;display: block;margin: 0;background-size: 138px;background-position: right -50px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;","innerText":"{{chapter_name}}"},{"type":"view","hide":false,"style":"width: 10px;height: 10px;border-top: 2px solid #999;border-right: 2px solid #999;position: absolute;right: 20rpx;transform: rotate(45deg);margin-top: -24px;"}]}`
    }]
  },{
    type: 'view',
    hide: false,
    style: `text-align: center;background-color: #fff;color: #787878;font-size: 13px;
padding-top: 5px;padding-bottom: 10px;`,
    innerText: '-------我是有底线的-------'
  }
]
var json = {
  pageInfo:{
    title: '目录'
  },
  viewData,
  event: {
    onLoad: {
      request: {
        url: "handler/book/getbookdetail",
        data: "let url = utils.getCurrentPageUrlWithArgs();data.book_id =utils.getLinkValue(url)[book_id];console.log('sadas:', data)",
        callback: `let compare = utils.compare('chapter_id')
        let Allchapter = data.chapter.sort(compare)
        let len = Math.floor(Allchapter.length / 20)
        let tempArray = [];
        for(let i =0; i < len; i++) {
          tempArray.push((i*20+1) + '----' + ((i+1)*20 + '章'))
        }
        tempArray.push((len * 20 + 1) + '----' + (Allchapter.length + '章'))
        renderData.array = tempArray;
        renderData.Allchapter = Allchapter
        renderData.chapterArray = Allchapter.slice(0,20);
        renderData.index = 0;
        `
      }
    }
  }
}
module.exports = json