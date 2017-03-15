var suiji_arr=[];
$.ajax({
	    type: "POST",
	    url: "~/../json/data.json",
	    data: null,
	    async:true,
	    dataType:"json", // 返回数据类型
	    success: function(data){
			suiji_arr=data["random"];
	    },
	    error: function(data){
	        alert("网络错误，请检查您的网络设置！");
	        $("#tip").text("请求数据失败");
	    }
	});