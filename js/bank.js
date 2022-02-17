
function getInputNumber(inputId, errorId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputNumber = parseFloat(inputValue);
   if(isNaN(inputNumber)){
       makeDisplayBlock(errorId);
   }
   else if(inputNumber<0){       
    const errorField = document.getElementById(errorId);
    errorField.style.display = "block";
    errorField.innerText = "Please input positive number";    
   }
   else{
     makeDisplayNone(errorId);
    return inputNumber;
   }
}

function setFieldInnerText(FieldId, updateBalance){
    const getField = document.getElementById(FieldId);
    getField.innerText = updateBalance;
}

function makeDisplayBlock(id){
    const getErrorText = document.getElementById(id);
    getErrorText.style.display = "block";
}

function makeDisplayNone(id){
    const getErrorText = document.getElementById(id);
    getErrorText.style.display = "none";
}
document.getElementById('calculate').addEventListener('click', function(){
    const income = getInputNumber('income', 'income-error');
    const food = getInputNumber('food', 'food-error');
    const rent = getInputNumber('rent', 'rent-error');
    const clothes = getInputNumber('clothes', 'clothes-error');
    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;

    if(totalExpenses>income){
        makeDisplayBlock('higher-expense-error');
        makeDisplayNone('not-number-error');
        makeDisplayNone('calculation-part');
    }
    else if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)){
        makeDisplayBlock('not-number-error');
        makeDisplayNone('higher-expense-error');
        makeDisplayNone('calculation-part');
    }
    else{
        makeDisplayNone('higher-expense-error');
        makeDisplayNone('not-number-error');
        makeDisplayBlock('calculation-part');
        setFieldInnerText('total-expenses', totalExpenses)
        setFieldInnerText('balance', balance);
    }
})


document.getElementById('saving-button').addEventListener('click', function(){
    console.log(7);
})