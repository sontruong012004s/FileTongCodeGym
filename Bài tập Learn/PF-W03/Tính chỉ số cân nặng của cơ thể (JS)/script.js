function check(){
    let valueWeight, valueHeight, BMI, result;
    valueWeight = parseFloat(document.getElementById("weight").value);
    valueHeight = parseFloat(document.getElementById("height").value);
    if(isNaN(valueWeight) || isNaN(valueHeight) || valueWeight <= 0 || valueHeight <= 0){
        document.getElementById("result").innerHTML = "Vui lòng nhập lại chỉ số hợp lệ";
        alert("Vui lòng nhập lại chỉ số hợp lệ");
    } else{
        BMI = valueWeight / (valueHeight ** 2);
        if(BMI < 16){
            result = "Gầy cấp độ III";
        } else if(BMI < 17){
            result = "Gầy cấp độ II";
        } else if(BMI < 18.5){
            result = "Gầy cấp độ I";
        } else if(BMI < 25){
            result = "Bình thường";
        } else if(BMI < 30){
            result = "Thừa cân";
        } else if(BMI < 35){
            result = "Béo phì cấp độ I";
        } else if(BMI < 40){
            result = "Béo phì cấp độ II";
        } else {
            result = "Béo phì cấp độ III";
        }
        document.getElementById("result").innerHTML = "Chỉ số BMI của bạn là " + BMI.toFixed(2) + ". Phân loại: " + result;
    }   
}
