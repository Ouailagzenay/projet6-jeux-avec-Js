// declaration des variables 
var number;
var output;
var botn;
var attmpes;
var nombreDeviner;
// entrer: saiser
botn= document.getElementById('botn');
output=document.getElementById('outputText');
number=Math.floor(Math.random() * 100);
attmpes = 10 ;
console.log(number)
outputattmpes = document.getElementById('tentative')
// traitement
botn.addEventListener('click' , function(){
attmpes--
nombreDeviner=document.getElementById('userInput').value;
if (attmpes > 0) {
   outputattmpes.innerHTML= 'attmpes = '+attmpes 
  if(nombreDeviner == number){
    if(nombreDeviner == number && attmpes >=8){
      output.innerHTML = 'Bravo, vous etes un Génie !'
      }else{
      if(nombreDeviner == number && attmpes >=3){
      output.innerHTML = 'Félicitations'
      }
     }

    }else{
    if(nombreDeviner > number){
      output.innerHTML="le nombre que vous avez choisir est plus grand"
    }else{
      output.innerHTML="le nombre que vous avez choisir est plus petit"
    }
  }
}else {
    output.innerHTML = "c'est rate";
    outputattmpes.innerHTML= "attmpes =" + 0;
  
}
});

