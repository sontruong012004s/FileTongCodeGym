let namList = ["Anne", "Bella", "Chris", "Dan"];
// Duyệt từng phần tử trong mảng
document.write("Danh sách phần tử trong nameList <br>");

// for(let i = 0; i < namList.length; i++){
//     document.write(`${namList[i]} <br>`);
// }

for(let i in namList){
    document.write(`${namList[i]} <br>`);
}
