var boton = document.getElementById("calcularRuta");
boton.addEventListener("click", function(ev){

	var origen = document.getElementById("origen").value;
	var destino = document.getElementById("destino").value;

	cargarRuta(origen,destino);

	ev.preventDefault();

},false);
