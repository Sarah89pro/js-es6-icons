/****************
 * ICON DISPLAY *
*****************/

//sorgente dati
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

//sorgente colori
const colors = [
    "#e78fb3",
    "#9656a1",
    "#55423d",
];


//referenza contenitore
//Icon Container
const container = document.querySelector(".icons"); //prende il selettore

//1 Stampare le icone a schermo
//printIcons(icons, container);    //dove mettere le icone e le icone stesse (sono i due parametri per la funzione)

//2 Stampa le icone colorate
const coloredIcons = colorIcons(icons, colors); //array effettivo ritornato (qui c'è icons da cui voglio fare la copia)






/***********
 * UTILITY *
 ***********/

//FUNZIONE PER STAMPARE LE ICONE A SCHERMO
function printIcons(icons, container) { //non collidono! Qui sono parametri

    //markup icone
    let html =" "; //uso let perchè va costruita, verrà sovrascritta ogni volta
    //loop
    icons.forEach(element => { //icon qui sta comunque per element!

        //destrutturazione, tante variabili in un colpo solo
        const {name, prefix, family} = element;//l'oggetto da cui vogliamo estrarre in ogni iterazione

        html += `
        <div class="icon p-20">
            <i class= "${family} ${prefix}${name}" style="color: #333"></i>
            <div class="title">${name}</div>
        </div>
        `;               //+= per aggiungere un pezzo di markup ad ogni loop
                        // interpolazioni: family -> fas   prefix -> fa-   name -> cat parametri dinamici
    });

    //inserimento icone nel Container
    container.innerHTML = html; //dopo averlo costruito lo inserisco nell'html, assegnazione
}


//FUNZIONE PER STAMPARE ICONE COLORATE BY TYPE
function colorIcons(icons, colors) {
    const types = getType(icons);
    console.log(types); //invocazione funzione per ottenere i type e gli passo icons come valore, che passano qui per il loop
    console.log(colors);

    //assegno colore by type ad ogni icona(nuovo array per lasciare icon inalterato)
}


//FUNZIONE PER OTTENERE I TYPE UNIVOCI
function getType (icons) {
    //for each e includes su un array preparato da noi
    const types = [];
    icons.forEach((icon) => {
        if(! types.includes(icon.type)) {
            types.push(icon.type); //il type si trova già nei type preparati? se no lo includo altrimenti continua il loop

        }
        
    });
    return types; //una volta ottenuti tutti i valori, li mettiamoin questa variabile
}