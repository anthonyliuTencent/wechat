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
    catchtap:eventhander("catchtap"),
    binderror: eventhander("binderror"),
    bindload: eventhander("bindload"),
    bindscrolltoupper: eventhander("bindscrolltoupper"),
    bindscrolltolower: eventhander("bindscrolltolower"),
    bindscroll: eventhander("bindscroll"),
    bindchange: eventhander("bindchange"),
    bindtransition: eventhander("bindtransition"),
    bindanimationfinish: eventhander("bindanimationfinish"),
    bindgetuserinfo: function (e) {
      var userInfo = wx.getStorageSync('userInfo')
      if (!userInfo.nickName) {
        //没有昵称，需要存储信息到后台
        var updateInfo = {
          ...e.detail.userInfo, openid: userInfo.openid};
        wx.setStorageSync('userInfo', updateInfo);
        console.log('updateInfo is:', updateInfo)
        utils.request({
          url: 'handler/user/adduserinfo',
          data: updateInfo,
          method: 'post',
          success: (data) => {
            console.log('xx is:',data)
          },
        })
      }
      var _info = e.target.dataset.info || e.currentTarget.dataset.info;
      console.log('_info:', _info)
      if (_info.bindgetuserinfo) {
        // 有点击事件的需要冒泡
        this.triggerEvent('jss', { detail: { func: _info.bindgetuserinfo2, attr: _info.attr }})
      }
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
    console.log('_info is:', _info)
    console.log('type is:', type)
    if (_info[type]) {
      // 有点击事件的,需要冒泡
      // console.log('_info is:', _info)
      this.triggerEvent('jss', { detail: { func: _info[type], attr: _info.attr}, option:e.detail})
    }
  }
}