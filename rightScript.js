//let text = document.getElementById("right")
let text = document.createElement("h1")

let leftButton = document.getElementById("left")

leftButton.addEventListener("click", function() {
        text.innerText = "I'm right"
})

let rightButton = document.getElementById("right")

rightButton.addEventListener("click", function() {
    text.innerText = "No, I'm right"
})

document.getElementById("buttons").append(text)
text.id = "rightText"