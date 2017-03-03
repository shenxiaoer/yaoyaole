$(function(){
	var oRemove = $(".remove");
	var oAdd = $(".add");
	var oNum = parseInt($('.num').val());
	var span_num = $('.span_num');
	var oStart = $('.start');
	var dice = $("#dice");
    var num = 0;
    var num1 = 0;
    var num2 = 0;
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");
    var suiji_arr=[
  		[2,3,1],
  		[6,6,6]
  	];//从后台获取的数据
    var ARR=[];
	function yaoFun() {
        $(".center_top").animate({top: "+130px"}, 200, function () {
            $(".center_top").animate({left: "+=0.3rem"}, 200, function () {
                $(".center_top").animate({left: "-=0.6rem"}, 200, function () {
                    $(".center_top").animate({left: "+=0.3rem"}, 200, function () {
                        $(".center_top").animate({top: "+0px"}, 200)
                    });
                });
            });
        });
        dice.attr("class", "dice");//清除上次动画后的点数
        dice.css("cursor", "default");
        $(".wrap").append("<div id='dice_mask'></div>");//加遮罩
        if(ARR.length==0){
        	num = suiji_arr[0][0];
        	num1 =suiji_arr[0][1];
        	num2 =suiji_arr[0][2];
        }else if(ARR.length==1){
        	num = suiji_arr[1][0];
        	num1 =suiji_arr[1][1];
        	num2 =suiji_arr[1][2];
        }
        
        //第一个色子
        dice.animate({left: '+2px'}, 100, function () {
            dice.addClass("dice_t");
        }).delay(200).animate({top: '-2px'}, 100, function () {
            dice.removeClass("dice_t").addClass("dice_s");
        }).delay(200).animate({opacity: 'show'}, 600, function () {
            dice.removeClass("dice_s").addClass("dice_e");
        }).delay(100).animate({left: '-2px', top: '2px'}, 100, function () {
            dice.removeClass("dice_e").addClass("dice_" + num);            
        });
        
        //第二个色子
		dice1.animate({left: '+2px'}, 100,function(){
			dice1.addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			dice1.removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			dice1.removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
			dice1.removeClass("dice_e").addClass("dice_"+num1);
		});	
		
		//第三个色子
		dice2.animate({left: '+2px'}, 100,function(){
			dice2.addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			dice2.removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			dice2.removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
			dice2.removeClass("dice_e").addClass("dice_"+num2);
			setTimeout(function(){
				$('.win').removeClass('hide');
				$('.win #totalnum').html(parseInt(num+num1+num2));
				ARR.push(num+num1+num2);
				var kaiyao=new huangFun();
				if(ARR.length==1){
					$('.win .close').on("click",function(){
			    		$(".win").addClass("hide");
			    		setTimeout(function(){
				    		$('.tishi').removeClass("hide");
				    		$(".tishi .close").click(function(){
				    			$('.tishi').addClass("hide");
								//yaoFun();
								//kaiyao.addEven();
				    		});
							kaiyao.addEven();
				    	},500);
				    })
				}else if(ARR.length==2){
					$('.win .close').off("click").on("click",function(){
			    		$(".win").addClass("hide");
			    		setTimeout(function(){
							kaiyao.removeEven();
					    	$('.win_box').removeClass("hide");
					    	if(ARR[0]-ARR[1]>0){
					    		$("#win_tipcon").html("第一位赢啦");
					    	}else if(ARR[0]-ARR[1]==0){
					    		$("#win_tipcon").html("平局");
					    	}else{
					    		$("#win_tipcon").html("第二位赢啦");
					    	}
					    	$(".win_box .close").click(function(){
					    		$('.win_box').addClass("hide");
					    		location.reload();
					    	});
					    },500);
				    })
				}
			},300);
			
		});	
    }
	function huangFun(){
	        var speed = 10; //定义摇一摇加速度的临界值 值越小摇动的力度越小
	        var x = y = z = lastX = lastY = lastZ = 0; //初始化x,y,z上加速度的默认值
	        var isHaveShaked = false;//用于记录是否在动画执行中
	        this.addEven=function () {
	           //判断系统是否支持html5摇一摇的相关属性
	           if (window.DeviceMotionEvent) {
	                 window.addEventListener('devicemotion', deviceMotionHandler, false);
	           } else {
	                 alert('not support mobile event');
	               }
	        }
	        this.removeEven=function () {
	           //判断系统是否支持html5摇一摇的相关属性
	           if (window.DeviceMotionEvent) {
	                 window.removeEventListener('devicemotion', deviceMotionHandler, false);
	           } else {
	                 alert('not support mobile event');
	               }
	        }
	        
	        function deviceMotionHandler() {
	            /*获取x,y,z方向的即时加速度*/
	            var acceleration = event.accelerationIncludingGravity;
	            x = acceleration.x;
	            y = acceleration.y;
	            z = acceleration.z;
	            if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ)> speed) {
	              //摇一摇实际场景就是加速度的瞬间暴增爆减
	              if (!isHaveShaked) {
	                  //alert(x); //自己测试各坐标的值。。
	                  //alert(y)
	                      //alert(z);
	                      //手机震动1秒
	                  if (navigator.vibrate) {
	                        navigator.vibrate(1000);//震动1000毫秒
	                      } else if (navigator.webkitVibrate) {
	                        navigator.webkitVibrate(1000);
	                      }
	                      //模拟网络请求做想干的事
	                  isHaveShaked = true;
	                      setTimeout(function () {
	                      	var dice = $("#dice"); 
	                        isHaveShaked = false;
	//                         alert("你中奖啦");
								yaoFun();
	                          }, 1000);
	                      }
	                }
	            /*保存历史加速度*/
	            lastX = x;
	            lastY = y;
	            lastZ = z;
	          }
	};
	oRemove.on('click',function(){
		oNum=oNum-10;
		if(oNum < 10){
			oNum =10;
		}
		$('.num').val(oNum);
		span_num.html(oNum);
	});
    oAdd.on('click',function(){
		oNum=oNum+10;
    	if(oNum >100){

			oNum = 100;
    	}
		$('.num').val(oNum);
		span_num.html(oNum);
    });

    oStart.click(function(){
    	$('.bet').addClass("hide");
    	yaoFun();
	    
	    	//$('.win').removeClass('hide');
   	});
    	
});