function dispNum(number){
  var numArray = [];
  for(var i=0; i<=number; i++){
    numArray.push(i);
  } 
  return numArray;
};

function beep(number){
  var dispNumArray = dispNum(number);
  for(var i = 0; i<dispNumArray.length; i++){
    if (dispNumArray.includes(1)){
      var index = dispNumArray.indexOf(1)
      dispNumArray[index] = '"Beep!"'
    } else if (dispNumArray.includes(2)){
      var index = dispNumArray.indexOf(2)
      dispNumArray[index] = '"Boop!"'
    } else if (dispNumArray.includes(3)){
      var index = dispNumArray.indexOf(3)
      dispNumArray[index] = '"Won\'t you be my neighbor?"'
    }
  }
  // if(dispNumArray.includes(1)){
  //     dispNumArray[1] = '"Beep!"'
  // }
  // if(dispNumArray.includes(2)){
  //   dispNumArray[2] = '"Boop!"'
  // }
  // if(dispNumArray.includes(3)){
  //   dispNumArray[3] = '"Won\'t you be my neighbor?"'
  // }
  return dispNumArray;
}

function overTen(number){
  var numOverTenArray = [];
  if (number >= 10){
    for(i=10; i<=number; i++){
      numOverTenArray.push(i);
    } 
  }
  var numStArray = numOverTenArray; 
    for(var i = 0; i<numStArray.length; i++){
      // var placeArray = numStArray[i].toString().split('')
      if(numStArray.includes(1)){
        numStArray[i] = '"Beep!"'
      } else if (numStArray.includes(2)){
        numStArray[i] = '"Boop!"'
      } else if (numStArray.includes(3)){
        numStArray[i] = '"waaa!"'
      }

      // if((placeArray[0] == 1) && (placeArray[1] < 1)){
      //   numStArray[i] = '"Beep!"'
      // }
      // if ((placeArray[0] == 1) && (placeArray[1] < 2)){
      //   numStArray[i] = '"Beep!"'
      // }
      // if ((placeArray[0] == 1) && (placeArray[1] < 3)){
      //   numStArray[i] = '"Boop!"'
      // } 
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
    console.log((answerArray));
    console.log(beepMessage);
    console.log(overTenMessage);
   
  });
});