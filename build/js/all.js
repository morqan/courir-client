$( function() {
    $( "#datepicker" ).datepicker({
        dateFormat: "dd-mm-yy",
        duration: "fast",
        gotoCurrent: true,
    });
} );


FilePond.registerPlugin(
    FilePondPluginImageCrop,
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement, {
    imageCropAspectRatio: 1,
    imageResizeTargetWidth: 256,
    imageResizeMode: 'contain',
    imageTransformVariants: {},
    onaddfile: (err, fileItem) => {
        console.log(err, fileItem.getMetadata('resize'));
    },
    onpreparefile: (fileItem, outputFiles) => {
        outputFiles.forEach(output => {
            const img = new Image();
            img.src = URL.createObjectURL(output.file);
            document.body.appendChild(img);
        })
    }
});

// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
// var map;

// var autocomplete_start, autocomplete_end;
// var place_start, place_end,marker;


// function initialize() {
//     directionsDisplay = new google.maps.DirectionsRenderer();
//     var thisCity = new google.maps.LatLng(40.409264, 49.867092);
//     var myOptions = {
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         center: thisCity
//     }
//     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//     directionsDisplay.setMap(map);
//     directionsDisplay.setPanel(document.getElementById("directionsPanel"));

//     var input_start = document.getElementById("startPlace");
//     var input_end = document.getElementById("endPlace");
//     var options = {
//         componentRestrictions: { country: 'az' }
//     }
//     autocomplete_start = new google.maps.places.Autocomplete(input_start, options);
//     google.maps.event.addListener(autocomplete_start, 'place_changed', function () {
//         place_start = autocomplete_start.getPlace();
//     });

//     autocomplete_end = new google.maps.places.Autocomplete(input_end, options);
//     google.maps.event.addListener(autocomplete_end, 'place_changed', function () {
//         place_end = autocomplete_end.getPlace();
//     });



//     // google.maps.event.addListener(map, 'click', function (event) {

//     //     marker = new google.maps.Marker({ position: event.latLng, map: map });
//     //     alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
//     // });

    
// //add adress after click to map
//     google.maps.event.addListener(map, 'click', function (event) {
     
//         if (marker && marker.setMap) {
//             marker.setMap(null);
//         }
//         marker = new google.maps.Marker({ position: event.latLng, map: map });
       
//         var geocoder = new google.maps.Geocoder();
//         geocoder.geocode({
//             "latLng": event.latLng
//         }, 
//         function (results, status) {
//             console.log(results, status);
//             if (status == google.maps.GeocoderStatus.OK) {
//                 console.log(results);
//                 var lat = results[0].geometry.location.lat(),
//                     lng = results[0].geometry.location.lng(),
//                     placeName = results[0].address_components[0].long_name,
//                     latlng = new google.maps.LatLng(lat, lng);

//                 $("#startPlace").val(results[0].formatted_address);
//             }
//         });
    
//     });
// }

// function calcRoute() {
//     var start = document.getElementById("startPlace").value + ', Baku, Azerbaijan';
//     var end = document.getElementById("endPlace").value + ', Baku, Azerbaijan';

//     if (typeof (place_start) != 'undefined') {
//         start = new google.maps.LatLng(place_start.geometry.location.lat(), place_start.geometry.location.lng());
//         console.log(place_start);
//         console.log(start);
//     }
//     if (typeof (place_end) != 'undefined') {
//         end = new google.maps.LatLng(place_end.geometry.location.lat(), place_end.geometry.location.lng());
//         console.log(place_end);
//         console.log(end);
//     }

//     var request = {
//         origin: start,
//         destination: end,
//         travelMode: google.maps.TravelMode.DRIVING
//     };

//     directionsService.route(request, function (result, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(result);
//             var price_for_selected = document.getElementById('price_for_selected');
//             var myRoute = result.routes[0].legs[0];

//             var commonDistanse = myRoute.distance.value / 1000;

//             if (commonDistanse <= 3) {
//                 price = 2
//             } else if (commonDistanse > 3 && commonDistanse <= 12) {
//                 price = (commonDistanse - 3) * 0.5 + 2
//             } else if (commonDistanse > 12 && commonDistanse <= 70) {
//                 price = (commonDistanse - 12) * 0.4 + 2 + (9 * 0.5)
//             } else {
//                 price = (commonDistanse - 70) * 0.22 + (70 * 0.4)
//             }

