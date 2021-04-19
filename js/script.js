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
    "#b76c19",
    "#004643",
    "#e78fb3",
];


//referenza contenitore
//Icon Container
const container = document.querySelector(".icons"); //prende il selettore

//1 Stampare le icone a schermo
//printIcons(icons, container);    //dove mettere le icone e le icone stesse (sono i due parametri per la funzione)

//2 Stampa le icone colorate
const coloredIcons = colorIcons(icons, colors); //array effettivo ritornato (qui c'è icons da cui voglio fare la copia)
console.log(coloredIcons);
printIcons(coloredIcons, container); //stampa le icone colorate

//3 Filtraggio Icons

//A Generazione select options
const select = document.querySelector("#type");
const types = getType(coloredIcons);
//options di Filtraggio
genOption(types, select);

//B Filtraggio on Change
select.addEventListener("change", () => {   //l'evento non è al click ma al cambiamento di stato (option attiva)
    console.log(select.value);
    const selected = select.value;

    const filteredIcons = filtericons(coloredIcons, selected); //lo passiamo ogni volta che facciamo un change
    printIcons(filteredIcons, container);


});







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
        const {name, prefix, family, color} = element;//l'oggetto da cui vogliamo estrarre in ogni iterazione

        html += `
        <div class="icon p-20">
            <i class= "${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>
        `;               //+= per aggiungere un pezzo di markup ad ogni loop
                        // interpolazioni: family -> fas   prefix -> fa-   name -> cat parametri dinamici
    });

    //inserimento icone nel Container
    container.innerHTML = html; //dopo averlo costruito lo inserisco nell'html, assegnazione, markup sostituto
}


//FUNZIONE PER STAMPARE ICONE COLORATE BY TYPE
function colorIcons(icons, colors) {
    const types = getType(icons);
    console.log(types); //invocazione funzione per ottenere i type e gli passo icons come valore, che passano qui per il loop
    console.log(colors);

    //assegno colore by type ad ogni icona(nuovo array per lasciare icon inalterato)
    const coloredIcons =icons.map((icon) => {  //usiamo map che ci permette di avere un array di ritorno che non è un riferimento ad icons, ma ci costruiamo il dato da ritornare ad ogni iterazione
        const indexType = types.indexOf(icon.type); //attraverso un valore e non attraverso l'indice mi prendo la posizione

        //costruire l'oggetto che verrà ritornato nella nuova collezione (questo ad ogni iterazione)
        return {
            ...icon, //spread nell'oggetto in cui stiamo reiterando(per evitare icon.name etc)
            color: colors[indexType],
        }
    });
    return coloredIcons; //nuovo array copia stand alone
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


//FUNZIONE PER GENERARE LE OPZIONI PER FILTER (all, animals, vegetables, user)
function genOption(types, select) {
    //generazione opzioni
    let options = "";
    types.forEach((type) => {   //array type, ci faccio un loop e creo markup per ogni elemento
        options +=`
        <option value="${type}">${type}</option>
        `; //
    });
    
    select.innerHTML += options; //se scrivi =options escludi "all" perchè sovrascrive e prende solo le options generate

}


//FUNZIONE PER ICON SET 
function filterIcons(icons, selected) {

    if (selected === "all") { //blocca l'esecuzione della funzione quando seleziono all, così vedo tutte le icone
        return icons;
    }

    const filtered = icons.filter((icon) => {

        return icon.type === selected; //il type è uguale a ciò che ho selezionato? Se si portalo fuori, altrimenti continua col prossimo


    });

    return filtered;
}