const API_KEY = `80d57d17905645f683713484a9dfbc83`;
const getLatestNews = async() => {
    const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    let news = data.articles;
    console.log("news", news);
};

getLatestNews();