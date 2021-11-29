// declaration des variables 
var bottn;
var output;
var number;
var attempts;
var nombreDeviner;
 // entrer: saiser 
 bottn = document.getElementById('bottn');
 output= document.getElementById('outputText');
 number= Math.floor(Math.random() * 100);
 outputattemps= document.getElementById('attempts');
 attempts = 10 ;
 // traitement 
 bottn.addEventListener('click' , function(){
 attempts--;
 nombreDeviner = document.getElementById("userInput").value;
 if (attempts >0) {
    outputattemps.innerHTML="attempts = "+ attempts
 }else if (nombreDeviner == number && attempts >= 8){ 
  output.innerHTML = "trés bien" 
 }
 else if (nombreDeviner == number && attempts >= 4){
     output.innerHTML= "Félicitations" 
 } 
 
  if (nombreDeviner > number) {
     output.innerHTML="c'est nomber est plus petit que" 
 }
  else {
     output.innerHTML= "c'est nomber est plus grand que"
 }
 });