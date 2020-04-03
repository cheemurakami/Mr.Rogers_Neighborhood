function dispNum(number){
  var numArray = [];
  for(var i=0; i<=number; i++){
    numArray.push(i);
  } 
  numArray[0] = '"0"';
  return numArray;
};

function beep(number){
  var dispNumArray = dispNum(number);
  if(dispNumArray.includes(1)){
      dispNumArray[1] = '"Beep!"'
  }
  if(dispNumArray.includes(2)){
    dispNumArray[2] = '"Boop!"'
  }
  if(dispNumArray.includes(3)){
    dispNumArray[3] = '"Won\'t you be my neighbor?"'
  }
  return dispNumArray;
}

function overTen(number){
  var numOverTenArray = [];
  if (number >= 10){
    for(i=10; i<=number; i++){
      numOverTenArray.push(i);
    } 
  }
  var numStArray = numOverTenArray; //[10,11,12] '' してない
    for(var i = 0; i<numStArray.length; i++){
      var placeArray = numStArray[i].toString().split('')
      if((placeArray[0] == 1) && (placeArray[1] < 1)){
        numStArray[i] = '"Boop!"'
      }
    }
      
  return numStArray;
  }




$(document).ready(function(){
  $("#form-container").submit(function(event){
    event.preventDefault();
    var userInput = ($("#user-input").val());
    var answerArray = dispNum(userInput);
    var beepMessage = beep(userInput);
    var overTenMessage = overTen(userInput);
    

    $(".answer").text(beepMessage);
    console.log(answerArray);
    console.log(beepMessage);
    console.log(overTenMessage);
   
  });
});