//INSERIRE NOME GIOCATORE 1
var player1=prompt('inserisci il tuo nome', 'nome');
console.log(player1);
// //INSERIRE NOME GIOCATORE 2
var player2=prompt('inserisci il tuo nome', 'nome');
console.log(player2);
//TIRO PLAYER1
alert(player1 + ' tira il dado');
var dado1=Math.floor(Math.random()*6)+1;
alert('il risultato è '+ dado1);
console.log(dado1);
//TIRO PLAYER2
alert(player2 + ' tira il dado');
var dado2=Math.floor(Math.random()*6)+1;
alert('il risultato è '+ dado2);
console.log(dado2);
//LOGICA
if (dado1>dado2) {
 alert('vince ' + player1);
}else if(dado1==dado2){
  alert('parità');
}else {
  alert('vince ' + player2);
}
