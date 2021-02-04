const formsignup = document.querySelector("#signup");

var users = localStorage.getItem("users");
var emails = localStorage.getItem("emails");
var passwords = localStorage.getItem("passwords");

if (users == null) {
  users = [];
  emails = [];
  passwords = [];
} else {
  users = JSON.parse(users);
  emails = JSON.parse(emails);
  passwords = JSON.parse(passwords);
}

formsignup.addEventListener("submit", function (event) {
  event.preventDefault();

  const voornaam = formsignup.elements.voornaam.value;
  const naam = formsignup.elements.naam.value;
  const mail = formsignup.elements.email.value;
  const password = formsignup.elements.paswoord.value;
  const radio = formsignup.elements.AV;

  if (voornaam == "" || naam == "" || mail == "" || password == "") {
    window.alert("Niet alle velden zijn ingevuld!");
    window.location.href = "#signup";
    return;
  }

  if (!radio.checked) {
    window.alert("Gelieve de Algemene voorwaarden te accepteren.");
    window.location.href = "#signup";
    return;
  }

  users.push(voornaam + " " + naam);
  emails.push(mail);
  passwords.push(password);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("emails", JSON.stringify(emails));
  localStorage.setItem("passwords", JSON.stringify(passwords));

  window.alert("U bent ingeschreven!");
  window.location.href = "../pages/vrijwiligers.html";
});

// const form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const user = document.querySelector("#username");
//   console.log(user.value);
//   localStorage.setItem("user", user.value);
// });
