//js de Mapa 
function iniciarMap(){
    var coord = {lat:16.3497422 ,lng: -98.0580248};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}



    