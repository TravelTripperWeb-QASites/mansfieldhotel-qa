/*
   jQuery plugin settings and other scriptds
   ========================================================================== */

$(document).ready(function () {

	//carousel as owl items
	setTimeout(function(){
		var HideItems = $('#carouselRooms .carousel-item,#carouselOffers .carousel-item').length;
		var item = $('#carouselRooms,#carouselOffers').find('.carousel-item:first').outerWidth();
     var twidth = HideItems * item;
		 //console.log(HideItems);
		$('#carouselRooms,#carouselOffers').find('.carousel-inner .carousel-item').css('max-width',item);
		$('#carouselRooms,#carouselOffers').find('.carousel-inner').css('width', twidth);
		
	   //$('#carouselRooms .carousel-item').each(function(i){
//		    var totalItem = $('#carouselRooms .carousel-item').length;
//		    if(i > 1){
//				$(this).hide();
//			}
//	   });
	},1000);
	
	// START MAP FUNCTION 
	function initialize() {

		var myLatLng = {
			lat: 40.757757,
			lng: -73.980736
		};
		var stylemap = [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#212121"
			}]
		}, {
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#212121"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#bdbdbd"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#181818"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#1b1b1b"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#2c2c2c"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#8a8a8a"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#373737"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#3c3c3c"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [{
				"color": "#4e4e4e"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#000000"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#3d3d3d"
			}]
		}];
		if (document.getElementById('map')) {
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				styles: stylemap,
				center: new google.maps.LatLng(40.757757, -73.980736),
				scrollwheel: false,
				disableDefaultUI: true
			});



			var iconBase = '/assets/images/';

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Manhattan Hotel Boutique On Upper West Side - NYLO New York City',
				icon: iconBase + 'logo-icon.png'
			});
		}


	}

	initialize();

	// END MAP FUNCTION 

	// FitVids init
	$("#main").fitVids();

	// init smooth scroll
	$("a").smoothScroll({
		offset: -20
	});

	//homeBannercarousel
	$('.carousel').carousel();

	
	if ($(window).width() < 748) {
	   $('#carouselHomebanner .carousel-item').css('height', window.innerHeight - 180);
	}
	else {
	   $('#carouselHomebanner .carousel-item').css('height', window.innerHeight - 90);
	}

	//Locations Carousel
	$('#carouselLocation.carousel, #carouselLocation2.carousel ').hover(function () { 
	  $(this).carousel({
		  pause: null
	  });
	 });
	
	$('#carouselLocation2.carousel .carousel-item').each(function () {
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		if (next.next().length > 0) {
			next.next().children(':first-child').clone().appendTo($(this));
		} else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});
	
	//Rooms Carousel
	$('#carouselRooms').on('slide.bs.carousel', function (e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 2;
		var totalItems = $('.carousel-item').length;
    	if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i=0; i<it; i++) {
				// append slides to end
				if (e.direction=="left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
		
	});
	
	/*Gallery start*/


	$(".filter").on("click", function () {
		var $this = $(this);
		// if we click the active tab, do nothing
		if (!$this.hasClass("active")) {
			$(".filter").removeClass("active");
			$this.addClass("active"); // set the active tab
			var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
			$filter == 'all' ? // if we select "view all", return to initial settings and show all
				$(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() : // otherwise
				$(".fancybox").fadeOut(0).filter(function () {
					return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
				}).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
			//reset lightgallery after filtering
			setTimeout(function () {
				var lightgallery = $('#lightgallery');
				if (lightgallery.length > 0) {
					lightgallery.data('lightGallery').destroy(true);
					$('#lightgallery').lightGallery({
						selector: ".item:visible",
						counter: false,
						thumbnail: false,
						share: false

					});
				}

			}, 1000);
		} // if
	}); // on


	$('#lightgallery').lightGallery({
		selector: ".item",
		counter: false,
		thumbnail: false,
		share: false
	});


	/*Gallery end*/
	
	
});

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 60) {
		//clearHeader, not clearheader - caps H
		$(".navbar").addClass("resized");
	} else {
		$(".navbar").removeClass("resized");
	}
});

function slideCarousels(ids, action) {
	var len = ids.length;
	var id = null;

	for (var i = 0; i < len; i++) {
		id = ids[i];
		$('#' + id).carousel({
			slide: action
		});
	}
}

$(window).on("load", function () {

	// banner-height start
	var mheight = $(window).height();
	var mwidth = $(window).width();
	$(".inner-hero-container").height(mheight - 130);
	
	// banner-height end

	// events carousel start
	jQuery(function ($) {
    var captionwrapper = $('#carouselHomebanner.carousel div.carousel-item:nth-child(1) .carousel-caption');
    var caption = $('#carouselHomebanner.carousel  div.carousel-item:nth-child(1) .carousel-caption .slidetext' );
    var people =  $('#carouselHomebanner.carousel  div.carousel-item:nth-child(1) .carousel-caption .people' );
    $('.new-caption-area').html(caption.html());
    $('#people').html(people.html()); 
    captionwrapper.css('display', 'none');

    $("#carouselHomebanner").on('slide.bs.carousel', function (evt) { 
        var captionwrapper = $('#carouselHomebanner.carousel  div.carousel-item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
       var caption= $('#carouselHomebanner.carousel div.carousel-item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption .slidetext');
       var people =  $('#carouselHomebanner.carousel div.carousel-item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ')  .carousel-caption .people' );
        $('.new-caption-area').html(caption.html());
        $('#people').html(people.html()); 
        captionwrapper.css('display', 'none');
    	});
	});
	// events carousel start

});
