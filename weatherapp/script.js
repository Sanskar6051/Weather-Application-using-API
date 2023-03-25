let weather ={
    apiKey: "06d6b9dc5ee28c2161adb6e804444b54",
    FetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            +"&units=metric&appid="
            + this.apiKey
        )
        .then(response => response.json())
        .then(data => this.displayWeather(data))
    },
    displayWeather : function(data){
        const name = data.name;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;

        document.querySelector(".city").innerHTML ="Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon+ ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "ºC";
        document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "wind speed: " + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function(){
        this.FetchWeather(document.querySelector('.search-bar').value)
    }
}

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup",function(){
    if(event.key == "Enter"){
        weather.search();
    }
}
)
weather.FetchWeather("Denver")
