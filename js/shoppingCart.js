// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseFloat(caseNumberString);
    
//     const  newCaseNumber = previousCaseNumber + 1;

//     caseNumberField.value = newCaseNumber;  
//  })
 
 
//  document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseFloat(caseNumberString);
    
//     const  newCaseNumber = previousCaseNumber - 1;

//     caseNumberField.value = newCaseNumber; 
//  })


function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseFloat(caseNumberString);
    
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;  
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
   updateCaseNumber(true);
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false)
})


