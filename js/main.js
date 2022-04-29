$(function(){
    'use strict';
    $(window).scroll(function(){
       var navbar =$('.navbar');
       if ($(window).scrollTop() >= navbar.height()){
        navbar.addClass('scrolled');
       } else{
        navbar.removeClass('scrolled');
       }
    });
    $('.tab-switch li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tabs-content > div').hide();
        $($(this).data('class')).show();
    });

    $(".carousel").carousel({
        interval:6000
    });
    $(".gear-check").click(function()
    {
      $(".color-option").fadeToggle();
    });

    //change theme color
    var colorLi=$(".color-option ul li");

        colorLi
    .eq(0).css("backgroundColor","#ff8b38").end()
    .eq(1).css("backgroundColor","#e426d5").end()
    .eq(2).css("backgroundColor","#009aff").end()
    .eq(3).css("backgroundColor","#3c763d");
    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
});
