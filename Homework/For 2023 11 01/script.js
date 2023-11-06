// Bài 1
let btnSubmit1 = document.getElementById("btn-submit1").addEventListener("click", () => {
    let inputNumber_n = parseInt(document.getElementById("number1").value);
    let tongChan = 0;
    for(let i = 0; i <= inputNumber_n; i++){
        if(i %2 === 0){
            tongChan += i;
        }
    }
    document.getElementById("result").innerHTML = "Tổng các số chẵn từ 0 đến " + inputNumber_n + " là: " + tongChan;
});



// Bài 2
let btnSubmit2 = document.getElementById("btn-submit2").addEventListener("click", () => {
    // n! = n*(n - 1)*(n - 2)*....1
    let inputNumber_n = parseInt(document.getElementById("number2").value);
    let giaiThua = 1;
        for(let i = 1; i <= inputNumber_n; i++){
            giaiThua *= i;
        }
        document.getElementById("result2").innerHTML = `${inputNumber_n}! = ${giaiThua}`;
});



// Bài 3
let btnSubmit3 = document.getElementById("btn-submit3").addEventListener("click", () => {
    let number_first = parseInt(document.getElementById("number_first").value);
    let inputNumber_n = parseInt(document.getElementById("number_3").value);
    let result = "";
    for(let i = 0; i <= 10; i++){
        result += number_first + i * inputNumber_n + " ";
    }
    document.getElementById("result3").innerHTML = result;
});



// Bài 4
let btnSubmit4 = document.getElementById("btn-submit4").addEventListener("click", () => {
    let inputNumber_n = parseInt(document.getElementById("number_4").value);
    let outputResult = "";
    for(let i = 1; i <= 10; i++){
        let result = inputNumber_n * i;
        outputResult += `${inputNumber_n} x ${i} = ${result} <br>`;
    }
    document.getElementById("result4").innerHTML = outputResult;
});


// Bài 5
let btnSubmit5 = document.getElementById("btn-submit5").addEventListener("click", () => {
    let inputNumber_n = parseInt(document.getElementById("number_5").value);
    let sum = 0;
    for(var i = 1; i < inputNumber_n; i++){
        if (inputNumber_n % i === 0){
            sum += i;
        }
    } if(sum === inputNumber_n && inputNumber_n !== 0){
        document.getElementById('result5').innerHTML = `${inputNumber_n} là số hoàn hảo`;
    } else{
        document.getElementById('result5').innerHTML = `${inputNumber_n} không phải là số hoàn hảo`;
    }
});
