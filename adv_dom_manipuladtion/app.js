/**
 * *Styling Element
 */

/* const listItems = document.querySelectorAll(".list-items");
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "1rem";
}
console.log(listItems);
 */

/**
 ** Selecting Element
 */

const ul = document.querySelector("ul");

// * Creating element
const li = document.createElement("li");

/**
 * *Editing an element text content 3 way
 */

li.textContent = "Lord of the rings";
//li.innerText = "Lord of the rings 2";

//!Has security concern
//li.innerHTML = "Lord of teh rings 3";
ul.append(li);

/**
 * * Modifying Attributes & Classes
 */

li.setAttribute("id", "main-heading");
li.removeAttribute("id");
const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));
li.classList.add("list-items");
li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));

/**
 * * Remove Elements
 */
li.remove();

/**
 * * DOM traversal
 */

//* Parent Node Traversal

let ul2 = document.querySelector("ul");
console.log(ul2.parentElement.parentElement);
console.log(ul2.parentNode.parentNode);

//* Child Node Traversal
let ul3 = document.querySelector("ul");
console.log(ul3.childNodes);

//* Siblings node traversal
let ul4 = document.querySelector("ul");
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
