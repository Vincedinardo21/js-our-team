// Variabili
let myContainer = document.querySelector(".team-container");
let content = document.createElement("h3");


const card = {
    "immagine": [],
    "nome": ["wayne", "angela", "walter", "lopez", "scott", "barbara"],
    "ruolo": []
};

for(let i = 0; i < 5; i++){
    content.append(card.nome[i]);
    myContainer.append(content);
}


