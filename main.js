const klikkausnappi = document.querySelector("#klikkausnappi");
const pistelukema = document.querySelector("#pisteet");
const autoclickerlukema = document.querySelector("#autoclickermaara");
const autoclicker_kauppa_nappi = document.querySelector(".autoclicker");
const paivitys_kauppa_nappi = document.querySelector(".paivitys");
const autoclickernapit = document.querySelectorAll(".autoclickerit");
const paivitysnapit = document.querySelectorAll(".paivitykset");
const avoimet_paivitykset_maara = document.querySelector("#avoimet_paivitykset");
const kokonaispistemaara = document.querySelector("#kokonaispisteet");
const klikkausmaara = document.querySelector("#klikkausmaara");
const pistenopeus = document.querySelector("#pistenopeus");

const alue1 = document.querySelector(".grafiikka_1");
const alue2 = document.querySelector(".grafiikka_2");
const alue3 = document.querySelector(".grafiikka_3");
const alue4 = document.querySelector(".grafiikka_4");

const autoclickernappi_1 = document.querySelector(".autoclickernappi_1");
const autoclickernappi_2 = document.querySelector(".autoclickernappi_2");
const autoclickernappi_3 = document.querySelector(".autoclickernappi_3");
const autoclickernappi_4 = document.querySelector(".autoclickernappi_4");

const paivitys_1_nappi = document.querySelector(".paivitys_1");
const paivitys_2_nappi = document.querySelector(".paivitys_2");
const autoclicker1_paivitys_1_nappi = document.querySelector(".autoclicker1_paivitys_1");
const autoclicker1_paivitys_2_nappi = document.querySelector(".autoclicker1_paivitys_2");
const autoclicker2_paivitys_1_nappi = document.querySelector(".autoclicker2_paivitys_1");
const autoclicker2_paivitys_2_nappi = document.querySelector(".autoclicker2_paivitys_2");
const autoclicker3_paivitys_1_nappi = document.querySelector(".autoclicker3_paivitys_1");
const autoclicker3_paivitys_2_nappi = document.querySelector(".autoclicker3_paivitys_2");
const autoclicker4_paivitys_1_nappi = document.querySelector(".autoclicker4_paivitys_1");
const autoclicker4_paivitys_2_nappi = document.querySelector(".autoclicker4_paivitys_2");

const hinta_autoclicker_1 = document.querySelector("#hinta_autoclicker_1");
const hinta_autoclicker_2 = document.querySelector("#hinta_autoclicker_2");
const hinta_autoclicker_3 = document.querySelector("#hinta_autoclicker_3");
const hinta_autoclicker_4 = document.querySelector("#hinta_autoclicker_4");

const maara_autoclicker_1 = document.querySelector("#maara_autoclicker_1");
const maara_autoclicker_2 = document.querySelector("#maara_autoclicker_2");
const maara_autoclicker_3 = document.querySelector("#maara_autoclicker_3");
const maara_autoclicker_4 = document.querySelector("#maara_autoclicker_4");

const paivityskauppa = document.querySelector("#paivityskauppa");
const autoclickerkauppa = document.querySelector("#autoclickerkauppa");

