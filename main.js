const klikkausnappi = document.querySelector("#klikkausnappi");
const autoclickernappi = document.querySelector("#autoclickernappi");
const pistelukema = document.querySelector("#pisteet");
const autoclickerlukema = document.querySelector("#autoclickerit");
let pisteet = 0;
let autoclickerit = 0;

function refresh() {
    pistelukema.textContent = pisteet;
    autoclickerlukema.textContent = autoclickerit;
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