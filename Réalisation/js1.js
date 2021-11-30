// declaration des variables 
var bottn;
var output;
var number;
var nombreDeviner;
var attempts;

 // entrer: saiser
 bottn = document.getElementById('btn');
 output = document.getElementById('outputText');
 number = Math.floor(Math.random() * 100);
 console.log(number)
 attempstOutPut = document.getElementById('tentative')
 attempts = 9;
 // traitement
 bottn.addEventListener('click', function(){
    nombreDeviner = document.getElementById('userInput').value;
    if(attempts>0){
        attempstOutPut.innerHTML=attempt +"-tentative" ;
        attempts--
             if (nombreDeviner == number){
             output.innerHTML = 'Correct'
             }else {
                 
                  if (nombreDeviner < number){
                  output.innerHTML = "le nombre que vous avez choisir est plus petit"
                  }else  {
                 output.innerHTML = "le nombre que vous avez choisir est plus grand"
                  }
                  
                
            } 
}else{
    output.innerHTML='louser'
    attemptOutPut.innerHTML= 'attempt = 0'

}
 
  });
  
  