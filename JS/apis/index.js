const btnRef = document.querySelector(".btn");

btnRef.addEventListener("mouseout", () => {
  alert("Mouse is outside the btn");
});

window.addEventListener("dblclick", (data) => {
  console.log("This is copied");
  console.log(data);
});

const ageE = new Promise((resolve, reject) => {
  resolve("I am this ");
});
function getWeather() {
  const inputRef = document.querySelector(".cityName");
  const responseRef = document.querySelector(".response");
  const cityName = inputRef.value;
  console.log(cityName);

  const weatherRef = fetch(
    `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`
  );
  weatherRef
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const temp = data.current.temp_c;
      console.log(data);
      //   Template Literals ``
      responseRef.innerHTML = `
      <h1>${data.location.name} -- ${data.location.country}</h1>
      <h1>${temp} degree celcius</h1>
      <h2>Feels Like Temperature ${data.current.feelslike_c}</h1>
      <h3>humidity ${data.current.humidity}</h1>
      <h4>Wind KPH ${data.current.wind_kph}</h1>
      `;
    })
    .catch((error) => {
      console.log(error);
    });
}
