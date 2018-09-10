import octoParse from '../../lib/index.js';
Page({
  data: {
    name: 1
  },
  onLoad: function () {
    var that = this;
    /**
     * html解析示例
     */
    var article = `< !DOCTYPE HTML ><!--注释: octoParse试验文本-->
    <div>
      <img id="img1" class=".test .testImg2"  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3492149706,1549268323&fm=26&gp=0.jpg" alt="test" title="girl"> 
    </div>
    <div class=".block">okkkkk</div>
    <a class=".testA .testB" href="www.baidu.com">测试链接一</a>
    <a href="www.baidu.com">测试链接二</a>
    <a id="testId" href="www.baidu.com">测试链接三</a>
    `;
    function showImg(e){
      console.log('gg')
    }
    function bindATagAction(e){
      console.log('hello yanxiaobo');
    }
    function bindATagAction2(e){
      console.log('are u ok?');
    }
    let params = {
      type: 'html',
      data: article
    }
    let maxRes = octoParse.htmlParse(params);
    console.log('解析的结果是', maxRes);
    that.setData({
      article:maxRes
    })
    octoParse.mountAction(that,[
      {
        tag:'img',
        filter: '#img1',
        events:{
          tap: showImg
        }
      },
      {
        tag:'div',
        filter: '.block',
        events:{
          tap: bindATagAction
        }
      },
      {
        tag:'a',
        filter: '.testA',
        events:{
          tap: bindATagAction
        }
      },
      {
        tag:'a',
        filter: '#testId',
        events:{
          tap: bindATagAction2
        }
      }
    ]);
  }

})
