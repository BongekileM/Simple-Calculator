function basicCalculator(operation,num1,num2) {
    switch(operation) {
        case "add":
            return num1+num2;
            break;
        case "substract":
            return num1-num2;
            break;
        case "multiply":
            return num1*num2;
            break;
        case "divide":
            return num1/num2;
            break;
        default:
            console.log("unknown operation or invalid number ");
            break;
    }
    
}
console.log(basicCalculator("add",50,10));
console.log(basicCalculator("substract",50,10));
console.log(basicCalculator("divide",50,10));
console.log(basicCalculator("multiply",50,10));
console.log(basicCalculator("testError",8,8));
