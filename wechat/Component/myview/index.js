//index.js
//获取应用实例
// const app = getApp();
var utils = require("../../utils/utils");
// 一定要使用非严格模式
var window = (function (){
   return this;
})();

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
  * 组件的属性列表
  * 用于组件自定义设置
  */
  properties: {
    count: Number,
    taiedata: {
      type: "Object",
      value: {}
    }
  },
  data: {
    // data: {}
  },
  observers: {
    // data: function (data) {
    //  // 赋值
    //  this.setData({
    //    taiedata: this.data.data
    //  });
    // }
  },
  ready: function (options) {
  },

  methods: {
    // 接受数据
    onJss: function (e) {
      this.triggerEvent('jss', e.detail)
    },

    // 统一事件处理
    bindtap: eventhander("bindtap"),
    binderror: eventhander("binderror"),
    bindload: eventhander("bindload"),
    bindscrolltoupper: eventhander("bindscrolltoupper"),
    bindscrolltolower: eventhander("bindscrolltolower"),
    bindscroll: eventhander("bindscroll"),
    bindchange: eventhander("bindchange"),
    bindtransition: eventhander("bindtransition"),
    bindanimationfinish: eventhander("bindanimationfinish"),
    bindgetuserinfo: function (e) {
      // 把当前的点击事件记下来
    //   if (!window.ed) window.ed = {};
    //   window.ed.bindgetuserinfo = e;

    //   // 如果授权了
    //   if (e.detail && e.detail.userInfo) {
    //     // 授权了
    //     var uinfo = wx.getStorageSync('uinfo');

    //     if (!e.detail.userInfo.avatarUrl) {
    //       e.detail.userInfo.avatarUrl = "https://wqs.jd.com/pingou/images/clock_task/5a0697abN8a425d5c.png";
    //     }
    //     if (!e.detail.userInfo.nickName) {
    //       e.detail.userInfo.nickName = "太阿用户";
    //     }

    //     uinfo.avatarUrl = e.detail.userInfo.avatarUrl;
    //     uinfo.city = e.detail.userInfo.city;
    //     uinfo.country = e.detail.userInfo.country;
    //     uinfo.gender = e.detail.userInfo.gender;
    //     uinfo.language = e.detail.userInfo.language;
    //     uinfo.nickName = e.detail.userInfo.nickName;
    //     uinfo.province = e.detail.userInfo.province;
        
    //     // 写入缓存
    //     wx.setStorageSync('uinfo', uinfo);

    //     // 更新用户信息
    //     utils.request("https://onhit.cn/sanpk/login-update", e.detail.userInfo , function (res) {
    //     }); 
    //   }


    //   // 自定义事件
    //   var _info = e.target.dataset.info || e.currentTarget.dataset.info;
    //   if (_info.bindgetuserinfo) {
    //     // 有点击事件的
    //     // 需要冒泡
    //     this.triggerEvent('jss', {detail: _info.bindgetuserinfo})
    //   }
    },
    bindcontact: eventhander("bindcontact"),
    bindgetphonenumber: eventhander("bindgetphonenumber"),
    bindopensetting: eventhander("bindopensetting"),
    bindlaunchapp: eventhander("bindlaunchapp"),
    bindinput: eventhander("bindinput"),
    bindfocus: eventhander("bindfocus"),
    bindblur: eventhander("bindblur"),
    bindconfirm: eventhander("bindconfirm"),
    bindkeyboardheightchange: eventhander("bindkeyboardheightchange"),
    bindsubmit: function (e) {
      // 把当前的点击事件记下来
      // if (!window.ed) window.ed = {};
      // window.ed.bindsubmit = e;

      // // 上报formid
      // utils.reportFormid(e.detail.formId);

      // // 自定义事件
      // var _info = e.target.dataset.info || e.currentTarget.dataset.info;
      // if (_info.bindsubmit) {
      //   // 有点击事件的
      //   // 需要冒泡
      //   this.triggerEvent('jss', {detail: _info.bindsubmit})
      // }
    },
    bindreset: eventhander("bindreset"),
    bindclose: eventhander("bindclose"),
    bindplay: eventhander("bindplay"),
    bindpause: eventhander("bindpause"),
    bindended: eventhander("bindended"),
    bindtimeupdate: eventhander("bindtimeupdate"),
    bindfullscreenchange: eventhander("bindfullscreenchange"),
    bindwaiting: eventhander("bindwaiting"),
    bindprogress: eventhander("bindprogress"),
    bindactiveend: eventhander("bindactiveend"),
    bindready: eventhander("bindready"),
    bindstatuschange: eventhander("bindstatuschange"),
    bindcancel: eventhander("bindcancel"),
    bindpickstart: eventhander("bindpickstart"),
    bindpickend: eventhander("bindpickend"),
    bindchanging: eventhander("bindchanging"),
    bindlinechange: eventhander("bindlinechange"),
  }
});

// 事件
function eventhander (type) {
  return function (e) {
    // 把当前的点击事件记下来
    // 自定义事件
    var _info = e.target.dataset.info || e.currentTarget.dataset.info;
    if (_info[type]) {
      // 有点击事件的,需要冒泡
      console.log('_info is:', _info)
      this.triggerEvent('jss', { detail: { func: _info[type], attr: _info.attr}})
    }
  }
}