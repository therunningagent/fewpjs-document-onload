// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    let paragraph = document.querySelector("#text")
    paragraph.textContent = "This is really cool!"
})

console.log("this console.log() fires when index.js loads - bfore DOMContentLoaded is triggered")