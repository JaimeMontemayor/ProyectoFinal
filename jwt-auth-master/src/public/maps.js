function iniciarMap(){
  var coord = {lat: 25.639985, lng: -100.3140696};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position : coord,
    map: map
  });
}