console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let n1 = document.getElementById("node1");
n1.textContent = "I used the getElementById(“node1”) method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let n2 = document.getElementsByClassName("node2");
console.log(n2);
n2[0].textContent = 'I used the getElementByClassName("node2") method to access this';
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Elements = document.getElementsByTagName("h3");
for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].textContent = 'I used the getElementByTagName("h3") method to access all of these';
}



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let paraElem = document.createElement("p");
paraElem.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let parentDiv = document.getElementById("parent");
parentDiv.appendChild(paraElem);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let aElement = document.createElement("a");
aElement.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>
aElement.href = "https://google.com";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentDiv.insertBefore(aElement, paraElem);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let ex3 = document.querySelector("#exercise-container3");
let ex3Para = document.createElement("p");
ex3Para.textContent = "New Child Node";
let ex3Child = document.querySelector("#N1");
ex3.replaceChild(ex3Para, ex3Child);
// TODO: Remove the "New Child Node"
ex3Para.remove();
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = ["apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let listParent = document.getElementById("container");
let newUl = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++) {
    let tempLi = document.createElement("li");
    tempLi.textContent = list[i];
    newUl.append(tempLi);
}
// TODO: Append the unordered list to the `div#container` under exercise 4 
listParent.append(newUl);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
let show = document.querySelector("#btn");
show.addEventListener("click", () => {
    let newDiv = document.createElement("div");
    newDiv.id = "modal";
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("modal-card");
    let modalPara = document.createElement("p");
    modalPara.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
        newDiv.remove();
    });
    innerDiv.append(modalPara, closeButton);
    newDiv.append(innerDiv);
    document.body.append(newDiv);
});

