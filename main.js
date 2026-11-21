const klikkausnappi = document.querySelector("#klikkausnappi");
const autoclickernappi_1 = document.querySelector("#autoclickernappi_1");
const autoclickernappi_2 = document.querySelector("#autoclickernappi_2");
const pistelukema = document.querySelector("#pisteet");
const autoclickerlukema = document.querySelector("#autoclickerit");
const paivitys_1_nappi = document.querySelector("#paivitys_1");
const paivitys_2_nappi = document.querySelector("#paivitys_2");
let pisteet = 0;
const paivitykset = [
    {nimi: "paivitys1", tiedot: {hinta: 50, nappi: paivitys_1_nappi, ostettu: false}},
    {nimi: "paivitys2", tiedot: {hinta: 50, nappi: paivitys_2_nappi, ostettu: false}}
];

const autoclickerit = [
    {nimi: "autoclicker1", tiedot: {hinta: 5, nappi: autoclickernappi_1, maara: 0, pistemaara: 1}},
    {nimi: "autoclicker2", tiedot: {hinta: 10, nappi: autoclickernappi_2, maara: 0, pistemaara: 2}}
];




function refresh() {
    pistelukema.textContent = pisteet;
    autoclickerlukema.textContent = autoclickerit[0].tiedot.maara;
    lisaa_autoclickerpisteet();
    tarkasta_nappi(paivitykset);
    tarkasta_nappi(autoclickerit);
}

function lisaa_autoclickerpisteet(){
    for (const autoclicker of autoclickerit)
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
        } else {
            rivi.tiedot.nappi.disabled = true;
        }
    }
}


function lisaa_klikkaus(){
    pisteet++;
    refresh();
}

function osta_autoclicker(nimi){
    let tiedot = hae_tiedot(nimi, autoclickerit);
    
    tiedot.maara += 1;
    pisteet -= tiedot.hinta;
    tiedot.hinta = tiedot.hinta*1.1
    
    refresh();
}

function osta_paivitys(nimi){
    let tiedot = hae_tiedot(nimi, paivitykset);

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

setInterval(() => {
    refresh();
}, 1000);

refresh();