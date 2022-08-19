let input = document.querySelector('input')
let cardsHtml = document.querySelector('.insert-product-card')

const insertCards = productCard.map(function(item) {
    return `
    <div class="product-card">
        <div class="product-img">
            <img class="product"alt="" src=${item.image} >
        </div>
        <hr class="line-bar">
        <div class="product-descripton">
            <h3 class="description">${item.description}</h3>
            <div class="product-price">
                <div class="price">${item.price}</div>
            </div>
        </div>
    </div>`
})
cardsHtml.innerHTML = insertCards.join('')

const hideCards = (cards, inputValue) => {
    cards.filter(card => !card.textContent.toUpperCase().includes(inputValue))
    .forEach(card => {
        card.classList.add('hidden')
    })
}
const showCards = () => {
    cards.filter(card => card.textContent.toUpperCase().includes(inputValue))
    .forEach(card => {
        card.classList.remove('hidden')
    })
}

input.addEventListener('input', event => {
    const cards = Array.from(cardsHtml.children)
    let inputValue = event.target.value.trim().toUpperCase()
    hideCards(cards, inputValue)
    showCards(cards, inputValue)
   
})
   






