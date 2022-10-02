document.body.style.backgroundColor = "skyblue";

let fruits = document.getElementsByName("fruits");

console.log(fruits)// fruits is a colection of nodelist


let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";//vegetables is an array

let deserts = document.getElementsByClassName("deserts");
deserts[0].style.backgroundColor = "lightpink";

let element = document.querySelector("#myTitle");
element.style.backgroundColor = "red";

// array 
let elements = document.querySelectorAll(".deserts");
elements.forEach(element => {
  element.style.backgroundColor = "pink";
})