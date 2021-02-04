const vlaggen = document.querySelectorAll(".vlag");
var language = localStorage.getItem("language");
var path = window.location.pathname;
var page = path.split("/").pop();

vlaggen.forEach((vlag) => {
  vlag.addEventListener("click", function () {
    language = this.getAttribute("href").substring(1);
    localStorage.setItem("language", language);
    // console.log(language);
    // console.log(language);
    // console.log(page);
    loadContent(language);
    changeFormLanguage(language);
  });
});

loadContent(language);
changeFormLanguage(language);

function changeFormLanguage(language) {
  console.log(page);
  if (page == "index.html") {
    if (language == "dutch") {
      document.getElementsByName("naam")[0].placeholder = "Naam";
      document.getElementsByName("email")[0].placeholder = "E-mailadres";
      document.getElementsByName("onderwerp")[0].placeholder = "Onderwerp";
      document.getElementsByName("message")[0].placeholder =
        "Plaats hier uw bericht";
      document.querySelectorAll(".submit-contact")[0].value = "Verzenden";
      document.querySelectorAll(".submit-gift")[0].value = "Ga verder";
    } else if (language == "english") {
      document.getElementsByName("naam")[0].placeholder = "Name";
      document.getElementsByName("email")[0].placeholder = "E-mail";
      document.getElementsByName("onderwerp")[0].placeholder = "Subject";
      document.getElementsByName("message")[0].placeholder =
        "Type your message here";
      document.querySelectorAll(".submit-contact")[0].value = "Send";
      document.querySelectorAll(".submit-gift")[0].value = "Continue";
    } else if (language == "french") {
      document.getElementsByName("naam")[0].placeholder = "Nom";
      document.getElementsByName("email")[0].placeholder = "E-mail";
      document.getElementsByName("onderwerp")[0].placeholder = "Sujet";
      document.getElementsByName("message")[0].placeholder =
        "Tapez votre message ici";
      document.querySelectorAll(".submit-contact")[0].value = "Envoyer";
      document.querySelectorAll(".submit-gift")[0].value = "Continuer";
    }
  } else if (page == "vrijwiligers.html") {
    if (language == "dutch") {
      document.getElementsByName("voornaam")[0].placeholder = "Voornaam";
      document.getElementsByName("naam")[0].placeholder = "Naam";
      document.getElementsByName("email")[0].placeholder = "E-mailadres";
    } else if (language == "english") {
      document.getElementsByName("voornaam")[0].placeholder = "First name";
      document.getElementsByName("naam")[0].placeholder = "Name";
      document.getElementsByName("email")[0].placeholder = "E-mail";
    } else if (language == "french") {
      document.getElementsByName("voornaam")[0].placeholder = "Prénom";
      document.getElementsByName("naam")[0].placeholder = "Nom";
      document.getElementsByName("email")[0].placeholder = "E-mail";
    }
  }
}

function loadContent(language) {
  fetch("../json/" + language + ".json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      //do whatever with your data
      for (const key in data) {
        var value = data[key];

        // console.log(document.querySelector(`#${key}`));
        if (document.querySelector(`#${key}`) == null) {
          continue;
        } else {
          document.querySelector(`#${key}`).innerHTML = value;
        }
      }
    });
}
