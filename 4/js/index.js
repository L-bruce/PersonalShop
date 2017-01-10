'use start'
window.onload = function() {
	//轮播图
	$(document).ready(function() {

		var i = 0;

		var clone = $(".an_carousel_box .an_carousel_ul li").first().clone(); //克隆第一张图片
		$(".an_carousel_box .an_carousel_ul").append(clone); //复制到列表最后
		var size = $(".an_carousel_box .an_carousel_ul li").size();

		for(var j = 0; j < size - 1; j++) {
			$(".an_carousel_box .an_ul").append("<li></li>");
		}

		$(".an_carousel_box .an_ul li").first().addClass("on");

		/*自动轮播*/

		var t = setInterval(function() {
			i++;
			move();
		}, 2000);

		/*鼠标悬停事件*/

		$(".an_carousel_box").hover(function() {
			clearInterval(t); //鼠标悬停时清除定时器
		}, function() {
			t = setInterval(function() {
				i++;
				move();
			}, 2000); //鼠标移出时清除定时器
		});

		/*鼠标滑入原点事件*/

		$(".an_carousel_box .an_ul li").hover(function() {

			var index = $(this).index(); //获取当前索引值
			i = index;
			$(".an_carousel_box .an_carousel_ul").stop().animate({
				left: -index * 500
			}, 500);
			$(this).addClass("on").siblings().removeClass("on");
		});

		/*向左按钮*/
		$(".an_carousel_box .an_btn_l").click(function() {
			i++;
			move();
		})

		/*向右按钮*/
		$(".an_carousel_box .an_btn_r").click(function() {
			i--;
			move();
		})

		/*移动事件*/
		function move() {
			if(i == size) {
				$(".an_carousel_box .an_carousel_ul").css({
					left: 0
				});
				i = 1;
			}
			if(i == -1) {
				$(".an_carousel_box .an_carousel_ul").css({
					left: -(size - 1) * 1349
				});
				i = size - 2;
			}
			$(".an_carousel_box .an_carousel_ul").stop().animate({
				left: -i * 1349
			}, 500);

			if(i == size - 1) {
				$(".an_carousel_box .an_ul li").eq(0).addClass("on").siblings().removeClass("on");
			} else {
				$(".an_carousel_box .an_ul li").eq(i).addClass("on").siblings().removeClass("on");
			}
		}
	});
	//尾部轮播
	var oBox2 = document.getElementById('an_an_carousel_box2');
	var oUl2 = document.getElementById('an_carousel_ul2');
	var aLi2 = oUl2.children;
	//尾部轮播图事件
	oUl2.innerHTML += oUl2.innerHTML;
	oUl2.style.width = aLi2.length * aLi2[0].offsetWidth + 'px';

	//用户登录
	var oBtn = document.getElementById('userinul');
	var oLi3 = document.getElementById('an_divchuangkou');
	//导航用户登录事件
	oBtn.onmouseover = function() {
		oLi3.style.display = 'block';
	};
	oBtn.onmouseout = function() {
		oLi3.style.display = 'none';
	};
};