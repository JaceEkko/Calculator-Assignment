//HALF BUTTON FUNCTIONALITY
var button_half = document.getElementById("half-button");
button_half.addEventListener("click", halfNumber);

function halfNumber() {
  var inputNum = document.getElementById("half-input").value;
  var inputNum_half = inputNum / 2;

  if(inputNum){ //there is a value in this input
    alert("Half of " + inputNum + " is " + inputNum_half);
  }
  else{
    alert("Please Enter a Number");
  }
};

//FORTUNE BUTTON FUNCTIONALITY
var button_fortune = document.getElementById("fortune-button");
button_fortune.addEventListener("click", fortune);

function fortune() {
  var fortunes = [" Feel Enlightened", " Good Fortune is Coming", " You Miss ALL the Shots You Don't Take",
                  " No One Can Be You, Except You", " Your Turn is Coming Up"];
  var pick_fortune = fortunes[Math.floor(Math.random() * fortunes.length)] //the randopm fortune

  var inputName = document.getElementById("fortune-input").value;
  var outputFortune = document.getElementById("fortune-output");
  if(inputName != ""){ //there is a value in this input
    outputFortune.innerHTML = pick_fortune;
    console.log(pick_fortune);
  }
  else{
    alert("Please Enter Your Name");
  }
};

//RESTYLE BUTTON FUNCTIONALITY
var button_style = document.getElementById("fortune-style-button");
button_style.addEventListener("click", reStyle);

function reStyle() {
  var fortuneText = document.getElementById("fortune-output");
  fortuneText.classList.toggle("FortuneText");
  console.log(fortuneText.classList);
};