//             var innerHtml = '<div class="alert alert-success" role="alert"> ';
//             innerHtml += '<p>Mesafe: <td>' + myRoute.distance.text + '';
//             innerHtml += '<p>Teqribi vaxt: <td>' + myRoute.duration.text + '';
//             innerHtml += '<p>Qiymet: ' + Math.ceil(price) + ' AZN';
//             innerHtml += '';
//             price_for_selected.innerHTML = innerHtml;
//         } else {
//             var price_for_selected = document.getElementById('price_for_selected');
//             var innerHtml = '<div class="alert alert-warning" role="alert"></div>';
//             price_for_selected.innerHTML = innerHtml;
//             var directionsPanel = document.getElementById('directionsPanel');
//             directionsPanel.innerHTML = '';
//         }
//     });
// }



// window.onload = initialize;


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var autocomplete_start, autocomplete_end;
var place_start, place_end,marker;


function initialize() {

    directionsDisplay = new google.maps.DirectionsRenderer();
    var thisCity = new google.maps.LatLng(40.409264, 49.867092);
    var myOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: thisCity
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
    new AutocompleteDirectionsHandler(map);

}

function AutocompleteDirectionsHandler(map) {
    this.map = map;
    this.originPlaceId = null;
    this.destinationPlaceId = null;
    this.travelMode = 'WALKING';
    this.directionsService = new google.maps.DirectionsService;
    this.directionsRenderer = new google.maps.DirectionsRenderer;
    this.directionsRenderer.setMap(map);
  
    var originInput = document.getElementById('startPlace');
    var destinationInput = document.getElementById('endPlace');
  
    var originAutocomplete = new google.maps.places.Autocomplete(originInput);
    // Specify just the place data fields that you need.
    originAutocomplete.setFields(['place_id']);
  
    var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
    // Specify just the place data fields that you need.
    destinationAutocomplete.setFields(['place_id']);
  
    this.setupClickListener('pills-standart-tab', 'WALKING');
    this.setupClickListener('pills-business-tab', 'TRANSIT');
    this.setupClickListener('pills-vip-tab', 'DRIVING');
  
    this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
    this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
  
  }
  
  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  AutocompleteDirectionsHandler.prototype.setupClickListener = function(
      id, mode) {
    var radioButton = document.getElementById(id);
    var me = this;
  
    radioButton.addEventListener('click', function() {
      me.travelMode = mode;
      me.route();
    });
  };
  
  AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(
      autocomplete, mode) {
    var me = this;
    autocomplete.bindTo('bounds', this.map);
  
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
  
      if (!place.place_id) {
        window.alert('Please select an option from the dropdown list.');
        return;
      }
      if (mode === 'ORIG') {
        me.originPlaceId = place.place_id;
      } else {
        me.destinationPlaceId = place.place_id;
      }
      me.route();
    });
  };
  
  AutocompleteDirectionsHandler.prototype.route = function() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }
    var me = this;
  
    this.directionsService.route(
        {
          origin: {'placeId': this.originPlaceId},
          destination: {'placeId': this.destinationPlaceId},
          travelMode: this.travelMode
        },
        function(response, status) {
          if (status === 'OK') {
            me.directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
  };
  




window.onload = initialize;


function spinnerAction(count) {
    if (count == 1) {
        $("#user1").removeClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").addClass("d-none");
    } else if (count == 2) {
        $("#user1").addClass("d-none");
        $("#user2").removeClass("d-none");
        $("#userMore").addClass("d-none");
    } else if (count >= 3) {
        $("#user1").addClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").removeClass("d-none");
    }
}

var count = 1;

$("#spinner").on("keyup",function (e) {
    count = $(this).val();
    spinnerAction(count);
});

$("#icon-minus").on("click", function (e) {
    if (count != 1) {
        count = count - 1;
    }
    $("#spinner").val(count);
    spinnerAction(count);
});

$("#icon-plus").on("click", function (e) {
        count = count + 1;
    $("#spinner").val(count);
    spinnerAction(count);
});