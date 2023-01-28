// https://newsapi.org/v2/top-headlines?country=us&apiKey=b3910268dce8481caef14e805a9a95c5

//.env (environment)  -gitignore
const getNews = async () => {
  const API_KEY = "b3910268dce8481caef14e805a9a95c5";
  const URL = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    renderNews(data.articles);
  } catch (error) {
    renderError(error);
  }
};
const renderNews = (news) => {
  const newsDiv = document.getElementById("news");
  news.forEach((item)=>{
    const {title,description,urlToImage,url} = item

    newsDiv.innerHTML += `
    <div class="card col-md-6 col-lg-4 col-xl-3" >
  <div class="card" >
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
             <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
              <a href="${url}" target="_blank" class="btn btn-primary">Habere Git</a>
  </div>
</div>
</div>`
    
  })
  

  console.log(news);
};

const renderError = (err) => {
  console.log(err);
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = `
    <h2 class="text-danger">${err}</h2>  `;
};
getNews();
