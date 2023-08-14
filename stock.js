// imports
// import prompt-sync

// refactor import prompt-sync

//Reference: https://stackoverflow.com/questions/65852175/convert-prompt-sync-require-into-import-method

import promptSync from 'prompt-sync';

const prompt = promptSync();
// example of usage:

// const result = prompt(message);


// Declare variables using const and let (not var)
// let url = ""
// let stock = ""
// let timeStart = ""
// let timeEnd = ""

// Declare variables by taking user input from CLI

// Reference: https://linuxhint.com/get-user-input-from-command-line-with-javascript/#:~:text=Conclusion-,To%20get%20the%20user%20input%20from%20the%20command%20line%20with,prompts%20the%20user%20for%20input.

// // take url from User in CLI
// let url = prompt("url:");
// // take stock ticker from User in CLI
// let stock = prompt("stock ticker:");
// // take start time from User in CLI
// let timeStart = prompt("start of date range:");
// // take end time from User in CLI
// let timeEnd = prompt("end of date range:");

// Revised variable Declaration by taking user input
// Revised per StackOverflow Reference: https://stackoverflow.com/questions/48859169/error-types-can-only-be-used-in-a-ts-file-visual-studio-code-using-ts-che

// take url from User in CLI
let url = prompt("url:");
// take stock ticker from User in CLI
let stock = prompt("stock ticker:");
// take start time from User in CLI
let timeStart = prompt("start of date range:");
// take end time from User in CLI
let timeEnd = prompt("end of date range:");


// We are using the Polygon.io API



// Declare functions

// Function to get stock data from API
function getStockData() {
    // Get the stock symbol from the input field
    stock = document.getElementById("stockSymbol").value
    // Get the start time from the input field
    timeStart = document.getElementById("startTime").value
    // Get the end time from the input field
    timeEnd = document.getElementById("endTime").value
    // Create the URL
    url = `https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/minute/${timeStart}/${timeEnd}?unadjusted=true&sort=asc&limit=50000&apiKey=HJ3h7u4XaB2Xw8Z1gZ2m6kX6Q4J5z3Z0`
    // Fetch the data from the API
    fetch(url)
        .then(response => response.json()) // Parse the JSON from the API
        .then(data => {
            // Print the data to the console
            console.log(data)
            // Call the function to process the data
            processData(data)
        })
}
