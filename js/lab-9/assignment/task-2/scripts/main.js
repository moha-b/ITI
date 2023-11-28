window.addEventListener('load', function () {
    // Student fields
    let students = [];
    const studentNameInput = document.querySelector('input[name="studentName"]');
    const studentGradeInput = document.querySelector('input[name="studentGrade"]');

    const addButton = document.querySelector('input[type="button"]');

    const sortSelect = document.querySelectorAll('select')[0];

    const filterSelect = document.querySelectorAll('select')[1];

    addButton.onclick = function (event) {
        event.preventDefault();
        const departmentRadioButton = document.querySelector('input[name="Department"]:checked');
        if(departmentRadioButton === null){
            alert("Choose a Department");
            return;
        }
        if (!isValidStudentName(studentNameInput.value,students)) {
            alert("Please enter a valid and unique student name.");
            return;
        }
        if (!isValidGrade(studentGradeInput.value)) {
            alert("Please enter a valid student grade between 0 and 100.");
            return;
        }

        let student = {
            name: studentNameInput.value,
            grade: studentGradeInput.value,
            department: departmentRadioButton.value,
        };

        students.push(student);
        addStudentToTable(students);
    }
    filterSelect.addEventListener('change', function () {
        const selectedFilter = this.value;
        filterTable(selectedFilter);
        console.log("Filtering");
    });
    sortSelect.addEventListener('change', function () {
        const selectedSort = this.value;
        sortTable(selectedSort);
        console.log("Sorting");
    });
    const filterTable = (selectedFilter) => {
        let filteredStudents = [];

        if (selectedFilter === 'fail') {
            filteredStudents = students.filter(student => student.grade < 60);
            console.log(filteredStudents);
        } else if (selectedFilter === 'success') {
            filteredStudents = students.filter(student => student.grade >= 60);
        } else {
            filteredStudents = students;
        }
        addStudentToTable(filteredStudents);
    }
    const sortTable = (selectedSort) => {
        let sortedStudents = [];

        if (selectedSort === 'name') {
            sortedStudents = students.slice().sort((a, b) => a.name.localeCompare(b.name));
        } else if (selectedSort === 'grade') {
            sortedStudents = students.slice().sort((a, b) => b.grade - a.grade);
        } else {
            sortedStudents = students;
        }

        addStudentToTable(sortedStudents);
    }
});