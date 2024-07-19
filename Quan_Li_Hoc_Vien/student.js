var students= [];

function addStudent() {
    var id = document.getElementById("id").value;
    var fullname = document.getElementById("fullname").value;
    var date = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var grade = document.getElementById("grade").value;
    var img= document.getElementById("img").value;

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
    document.getElementById("img").value = "https://www.bing.com/images/search?view=detailV2&ccid=0WkPdYoL&id=8094722FF7C5D61F6ED1B99B9119336319B8810C&thid=OIP.0WkPdYoLe8uY4QzMBQH_vAHaKC&mediaurl=https%3a%2f%2fvnn-imgs-a1.vgcloud.vn%2ficdn.dantri.com.vn%2f2021%2f05%2f26%2fngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d1690f758a0b7bcb98e10ccc0501ffbc%3frik%3dDIG4GWMzGZGbuQ%26pid%3dImgRaw%26r%3d0&exph=1850&expw=1365&q=%e1%ba%a3nh+th%e1%ba%bb&simid=607997817483829162&FORM=IRPRST&ck=B4AC4C6ECADCCED256503DFFFA71A8D8&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0";
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
        row += "<td><img width='100px' height='100px' src='" + student.img + "'></td>";
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