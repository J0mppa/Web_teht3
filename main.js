console.log("Sivu ladattu");
const nappi = document.querySelector("#nappi");
const klikkaukset = document.querySelector("#klikkaukset");
let klikit = 0;

function refresh() {
 klikkaukset.textContent = klikit;
}

function lisaa_klikki(){
    klikit++;
    refresh();
}

nappi.addEventListener("click", lisaa_klikki)

refresh();