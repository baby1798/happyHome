//随机验证码
   window.onload=function(){
        var sjyzm=document.getElementById("sjyzm");
        var codes="";
        sjyzm.onclick=function(){
        var code="";

        var yzm=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
         
       for(i=0;i<4;i++){
         var col="";
         var c=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        for (j=0;j<6;j++){
        var a=Math.floor(Math.random()*100)%16;
         col+=c[a];
        }
        var b;
         var siz=['1','2','3','4','5','6'];
         var s=Math.floor(Math.random()*100)%6;
        b=siz[s];
       var x=Math.floor(Math.random()*100)%62;
         code+='<font color="#'+col+'" size="'+b+'">'+yzm[x]+'</font>';
        }

        sjyzm.innerHTML=code;
        }
    }

$(document).ready(function(){
	//城市选择tab栏切换

		$("#city").find("li:has('ul')").click(function(){
         $(this).children("ul:hidden").addClass("show");
         $(this).siblings().children("ul").removeClass("show");
         $(this).addClass("bg").siblings().removeClass("bg");
      })
      
//焦点图控制； 
   function mqimg(){
          $("#banner").children("ul").animate({"left":"-=500px"},400,
            function(){
            $(this).append($(this).children().first());
            $(this).css("left","0px");
          });
        }
        j=setInterval(mqimg,1500);
        $("#banner").hover(function(){
            clearInterval(j);
        },function(){
            j=setInterval(mqimg,1500);
        })

  //表单的弹出
  $("#sqjm").click(function(){
    $(".form").addClass("show");
  	$(".bgc").addClass("show");

  	
  })
  $("#close").click(function(){
    $(".form").removeClass("show");
  	$(".bgc").removeClass("show");
  })
//表单验证
 $("#formcheck").find("input").focus(function(){
  $(this).val("");
 })
 
    var msg="输入正确！"
    $("#nameid").bind("keyup",function(){
      var name=/^([a-zA-Z\u4e00-\u9fa5\·]{2,10})$/;
      if(name.test($(this).val())){
        $("#nameimg").attr("src","img/right.jpg");
        $("#msg").css("color","green").html(msg);
      }else{
        $("#nameimg").attr("src","img/error.jpg");
        $("#msg").css("color","red").html("请输入6-13位的字母数字的组合！");
      }
    }).focus(function(){
      $(this).triggerHandler("keyup");
    })
    $("#telid").bind("keyup",function(){
      var tel=/^(13|14|15|18|17)[0-9]{9}$/;
      if(tel.test($(this).val())){
        $("#telimg").attr("src","img/right.jpg");
        $("#msg").css("color","green").html(msg);
      }else{
        $("#telimg").attr("src","img/error.jpg");
        $("#msg").css("color","red").html("请输入正确的手机号！");
      }
    }).focus(function(){
      $(this).triggerHandler("keyup");
    })


    $("#emailid").bind("keyup",function(){
      var tel=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(tel.test($(this).val())){
        $("#emailimg").attr("src","img/right.jpg");
        $("#msg").css("color","green").html(msg);
      }else{
        $("#emailimg").attr("src","img/error.jpg");
        $("#msg").css("color","red").html("请输入正确的邮箱号！");
      }
    }).focus(function(){
      $(this).triggerHandler("keyup");
    })
    
    $("#yzmid").bind("keyup",function(){
      var cc=$("#sjyzm").text().toLowerCase();
      if($(this).val()==cc){
        $("#msg").css("color","green").html(msg);
      }else{
        $("#msg").css("color","red").html("请输入正确的验证码");
      }
    }).focus(function(){
      $(this).triggerHandler("keyup");
    })
    $("#formcheck").submit(function(){
      if(!$("#nameimg").attr("src")=="img/right.jpg"){
        $("#nameid").triggerHandler("keyup");
        return false;
      }
      if(!$("#telimg").attr("src")=="img/right.jpg"){
        $("#telid").triggerHandler("keyup");
        return false;
      }
      if(!$("#emailimg").attr("src")=="img/right.jpg"){
        $("#emailid").triggerHandler("keyup");
        return false;
      }
    })

})


   
      
		 
		