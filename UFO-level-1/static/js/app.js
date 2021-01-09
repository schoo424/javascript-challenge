// from data.js
var tableData = data;

// YOUR CODE HERE!

//Grab the data
var tbody = d3.select("tbody");

data.forEach(function(UFOData) {
      console.log(UFOData);
      var row = tbody.append("tr");

    Object.entries(UFOData).forEach(function([key,value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Event handler function for the form
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit", runEnter);

function runEnter() {
// Prevent the page from refreshing
    // d3.event.preventDefault();
//clearing of the table each time

tbody.html("")
filteredData = tableData;

// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");    

// Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);     

    if (inputValue) {
    //filtering of the data 
        filteredData = filteredData.filter(row=> row.datetime == inputValue)
    };

//optional part --> adding 'Shape'
    var shapeElement = d3.select("#shape");    

    // Get the value property of the input element
        var shapeValue = shapeElement.property("value");
        console.log(shapeValue);   

    //filtering of the data 
    if(shapeValue){
        filteredData = filteredData.filter(row=> row.shape == shapeValue)
    };

    filteredData.forEach(function(UFOData) {
        console.log(UFOData);
        var row = tbody.append("tr");
  
      Object.entries(UFOData).forEach(function([key,value]) {
          console.log(key,value);
          var cell = row.append("td");
          cell.text(value);
      });
  });

};


