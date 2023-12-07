let introduArray = [];
class Introdu{
    constructor(studentsCode, cccdCmnd, fullName, birthDays, genderList, classOption, birthPlace, number, email){
        this.studentsCode = studentsCode;
        this.cccdCmnd = cccdCmnd;
        this.fullName = fullName;
        this.birthDays = birthDays;
        this.genderList = genderList;
        this.classOption = classOption;
        this.birthPlace = birthPlace;
        this.number = number;
        this.email = email;
    }

    checkBirthdays(userBirthdate){
        let birthDate = new Date(userBirthdate);
        let currentDate = new Date();
        let eighteenYearsAgo = new Date(currentDate);
        eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);
        let isOverEighteen = birthDate <= eighteenYearsAgo;
        return isOverEighteen;
    }
}

function addIntrodu(){
    let inputStudentsCode = document.getElementById("students-code").value;
    let inputCccdCmnd = document.getElementById("cccd-cmnd").value;
    let inputFullName = document.getElementById("fullname").value;
    let inputBirthDays = document.getElementById("birthdays").value;
    let inputGender = document.querySelector('input[name="gender"]:checked')?.value;
    let inputClassOption = document.getElementById('class-option').value;
    let inputBirthPlace = document.getElementById("birthplace").value;
    let inputNumber = document.getElementById("number").value;
    let inputEmail = document.getElementById("email").value;
    if(introduArray.some(introdu => introdu.studentsCode === inputStudentsCode) && introduArray.some(introdu => introdu.cccdCmnd === inputCccdCmnd)){
        alert("Mã sinh viên và CCCD/CMND đã tồn tại. Vui lòng nhập mã khác."); 
        return;
    }
    else if(introduArray.some(introdu => introdu.studentsCode === inputStudentsCode)){
        alert("Mã sinh viên đã tồn tại. Vui lòng nhập mã khác."); 
        return;
    }
    else if(introduArray.some(introdu => introdu.cccdCmnd === inputCccdCmnd)){
        alert("Mã CCCD/CMND đã tồn tại. Vui lòng nhập mã khác."); 
        return;
    }
    else if(inputStudentsCode === "" || inputCccdCmnd === "" || inputFullName === "" || inputBirthDays === "" || (!inputGender) || (!inputClassOption) || inputBirthPlace === "" || inputNumber === ""){
        alert("Vui lòng nhập đầy đủ dữ liệu");
        return;
    }
    let newIntrodu = new Introdu(inputStudentsCode, inputCccdCmnd, inputFullName, inputBirthDays, inputGender, inputClassOption, inputBirthPlace, inputNumber, inputEmail);
    introduArray.push(newIntrodu);
    console.log(introduArray);
    updateIntrodu(introduArray);
    
    saveDataToLocal(); //Lưu local data
}

