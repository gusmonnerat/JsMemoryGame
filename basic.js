document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
    {
        name: 'basketball',
        img: 'images/basketball-96.png'
    },
    {
        name: 'basketball',
        img: 'images/basketball-96.png'
    },
    {
        name: 'billiard',
        img: 'images/billiard-ball-96.png'
    },
    {
        name: 'billiard',
        img: 'images/billiard-ball-96.png'
    },
    {
        name: 'bowling',
        img: 'images/bowling-ball-96.png'
    },
    {
        name: 'bowling',
        img: 'images/bowling-ball-96.png'
    },
    {
        name: 'finish-flag',
        img: 'images/finish-flag-96.png'
    },
    {
        name: 'finish-flag',
        img: 'images/finish-flag-96.png'
    },
    {
        name: 'skateboard',
        img: 'images/skateboard-96.png'
    },
    {
        name: 'skateboard',
        img: 'images/skateboard-96.png'
    },
    {
        name: 'soccer-ball',
        img: 'images/soccer-ball-96.png'
    },
    {
        name: 'soccer-ball',
        img: 'images/soccer-ball-96.png'
    },
    {
        name: 'sport',
        img: 'images/sport-96.png'
    },
    {
        name: 'sport',
        img: 'images/sport-96.png'
    },
    {
        name: 'volleyball',
        img: 'images/volleyball-96.png'
    },
    {
        name: 'volleyball',
        img: 'images/volleyball-96.png'
    }
    ]
    //create board
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/ponto-de-interroga-96.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
//check matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/quadrado-arredondado-96.png')
        cards[optionTwoId].setAttribute('src', 'images/quadrado-arredondado-96.png')
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/ponto-de-interrogação-96.png')
        cards[optionTwoId].setAttribute('src', 'images/ponto-de-interrogação-96.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}


//flipcard
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
    createBoard()
})