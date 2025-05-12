const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";



// funzione concatenamento card
function listCardsTemplate(card) {
    const {url, date, title} = card;

    return `<div class="col">
                <div class="card b-white">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <figure>
                    <img src="${url}" alt="">  
                    <figcaption class="date">${date}</figcaption>
                    </figure>       
                    <h2 class="pt-5">${title}</h2>
                </div>
            </div>`  
}

// Elemento del DOM
const rowElem = document.querySelector(".row");

// Chiamata axios
axios.get(apiUrl).then((resp) => {
    const cards = resp.data;
    
    let listCards = "";
    cards.forEach((card) => {
        listCards += listCardsTemplate(card)
    })

    rowElem.innerHTML = listCards;
    
})

