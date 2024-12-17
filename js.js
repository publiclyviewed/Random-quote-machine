
function init() {
    generateQuote()
   }
   
   function generateQuote() {
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex];
    
    
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
   }
   const QUOTEBANK = [
    {
       quote: "Life is too short to live the same day twice.",
       author: "Deryck Whibley"
    }, {
       quote: "The difference between reality and fiction? Fiction has to make sense.",
       author: "Tom Clancy"
    }, {
       quote: "Sometimes the road less traveled is less traveled for a reason",
       author: "Jerry Seinfeld"
    }, {
       quote: "it's good to know who hates you and it is good to be hated by the right people",
       author: "Johnny Cash"
    }
]
