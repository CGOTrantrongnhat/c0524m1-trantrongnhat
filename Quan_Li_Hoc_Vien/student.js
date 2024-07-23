let students = [];


function addStudent() {
// Hàm Này Truy Xuất các giá trị của các trường (id,fullnaame,date,gender,grade,file,profilepath)
//Nó kiểm tra xem đã có một học sinh có cùng trong mảng hay chưa
// Nếu có, nó sẽ hiển thị một thông báo cảnh báo ID Đã Tồn Tại
//Nó tạo ra một đối tượng mới với các giá trị được truy xuất và thêm nó vào mảng studen,studens
//Nó gọi hàm để cập nhật bảng displaystudens() và đặt lại các trường biểu mẫu thành rỗng


    let id = document.getElementById("id").value;
    let fullname = document.getElementById("fullname").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender-select").value;
    let grade = document.getElementById("grade").value;
    let files = document.getElementById("InputImg").files;
    let ProfilePath = files.length > 0 ? files[0].name : "";

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            alert("ID Đã Tồn Này Đã Tồn Tại");

            return;
        }

    }

    let student = {
        id,
        fullname,
        date,
        gender,
        grade,
        img: ProfilePath,
    };

    students.push(student);

    displayStudents();

    document.getElementById("id").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("gender-select").value = "";
    document.getElementById("grade").value = "";
}

function displayStudents() {
//hàm này Nó được tham chiếu đến  ID "list-student",tbody
//và xóa nội dung của tbody Nó lặp qua mảng và tạo một hàng bảng mới cho mỗi học sinh
    let tableBody = document.getElementById("list-student");
    tableBody.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let line = "<tr>";
        line += "<td>" + student.id + "</td>";
        line += "<td>" + student.fullname + "</td>";
        line += "<td>" + student.date + "</td>";
        line += "<td>" + student.gender + "</td>";
        line += "<td>" + student.grade + "</td>";
        line += "<td><img width='50px' height='50px' src='" + student.img + "'></td>";
        line += "<td><button style='color: #ff3333' type='button' onclick='deleteStudent(" + +(i) + ")'>Delete</button> <button style='color: ' type='button' onclick='editStudent(" + +(i) + ")'>Edit</button></td>";
        line += "</tr>";
        tableBody.innerHTML += line;
    }
}

function deleteStudent(index) {
// Hàm này chỉ lấy mục học sinh bị xóa khỏi mảng studens
    //sau đó xác nhận với người dùng sure chưa
    // nếu đươợc nó sẽ xóa bằng sudents.splice
    //sau đó hiển th học sinh đã bị xóa với ID
    if (confirm("Bạn có chắc chắn muốn xóa học viên với ID: [ "+ students[index].id + " ] ?")) {
        let StudentDelete = students[index].id;
        students.splice(index, 1);
        displayStudents();
        alert("Học viên có ID [ " + StudentDelete + " ] Đã Được Xóa");
    }
}

function editStudent(index) {
    // hàm này lây mục học sinh từ mảng studens
    //Nó truy xuất các giá trị của học sinh hiện tại và cập nhật các trường biểu mẫu với các giá trị đó
    let student = students[index];
    document.getElementById("id").value = student.id;
    document.getElementById("fullname").value = student.fullname;
    document.getElementById("date").value = student.date;
    document.getElementById("gender-select").value = student.gender;
    document.getElementById("grade").value = student.grade;
    document.getElementById("img").value = student.img;
}