$(document).ready(function(){
  $("#searchInput").on("keyup", function(e){
    var cityName = e.target.value;
    const apiKey = "f8cea393ff95c5940a4b9afa2fa7528d";

    //make request to sever
    $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
        
    }).done(function(weatherData){
        //console.log(weatherData);
        $("#profile").html(`
        <div class = "container">
            <div class="row">

            <div class="card" style="width: 18rem;">
            <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Weather : ${weatherData.weather[0].description}</h5>
                <p class="card-text">The temperature at ${cityName} is ${weatherData.main.temp} &#8451; and feels like ${weatherData.main.feels_like} &#8451;</p>
                <a href="https://www.google.com/search?q=${cityName}" class="btn btn-primary">Lear more about the place</a>
            </div>
          </div>
            </div>
            </div>`);
    });
  });
})