function check(){
    let inputFruit = document.getElementById("fruit").value.trim();
    let price = 0;
    if(inputFruit === ""){
        document.getElementById("result").innerHTML = "Vui lòng nhập lại tên hoa quả!";
        return;
    } 
    switch (inputFruit){
        case "Ổi":
        case "Dưa Hấu":
            price = 20000;
            break;
        case "Táo":
        case "Xoài":
            price = 30000;
            break;
        case "Cam":
        case "Chôm Chôm":
            price = 40000;
            break;
        case "Măng Cụt":
            price = 50000;
            break;
        default:
            document.getElementById("result").innerHTML = "Không có tên trong danh sách. Vui lòng nhập lại tên hoa quả!";
            return;
    }
    document.getElementById("result").innerHTML = `Giá của ${inputFruit} là: ${price.toLocaleString()} VNĐ/kg`;
}
