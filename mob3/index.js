  $(document).ready(function () {
      /*    var po1; 
            var numb;
            var shd;
            
            $(".leftWrap label").click(function(){
                
                var wid = parseInt($(".logo img").width());
                 console.log(wid);
                
                
                
                
                numb =$(this).index();
                po1 = parseInt($(this).position().top);
                shd = parseInt($(".menuOpenWrap").height());               
                               
                               
                $(".subWrap .subwli").eq(numb).css("position","absolute").css( "top", po1+"px").slideUp(200, function(){
                    $(".subWrap .subwli").eq(numb-1).appendTo(".subWrap");
                });
                
                
                  });
                
                
                
                var hd1 = parseInt($(".subWrap").height());
                var subcount = $(".subWrap div").length;
                var ulhd;
                
            
                $(".subWrap .subwli").click(function(){
                    ulhd = (".sub").eq(numb-1).height();
                    
                  
              
              
              });
              
       
                
                
        var lst;
        
      var iWd = parseInt($(".imgWrap").width());
      var count1 =  $(".lbslWrap li").length;
      
      var miw = (lst-iWd)*count1;
      
      
      $(".lbslWrap li").click(function(){
     
          lst = $(this).attr("data-val");
   
              
          $(".imgWrap img").eq(lst).css("margin-left", -miw+"px");
            
   
      });
    */


      var wd = parseInt($(".visual").width());
      var cnt = $(".imgWrap img").length;

      var intvsl = setInterval(function () {
          sld();
      }, 4000);

      function sld() {
          $(".visual .imgWrap").not(":animated").animate({
              "margin-left":
                  -wd + "px"
          });

          $(".imgWrap img").eq(0).appendTo(".imgWrap");
          $(".imgWrap").css("margin-left", "0px");


      }


      var cntQ1 = $(".viewli").length;
      var wi1 = parseInt($(".viewli").width());
      var num1;


      $(".viewli button.right").click(function () {
          num1 = $(this).parent(".viewli").index();
          for (var i = 0; i <= cntQ1-1; i++) {
              $(".viewli").css("margin-left", -wi1 + "px");
              $(".viewli").eq(0).css("margin-left","0px");
          }

      });
      
      
        $(".viewli button.left").click(function () {
          num1 = $(this).parent(".viewli").index();
         if(num1<0) {
              $(".viewli").css("margin-left", -wi1 + "px");
          }

      });



  });
