$(document).ready(function() {
	$("#getWeather").click(function() {
		var city = $("#city").val();
		var api = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=9fd7a449d055dba26a982a3220f32aa2";
		$.getJSON(api, function(data) {
			var weather = "<p>Temperature: " + data.main.temp + " &deg;C</p>";
			weather += "<p>Description: " + data.weather[0].description + "</p>";
			weather += "<p>max tempreture: " + data.main.temp_max+ " %</p>";
			weather += "<p>min tempreture: " + data.main.temp_min+ " %</p>";
			weather += "<p>icon code: " + data.weather[0].icon + " %</p>";
			weather += "<p>wind speed: " + data.wind.speed + " %</p>";
			weather += "<p>cloudiness: " + data.clouds.all+ " %</p>";
			weather += "<p>humidity: " + data.main.humidity+ " %</p>";
			$("#weather").html(weather);9


			
		});
	});
});





