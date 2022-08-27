const MainTag =document.querySelector(".Main")
const body =document.querySelector(".body")
const NextTag =document.querySelector(".Next")
const CounTag =document.querySelector(".counT-bar")
const is223Tag =document.querySelector(".is223")
fetch('https://api.jikan.moe/v4/anime?q=Naruto all&sfw')
.then(response =>{
    return response.json();
}) .then(data =>{
   dataloding(data)
   bodyinline()
})
.catch(earr =>console.warn(earr.message));

const bodyinline =() => {
body.style.display = "block"

}

const dataloding = (data) => {    
    MainTag.innerHTML = ""
    for(let i = 0 ; i < 25 ; i++  ){        
     

     if(i === 14 )  {
        i = 15
        
     }
    MainTag.innerHTML += `
     
   
<div class="Main-container">
<a href="https://youtu.be/nOJxq9lJLT0" ><img src="${data.data[i].images.jpg.image_url}" class="Main-video"></a>
<span class="Video-Name">  ${data.data[i].title_japanese}</span>
<span class="Text">${data.data[i].title_english} </span> 
<div class="view">
    <span class="min ">${data.data[i].duration} - 1080p</span>
    <span class="min view">${data.data[i].members} <i class="fa-solid fa-eye min eye"></i></span>
</div>
<span class="min"><i class="fa-solid fa-heart heart"></i>favorites :<span class="rating-result" > ${data.data[i].favorites}</span> </span>
<span class="rating min">  / <i class="fa-solid fa-star-half-stroke star"></i> rating score :<span class="rating-result"> ${data.data[i].score}</span> </span>
</div>
   
   
   
   `

    }    
}

NextTag.addEventListener("click", () => {

    fetch('https://api.jikan.moe/v4/anime?q=Demon slayer&sfw')
    .then(response =>{
        return response.json();
    }) .then(data =>{
       Onepiece(data)
       bodyinline()
    })
    .catch(earr =>console.warn(earr.message));
    
    const bodyinline =() => {
    body.style.display = "block"
    
    }

})
CounTag.addEventListener("click",() => {

    fetch('https://api.jikan.moe/v4/anime?q=Naruto all&sfw')
    .then(response =>{
        return response.json();
    }) .then(data =>{
       dataloding(data)
       bodyinline()
    })
    .catch(earr =>console.warn(earr.message));
    
    const bodyinline =() => {
    body.style.display = "block"
    
    }
    
})
const Onepiece = (data) => {
    MainTag.innerHTML = ""
console.log(data,"one piece")

for(let i = 0 ; i < 25 ; i++  ){        
     

   
    
   MainTag.innerHTML += `
    
  
<div class="Main-container">
<a href="https://youtu.be/vIcOfNNLbpg" ><img src="${data.data[i].images.jpg.image_url}" class="Main-video"></a>
<span class="Video-Name">  ${data.data[i].title_japanese}</span>
<span class="Text">${data.data[i].title_english} </span> 
<div class="view">
   <span class="min ">${data.data[i].duration} - 1080p</span>
   <span class="min view">${data.data[i].members} <i class="fa-solid fa-eye min eye"></i></span>
</div>
<span class="min"><i class="fa-solid fa-heart heart"></i>favorites :<span class="rating-result" > ${data.data[i].favorites}</span> </span>
<span class="rating min">  / <i class="fa-solid fa-star-half-stroke star"></i> rating score :<span class="rating-result"> ${data.data[i].score}</span> </span>
</div>
  
  
  
  `

   }   

}






const CountTag =document.querySelector(".counT-bar")
const Count2Tag =document.querySelector(".counT-bar2")
for(let i = 1 ; i < 17 ; i++  ) {
    console.log("it working")
    CountTag.innerHTML += `
    <apan class="Countnumber">${i}</apan>
    
    `
 
}
for(let i = 1 ; i < 17 ; i++  ) {
    
    Count2Tag.innerHTML += `
    <apan class="Countnumber">${i}</apan>
    
    `
}

is223Tag.addEventListener("click",() => {
console.log("it www")
    fetch('https://api.jikan.moe/v4/anime?q=Dragon ball z&sfw')
    .then(response =>{
        return response.json();
    }) .then(data =>{
       Dragonball(data)
       bodyinline()
    })
    .catch(earr =>console.warn(earr.message));
    
    const bodyinline =() => {
    body.style.display = "block"
    
    }





})

const Dragonball =(data) => {
    console.log(data)
    MainTag.innerHTML = ""

for(let i = 0 ; i < 25 ; i++  ){        
     
   
    
    MainTag.innerHTML += `
     
   
 <div class="Main-container">
 <a href="https://youtu.be/vIcOfNNLbpg" ><img src="${data.data[i].images.jpg.image_url}" class="Main-video"></a>
 <span class="Video-Name">  ${data.data[i].title_japanese}</span>
 <span class="Text">${data.data[i].title_english} </span> 
 <div class="view">
    <span class="min ">${data.data[i].duration} - 1080p</span>
    <span class="min view">${data.data[i].members} <i class="fa-solid fa-eye min eye"></i></span>
 </div>
 <span class="min"><i class="fa-solid fa-heart heart"></i>favorites :<span class="rating-result" > ${data.data[i].favorites}</span> </span>
 <span class="rating min">  / <i class="fa-solid fa-star-half-stroke star"></i> rating score :<span class="rating-result"> ${data.data[i].score}</span> </span>
 </div>
   
   
   
   `
 
    } 

}