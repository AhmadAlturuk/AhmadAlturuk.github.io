const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ahmedyos.709@gmail.com",
    Password : "F993A10977D085E080C9969A41F7EB025E4B",
    To : 'ahmedyos.709@gmail.com',
    From : "ahmedyos.709@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => alert(message)
);

form.addEventListener("submit",(e) => {
    e.preventDefault();
})
}