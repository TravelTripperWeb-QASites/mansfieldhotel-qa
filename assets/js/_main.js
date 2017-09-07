/*
   jQuery plugin settings and other scriptds
   ========================================================================== */

$(document).ready(function () {

	// START MAP FUNCTION 
    function initialize() {
                      
    var myLatLng = { lat: 40.757757, lng: -73.980736 };
    var stylemap = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
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
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
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
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
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
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
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
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
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
        "color": "#000000"
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
    if(document.getElementById('map')){
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

	$('#carouselHomebanner .carousel-item').css('max-height', window.innerHeight - 90);
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

$(window).on("load", function() {


   // banner-height start
    var mheight = $(window).height();
    var mwidth = $(window).width();
    setTimeout( function() { $(".inner-hero-container").height(mheight - 30);}, 1000);
// banner-height end

});