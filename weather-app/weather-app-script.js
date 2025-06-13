const API_KEY = "e8cf2c797d03e7414e75adb5becce13a";

      const API_URL =
        "https://api.openweathermap.org/data/2.5/weather?units=metrics";

      const searchBox = document.querySelector(".search input");

      const searchBtn = document.querySelector(".search button");

      const weatherWrapper = document.querySelector(".weather");

      const weatherIcon = document.querySelector(".weather-icon");

      const errorWrapper = document.querySelector(".error");

      const errorText = document.querySelector(".error .error-text");

      searchBtn.addEventListener("click", () => {
        checkWeather(citysearch.value);
      });

      const checkWeather = async (cityName) => {
        const response = await fetch(
          `${API_URL}&q=${cityName}&appid=${API_KEY}`
        );
        if (response.status !== 404) {
          const data = await response.json();          
          const { name, main, weather, wind } = data;
          document.querySelector(".city").innerHTML = name;
          document.querySelector(".temparature").innerHTML =
            Math.round(main.temp) + "°C";
          document.querySelector(".humidity").innerHTML = main.humidity + "%";
          document.querySelector(".wind").innerHTML = wind.speed + " km/h";

          if (weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
          } else if (weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
          } else if (weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
          } else if (weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
          } else {
            weatherIcon.src = "images/snow.png";
          }
          weatherWrapper.style.display = "block";
          errorWrapper.style.display = "none";
        } else {
          errorWrapper.style.display = "block";
          weatherWrapper.style.display = "none";
        }
      };