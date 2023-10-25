let btnSubmit = document.getElementById("btn-submit").addEventListener("click", () => {
    let inputHours = parseInt(document.getElementById("hours").value);
    let inputLevel = parseInt(document.getElementById("list-option").value);
    let result = 0;
    if(inputHours >= 400){
        switch (inputLevel){
            case 1:
                result = 1000;
                break;
            case 2:
                result = 2000;
                break;
            default:
                alert("Không hợp lệ");
                break;
        }
        document.getElementById("result").innerHTML = `Nhân viên được thưởng: ${result} $USD`;
    } else{
        document.getElementById("result").innerHTML = "Nhân viên không đủ số giờ làm";
    }
});
