const title = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role"); 
const shirtColors =document.getElementById("shirt-colors"); //turn shirt color field off by defualt 
const shirtDesign = document.getElementById('design');
const shirtColorOption = document.getElementById('color');
const activities = document.getElementById("activities");
//const paymentMethods = document.getElementsByClassName("payment-methods");
const paymentMethods = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const formTest = document.getElementsByTagName("form");
const form = document.querySelector("form");

let totalCost = 0;

//Testing script.js that is hooked up and working from index.html 
console.log('test');
otherJobRole.style.display= "none";
shirtColorOption.style.display="none";


//When the page first loads, the first text field should have the focus state by default to prompt the user.
window.onload = ()=>document.getElementById("name").focus();





/* event listener on change for "other" jobtitle when selected display otherJobRole field 
    when other option is selected; it raimins hiden */
title.addEventListener("change", e =>{
    let changeOption = e.target.value;
    
    if(changeOption === "other"){
     otherJobRole.style.display= "";
     otherJobRole.focus();
    }else{
        //hide field 
     otherJobRole.style.display= "none";
    }
});

shirtDesign.addEventListener("change", e =>{
    let design = e.target.value;
   
    shirtColorOption.style.display="none";
    //console.log("design "+design);
    for(i=0; i < shirtColorOption.length;i++){
        let theme =shirtColorOption[i].dataset.theme;
        //console.log(theme);
        if(design === "js puns" && theme === 'js puns'){
           shirtColorOption[i].style.display =""; 
        }else if (design === "heart js" && theme === 'heart js'){
            shirtColorOption[i].style.display ="";
        }else shirtColorOption[i].style.display ="none"; 
        //console.log(shirtColorOption);
    }
    shirtColorOption.style.display = "";
    shirtColorOption.focus();
});

activities.addEventListener("change", e=>{
    
    checkedOne = e.target;
    if(checkedOne.checked){
        totalCost +=parseInt(checkedOne.dataset.cost);
        console.log(totalCost);
    }else totalCost -=parseInt(checkedOne.dataset.cost);
    let printCost = activities.firstElementChild.nextElementSibling.nextElementSibling;
    //let htmlCost = typeCost.textContent;
    printCost.innerHTML =`Total: $${totalCost}`;
    //typeCost =;
    console.log(typeCost);
});

paymentMethods.addEventListener("change", e=>{
    selectedpayment =e.target;
    console.log(selectedpayment);
    if (selectedpayment.value === "credit-card"){  
        creditCard.style.display="";
        paypal.style.display="none";
        bitcoin.style.display="none";

    }else if(selectedpayment.value === "paypal") {  
        paypal.style.display="";
        creditCard.style.display="none";
        bitcoin.style.display="none";

    }else if(selectedpayment.value === "bitcoin"){     
        bitcoin.style.display="";
        creditCard.style.display="none";
        paypal.style.display="none";

    }
});

form.addEventListener("submit", e=>{
    e.preventDefault();
    //console.log("Form Submitted");
    isValidName(e);
    isValidEmail(e);

    const payment = document.getElementById("payment");
    if (payment.value === "credit-card"){  
        isValidCc(e);
        
    }

});
    // console.log(checkedOne);
    // console.log(checkedOne.checked);
    // let checkboxes = activities.firstElementChild.nextElementSibling//.firstElementChild;
    // console.log(checkboxes);
    // let inputCheckbox = checkboxes.firstElementChild;
    // console.log(inputCheckbox);
    // console.log(inputCheckbox.nextElementSibling);
    // console.log(inputCheckbox.firstElementChild);
    
    


function setPaymnetDefault(){
    
    for(let j=1; j < paymentMethods.options.length; j++){
        
        if(paymentMethods.options[j].value === "credit-card"){
            //paymentsType.options[i].selected =true;
            paymentMethods.options.selectedIndex =j;
            break;
        }
    }
}

setPaymnetDefault();

function isValidName(e){
    const fullName = document.getElementById("name");
    e.preventDefault();
    if (fullName.value ===''){
        fullName.parentElement.className= "not-valid";
        fullName.parentElement.lastElementChild.style.display= 'block';
        fullName.parentElement.classList.add("not-valid");
        fullName.parentElement.classList.remove('valid');

        
        fullName.parentElement.lastElementChild.innerHTML = "Name field cannot be empty";
       
    }else {
        fullName.parentElement.className = 'valid';
        fullName.parentElement.lastElementChild.style.display='none'
    }
    console.log(fullName.value);

}

