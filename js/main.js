!function(){
  var duration = 50
  /*快慢按钮的切换 */
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget)   // button
    let speed = $button.attr('data-speed')
    //console.log(speed)
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })


    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id 
        id = setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
              id = setTimeout(run, duration)
            }else{
              fn && fn.call()
            }
        },duration)
    }
    let code = `
/*
* 今天我们来画一个皮卡丘~
* 首先，需要准备皮卡丘的皮
 */
.preview{
  height: 100%;
  border:1px solid green;
  display: flex;   /*居中*/
  justify-content: center;
  align-items: center;
  background: #FEE433;
}
.wrapper{
  width: 100%;
  height: 165px;
  /*border: 1px solid red;*/
  position: relative;
}
/* //或利用文档流原理：后面压前面的，把lowerLip-wrapper前移
.wrapper > :not(:last-child){
  z-index: 1;
}
*/

/*
 * 接下来，我们来画一个鼻子~
 */
.nose{
  width: 0px;
  height: 0px;
  /*border: 11px solid red;*/
  border-style: solid;
  border-width: 12px;
  /*border-color: red green yellow blue;*/
  border-color: black transparent transparent;
  border-radius: 11px;
  /*background: black;*/
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
  /*transform: translateX(-50%)*/
}
/*
 * 画好了之后当然是画眼睛啦~
 */
.eye{
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  /*left: 50%;*/
  border-radius: 50%;
  border: 2px solid #000000;   /*有border-box加border不影响宽高*/
}
/*
 * 眼睛里面的珠子
 */
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top:-1px;
  border: 2px solid #000;
}
/*
 * 左眼在左边（废话）
 */
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/*
 * 右眼在右边（废话）
 */
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
 * 然后，我们再来画它的脸颊~
 */
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
} 
/*
 * 将脸放到正确的位置
 */
.face.left{
  right: 50%;
  /*top: 85px;*/
  margin-right: 116px;
}
.face.right{
  left: 50%;
  /*top: 85px;*/
  margin-left: 116px;
}
/*
 * 然后就是它的嘴巴啦~
 * 首先是它的上嘴唇
 */
.upperLip{
  height: 25px;
  width: 80px;
  border: 2px solid black;
  /*border-radius: 15px/10px;    //椭圆 */
              
  position: absolute;
  top: 50px;
  background: #FEE433;
}
.upperLip.left{
  right: 50%;
  /*top: 52px;*/
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left: 50%;
  /*top: 52px;*/
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*
 * 接着是下嘴唇
 */
.lowerLip-wrapper{
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  /*  z-index: -1;  */
  /*border: 1px solid red;*/
  height: 110px;
  width: 300px;
  overflow: hidden;
}
.lowerLip{
  width: 300px;
  height: 3500px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;  
  overflow: hidden;
}
/*
 * 还要记得画出它的舌头才行~
 */
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/*
 * 好啦，这只皮卡丘送给你~
 */
`
    writeCode('',code)

}.call()