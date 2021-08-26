var resultField = $("#result");
var newId = $("#newid");
function insertNumber(number){
    var existingNumber =  resultField.val();
    var newNumber = resultField.val(existingNumber + number);

    //calculate
   
    //equal();
}


function clearResult(){
    resultField.val("")
    relod();
}
function equal(){
    var result = eval(resultField.val());
    resultField.val(result);
    document.getElementById('result').style.color = 'red';
}
function plusorminus(){
    var screen = resultField.val();
  resultField.val(screen *= -1)
}
function percentage(){
        var cal = eval(resultField.val());
        var newCal =  cal / 100;
        resultField.val(newCal);
  }


function deleteNumber(){
var presentValue = resultField.val();
if(presentValue!=''){
    resultField.val(presentValue.slice(0, -1));
}
}
function relod(){
    javascript:location.reload(true);
}

