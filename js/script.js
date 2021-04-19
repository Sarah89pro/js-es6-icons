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

//referenza contenitore
//Icon Container
const container = document.querySelector(".icons"); //prende il selettore

//1 Stampare le icone a schermo
printIcons(icons, container); //dove mettere le icone e le icone stesse (sono i due parametri per la funzione)







/***********
 * UTILITY *
 ***********/

//Funzione per stampare le icone a schermo
function printIcons(icons, container) { //non collidono! Qui sono parametri

    //markup icone
    let html =" "; //uso let perchè va costruita, verrà sovrascritta ogni volta
    //loop
    icons.forEach(element => { //icon qui sta comunque per element!

        //destrutturazione, tante variabili in un colpo solo
        const {name, prefix, family} = element;//l'oggetto da cui vogliamo estrarre in ogni iterazione

        html += `
        <div class="icon p-20">
            <i class= "${family} ${prefix} ${name}" style="color: #333"></i>
            <div class="title">${name}</div>
        </div>
        `;               //+= per aggiungere un pezzo di markup ad ogni loop
                        // interpolazioni: family -> fas   prefix -> fa-   name -> cat parametri dinamici
    });

    //inserimento icone nel Container
    container.innerHTML = html; //dopo averlo costruito lo inserisco nell'html, assegnazione
}