var json = {
  pageInfo: {
    title: '老家特产'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: "padding:10px",
    child: [{
      type: 'view',
      hide: false,
      child: [{
        type: 'view',
        hide: false,
        wxfor: 'note1',
        template: `{"type":"view","hide":false,"style":"break-inside: avoid;box-sizing: border-box;text-align: center;background-color: #fff","child":[{"type":"image","hide":false,"style":"width:100%","attr":{"src":"{{url}}"},"bindtap":"console.log('sad:',that.note1);wx.previewImage({current: attr.src, urls: that.note1})"},{"type":"text","hide":false,"innerText":"{{title}}"}]}`
      }]
    }]
  }],
  event: {
    onLoad: {
      func: `
      var IMGPATH1 = 'https://mydear.site/static/image/te/';
      that.note1 = [
        IMGPATH1 + 'egg.jpg',
        IMGPATH1 + 'orange.jpg',
        IMGPATH1 + 'binglan.jpg',
        IMGPATH1 + 'xiaolongxia.jpg'
      ]
      renderData.note1 = [
        {
          title: '土鸡蛋',
          url: IMGPATH1 + 'egg.jpg'
        }, {
          title: '好吃的桔子',
          url: IMGPATH1 + 'orange.jpg'
        }, {
          title: '槟榔',
          url: IMGPATH1 + 'binglan.jpg'
        },{
          title: '野生龙虾',
          url: IMGPATH1 + 'xiaolongxia.jpg'
        }];
      `
    }
  }
}
module.exports = json