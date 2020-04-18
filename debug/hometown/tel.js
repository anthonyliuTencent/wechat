var json = {
  pageInfo: {
    title: '通讯录'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `width: 98%;margin-left: 1%;`,
    child: [{
      type: 'view',
      hide: false,
      style: `display: flex;
        justify-content: space-between; /* 项目位于各行之间留有空白的容器内。 */
        background-color: #fffb00;
        width: 100%;
        font-size: 35rpx;
        color: #330e0e;
        text-align: center;
        font-weight: 900;`,
      child: [{
        type: 'view',
        hide: false,
        style:`  display: flex;
            align-items: center;
            justify-content: center;
            height: 80rpx;`,
        innerText:"姓名"
      }, {
          type: 'view',
          hide: false,
          style: `display: flex;
            align-items: center;
            justify-content: center;
            height: 80rpx;`,
          innerText: "电话"
        }]
    },{
      type:'view',
      hide:false,
      style: `display: flex;
        justify-content: space-between; /* 项目位于各行之间留有空白的容器内。 */
        width: 98%;
        font-size: 35rpx;
        color: #330e0e;
        text-align: center;
        height:80rpx;`,
      child:[{
        type:'view',
        hise:false,
        style:'',
        innerText:'刘殷雷'
      },
        {
          type: 'view',
          hise: false,
          style: '',
          innerText: '15818759097'
        }
      ]
      }, {
        type: 'view',
        hide: false,
        style: `display: flex;
        justify-content: space-between; /* 项目位于各行之间留有空白的容器内。 */
        width: 98%;
        font-size: 35rpx;
        color: #330e0e;
        text-align: center;
        height:80rpx;`,
        child: [{
          type: 'view',
          hise: false,
          style: '',
          innerText: '王敏'
        },
        {
          type: 'view',
          hise: false,
          style: '',
          innerText: '16273232921'
        }
        ]
      }, {
        type: 'view',
        hide: false,
        style: `display: flex;
        justify-content: space-between; /* 项目位于各行之间留有空白的容器内。 */
        width: 98%;
        font-size: 35rpx;
        color: #330e0e;
        text-align: center;
        height:80rpx;`,
        child: [{
          type: 'view',
          hise: false,
          style: '',
          innerText: '张辉'
        },
        {
          type: 'view',
          hise: false,
          style: '',
          innerText: '15272232482'
        }
        ]
      }, {
        type: 'view',
        hide: false,
        style: `display: flex;
        justify-content: space-between; /* 项目位于各行之间留有空白的容器内。 */
        width: 98%;
        font-size: 35rpx;
        color: #330e0e;
        text-align: center;
        height:80rpx;`,
        child: [{
          type: 'view',
          hise: false,
          style: '',
          innerText: '刘峰'
        },
        {
          type: 'view',
          hise: false,
          style: '',
          innerText: '13480225766'
        }
        ]
      }, {
        type: 'view',
        hide: false,
        style: `display: flex;
        justify-content: space-between; /* 项目位于各行之间留有空白的容器内。 */
        width: 98%;
        font-size: 35rpx;
        color: #330e0e;
        text-align: center;
        height:80rpx;`,
        child: [{
          type: 'view',
          hise: false,
          style: '',
          innerText: '刘云'
        },
        {
          type: 'view',
          hise: false,
          style: '',
          innerText: '16827129128'
        }
        ]
      }]
  }],
  event: {
    onLoad: {
      func: `
      var x=1
      `
    }
  }
}
module.exports = json