// Fetching a random quote from the API
// and displaying it in the quote box
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

const api_url = 'https://api.quotable.io/random';

async function getQuote() {
    const response = await fetch(api_url);
    const data = await response.json();
    
    quoteElement.innerText = data.content;
    authorElement.innerText = data.author;
}

function Tweet() {
    const quoteText = quoteElement.innerText;
    const authorText = authorElement.innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)} - ${encodeURIComponent(authorText)}`;
    
    window.open(tweetUrl, '_blank' , 'width=700,height=400');
}

// Initial quote load
getQuote();