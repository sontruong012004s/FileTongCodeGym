function birthday(){
    let date, months, years;
    years = parseInt(prompt("Nhập năm sinh của bạn"));
    months = parseInt(prompt("Nhập tháng sinh của bạn"));
    date = parseInt(prompt("Nhập ngày sinh của bạn"));
    document.getElementById("birthdayOutput").innerHTML = date + "-" + months + "-" + years;
}