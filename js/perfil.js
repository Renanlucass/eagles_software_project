function editProfile() {
    var name = prompt("Digite seu nome:");
    var email = prompt("Digite seu e-mail:");

    if (name && email) {
        document.getElementById("name").value = name;
        document.getElementById("email").value = email;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }
}

document.getElementById("image-upload").addEventListener("change", function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var img = document.getElementById("profile-img");
        img.src = reader.result;

        localStorage.setItem("profilePicture", reader.result);
    }
    reader.readAsDataURL(event.target.files[0]);
});

window.addEventListener("load", function () {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var profilePicture = localStorage.getItem("profilePicture");

    if (name) {
        document.getElementById("name").value = name;
    }
    if (email) {
        document.getElementById("email").value = email;
    }
    if (profilePicture) {
        var img = document.getElementById("profile-img");
        img.src = profilePicture;
    }
});
