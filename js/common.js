// Responsive nav-menu
$(document).ready(function(){
	var touch = $('.touch-menu');
	var menu = $('.head-nav');
		 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		        }
		});
});

// bxSlider

$(document).ready(function(){
	$('.bxslider').bxSlider();
});

// JQuery Tabs Short
$(document).ready(function(){
	$(".tab_item").not(":first").hide();
	$(".tab").click(function() {
		$(".tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("tab-active");
});

//	Smooth scrolling
$(document).ready(function(){
	$(document).on('click', 'a', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
});