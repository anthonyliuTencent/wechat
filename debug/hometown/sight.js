var json = {
  pageInfo: {
    title: '家乡房产'
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
      var IMGPATH2 = 'https://mydear.site/static/image/house/';
      that.note1 =[IMGPATH2 + '1.jpg', 
        IMGPATH2 + '2.jpg',
        IMGPATH2 + '3.jpg',
        IMGPATH2 + '4.jpg', 
        IMGPATH2 + '5.jpg', 
        IMGPATH2 + '6.jpg']
      renderData.note1 = [
        {
          title: '小别墅',
          url: IMGPATH2 + '1.jpg'
        }, {
          title: '银杏',
          url: IMGPATH2 + '2.jpg'
        }, {
          title: '可爱的小花',
          url: IMGPATH2 + '3.jpg'
        },{
          title: '不知道什么',
          url: IMGPATH2 + '4.jpg'
        },{
          title: '老家的房子',
          url: IMGPATH2 + '5.jpg'
        },{
          title: '老家的房子',
          url: IMGPATH2 + '6.jpg'
        }];
      `
    }
  }
}
module.exports = json