function generate(){

const title=document.getElementById("title").value;
const summary=document.getElementById("summary").value;
const image=document.getElementById("image").value;
const category=document.getElementById("category").value;

const json=

{
title,
date:new Date().toLocaleDateString(),
summary,
url:"",
image,
category,
featured:false
};

document.getElementById("output").innerText=

JSON.stringify(json,null,2);

}
