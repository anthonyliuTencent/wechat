var json = {
  pageInfo: {
    title: '家乡'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `width:100%;height:400rpx;overflow:hidden;margin:0 auto;`,
    child: [{
      type: 'view',
      hide: false,
      style: `width:9999px;position:relative;animation:swipeCss 10s infinite 2s running;`,
      child:[{
        "type": "view",
        "hide": false,
        "wxfor": "carouselList",
        "template": `{"type":"view","hide":false,"style":"float:left;width: 100vw;","child":[{"type":"image","hide":false,"style":"width:100%;height:400rpx;","attr":{"mode":"aspectFill","src":"{{url}}"}}]}`
      }]
    }]
  },{
      type: 'view',
      hide: false,
      style: "text-align:center; padding-top:8px;",
      bindtap: `let url = '/pages/hometown/index?flag=1'
        wx.navigateTo({ url })`
      ,
      child:[{
        type: 'label',
        hide: false,
        style: "text-decoration-line: underline;color: #0000EE",
        innerText:'-家乡风景-',
        catchtap: `let url = '/pages/hometown/index?flag=1'
         wx.navigateTo({ url })`
      }]
    },{
      type: 'view',
      hide: false,
      style: "padding:10px",
      child:[{
        type: 'view',
        hide: false,
        style: "column-count: 2;",
        child:[{
          type:'view',
          hide: false,
          wxfor: 'note1',
          template: `{"type":"view","hide":false,"style":"break-inside: avoid;box-sizing: border-box;text-align: center;background-color: #fff","child":[{"type":"image","hide":false,"style":"width:100%","attr":{"src":"{{url}}"}},{"type":"text","hide":false,"innerText":"{{title}}"}]}`
        }]
      }]
    },
    {
      type: 'view',
      hide: false,
      style: "text-align:center; padding-top:8px;",
      bindtap: `let url = '/pages/hometown/index?flag=2'
        wx.navigateTo({ url })`
      ,
      child: [{
        type: 'label',
        hide: false,
        style: "text-decoration-line: underline;color: #0000EE",
        innerText: '-家乡房产-',
        catchtap: `let url = '/pages/hometown/index?flag=2'
         wx.navigateTo({ url })`
      }]
    },
    {
      type: 'view',
      hide: false,
      style: "padding:20rpx;",
      child: [{
        type: 'view',
        hide: false,
        style: "text-align: center;column-count: 2;",
        child: [{
          type: 'view',
          hide: false,
          wxfor: 'note2',
          template: `{"type":"view","hide":false,"style":"break-inside: avoid;box-sizing: border-box;text-align: center;background-color: #fff","child":[{"type":"image","hide":false,"style":"width:100%","attr":{"src":"{{url}}"}},{"type":"text","hide":false,"innerText":"{{title}}"}]}`
        }]
      }]
    },
    {
      type: 'view',
      hide: false,
      style: "text-align:center; padding-top:8px;",
      bindtap: `
        let url = '/pages/hometown/index?flag=3'
        wx.navigateTo({ url })`
      ,
      child: [{
        type: 'label',
        hide: false,
        style: "text-decoration-line: underline;color: #0000EE",
        innerText: '-父老乡亲-',
        catchtap: `let url = '/pages/hometown/index?flag=3'
         wx.navigateTo({ url })`
      }]
    }, {
      type: 'view',
      hide: false,
      style: "padding:20rpx;",
      child: [{
        type: 'view',
        hide: false,
        style: "text-align: center;column-count: 2;",
        child: [{
          type: 'view',
          hide: false,
          wxfor: 'note3',
          template: `{"type":"view","hide":false,"style":"break-inside: avoid;box-sizing: border-box;text-align: center;background-color: #fff","child":[{"type":"image","hide":false,"style":"width:100%","attr":{"src":"{{url}}"}},{"type":"text","hide":false,"innerText":"{{title}}"}]}`
        }]
      }]
    }
  ],  
  event: {
    onLoad: {
      func: `
      var IMGPATH1 = 'https://mydear.site/static/image/scenety/';
      var IMGPATH2 = 'https://mydear.site/static/image/house/';
      var IMGPATH3 = 'https://mydear.site/static/image/people/';
      renderData.carouselList = [{
        url: IMGPATH1 + '1.jpg',
      },{
        url: IMGPATH2 + '1.jpg',
      },{
        url: IMGPATH3 + '1.jpg',
      },{
        url: IMGPATH1 + '3.jpg',
      },{
        url: IMGPATH2 + '2.jpg',
      },{
        url: IMGPATH1 + '1.jpg',
      }];
      renderData.note1 = [
      {
        title: '田野',
        url: IMGPATH1 + '1.jpg'
      }, {
        title: '我家的院子',
        url: IMGPATH1 + '3.jpg'
      },{
        title: '我家的长江',
        url: IMGPATH1 + '4.jpg'
      }];
      renderData.note2 = [
      {
        title: '我的老家',
        url: IMGPATH2 + '1.jpg'
      }, {
        title: '院子的花',
        url: IMGPATH2 + '2.jpg'
      }, {
          title: '银杏',
        url: IMGPATH2 + '3.jpg'
      }];
      renderData.note3= [
        {
          title: '施工标语',
          url: IMGPATH3 + '1.jpg'
        }, {
          title: '堂妹大婚',
          url: IMGPATH3 + '2.jpg'
        }, {
          title: '堂妹大婚',
          url: IMGPATH3 + '3.jpg'
        }];
      `
    }
  }
}
module.exports = json