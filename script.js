const getInputValue = document.querySelector("#inputNumbersID");

const num1 =  () => getInputValue.value += 1;
const num2 =  () => getInputValue.value += 2;
const num3 =  () => getInputValue.value += 3;
const num4 =  () => getInputValue.value += 4;
const num5 =  () => getInputValue.value += 5;
const num6 =  () => getInputValue.value += 6;
const num7 =  () => getInputValue.value += 7;
const num8 =  () => getInputValue.value += 8;
const num9 =  () => getInputValue.value += 9;
const num0 =  () => getInputValue.value += 0;
const add = () => getInputValue.value += "+";
const sub = () => getInputValue.value += "-";
const mul = () => getInputValue.value += "*";
const div = () => getInputValue.value += "/";
const numDot = () => getInputValue.value += ".";


//Check and Validate Input Data In Input text Field.
getInputValue.addEventListener('input', function () { 

    let getInputdata = getInputValue.value;
    let validator = getInputdata.replace(/[0-9+*/.-]/g, '');
    
    if(validator == ""){
        return true;
    }else{
        let finalResultString = getInputdata.replace(/[&\=\\#,()$~'":?<>@{}A-Za-z]/g, '');
        getInputValue.value = `${finalResultString}`;
    }    
})



let fetchExpBox = document.querySelector(".expBox");
function result() {

    let finalResultString = getInputValue.value;
    let result = `${eval(finalResultString)}`

    if(result === "undefined"){
        fetchExpBox.innerText = `Invalid Expression`;
        getInputValue.value = ``;
    }else{
        getInputValue.value = `${result}`;
        fetchExpBox.innerText = `${finalResultString} `;
    }
}
function clearLastString(){
    getInputValue.value = (getInputValue.value).slice(0,-1);
    fetchExpBox.innerText = "";
}

function reset() {
    getInputValue.value = ""; 
    fetchExpBox.innerText = "";
}