function addInfoWindow (location, marker, weatherData) {
  var localTime = new Date(weatherData.currently.time * 1000);
  var precip = Math.floor(weatherData.currently.precipProbability * 100)
  var temp = weatherData.currently.apparentTemperature
  var summary = weatherData.currently.summary
  var forecast = `<div id="forecast">
                    <h3>Expected conditions at ${localTime}</h3>
                    <h5>${summary} and ${temp}&deg;F</h6>
                    <h6>${precip}% Chance of Precipitation</h6>
                  </div>`
  var infowindow = new google.maps.InfoWindow({
    content: forecast,
    map: map,
    location: location
  });
  infowindows.push(infowindow);
  infowindow.close();
  marker.addListener('click', function() {
    clearInfoWindows();
    infowindow.open(map, marker);
  });
}

function clearMarkers() {
  for (var i=0; i<markers.length; i++) {
    markers[i].setMap(null)
  }
}

function clearInfoWindows() {
  for (var i=0; i <infowindows.length; i++) {
    infowindows[i].close();
  }
}

function addMarker(location, weatherData, weatherIcon) {
  marker = new google.maps.Marker({
    icon: `/assets/${weatherIcon}`,
    animation: google.maps.Animation.DROP,
    position: location,
    map: map
  });
  markers.push(marker)
  addInfoWindow(location, marker, weatherData)
}
