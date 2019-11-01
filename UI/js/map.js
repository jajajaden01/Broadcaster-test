const selectElement = (element) => document.querySelector(element)

function geocodePosition(pos){
    geocoder = new google.maps.Geocoder()

    geocoder.geocode({ latLng: pos}, function(result, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            selectElement('#address-label').textContent = result[0].formatted_address
            selectElement('#address').value = result[0].formatted_address
        } else {
            selectElement('#address-label').textContent = "Can not determine address at this location."
        }
    })
}

function initModal() {
  var location = new google.maps.LatLng(0,0)
  var mapProperty = { //set the poperty of google map
    center: location,
    zoom: 50,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  //creating the map
  map = new google.maps.Map(selectElement('#map'), mapProperty)
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: location
  })

  geocodePosition(marker.getPosition())

  google.maps.event.addEventListener(marker, 'dragend', function () {
    map.setCenter(marker.getPosition())
    geocodePosition(marker.getPosition())

    selectElement('#latitude').value = marker.getPosition().lat()
    selectElement('#longitude').value = marker.getPosition().lng()
  })

  // current location the user
//   currentLat = selectElement('#latitude').value
//   currentLng = selectElement('#longitude').value

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function (position) {
          pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          }

          selectElement('#latitude').value = pos.lat
          selectElement('#longitude').value = pos.lng

          marker.setPosition(pos)

          map.setCenter(marker.getPosition())
          geocodePosition(marker.getPosition())
      })
  }

}