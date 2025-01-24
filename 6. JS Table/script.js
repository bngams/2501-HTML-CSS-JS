const users = [
  { firstname: "Alice", lastname: "Smith", email: "alice.smith@example.com" },
  { firstname: "Bob", lastname: "Johnson", email: "bob.johnson@example.com" },
  { firstname: "Charlie", lastname: "Brown", email: "charlie.brown@example.com" },
];

document.addEventListener("DOMContentLoaded", () => {
  // TODO : Appeler la fonction populateTable
  // populateTable();
  fetchUsers();
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

async function fetchUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=10");
    const data = await response.json();

    // TODO : Parcourir les données récupérées et les insérer dans la collection users
    data.users.forEach(user => {
      // Ajoutez chaque utilisateur au tableau avec addRow
      addRow(user.firstName, user.lastName, user.email);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}
