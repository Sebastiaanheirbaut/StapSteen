const formLogin = document.querySelector("#login");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  var found = false;
  const mailLogin = formLogin.elements.email.value;
  const passwordLogin = formLogin.elements.paswoord.value;

  // emails = JSON.parse(emails);
  emails.forEach(function (email, index) {
    if (mailLogin == email) {
      found = true;
      if (passwordLogin == passwords[index]) {
        window.location.href = "../pages/login.html";
        return;
      } else {
        window.alert("Het paswoord is incorrect.");
        window.location.href = "#login";
        return;
      }
    }
  });

  if (!found) {
    window.alert("Dit e-mailadres staat niet in ons bestand.");
    window.location.href = "#login";
  }
});
