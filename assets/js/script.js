/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data.
Confermate lettura come al solito e buon Vue
*/

const { createApp } = Vue

  createApp({
    data() {
      return {

        //Stampo a schermo un messaggio all’interno dell'h1
        h1Message: 'Hello, this is a mex write with VUE',

        //Bonus - aggiungo img
        photo: 'https://picsum.photos/536/354'
      }
    }
  }).mount('#app')