function saveData(event) {
    event.preventDefault();


    const username = document.getElementById("username").value;
    const userData = localStorage.getItem(username);
    if (userData) {
        alert("Username already exists. Please choose a different username.");
        return;
    }


    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const data = {
        username,
        password,
        email,
        phone
    };
    localStorage.setItem(username, JSON.stringify(data));
    alert("Registration successful!");
    location.reload();
}