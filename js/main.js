fetch("data/noticias.json")

.then(response=>response.json())

.then(data=>{

const newsContainer=document.getElementById("news-container");

const featuredContainer=document.getElementById("featured-container");

data.forEach(news=>{

const card=document.createElement("div");

card.className="card";

card.onclick=()=>window.location=news.url;

card.innerHTML=`

<h3>${news.title}</h3>

<p>${news.summary}</p>

<small>${news.date}</small>

`;

if(news.featured){

featuredContainer.appendChild(card);

}else{

newsContainer.appendChild(card);

}

});

});
