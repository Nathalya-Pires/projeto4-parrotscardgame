let qntCartas;

iniciaJogo();

function iniciaJogo() {

    while (true) {
        qntCartas = prompt("Indique a quantidade de cartas para jogar, nº pares de 4 a 14.");

        if (qntCartas < 4 || qntCartas > 14 || qntCartas % 2 == 1) {
        }
        else {
            break;
        }
    
    }

addCards();

    function addCards() {

        const cardList = document.querySelector('ul');

        cardList.innerHTML = '';

        for (let counter = 0; qntCartas > counter; counter++) {

            let item = `
            <li class="card">
                    <img class="front" src="./Arquivos/front.png" alt="Parrot Image">
                                      
                    <img class="back" src="./Arquivos/3parrots.gif" alt="Animated Gif">
                                        
                </li>
        `;

            cardList.innerHTML = cardList.innerHTML + item;
        }

        
    }
}
