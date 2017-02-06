function calcRoute() {
  var start = document.getElementById('trip_start').value;
  var end = document.getElementById('trip_end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}

var getDirectionData = function getDirectionData(waypoints) {
  $('#tripDetails').fadeIn(800);
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
    origins: [document.getElementById('trip_start').value],
    destinations: [document.getElementById('trip_end').value],
    travelMode: 'DRIVING'
  }, mapData);
  function mapData(response, status) {
    if (status == 'OK') {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.text;
          var duration = element.duration.text;
          var from = origins[i];
          var to = destinations[j];
          $('#tripTime').html(duration);
        }
      }
    }
  }
};
