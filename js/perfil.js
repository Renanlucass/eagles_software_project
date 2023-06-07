function changeProfilePicture() {
    document.getElementById("image-upload").click();
}

document.getElementById("image-upload").addEventListener("change", function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var img = document.getElementById("profile-img");
        img.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

function editProfile() {
    var name = prompt("Digite seu nome:");
    var email = prompt("Digite seu e-mail:");

    if (name && email) {
        document.getElementById("name").innerText = name;
        document.getElementById("email").innerText = email;
    }
}