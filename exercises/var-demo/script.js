const form = document.getElementById("personForm");
const validationMessage = document.getElementById("validationMessage");

let validationStatus = "pending";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dni = document.getElementById("dni").value;
  const name = document.getElementById("name").value;

  const dniIsValid = dni.trim() !== "" && !Number.isNaN(Number(dni));
  const nameIsValid = name.trim() !== "" && Number.isNaN(Number(name));

  const formIsValid = dniIsValid && nameIsValid;

  validationStatus = formIsValid ? "valid" : "invalid";

  validationMessage.textContent = Estado: ${validationStatus};

  console.log("DNI:", dni);
  console.log("Nombre:", name);
  console.log("Estado:", validationStatus);
});