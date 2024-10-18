/*
    document: current document
    getElementById:  get elements by ids id
 
    function: piece of code you can call by name
    value: what user typed in textbox / what is showing in textbox.

    textContent: allows you to get change text within an element
    innerHTML: changes or gets html code within given element

    set the base price
    add additional people * 4
    print out the answer

*/

/*document.getElementById("calc").addEventListener('submit', function(event){
    event.preventDefault()

    let partyType = parseInt(document.getElementById("partyType").value);
    let additional = parseInt(document.getElementById("additional").value);
    
    let totalCost = partyType + additional * 4;

    document.getElementById("answer").textContent = `Cost: $${totalCost}`;
});*/

function CalculateParty() {
    let partyType = document.getElementById("partyType").value;
    let additional = document.getElementById("additional").value;

    let totalCost = parseInt(partyType) + additional * 4;
    document.getElementById("answer").textContent = `Cost: $${totalCost}`;
}