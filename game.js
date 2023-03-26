var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0 ;
$(document).keydown(function() {
    if (gamePattern.length == 0){
    nextSequence();
    }
  });
$(".btn").click(function(){
    var userChoosenColour = this.id; 
    userClickedPattern.push(userChoosenColour);
    checkAnswer(userClickedPattern.length-1);
    playSound(userChoosenColour);
    animatePress(userChoosenColour);
  });

  function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length == userClickedPattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000)
        }
    }
    else {
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
            },200)
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();    
    }
}
function nextSequence() {
    userClickedPattern.length=0;
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    $('#'+randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour);
    level++;
    $("h1").text("level "+level);
}
function playSound (name) {
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColour).removeClass("pressed");
     },100)
}
function startOver(params) {
    level = 0 ;
    gamePattern.length = 0;
}





