let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    let inputBill = parseFloat(document.getElementById("bill-value").value);
    if(inputBill > 2000000){
        alert(`Bạn đã được giảm giá ${inputBill * 0.1}`);
        inputBill *= 0.9;
    }
    else {
        alert(`Bạn đã được giảm giá ${inputBill * 0.05}`);
        inputBill *= 0.95;
    }
    let infoElem = document.getElementById("ouput-bill");
    infoElem.innerHTML = `Bạn cần thanh toán ${inputBill.toLocaleString()} VND`;
});
