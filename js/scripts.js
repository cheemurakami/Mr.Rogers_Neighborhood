function dispNum(number){
  var numArray = [];
  for(i=0; i<=number; i++){
   numArray.push(i);
  }
  return numArray;
}



$(document).ready(function(){
  $("#form-container").submit(function(event){
    event.preventDefault();
    var userInput = $("#user-input").val();
    var answer = dispNum(userInput);
    $(".answer").text(answer);
  });
});