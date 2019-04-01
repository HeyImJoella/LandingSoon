function getData() {
	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = document.getElementById("city").value;
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	fetch(request).then(function(response) {
		return response.json();
	})
	.then(function(response) {
		onSuccess(response);
	})
	.catch(function (error) {
		onError(error);
	});
}
function onSuccess(response) {
	var wind = Math.round(response.wind.speed * 3.6);
	var celsius = Math.floor(response.main.temp - 273.15);
	var windDOM = document.getElementById('windkracht'); 
	var weatherDOM = document.getElementById('celsius'); 
	windDOM.innerHTML = wind + " km/uur";
	weatherDOM.innerHTML = celsius + "&#176;C";
	if (wind >= 8 ) {
	document.getElementById("klaar").innerHTML = "De wind staat te hard!";
	}
	else {
	document.getElementById("klaar").innerHTML = "Klaar voor landen!";
	}
	if (celsius <= 10 ){
	document.getElementById("klaar").innerHTML = "Het is te koud!";
	}
	else {
	document.getElementById("klaar").innerHTML = "Klaar voor landen!";
	}
}
document.getElementById("search").onclick = function(){
	getData();
};