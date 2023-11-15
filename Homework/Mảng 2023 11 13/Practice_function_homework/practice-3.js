// Viết hàm solveEquation() để giải phương trình 
// bậc nhất ax + b = 0 với a và b là 2 tham số đầu vào.
function solveEquation(a, b){
    if(a === 0 && b === 0){
        console.log("Phương trình có vô số nghiệm");
    } else if(a === 0){
        console.log("Phương trình vô nghiệm");
    } else{
        const x = -b / a;
        console.log(`Nghiệm của phương trình là x = ${x}`);
    }
}
solveEquation(2, -4);
solveEquation(0, 0);
solveEquation(0, -4);