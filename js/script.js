// API
const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";


// Elemento del DOM
const rowElem = document.querySelector(".row");
const overLay = document.querySelector(".overlay");
const btnOverLay = document.querySelector(".overlay button");
const imgOverLay = document.querySelector(".overlay img");



// Chiamata axios
axios.get(apiUrl).then((resp) => {
    const cards = resp.data;

    // funzione di stampa
    printCards(cards);

    // ciclo per avare le immagini dell'overlay uguali alle immagini delle card
    const cardElem = document.querySelectorAll(".card");
    cardElem.forEach((curCard) => {
        addImgOverLay(curCard)  //addImgOverLayData(cards, curCard)
    })


})



// bottone di chiusura overlay
btnOverLay.addEventListener("click", function () {

    overLay.classList.add("d-none");

})


// FUNZIONI //

// funzione di stampa
function printCards(cards) {
    let listCards = "";
    // ciclo per la stampa delle cards
    cards.forEach((card) => {
        listCards += listCardsTemplate(card)
    })
    rowElem.innerHTML = listCards;
}

// funzione concatenamento card
function listCardsTemplate(card) {
    const { url, date, title, id } = card;

    return `<div class="col">
                <div class="card b-white" data-cardid="${id}">
                    <img class="pin" src="./img/pin.svg" alt="Puntina rossa">
                    <figure>
                    <img src="${url}" alt="${title}">  
                    <figcaption class="date">${date}</figcaption>
                    </figure>       
                    <h2 class="py-5">${title}</h2>
                </div>
            </div>`
}

// funzione per avere le IMMAGINI della CARD nelle IMMAGINI dell'OVERLAY
function addImgOverLay(singleCard) {
    singleCard.addEventListener("click", function () {
        overLay.classList.remove("d-none");

        const cardImgElem = singleCard.querySelector("figure img");
        imgOverLay.src = cardImgElem.src;
        imgOverLay.alt = cardImgElem.alt;
        
    })
}


// funzione usando il data

// function addImgOverLayData(cards, singleCard) {
//     singleCard.addEventListener("click", function () {
//         overLay.classList.remove("d-none");

//         const cardId = parseInt(singleCard.dataset.cardid);
//         const cardElem = cards.find((curCard) => curCard.id === cardId);
//         imgOverLay.src = cardElem.url;
//     })
// }

