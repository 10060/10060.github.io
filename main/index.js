$(document).ready(function () {

    setTimeout(function () {

        $(".loading").fadeOut(400);

    }, 5000);



    $(".loading").on("click", function () {

        $(this).fadeOut(100);

    });





    var ht = parseInt($(window).height());
    var winHalf = parseInt($(window).width() / 2);
    var first1 = $(".conWrap li").eq(0);
    var first2 = parseInt($(".view").width());
    var wd1 = parseInt($(".con").width());
    var wd2 = parseInt($(this).siblings().width());
    var pageLast = $(".conWrap li").length;
    var sc1 = $(window).scrollLeft();
    var sc2 = $(".Wrap").width();

    console.log(winHalf);


    $(window).on("mousewheel", function (e) {
        if (e.originalEvent.wheelDelta < 0) { // 내려가는거
            $("html, body").not(":animated").animate({
                scrollLeft: "+=" + wd2 + "px"
            }, 500, function () {
                //                        $(".conWrap li").eq(1).appendTo(".conWrap");
                $(".conWrap li").eq(0).appendTo(".conWrap");

                $(".conWrap").css("margin-left", first2 + "px");
            });
        } else { //올라가는거
            $("html, body").not(":animated").animate({
                scrollLeft: "-=" + wd2 + "px"
            }, 500, function () {
                $(".conWrap li").eq(pageLast - 1).prependTo(".conWrap");
                $(".conWrap").css("margin-left", first2 + "px");
            });
        }
        return false;
    });

    $("#toFirst").click(function () {
        $(".Wrap").scrollLeft(0);
    });




    $(".conWrap li").slice(1).hover(function () {
        $(this).css("width", "3%");
        $(this).find(".txM, .txD , .num, .pgImg, .pgimg, .more, .text1").addClass("on");
        $(this).find(".pgimg").css("display", "block");
        $(this).siblings().css("width", "1.1%");
        $(this).siblings().find(".txM, .txD, .num, .pgImg, .pgimg, .more , .text1").removeClass("on");

    });


    $(".conWrap li").mouseleave(function () {
        //            $(".conWrap li").eq(1).css("width", "3%");
        //            $(".conWrap li").eq(0).css("widht", "1.1%");
        $(this).css("width", "1.1%");
        $(this).find(".txM, .txD, .num, .pgImg, .pgimg, .text1").removeClass("on");
        $(this).find(".pgimg").css("display", "none");
        $(this).siblings().find(".pgImg, .pgimg, .more, .num, .txM , .text1").removeClass("on");





    });


    $(".wd50").css("widht", winHalf + "px");


       $(".more").hover(function () {
         $(this).addClass("on1");
         }); 
    
      $(".more").hover(function () {
         $(this).removeClass("on1");
         }); 
       



    var open1 = true;
    $(".ck1").on("click", function () {
        $(".open").toggleClass("on");

        if (open1 == true) {
            $(this).text("CLOSE");
        } else {
            $(this).text("OPEN");
        }

        open1 = !open1;

    });






});
