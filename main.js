const klikkausnappi = document.querySelector("#klikkausnappi");
const autoclickernappi_1 = document.querySelector(".autoclickernappi_1");
const autoclickernappi_2 = document.querySelector(".autoclickernappi_2");
const pistelukema = document.querySelector("#pisteet");
const autoclickerlukema = document.querySelector("#autoclickermaara");
const paivitys_1_nappi = document.querySelector(".paivitys_1");
const paivitys_2_nappi = document.querySelector(".paivitys_2");
const autoclicker_kauppa = document.querySelector(".autoclicker");
const paivitys_kauppa = document.querySelector(".paivitys");
const autoclickernapit = document.querySelectorAll(".autoclickerit")
const paivitysnapit = document.querySelectorAll(".paivitykset")
const hinta_autoclicker_1 = document.querySelector("#hinta_autoclicker_1")
const hinta_autoclicker_2 = document.querySelector("#hinta_autoclicker_2")


let pisteet = 0;
const paivitykset_lista = [
    {nimi: "paivitys1", tiedot: {hinta: 50, nappi: paivitys_1_nappi, ostettu: false}},
    {nimi: "paivitys2", tiedot: {hinta: 50, nappi: paivitys_2_nappi, ostettu: false}}
];

const autoclickerit_lista = [
    {nimi: "autoclicker1", tiedot: {hinta: 5, nappi: autoclickernappi_1, maara: 0, pistemaara: 1}},
    {nimi: "autoclicker2", tiedot: {hinta: 10, nappi: autoclickernappi_2, maara: 0, pistemaara: 2}}
];




function refresh() {
    autoclickerlukema.textContent = autoclickerit_lista[0].tiedot.maara;
    hinta_autoclicker_1.textContent = autoclickerit_lista[0].tiedot.hinta;
    hinta_autoclicker_2.textContent = autoclickerit_lista[1].tiedot.hinta;
    lisaa_autoclickerpisteet();
    tarkasta_nappi(paivitykset_lista);
    tarkasta_nappi(autoclickerit_lista);
    pistelukema.textContent = pisteet;
}

function lisaa_autoclickerpisteet(){
    for (const autoclicker of autoclickerit_lista)
        pisteet += autoclicker.tiedot.maara*autoclicker.tiedot.pistemaara;
}

function tarkasta_hinta(hinta){
    if (pisteet >= hinta){
        return true;
    } else {
        return false;
    }
}

function hae_tiedot(nimi, array){
    for (const rivi of array){
        if (rivi.nimi === nimi){
            return rivi.tiedot;
        }
    }
}

function tarkasta_nappi(array){
    for (const rivi of array){
        if (tarkasta_hinta(rivi.tiedot.hinta) && !rivi.tiedot.ostettu){
            rivi.tiedot.nappi.disabled = false;
            rivi.tiedot.nappi.classList.remove("disable")
        } else {
            rivi.tiedot.nappi.disabled = true;
            rivi.tiedot.nappi.classList.add("disable")
        }
    }
}


function lisaa_klikkaus(){
    pisteet++;
    refresh();
}

function osta_autoclicker(nimi){
    let tiedot = hae_tiedot(nimi, autoclickerit_lista);
    
    tiedot.maara += 1;
    pisteet -= tiedot.hinta;
    tiedot.hinta = tiedot.hinta*1.1
    
    refresh();
}

function osta_paivitys(nimi){
    let tiedot = hae_tiedot(nimi, paivitykset_lista);

    tiedot.ostettu = true;
    pisteet -= tiedot.hinta;
            
    refresh();
}

klikkausnappi.addEventListener("click", lisaa_klikkaus);
autoclickernappi_1.addEventListener("click", () =>{
    osta_autoclicker("autoclicker1");
});
autoclickernappi_2.addEventListener("click", () =>{
    osta_autoclicker("autoclicker2");
});
autoclicker_kauppa.addEventListener("click", () =>{
    for (const napit of autoclickernapit){
        napit.classList.remove("show");
    } 
    for (const napit of paivitysnapit){
        napit.classList.remove("show");
    } 
    
});
paivitys_kauppa.addEventListener("click", () =>{
    for (const napit of autoclickernapit){
        napit.classList.add("show");
    } 
    for (const napit of paivitysnapit){
        napit.classList.add("show");
    } 
});

setInterval(() => {
    refresh();
}, 1000);

refresh();