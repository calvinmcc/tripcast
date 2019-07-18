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
      var duration = response.rows[0].elements[0].duration.text;
      $('#tripTime').html(duration);
    }
  }
};
