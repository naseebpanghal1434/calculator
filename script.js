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

    // let finalResultString = (getInputValue.value).replace(/[^\d-]/g, '');


    console.log(finalResultString);

    getInputValue.value = `${eval(finalResultString)}`;

    function setlabel(finalResultString) {
        fetchExpBox.innerText = `${finalResultString} = `;
    }
    setlabel(finalResultString);
}

function reset() {
    getInputValue.value = ""; 
    fetchExpBox.innerText = "";
}