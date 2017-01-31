// $('#hotel-choices-btn').on('click', function(evt) {
//     evt.preventDefault();
//     const $hotelName = $('#hotel-choices').val();
//     $myHotel = $('#myHotel')
//     $myHotel = $myHotel.empty();
//     $myHotel.append($hotelName);
//     // drawMarker('hotel', [40.705137, -74.007624]);
//     console.log($myHotel.contents());
// });

// let restaurantClickCount = 0;
// $('#restaurant-choices-btn').on('click', function(evt) {
//     evt.preventDefault();
//     const $restaurantName = $('#restaurant-choices').val();
//     if (restaurantClickCount === 0){
//     	$('#restaurant-itinerary').empty();
//     	restaurantClickCount++;
//     }
//     const $newRestaurant = $('<div class="itinerary-item"><li class="title">' + $restaurantName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
// 	$('#restaurant-itinerary').append($newRestaurant);
//     console.log($restaurantName);
// });

// let activityClickCount = 0;
// $('#activity-choices-btn').on('click', function(evt) {
//     evt.preventDefault();
//     const $activityName = $('#activity-choices').val();
//     if (activityClickCount === 0){
//     	$('#activity-itinerary').empty();
//     	activityClickCount++;
//     }
//     const $newActivity = $('<div class="itinerary-item"><li class="title">' + $activityName + '</li><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
// 	$('#activity-itinerary').append($newActivity);
// });
