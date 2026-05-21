let students = JSON.parse(localStorage.getItem("students")) || [
    { name: "Ana", course: "BSIT", year: 2 },
    { name: "Juan", course: "BSCS", year: 2 }
];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function displayStudents() {
    let output = document.getElementById("output");
    if (!output) return;

    output.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        output.innerHTML += `
            <p>
                ${students[i].name} - ${students[i].course} - Year ${students[i].year}
            </p>
        `;
    }

    let names = students.map(s => s.name);
    output.innerHTML += `<p><i>All Students: ${names.join(", ")}</i></p>`;
}

function addSample() {
    students.push({ name: "Maria", course: "BSIT", year: 2 });
    saveStudents();
    displayStudents();
}

function removeFirst() {
    students.shift();
    saveStudents();
    displayStudents();
}

function searchStudent() {
    let names = students.map(s => s.name);

    if (names.includes("Ana")) {
        alert("Ana is in the list!");
    } else {
        alert("Ana not found.");
    }
}

function saveStudent() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let year = document.getElementById("year").value;

    if (!name || !course || !year) {
        alert("Please fill all fields!");
        return;
    }

    students.push({ name: name, course: course, year: year });

    saveStudents();
    alert("Student added!");
}

function modifyStudent() {
    if (students.length === 0) {
        alert("No students to modify!");
        return;
    }

    let updatedStudent = {
        ...students[0],
        year: 3
    };

    students.splice(0, 1, updatedStudent);
    saveStudents();
    displayStudents();
}

displayStudents();