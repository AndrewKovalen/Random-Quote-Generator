/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/*
  Objects are made up of comma separated pairs of 
  properties and values.
*/

let quotes = [
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    source: "Will Durant",
    citation: "The Story of Philosophy",
    year: 1926
  },

  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    citation: "Quote Encyclopedia",
    year: 1758
  },

  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson"
  },

  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela"
  },

  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: "Abraham Lincoln",
    year: 1865
  },

  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison"
  },

  {
    quote: "With great power comes great responsibility",
    source: "Ben Parker",
    citation: "Movie: Spider Man",
    year: 2002
  }
]


console.log( quotes );



/***
 * `getRandomQuote` function
***/

function getRandomQuote( ) {
  // Variable that generates a random number
  // between zero and the last index in the `quotes` array
  let randomNumber = Math.floor( Math.random() * quotes.length );
  
  // Return index vaule as randomNumber in `quotes` array
  return quotes[randomNumber]
  
}

// Assign getRandomQuote providing `quotes` array as a parameter to results variable
let results = getRandomQuote( quotes );

// Displaying random quote by logging results variable to the console.
console.log( results )

//Array of random background colors
let colors = [
  "#7FDBFF",
  "#FFDC00",
  "#0074D9",
  "#39CCCC",
  "#001f3f",
  "#FF4136",
  "#85144b"
]



/***
 * `printQuote` function
***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let randomQuoteObject = getRandomQuote();
  // Setting a variable with empty string to add html string below
  let outcome = '';  

    //Selects the body from the css file to add background colors and assigned to a variable
    let CSSbody = document.querySelector('body');
    //Loop picks a random color
    for (let i = 0; i < colors.length; i++) {
      let randColor = Math.floor( Math.random() * colors.length )
      CSSbody.style.background = colors[ randColor ]
}

  // Shows the quote from the html file
  outcome += "<p class = 'quote'>" + randomQuoteObject.quote + "</p>";
  outcome += "<p class = 'source'>" + randomQuoteObject.source + "</p>";
                
  // If statements check what properties are contained in an object
  if ( "citation" in randomQuoteObject ) {
    outcome += "<span class = 'citation'>" + randomQuoteObject.citation + "</span>"
  }

  if ( "year" in randomQuoteObject ) {
    outcome += "<span class = 'year'>" + randomQuoteObject.year + "</span>"
  }
  
  // Getting #quote-box id element and set it to html string
  document.getElementById('quote-box').innerHTML = outcome;

  //Return the function
  return outcome;
}

printQuote();

// Set time to update the page every 10 seconds
function update() {
  //Location.reload() method reloads the current URL, like the Refresh button.
  document.location.reload()
}

setTimeout(update, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);