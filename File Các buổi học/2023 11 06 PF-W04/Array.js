// Khai báo mảng
let nameList = ["Anne", "Belle", "Chris", "Dan"];
let ageList = [19, 21, 20,  18];
let averageMarkList = [6.5, 7.5, 6.2, 7.2];
let genderList = [false, false, true, true];
let hobbyList = [[], ["music", "book"], ["badminton", "swimming"], ["movie"]];
// console.log(nameList);
// console.log(nameList.length);
document.write(`Name list of student: ${nameList} <br>`);
document.write(`Age list of student: ${ageList} <br><br>`);
// Kiểm tra kiểu dữ liệu
document.write(`Kiểu dữ liệu của mảng: ${typeof(nameList)} <br>`);

//Truy vấn phần tử trong mảng
document.write(`Phần tử thứ ba trong namelist: ${nameList[2]}`);
document.write("<br><br><br>")
//Chris --> Colle
// Thay thế giá trị phần tử trong mảng
document.write(`Mảng ban đầu: ${nameList}`);
nameList[2] = "Colle"; // Thay đổi giá trị tại index số 2
document.write(`<br><br> Mảng sau khi thay đổi giá trị: ${nameList}`);