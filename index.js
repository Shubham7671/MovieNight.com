let login_btn = document.querySelector(".nav-btn");
let admin_btn = document.getElementById("admin-btn")
let booking_container = document.getElementById("my-booking-container");
let dropdown_container = document.getElementById("drop-down-container");
let admin_container = document.getElementById("admin-container");
let login_container = document.getElementById("login-container");
let slider_container=document.querySelector(".slider_container")
let slider_image=document.getElementById("slider-image");
let slider_arr=[
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1686029849005_anubhutiuttarakhanddesktop.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg","https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1686029849005_anubhutiuttarakhanddesktop.jpg"
]
let i=0;
setInterval(() => {
  if(i<slider_arr.length-1){
    i++;
  }else{
    i=0;
  }
  slider_image.src=slider_arr[i];
}, 1500);

let login_status = JSON.parse(localStorage.getItem("login-status"));
if (login_status == null) {
  login_status = "";
}



if (!login_status == "") {
  ifUserIsLoggedIn();

  sign_out.addEventListener('click', () => {
    ifUserIsNotLoggedIn();
    localStorage.setItem("login-status", JSON.stringify(""));
    window.location.assign("index.html");
  })

} else {
  ifUserIsNotLoggedIn()
}



/// product section 


let product_container = document.querySelector(".products")

let product_url = `https://movie-booking-site-1xbl.onrender.com/products`
fetch(product_url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      getCard(e.id, e.image, e.title, e.language, e.genre)

    });
    takingProductId();
  })
function takingProductId() {

  let book_now_btn = document.querySelectorAll(".book-now-btn")
  book_now_btn.forEach((e) => {
    e.addEventListener('click', (el) => {
      if (!login_status == "") {
        let id = el.target.id
        localStorage.setItem("product-id", JSON.stringify(id));
        window.location.assign("movieDetails.html")
      } else {
        alert("Please Login")
      }
    })
  })



}

function ifUserIsLoggedIn() {
  login_btn.remove();
  admin_btn.remove();


  booking_container.innerHTML = `<a id="my-booking" href="mybooking.html">My Bookings</a>`

  dropdown_container.innerHTML = `<div class="dropdown">
  <button class="dropbtn">${login_status[0]+"K"}</button>
  <div class="dropdown-content">
      <a id="my-profile" href="myprofile.html">My Profile</a>
      <a href="#" id="sign_out">Sign out</a>
  </div>

</div>`

}

function ifUserIsNotLoggedIn() {
  booking_container.innerHTML = "";
  dropdown_container.innerHTML = "";

  login_container.innerHTML = `<a class="nav-btn" href="login.html">Login</a>`;

  admin_container.innerHTML = `<a id="admin-btn"href="adminLogin.html">Admin</a>`
}
function getCard(id, image, title, language, genre) {
  let div = document.createElement("div");
  div.innerHTML = `<img src=${image}
  alt="">
<h2>${title}</h2>
<h4>${language} : (U/A) : ${genre}</h4>
<button id=${id} class="book-now-btn">Book Now</button>`
  product_container.append(div);
}