function isValidEmail(e){
    const eMail = document.getElementById("email");
    const eMailStatus = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([com\.]{3})$/.test(eMail.value);
    console.log("is validEmail ", eMailStatus);
    e.preventDefault();
    if (eMail.value ===''){
        email.parentElement.className= "not-valid";
        email.parentElement.lastElementChild.style.display= 'block';
        email.parentElement.classList.add("not-valid");

        
        eMail.parentElement.classList.remove('valid');
        eMail.parentNode.classList.add('not-valid', 'error-border');
        eMail.parentElement.lastElementChild.innerHTML = "Email cannot be empty";
      
    } else if (!eMailStatus) {
        email.parentElement.className= "not-valid";
        email.parentElement.lastElementChild.style.display= 'block';
        email.parentElement.classList.add("not-valid");

        
        eMail.parentElement.classList.remove('valid');
        eMail.parentNode.classList.add('not-valid', 'error-border');
        eMail.parentElement.lastElementChild.innerHTML = "Email not in format";
    }else {
   
    eMail.parentElement.className = 'valid';
    eMail.parentElement.lastElementChild.style.display= 'none';
    }
}
    



function isValidCc(e){
    e.preventDefault();
    const ccNum = document.getElementById("cc-num")
    const zip = document.getElementById("zip");
    const cvv = document.getElementById("cvv");

    const ccNumStatus=/^[0-9]{13,16}$/.test(ccNum.value);
    const zipStatus =/^(\d{5})$/.test(zip.value);
    const cvvStatus = /^(\d{3})$/.test(cvv.value);
    
    console.log("CC " + ccNumStatus);
    console.log("Zip Code " + zipStatus);
    console.log("cvv " + cvvStatus);

    if(ccNum.value ===''){
        ccNum.parentElement.className= "not-valid";
        ccNum.parentElement.lastElementChild.style.display= 'block';
        ccNum.parentElement.classList.add("not-valid");
        ccNum.parentElement.classList.remove('valid');

        
        ccNum.parentElement.lastElementChild.innerHTML = "Credit Card field can't be left empty";
        console.log("this Credit Card Numer check")
    }else if(!ccNumStatus){
        ccNum.parentElement.className= "not-valid";
        ccNum.parentElement.lastElementChild.style.display= 'block';
        ccNum.parentElement.classList.add("not-valid");
        ccNum.parentElement.classList.remove('valid');

        
        ccNum.parentElement.lastElementChild.innerHTML = "Credit Card  should be 13 - 16 digits  ";
        console.log("this Credit wrong num ")

    }else {
        ccNum.parentElement.className = 'valid';
        ccNum.parentElement.lastElementChild.style.display= 'none';
    }

    if(zip.value ===''){
        zip.parentElement.className= "not-valid";
        zip.parentElement.lastElementChild.style.display= 'block';
        zip.parentElement.classList.add("not-valid");
        zip.parentElement.classList.remove('valid');

        
        zip.parentElement.lastElementChild.innerHTML = "Can't Be Embty";
        console.log("this Zip Code Numer check")
    }else if(!zipStatus){
        zip.parentElement.className= "not-valid";
        zip.parentElement.lastElementChild.style.display= 'block';
        zip.parentElement.classList.add("not-valid");
        zip.parentElement.classList.remove('valid');

        
        zip.parentElement.lastElementChild.innerHTML = "zip code should be 5 digit   ";
        console.log("thisis wrong zip code  ")

    }else {
        zip.parentElement.className = 'valid';
       zip.parentElement.lastElementChild.style.display= 'none';
    }

    if(cvv.value ===''){
        cvv.parentElement.className= "not-valid";
        cvv.parentElement.lastElementChild.style.display= 'block';
        cvv.parentElement.classList.add("not-valid");
        cvv.parentElement.classList.remove('valid');

        
        cvv.parentElement.lastElementChild.innerHTML = "please enter 3 digit cvv from back of your card";
        console.log(" cvv Code Numer check")
    }else if(!cvvStatus){
        cvv.parentElement.className= "not-valid";
        cvv.parentElement.lastElementChild.style.display= 'block';
        cvv.parentElement.classList.add("not-valid");
        cvv.parentElement.classList.remove('valid');

        
        cvv.parentElement.lastElementChild.innerHTML = "cvv code should be 3 digits   ";
        console.log("thisis wrong cvv code  ")

    }else {
        cvv.parentElement.className = 'valid';
       cvv.parentElement.lastElementChild.style.display= 'none';
    }
}

function isValidCoursesEntry(){

}