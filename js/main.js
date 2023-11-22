// Questo è il file che contiene tutto il codice JS della pagina web
//--------------------INIZIO-----------------------
let arrayAutomobiliTotali = 
[CreaAutomobile("Fiat","Fiat 500","benzina"),
 CreaAutomobile("Renault","Clio","diesel"),
 CreaAutomobile("Ford","Fiesta","gpl"),
 CreaAutomobile("Renault","Megane","diesel"),
 CreaAutomobile("BMW","X3","benzina"),
 CreaAutomobile("Mercedes Benz","Glc","diesel"),
 CreaAutomobile("Porsche","Carrera","gpl"),
 CreaAutomobile("Audi","A4","diesel"),
 CreaAutomobile("Renault","Clio","benzina"),
 CreaAutomobile("Audi","A5","gpl"),
];

//Stampo a console array di automobili
//StampaArray(arrayAutomobiliTotali);

//Dichiarazione e creazione degli Array da selezionare
let arrayAutomobiliDiesel =[]; 
let arrayAutomobiliBenzina =[]; 
let arrayAutomobiliRestoAlimentazioni =[]; 

//Selezione in base all'alimentazione del veicolo
arrayAutomobiliTotali.forEach(function(element){
    if(element.alimentazione == "diesel"){
        arrayAutomobiliDiesel.push(element);
    }else if(element.alimentazione == "benzina"){
        arrayAutomobiliBenzina.push(element);
    }else{
        arrayAutomobiliRestoAlimentazioni.push(element);
    }
});

//Stampa a console le selezioni
console.log("-------------------------------------");
StampaArray(arrayAutomobiliDiesel);
console.log("-------------------------------------");
StampaArray(arrayAutomobiliBenzina);
console.log("-------------------------------------");
StampaArray(arrayAutomobiliRestoAlimentazioni);
console.log("-------------------------------------");




//--------------------FUNZIONI---------------------
function CreaAutomobile(marcaAuto,modelloAuto,alimentazioneArrayAuto){
    const auto = 
    {
        marca : marcaAuto,
        modello : modelloAuto,
        alimentazione : alimentazioneArrayAuto
    }
    return auto;
}

function StampaArray(array){

    array.forEach(function(element){
        console.log(element);
    });
}

