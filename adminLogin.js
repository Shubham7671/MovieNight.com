let username="sk767196@gmail.com";
let password=12345

let user=document.getElementById("username");
let pass=document.getElementById("password");
let btn=document.getElementById("btn");
let container=document.querySelector("form")

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(document.querySelector("p")){
        document.querySelector("p").remove();
    }
    if(user.value==username && pass.value==password){
        let para = document.createElement("p");
		para.innerText = "Login Sucessfull !"
		container.append(para);
		setTimeout(() => {
		window.location.assign("adminPage.html")
		}, 2000);
    }else{
        let para = document.createElement("p");
		para.innerText = "Invalid Credentials !"
        para.style.color="red"
		container.append(para);
    }
})

