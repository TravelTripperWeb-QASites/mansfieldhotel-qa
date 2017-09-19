/*
   jQuery plugin settings and other scriptds
   ========================================================================== */

$(document).ready(function () {

  // banner-height start
  var mheight = $(window).height();
  var mwidth = $(window).width();
  $(".inner-hero-container").height(mheight - 130);
  $(".splash-screen").height(mheight);
  // banner-height end

  //splash screen start

if(!localStorage.showPopup) {
 localStorage.showPopup = "1";
}

if(localStorage.showPopup == "1") {
  $('.splash-screen').show();
  console.log(localStorage.showPopup, "hhhhhhhhhhhh");
  if($('.splash-screen').length) {  
    if($('.splash-screen').css('display') != 'none' ) {
      $("body").css("overflow", "hidden");
      $(window).on('wheel', function(event){
        $('.splash-screen').slideUp(300, function(){
          $("body").css("overflow", "auto");
        });
      });
    }
  }
   localStorage.showPopup = "0"; 
  
} else {
  $('.splash-screen').hide();  
  console.log(localStorage.showPopup,"kkkkkkkkkkkk");
}




/*  $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll == 0){
            
        } 
         else {
            
            if($('.splash-screen').css('display') != 'none' ) {
              $("body").scrollTop(0);
              $('.splash-screen').slideUp(300);
            }
        }
    });*/

    $(".fa-angle-down").click(function(){
        $('.splash-screen').slideUp(300);
    });

    //splash screen start

	//carousel as owl items
	setTimeout(function(){
    $(".room-detail-page-carousel, .offers-carousel").css("display","block");
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
    
	},2800);
	

	// START MAP FUNCTION 
	function initialize() {

		var myLatLng = {
			lat: 40.757757,
			lng: -73.980736
		};
		var stylemap = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#7d7c7c"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e6e6e6"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#4d4c4c"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e6e6e6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e6e6e6"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#605f5f"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#605f5f"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#605f5f"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e6e6e6"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#605f5f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#4d4c4c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#7d7c7c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#7e7c7c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#e6e6e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#7d7c7c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#747373"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];
		if (document.getElementById('map')) {
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 16,
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
	$('#carouselHomebanner .carousel-item').css('height', window.innerHeight - 90);
	//if ($(window).width() < 748) {
//	   $('#carouselHomebanner .carousel-item').css('height', window.innerHeight - 180);
//	}
//	else {
//	   
//	}

	//Locations Carousel
	$('#carouselLocation.carousel, #carouselLocation2.carousel ').hover(function () { 
	  $(this).carousel({
		  pause: null
	  });
	 });
	
	//Carousel Action
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
	$('#carouselLocation').on('slide.bs.carousel', function (e) {
			//$('#carouselLocation2.carousel .carousel-item').each(function () {
				console.log('slide');
				var $e = $(e.relatedTarget);
				var idx = $e.index();
					
					// append slides to end
					if (e.direction=="left") {
						slideCarousels(['carouselLocation2'], 'next');
						console.log('working');
					}
					else {
						//$('.carousel-item').eq(0).appendTo('.carousel-inner');
						slideCarousels(['carouselLocation2'], 'prev');
						console.log('not-working');
					}
		//	});
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
	// make rooms desc div height same
    setTimeout(function(){
        var allDescDiv = $('.descSection');
        var biggestHeight = 0;
        var ht

          allDescDiv.each(function(){
              ht = $(this).height();
              if(ht > biggestHeight){

                  biggestHeight = ht ;
              }
          });

        allDescDiv.height(biggestHeight);
    },2800);

    $("#arrival").datepicker({
        dateFormat: "yy-mm-dd",
        altField  : '#arrival',
        altFormat : 'yy-mm-dd',
        minDate: 0,
        onSelect: function (date) {
            var date2 = $('#arrival').datepicker('getDate');
            date2.setDate(date2.getDate() + 1);
            $('#departure').datepicker('setDate', date2);
            //sets minDate to dt1 date + 1
            $('#departure').datepicker('option', 'minDate', date2);
        }
    });
    $('#departure').datepicker({
        dateFormat: "yy-mm-dd",
        altField  : '#departure',
        altFormat : 'yy-mm-dd',
        onClose: function () {
            var dt1 = $('#arrival').datepicker('getDate');
            console.log(dt1);
            var dt2 = $('#departure').datepicker('getDate');
            if (dt2 <= dt1) {
                var minDate = $('#departure').datepicker('option', 'minDate');
                $('#departure').datepicker('setDate', minDate);
            }
        }
    });
    
    $(".homeBookNowBtn").on("click",function(){
      $("#homeBookNowFrm").submit();
    })
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

$(window).on("load", function () {

	

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
	// events carousel end


// events meeting-events carousel start
          var $carousel = $('.space-carousel');
            $carousel.carousel();
            var handled=false;
            var itemclicked="";
            $carousel.bind('slide.bs.carousel', function (e) {
                var current=$(e.target).find('.carousel-item.active');
                var indx=$(current).index();
                if((indx+2) > $('.space-tabs li').length)
                    indx=-1
                    
                 if(!handled)
                 { 
                           $('.space-tabs li').removeClass('active');
                            $('.space-tabs li:nth-child('+(indx+2)+')').addClass('active'); 
                 }
                 else
                 {
                    handled=!handled; 
                 }
                
            });

            $(".space-tabs li").on('click',function(){
               $(this).addClass('active').siblings().removeClass('active');
               handled=true;
        });
// events meeting-events carousel end

        
       

});
