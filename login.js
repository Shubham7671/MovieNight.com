const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let Suser = document.getElementById("sign-user");
let Sname = document.getElementById("sign-name");
let Spass = document.getElementById("sign-pass");
let Smob = document.getElementById("sign-mob")
const signin_btn = document.getElementById("btn-Signin");
let luser = document.getElementById("login-user");
let lpass = document.getElementById("login-pass")
const signup_btn = document.getElementById("btn-signup");
let login_container = document.getElementById("l");
let sign_container = document.getElementById("s");

let login_arr = []

let baseUrl = `https://movie-booking-site-1xbl.onrender.com/user`
fetch(baseUrl).then(res => res.json()).then((data) => {
   login_arr=data;
	signin_btn.addEventListener('click', () => {
		checkAuthication(data)
		
	})


})


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signup_btn.addEventListener('click', () => {
	let obj = {
		name: Sname.value,
		username: Suser.value,
		password: Spass.value,
		mobile: Smob.value,
		product: []
	}

	fetch(baseUrl, {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
			'Content-type': 'application/json'
		}
	})
	if (document.querySelector(".conf_msg2")) {
		document.querySelector(".conf_msg2").remove();
	}
	let para = document.createElement("p");
	para.className = "conf_msg2"
	para.innerText = "Account Created !"
	sign_container.append(para);
	
	let el=Sname.value;
	localStorage.setItem("login-status", JSON.stringify(el));
	
	setTimeout(() => {
		window.location.reload()
		
	}, 2000);
	


})

function checkAuthicationMini(arr){
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].username == luser.value && arr[i].password == lpass.value) {

			localStorage.setItem("user-id",JSON.stringify(arr[i].id))    
			
		}
	}

}


function checkAuthication(arr) {

	let is = false;
	let el = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].username == luser.value && arr[i].password == lpass.value) {
			is = true;
			el = arr[i].name;
			localStorage.setItem("user-id",JSON.stringify(arr[i].id))    
			
		}
	}
	if (is) {
		if (document.querySelector(".conf_msg")) {
			document.querySelector(".conf_msg").remove();
		}
		let para = document.createElement("p");
		para.className = "conf_msg"
		para.innerText = "Login Sucessfull !"
		login_container.append(para);
		setTimeout(() => {
			window.location.assign("index.html")
		}, 2000);


	} else {
		if (document.querySelector(".conf_msg")) {
			document.querySelector(".conf_msg").remove();
		}
		let para = document.createElement("p");
		para.className = "conf_msg"
		para.innerText = "Incorrect Credentials !"
		login_container.append(para);

	}
	localStorage.setItem("login-status", JSON.stringify(el));
}
