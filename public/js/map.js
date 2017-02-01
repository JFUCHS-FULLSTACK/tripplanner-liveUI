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


  let markerArray = [];


  function drawMarker (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap(currentMap);

    markerArray.push([marker, coords[0], coords[1]]);
  }

  function deleteMarker (type, coords){

    var marker = markerArray.filter(function(elem){
      console.log('elem1:', elem[1], 'coords0:', coords[0])
      return Number(elem[1]) === Number(coords[0])

    })

    marker[0][0].setMap(null);

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
  });



let restaurantClickCount = 0;
$('#restaurant-choices-btn').on('click', function(evt) {
    evt.preventDefault();
    const $restaurantName = $('#restaurant-choices').val();
    if (restaurantClickCount === 0){
      $('#restaurant-itinerary').empty();
      restaurantClickCount++;
    }
    const $newActivity = $('<div class="itinerary-item"><li class="title">' + $restaurantName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
  $('#restaurant-itinerary').append($newActivity);
});

$('#restaurant-itinerary').on('click', '.remove', function(evt) {

    $(this).parent().remove();
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

$('#activity-itinerary').on('click', '.remove', function(evt) {
    $(this).parent().remove();
});


let addDayCounter = 4;

$('#day-add').click(function(){
  $this = $(this)
  $this.parent().append('<button class="btn btn-circle day-btn day'+addDayCounter+'" style="margin-right: 3px">'+addDayCounter+'</button>')
  $this.parent().append($this);  // $(this).remove()
  addDayCounter++;
  deleteMarker('hotel', [40.705137, -74.007624]);

})


});



/*

how to delete marker:

1. when we create the div for the hotel or whatever, we have access to the coordinates.
2. with that coordinates, we are going to make the remove button include the coordinates somehow and input it into the deleteMarker function.
*/


/*
our plan to switch days using HTML stuff
1. create a parent <span> element for each day, and give it a corresponding id (i.e. #day1)
2. when we select the right day button, it hides all of the other spans and displays the selected one/or create it if it doesnt exist yet
  a. hide all spans
  b. display span id=day#
*/







// $(function () {
//     var counter = 0;

//     $('a').click(function () {
//         var elems = '<div>'+
//               '<input type="checkbox" id="checkbox"' + (counter) + '" class="item"/>' + 
//               '<input type="text" id="t1"' + (counter) + '"/>' +
//               '<input type="button" class="removebtn" value="." id="removebtn"' + (counter) + '"/>' +
//         '</div>';
//         $('#box').append(elems);
//         $("#box").append("<br />");
//         $("#box").append("<br />");
//         counter++;
//     });

//     $('.removebtn').live(function () {
//         $(this).parent().remove();   
//     });
// });

 





// $('#restaurant-choices-btn').on('click', function(evt) {
//     evt.preventDefault();
//     const $restaurantName = $('#restaurant-choices').val();
//     if (restaurantClickCount === 0){
//       $('#restaurant-itinerary').empty();
//       restaurantClickCount++;
//     }
//     const $newRestaurant = $('<div class="itinerary-item"><li class="title" id="restaurantID' + randomCounterThingForTesting + '">' + $restaurantName + '</li><button data-action:"remove" class="btn btn-xs btn-danger remove btn-circle" id="restRemoveBtn' + randomCounterThingForTesting + '">x</button></div>');   

//     randomCounterThingForTesting++;
//   $('#restaurant-itinerary').append($newRestaurant);
//     console.log($restaurantName);
// });







