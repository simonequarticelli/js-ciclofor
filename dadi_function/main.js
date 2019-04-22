//SPERIMENTO FUNCTION

//VARIABILI DADI
var dado1=Math.floor(Math.random()*6)+1;
var dado2=Math.floor(Math.random()*6)+1;
//INSERIRE NOME GIOCATORE 1
var player1=prompt('inserisci il tuo nome', 'nome');
console.log(player1);
//INSERIRE NOME GIOCATORE 2
var player2=prompt('inserisci il tuo nome', 'nome');
console.log(player2);
//TIRO PLAYER1
document.getElementById('gioco_dadi_p1').innerHTML=(player1+' tira il dado');
function tiroDadi_p1(){
    document.getElementById('risultato_player1').innerHTML=dado1;
}
//TIRO PLAYER2
document.getElementById('gioco_dadi_p2').innerHTML=(player2+' tira il dado');
function tiroDadi_p2(){
    document.getElementById('risultato_player2').innerHTML=dado2;
    //LOGICA
    if (dado1>dado2) {
     document.getElementById('verdetto').innerHTML='vince '+player1;
    }else if (dado1==dado2){
      document.getElementById('verdetto').innerHTML='parità';
      document.getElementById('verdetto').innerHTML='parità';
    }else{
      document.getElementById('verdetto').innerHTML='vince '+player2;
    }
  }
