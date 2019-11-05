var button_half = document.getElementById("half-button");
button_half.addEventListener("click", halfThis);

function halfThis() {
  var inputNum = document.getElementById("half-input").value;
  var inputNum_half = inputNum / 2;

  if(inputNum){
    alert("Half of " + inputNum + " is " + inputNum_half);
  }
  else{
    alert("Please Enter a Number");
  }
};

var button_fortune = document.getElementById("fortune-button");
button_fortune.addEventListener("click", fortuneTeller);

function fortuneTeller() {
  var fortunes = ["Feel Enlightened", "Good Fortune is Coming", "You Miss ALL the Shots You Don't Take",
                  "No One Can Be You, Except You", "Your Turn is Coming Up"];
  var pick_fortune = fortunes[Math.floor(Math.random() * fortunes.length)]

  var inputName = document.getElementById("fortune-input").value;
  if(inputName != ""){
    console.log(pick_fortune);
  }
  else{
    console.log("Please Enter Your Name");
  }
};
