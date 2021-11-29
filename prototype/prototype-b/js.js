// declaration des variables 
var botn ;
var output ;
var number ;
var nombreDeviner ;

 // entrer: saiser 
 botn = document.getElementById('botn');
 output = document.getElementById('outputText');
 number = Math.floor(Math.random() * 100);
 // traitement 

   botn.addEventListener('click' , function(){

    nombreDeviner=document.getElementById("userInput").value;
   if ( nombreDeviner == number ){ 
     output.innerHTML = "Félicitations" 
   }else if (nombreDeviner > number) {
    output.innerHTML = "c'est nomber est plus petit que" 
   }
   else {
     output.innerHTML = "c'est nomber est plus grand que"
   }
  
 });


