class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    DisplayColors(){
        let Color1Node = document.querySelector("#Color1");
        Color1Node.style.backgroundColor = this.colors[0];
        
        let Color2Node = document.querySelector("#Color2");
        Color2Node.style.backgroundColor = this.colors[1];

        let Color3Node = document.querySelector("#Color3");
        Color3Node.style.backgroundColor = this.colors[2];

        let CountryNameNode = document.querySelector("#CountryName");
        CountryNameNode.textContent = this.name;

        let OfficialLanguageNode = document.querySelector("#OfficialLanguage");
        OfficialLanguageNode.textContent = this.lang;

        let HelloWorldNode = document.querySelector("#HelloWorld");
        HelloWorldNode.textContent = this.greeting;
       
    };
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban bialealam!", ["blue", "yellow", "red"])


function SwitchCountry() {
    selectElement = document.querySelector('#CountryList');
    let input = selectElement.value;
    let country;

    if (input === "USA") {
        country = usa;
        console.log("YAY");
    }
    else if (input === "Mexico") {
        country = mexico;
        console.log("HOLA");
    }
    else if (input === "Algeria") {
        country = algeria;
        console.log("COOL");
    }

    country.DisplayColors();
}