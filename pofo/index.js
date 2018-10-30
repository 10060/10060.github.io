        $(document).ready(function () {
                    var d = false;
                    $("figure").on('mousewheel DOMMouseScroll', function (e) {
                        var E = e.originalEvent;
                        delta = 0;
                        if (E.detail) {
                            delta = E.detail * -40;
                        } else {
                            delta = E.wheelDelta;
                        };

                        var a = parseInt($(".con").css("margin-left"));
                        var b = $(".con li").width();
                        var c = $(".con li").length;

                        if (delta < 0 && a > (c - 1) * -b && !d) {
                            // 마우스 휠을 아래로 내렸을 경우
                            d = true;
                            $('.con').stop().animate({
                                "margin-left": a += -b
                            }, 400, function () {
                                d = false;

                            });
                            $(".con li").eq(-1).appendTo($(".con"));
                            $(".con").css("margin-left", "0px");

                        };

                        if (a < b) {

                            $(".con").css("margin-left", "0px");
                        };

                        var conMAR = $(".con").css("margin-left");

                        if (delta > 0 && a < 0 && !d) {
                            // 마우스 휠을 위로 올렸을 경우
                            d = true;
                            $('.con').stop().animate({
                                "margin-left": a += b
                            }, 400, function () {
                                d = false;
                            });
                            //margin-left값이 0일때 스크롤 반대로 하면 eq (마지막으로 가기

                            if (a == 0) {

                                $(".con li").eq(5).prependTo(".con");
                            };
                        };


                        if (a = b) {

                            $(".con").css("margin-left", "0px");
                        };






                        $(".pgnum li").on("click", function () {
                            var pgnum1 = $(this).index();
                            var pgMin = pgW * pgnum1;
                            var pgW = parseInt($(".con li").width());
                            $(".con li").eq(pgnum1).stop().animate({
                                "margin-left": -pgMin + "px"
                            }, 300);

                            $(".con li").eq(0).prependTo($(".con"));
                            $(".con").css("margin-left", pgW + "px");
                        });





                    });
