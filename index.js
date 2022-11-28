const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton =document.querySelector("#check-button");
const showOutput = document.querySelector("#output");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50,20,10,5,1];

checkButton.addEventListener("click", function checkError(){
    
    if(cashGiven.value==''||billAmount.value == ''){
    showOutput.innerText = 'Enter both values';
    }else{
        validateBillAndCashAmount();
    }
    
});

function validateBillAndCashAmount(){
    hideMessage();
    //checking the bill is greater than zero

    const billamount = Number(billAmount.value);
    const cashgiven = Number(cashGiven.value);

    if (cashgiven >0 && billamount >0) {
        //chck bill is less than cash or not, if less then pay the bill

        if( cashgiven >= billamount){

            const amountToBeReturn = cashgiven - billamount;
            calculateChange(amountToBeReturn);
        }else{

            //if bill is more than cash
            showMessage("Do you want to wash dishes !!");
        }
    } 
    else{

        //if bill is zero or negative
        showMessage("Invalid Bill Amount");
    }
}

function calculateChange(amountToBeReturn){
    // for(let i=0; i< availableNotes.length; i++){
    //     var numberOfNotes = Math.trunc(amountToBeReturned/ availableNotes[i]);
    //     amountToBeReturned %= availableNotes[i];
    //     noOfNotes[i].innerText = noOfNotes;
    // }
    showOutput.innerText = 'Amount to be return is: ' + amountToBeReturn;

    for(let i=0; i< availableNotes.length; i++){

        const numberOfNotes = Math.trunc(amountToBeReturn/ availableNotes[i]);
        amountToBeReturn = amountToBeReturn % availableNotes[i];
        //numberOfNotes[i].innerText = numberOfNotes; 
        numberOfNotes[i].innerText = noOfNotes;
    }
}

function hideMessage(){
    message.style.display ="none";
}

function showMessage(msg){
        message.style.display="block";
        message.innerText =msg;
}




