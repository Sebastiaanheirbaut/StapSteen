const a = document.querySelectorAll("#");

a.forEach((vlag) => {
  a.addEventListener("click", function () {
    const language = this.innerHTML.toLowerCase();
    loadContent(language);
  });
});

function loadContent(language) {
  fetch(language + ".json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //do whatever with your data
      for (const key in data) {
        var value = data[key];
        console.log(key, value);
        document.querySelector(`#${key}`).innerHTML = value;
      }
    });
}

loadContent("nl");
