$(document).ready(function () {

    var wd = parseInt($("#content li").width());
    var sw = true;
    var intv = setInterval(function () {
        nAni();
    }, 4000);
    
     var intv2 = setInterval(function(){
      n2Ani();   
     }, 3000);
    
    function nAni() {
        $("#content ul").not(":animated").animate({
            "margin-left": -wd + "px"
        }, 800, function () {
            $("#content li").eq(0).appendTo($("#content ul"));
            $("#content ul").css("margin-left", "0px");
            $("#content .pnWrap .pageNation").removeClass("on");
            $("#content .pnWrap .pageNation").eq(0).appendTo($("#content .pnWrap"));
            $("#content .pnWrap .pageNation").eq(0).addClass("on");
        });
    }
    $("#content .pnWrap .pageNation").click(function () {
        clearInterval(intv);
        var idx = $(this).index();
        for (var i = 0; i < idx - 2; i++) {
            $("#content ul li").eq(0).appendTo($("#content ul"));
            $("#content .pnWrap .pageNation").eq(0).appendTo($("#content .pnWrap"));
        }
        nAni();
        intv = setInterval(function () {
            nAni();
        }, 3000);
    });
    $("#content .pnWrap .pageNation").click(function () {
        if (sw == true) {
            clearInterval(intv);
            $(this).addClass("on");
        } else {
            $(this).removeClass("on");
            nAni();
            intv = setInterval(function () {
                nAni();
            }, 3000);
        }
        sw = !sw;
    });

     var intv1 = setInterval(function () {
        n2Ani();
    }, 4000);
    
            
    function n2Ani() {
        var wd1 = parseInt($("#content2 ul li").width());
        
        $("#content2 ul").not(":animated").animate({
            "margin-left": -wd1 + "px"
        }, 800, function () {
            $("#content2 li").eq(0).appendTo($("#content2 ul"));
            $("#content2 li").eq(0).find(".pageTit1, .pageCom").slideDown(600);
            
            $("#content2 ul").css("margin-left", "0px");
            
            $("#content2 .pnWrap .pageNation").removeClass("on");
            $("#content2 .pnWrap .pageNation").eq(0).appendTo($("#content2 .pnWrap"));
            $("#content2 .pnWrap .pageNation").eq(0).addClass("on");
        });
    }
    $("#content2 .pnWrap .pageNation").click(function () {
        clearInterval(intv);
        var idx = $(this).index();
        for (var i = 0; i < idx - 2; i++) {
            $("#content2 ul li").eq(0).appendTo($("#content2 ul"));
         
            $("#content2 .pnWrap .pageNation").eq(0).appendTo($("#content2 .pnWrap"));
        }
        n2Ani();
        intv1 = setInterval(function () {
            n2Ani();
        }, 5000);
    });
    $("#content2 .pnWrap .pageNation").click(function () {
        if (sw == true) {
            clearInterval(intv);
            $(this).addClass("on");
        } else {
            $(this).removeClass("on");
            n2Ani();
            intv1 = setInterval(function () {
                n2Ani();
            }, 5000);
        }
        sw = !sw;
    });

 
    var banWd = $(window).width();
    $(".proCon .nextBtn, .btnGrp button.item2").click(function () {
        $(".proCon .nextBtn").fadeOut(500);
        $(".proCon .prevBtn").fadeIn(500);
        $("#proSlide").not(":animated").animate({
            "margin-left": -wd + "px"
        }, 800);
        $(".btnGrp button.item1").removeClass("on");
        $(".btnGrp button.item2").addClass("on");
    });
    $(".proCon .prevBtn,  .btnGrp button.item1").click(function () {
        $(".proCon .prevBtn").fadeOut(500);
        $(".proCon .nextBtn").fadeIn(500);
        $("#proSlide").not(":animated").animate({
            "margin-left": "0px"
        }, 800);
        $(".btnGrp button.item2").removeClass("on");
        $(".btnGrp button.item1").addClass("on");
    });

    $(window).on("mousewheel", function () {
        var mscr = parseInt($(window).scrollTop());
        console.log(mscr);
        var conh = parseInt($("#board1").height());
        console.log(mscr);
        
        
        if (mscr <= 200){
            $(".hd").removeClass("on");
          
           
        }
     if (mscr >= 400) {
            
           $(".hd").addClass("on");
         
      
        } 
             
        
    });
    

    
    $(".con").hover(function(){
     $(this).find(".hvpage").css("display","block");
  
        
    });
        $(".con").mouseleave(function(){
        $(this).find(".hvpage").css("display","none");
        
    });
    
});
