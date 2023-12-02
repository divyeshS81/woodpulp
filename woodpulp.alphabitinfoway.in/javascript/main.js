$('.counter-count').each(function () {
    $(this).prop('Counter-fun',0).animate({
        Counter: $(this).text()
    }, {
      
      //chnage count up speed here
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
}); 