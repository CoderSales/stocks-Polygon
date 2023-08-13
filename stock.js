// Declare variables using const and let (not var)
let url = ""
let stock = ""
let timeStart = ""
let timeEnd = ""

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