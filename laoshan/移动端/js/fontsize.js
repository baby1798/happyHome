// window.onresize=r;
//  function r(resizeNum){
//  	var winW=window.innerWidth;
//  	document.getElementsByTagName("html")[0].style.fontSize=winW*0.15625+"px";
//  	if(winW>window.screen.width && resizeNum<=10){
//  		setTimeout(function(){
//  			  r(++resizeNum);
//  		    },100);
//  		}else{
//             document.getElementsByTagName("body")[0].style.opacity=1;
//  		}
//  	}
//  	setTimeout(r(0),100);


//tab栏的控制； 
$(function(){
	$("li").click(function(){ 
		// alert($(this).index());
		    $(this).addClass("color").siblings().removeClass("color");
			$("#news").children("div:eq("+$(this).index()+")").addClass("show").siblings().removeClass("show");
		})

	// var lazyload = $.noConflict();
	// lazyload(function(){
	// 	lazyload("img").lazyload({
 //           placeholder:"../img/news6.jpg",
 //           effect:"fadeIn"
	// 	})
	// })
})
 