var multiState = [
    [["Texas"], ["Austin", "Apple", "Banana"]],  
    [["Virginia"], ["Richmond", "Kiwi", "Coconut"]]
];

console.log(multiState[0]); // Outputs "apple"
console.log(multiState[1]); // Outputs "banana"
console.log(multiState[2]); // Outputs "orange"

console.log(window.location.search);
const params = new URLSearchParams(window.location.search);

const stateClicked = params.get('state'); 

var multiState = [
    [["California"], ["Sacremento", "Grape", "Mango"]],
    [["Texas"], ["Austin", "Apple", "Banana"]],  
    [["Virginia"], ["Richmond", "Kiwi", "Coconut"]]
];

// Get a reference to the list element
var myList = document.querySelector("ul");

// Loop through the array and add each item to the list
for (var i = 0; i < multiState.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = multiState[i];
    myList.appendChild(listItem);
}

for (var j=2; j <= 100; j=(j+5))
{
    console.log(j);
}


