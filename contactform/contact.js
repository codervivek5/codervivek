
function sendWhatsapp() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let mobileNumber = "917393017587"; //Enter your mobile number here



    let url =
        `https://wa.me/${mobileNumber}?text=` +
        "*Name:* " + name.value + "%0a" +
        "*User e-mail:* " + email.value + "%0a" +
        "*Subject:* " + subject.value + "%0a" +
        "*Message:* " + message.value;

    window.open(url, "_blank").focus();
}