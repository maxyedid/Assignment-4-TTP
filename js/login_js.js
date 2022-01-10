let buttonEl = document.getElementById("button")



buttonEl.addEventListener("click", function() {

    let password = document.getElementById("the-pass").value
    let userName = document.getElementById("the-username").value
    let email = document.getElementById("the-email").value
    let messageEl = document.getElementById("message")

    document.getElementById("the-pass").value = ""
    document.getElementById("the-email").value = ""
    document.getElementById("the-username").value = ""
    if(userName === "" || email === "" ) {
        messageEl.textContent = `Please fill out all fields!!`
    }
    else if (password == 12345678) {
        messageEl.textContent = `${userName} DOES exist in the database!`
    } else {
        messageEl.textContent = `INCORRECT VALUES! This person does not exist in the database`
    }
})
