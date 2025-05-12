const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";

const rowElem = document.querySelector(".row");

// Chiamata axios
axios.get(apiUrl).then((resp) => {
    const cards = resp.data;
    
    let listCards = "";
    cards.forEach((card) => {

        const {url, date, title} = card;
        listCards += 
                    `<div class="col">
                        <div class="card b-white">
                            <img class="pin" src="./img/pin.svg" alt="">
                            <figure>
                            <img src="${url}" alt="">  
                            <figcaption>${date}</figcaption>
                            </figure>       
                            <h2 class="pt-5">${title}</h2>
                        </div>
                    </div>`  
    })

    rowElem.innerHTML = listCards;
    
})


