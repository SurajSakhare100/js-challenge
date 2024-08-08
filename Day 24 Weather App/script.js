document.getElementById("search-button").addEventListener("click", () => {
  let cityName = document.getElementById("city-input").value;
  getData(cityName);
});

function getIconClass(condition) {
  const conditionLowerCase = condition.toLowerCase();
  if (conditionLowerCase.includes("cloud")) {
    return "cloud";
  } else if (conditionLowerCase.includes("rain")) {
    return "cloud-showers-heavy";
  } else if (conditionLowerCase.includes("snow")) {
    return "snowflake";
  } else if (
    conditionLowerCase.includes("storm") ||
    conditionLowerCase.includes("thunder")
  ) {
    return "bolt";
  }
  return "sun"; // Default icon
}

const getData = (cityName = "pune") => {
  const currentWeatherUrl = `https://wttr.in/${cityName}?format=j1`;

  // Fetch current weather
  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const currentCondition = data.current_condition[0];
      const location = data.nearest_area[0].areaName[0].value;
      const temperature = currentCondition.temp_C;
      const condition = currentCondition.weatherDesc[0].value;
      const pastweatherData = data.weather;
      document.getElementById("location").textContent = location;
      document.getElementById("temperature").textContent = `${temperature}°C`;
      document.getElementById("condition").textContent = condition;

      const conditionLowerCase = condition.toLowerCase();
      let iconClass = "sun"; // Default icon
      if (conditionLowerCase.includes("cloud")) {
        iconClass = "cloud";
      } else if (conditionLowerCase.includes("rain")) {
        iconClass = "cloud-showers-heavy ";
      } else if (conditionLowerCase.includes("snow")) {
        iconClass = "snowflake";
      } else if (
        conditionLowerCase.includes("storm") ||
        conditionLowerCase.includes("thunder")
      ) {
        iconClass = "bolt";
      }

      document.getElementById(
        "weather-icon"
      ).innerHTML = `<i class="fas fa-${iconClass}"></i>`;

      const pastdata = document.getElementById("past-weather-list");
      pastdata.innerHTML = "";
      pastweatherData.forEach((element) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let date = document.createElement("date");
        let loc = document.createElement("h2");
        loc.innerText = location;
        p.innerText = element.avgtempC + "°C";
        p.classList.add("temp");
        date.innerText = element.date;
        div.appendChild(p);
        div.appendChild(date);
        div.appendChild(loc);
        pastdata.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      document.getElementById("location").textContent = "Error";
      document.getElementById("temperature").textContent = "--";
      document.getElementById("condition").textContent =
        "Data not available for this city";
      document.getElementById("weather-icon").innerHTML =
        '<i class="fas fa-sun"></i>';
    });
};
getData();
document.getElementById("city-input").value=""

