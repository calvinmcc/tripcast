function addInfoWindow (location, marker, weatherData) {
  var localTime = new Date(weatherData.currently.time * 1000);
  var timeAsString = moment(localTime,  "YYYY-MM-DD HH:mm").format('LLL');
  var precip = Math.floor(weatherData.currently.precipProbability * 100);
  var temp = Math.floor(weatherData.currently.apparentTemperature);
  var summary = weatherData.currently.summary;
  if (weatherData.alerts !== undefined) {
    var alertLink = weatherData.alerts[0].uri;
    var alertName = 'Weather Alert';
    var alertClass = 'alert'
  } else {
    var alertLink = '#';
    var alertName = 'No Weather Alerts';
    var alertClass = '';
  }
  var forecast = `<div id="forecast">
                    <h3>Expected conditions at ${timeAsString}</h3>
                    <h5><span id="bold">${summary}</span> and <span id="bold">${temp}</span>&deg;F</h5>
                    <h5><span id="bold">${precip}%</span> Chance of Precipitation</h5>
                    <h5 class="${alertClass}"><a href="${alertLink}">${alertName}</a></h5>
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
