// Your code goes here

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded"); //change the html id text to This is really cool
    document.getElementById('text').textContent = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);