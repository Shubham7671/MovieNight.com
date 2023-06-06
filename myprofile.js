let Pname=document.getElementById("p-name")
let f_name=document.getElementById("f-name");
let l_name=document.getElementById("l-name");
let email=document.getElementById("p-email");
let mobile=document.getElementById("p-number");

let btn_name=document.getElementById("btn-Pname");
let btn_email=document.getElementById("btn-email");
let btn_mobile=document.getElementById("btn-mobile")

let email_body=document.querySelectorAll(".personal-details>div");


btn_email.addEventListener('click',()=>{
    let e=email.value;
    email.value=e;
    email.style.color="grey"
    let para=document.createElement("p");
    para.innerText="Email Updated";
    
    email_body[2].append(para)
})

btn_name.addEventListener('click',()=>{
    let e=f_name.value;
    f_name.value=e;
    f_name.style.color="grey"
    let el=l_name.value;
    l_name.value=el;
    l_name.style.color="grey"
    Pname.innerText=e+" "+el;
    

    let para=document.createElement("p");
    para.innerText="Name Updated";
    email_body[0].append(para)
})
btn_mobile.addEventListener('click',()=>{
    let e=mobile.value;
    mobile.value=e;
    mobile.style.color="grey"
    let para=document.createElement("p");
    para.innerText="Number Updated";
    
    email_body[3].append(para)
})

console.log(email_body);