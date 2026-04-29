window.onload = function () {

const password = document.getElementById("password");
const show_pwd = document.getElementById("show_pwd");
const strength = document.getElementById("strength");
const character_count = document.getElementById("character_count");
const feedback = document.getElementById("feedback");
const pass_length = document.getElementById("pass_length");
const gen_btn = document.getElementById("gen_btn");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const sym = document.getElementById("sym");
const num = document.getElementById("num"); 


const rules = [
  {
    minRange: -Infinity,
    maxRange: 0,
    strengthLevel: "No Password",
    feedbackMessage: "Enter something"
  },
  {
    minRange: 1,
    maxRange: 3,
    strengthLevel: "Very Weak",
    feedbackMessage: "Very weak password, add more characters and variety."
  },
  {
    minRange: 4  ,
    maxRange: 6,
    strengthLevel: "Weak",
    feedbackMessage: "Weak password, try adding uppercase letters and numbers."
  },
  {
    minRange: 7,
    maxRange: 9,
    strengthLevel: "Medium",
    feedbackMessage: "Medium password, improve by adding symbols and length."
  },
  {
    minRange: 10,
    maxRange: 11,
    strengthLevel: "Strong",
    feedbackMessage: "Strong password, good job! Still can be improved slightly."
  },
  {
    minRange: 12,
    maxRange: 13,
    strengthLevel: "Very Strong",
    feedbackMessage: "Very strong password, excellent security!"
  },
  {
    minRange: 14,
    maxRange: Infinity,
    strengthLevel: "Excellent",
    feedbackMessage: "Excellent password security!"
  }
];


  

password.addEventListener("input", function(){
 
   lengthPass=password.value.length;
   character_count.innerHTML = lengthPass
   score=0
   const A = /[a-z]/.test(password.value);
   const B = /[A-Z]/.test(password.value);
   const C = /[0-9]/.test(password.value);
   const D = /[[!@#$%^&*(),.?":{}|<>\\\/\[\]_=+\-~`;'"]/.test(password.value);


   if (lengthPass >= 16) score += 6;
   else if (lengthPass >= 12) score += 4;
   else if (lengthPass >= 8) score += 2;

   if (A) { lower.style.color = "green"; score++; }
   else { lower.style.color = "#444"; }
   
   if (B) { upper.style.color = "green"; score += 2; }
   else { upper.style.color = "#444"; }
   
   if (C) { num.style.color = "green"; score += 2; }
   else { num.style.color = "#444"; }
   
   if (D) { sym.style.color = "green"; score += 3; }
   else { sym.style.color = "#444"; }

    
    const indexa = rules.findIndex(rule => score >= rule.minRange && score <= rule.maxRange);
    feedback.innerText = rules[indexa].feedbackMessage;
    strength.innerText= rules[indexa].strengthLevel
    
     /*  console.log(score)
         console.log(indexa)
         console.log(password.value) */

})


show_pwd.addEventListener("change",function(){
    if(show_pwd.checked){password.type="text"}
    else{password.type=password}
})



const chars = "abcdefghijklmnopqrstuvwxyz" +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
              "0123456789" +
              "!@#$%^&*()_+=-<>?:\"{}|,./;'[]\\";


gen_btn.addEventListener("click", function() {
    const pass_length_gen= document.getElementById("pass_length_gen");
    let len= pass_length_gen.value;
    console.log(len)
    let randomPass="";
     
    while( randomPass.length < len){
            let randomChar = chars[Math.floor(Math.random() * chars.length)]

        randomPass+= randomChar;
        console.log(randomChar)
    }
    password.value= randomPass;
    password.dispatchEvent(new Event("input"))
})






































}
