//      /*//运动事件监听
//      if (window.DeviceMotionEvent) {
//          window.addEventListener('devicemotion',deviceMotionHandler,false);
//      }
//
//      //获取加速度信息
//      //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
//      //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
//      var SHAKE_THRESHOLD = 4000;
//      var last_update = 0;
//      var x, y, z, last_x = 0, last_y = 0, last_z = 0;
//      function deviceMotionHandler(eventData) {
//          var acceleration =eventData.accelerationIncludingGravity;
//          var curTime = new Date().getTime();
//          if ((curTime-last_update)> 10) {
//              var diffTime = curTime -last_update;
//              last_update = curTime;
//              x = acceleration.x;
//              y = acceleration.y;
//              z = acceleration.z;
//              var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
//              if (speed > SHAKE_THRESHOLD) {
//                  alert("你中奖啦！");  // Do something
//              }
//              last_x = x;
//              last_y = y;
//              last_z = z;
//          }
//      }*/
//      function yaoFun() {
//      	var dice =$("#dice");
//      $(".center_top").animate({top: "+100px"}, 200, function () {
//          $(".center_top").animate({left: "+=0.3rem"}, 200, function () {
//              $(".center_top").animate({left: "-=0.6rem"}, 200, function () {
//                  $(".center_top").animate({left: "+=0.3rem"}, 200, function () {
//                      $(".center_top").animate({top: "+0px"}, 200)
//                  });
//              });
//          });
//      });
//      dice.attr("class", "dice");//清除上次动画后的点数
//      dice.css("cursor", "default");
//      $(".wrap").append("<div id='dice_mask'></div>");//加遮罩
//      num = Math.floor(Math.random() * 6 + 1);//产生随机数1-6
//      dice.animate({left: '+2px'}, 100, function () {
//          dice.addClass("dice_t");
//      }).delay(200).animate({top: '-2px'}, 100, function () {
//          dice.removeClass("dice_t").addClass("dice_s");
//      }).delay(200).animate({opacity: 'show'}, 600, function () {
//          dice.removeClass("dice_s").addClass("dice_e");
//      }).delay(100).animate({left: '-2px', top: '2px'}, 100, function () {
//          dice.removeClass("dice_e").addClass("dice_" + num);
//          
//      });
//  }
//  function huangFun(){
//      var speed = 10; //定义摇一摇加速度的临界值 值越小摇动的力度越小
//      var x = y = z = lastX = lastY = lastZ = 0; //初始化x,y,z上加速度的默认值
//      var isHaveShaked = false;//用于记录是否在动画执行中
//        function init() {
//         //判断系统是否支持html5摇一摇的相关属性
//          if (window.DeviceMotionEvent) {
//                window.addEventListener('devicemotion', deviceMotionHandler, false);
//              } else {
//                alert('not support mobile event');
//              }
//            }
//      function deviceMotionHandler() {
//          /*获取x,y,z方向的即时加速度*/
//          var acceleration = event.accelerationIncludingGravity;
//          x = acceleration.x;
//          y = acceleration.y;
//          z = acceleration.z;
//          if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ)> speed) {
//            //摇一摇实际场景就是加速度的瞬间暴增爆减
//            if (!isHaveShaked) {
//                //alert(x); //自己测试各坐标的值。。
//                //alert(y)
//                    //alert(z);
//                    //手机震动1秒
//                if (navigator.vibrate) {
//                      navigator.vibrate(1000);//震动1000毫秒
//                    } else if (navigator.webkitVibrate) {
//                      navigator.webkitVibrate(1000);
//                    }
//                    //模拟网络请求做想干的事
//                isHaveShaked = true;
//                    setTimeout(function () {
//                    	var dice = $("#dice"); 
//                      isHaveShaked = false;
////                         alert("你中奖啦");
//							yaoFun();
//                        }, 2000);
//                    }
//              }
//          /*保存历史加速度*/
//          lastX = x;
//          lastY = y;
//          lastZ = z;
//        }
//        $(function () {
//          init();
//        });
//};
//$(function(){
//	huangFun();
//})
