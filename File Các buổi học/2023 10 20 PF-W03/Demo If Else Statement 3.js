let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    let inputBill = parseFloat(document.getElementById("bill-value").value);
    if(inputBill >= 4000000){
        alert(`Bạn được giảm ${inputBill * 0.15} VNĐ`);
        inputBill *= 0.85;
    } else if (inputBill >= 2500000){
            alert(`Bạn được giảm ${inputBill * 0.2} VNĐ`);
            inputBill *= 0.8;
        } else if(inputBill >= 1500000){
                alert(`Bạn được giảm ${200000} VNĐ`);
                inputBill -= 200000;
            } else if{
                alert("Đơn hàng của bạn không được giảm giá");
            } 
            
        });
        let infoElem = document.getElementById("ouput-bill");
        infoElem.innerHTML = `Bạn cần thanh toán ${inputBill} VND`;
