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
    let typeCost = activities.firstElementChild.nextElementSibling.nextElementSibling;
    let htmlCost = typeCost.textContent;
    typeCost.innerHTML =`Total Cost: $${totalCost}`;
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
        console.log(j);
        if(paymentMethods.options[j].value === "credit-card"){
            //paymentsType.options[i].selected =true;
            paymentMethods.options.selectedIndex =j;
            break;
        }
    }
}

setPaymnetDefault();
