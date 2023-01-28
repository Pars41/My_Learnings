// https://newsapi.org/v2/top-headlines?country=us&apiKey=b3910268dce8481caef14e805a9a95c5  

//.env (environment)  -gitignore
const getNews = async () => {
const API_KEY = "b3910268dce8481caef14e805a9a95c5"
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data.articles);
}
getNews()