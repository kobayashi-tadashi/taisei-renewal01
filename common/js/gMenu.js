
/*
smp_gMenu
*/
$(function(){

  $('.ddBtn').on('click',function(){
    $(this).next().slideToggle('slow');

    if(!$(this).hasClass('isOpen')){
      $(this).addClass('isOpen');

      //icon animation
      iTgt = $(this).find('.ddArrow');
      options = {
        from: 'fa-chevron-down',
        to: 'fa-chevron-up',
        animation: 'verticalFlip'
      };
      iconate(iTgt[0], options);
    }else{
      $(this).removeClass('isOpen');

      //icon animation
      iTgt = $(this).find('.ddArrow');
      options = {
        from: 'fa-chevron-up',
        to: 'fa-chevron-down',
        animation: 'verticalFlip'
      };
      iconate(iTgt[0], options);
    }

  });
});

/*

$(function(){

  $('.ddBtn').click(function(){
    $(this).closest('li').css({"height":"auto"});
    tgt = $(this).closest('li').find('ul.ddMenu').eq(0);
    if(tgt.css('opacity')!=0){
      tgt.css(
        {"visibility":"hidden",
            "opacity":"0"}
        ).slideUp('fast');
    }else{
      tgt.css(
        {"visibility":"visible",
            "opacity":"1"}
        ).slideDown('fast');
    }

  });

});

*/


