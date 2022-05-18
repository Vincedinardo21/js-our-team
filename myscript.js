// Variabili
let myContainer = document.querySelector(".team-container");

// const card = {
//     "immagine": ["img/wayne-barnett-founder-ceo.jpg", "img/angela-caroll-chief-editor.jpg", "img/wayne-barnett-founder-ceo.jpg", "img/wayne-barnett-founder-ceo.jpg", "img/wayne-barnett-founder-ceo.jpg", "img/wayne-barnett-founder-ceo.jpg"],
//     "nome": ["wayne", "angela", "walter", "lopez", "scott", "barbara"],
//     "ruolo": ["Chief", "Office", "Social", "Developer", "Graphic"]
// };

// for(let i = 0; i < 5; i++){
//     let myImage = document.createElement("img");
//     //myImage.src = "img/wayne-barnett-founder-ceo.jpg";
//     myImage.append(card.immagine[i]);
//     myContainer.append(myImage);
// }

const card = [
    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "angela",
        "ruolo" : "Chef Editor"
    },
    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "angela",
        "ruolo" : "Chef Editor"
    },
    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "angela",
        "ruolo" : "Chef Editor"
    },
    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "angela",
        "ruolo" : "Chef Editor"
    },
    {
        "immagine" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "angela",
        "ruolo" : "Chef Editor"
    },   
]

for(i = 0; i < card.length; i++){
    
    let objIesimo  = card[i];
    for(var chiave in objIesimo){
        let myContent = document.createElement("div");
        myContent.classList.add(".team-card");
        myContent.append(objIesimo[chiave]);
        myContainer.append(myContent);
        console.log(chiave + " : " + objIesimo[chiave]);
    }
}


