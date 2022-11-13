$(document).ready(function(){
    $(".openBar").click(function(){
        $( ".leftBar" ).fadeToggle(1);
        $(".openBar__arrow").toggleClass('--rotate180');
        $(".openBar").toggleClass('--rightOpen');
    });

    $(".htmlcssjs").click(function(){
       $(".skills__html-info").fadeIn();
    });
    $(".php").click(function(){
        $(".skills__php-info").fadeIn();
    });
    $(".csharp").click(function(){
        $(".skills__csharp-info").fadeIn();
    });

    $(".skills__close").click(function(){
        $(".skills__html-info").fadeOut();
        $(".skills__php-info").fadeOut();
        $(".skills__csharp-info").fadeOut();
     });
});