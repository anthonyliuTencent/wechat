var json = {
  pageInfo: {
    title: '父老乡亲'
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
      var IMGPATH3 = 'https://mydear.site/static/image/people/';
      that.note1 =[IMGPATH3 + '1.jpg', 
        IMGPATH3 + '2.jpg',
        IMGPATH3 + '3.jpg',
        IMGPATH3 + '4.jpg', 
        IMGPATH3 + '5.jpg', 
        IMGPATH3 + '6.jpg']
      renderData.note1 = [
        {
          title: '长江施工队',
          url: IMGPATH3 + '1.jpg'
        }, {
          title: '堂妹去婆家',
          url: IMGPATH3 + '2.jpg'
        }, {
          title: '宗亲送亲',
          url: IMGPATH3 + '3.jpg'
        },{
          title: '春耕',
          url: IMGPATH3 + '4.jpg'
        },{
          title: '刘煲粥的房',
          url: IMGPATH3 + '5.jpg'
        },{
          title: '思义的休闲场所',
          url: IMGPATH3 + '6.jpg'
        }];
      `
    }
  }
}
module.exports = json