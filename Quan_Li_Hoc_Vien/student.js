var students= [];

function addStudent() {
    var id = document.getElementById("id").value;
    var fullname = document.getElementById("fullname").value;
    var date = document.getElementById("date").value;
    var gender = document.getElementById("gender-select").value;
    var grade = document.getElementById("grade").value;
    var img= document.getElementById("img").value = "YOUR AVATAR";

    var student = {
        id: id,
        fullname: fullname,
        date: date,
        gender: gender,
        grade: grade,
        img: img,
    };

    students.push(student);

    displayStudents();

    document.getElementById("id").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("grade").value = "";
}

function displayStudents() {
    var tableBody = document.getElementById("list-student");
    tableBody.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var row = "<tr>";
        row += "<td>" + student.id + "</td>";
        row += "<td>" + student.fullname + "</td>";
        row += "<td>" + student.date + "</td>";
        row += "<td>" + student.gender + "</td>";
        row += "<td>" + student.grade + "</td>";
        row += "<td><img width='100px' height='100px' src='hocvien.jpg'></td>";
        row += "<td><button style='background-color: red; color: white' type='button' onclick='deleteStudent(" + i + ")'>Delete</button> <button style='background-color: orange; color: white' type='button' onclick='editStudent(" + i + ")'>Edit</button></td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    var student = students[index];
    document.getElementById("id").value = student.id;
    document.getElementById("fullname").value = student.fullname;
    document.getElementById("date").value = student.date;
    document.getElementById("gender").value = student.gender;
    document.getElementById("grade").value = student.grade;
    document.getElementById("img").value = student.img;
}