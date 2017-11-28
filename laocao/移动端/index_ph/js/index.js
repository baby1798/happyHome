$(document).ready(function(){
	var i=0;
        function mq(){  
            $("#mq").animate({"left":"-=100%"},1000,function(){
                $(this).append($(this).children().first());
                $(this).css("left","0");
                $(this).stop(true,true);
                i++;
                if(i>2){
                    i=0;
                }
                $("#mk").children("span:eq("+i+")").addClass("m").siblings().removeClass("m");
            });
        }
        j=setInterval(mq,1000);
        $("#banner").hover(function(){
            clearInterval(j);
        },function(){
            j=setInterval(mq,1000)
        });
    })