/**
 * QQ音乐选项卡Js
 */
(function(){
  var tabList=document.querySelectorAll('.tab a');
  var item=document.querySelectorAll('.music-item .music-list');
  for(var i=0;i<tabList.length;i++){
    tabList[i].index=i;
    tabList[i].onmouseover=function(){
      
        for(var j=0;j<tabList.length;j++){
        tabList[j].className='';
        item[j].style.display='none';
      }
      this.className='current';
      item[this.index].style.display='block'
      
    }
  }
})();


/**
 * 魅族 精彩视频
 */
(function(){
  var oli=document.querySelectorAll('.meizu-content ul li');
  var mask=document.getElementsByClassName('meizu-mask');
  var closeBut=document.getElementsByClassName('close');
  var videoObj=document.getElementsByClassName('mz-video');

  for(var i=0;i<oli.length;i++){
    oli[i].onclick=function(){
      var value=this.getAttribute('data-video');
      videoObj[0].setAttribute('src',value);
      mask[0].style.display='block';
      videoObj[0].play();
    }
  }

  closeBut[0].onclick=function(){
    mask[0].style.display='none';
    videoObj[0].pause();
  }
  
})();


/**
 * 左侧楼层特效
 *  */ 
var flage=true;
$(function(){
  $('.louti ul li').click(function(){
    var _index=$(this).index();
    var _top=$('.louti-box').eq(_index).offset().top;
    $('html,body').animate({"scrollTop":_top},200); 
  })

  $(window).on('scroll',function(){
    flage=true;
       var _scrollTop=$(window).scrollTop();
        if(_scrollTop<300){
          $('.louti').fadeOut();
        }else{
          $('.louti').fadeIn();
        }
          $('.louti ul li').each(function(){
              if(flage){
                var t=$('.louti-box').eq($(this).index()).offset().top;
                if(_scrollTop<=t){
                  flage=false
                  $(this).addClass('current').siblings().removeClass('current');     
                }else{
                  flage=true;
                }
              }
                
          })
      
 
  
  })

});



/**
 * 吸顶盒导航
 */
$(window).on('scroll',function(){
  var top=$(window).scrollTop();
  if(top>500){
    $('.menu-fixed').css({
      "position":'fixed',
      'box-shadow':'0px 0px 10px #666',
    }).animate({
      top:0,
      left:0
    },500)
  }else{
    $('.menu-fixed').css('position','relative')
  }
})


/**
 * 手风琴效果
 */
$('.show-image ul li').hover(function(){

  $(this).stop().animate({
    width:"400px"
  },500);
  $(this).siblings().stop().animate({
    width:"190px"
  },500)

  $(this).find('h4').stop().animate({
    bottom:"0px"
  },200);

  $(this).siblings().find('h4').stop().animate({
    bottom:"-100px"
  },200)

},function(){

 
})







/**
 * 轮播图特效
 */
// $(function(){

//   var i=0;
//   var timer=null;
//   $('.xiaomi .scroll .button span').click(function(){
//     i=$(this).index();
//     $(this).siblings().removeClass('current');
//     $(this).addClass('current');
//     $('.xiaomi .scroll ul li').eq(i).siblings().fadeOut();
//     $('.xiaomi .scroll ul li').eq(i).fadeIn();
//   })


//   //自动轮播
//   function autoPlay(){
//     clearInterval(timer)
//     timer=setInterval(function(){
//       console.log('abc')
//       i++;
//       i=i>=4?0:i;
//       $('.xiaomi .scroll .button span').eq(i).siblings().removeClass('current');
//       $('.xiaomi .scroll .button span').eq(i).addClass('current');
//       $('.xiaomi .scroll ul li').eq(i).siblings().fadeOut();
//       $('.xiaomi .scroll ul li').eq(i).fadeIn();
//     },2000)
//   }

//   autoPlay();

//   //当鼠标放在上面时，暂停播放，移开再接着播放
//   $('.xiaomi .scroll .button span').hover(function(){
//     clearInterval(timer);
//   },function(){
//     autoPlay();
//   })

//   //点击左轮播按扭
//   $('.xiaomi .scroll .prev').click(function(){
//     clearInterval(timer);
//     i--;
//     i=i<=-1?3:i;
//     play(i);
//     autoPlay();
//   })

//   //点击右轮播按扭
//   $('.xiaomi .scroll .next').click(function(){
//     clearInterval(timer);
//     i++;
//     i=i>=4?0:i;
//     play(i);
//     autoPlay();
//   })

//   function play(i){
//     $('.xiaomi .scroll .button span').eq(i).siblings().removeClass('current');
//     $('.xiaomi .scroll .button span').eq(i).addClass('current');
//     $('.xiaomi .scroll ul li').eq(i).siblings().fadeOut();
//     $('.xiaomi .scroll ul li').eq(i).fadeIn();
//   }

// })




/**
 * 底部的图片画廊效果
 */

$(function(){

  var track_w=$('.scrollbar-track').width();
  var thumb_w=$('.scrollbar-thumb').width();
  var max_w=track_w-thumb_w-3;
  var e_x,track_x,thumb_x,x;
  var scroll_w=$('.scroll-item').length*$('.scroll-item').width();
  var scroll_max_w=scroll_w-$('body').width();
 
  //鼠标在滚动手柄上拖动
  $('.scrollbar-thumb').mousedown(function(e){
    //计算鼠标按下时，与scrollbar-thumb左端距离
    e_x=e.pageX;
    track_x=$('.scrollbar-track').offset().left;
    thumb_x=$('.scrollbar-thumb').position().left;
    x=e_x-track_x-thumb_x;

    document.onmousemove=function(e){
         var newe_x=e.pageX;
         var new_x=newe_x-track_x-x;
        new_x= new_x>max_w?max_w:new_x;
        new_x=new_x<=3?3:new_x;
         $('.scrollbar-thumb').css('left',new_x+'px');
         var scroll_width=scroll_max_w*(new_x/max_w);
         $('.gallery-scroll').css('left',-scroll_width);
      }

      document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null; 
      }
      return false;
  })
  //当窗口改变时，获取改变后的窗口大小
  $(window).on('resize',function(){
    scroll_max_w=scroll_w-$('body').width();
  })

})

/**
 * 右侧悬浮工具栏
 */

$(function(){
  $(window).on('scroll',function(){
    var top=$(this).scrollTop();
        if(top>1000){
          $('li.to-top').fadeIn();
        }else{
          $('li.to-top').fadeOut();
        }
  })
  
  //点击返回顶部
  $('li.to-top').on('click',function(){
      $('body,html').animate({
          "scrollTop":"0px"
      },500)
  })

  // //滑动显示
  // $('.tool-bar ul li.bar').hover(function(){
  //   $(this).find('.bar-img').fadeIn();
  //   console.log('sss')
  // },function(){
  //   $(this).find('.bar-img').fadeOut();
  // });
})

