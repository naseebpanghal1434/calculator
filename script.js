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



let fetchExpBox = document.querySelector(".expBox");
function result() {

    let finalResultString = (getInputValue.value).replace(/[&\=\\#,()$~'":?<>@{}A-Za-z]/g, '');

    if(finalResultString === ""){
        getInputValue.value = "";
        fetchExpBox.innerText = `Enter Valid Number`;
    }else{
        getInputValue.value = `${eval(finalResultString)}`;
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

getInputValue.addEventListener('keypress', function (e){
    let keyEntered = e.which || e.keyCode;
    if(keyEntered >47 && keyEntered <58) {
        return true;
    }else if(keyEntered == 190){
        return true;
    }else if(keyEntered >41 && keyEntered <44){
        return true
    }else if(keyEntered == 45){
        return true;
    }else if(keyEntered == 47){
        return true;
    }else if(keyEntered == 13){
        return result();
    }
    else{
        return fetchExpBox.innerText = `Enter Valid Number`;
    }
})