function num1(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 1;
    console.log(getInputValue.value);
}
function num2(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 2;
    console.log(getInputValue.value);
}
function num3(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 3;
    console.log(getInputValue.value);
}
function num4(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 4;
    console.log(getInputValue.value);
}
function num5(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 5;
    console.log(getInputValue.value);
}
function num6(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 6;
    console.log(getInputValue.value);
}
function num7(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 7;
    console.log(getInputValue.value);
}
function num8(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 8;
    console.log(getInputValue.value);
}
function num9(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 9;
    console.log(getInputValue.value);
}
function num0(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += 0;
    console.log(getInputValue.value);
}
function add(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += "+";
    console.log(getInputValue.value);
}
function sub(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += "-";
    console.log(getInputValue.value);
}
function mul(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += "*";
    console.log(getInputValue.value);
}
function div(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value += "/";
    console.log(getInputValue.value);
}

function result(){
    const getInputValue = document.querySelector("#inputNumbersID");
    let resultString = getInputValue.value;
    resultString = resultString.match(/(\d+|[^\d]+)/g);
    // console.log(resultString);

    function calCulator(...resultString){
        let storeFirstNum = parseInt(resultString[0]);
        let storeSecondNum = parseInt(resultString[2]);
        let storeOp = resultString[1];
        let finalResult = 0;

        console.log();

        switch(storeOp){
            case "+": {
                finalResult = storeFirstNum + storeSecondNum;
                getInputValue.value = " ";
                getInputValue.value = finalResult;
                console.log(finalResult);
                break;
            }
            case "-": {
                finalResult = storeFirstNum - storeSecondNum;
                getInputValue.value = " ";
                getInputValue.value = finalResult;
                console.log(finalResult);
                break;
            }
            case "*": {
                finalResult = storeFirstNum * storeSecondNum;
                getInputValue.value = " ";
                getInputValue.value = finalResult;
                console.log(finalResult);
                break;
            }
            case "/": {
                finalResult = storeFirstNum / storeSecondNum;
                getInputValue.value = " ";
                getInputValue.value = finalResult;
                console.log(finalResult);
                break;
            }
        }
    }
    calCulator(...resultString);
}

function reset(){
    const getInputValue = document.querySelector("#inputNumbersID");
    getInputValue.value = "";
}