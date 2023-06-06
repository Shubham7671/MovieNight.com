// create function

function getCard(id,image,title,language,genre){
  let div=document.createElement("div");
  div.innerHTML=`<img src=${image}
  alt="">
<h2>${title}</h2>
<h4>Language :${language} : (U/A) :${genre}</h4>
<button id=${id}>Book Now</button>
<button class="book-now-btn">Wishlist</button>`
product_container.append(div);
}




// post method

let baseUrl = `https://movie-booking-site-1xbl.onrender.com`

// function constructor;
function NewMovie(title, image, language, genre, recent) {
    this.title = title;
    this.image = image;
    this.language = language;
    this.genre = genre;
    this.recent = recent;
}

// taking data from the admin;
let post_title = document.getElementById("p-title");
let post_image = document.getElementById("p-image");
let post_language = document.getElementById("p-language");
let post_genre = document.getElementById("p-genre");
let post_recent = document.getElementById("p-recent");
let post_btn = document.getElementById("p-btn");

// event listner
post_btn.addEventListener('click', () => {

    // constructing new object using constructor function
    let obj = new NewMovie(post_title.value, post_image.value, post_language.value, post_genre.value, post_recent.value)

    console.log(obj);
    //posting the new data to the api
    fetch(`${baseUrl}/products`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(req=>req.json())
    .then((data)=>{
       
        data.forEach(e => {
            getCard(e.id,e.image,e.title,e.language,e.genre)  
        });
    })
   

})


// delete method



let d_btn=document.getElementById("d-btn");
let d_id=document.getElementById("d-id")

d_btn.addEventListener('click',()=>{
    let id=d_id.value;



    fetch(`${baseUrl}/products/${id}`,{
        method:"DELETE"
    }).then(req=>req.json())
    .then((data)=>{
        data.forEach(e => {
            getCard(e.id,e.image,e.title,e.language,e.genre)  
        });
    })
})

// update method

function UpdateMovie(title, image, language, genre, recent){
    if(title!=""){
        this.title=title;
    }
    if(image!=""){
        this.image=image;
    }
    if(language!=""){
        this.language=language;
    }
    if(genre!=""){
        this.genre=genre;
    }
    if(recent!=""){
        this.recent=recent;
    }

}


let u_id=document.getElementById("u-id")
let u_title = document.getElementById("u-title");
let u_image = document.getElementById("u-image");
let u_language = document.getElementById("u-language");
let u_genre = document.getElementById("u-genre");
let u_recent = document.getElementById("u-recent");
let u_btn = document.getElementById("u-btn");

u_btn.addEventListener('click',()=>{
    let id=u_id.value

    let obj = new UpdateMovie(u_title.value, u_image.value, u_language.value, u_genre.value, u_recent.value)


    fetch(`${baseUrl}/products/${id}`,{
      method:"PATCH",
      body:JSON.stringify(obj),
      headers:{
        'Content-type':'application/json'
      }
    }).then(req=>req.json())
    .then((data)=>{
        data.forEach(e => {
            getCard(e.id,e.image,e.title,e.language,e.genre)  
        });
    })
})

