

function dispNum(number){
  var numArray = [];
  for(i=0; i<=number; i++){
   numArray.push(i);
  };
  numArray[1] = '"Beep!"'
  numArray[2] = '"Boop!"'
  numArray[3] = '"Won\'t you be my neighbor?"'
  return numArray;
};

$(document).ready(function(){
  $("#form-container").submit(function(event){
    event.preventDefault();
    var userInput = $("#user-input").val();
    if(userInput == 1){
      userInput = "Beep!"
    } else if (userInput == 2){
      userInput = "Boop1"
    }

    var answerArray = dispNum(userInput);
   
    $(".answer").text(answerArray);
    console.log(answerArray)
  });
});