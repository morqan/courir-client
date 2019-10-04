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
  
    // this.directionsService.route(
    //     {
    //       origin: {'placeId': this.originPlaceId},
    //       destination: {'placeId': this.destinationPlaceId},
    //       travelMode: this.travelMode
    //     },
    //     function(response, status) {
    //       if (status === 'OK') {
    //         me.directionsRenderer.setDirections(response);
    //       } else {
    //         window.alert('Directions request failed due to ' + status);
    //       }
    //     });



    var request = {
      origin: {'placeId': this.originPlaceId},
      destination: {'placeId': this.destinationPlaceId},
      travelMode: this.travelMode
  };

  directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
          var price_for_selected = document.getElementById('price_for_selected');
          var myRoute = result.routes[0].legs[0];

          var commonDistanse = myRoute.distance.value / 1000;

          if (commonDistanse <= 3) {
              price = 2
          } else if (commonDistanse > 3 && commonDistanse <= 12) {
              price = (commonDistanse - 3) * 0.5 + 2
          } else if (commonDistanse > 12 && commonDistanse <= 70) {
              price = (commonDistanse - 12) * 0.4 + 2 + (9 * 0.5)
          } else {
              price = (commonDistanse - 70) * 0.22 + (70 * 0.4)
          }

          var innerHtml = '<div class="alert alert-success" role="alert"> ';
          innerHtml += '<p>Mesafe: <td>' + myRoute.distance.text + '';
          innerHtml += '<p>Teqribi vaxt: <td>' + myRoute.duration.text + '';
          innerHtml += '<p>Qiymet: ' + Math.ceil(price) + ' AZN';
          innerHtml += '';
          price_for_selected.innerHTML = innerHtml;

          console.log(myRoute.distance.text);
          console.log(myRoute.duration.text);
          console.log(Math.ceil(price));
      } else {
          var price_for_selected = document.getElementById('price_for_selected');
          var innerHtml = '<div class="alert alert-warning" role="alert"></div>';
          price_for_selected.innerHTML = innerHtml;
          var directionsPanel = document.getElementById('directionsPanel');
          directionsPanel.innerHTML = '';
      }
  });
        
  };
  




window.onload = initialize;

