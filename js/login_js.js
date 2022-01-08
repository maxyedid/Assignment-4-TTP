let buttonEl = document.getElementById("button")



buttonEl.addEventListener("click", function() {
    let password = document.getElementById("the-pass").value
    document.getElementById("the-pass").value = ""
    document.getElementById("the-email").value = ""
    document.getElementById("the-username").value = ""
    
})
