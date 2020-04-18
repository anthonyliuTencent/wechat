var json = {
  pageInfo: {
    title: '家乡介绍'
  },
  viewData: [{
    type:"image",
    hide: false,
    style:"position: relative;width:100%;height:100vh",
    attr:{
      mode: "aspectFill",
      src: "https://mydear.site/static/image/scenety/5.jpg"
    }
  },
  {
    type: 'view',
    hide: false,
    style: `position: absolute;z-index: 1;display: flex;flex-direction: row;
align-items: center;width: 100%;height: 100%;top:0;color:#0033FF;font-size:22px;text-indent:40px;`,
    innerText: `老家是湖北省监利县白螺镇荆江村，位于湖北和湖南的交接处，虽然是湖北，但是和湖南省岳阳市区才一江之隔。那里有长江渡口，去岳阳很方便。我们那里没什么特产，老家的人都出去广东打工，不富裕。希望混的好的人为家乡做点贡献！`
  }],
  event: {
    onLoad:{
      func: `var x=1`
    }
  }
}
module.exports = json