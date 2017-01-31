$(function initializeMap (){

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap(currentMap);
  }

  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);

  $('#hotel-choices-btn').on('click', function(evt) {
    evt.preventDefault();
    const $hotelName = $('#hotel-choices').val();
    $myHotel = $('#myHotel')
    $myHotel = $myHotel.empty();
    $myHotel.append($hotelName);
    // drawMarker('hotel', [40.705137, -74.007624]);
    console.log($myHotel.contents()[0].data);
    let hotelID = '#'+ $myHotel.contents()[0].data;
    // id = $myHotel.contents()[0] + ' Location'
    let hotelLocationArray = $('.allTheHotelsLocations');
    // console.log(hotelLocationArray[0].id === $hotelName)

    for (var i=0;i<hotelLocationArray.length;i++){
      if (hotelLocationArray[i].id === $hotelName){
        let janky = hotelLocationArray[i].dataset.type;
        drawMarker('hotel', janky.split(','));
      }
    }





    // console.log(hotelLocationArray.filter(function(elem){return elem.id === $hotelName})); //and then filter the <a> elements that have the ID that equlas the name of the hotel that we selected. and then get the value of that element


let restaurantClickCount = 0;
let randomCounterThignForTesting = 0;
$('#restaurant-choices-btn').on('click', function(evt) {
    evt.preventDefault();
    const $restaurantName = $('#restaurant-choices').val();
    if (restaurantClickCount === 0){
      $('#restaurant-itinerary').empty();
      restaurantClickCount++;
    }


    const $newRestaurant = $('<div class="itinerary-item"><li class="title" id="counter' + randomCounterThignForTesting + '">' + $restaurantName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
    randomCounterThignForTesting++;
  $('#restaurant-itinerary').append($newRestaurant);
    console.log($restaurantName);
});



let activityClickCount = 0;
$('#activity-choices-btn').on('click', function(evt) {
    evt.preventDefault();
    const $activityName = $('#activity-choices').val();
    if (activityClickCount === 0){
      $('#activity-itinerary').empty();
      activityClickCount++;
    }
    const $newActivity = $('<div class="itinerary-item"><li class="title">' + $activityName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
  $('#activity-itinerary').append($newActivity);
});

});













