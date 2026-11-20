const klikkausnappi = document.querySelector("#klikkausnappi");
const autoclickernappi = document.querySelector("#autoclickernappi");
const pistelukema = document.querySelector("#pisteet");
const autoclickerlukema = document.querySelector("#autoclickerit");
const paivitys_1_nappi = document.querySelector("#paivitys_1");
const paivitys_2_nappi = document.querySelector("#paivitys_2");
let pisteet = 0;
let autoclickerit = 0;
const paivitykset = [
    {nimi: "paivitys1", hinta: 50, nappi: paivitys_1_nappi, ostettu: false},
    {nimi: "paivitys2", hinta: 50, nappi: paivitys_2_nappi, ostettu: false}
];




function refresh() {
    pistelukema.textContent = pisteet;
    autoclickerlukema.textContent = autoclickerit;
    tarkasta_nappi(paivitykset);
}

function tarkasta_hinta(hinta){
    if (pisteet >= hinta){
        return true;
    } else {
        return false;
    }
}

function tarkasta_nappi(lista){
    for (const rivi of lista){
        if (tarkasta_hinta(rivi.hinta) && !rivi.ostettu){
            rivi.nappi.disabled = false;
        } else {
            rivi.nappi.disabled = true;
        }
    }
}


function lisaa_klikkaus(){
    pisteet++;
    refresh();
}

function osta_autoclicker(){
    autoclickerit+=1;
    refresh();
}

klikkausnappi.addEventListener("click", lisaa_klikkaus);
autoclickernappi.addEventListener("click", osta_autoclicker);

setInterval(() => {
    pisteet += autoclickerit;
    refresh();
}, 1000);

refresh();