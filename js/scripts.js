function dispNum(number){
  var numArray = [];
  for(var i=0; i<=number; i++){
    if(i === 1) {
       numArray.push("Beep!")
    } else {
      numArray.push(i);
    }
  } 
  return numArray;
};

// function beep(number){
//   var dispNumArray = [];
//   for(var i = 0; i<number; i++){
//     if (i === 1){
//       var index = dispNumArray.indexOf(1)
//       dispNumArray[index] = '"Beep!"'
//     } else if (i === 2){
//       var index = dispNumArray.indexOf(2)
//       dispNumArray[index] = '"Boop!"'
//     } else if (i === 3){
//       var index = dispNumArray.indexOf(3)
//       dispNumArray[index] = '"Won\'t you be my neighbor?"'
//     }
//   }
//   return dispNumArray;
// }

function beep(number){
  var dispNumArray = [];
  for(var i = 0; i<=number; i++){
    console.log(i)
    if (i.toString().indexOf(3) !== -1){
      dispNumArray.push('"Won\'t you be my neighbor?"')
    } else if (i.toString().indexOf(2) !== -1){
      dispNumArray.push('"Boop!"')
    } else if (i.toString().indexOf(1) !== -1){
      dispNumArray.push('"Beep!"')
    } else {
      dispNumArray.push(i)
    }
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
  var numStArray = numOverTenArray; 
    for(var i = 0; i<numStArray.length; i++){
      var placeArray = numStArray[i].toString().split('')
      if(placeArray.includes(1)){
        placeArray[i] = '"Beep!"'
      } else if (numStArray.includes(2)){
        numStArray[i] = '"Boop!"'
      } else if (numStArray.includes(3)){
        numStArray[i] = '"waaa!"'
      }
    }
      
  return placeArray;
  }




$(document).ready(function(){
  $("#form-container").submit(function(event){
    event.preventDefault();
    var userInput = parseInt(($("#user-input").val()));
    var answerArray = dispNum(userInput);
    var beepMessage = beep(userInput);
    var overTenMessage = overTen(userInput);
    

    $(".answer").text(beepMessage);
    console.log((answerArray));
    console.log(beepMessage);
    console.log(overTenMessage);
   
  });
});