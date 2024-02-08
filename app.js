const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = [
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
  ];

  data.forEach((element, index) => {
    const p = inputs[index].parentElement.querySelector("p");

    if (index === 2) {
      if (element.trim() === "") {
        inputs[index].parentElement.classList.add("invalid");
        inputs[index].placeholder = "";
        p.innerText = `${inputs[index].dataset.id} cannot be empty`;
      } else if (!validateEmail(element)) {
        inputs[index].parentElement.classList.add("invalid");
        inputs[index].value = "";
        inputs[index].placeholder = "email@exemple.com";
        p.innerText = `Looks like this is not an ${inputs[
          index
        ].dataset.id.toLowerCase()}`;
      } else {
        inputs[index].parentElement.classList.remove("invalid");
      }
    } else {
      if (element.trim() === "") {
        inputs[index].parentElement.classList.add("invalid");
        inputs[index].placeholder = "";
        p.innerText = `${inputs[index].dataset.id} cannot be empty`;
      } else {
        inputs[index].parentElement.classList.remove("invalid");
      }
    }
  });
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
