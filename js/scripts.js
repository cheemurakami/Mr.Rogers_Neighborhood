function dispNum(number){
  var numArray = [];
  for(i=0; i<=number; i++){
    numArray.push(i);
  }
  return numArray;
};

function beep(number){
  var dispNumArray = dispNum(number);
    if(dispNumArray.includes(1)){
      dispNumArray[1] = '"Beep!"'
    } else if (dispNumArray.includes(2)){
      console.log('hi')
      dispNumArray[1] = '"Beep!"'
      dispNumArray[2] = '"Boop!"'
    } else if (dispNumArray.includes(3)){
      dispNumArray[1] = '"Beep!"'
      dispNumArray[2] = '"Boop!"'
      dispNumArray[3] = '"Won\'t you be my neighbor?"'
    }
  return dispNumArray;
}

$(document).ready(function(){
  $("#form-container").submit(function(event){
    event.preventDefault();
    var userInput = $("#user-input").val();
    var answerArray = dispNum(userInput);
   
    var beepMessage = beep(userInput);

    $(".answer").text(beepMessage);
    console.log(answerArray);
    console.log(beepMessage);
  });
});