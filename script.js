const cards = [];

function addCards() {

    const cardList = document.querySelector('ul');

    cardList.innerHTML = '';

    let counter = 0;

    for (let counter = 0; cards.length > counter; cont++) {

        let item = `
            <li>
                <div>
                    <img class="front" src="./Arquivos/front.png" alt="Parrot Image">
                </div>
                <div>
                    <img class="back" src="./Arquivos/3parrots.gif" alt="Animated Gif">
                </div>
            </li>
        `;

        cardList.innerHTML = cardList.innerHTML + item;
    }

}