let kokonaisklikkaukset = 0;
let klikkauskerroin = 1;
let pisteet = 0;
let avoimet_paivitykset = 0;
let kokonaispisteet = 0;
const paivitykset_lista = [
    {nimi: "paivitys1", tiedot: {hinta: 50, nappi: paivitys_1_nappi, ostettu: false, avattu: false}},
    {nimi: "paivitys2", tiedot: {hinta: 50, nappi: paivitys_2_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker1_paivitys1", tiedot: {hinta: 50, nappi: autoclicker1_paivitys_1_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker1_paivitys2", tiedot: {hinta: 50, nappi: autoclicker1_paivitys_2_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker2_paivitys1", tiedot: {hinta: 50, nappi: autoclicker2_paivitys_1_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker2_paivitys2", tiedot: {hinta: 50, nappi: autoclicker2_paivitys_2_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker3_paivitys1", tiedot: {hinta: 50, nappi: autoclicker3_paivitys_1_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker3_paivitys2", tiedot: {hinta: 50, nappi: autoclicker3_paivitys_2_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker4_paivitys1", tiedot: {hinta: 50, nappi: autoclicker4_paivitys_1_nappi, ostettu: false, avattu: false}},
    {nimi: "autoclicker4_paivitys2", tiedot: {hinta: 50, nappi: autoclicker4_paivitys_2_nappi, ostettu: false, avattu: false}}
];

const autoclickerit_lista = [
    {nimi: "autoclicker1", tiedot: {hinta: 5, nappi: autoclickernappi_1, maara: 0, pistemaara: 1}},
    {nimi: "autoclicker2", tiedot: {hinta: 10, nappi: autoclickernappi_2, maara: 0, pistemaara: 2}},
    {nimi: "autoclicker3", tiedot: {hinta: 50, nappi: autoclickernappi_3, maara: 0, pistemaara: 3}},
    {nimi: "autoclicker4", tiedot: {hinta: 100, nappi: autoclickernappi_4, maara: 0, pistemaara: 4}}
];


function refresh() {
    maara_autoclicker_1.textContent = autoclickerit_lista[0].tiedot.maara;
    maara_autoclicker_2.textContent = autoclickerit_lista[1].tiedot.maara;
    maara_autoclicker_3.textContent = autoclickerit_lista[2].tiedot.maara;
    maara_autoclicker_4.textContent = autoclickerit_lista[3].tiedot.maara;

    hinta_autoclicker_1.textContent = autoclickerit_lista[0].tiedot.hinta;
    hinta_autoclicker_2.textContent = autoclickerit_lista[1].tiedot.hinta;
    hinta_autoclicker_3.textContent = autoclickerit_lista[2].tiedot.hinta;
    hinta_autoclicker_4.textContent = autoclickerit_lista[3].tiedot.hinta;

    tarkasta_nappi(paivitykset_lista);
    tarkasta_nappi(autoclickerit_lista);
    avaa_paivitykset();
    avaa_autoclickerit();
    pistelukema.textContent = pisteet;
    klikkausmaara.textContent = kokonaisklikkaukset;
    avoimet_paivitykset_maara.textContent = avoimet_paivitykset;
    kokonaispistemaara.textContent = kokonaispisteet;
}



function lisaa_autoclickerpisteet(){
    let lisattavat_pisteet = 0
    for (const autoclicker of autoclickerit_lista){
        lisattavat_pisteet += autoclicker.tiedot.maara*autoclicker.tiedot.pistemaara;
    }
    pistenopeus.textContent = lisattavat_pisteet;
    pisteet += lisattavat_pisteet;
    kokonaispisteet += lisattavat_pisteet;
        
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

function avaa_autoclickerit(){
    if (kokonaispisteet >= 100){
        autoclickernappi_2.classList.add("show");
    }
    if (kokonaispisteet >= 300){
        autoclickernappi_3.classList.add("show");
    }
    if (kokonaispisteet >= 600){
        autoclickernappi_4.classList.add("show");
    }
}

function avaa_paivitykset(){
    if (kokonaisklikkaukset === 10){
        if (paivitykset_lista[0].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            paivitys_1_nappi.classList.add("show");
        }
        paivitykset_lista[0].tiedot.avattu = true;
    }
    if (kokonaisklikkaukset === 50){
        if (paivitykset_lista[1].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            paivitys_2_nappi.classList.add("show");
        }
        paivitykset_lista[1].tiedot.avattu = true;
    }
    if (autoclickerit_lista[0].tiedot.maara === 10){
        if (paivitykset_lista[2].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker1_paivitys_1_nappi.classList.add("show");
        }
        paivitykset_lista[2].tiedot.avattu = true;
    }
    if (autoclickerit_lista[0].tiedot.maara === 20){
        if (paivitykset_lista[3].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker1_paivitys_2_nappi.classList.add("show");
        }
        paivitykset_lista[3].tiedot.avattu = true;  
    }
    if (autoclickerit_lista[1].tiedot.maara === 10){
        if (paivitykset_lista[4].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker2_paivitys_1_nappi.classList.add("show");
        }
        paivitykset_lista[4].tiedot.avattu = true;  
    }
    if (autoclickerit_lista[1].tiedot.maara === 20){
        if (paivitykset_lista[5].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker2_paivitys_2_nappi.classList.add("show");
        }
        paivitykset_lista[5].tiedot.avattu = true;  
    }
    if (autoclickerit_lista[2].tiedot.maara === 10){
        if (paivitykset_lista[6].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker3_paivitys_1_nappi.classList.add("show");
        }
        paivitykset_lista[6].tiedot.avattu = true;  
    }
    if (autoclickerit_lista[2].tiedot.maara === 20){
        if (paivitykset_lista[7].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker3_paivitys_2_nappi.classList.add("show");
        }
        paivitykset_lista[7].tiedot.avattu = true;  
    }
    if (autoclickerit_lista[3].tiedot.maara === 10){
        if (paivitykset_lista[8].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker4_paivitys_1_nappi.classList.add("show");
        }
        paivitykset_lista[8].tiedot.avattu = true;  
    }
    if (autoclickerit_lista[3].tiedot.maara === 20){
        if (paivitykset_lista[9].tiedot.avattu === false){
            avoimet_paivitykset += 1;
            autoclicker4_paivitys_2_nappi.classList.add("show");
        }
        paivitykset_lista[9].tiedot.avattu = true;  
    }
}

function lisaa_klikkaus(){
    pisteet += klikkauskerroin;
    kokonaispisteet += klikkauskerroin;
    kokonaisklikkaukset++;

    refresh();
}

function osta_autoclicker(nimi){
    let tiedot = hae_tiedot(nimi, autoclickerit_lista);
    
    tiedot.maara += 1;
    pisteet -= tiedot.hinta;
    tiedot.hinta = Math.round(tiedot.hinta*1.3);
    
    refresh();
}

function osta_paivitys(nimi){
    let tiedot = hae_tiedot(nimi, paivitykset_lista);

    tiedot.ostettu = true;
    pisteet -= tiedot.hinta;
    avoimet_paivitykset -= 1;
            
    refresh();
}

function lisaa_paivitys_1_ja_2(){
    klikkauskerroin = klikkauskerroin*2;
}


function lisaa_autoclicker1_paivitys_1_ja_2(){
    autoclickerit_lista[0].tiedot.pistemaara = autoclickerit_lista[0].tiedot.pistemaara*2
}

function lisaa_autoclicker2_paivitys_1_ja_2(){
    autoclickerit_lista[1].tiedot.pistemaara = autoclickerit_lista[1].tiedot.pistemaara*2
}

function lisaa_autoclicker3_paivitys_1_ja_2(){
    autoclickerit_lista[2].tiedot.pistemaara = autoclickerit_lista[2].tiedot.pistemaara*2
}

function lisaa_autoclicker4_paivitys_1_ja_2(){
    autoclickerit_lista[3].tiedot.pistemaara = autoclickerit_lista[3].tiedot.pistemaara*2
}

function lisaa_grafiikka(grafiikka, alue){
    const symboli = document.createElement("span");
    symboli.textContent = grafiikka;
    alue.appendChild(symboli);

}


klikkausnappi.addEventListener("click", lisaa_klikkaus);
autoclickernappi_1.addEventListener("click", () =>{
    osta_autoclicker("autoclicker1");
    lisaa_grafiikka("test ", alue1);
});
autoclickernappi_2.addEventListener("click", () =>{
    osta_autoclicker("autoclicker2");
});
autoclickernappi_3.addEventListener("click", () =>{
    osta_autoclicker("autoclicker3");
});
autoclickernappi_4.addEventListener("click", () =>{
    osta_autoclicker("autoclicker4");
});
autoclicker_kauppa_nappi.addEventListener("click", () =>{
    autoclickerkauppa.classList.remove("show");
    paivityskauppa.classList.remove("show"); 
    
});
paivitys_kauppa_nappi.addEventListener("click", () =>{
    autoclickerkauppa.classList.add("show");
    paivityskauppa.classList.add("show");
});
paivitys_1_nappi.addEventListener("click", () =>{
    paivitys_1_nappi.classList.remove("show");
    osta_paivitys("paivitys1");
    lisaa_paivitys_1_ja_2();
});
paivitys_2_nappi.addEventListener("click", () =>{
    paivitys_2_nappi.classList.remove("show");
    osta_paivitys("paivitys2");
    lisaa_paivitys_1_ja_2();
});
autoclicker1_paivitys_1_nappi.addEventListener("click", () =>{
    autoclicker1_paivitys_1_nappi.classList.remove("show");
    osta_paivitys("autoclicker1_paivitys1");
    lisaa_autoclicker1_paivitys_1_ja_2();
});
autoclicker1_paivitys_2_nappi.addEventListener("click", () =>{
    autoclicker1_paivitys_2_nappi.classList.remove("show");
    osta_paivitys("autoclicker1_paivitys2");
    lisaa_autoclicker1_paivitys_1_ja_2();
});
autoclicker2_paivitys_1_nappi.addEventListener("click", () =>{
    autoclicker2_paivitys_1_nappi.classList.remove("show");
    osta_paivitys("autoclicker2_paivitys1");
    lisaa_autoclicker2_paivitys_1_ja_2();
});
autoclicker2_paivitys_2_nappi.addEventListener("click", () =>{
    autoclicker2_paivitys_2_nappi.classList.remove("show");
    osta_paivitys("autoclicker2_paivitys2");
    lisaa_autoclicker2_paivitys_1_ja_2();
});
autoclicker3_paivitys_1_nappi.addEventListener("click", () =>{
    autoclicker3_paivitys_1_nappi.classList.remove("show");
    osta_paivitys("autoclicker3_paivitys1");
    lisaa_autoclicker3_paivitys_1_ja_2();
});
autoclicker3_paivitys_2_nappi.addEventListener("click", () =>{
    autoclicker3_paivitys_2_nappi.classList.remove("show");
    osta_paivitys("autoclicker3_paivitys2");
    lisaa_autoclicker3_paivitys_1_ja_2();
});
autoclicker4_paivitys_1_nappi.addEventListener("click", () =>{
    autoclicker4_paivitys_1_nappi.classList.remove("show");
    osta_paivitys("autoclicker4_paivitys1");
    lisaa_autoclicker4_paivitys_1_ja_2();
});
autoclicker4_paivitys_2_nappi.addEventListener("click", () =>{
    autoclicker4_paivitys_2_nappi.classList.remove("show");
    osta_paivitys("autoclicker2_paivitys2");
    lisaa_autoclicker4_paivitys_1_ja_2();
});



setInterval(() => {
    lisaa_autoclickerpisteet();
    refresh();
}, 1000);

refresh();