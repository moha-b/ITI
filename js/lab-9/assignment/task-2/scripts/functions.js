function addStudentToTable(students) {

    let studentTable = document.querySelector('.studentTable');

    [...studentTable.rows].forEach((e)=>e.remove());

    students.forEach((student, index) => {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");

        cell1.textContent = student.name;
        cell1.style.width = '100px';

        cell2.textContent = student.grade;

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&#128465;';
        deleteButton.style.cursor = 'pointer';
        deleteButton.addEventListener('click', function () {
            students.splice(index, 1);

            studentTable.deleteRow(row.rowIndex);
        });

        cell3.appendChild(deleteButton);
        row.style.backgroundColor = student.department;
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        studentTable.appendChild(row);
    });

}

function isValidStudentName(name, array) {
    return name.trim() !== "" && !array.some(student => student.name === name);
}

function isValidGrade(grade) {
    return !isNaN(grade) && grade >= 0 && grade <= 100 && grade.trim() !== "";
}