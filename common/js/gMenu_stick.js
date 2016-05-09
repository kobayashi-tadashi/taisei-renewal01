$(function(){
  //メニューを複製

  dh = jQuery('.header_wrapper').clone(true).insertAfter('#sb-site').addClass('sticked');


  //when page opend
  if(window.innerWidth <= 750){
    $('.header_wrapper').css('display','none');
    dh.css({'position':'fixed','top':'0','width':'100%','z-index':'50','display':'block','height':'auto'});
  }



  //when page resized
  var timer = false;
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
          console.log('resized');
          if(window.innerWidth <= 750){
            $('.header_wrapper').css('display','none');
            dh.css({'position':'fixed','top':'0','width':'100%','z-index':'50','display':'block','height':'auto'});

          }else{
            $('.header_wrapper').css('display','block');
            dh.css('display','none');
          }
      }, 200);
  });




  //when page scrolled
  $(window).scroll(function(){ //スクロールイベント
    var scrTop = $(this).scrollTop();
    if(scrTop > 50){
      $('.header_wrapper').css('display','none');
      dh.css({'position':'fixed','top':'0','width':'100%','z-index':'50','display':'block','height':'auto'});

    }else{
      if(window.innerWidth <= 750){
        $('.header_wrapper').css('display','none');
        dh.css({'position':'fixed','top':'0','width':'100%','z-index':'50','display':'block','height':'auto'});

      }else{
        $('.header_wrapper').css('display','block');
        dh.css('display','none');
      }
    }
  });
});
