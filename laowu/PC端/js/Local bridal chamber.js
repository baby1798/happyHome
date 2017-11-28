$(function(){
	$("#left").find("a").click(function(){
		$(this).addClass("bg").parent().siblings().children("a").removeClass("bg");
	})
})
$(function(){
	$("p.p3>span.p3_two a").click(function(){
		$(this).siblings("a").removeClass("bg_one").removeClass("bg").end().addClass("bg_one");
	})
})
$(function(){
	$("#foot").find("a").click(function(){
		$(this).addClass("bg_two").parent().siblings().children("a").removeClass("bg_two");
	})
})