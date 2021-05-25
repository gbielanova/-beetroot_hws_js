const container = document.getElementsByClassName('flip-container')[0];
const AnimDuration = 600;
let cards = [];
let animRunning = false;

window.addEventListener('load', function () {
    generateCards();
    addCard();
})

container.addEventListener('mouseover', function (event) {
    if (event.target.parentNode.parentNode.classList.contains('flipper') && !animRunning) {
        addCard();
        animRunning = true;
        event.target.parentNode.parentNode.classList.toggle("level-up");
        event.target.parentNode.parentNode.classList.add('animate');
        sleep(AnimDuration).then(() => {
            animRunning = false;
            event.target.parentNode.parentNode.classList.toggle("level-up");
            removeCard();
        });
    }
})

function generateCards() {
    // [['spade', 6], ['diamond', 'K'], ['heart', 'Q'], ['club', 'A']]
    ['spade', 'diamond', 'heart', 'club'].forEach(suit => {
        [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'].forEach(rank => {
            cards.push([suit, rank]);
        });
    });
    cards = cards.sort((a, b) => 0.5 - Math.random());
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function addCard() {
    let card = cards.pop();
    if (card) {
        let divElem = document.createElement('div');
        divElem.classList.add('flipper');
        document.getElementsByClassName('flip-container')[0].appendChild(divElem);
        let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/sprite.svg#back');
        svgElem.appendChild(useElem);
        svgElem.classList.add('back');
        divElem.appendChild(svgElem);
        let frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        divElem.appendChild(frontDiv);
        svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/sprite.svg#front');
        svgElem.classList.add('front-svg');
        svgElem.appendChild(useElem);
        frontDiv.appendChild(svgElem);
        svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./img/sprite.svg#${card[0]}`);
        svgElem.classList.add('suit');
        svgElem.appendChild(useElem);
        frontDiv.appendChild(svgElem);
        let pElem = document.createElement('p');
        pElem.classList.add('rank');
        pElem.textContent = card[1];
        frontDiv.appendChild(pElem);
    };
}

function removeCard() {
    let blocks = document.getElementsByClassName('animate');
    if (blocks.length > 1) { blocks[0].remove(); };
}
