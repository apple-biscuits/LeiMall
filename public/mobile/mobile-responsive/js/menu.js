$(function(){
  /*左侧二级菜单 */
  $('.side .side-bar h3').click(function(){
    var w=$(window).outerWidth();
    if(w<=1400){
      $('.side').css('width',260);
    }
     $(this).siblings().slideToggle();
     $(this).parent().toggleClass('current');
  });

window.addEventListener('resize',function(){
  var w=$(window).outerWidth();
  if(w<=1400){
    
    $('.side .side-bar ul').css('display','none');
    $('.side .side-bar').removeClass('current');
    $('.side').css('width','75px');
  }else{
    $('.side').css('width','260px');
  }

})

window.addEventListener('load',function(){
  var w=$(window).outerWidth();
  if(w<=1400){
    
    $('.side .side-bar ul').css('display','none');
    $('.side .side-bar').removeClass('current');
    $('.side').css('width','75px');
  }else{
    $('.side').css('width','260px');
  }
})

$('.side .close').click(function(){
    var w=$('.side').width();
    if(w>100){
      $('.side').animate({"width":"75px"},100);
      $('.side .side-bar ul').css('display','none');
      $('.side .side-bar').removeClass('current');
    }else{
      $('.side').animate({"width":"260px"},100)
    }
    
})



/*顶部导航 */
$('.top-nav span').click(function(){
  $(".top-nav ul").slideToggle();
})
})

window.addEventListener('resize',function(){
  var w=$(window).outerWidth();
  if(w>768){
    $('.top-nav ul').show();
  }else{
    $('.top-nav ul').hide();
  }
})


