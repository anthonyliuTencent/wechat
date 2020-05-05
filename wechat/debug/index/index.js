var json = {
  pageInfo: {
    title: '首页'
  },
  viewData: [{
    type: 'view',
    hide: false,
    style: `font-family: Times New Roman,Georgia,Serif;
            padding-top: 10px;
            padding-bottom: 20px;
            margin-top: 10px;
            color: #FF6600;
            background-color: #ffffff;
            padding-left: 10px;
            padding-right: 10px;
            `,
   child: [{
     type:"view",
     hide: false,
     bindtap:`wx.showModal({
       "title":"阅读须知",
       "showCancel":false,
       "content":"当您初次打开书的时候，页面打开可能比较慢，表示该书在加载中，请您稍等下。如果您有疑问：邮箱：liuyinleidm@163.com。",
     })`,
     style:` width:60px; text-align:center;height:20px;background-color:#f60;border-radius:10rpx;position:fixed;color:#ffffff; font-size:12px;top:100px;z-index:999`,
     innerText:"阅读须知"
   },{
       type: 'view',
       hide: false,
       style: 'overflow:hidden;white-space:nowrap;width: 100%;',
       child: [{
         type: 'scroll-view',
         hide: false,
         style: `width:100%;color: #f60;font-size:14px;top:-3px`,
         attr: { 'scroll-x': true },
         child: [{
           type: 'view',
           innerText: '玄幻魔法',
           bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=1'});",
           style: 'display:inline-block;width: 60px;'
         },
         {
           type: 'view',
           innerText: '武侠修真',
           bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=2'});",
           style: 'display:inline-block;width: 60px;'
         }, {
           type: 'view',
           innerText: '都市言情',
           bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=3'});",
           style: 'display:inline-block;width: 60px;'
         }, {
           type: 'view',
           innerText: '历史军事',
           bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=4'});",
           style: 'display:inline-block;width: 60px;'
         }, {
           type: 'view',
           innerText: '网络动漫',
           bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=5'});",
           style: 'display:inline-block;width: 60px;'
         }, {
           type: 'view',
           innerText: '科幻小说',
           bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=6'});",
           style: 'display:inline-block;width: 60px;'
         }]
       },{
         type: 'view',
         hide: false,
        wxfill:'keyword',
         style: `display: flex;margin-top:20px;position:relative`,
         child: [{
             type: 'input',
             hide: false,
           bindinput: ` that.keyword = option.value;  
            `,
             style: `width:460rpx;
                height:70rpx;
                background: rgb(245, 245, 245);
                border-radius:30rpx;
                padding-left: 20rpx;
                margin-right:20rpx;
                margin-top:-8px;
                align-items: center;color:#000000`,
             attr: {
               type: "text",
               value:"{{keyword}}",
               placeholder: '请输入书名或者作者',
               "confirm-type": 'search'
             },
         },{
           type:'icon',
           hide:false,
           bindtap:`
            let viewTemplate = JSON.parse(that.viewTemplateStr)
            var _temp = utils.goViews(viewTemplate, that.renderData);
            that.setData({
              viewData: _temp
            });`,
             style:'display:position;margin-left:-5px;margin-right:5px',
           attr:{
             type:'clear',
             size:20
           }
         },{
             type: 'button',
             hide: false,
             bindgetuserinfo: "bindgetuserinfo",
             bindtap: `
             let keyword = that.keyword
             that.renderData.keyword = {
               keyword: that.keyword
             }
             wx.redirectTo({url: '/pages/hometown/index?keyword='+keyword});
             `,
             style: `width: 20rpx; font-size:14px;
             height: 70rpx; display:inline; background-color:#f60; color:#ffffff`,
             innerText: "搜索"
         }]
       }]
     }
   ]
  }, {
    type: 'view',
    hide: false,
    style: "padding-left: 12px;margin-top: 12px;padding-top: 5px;background-color: #ffffff;"
    ,
    child: [{
      type: 'view',
      hide: false,
      style: `border-left:3px solid red;color: #4c4c4c;font-size: 14px;height: 25px;border-top: 1px solid #dfdfdf;border-bottom: 1px solid #dfdfdf;padding: 11px 8px 0;background: #f2f2f2;line-height: 14px;`,
      child: [{
        type: 'view',
        hide: false,
        style: "padding-left: 7px;",
        innerText: '值得阅读'
      }, {
        type: 'view',
        hide: false,
        style: "font-family:'Franklin Gothic Medium', 'Arial Narrow';padding-left: 6px;font-size: 12px;color:#969696;margin-top: -13px;padding-left: 66px;",
        innerText: '个人强烈推荐'
      },{
        type: 'view',
        hide: false,
          bindtap: `if(that.index > 6){
            that.index = 1;
          }else {
            that.index  =  that.index + 1;
          }
        that.renderData.goodbook = 
        that.goodbook.slice((that.index-1)*8, that.index*8);
        let viewTemplate = JSON.parse(that.viewTemplateStr)
        var _temp = utils.goViews(viewTemplate, that.renderData);
        that.setData({
          viewData: _temp
        });`,
        style: "font-weight: 400;margin-top: -13px;color: #999;float: right;font-size: 12px;",
        innerText: '换一批'
      }]
    }]
  },{
    type: 'view',
    hide: false,
      style: `background-color:#ffffff;display: flex;justify-content: center;
flex-wrap: wrap;`,
    child: [{
      wxfor: 'goodbook',
      template: `{"bindtap":"wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});", "type":"image","hide":false,"style":"height:120px;width:85px;padding: 18px 3px;","attr":{"book_id":"{{book_id}}","lazy-load":true,"src":"{{book_cover_img}}"},"child":[{"type":"view","hide":false,"style":"font-size: 14px;display: block;text-align: center;","innerText":"{{book_name}}"}]}`
    }]
  }, {
    type: 'view',
    hide: false,
    style: `
      padding-left: 12px;
      margin-top: 12px;
      padding-top: 5px;
      background-color: #ffffff;`,
    child: [{
      type: 'view',
      hide: false,
      style: `border-left: 3px solid red;
        color: #4c4c4c;
        font-size: 14px;
        height: 25px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        padding: 11px 8px 0;
        background: #f2f2f2;
        line-height: 14px;`,
      child: [{
        type: 'view',
        hide: false,
        style: `padding-left: 7px;`,
        innerText: '玄幻魔法'
      },{
        type: 'view',
        hide: false,
        style: "font-weight: 400;margin-top: -13px;color: #999;float: right;font-size: 12px;",
          bindtap: "wx.redirectTo({url: '/pages/hometown/index?category=1'});",
        innerText: 'MORE'
      }]
    }]
  }, {
    wxfor: 'xuanbook',
    template: `{
	"bindtap": "wx.redirectTo({url: '/pages/book/index?id='+attr.book_id});",
	"type": "view",
	"attr": {
		"book_id": "{{book_id}}"
	},
	"hide": false,
	"style": "padding-left: 12px;padding-top: 5px;padding-bottom: 5px;background-color: #ffffff;border-bottom:1px solid #eeeeee;",
	"child": [{
		"type": "view",
		"hide": false,
		"style": "width: 20%;padding-top: 6px;float: left;padding-top: 12px;",
		"child": [{
			"type": "image",
			"hide": false,
			"style": "width: 100%;",
			"attr": {
        "lazy-load":true,
				"mode": "widthFix",
				"src": "{{book_cover_img}}"
			}
		}]
	}, {
		"type": "view",
		"hide": false,
		"style": "width: 78%;float: right;padding-top: 10px;",
		"child": [{
			"type": "view",
			"hide": false,
			"child": [{
				"type": "view",
				"hide": false,
				"style": "font-weight: bold;",
				"innerText":"{{book_name}}"
			}]
		},
    {
			"type": "view",
			"hide": false,
			"style": "font-size:12px;text-overflow:ellipsis;overflow:hidden;word-break: break-all;display:-webkit-box;-webkit-line-clamp:3;padding-right: 8px;-webkit-box-orient:vertical;padding-top: 8px;",
			"innerText": "{{book_introduce}}"
		},{
			"type": "view",
			"hide": false,
			"style": "font-size:12px;color: #969696;float: right;padding: 5px;",
			"innerText": "作者：{{book_author}}"
    }]
	}]
}`
  },
  {
      type: 'view',
      hide: false,
      style: `
      padding-left: 12px;
      margin-top: 12px;
      padding-top: 5px;
      background-color: #ffffff;`,
      child: [{
        type: 'view',
        hide: false,
        style: `border-left: 3px solid red;
        color: #4c4c4c;
        font-size: 14px;
        height: 25px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        padding: 11px 8px 0;
        background: #f2f2f2;
        line-height: 14px;`,
        child: [{
          type: 'view',
          hide: false,
          style: `padding-left: 7px;`,
          innerText: '武侠修真'
        },
        {
            type: 'view',
            hide: false,
            style: "font-weight: 400;margin-top: -13px;color: #999;float: right;font-size: 12px;",
            bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=2'});",
            innerText: 'MORE'
          }
        ]
      }]
    }, {
      wxfor: 'wubook',
    template: `{
	"bindtap": "wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});",
	"type": "view",
	"attr": {
		"book_id": "{{book_id}}"
	},
	"hide": false,
	"style": "padding-left: 12px;padding-top: 5px;padding-bottom: 5px;background-color: #ffffff;border-bottom:1px solid #eeeeee;",
	"child": [{
		"type": "view",
		"hide": false,
		"style": "width: 20%;padding-top: 6px;float: left;padding-top: 12px;",
		"child": [{
			"type": "image",
			"hide": false,
			"style": "width: 100%;",
			"attr": {
        "lazy-load":true,
				"mode": "widthFix",
				"src": "{{book_cover_img}}"
			}
		}]
	}, {
		"type": "view",
		"hide": false,
		"style": "width: 78%;float: right;padding-top: 10px;",
		"child": [{
			"type": "view",
			"hide": false,
			"child": [{
				"type": "view",
				"hide": false,
				"style": "font-weight: bold;",
				"innerText":"{{book_name}}"
			}]
		},
    {
			"type": "view",
			"hide": false,
			"style": "font-size:12px;text-overflow:ellipsis;overflow:hidden;word-break: break-all;display:-webkit-box;-webkit-line-clamp:3;padding-right: 8px;-webkit-box-orient:vertical;padding-top: 8px;",
			"innerText": "{{book_introduce}}"
		},{
			"type": "view",
			"hide": false,
			"style": "font-size:12px;color: #969696;float: right;padding: 5px;",
			"innerText": "作者：{{book_author}}"
    }]
	}]
}`
    },
    {
      type: 'view',
      hide: false,
      style: `
      padding-left: 12px;
      margin-top: 12px;
      padding-top: 5px;
      background-color: #ffffff;`,
      child: [{
        type: 'view',
        hide: false,
        style: `border-left: 3px solid red;
        color: #4c4c4c;
        font-size: 14px;
        height: 25px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        padding: 11px 8px 0;
        background: #f2f2f2;
        line-height: 14px;`,
        child: [{
          type: 'view',
          hide: false,
          style: `padding-left: 7px;`,
          innerText: '都市言情'
        },
        {
            type: 'view',
            hide: false,
            style: "font-weight: 400;margin-top: -13px;color: #999;float: right;font-size: 12px;",
            bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=3'});",
            innerText: 'MORE'
          }
        ]
      }]
    }, {
      wxfor: 'citybook',
      template: `{
	"bindtap": "wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});",
	"type": "view",
	"attr": {
		"book_id": "{{book_id}}"
	},
	"hide": false,
	"style": "padding-left: 12px;padding-top: 5px;padding-bottom: 5px;background-color: #ffffff;border-bottom:1px solid #eeeeee;",
	"child": [{
		"type": "view",
		"hide": false,
		"style": "width: 20%;padding-top: 6px;float: left;padding-top: 12px;",
		"child": [{
			"type": "image",
			"hide": false,
			"style": "width: 100%;",
			"attr": {
        "lazy-load":true,
				"mode": "widthFix",
				"src": "{{book_cover_img}}"
			}
		}]
	}, {
		"type": "view",
		"hide": false,
		"style": "width: 78%;float: right;padding-top: 10px;",
		"child": [{
			"type": "view",
			"hide": false,
			"child": [{
				"type": "view",
				"hide": false,
				"style": "font-weight: bold;",
				"innerText":"{{book_name}}"
			}]
		},
    {
			"type": "view",
			"hide": false,
			"style": "font-size:12px;text-overflow:ellipsis;overflow:hidden;word-break: break-all;display:-webkit-box;-webkit-line-clamp:3;padding-right: 8px;-webkit-box-orient:vertical;padding-top: 8px;",
			"innerText": "{{book_introduce}}"
		},{
			"type": "view",
			"hide": false,
			"style": "font-size:12px;color: #969696;float: right;padding: 5px;",
			"innerText": "作者：{{book_author}}"
    }]
	}]
}`
    },
    {
      type: 'view',
      hide: false,
      style: `
      padding-left: 12px;
      margin-top: 12px;
      padding-top: 5px;
      background-color: #ffffff;`,
      child: [{
        type: 'view',
        hide: false,
        style: `border-left: 3px solid red;
        color: #4c4c4c;
        font-size: 14px;
        height: 25px;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        padding: 11px 8px 0;
        background: #f2f2f2;
        line-height: 14px;`,
        child: [{
          type: 'view',
          hide: false,
          style: `padding-left: 7px;`,
          innerText: '历史军事'
        },
          {
            type: 'view',
            hide: false,
            style: "font-weight: 400;margin-top: -13px;color: #999;float: right;font-size: 12px;",
            bindtap: "wx.navigateTo({url: '/pages/hometown/index?category=4'});",
            innerText: 'MORE'
          }
        ]
      }]
    }, {
      wxfor: 'historybook',
      template: `{
	"bindtap": "wx.navigateTo({url: '/pages/book/index?id='+attr.book_id});",
	"type": "view",
	"attr": {
		"book_id": "{{book_id}}"
	},
	"hide": false,
	"style": "padding-left: 12px;padding-top: 5px;padding-bottom: 5px;background-color: #ffffff;border-bottom:1px solid #eeeeee;",
	"child": [{
		"type": "view",
		"hide": false,
		"style": "width: 20%;padding-top: 6px;float: left;padding-top: 12px;",
		"child": [{
			"type": "image",
			"hide": false,
			"style": "width: 100%;",
			"attr": {
        "lazy-load":true,
				"mode": "widthFix",
				"src": "{{book_cover_img}}"
			}
		}]
	}, {
		"type": "view",
		"hide": false,
		"style": "width: 78%;float: right;padding-top: 10px;",
		"child": [{
			"type": "view",
			"hide": false,
			"child": [{
				"type": "view",
				"hide": false,
				"style": "font-weight: bold;",
				"innerText":"{{book_name}}"
			}]
		},
    {
			"type": "view",
			"hide": false,
			"style": "font-size:12px;text-overflow:ellipsis;overflow:hidden;word-break: break-all;display:-webkit-box;-webkit-line-clamp:3;padding-right: 8px;-webkit-box-orient:vertical;padding-top: 8px;",
			"innerText": "{{book_introduce}}"
		},{
			"type": "view",
			"hide": false,
			"style": "font-size:12px;color: #969696;float: right;padding: 5px;",
			"innerText": "作者：{{book_author}}"
    }]
	}]
}`
    }
  ],
  event: {
    onReady: "wx.showLoading({title: '加载中...'})",
    onLoad: {
      request: {
        url: "handler/book/getsomebook",
        callback: ` var goodbook = data.goodbook;
           var citybook = data.citybook;
           var historybook = data.historybook;
           var wubook = data.wubook;
           var xuanbook = data.xuanbook;
        that.goodbook =  goodbook;
        that.index = 1;
        renderData.goodbook = goodbook.slice(0, that.index*8);
        renderData.citybook = citybook;
        renderData.wubook = wubook;
        renderData.xuanbook = xuanbook;
        renderData.historybook = historybook;
        wx.hideLoading()
        `
      },
      func: ''
    }
  }
}
module.exports = json