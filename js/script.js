jQuery(document).ready(function($) {
	"use strict";


	var a = 0;
	$(window).scroll(function() {

	  var oTop = $('.counter').offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function() {
		  var $this = $(this),
			countTo = $this.attr('data-count');
		  $({
			countNum: $this.text()
		  }).animate({
			  countNum: countTo
			},

			{

			  duration: 2000,
			  easing: 'swing',
			  step: function() {
				$this.text(Math.floor(this.countNum));
			  },
			  complete: function() {
				$this.text(this.countNum);
				//alert('finished');
			  }

			});
		});
		a = 1;
	  }

	});
	

});


jQuery(document).ready(function($) {
	"use strict";
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0);	
	AOS.init({
	  duration: 500,
	  easing: 'ease-out-quart',
	  once: true
	});

	var cursor = $(".cursor"),
		follower = $(".cursor-follower");

	var posX = 0,
		posY = 0,
		mouseX = 0,
		mouseY = 0;

		TweenMax.to({}, 0.016, {
			repeat: -1,
			onRepeat: function() {
				posX += (mouseX - posX) / 4;
				posY += (mouseY - posY) / 4;

				TweenMax.set(follower, {
					css: {
						left: posX - 20,
						top: posY - 20
					}
				});

				TweenMax.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY
					}
				});
			}
		});





		

	$(document).on("mousemove", function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});

	$("a").on("mouseenter", function() {
		cursor.addClass("active");
		follower.addClass("active");
	});

	$("a").on("mouseleave", function() {
		cursor.removeClass("active");
		follower.removeClass("active");
	});
	$(window).scroll(function() {
			50 <= $(this).scrollTop() ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
		}), $("#return-to-top").on("click", function() {
			$("body,html").animate({
			scrollTop: 0
		}, 500)
	});
	
	
});








const sr = ScrollReveal({
	origin: "left",
	distance: "1200px",
	duration:1000,
	reset:true
});


sr.reveal('.footer_text',{interval:200});
sr.reveal('.footer_img',{interval:400});