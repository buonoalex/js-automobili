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

//Passaggio ad DOM
StampaInDomArray(arrayAutomobiliTotali);



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

function StampaInDomArray(array){
    array.forEach(function(element){
        document.getElementById("listaAutomobili").innerHTML += `
        <div class="col-12">
        <p>Marca:${element.marca},Modello:${element.modello},Alimentazione:${element.alimentazione}</p>
        </div>
        `;
    });
}

document.getElementById("inserisciNuovaAuto").addEventListener("submit", function(event) {

    event.preventDefault();

    //Prendi input form
    let newMarcaUtente = document.getElementById("inputMarca").value;
    let newModelloUtente = document.getElementById("inputModello").value;
    let newAlimentazioneUtente = document.getElementById("inputAlimentazione").value;

    //Reset per grafica
    document.getElementById("listaAutomobili").innerHTML = "";

    //Metti nell'array
    arrayAutomobiliTotali.push(CreaAutomobile(newMarcaUtente,newModelloUtente,newAlimentazioneUtente));

    //Stampa in DOM
    StampaInDomArray(arrayAutomobiliTotali);

    //Clear set
    document.getElementById("inserisciNuovaAuto").reset();

});


