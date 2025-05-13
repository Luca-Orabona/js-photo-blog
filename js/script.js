const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";



// funzione concatenamento card
function listCardsTemplate(card) {
    const { url, date, title } = card;

    return `<div class="col">
                <div class="card b-white">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <figure>
                    <img src="${url}" alt="">  
                    <figcaption class="date">${date}</figcaption>
                    </figure>       
                    <h2 class="py-5">${title}</h2>
                </div>
            </div>`
}

// funzione per ricevere le IMMAGINI della CARD nelle IMMAGINI dell'OVERLAY
function fimgOverLay(singleCard) {
    singleCard.addEventListener("click", function () {
        overLay.classList.remove("d-none");
        const cardImgElem = singleCard.querySelector("figure img");

        imgOverLay.src = cardImgElem.src;

    })
}

// Elemento del DOM
const rowElem = document.querySelector(".row");
const overLay = document.querySelector(".overlay");
const btnOverLay = document.querySelector(".overlay button");
const imgOverLay = document.querySelector(".overlay img");



// Chiamata axios
axios.get(apiUrl).then((resp) => {
    const cards = resp.data;


    let listCards = "";
    cards.forEach((card) => {
        listCards += listCardsTemplate(card)
    })

    rowElem.innerHTML = listCards;

    const cardElem = document.querySelectorAll(".card");

    cardElem.forEach((curCard) => {
        fimgOverLay(curCard)
    })


})



// bottone di chiusura overlay
btnOverLay.addEventListener("click", function () {

    overLay.classList.add("d-none");

})

