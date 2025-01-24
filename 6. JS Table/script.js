const users = [
  { firstname: "Alice", lastname: "Smith", email: "alice.smith@example.com" },
  { firstname: "Bob", lastname: "Johnson", email: "bob.johnson@example.com" },
  { firstname: "Charlie", lastname: "Brown", email: "charlie.brown@example.com" },
];

document.addEventListener("DOMContentLoaded", () => {
  // TODO : Appeler la fonction populateTable
  populateTable();
});

function populateTable() {
  // TODO : Parcourir la collection `users` et appeler addRow pour chaque utilisateur
  users.forEach((user) => {
    addRow(user.firstname, user.lastname, user.email);
  })
}

function addRow(firstname, lastname, email) {
  // TODO : Ajouter une ligne au tableau avec les valeurs firstname, lastname, email
  const tableBody = document.querySelector("table tbody");

  const newRow = tableBody.insertRow();
  const firstNameCell = newRow.insertCell();
  firstNameCell.textContent = firstname;
  const lastNameCell = newRow.insertCell();
  lastNameCell.textContent = lastname;
  const emailCell = newRow.insertCell();
  emailCell.textContent = email;
}

