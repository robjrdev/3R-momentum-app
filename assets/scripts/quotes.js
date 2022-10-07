function setBg(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundImage = "url('assets/images/morning.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
          
    } else if(hour < 18) {
        document.body.style.backgroundImage = "url('assets/images/afternoon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        
    } else {
        document.body.style.backgroundImage = "url('assets/images/night3.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}






let quotes = [
    '"Try to be a rainbow in someone else cloud"',
    '"Wake up determined, go to bed satisfied"',
    '"Nobody built like you, you design yourself"',
    '"Live your beliefs and you can turn the world around"',
    '"Faith is love taking the form of aspiration"',
    '"When it comes to luck, you make your own"',
    '"The power of imagination makes us infinite"',
    '"The only journey is the one within"',
    '"Embrace the glorious mess that you are"'

];

let randomQuotes = document.querySelector('#quotes')
function rand() {
    let random = Math.floor(Math.random() * quotes.length)
    setTimeout(rand, 6000)
    if (quotes > quotes.length) {
        return quotes
    } else {
        randomQuotes.classList.add('opacity')
        randomQuotes.innerHTML = quotes[random]
        setTimeout(function () {
            randomQuotes.style.transition = 'opacity 1s'
            randomQuotes.classList.remove('opacity')
        }, 5000)
    }
}

const addQuote = document.querySelector('#add-quote-button'),
newQuote = document.querySelector('#new-quote'),
getNewQuote = document.querySelector('#get-new-quote'),
    addQuoteInput = document.querySelector('#new-quote-text')

addQuote.addEventListener('click', function() {
    newQuote.classList.toggle('display')
})



addQuoteInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let list = document.createElement ('li')
        list.textContent = addQuoteInput.value
        getNewQuote.append(list)
        console.log(list.textContent);
        addQuoteInput.value = ''
        onclick = quotes.push(list.textContent)
    }
})
  


setBg();
rand();