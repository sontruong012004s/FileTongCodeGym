let titleElem = document.getElementById("title"); // truy vấn html đến ID

console.log(titleElem);

console.log(titleElem.innerHTML); // truy vấn nội dung (inner HTML) của element đó

titleElem.innerHTML = "Average Mark Calculation"; // thay đổi nội dung
titleElem.style.color = "red";

// document.getElementById(titleElem) = innerHTML = "Hello";


// thêm element mới vào students-list
// tạo thẻ li mới
let newLiElem = document.createElement("li");
// tạo nội dung cho element
newLiElem.innerHTML = "3. Evan -9 -8 -8.5";

// thêm phần tử mới ul
let studentsListElem = document.getElementById("students-list");
studentsListElem.appendChild(newLiElem);



// xóa form element

let remoteStudents = document.getElementById("students-form");
remoteStudents.remove();