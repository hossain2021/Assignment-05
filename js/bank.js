//Fucntion for gettiong input value and error handing;
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

//Function for Setting field innertext
function setFieldInnerText(FieldId, updateBalance){
    const getField = document.getElementById(FieldId);
    getField.innerText = updateBalance;
}

//Function for making display block
function makeDisplayBlock(id){
    const getErrorText = document.getElementById(id);
    getErrorText.style.display = "block";
}

//Function for making display none
function makeDisplayNone(id){
    const getErrorText = document.getElementById(id);
    getErrorText.style.display = "none";
}

//Income and expenses calculation and set to fields
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

//Saving and remaining balance calculation and set to fields
document.getElementById('saving-button').addEventListener('click', function(){
    const getSavingInput = document.getElementById('saving');
    const savingInputValue = getSavingInput.value;
    const savingPercentage = parseFloat(savingInputValue);
    if(isNaN(savingPercentage)){
        makeDisplayBlock('saving-error');
        makeDisplayNone('saving-error2');
        makeDisplayNone('saving-part');
    }
    else if(savingPercentage>100 || savingPercentage<0){
        makeDisplayNone('saving-error');
        makeDisplayBlock('saving-error2');
        makeDisplayNone('saving-part');
    }
    else{
        makeDisplayNone('saving-error');
        makeDisplayNone('saving-error2');
        makeDisplayBlock('saving-part');
        const balanceField = document.getElementById('balance');
        const balanceText = balanceField.innerText;
        const balanceAmount = parseFloat(balanceText);
        const saving = (balanceAmount/100)*savingPercentage;
        const remainingBalance = balanceAmount-saving;
        setFieldInnerText('saving-amount', saving);
        setFieldInnerText('remaining-balance', remainingBalance);
    }

})