function calculate_interest(){
    let amount, interest, years, calculate, principal;
    do{
        amount = parseFloat(prompt("Please enter Amount"));
        interest = parseFloat(prompt("Please enter Interest"));
        years =  parseFloat(prompt("Please enter Years"));
        if(isNaN(amount) || isNaN(interest) || isNaN(years)){
            alert("Erro, Please re-enter a value");
        }
    } while(isNaN(amount) || isNaN(interest) || isNaN(years));
    calculate = amount * ((interest / 100) * years);
    principal = amount + calculate;
    document.getElementById("Calculate_Interest").innerHTML = "Sau " + years + " năm tiền cả gốc lẫn lãi là: " + principal + " (Triệu đồng)";

}