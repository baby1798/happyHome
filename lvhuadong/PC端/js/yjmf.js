$(document).ready(function(){
	$("#name").blur(function(){
		var username=/^([a-zA-Z\u4e00-\u9fa5\·]{2,10})$/;
		if(username.test($(this).val())){
			
		}else{
			$("#ts").html("请输入姓名");
		}
	})
	$("#tel").blur(function(){
		var tel=/^(13|14|15|17|18)[0-9]{9}/;
		if(tel.test($(this).val())){
			
		}else{
			$("#ts").html("请输入电话");
		}
	})
	$("")
})
