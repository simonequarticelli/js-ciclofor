//CHIEDERE MAIL ALL'UTENTE
var mail_utente=prompt('Inserisci la tua mail');
//CREARE UNA LISTA DI ACCESSO
var lista_accesso=['simone@gmail.com', 'alessia@libero.it', 'sam@gmail.com'];//ARRAY
//CREO UNA VARIABILE DI VERIFICA
var trovato=false;
//AVVIARE IL CICLO E CONTROLLARE CHE LA MAIL INSERITA SIA CONTENUTA NELLA LISTA DI ACCESSO
for (var i = 0; i < lista_accesso.length; i++){
  if (mail_utente==lista_accesso[i]){
    trovato=true;
    console.log(lista_accesso[i]);//VISUALIZZO IL CONTENUTO CORRETTO
  }
}
//STAMPARE UN MESSAGGIO APPROPRIATO
if(trovato==true){
  alert('L\'email inserita è stata confermata');
}else{
  alert('L\'email inserita non è valida');
}
