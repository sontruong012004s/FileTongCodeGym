function perimeter_acreage(){
    let perimeter, acreage, R;
    do{
        R = parseInt(prompt("Please enter the radius number (R)"));
        if(isNaN(R)){
            alert("Erro, Please re-enter the radius number (R)");
        }
    }while(isNaN(R));
        const PI = 3.14;
        perimeter = 2 * R * PI;
        acreage = R ** 2 * PI;
    document.getElementById("Perimeter_Acreage").innerHTML = "Perimeter = " + perimeter + "<br> Acreage = " + acreage;
}
    
