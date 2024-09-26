const form = document.getElementById("myform");
form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
});
