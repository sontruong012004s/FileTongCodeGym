function Convert(){
    let valueAmount, FromCurrency, ToCurrency, Result, Text, exchangeRate;
    valueAmount =  parseInt(document.getElementsByName("amount")[0].value);
    FromCurrency = document.getElementById("From-Currency").value;
    ToCurrency = document.getElementById("To-Currency").value;
    if(isNaN(valueAmount)){
        alert("ERRO!");
        return;
    } else{
        if(FromCurrency === ToCurrency){
            alert("ERRO!");
            return;
        } else{
            if(FromCurrency === "VietNam" && ToCurrency === "USD"){
                Text = " USD"
                exchangeRate = valueAmount / 23000;
                Result = exchangeRate + Text;
            } else if(FromCurrency === "USD" && ToCurrency === "VietNam"){
                Text = " VND"
                exchangeRate = valueAmount * 23000;
                Result = exchangeRate.toLocaleString() + Text;
            } else{
                alert("ERRO!, Unsupported currency conversion.");
                return;
            }
        }
    }
    document.getElementById("result").innerHTML = "Result: " + Result;
}