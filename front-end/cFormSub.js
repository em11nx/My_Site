var form = document.querySelector(".my-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var formdata = new FormData(this);
    var inputName = formdata.get("Name");
    var inputEmail = formdata.get("Email");
    var inputSubject = formdata.get("Subject");
    console.log(inputName, " ", inputEmail, " ", inputSubject);
});
