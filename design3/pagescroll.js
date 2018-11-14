 $(window).on("mousewheel", function(e) {
                if (e.originalEvent.wheelDelta < 0) {
                    $("html, body").not(":animated").animate({
                        scrollTop: "+=" + hd + "px"
                    }, 900);
                } else {
                    $("html, body").not(":animated").animate({
                        scrollTop: "-=" + hd + "px"
                    }, 900);
                }
                return false;
            });

