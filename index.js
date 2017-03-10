$( document ).ready(function() {
    console.log( "ready!" );

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    $('#quote-button').css('background-color', color);
    $("#quote-text").css('color', color);
    $("#author-text").css('color', color);
    $('.tweet-button').css('background-color', color);

    return color;
}

function getQuote () { 
  $(".quote-box").fadeIn("slow");
	$.getJSON("https://www.reddit.com/r/QuotesPorn/.json", function(a) {
	  
    var posts = a.data.children;
	  var randomPost = posts[Math.floor(Math.random() * posts.length)];
	  var randomQuote = randomPost.data.title;
    var randomImage = randomPost.data.preview.images[0].source.url;

  for (var i = randomQuote.length; i > 0; i--) {
  if (randomQuote[i] === '-' || randomQuote[i] ==='—' || randomQuote[i] ==='--') {
    var author = randomQuote.slice(i);
  }
  }
  console.log(author);
  var randomQuoteShortened = randomQuote.replace(`${author}`, " ");
  if (author) {
  for (var n = 0; n <= author.length; n++) {
     if (author[n] === '[') {
    var authorTrash = author.slice(n);
    author = author.replace(`${authorTrash}`, "");
    console.log(author);
  }
  }
}

var tweetButton = document.getElementById("tweet-button");
tweetButton.href = "https://twitter.com/intent/tweet" + "?text=" + randomQuoteShortened;

console.log(randomQuote)
console.log(randomQuoteShortened)

    $("#quote-container").html(`<h1 class = 'quote-text' id='quote-text'>${randomQuoteShortened}</h1>`);
    if (author) {
    $("#quote-container").append(`<p class = 'quote-text' id = 'author-text'>${author}</p>`)
  }
    $("#image-div").html(`<img src = ${randomImage} id = 'background-img' style: 'display: none'></img>`)
    $("#image-div").fadeIn("slow");
    $("#quote-text").fadeIn("slow");
    // $(".quote-box").html(`style: 'display:none'`);
    $(".quote-box").fadeIn("slow");
    $("body").css('background-color', getRandomColor());

})
  

  
}


getQuote();

$("#quote-button").on("click", getQuote);

});