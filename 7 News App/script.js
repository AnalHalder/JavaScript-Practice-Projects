const apiKey = "5576ff27115d4ce09ce25af54369c7a4";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));
function reload(){
    window.location.reload();
}
async function fetchNews(query) {
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const res = await fetch(`${url}${query}&apiKey=${apiKey}`);
    const data = await res.json();
    addData(data.articles);
}

function addData(articles) {
    const container = document.getElementById("container");
    const template = document.getElementById("template");

    // Clear previous articles
    container.innerHTML = '';

    articles.forEach(article => {
        if (!article.urlToImage) return;
        fillData(article, template, container);
    });
}

function fillData(article, template, container) {
    const clone = template.content.cloneNode(true);
    const link = clone.querySelector("a");
    const img = clone.querySelector("#news-img");
    const title = clone.querySelector("#title");
    const details = clone.querySelector("#details");

    link.href = article.url;
    img.src = article.urlToImage;
    title.innerHTML = article.title;
    details.innerHTML = article.description;

    container.appendChild(clone);
}

function searchNews() {
    const query = document.getElementById("search-input").value;
    fetchNews(query);
    document.getElementById("search-input").value=null;
}
