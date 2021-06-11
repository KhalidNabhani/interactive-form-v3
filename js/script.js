const title = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role"); 
const shirtColors =document.getElementById("shirt-colors"); //turn shirt color field off by defualt 
const shirtDesign = document.getElementById('design');
const shirtColorOption = document.getElementById('color');
const activityBox = document.getElementById("activities-box");

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
    let optionC ="";
    shirtColorOption.style.display="none";
    console.log("design "+design);
    for(i=0; i < shirtColorOption.length;i++){
        let theme =shirtColorOption[i].dataset.theme;
        console.log(theme);
        if(design === "js puns" && theme === 'js puns'){
           shirtColorOption[i].style.display =""; 
        }else if (design === "heart js" && theme === 'heart js'){
            shirtColorOption[i].style.display ="";
        }else shirtColorOption[i].style.display ="none"; 
        console.log(shirtColorOption);
    }
shirtColorOption.style.display = "";
shirtColorOption.focus();
})