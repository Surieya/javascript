let element = document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "red";

let element2 = document.querySelector("#vegetables");
let nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "lightpink";


let element3 = document.querySelector("#vegetables");
let prevSibling = element2.previousElementSibling;
prevSibling.style.backgroundColor = "lightpink";

let element4 = document.querySelector("#fruit");
let firstChild = element4.firstElementChild;
firstChild.style.backgroundColor = "lightgrey";


let element5 = document.querySelector("#fruit");
let secondChild = element5.children[1];
secondChild.style.backgroundColor = "lightgrey";



let element6 = document.querySelector("#vegetables");
let children = Array.from(element6.children);
children.forEach(child => child.style.backgroundColor = "lightgrey")



