const getWeather = async () => {
  let API = "9fe930e884e17ceb0d2c05742506eb6a";
  let URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API}`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    renderCities(data.articles);
    console.log("çalışıyor");
  } catch (error) {
    renderError(error);
  }
};
// const renderCities = (cities) => {
//   const citiesDiv = document.getElementById("cities");
//   cities.forEach((item) => {
//     const { title, description, urlToImage, url } = item;
//     console.log(cities);

//     citiesDiv.innerHTML += `
//       <div class="card col-md-6 col-lg-4 col-xl-3" >
//     <div class="card" >
//           <img src="${urlToImage}" class="card-img-top" alt="...">
//           <div class="card-body">
//                <h5 class="card-title">${title}</h5>
//                 <p class="card-text">${description}</p>
//                 <a href="${url}" target="_blank" class="btn btn-primary">Habere Git</a>
//     </div>
//   </div>
//   </div>`;
//   });

//   console.log(cities);
// };
// const renderError = (err) => {
//   console.log(err);
//   const citiesDiv = document.getElementById("cities");
//   citiesDiv.innerHTML = `
//       <h2 class="text-danger">${err}</h2>  `;
// };
getWeather();
