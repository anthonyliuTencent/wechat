var json = {
  pageInfo: {
    title: '家乡风光'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: "padding:10px",
    child: [{
      type: 'view',
      hide: false,
      style: "column-count: 2;",
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
      var IMGPATH1 = 'https://mydear.site/static/image/scenety/';
      var IMGPATH2 = 'https://mydear.site/static/image/house/';
      var IMGPATH3 = 'https://mydear.site/static/image/people/';
      that.note1 =[IMGPATH1 + '1.jpg', 
        IMGPATH1 + '3.jpg',
        IMGPATH1 + '4.jpg',
        IMGPATH1 + '5.jpg', 
        IMGPATH1 + '6.jpg', 
        IMGPATH1 + '7.jpg']
      renderData.note1 = [
        {
          title: '田野',
          url: IMGPATH1 + '1.jpg'
        }, {
          title: '我家的院子',
          url: IMGPATH1 + '3.jpg'
        }, {
          title: '去岳阳的渡口',
          url: IMGPATH1 + '4.jpg'
        },{
          title: '我家的长江',
          url: IMGPATH1 + '5.jpg'
        },{
          title: '家的冬天',
          url: IMGPATH1 + '6.jpg'
        },{
          title: '故乡的月亮',
          url: IMGPATH1 + '7.jpg'
        }];
      `
    }
  }
}
module.exports = json