//xóa dữ liệu sau khi add xong
function resetFormFields(){
    ["students-code", "cccd-cmnd", "fullname", "birthdays", "class-option", "birthplace", "number", "email"].forEach(id => {
        document.getElementById(id).value = "";
    });
}
function updateIntrodu(data){
    document.getElementById("hr").style.display = "block";
    document.getElementById("student-list").style.display = "block";
    document.getElementById("student-table").style.display = "table";
    let tableElem = document.getElementById("student-table");
    tableElem.innerHTML = "";

    let newRowElem, info;
    resetFormFields();
    // Tạo hàng tiêu đề
    newRowElem = document.createElement("tr");
    for(let heading of ["STT", "Mã sinh viên", "CCCD/CMND", "Họ và tên", "Ngày sinh", "Giới tính", "Lớp", "Nơi sinh", "Số điện thoại", "Email", "Đủ điều kiện thi hay chưa", "Functions"]){
        info = document.createElement("th");
        info.innerText = heading;
        newRowElem.appendChild(info);
    }
    tableElem.appendChild(newRowElem);

    for(let i = 0; i < data.length; i++){
        let introdu = data[i];
        // Tạo hàng dữ liệu
        newRowElem = document.createElement("tr");
        //STT tăng lên 1
        info = document.createElement("td");
        info.innerText = i + 1;
        newRowElem.appendChild(info);
        // Thêm dữ liệu học sinh
        for(let prop of ["studentsCode", "cccdCmnd", "fullName", "birthDays", "genderList", "classOption", "birthPlace", "number", "email"]){
            info = document.createElement("td");
            info.innerText = introdu[prop];
            newRowElem.appendChild(info);
        }
        // Thêm trạng thái "Đủ điều kiện thi hay chưa"
        let isOverEighteen = introdu.checkBirthdays(introdu.birthDays);
        let conditionInfo = document.createElement("td");
        conditionInfo.innerText = isOverEighteen ? "Có" : "Không";
        newRowElem.appendChild(conditionInfo);

        //css button 
        function applyButtonStyles(button){
            button.style.display = "inline-block";
            button.style.fontSize = "15px";
            button.style.backgroundColor = "rgb(7, 190, 22)";
            button.style.color = "aliceblue";
            button.style.fontWeight = "bolder";
            button.style.borderRadius = "5px";
            button.style.border = "1px solid #000";
            button.style.textAlign = "center";
            button.style.margin = "2px";
            button.style.height = "25px";

            button.addEventListener("mouseover", function () {
                button.style.backgroundColor = "red";
            });

            button.addEventListener("mouseout", function () {
                button.style.backgroundColor = "rgb(7, 190, 22)";
            });
        }

        // tạo element
        let functionsCell = document.createElement("td");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        editButton.innerText = "Edit";
        deleteButton.innerText = "Delete";

        // gọi hàm css
        applyButtonStyles(editButton);
        applyButtonStyles(deleteButton);

        //add new element
        functionsCell.appendChild(editButton);
        functionsCell.appendChild(deleteButton);
        newRowElem.appendChild(functionsCell);

        tableElem.appendChild(newRowElem);

        //delete row
        deleteButton.addEventListener("click", function () {
            let row = this.closest("tr");
            let studentId = row.cells[1].innerText;
            let indexToDelete = introduArray.findIndex(student => student.studentsCode === studentId);
            introduArray.splice(indexToDelete, 1);
            updateIntrodu(introduArray);
            updateDisplayedIntrodu();
            localStorage.setItem('introduArray', JSON.stringify(introduArray));
                alert(`Đã xóa sinh viên có ID là: ${introdu.studentsCode}`);
        });
        //edit row
        editButton.addEventListener("click", function () {
            let row = this.closest("tr");
            handleEdit(row, introduArray, i);
        });
        displayedIntroduArray = data; // gán date vào mảng mới

    }
    document.getElementById("productCount").innerHTML = data.length;
}
let displayedIntroduArray = [];
function updateDisplayedIntrodu(){
    updateIntrodu(displayedIntroduArray);
}
//tìm kiếm
function searchIntrodu(event){
    event.preventDefault();
    let searchType = document.getElementById("search-type").value;
    let searchValue = document.getElementById("search-value").value.trim().toLowerCase();
    let found = false;
    //Báo lỗi nếu chưa chọn tìm kiếm
    if(searchType === "Select" && searchValue !== "") alert("Vui lòng chọn mục tìm kiếm");
    else if(searchType === "" || searchType === "Select" && searchValue === "") alert("Vui lòng chọn mục tìm kiếm và điền dữ liệu");
    else if(searchType !== "" && searchValue === ""){ 
        alert("Vui lòng điền dữ liệu"); 
        return;
    }
    else{
        let searchResults = [];
        for(let i = 0; i < introduArray.length; i++){
            let introdu = introduArray[i];
            let fieldValue = introdu[searchType];
            if(fieldValue !== undefined && fieldValue !== null){
                fieldValue = fieldValue.toString().trim().toLowerCase();
            }
            if(searchType === "genderList"){
                fieldValue = fieldValue.toLowerCase();
            }else if (searchType === "genderList"){
                fieldValue = fieldValue.toLowerCase();
            }else if (searchType === "conditionInfo"){
                let isOverEighteen = introdu.checkBirthdays(introdu.birthDays);
                fieldValue = isOverEighteen ? "có" : "không";
            }

            // Check for a match
            if(fieldValue === searchValue){
                searchResults.push(introdu);
                found = true;
            }
        }

        if(found){
            alert("Đã tìm thấy thông tin");
            //Hiển thị button reset
            document.getElementById("btn-reset").style.display = "inline-block";
            updateIntrodu(searchResults);
        }else alert("Không tìm thấy thông tin");
    }
}
function resetSearch(){
    document.getElementById("search-value").value = "";
    document.getElementById("search-value").placeholder = "Điền dữ liệu";
    document.getElementById("search-type").value = "Select";
    document.getElementById("btn-reset").style.display = "none";
    updateIntrodu(introduArray);
}
function handleEdit(row, introduArray){
    let studentId = row.cells[1].innerText;
    let student = introduArray.find(student => student.studentsCode === studentId);
    if(student){
        document.getElementById("students-code").value = student.studentsCode;
        document.getElementById("cccd-cmnd").value = student.cccdCmnd;
        document.getElementById("fullname").value = student.fullName;
        document.getElementById("birthdays").value = student.birthDays;
        document.getElementById("class-option").value = student.classOption;
        document.getElementById("birthplace").value = student.birthPlace;
        document.getElementById("number").value = student.number;
        document.getElementById("email").value = student.email;
        let genderRadioButtons = document.querySelectorAll('input[name="gender"]');
        for(let radio of genderRadioButtons){
            if(radio.value === student.genderList){
                radio.checked = true;
            } else{
                radio.checked = false;
            }
        }
        let submitButton = document.getElementById("btn-submit");
        submitButton.innerText = "Lưu";
        submitButton.onclick = function () {
            saveEditedIntrodu(introduArray.indexOf(student));
        };
    }
}
function saveEditedIntrodu(index){
    let editedIntrodu = introduArray[index];
    let editedStudentsCode = document.getElementById("students-code").value;
    let editedIntroduCccdCmnd = document.getElementById("cccd-cmnd").value;
    let editedIntroduFullName = document.getElementById("fullname").value;
    let editedIntroduBirthDays = document.getElementById("birthdays").value;
    let editedIntroduClassOption = document.getElementById("class-option").value;
    let editedIntroduBirthPlace = document.getElementById("birthplace").value;
    let editedIntroduNumber = document.getElementById("number").value;
    let editedIntroduEmail = document.getElementById("email").value;
    let genderRadioButtons = document.querySelectorAll('input[name="gender"]');
    
    if(editedStudentsCode === "" || editedIntroduCccdCmnd === "" || editedIntroduFullName === "" || editedIntroduBirthDays === "" || (!genderRadioButtons) || editedIntroduClassOption === "" || editedIntroduBirthPlace === "" || editedIntroduNumber === ""){
        alert("Vui lòng nhập đầy đủ dữ liệu");
        return;
    } else if(introduArray.some(introdu => introdu.studentsCode === editedStudentsCode && introdu !== editedIntrodu) && introduArray.some(introdu => introdu.cccdCmnd === editedIntroduCccdCmnd && introdu !== editedIntrodu)){
        alert("Mã sinh viên và CCCD/CMND đã tồn tại. Vui lòng nhập mã khác.");
        return;
    } else if(introduArray.some(introdu => introdu.studentsCode === editedStudentsCode && introdu !== editedIntrodu)){
        alert("Mã sinh viên đã tồn tại. Vui lòng nhập mã khác.");
        return;
    } else if(introduArray.some(introdu => introdu.cccdCmnd === editedIntroduCccdCmnd && introdu !== editedIntrodu)){
        alert("Mã CCCD/CMND đã tồn tại. Vui lòng nhập mã khác.");
        return;
    }
    for(let radio of genderRadioButtons){
        if(radio.checked){
            editedIntrodu.genderList = radio.value;
            break;
        }
    }
    editedIntrodu.studentsCode = editedStudentsCode;
    editedIntrodu.cccdCmnd = editedIntroduCccdCmnd;
    editedIntrodu.fullName = editedIntroduFullName;
    editedIntrodu.birthDays = editedIntroduBirthDays;
    editedIntrodu.classOption = editedIntroduClassOption;
    editedIntrodu.birthPlace = editedIntroduBirthPlace;
    editedIntrodu.number = editedIntroduNumber;
    editedIntrodu.email = editedIntroduEmail;

    resetFormFields();
    let submitButton = document.getElementById("btn-submit");
    submitButton.innerText = "Cập nhật";
    submitButton.onclick = addIntrodu;
    updateDisplayedIntrodu();
    localStorage.setItem('introduArray', JSON.stringify(introduArray));
    saveDataToLocal();
}
function updatePlaceholder(){
    let searchType = document.getElementById("search-type");
    let searchValue = document.getElementById("search-value");
    let selectedOption = searchType.options[searchType.selectedIndex].value;
    switch(selectedOption){
        case "studentsCode":
            searchValue.placeholder = "Điền mã sinh viên";
        break;
        case "cccdCmnd":
            searchValue.placeholder = "Điền CCCD/CMND";
            
        break;
        case "fullName":
            searchValue.placeholder = "Điền họ và tên";
        break;
        case "genderList":
            searchValue.placeholder = "Điền giới tính";
        break;
        case "classOption":
            searchValue.placeholder = "Điền lớp";
        break;
        case "birthPlace":
            searchValue.placeholder = "Điền nơi sinh";
        break;
        case "conditionInfo":
            searchValue.placeholder = "Điền Có hoặc Không";
        break;
        default:
            searchValue.placeholder = "Điền dữ liệu";
        break;
    }
}
//Tạo local data
function loadDataFromLocal(){
    let savedData = localStorage.getItem('introduArray');
    if(savedData){
        let savedIntroduArray = JSON.parse(savedData);
        introduArray = savedIntroduArray.map(data => {
            let introdu = new Introdu(
                data.studentsCode,
                data.cccdCmnd,
                data.fullName,
                data.birthDays,
                data.genderList,
                data.classOption,
                data.birthPlace,
                data.number,
                data.email
            );
            return introdu;
        });
        updateIntrodu(introduArray);
    }
}
loadDataFromLocal();
function saveDataToLocal(){
    localStorage.setItem('introduArray', JSON.stringify(introduArray));
}
