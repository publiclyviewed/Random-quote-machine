
document.addEventListener('DOMContentLoaded', (event) => { generateQuote(); });
  
  function generateQuote() {
   let quoteSize = QUOTEBANK.length;
   let randomIndex = Math.floor(Math.random() * quoteSize);
   let randomQuoteData = QUOTEBANK[randomIndex];
   
   
   document.getElementById("text").innerText = randomQuoteData.quote;
   document.getElementById("author").innerText = randomQuoteData.author;

   let tweetLink = document.getElementById("tweet-quote"); 
   tweetLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomQuoteData.quote + " - " + randomQuoteData.author)}`;
   let postFacebookLink = document.getElementById("post-facebook"); 
   postFacebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
  }
  const QUOTEBANK = [
   {
      quote: "Don't look at me!",
      author: "Street name Kenny"
   }, {
      quote: "You'll have at.",
      author: "Shannon Moore"
   }, {
      quote: "Dying of boringness...",
      author: "Matthew Taylor"
   }, {
      quote: "Go to school and see someone you don't like? Run 'em over!",
      author: "Paul Goebel"
   }, {
      quote: "Hush",
      author: "Leonard Taylor"
   }, {
      quote: "That's how people die",
      author: "Cooper Horne"
   }, {
      quote: "Brandon's got a GT",
      author: "Jake"
   }, {
      quote: "Should've just thrown her overboard",
      author: "Dennis Foster"
   }, {
      quote: "Why don't we just round 'em all up and send 'em overseas?",
      author: "Steve Goebel"
   }
]



