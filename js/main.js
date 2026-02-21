fetch("data/noticias.json")
.then(res=>res.json())
.then(data=>{

const featuredContainer=document.getElementById("featured-container");
const newsContainer=document.getElementById("news-container");

data.forEach(news=>{

if(news.featured){

featuredContainer.style.backgroundImage=`url(${news.image})`;

featuredContainer.innerHTML=`

<div class="featured-overlay">

<h2>${news.title}</h2>

<p>${news.summary}</p>

<small>${news.date} · ${news.category}</small>

</div>

`;

}else{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${news.image}" style="width:100%">

<h3>${news.title}</h3>

<p>${news.summary}</p>

<small>${news.date} · ${news.category}</small>

`;

card.onclick=()=>location.href=news.url;

newsContainer.appendChild(card);

}

});

});
