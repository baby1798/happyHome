$(document).ready(function(){
	$("#co_u1").children("li").hover(function(){
	  $(this).children("a").children().eq(0).stop(true,true).animate({"width":"270px","height":"350px","top":"-25px","left":"-22px"},700);
	  $(this).children("a").children().eq(2).stop(true,true).animate({"top":"240px"});
	  $(this).children("a").children().eq(1).stop(true,true).fadeOut(500);
	},function(){
	  $(this).children("a").children().eq(0).stop(true,true).animate({"width":"226px","height":"300px","top":"0px","left":"0px"},500);
	  $(this).children("a").children().eq(2).stop(true,true).animate({"top":"310px"});
	  $(this).children("a").children().eq(1).stop(true,true).fadeIn(500);
	  	
	})
})