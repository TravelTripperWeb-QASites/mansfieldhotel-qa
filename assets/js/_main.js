/*
   jQuery plugin settings and other scriptds
   ========================================================================== */

$(document).ready(function () {

	// FitVids init
	$("#main").fitVids();

	// init smooth scroll
	$("a").smoothScroll({
		offset: -20
	});

	//homeBannercarousel
	$('.carousel').carousel();

	$('#carouselHomebanner .carousel-item').css('max-height', window.innerHeight - 90);
	
	//Locations Carousel

	$('#carouselLocation2.carousel .carousel-item').each(function(){
		var next = $(this).next();
		if (!next.length) {
		next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		if (next.next().length>0) {
		next.next().children(':first-child').clone().appendTo($(this));
		}
		else {
		  $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 60) {
		//clearHeader, not clearheader - caps H
		$(".navbar").addClass("resized");
	}else {
        $(".navbar").removeClass("resized");
    }
});

function slideCarousels(ids, action) {
	  var len = ids.length;
	  var id = null;
	  
	  for (var i = 0; i < len; i++) {
		  id = ids[i];
		  $('#' + id).carousel({ slide: action });
	  }
}