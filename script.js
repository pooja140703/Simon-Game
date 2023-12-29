
var array = ["green" , "red" , "yellow" , "blue"];

var level_count = 0;

var randomArray = [];

var userArray = [];


var started = false;
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level_count);
    nextSequence();
    // alert(level_count);
    started = true;
  }
});


function nextSequence(){
  var n = Math.random()*3;
  randomNumber = Math.round(n);

  var randomColorChosen = array[randomNumber];
  userArray =[];
  // var make_sound = new Audio(`sounds/${randomColorChosen}.mp3`);
  // make_sound.play();

  // $(`#${randomColorChosen}`).addClass("pressed");
  // setTimeout(function(){
  //   $(`#${randomColorChosen}`).removeClass("pressed");
  // },100);

  animateButton(randomColorChosen);
  $("h1").text(`Level ${level_count+1}`);
 
  $("#" + randomColorChosen).fadeIn(100).fadeOut(100).fadeIn(100);
 
//  randomArray[level_count] = randomColorChosen;
 level_count++;
randomArray.push(randomColorChosen);
  // return randomArray;
 
}



function animateButton(event){
  var make_sound = new Audio(`sounds/${event}.mp3`);
  make_sound.play();

  $(`#${event}`).addClass("pressed");
  setTimeout(function(){
    $(`#${event}`).removeClass("pressed");
  },100);
}



  $(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    // alert(userChosenColor);
    animateButton(userChosenColor);

    userArray.push(userChosenColor);

    checkAnswer(userArray.length-1);
  });


  $("#info").click(function(){
    $("#info").html(`<p class="Desc"><b>Guidelines : </b> After pressing any key from keyboard, game begin. You just have to remember the sequence which game gives you at every level and have to click buttons accordingly. <br>After clicking right sequence you go to next level and your score increase</p><br><button class="ok-btn" onclick="window.location.reload()">Got it</button>`)
 
  });

  $("#info").click(function(){
    
  });  
 

// function comparator(random_color1){
//   for(var i=0 ; i<random_color1.length;i++){
//     if(random_color1[i]===user_color1){
//       user_color1 = handler();
//     }else{
//       level_count=0;
//     }
//   }  
//     return level_count;
// }

function checkAnswer(index){
  // alert(index);
   if(randomArray[index]===userArray[index]){
    console.log("success");
    
     if(randomArray.length ===userArray.length){
      setTimeout(function(){
        nextSequence();
       
      },1000);
     }
   }else {

    console.log("wrong");

    //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
    var make_sound = new Audio(`sounds/wrong.mp3`);
    make_sound.play();

    //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $("#level-title").text(`Game Over..!! Your score is ${randomArray.length-1}, Press Any Key to Restart`);
    started = false;
    level_count = 0;

    randomArray = [];

    userArray = [];

  }

    
}



