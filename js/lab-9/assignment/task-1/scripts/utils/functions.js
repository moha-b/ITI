function setEmployeeImage(employee) {
    let employeeImage = document.createElement("img");
    employeeImage.src = employee.profilePicture;
    employeeImage.alt = employee.name;
    return employeeImage;
}
function addRowToTable(table, label, value) {
    let row = table.insertRow();
    let labelCell = row.insertCell(0);
    let valueCell = row.insertCell(1);

    labelCell.textContent = label;
    valueCell.textContent = value;
}
const createProfileCard = (employee) => {
    let profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");
    profileCard.appendChild(setEmployeeImage(employee));

    let employeeName = document.createElement("h4");
    employeeName.textContent = employee.name;
    profileCard.appendChild(employeeName);

    let detailsTable = document.createElement("table");
    addRowToTable(detailsTable, "Gender", employee.gender);
    addRowToTable(detailsTable, "Salary", `$${employee.salary}`);
    addRowToTable(detailsTable, "Language", employee.language);

    profileCard.appendChild(detailsTable);

    document.body.appendChild(profileCard);
}