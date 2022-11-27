const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton =document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50,20,10,5,1];

checkButton.addEventListener("click", function validatebillAndCashAmount(){
    hideMessage();
    if (Number(billAmount.value > 0)){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned = (Number(cashGiven.value)  - Number(billAmount.value));
            calculateChange(amountToBeReturned);
        }else{
            showMessage("Do you want to wash dishes !!");
        }
    } h
    else{
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned){
    // for(let i=0; i< availableNotes.length; i++){
    //     var numberOfNotes = Math.trunc(amountToBeReturned/ availableNotes[i]);
    //     amountToBeReturned %= availableNotes[i];
    //     noOfNotes[i].innerText = noOfNotes;
    // }
    for(let i=0; i< availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/ availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        numberOfNotes[i].innerText = numberOfNotes 
    }
}

function hideMessage(){
    message.style.display ="none";
}

function showMessage(msg){
        message.style.display="block";
        message.innerText =msg;
}




