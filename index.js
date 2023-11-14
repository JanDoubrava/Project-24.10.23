let razeniNazevVzestupne = document.getElementById("razeniNazevVzestupne"); // ziskani elementu z html podle ID
let razeniNazevSestupne = document.getElementById("razeniNazevSestupne");

let razeniCenaVzestupne = document.getElementById("razeniCenaVzestupne");
let minCena = document.getElementById("minCena");
let razeniCenaSestupne = document.getElementById("razeniCenaSestupne");
let maxCena = document.getElementById("maxCena");

let filtrButton = document.getElementById("filtr");

let sekceProdukty = document.getElementById("seznam-produktu");

document.addEventListener("DOMContentLoaded", function () {
    var products = '[{"produkt":"Cocktail Napkin Blue","cena":527},{"produkt":"Oil - Shortening - All - Purpose","cena":804},{"produkt":"Coconut Milk - Unsweetened","cena":743},{"produkt":"Appetizer - Sausage Rolls","cena":401},{"produkt":"Vinegar - Cider","cena":599},{"produkt":"Sesame Seed","cena":532},{"produkt":"Mushroom - Chanterelle, Dry","cena":494},{"produkt":"Wine - Masi Valpolocell","cena":798},{"produkt":"Goat - Whole Cut","cena":930},{"produkt":"Potatoes - Mini Red","cena":248},{"produkt":"Cheese - Cheddar, Old White","cena":254},{"produkt":"Vaccum Bag 10x13","cena":382},{"produkt":"Mackerel Whole Fresh","cena":482},{"produkt":"Wine - Savigny - Les - Beaune","cena":759},{"produkt":"Sauce - Demi Glace","cena":271},{"produkt":"Sterno - Chafing Dish Fuel","cena":747},{"produkt":"Sloe Gin - Mcguinness","cena":203},{"produkt":"Pastry - Chocolate Marble Tea","cena":220},{"produkt":"Cheese - Havarti, Roasted Garlic","cena":510},{"produkt":"Chocolate Bar - Coffee Crisp","cena":271},{"produkt":"Pepper - Red Bell","cena":681},{"produkt":"Rosemary - Primerba, Paste","cena":723},{"produkt":"Chinese Lemon Pork","cena":358},{"produkt":"Sherry - Dry","cena":122},{"produkt":"Toamtoes 6x7 Select","cena":318}]';
    let objects = JSON.parse(products);
    //1 pokud kosik neexistuje 
    if (localStorage.getItem("kosik") == null) {
         // 2 vytvořím košík
         let kosik = {"polozky" : []}
    localStorage.setItem("kosik",JSON.stringify(kosik));
    }
   
    

    for (let i = 0; i < objects.length; i++) {
        let kontejner = document.createElement("section"); // vytvoreni elementu -> jednotlivé kontejnery
        let Produkt = document.createElement("span");
        let Cena = document.createElement("p");
        let button = document.createElement("button");

        kontejner.style.display = "flex"; // styly
        kontejner.style.flexDirection = "column";
        kontejner.style.justifyContent = "space-evenly";
        kontejner.style.alignItems = "center";
        kontejner.style.margin = "0.39vw";
        kontejner.style.width = "15vw";
        kontejner.style.height = "25vh";
        kontejner.style.background = "";
        kontejner.style.border = "0.39vw solid gold";
        button.innerText = "Koupit";
        // 3 vložím do objektu košíku produkt
        button.addEventListener("click", function(){
            getItem()
        });

        Produkt.innerHTML += objects[i].produkt;
        Cena.innerHTML += objects[i].cena + " Kč";
        
        kontejner.append(Produkt);
        kontejner.append(Cena);
        sekceProdukty.append(kontejner);
    }// for konec
    for (let i = 0; i < objects.length; i++) {
    //filtr ceny
    filtrButton.addEventListener("click", function(){// tlacitko
     let minimalCena = minCena.value;
      let maximalCena = maxCena.value;
     if(objects[i].cena >= minimalCena && objects[i].Cena <= maximalCena ){ // pokud splnuje podmínku tak zustava zobrazen
     }else{
         kontejner.style.display = "none"; //ty co nesplnujou podmínku tak se skryjou
     }
    });
     
// razeni abecedne

razeniNazevVzestupne.addEventListener("click", function () {   
    objects.sort(function (a, b) { //
        let slovo1 = a.Produkt.toLowerCase();  //prevedeni na mala pismena aby byly vsechny stejny
        let slovo2 = b.Produkt.toLowerCase();
        for (let i = 0; i < objects.length; i++) {
            if (slovo1 < slovo2) { // a před b
                return -1;  
            }
            if (slovo1 > slovo2) { // b před a
                return 1; 
            }
            return 0;

        }

    });
    produkt.innerHTML = objects[i].Produkt;
    cena.innerHTML = objects[i].Cena + " Kč";
}); 

// razeni abecedne obracene
razeniNazevSestupne.addEventListener("click", function () {
    objects.sort(function (a, b) {
        let slovo1 = a.Produkt.toLowerCase();  //prevedeni na mala pismena aby byly vsechny stejny
        let slovo2 = b.Produkt.toLowerCase();
        for (let i = 0; i < objects.length; i++) {
            if (slovo1 > slovo2) { // b před a
                return -1; 
            }
            if (slovo1 < slovo2) { // a před b
                return 1;
            }
            return 0;

        }
    });
    produkt.innerHTML = objects[i].Produkt;
    cena.innerHTML = objects[i].Cena + " Kč";


});

// razeni ciselne
razeniCenaVzestupne.addEventListener("click", function () {
    for (let i = 0; i < objects.length; i++) {
        objects.sort(function (a, b) {
            return a.Cena - b.Cena;
        });
        produkt.innerHTML = objects[i].Produkt;
        cena.innerHTML = objects[i].Cena + " Kč";

    }

});

// razeni ciselne obracene
razeniCenaSestupne.addEventListener("click", function () {
    for (let i = 0; i < objects.length; i++) {
        objects.sort(function (a, b) { 
            return b.Cena - a.Cena;
        });
        produkt.innerHTML = objects[i].Produkt;
        cena.innerHTML = objects[i].Cena + " Kč";

    }

}); 




    }
});//konec domContent 