(function($){
    $.fn.slbtn = function(sped, tar1, child, playBtn, leftBtn, rightBtn)
                        //순서에 맞게 아래에들어갈 자리에(해당 선택자가 있던 자리) 넣기 
                            
    {
        
        
        
        var th = $(this);
        var wid = parseInt($("tar1").width());
        var n = tar1.length;
        var 
        
        function rBtn(){
            $(tar1).eq(n-1).prependTo($(th));
            $(th).css("margin-left": wid * -1 + "px");
            $(th).not(":animated").animate({
                    "margin-left": wid * -1 + "px"
                }, 900, function() {
        }
        
        function lBtn() {
                $(tar1).not(":animated").animate({
                    "margin-left": wid * -1 + "px"
                }, 900, function() {
                    $(child).eq(0).appendTo($(tar1));
                    $(tar1).css("margin-left", "0px" );
                    
                });
            };
                   $(".secTit").corange();
            // 뒤에 추가로 메소드를 넣고 싶으면 plugin으로 만든 메소드 가 맨뒤로 가도록 앞에 넣을 것 
            //스위치 플레이부분
            var sw1 =true;
            var cw = parseInt($("#slbtn .imgBox").width());
            var intv =setInterval(function(){
                lbnt();   
                
            }, 3000);
            
            function lbtn(){
                $("#slbtn").not(":animated").animate({
                    
                  
                })
                
            }
    
    }(jQuery));