var json = {
  pageInfo: {
    title: '家乡'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `width:100%;height:400rpx;overflow:hidden;margin:20px auto;`,
    child: [{
      type: 'view',
      hide: false,
      style: "text-indent: 20px;",
      innerText: "大家好！为家乡的伟大复兴而奋斗！"
    },
    {
      type: 'view',
      hide: false,
      style: `margin:20px 0;width:9999px;position:relative;animation:swipeCss 10s infinite 2s running;`,
      child: [{
        "type": "view",
        "hide": false,
        "wxfor": "carouselList",
        "template": `{"type":"view","hide":false,"style":"float:left;width: 100vw;","child":[{"type":"image","hide":false,"style":"width:100%;height:400rpx;","attr":{"mode":"aspectFill","src":"{{url}}"}}]}`
      }]
    }]
  }, {
    type: 'view',
    hide: false,
    style: "text-align:center; margin: 15px;",
    bindtap: `let url = '/pages/hometown/introduce'
         wx.navigateTo({ url })`
    ,
    child: [{
      type: 'label',
      hide: false,
      style: "text-decoration-line: underline;color: #0000EE",
      innerText: '-我们的家乡-',
      catchtap: `let url = '/pages/hometown/introduce'
         wx.navigateTo({ url })`
    }]
  },
  {
    type: 'view',
    hide: false,
    style: "text-align:center; margin: 15px;",
    bindtap: `let url = '/pages/hometown/index'
        wx.navigateTo({ url })`
    ,
    child: [{
      type: 'label',
      hide: false,
      style: "text-decoration-line: underline;color: #0000EE",
      innerText: '-风光带（拍摄的照片）-',
      catchtap: `let url = '/pages/hometown/index'
         wx.navigateTo({ url })`
    }]
  },
  {
    type: 'view',
    hide: false,
    style: "text-align:center; margin: 15px;",
    bindtap: `let url = '/pages/hometown/sight'
        wx.navigateTo({ url })`
    ,
    child: [{
      type: 'label',
      hide: false,
      style: "text-decoration-line: underline;color: #0000EE",
      innerText: '-老房子（留下记忆）-',
      catchtap: `let url = '/pages/hometown/sight'
         wx.navigateTo({ url })`
    }]
  },
  {
    type: 'view',
    hide: false,
    style: "text-align:center; margin: 15px;",
    bindtap: `
        let url = '/pages/hometown/people'
        wx.navigateTo({ url })`
    ,
    child: [{
      type: 'label',
      hide: false,
      style: "text-decoration-line: underline;color: #0000EE",
      innerText: '-父老乡亲-',
      catchtap: `let url = '/pages/hometown/people'
         wx.navigateTo({ url })`
    }]
  }, {
    type: 'view',
    hide: false,
    style: "text-align:center; margin: 15px;",
    bindtap: `
        let url = '/pages/hometown/tel'
        wx.navigateTo({ url })`
    ,
    child: [{
      type: 'label',
      hide: false,
      style: "text-decoration-line: underline;color: #0000EE",
      innerText: '-通讯录（常联系）-',
      catchtap: `let url = '/pages/hometown/tel'
         wx.navigateTo({ url })`
    }]
  }, {
    type: 'view',
    hide: false,
    style: "text-align:center; margin: 15px;",
    bindtap: `
        let url = '/pages/hometown/tel'
        wx.navigateTo({ url })`
    ,
    child: [{
      type: 'label',
      hide: false,
      style: "text-decoration-line: underline;color: #0000EE",
      innerText: '-老家特产(好吃)-',
      catchtap: `let url = '/pages/book/index'
         wx.navigateTo({ url })`
    }]
  },
  {
    type: "view",
    hide: false,
    style: `text-align:center;border: 1px solid #ee4341;
    border-radius: 3px;
      color: #ee4341;
      text-decoration: none;
    }`,
    innerText: "免费给大家打广告（16737223791）~",
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