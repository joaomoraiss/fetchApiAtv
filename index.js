const apiKey = "c80f929f598386296c42420d3b1264c1"; 

const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const resultDiv = document.getElementById("result");

searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`)
      .then(response => response.json())
      .then(data => {
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const cityName = data.name;
        resultDiv.innerHTML = `Em ${cityName}, está ${description} e a temperatura atual é de ${temperature}°C.`;
      })
      .catch(error => {
        console.error(error);
        resultDiv.innerHTML = "Ocorreu um erro ao buscar o clima. Tente novamente mais tarde.";
      });
  }
});
