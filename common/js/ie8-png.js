
/*===========================================================================
↓透明PNG
===========================================================================*/
//get useragent
var ua = window.navigator.appVersion.toLowerCase();

$(function(){
  //execute on ie7,8
  if(ua.indexOf("msie 7.") != -1 || ua.indexOf("msie 8.") != -1){
    $('img').each(function(){
      var src = $(this).attr('src');

      if(src.indexOf('.png') != -1){
        $(this).css({
          'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+src+'", sizingMethod="scale");'
        });
      }

    });
  }
});