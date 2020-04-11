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
      hide: true,
      wxfill: "userInfo",
      id: '1',
      attr: {
        src: '{{avatarUrl}}',
      },
      mode: '',
      style: "width: 128rpx;height: 128rpx;margin: 20rpx;border-radius: 50%;",
    },{
        type: 'button',
        hide: true,
        id: '2',
        attr: { "open-type": "getUserInfo"},
        bindgetuserinfo: "bindgetuserinfo",
        style: `-webkit-box-flex: 1;
                  line-height: 38px;
                  border-radius: 2px;
                  text-align: center;
                  background: #b33836;
                  color: #fff;
                  overflow: hidden;
                  white-space: nowrap;
                  font-weight: normal;
                  padding: 1px 36px; margin-top:50px`,
        innerText: '点击我',
        bindgetuserinfo2: 'that.onLoad()',
    },
    {
      type: 'text',
      hide: false,
      id:'3',
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
      innerText: '您好！现在开启我们家乡之旅吧，本平台资源暂时有限，如果需要可留言，我们将尽力为您提供。'
    }]
  }, {
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
    }, {
      type: 'view',
      hide: false,
      style: 'text-indent:2em;',
      innerText: '这个平台是个人在工作之余开发的。如果对平台有建议和想法请不吝赐教。'
    }, {
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
        if(option && option.viewData){
          utils.depDealObj(option.viewData, function(obj){
            if(obj.id === '1'){
              if(renderData.userInfo.avatarUrl) {
                obj.hide = false
              } else{
                obj.hide = true
              }
            } else if(obj.id === '2'){
              if(!renderData.userInfo.avatarUrl) {
                obj.hide = false
              } else {
                obj.hide = true
              }
            } else if(obj.id === '3'){
              if(renderData.userInfo.avatarUrl) {
                obj.hide = false
              } else{
                obj.hide = true
              }
            }
          })
        }
        `
      },
      func: ''
    }
  }
}
module.exports = json