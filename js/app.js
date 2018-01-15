var map;
function initialize(){

	var mapOptions = {
	          zoom: 12,
	          center: new google.maps.LatLng(19.420307,-99.165308),
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };

	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

}
function cargarRuta(origen,destino){
	var request = {
		origin:origen,
		destination:destino,
		travelMode: google.maps.TravelMode.DRIVING
	};

	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();

	// Indicamos dónde esta el mapa para renderizarnos
	directionsDisplay.setMap(map);
	// Indicamos dónde esta el panel para mostrar el texto
	var panel = document.getElementById("directionsPanel");
	panel.innerHTML = ""; // Vacío el panel, por si buscamos varias veces
	directionsDisplay.setPanel(panel);

	directionsService.route(request, function(result, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(result);
	    }
	  });
}
google.maps.event.addDomListener(window, 'load', initialize);
