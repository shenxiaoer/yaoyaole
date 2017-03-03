$(function () {
    var oBig = $(".big");
    var oSmall = $(".small");
    var dice = $("#dice");
    var num = 0;
    var num1 = 0;
    var num2 = 0;
    var dice1 = $("#dice1");
    var dice2 = $("#dice2");
    var ispro=false;
    function yaoFun() {
        $(".center_top").animate({top: "+100px"}, 200, function () {
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
        num = Math.floor(Math.random() * 6 + 1);//产生随机数1-6
        dice.animate({left: '+2px'}, 100, function () {
            dice.addClass("dice_t");
        }).delay(200).animate({top: '-2px'}, 100, function () {
            dice.removeClass("dice_t").addClass("dice_s");
        }).delay(200).animate({opacity: 'show'}, 600, function () {
            dice.removeClass("dice_s").addClass("dice_e");
        }).delay(100).animate({left: '-2px', top: '2px'}, 100, function () {
            dice.removeClass("dice_e").addClass("dice_" + num);            
        });
        var num1 = Math.floor(Math.random()*6+1);//产生随机数1-6
		dice1.animate({left: '+2px'}, 100,function(){
			dice1.addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			dice1.removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			dice1.removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
			dice1.removeClass("dice_e").addClass("dice_"+num1);
		});	
		var num2 = Math.floor(Math.random()*6+1);//产生随机数1-6
		dice2.animate({left: '+2px'}, 100,function(){
			dice2.addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			dice2.removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			dice2.removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
			dice2.removeClass("dice_e").addClass("dice_"+num2);
			$("#result").removeClass("hide");
			$("#result p").html("恭喜您,您掷得点数是<span>"+parseInt(num+num1+num2)+"</span>");
			dice.css('cursor','pointer');
			$("#dice_mask").remove();//移除遮罩
		});	
    }
	function huangFun(){
	        var speed = 10; //定义摇一摇加速度的临界值 值越小摇动的力度越小
	        var x = y = z = lastX = lastY = lastZ = 0; //初始化x,y,z上加速度的默认值
	        var isHaveShaked = false;//用于记录是否在动画执行中
	          function init() {
	           //判断系统是否支持html5摇一摇的相关属性
	            if (window.DeviceMotionEvent) {
	                  window.addEventListener('devicemotion', deviceMotionHandler, false);
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
	          $(function () {
	            init();
	          });
	};
	

    oBig.on('click', function () {
        popTipShow.confirm('提示', '您确定选择大吗？', ['确 定', '取 消'],
            function (e) {
                //callback 处理按钮事件
                var button = $(e.target).attr('class');
                if (button == 'ok') {
                    //按下确定按钮执行的操作
                    huangFun();
                    this.hide();
              		if(window.DeviceMotionEvent) {
					    var speed = 25;    // 用来判定的加速度阈值，太大了则很难触发
					    var x, y, z, lastX, lastY, lastZ;
					    x = y = z = lastX = lastY = lastZ = 0;
					
					    window.addEventListener('devicemotion', function(event){
					    	
					        var acceleration = event.accelerationIncludingGravity;
					        x = acceleration.x;
					        y = acceleration.y;
					        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
					            // 用户设备摇动了，触发响应操作
					            // 此处的判断依据是用户设备的加速度大于我们设置的阈值
					            //alert('摇了');
					            if(!ispro){
					            	ispro=true;
					            	setTimeout(function () {
				                        if (num > 3) {
				                            alert("恭喜您获得2金币");
				                        } else {
				                            alert("很遗憾，您被扣除了2金币");
				                        }
				                        ispro=false;
			                    	}, 2000);
					            }

					        }
					        lastX = x;
					        lastY = y;
					    }, false);
					}   
	            }


                if (button == 'cancel') {
                    //按下取消按钮执行的操作
                    this.hide();
                    webToast("请重新选择", "bottom", 500);
                }
            }
        );
    });
    

    oSmall.on('click', function () {
        popTipShow.confirm('提示', '您确定选择小吗？', ['确 定', '取 消'],
            function (e) {
                //callback 处理按钮事件
                var button = $(e.target).attr('class');
                if (button == 'ok') {
                    //按下确定按钮执行的操作
                    huangFun();
                    this.hide();
                    if(window.DeviceMotionEvent) {
					    var speed = 25;    // 用来判定的加速度阈值，太大了则很难触发
					    var x, y, z, lastX, lastY, lastZ;
					    x = y = z = lastX = lastY = lastZ = 0;
					
					    window.addEventListener('devicemotion', function(event){
					        var acceleration = event.accelerationIncludingGravity;
					        x = acceleration.x;
					        y = acceleration.y;
					        if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
					            // 用户设备摇动了，触发响应操作
					            // 此处的判断依据是用户设备的加速度大于我们设置的阈值
					            //alert('摇了');
					           if(!ispro){
					            	ispro=true;
			                    setTimeout(function () {
			                        if (num <= 3) {
			                            alert("恭喜您获得2金币");
			                        } else {
			                            alert("很遗憾，您被扣除了2金币");
			                        }
			                        ispro=false;
			                    }, 2000);
			                }
                    }
					        lastX = x;
					        lastY = y;
					    }, false);
					}
                }

                if (button == 'cancel') {
                    //按下取消按钮执行的操作
                    this.hide();
                    webToast("请重新选择", "bottom", 500);
                }
            }
        );
    });
});
