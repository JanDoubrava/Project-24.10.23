let razeniNazevVzestupne = document.getElementById("razeniNazevVzestupne"); // ziskani elementu z html podle ID
let razeniNazevSestupne = document.getElementById("razeniNazevSestupne");

let razeniCenaVzestupne = document.getElementById("razeniCenaVzestupne");
let minCena = document.getElementById("minCena");
let razeniCenaSestupne = document.getElementById("razeniCenaSestupne");
let maxCena = document.getElementById("maxCena");

let filtrButton = document.getElementById("filtr");

let sekceProdukty = document.getElementById("seznam-produktu");

document.addEventListener("DOMContentLoaded", function () {
    var products = `[{"id":1,"produkt":"Cookies - Englishbay Wht","cena":451},
    {"id":2,"produkt":"Pastry - Key Limepoppy Seed Tea","cena":373},
    {"id":3,"produkt":"Lobster - Cooked","cena":400},
    {"id":4,"produkt":"Tuna - Bluefin","cena":170},
    {"id":5,"produkt":"Sauce - Thousand Island","cena":169},
    {"id":6,"produkt":"Pork - Loin, Bone - In","cena":378},
    {"id":7,"produkt":"Zucchini - Mini, Green","cena":162},
    {"id":8,"produkt":"Yoghurt Tubes","cena":189},
    {"id":9,"produkt":"Sole - Iqf","cena":156},
    {"id":10,"produkt":"Cocoa Powder - Dutched","cena":272},
    {"id":11,"produkt":"Sprouts - Onion","cena":237},
    {"id":12,"produkt":"Hog / Sausage Casing - Pork","cena":142},
    {"id":13,"produkt":"Pepper - Paprika, Spanish","cena":251},
    {"id":14,"produkt":"Mustard - Seed","cena":417},
    {"id":15,"produkt":"Cheese - Parmesan Cubes","cena":225},
    {"id":16,"produkt":"Juice - Propel Sport","cena":482},
    {"id":17,"produkt":"Dry Ice","cena":221},
    {"id":18,"produkt":"Banana - Leaves","cena":192},
    {"id":19,"produkt":"Galliano","cena":482},
    {"id":20,"produkt":"Vinegar - Balsamic","cena":436},
    {"id":21,"produkt":"Glaze - Apricot","cena":100},
    {"id":22,"produkt":"Soup - Campbells Beef Strogonoff","cena":153},
    {"id":23,"produkt":"Mints - Striped Red","cena":484},
    {"id":24,"produkt":"Wine - Pinot Noir Latour","cena":210},
    {"id":25,"produkt":"Juice - Ocean Spray Kiwi","cena":175},
    {"id":26,"produkt":"Wine - Marlbourough Sauv Blanc","cena":188},
    {"id":27,"produkt":"Glucose","cena":286},
    {"id":28,"produkt":"Shrimp - 16/20, Iqf, Shell On","cena":410},
    {"id":29,"produkt":"Yeast Dry - Fermipan","cena":395},
    {"id":30,"produkt":"Wine - Trimbach Pinot Blanc","cena":321},
    {"id":31,"produkt":"Chicken - Bones","cena":236},
    {"id":32,"produkt":"Cookie Dough - Peanut Butter","cena":113},
    {"id":33,"produkt":"Veal - Inside","cena":258},
    {"id":34,"produkt":"Sugar - Splenda Sweetener","cena":397},
    {"id":35,"produkt":"Tomato Paste","cena":411},
    {"id":36,"produkt":"Energy Drink - Franks Pineapple","cena":371},
    {"id":37,"produkt":"Doilies - 8, Paper","cena":178},
    {"id":38,"produkt":"Pepper - Green, Chili","cena":151},
    {"id":39,"produkt":"Cheese - Cheddar, Old White","cena":116},
    {"id":40,"produkt":"Grenadillo","cena":191},
    {"id":41,"produkt":"Pepper - Julienne, Frozen","cena":454},
    {"id":42,"produkt":"Goulash Seasoning","cena":405},
    {"id":43,"produkt":"Cheese - Augre Des Champs","cena":318},
    {"id":44,"produkt":"Wine - Red, Mosaic Zweigelt","cena":155},
    {"id":45,"produkt":"Veal - Kidney","cena":479},
    {"id":46,"produkt":"Bread - Crusty Italian Poly","cena":142},
    {"id":47,"produkt":"Sauce - Hp","cena":476},
    {"id":48,"produkt":"Bread - Rye","cena":287},
    {"id":49,"produkt":"Oven Mitt - 13 Inch","cena":128},
    {"id":50,"produkt":"Sweet Pea Sprouts","cena":383},
    {"id":51,"produkt":"Juice - Orange, Concentrate","cena":125},
    {"id":52,"produkt":"Soup - French Onion, Dry","cena":478},
    {"id":53,"produkt":"Shrimp - Black Tiger 16/20","cena":264},
    {"id":54,"produkt":"Soup - Knorr, Veg / Beef","cena":228},
    {"id":55,"produkt":"Tart Shells - Barquettes, Savory","cena":411},
    {"id":56,"produkt":"Hersey Shakes","cena":442},
    {"id":57,"produkt":"Bowl 12 Oz - Showcase 92012","cena":272},
    {"id":58,"produkt":"Table Cloth 54x72 White","cena":379},
    {"id":59,"produkt":"Lotus Rootlets - Canned","cena":428},
    {"id":60,"produkt":"Island Oasis - Strawberry","cena":317},
    {"id":61,"produkt":"Turkey Tenderloin Frozen","cena":128},
    {"id":62,"produkt":"Doilies - 10, Paper","cena":364},
    {"id":63,"produkt":"Artichokes - Knobless, White","cena":207},
    {"id":64,"produkt":"Triple Sec - Mcguinness","cena":133},
    {"id":65,"produkt":"Pumpkin","cena":313},
    {"id":66,"produkt":"Dragon Fruit","cena":225},
    {"id":67,"produkt":"Rabbit - Saddles","cena":386},
    {"id":68,"produkt":"Soup - French Onion, Dry","cena":226},
    {"id":69,"produkt":"Lid Coffeecup 12oz D9542b","cena":105},
    {"id":70,"produkt":"Corn Shoots","cena":121},
    {"id":71,"produkt":"Beer - Upper Canada Lager","cena":221},
    {"id":72,"produkt":"Versatainer Nc - 9388","cena":205},
    {"id":73,"produkt":"Napkin - Beverge, White 2 - Ply","cena":421},
    {"id":74,"produkt":"Pasta - Cappellini, Dry","cena":193},
    {"id":75,"produkt":"Stock - Chicken, White","cena":279},
    {"id":76,"produkt":"Cream - 10%","cena":295},
    {"id":77,"produkt":"Sea Bass - Fillets","cena":485},
    {"id":78,"produkt":"Table Cloth 53x53 White","cena":491},
    {"id":79,"produkt":"Wine - Magnotta - Red, Baco","cena":498},
    {"id":80,"produkt":"Chinese Foods - Plain Fried Rice","cena":221},
    {"id":81,"produkt":"Appetizer - Assorted Box","cena":419},
    {"id":82,"produkt":"Scallops - 20/30","cena":294},
    {"id":83,"produkt":"Coffee - Cafe Moreno","cena":473},
    {"id":84,"produkt":"Kippers - Smoked","cena":440},
    {"id":85,"produkt":"Nut - Almond, Blanched, Sliced","cena":449},
    {"id":86,"produkt":"Dried Cranberries","cena":347},
    {"id":87,"produkt":"Water - Green Tea Refresher","cena":169},
    {"id":88,"produkt":"Yams","cena":427},
    {"id":89,"produkt":"Soup - Cream Of Broccoli, Dry","cena":419},
    {"id":90,"produkt":"Sauce - White, Mix","cena":455},
    {"id":91,"produkt":"Spinach - Spinach Leaf","cena":141},
    {"id":92,"produkt":"Beer - Fruli","cena":216},
    {"id":93,"produkt":"Fish - Base, Bouillion","cena":441},
    {"id":94,"produkt":"Tortillas - Flour, 12","cena":174},
    {"id":95,"produkt":"Longos - Lasagna Veg","cena":392},
    {"id":96,"produkt":"Tuna - Sushi Grade","cena":217},
    {"id":97,"produkt":"Wine - Saint - Bris 2002, Sauv","cena":262},
    {"id":98,"produkt":"Table Cloth 54x72 White","cena":448},
    {"id":99,"produkt":"Longos - Lasagna Veg","cena":367},
    {"id":100,"produkt":"Soup - Campbells - Chicken Noodle","cena":406},
    {"id":101,"produkt":"Soup - Campbells Asian Noodle","cena":461},
    {"id":102,"produkt":"Yogurt - Plain","cena":182},
    {"id":103,"produkt":"Pastry - Plain Baked Croissant","cena":446},
    {"id":104,"produkt":"Cream - 35%","cena":435},
    {"id":105,"produkt":"Island Oasis - Sweet And Sour Mix","cena":237},
    {"id":106,"produkt":"Swordfish Loin Portions","cena":436},
    {"id":107,"produkt":"Tumeric","cena":498},
    {"id":108,"produkt":"Rootbeer","cena":500},
    {"id":109,"produkt":"Chambord Royal","cena":314},
    {"id":110,"produkt":"V8 - Vegetable Cocktail","cena":416},
    {"id":111,"produkt":"Veal - Slab Bacon","cena":247},
    {"id":112,"produkt":"Pheasants - Whole","cena":304},
    {"id":113,"produkt":"Relish","cena":193},
    {"id":114,"produkt":"Pork - Belly Fresh","cena":183},
    {"id":115,"produkt":"Appetizer - Assorted Box","cena":188},
    {"id":116,"produkt":"Longos - Chicken Cordon Bleu","cena":250},
    {"id":117,"produkt":"Lotus Leaves","cena":390},
    {"id":118,"produkt":"Nut - Walnut, Chopped","cena":173},
    {"id":119,"produkt":"Appetizer - Assorted Box","cena":130},
    {"id":120,"produkt":"Wine - Red, Harrow Estates, Cab","cena":193},
    {"id":121,"produkt":"Energy Drink Red Bull","cena":107},
    {"id":122,"produkt":"Mix - Cappucino Cocktail","cena":185},
    {"id":123,"produkt":"Milk - Chocolate 500ml","cena":213},
    {"id":124,"produkt":"Wine - Ruffino Chianti Classico","cena":269},
    {"id":125,"produkt":"Lettuce - Red Leaf","cena":142},
    {"id":126,"produkt":"Muffin - Mix - Bran And Maple 15l","cena":148},
    {"id":127,"produkt":"Sobe - Orange Carrot","cena":332},
    {"id":128,"produkt":"Beer - Creemore","cena":289},
    {"id":129,"produkt":"Island Oasis - Mango Daiquiri","cena":251},
    {"id":130,"produkt":"Grapes - Red","cena":395},
    {"id":131,"produkt":"Muffin Carrot - Individual","cena":109},
    {"id":132,"produkt":"Godiva White Chocolate","cena":278},
    {"id":133,"produkt":"Tomatoes - Vine Ripe, Red","cena":344},
    {"id":134,"produkt":"Dawn Professionl Pot And Pan","cena":259},
    {"id":135,"produkt":"Heavy Duty Dust Pan","cena":481},
    {"id":136,"produkt":"Soup - Beef Conomme, Dry","cena":192},
    {"id":137,"produkt":"Island Oasis - Sweet And Sour Mix","cena":427},
    {"id":138,"produkt":"Muffin - Bran Ind Wrpd","cena":455},
    {"id":139,"produkt":"Praline Paste","cena":118},
    {"id":140,"produkt":"Pomegranates","cena":267},
    {"id":141,"produkt":"Ostrich - Fan Fillet","cena":422},
    {"id":142,"produkt":"Pasta - Penne, Lisce, Dry","cena":467},
    {"id":143,"produkt":"Bread - Rolls, Rye","cena":309},
    {"id":144,"produkt":"Rice - Jasmine Sented","cena":327},
    {"id":145,"produkt":"Beer - Fruli","cena":370},
    {"id":146,"produkt":"Miso - Soy Bean Paste","cena":263},
    {"id":147,"produkt":"Pear - Packum","cena":206},
    {"id":148,"produkt":"Plums - Red","cena":361},
    {"id":149,"produkt":"Muffin Mix - Morning Glory","cena":292},
    {"id":150,"produkt":"Salt And Pepper Mix - White","cena":151},
    {"id":151,"produkt":"Beef - Ox Tongue","cena":381},
    {"id":152,"produkt":"Blackberries","cena":266},
    {"id":153,"produkt":"Pastry - French Mini Assorted","cena":455},
    {"id":154,"produkt":"Trout - Rainbow, Frozen","cena":448},
    {"id":155,"produkt":"Arizona - Green Tea","cena":439},
    {"id":156,"produkt":"Lettuce - Red Leaf","cena":189},
    {"id":157,"produkt":"Cheese - Grana Padano","cena":485},
    {"id":158,"produkt":"Rum - Coconut, Malibu","cena":228},
    {"id":159,"produkt":"Corn Meal","cena":236},
    {"id":160,"produkt":"General Purpose Trigger","cena":439},
    {"id":161,"produkt":"Sambuca - Ramazzotti","cena":134},
    {"id":162,"produkt":"Pasta - Cannelloni, Sheets, Fresh","cena":300},
    {"id":163,"produkt":"Goulash Seasoning","cena":277},
    {"id":164,"produkt":"Iced Tea Concentrate","cena":266},
    {"id":165,"produkt":"Wine - Domaine Boyar Royal","cena":382},
    {"id":166,"produkt":"Wine - Dubouef Macon - Villages","cena":248},
    {"id":167,"produkt":"Beer - Sleemans Honey Brown","cena":272},
    {"id":168,"produkt":"Coke - Classic, 355 Ml","cena":330},
    {"id":169,"produkt":"Arrowroot","cena":400},
    {"id":170,"produkt":"Cake Circle, Foil, Scallop","cena":492},
    {"id":171,"produkt":"Sauce - Rosee","cena":166},
    {"id":172,"produkt":"Lentils - Red, Dry","cena":312},
    {"id":173,"produkt":"Lettuce - Boston Bib - Organic","cena":405},
    {"id":174,"produkt":"Fruit Mix - Light","cena":291},
    {"id":175,"produkt":"Oil - Cooking Spray","cena":317},
    {"id":176,"produkt":"Cranberries - Frozen","cena":244},
    {"id":177,"produkt":"Beef Striploin Aaa","cena":343},
    {"id":178,"produkt":"Okra","cena":149},
    {"id":179,"produkt":"Swiss Chard - Red","cena":363},
    {"id":180,"produkt":"Muffin - Bran Ind Wrpd","cena":322},
    {"id":181,"produkt":"Chick Peas - Canned","cena":387},
    {"id":182,"produkt":"Soup Campbells - Tomato Bisque","cena":410},
    {"id":183,"produkt":"Muffin Hinge Container 6","cena":243},
    {"id":184,"produkt":"Jolt Cola - Red Eye","cena":339},
    {"id":185,"produkt":"Icecream Bar - Del Monte","cena":186},
    {"id":186,"produkt":"Broom - Corn","cena":197},
    {"id":187,"produkt":"Cheese - Oka","cena":394},
    {"id":188,"produkt":"Grapes - Green","cena":372},
    {"id":189,"produkt":"Glass - Wine, Plastic, Clear 5 Oz","cena":306},
    {"id":190,"produkt":"Pomello","cena":299},
    {"id":191,"produkt":"Sardines","cena":413},
    {"id":192,"produkt":"Pastry - Butterscotch Baked","cena":453},
    {"id":193,"produkt":"Veal - Slab Bacon","cena":347},
    {"id":194,"produkt":"Pernod","cena":403},
    {"id":195,"produkt":"Blackberries","cena":454},
    {"id":196,"produkt":"Lamb - Leg, Diced","cena":426},
    {"id":197,"produkt":"Wine - Casillero Del Diablo","cena":464},
    {"id":198,"produkt":"Yogurt - Cherry, 175 Gr","cena":316},
    {"id":199,"produkt":"Buffalo - Striploin","cena":343},
    {"id":200,"produkt":"Cream - 18%","cena":374},
    {"id":201,"produkt":"Beer - Mcauslan Apricot","cena":379},
    {"id":202,"produkt":"Carbonated Water - Blackberry","cena":230},
    {"id":203,"produkt":"Mikes Hard Lemonade","cena":188},
    {"id":204,"produkt":"Drambuie","cena":237},
    {"id":205,"produkt":"Cleaner - Lime Away","cena":226},
    {"id":206,"produkt":"Chocolate Bar - Coffee Crisp","cena":429},
    {"id":207,"produkt":"Napkin - Dinner, White","cena":290},
    {"id":208,"produkt":"Beans - Fava, Canned","cena":471},
    {"id":209,"produkt":"Lychee","cena":167},
    {"id":210,"produkt":"Noodles - Steamed Chow Mein","cena":316},
    {"id":211,"produkt":"Squid - U 5","cena":179},
    {"id":212,"produkt":"Juice - Lemon","cena":101},
    {"id":213,"produkt":"Green Scrubbie Pad H.duty","cena":143},
    {"id":214,"produkt":"Sambuca - Ramazzotti","cena":234},
    {"id":215,"produkt":"Wine - Magnotta - Red, Baco","cena":303},
    {"id":216,"produkt":"Soup - French Onion, Dry","cena":432},
    {"id":217,"produkt":"Tuna - Sushi Grade","cena":108},
    {"id":218,"produkt":"Macaroons - Two Bite Choc","cena":297},
    {"id":219,"produkt":"Squash - Acorn","cena":254},
    {"id":220,"produkt":"Magnotta - Bel Paese White","cena":445},
    {"id":221,"produkt":"Port - 74 Brights","cena":270},
    {"id":222,"produkt":"Cheese - La Sauvagine","cena":356},
    {"id":223,"produkt":"Mushroom - King Eryingii","cena":263},
    {"id":224,"produkt":"Tomatoes - Cherry","cena":116},
    {"id":225,"produkt":"Juice - Happy Planet","cena":223},
    {"id":226,"produkt":"Wine - Red, Mouton Cadet","cena":196},
    {"id":227,"produkt":"Kolrabi","cena":477},
    {"id":228,"produkt":"Mustard - Pommery","cena":278},
    {"id":229,"produkt":"Puree - Raspberry","cena":193},
    {"id":230,"produkt":"Breadfruit","cena":248},
    {"id":231,"produkt":"Potatoes - Instant, Mashed","cena":447},
    {"id":232,"produkt":"Sugar - Invert","cena":106},
    {"id":233,"produkt":"Cheese - Cambozola","cena":107},
    {"id":234,"produkt":"Petit Baguette","cena":185},
    {"id":235,"produkt":"Island Oasis - Mango Daiquiri","cena":386},
    {"id":236,"produkt":"Muffin Mix - Raisin Bran","cena":177},
    {"id":237,"produkt":"Pepperoni Slices","cena":291},
    {"id":238,"produkt":"Irish Cream - Butterscotch","cena":153},
    {"id":239,"produkt":"Beans - Fava, Canned","cena":471},
    {"id":240,"produkt":"Steel Wool","cena":447},
    {"id":241,"produkt":"Octopus - Baby, Cleaned","cena":286},
    {"id":242,"produkt":"Cinnamon Rolls","cena":194},
    {"id":243,"produkt":"Cheese Cloth No 60","cena":447},
    {"id":244,"produkt":"Napkin - Dinner, White","cena":344},
    {"id":245,"produkt":"Chutney Sauce","cena":472},
    {"id":246,"produkt":"Orange - Tangerine","cena":496},
    {"id":247,"produkt":"Pasta - Canelloni, Single Serve","cena":221},
    {"id":248,"produkt":"Crackers - Graham","cena":209},
    {"id":249,"produkt":"Bananas","cena":163},
    {"id":250,"produkt":"Pork - Back, Long Cut, Boneless","cena":113}]`;
    
    let objects = JSON.parse(products);
    console.log(objects);
    //1 pokud kosik neexistuje 
    if (localStorage.getItem("kosik") == null) {
         // 2 vytvořím košík
         let kosik = {"polozky" : []}
    localStorage.setItem("kosik",JSON.stringify(kosik));
    }
   
    

    for (let i = 0; i < objects.length; i++) {
        let kontejner = document.createElement("article"); // vytvoreni elementu -> jednotlivé kontejnery
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
            alert("Kupuji");
        });

        Produkt.innerHTML += objects[i].produkt;
        Cena.innerHTML += objects[i].cena + " Kč";
        
        kontejner.append(Produkt);
        kontejner.append(Cena);
        kontejner.append(button);
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