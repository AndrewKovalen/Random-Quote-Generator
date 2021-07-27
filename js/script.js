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


console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote( array ) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  let randomNumber = Math.floor( Math.random() * quotes.length );
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomQuote = array[randomNumber];
  

  // 3. Return the variable storing the random quote object
  return randomQuote;
}

let results = getRandomQuote(quotes);
console.log(results)


/***
 * `printQuote` function
***/
function printQuote(message) {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let randomQuoteObject = getRandomQuote()
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let outcome = "<p class = 'quote'>" + randomQuote.quote + "<p class = 'source'" + randomQuote.source + "</p>"
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);