console.log("hallo");

// const input = document.querySelectorAll("input");
// console.log(input);


const h1 = document.querySelector("h1");
console.log(h1);
console.dir(h1);

h1.innerHTML = "Registreren";

const submit = document.querySelector("#submit");
console.log(submit);
submit.addEventListener('click', function(event){
  console.log("hallo iedereen");
  // console.log(event);
});

const form = document.querySelector("form");
form.addEventListener('submit', function(event){
  event.preventDefault();
  const user = document.querySelector('#username');
  console.log(user.value);
  localStorage.setItem('user', user.value);
  
});