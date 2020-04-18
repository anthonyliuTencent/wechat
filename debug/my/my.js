var json = {
  pageInfo: {
    title: '个人空间'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `display: flex;
          flex-direction: column;
          align-items: center;
            `,
    child: [{
      type: 'image',
      hide: false,
      wxfill: "userInfo",
      attr:{
        src: '{{avatarUrl}}',
      },
      mode:'',
      style: "width: 128rpx;height: 128rpx;margin: 20rpx;border-radius: 50%;",
      }, 
      {
        type: 'text',
        hide: false,
        wxfill: "userInfo",
        style: "color: #aaa;",
        innerText: '{{nickName}}'
      }
    ]
  }, {
    type: 'view',
    hide: false,
    style: "padding: 5px 10px;text-indent: 2em;",
    child: [{
      type: 'view',
      hide: false,
      wxfill: "userInfo",
      style: `text-indent:2em;font-size: 18px;margin-top: 20px;`,
      innerText:'{{nickName}},您好！现在开启你的娱乐之旅吧，本平台资源暂时有限，如果需要可留言，我们将尽力为您提供。'
    }]
    },{
      type: 'view',
      hide: false,
      style: `padding-top:12px;
        margin-top: 80px;padding: 5px 10px;
        font-family: 'MicroSoft YaHei';
        line-height: 1.5;
        text-indent:0;
        color: #8f8f8f;
        border-top: 1px solid #dfdfdf;
        font-size: 16px;`,
      child: [{
        type: 'view',
        hide: false,
        style: 'font-weight: bold;',
        innerText: '开发者申明'
      },{
          type: 'view',
          hide: false,
          style: 'text-indent:2em;',
          innerText: '这个平台是个人在工作之余开发的。如果对平台有建议和想法请不吝赐教。'
      },{
          type: 'text',
          hide: false,
          style: 'font-weight: bold;',
          innerText: '开发者邮箱： liuyinleidm@163.com'
      }]
    }
  ],
  event: {
    onLoad: {
      request: {
        url: "handler/user/getuserall",
        callback: `let result = data
        data.forEach(function(item){
          renderData.userInfo = item
        })
        console.log('renderData is:', renderData)
        `
      },
      func: ''
    }
  }
}
module.exports = json