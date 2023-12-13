window.addEventListener('load', function(){
    let inputNumbersToAdd=this.document.querySelectorAll("input[name=add]");
    let additionResultObject=this.document.querySelector("#addition_result");
    let inputNumbersToMultiplication=this.document.querySelectorAll("input[name=multiplication]");
    let multiplicationResultObject=this.document.querySelector("#multiplication_result");
    let input_1ToAdd=inputNumbersToAdd[0];
    let input_2ToAdd=inputNumbersToAdd[1];
    let input_1ToMultiplication=inputNumbersToMultiplication[0];
    let input_2ToMultiplication=inputNumbersToMultiplication[1];
    let result=0;
    input_1ToAdd.addEventListener("change", function(){
        result = parseInt(input_1ToAdd.value) + parseInt(input_2ToAdd.value);
        additionResultObject.innerText=result;
    });
    input_2ToAdd.addEventListener("change", function(){
        result = parseInt(input_1ToAdd.value) + parseInt(input_2ToAdd.value);
        additionResultObject.innerText=result;
    });
    input_1ToMultiplication.addEventListener("change", function(){
        result = parseInt(input_1ToMultiplication.value) * parseInt(input_2ToMultiplication.value);
        multiplicationResultObject.innerText=result;
    });
    input_2ToMultiplication.addEventListener("change", function(){
        result = parseInt(input_1ToMultiplication.value) * parseInt(input_2ToMultiplication.value);
        multiplicationResultObject.innerText=result;
    });
});