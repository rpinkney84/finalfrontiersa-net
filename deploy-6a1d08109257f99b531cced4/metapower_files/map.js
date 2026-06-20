var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {
    "use strict";

  
  /*----------- 24. Google Map Active ----------*/

   function contactMap() {
     // Basic options for a simple Google Map
     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
     var mapOptions = {
       // How zoomed in you want the map to start at (always required)
       zoom: 11,
       scrollwheel: false,
       // The latitude and longitude to center the map (always required)
       center: new google.maps.LatLng(40.6700, -73.9400), // New York
       // This is where you would paste any style found on Snazzy Maps.
       styles: [{
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [{
           "color": "#e9e9e9"
         }, {
           "lightness": 17
         }]
       }, {
         "featureType": "landscape",
         "elementType": "geometry",
         "stylers": [{
           "color": "#f5f5f5"
         }, {
           "lightness": 20
         }]
       }, {
         "featureType": "road.highway",
         "elementType": "geometry.fill",
         "stylers": [{
           "color": "#ffffff"
         }, {
           "lightness": 17
         }]
       }, {
         "featureType": "road.highway",
         "elementType": "geometry.stroke",
         "stylers": [{
           "color": "#ffffff"
         }, {
           "lightness": 29
         }, {
           "weight": .2
         }]
       }, {
         "featureType": "road.arterial",
         "elementType": "geometry",
         "stylers": [{
           "color": "#ffffff"
         }, {
           "lightness": 18
         }]
       }, {
         "featureType": "road.local",
         "elementType": "geometry",
         "stylers": [{
           "color": "#ffffff"
         }, {
           "lightness": 16
         }]
       }, {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [{
           "color": "#f5f5f5"
         }, {
           "lightness": 21
         }]
       }, {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [{
           "color": "#dedede"
         }, {
           "lightness": 21
         }]
       }, {
         "elementType": "labels.text.stroke",
         "stylers": [{
           "visibility": "on"
         }, {
           "color": "#ffffff"
         }, {
           "lightness": 16
         }]
       }, {
         "elementType": "labels.text.fill",
         "stylers": [{
           "saturation": 36
         }, {
           "color": "#333333"
         }, {
           "lightness": 40
         }]
       }, {
         "elementType": "labels.icon",
         "stylers": [{
           "visibility": "off"
         }]
       }, {
         "featureType": "transit",
         "elementType": "geometry",
         "stylers": [{
           "color": "#f2f2f2"
         }, {
           "lightness": 19
         }]
       }, {
         "featureType": "administrative",
         "elementType": "geometry.fill",
         "stylers": [{
           "color": "#fefefe"
         }, {
           "lightness": 20
         }]
       }, {
         "featureType": "administrative",
         "elementType": "geometry.stroke",
         "stylers": [{
           "color": "#fefefe"
         }, {
           "lightness": 17
         }, {
           "weight": 1.2
         }]
       }]
     };
     // Get the HTML DOM element that will contain your map 
     // We are using a div with id="map" seen below in the <body>
     var mapElement = document.getElementById('google-map');

     // Create the Google Map using our element and options defined above
     var map = new google.maps.Map(mapElement, mapOptions);

     // Let's also add a marker while we're at it
     var marker = new google.maps.Marker({
       position: new google.maps.LatLng(40.6700, -73.9400),
       map: map,
       title: 'Cryptox'
     });
   }
   if ($('#google-map').length != 0) {
     google.maps.event.addDomListener(window, 'load', contactMap);
   }


})(jQuery);

}
/*
     FILE ARCHIVED ON 15:56:00 Apr 12, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:56:06 Oct 04, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.928
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.016
  esindex: 0.017
  cdx.remote: 43.157
  LoadShardBlock: 100.779 (3)
  PetaboxLoader3.datanode: 80.149 (4)
  PetaboxLoader3.resolve: 92.597 (2)
  load_resource: 116.794
*/