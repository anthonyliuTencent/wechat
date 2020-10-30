var json = {
  pageInfo: {
    title: '阅读须知'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `background-color:#ffffff`,
    child: [{
      type: 'view',
      hide: false,
      style: `width: 100%;`,
      child: [{
        type: 'view',
        hide: false,
        style: `padding-left:10px;padding-top:10px;font-weight: 900;padding-bottom:10px`,
        innerText: "Q：为什么有时候打开目录比较慢? "
      },{
        type: 'view',
        hide: false,
        style: `padding-left:10px;padding-right:10px;`,
        innerText: "A：那是因为您想看的书籍比较大，所以初次加载慢而已，可以尝试进行等待下去，或者回退再进入目录，以后就不会有这个问题。 "
        }, {
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-top:10px;font-weight: 900;padding-bottom:10px`,
          innerText: "Q：为什么有少量书籍章节有重复？ "
        }, {
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-right:10px;`,
          innerText: "A：可能是书籍入库时重复，它不影响您的阅读。当然欢迎通知客服，我们会出掉重复的章节。"
        },{
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-top:10px;font-weight: 900;padding-bottom:10px`,
          innerText: "Q：我能看到及时更新的小说吗? "
        }, {
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-right:10px;`,
          innerText: "A：能，小程序两天更新最新的章节，如果遇到目录不是最新的，在您阅读的时候也会自动更新！ "
        }, {
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-top:10px;font-weight: 900;padding-bottom:10px`,
          innerText: "Q：我想看的小说没有怎么办？ "
        }, {
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-right:10px;`,
          innerText: "A：不要着急，先搜索您要看的小说，如果还没有的话，联系客服告诉您小说的名字，我们录入到库中会第一时间通知您，然后您去搜索该书，记得不要忘记收藏哦！ "
        }, {
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-top:10px;font-weight: 900;padding-bottom:10px`,
          innerText: "Q：这些小说真的都是免费的吗? "
        }, {
          type: 'view',
          hide: false,
          style: `padding-left:10px;padding-right:10px;`,
          innerText: "A：是的，如果您觉得不错，希望能推荐给您的朋友，谢谢！ "
        }]
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