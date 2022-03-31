/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
//Global variables
var pattern = [2,2,4,3,2,1,2,4];
var mistakeCounter = 0;
var progress = 0 ;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;//how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence 
var winSoundPlaying; //creates track when the win sound is being played
var winSound = document.getElementById("win");//variable for the win sound playing


function generateRandom(min,max)
{
 // console.log("Random works");
  return Math.floor(Math.random()* max)+ min;
}

function startGame(){
  //initialize game variables
  if(winSoundPlaying){
    winSound.pause();
  }
  else {
    winSoundPlaying = false;
  }
  
  mistakeCounter = 0 ;
  progress = 0; 
  gamePlaying = true;
  clueHoldTime = 1000;
  
  for(let i=0 ; i<pattern.length;i++)
  {
    pattern[i] = generateRandom(1,6);
    
  }
  
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
playClueSequence();          
}

function stopGame(){
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");   
}

function lightButton(btn){
  document.getElementById("button"+ btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+ btn).classList.remove("lit")
}


// Sound Synthesis Functions

const freqMap = {
  1: 700,
  2: 450,
  3: 200,
  4: 890,
  5: 125,
  6: 350,
}

function playTone(btn,len){
  
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){stopTone()},len)
 
}

function startTone(button){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[button]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
//ici i passed in element
function playSingleClue(btn,element){
  if(gamePlaying)
  {
    lightButton(btn);
    // playMyAudio(clueHoldTime,element);
    playTone(btn,clueHoldTime); 
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0 ; 
 clueHoldTime -= 95;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++)
  { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  } 
  
}

function loseGame()
{
  stopGame();
 var endSound = document.getElementById("gameOver");
  endSound.play();
   alert("Game Over. You lost");
  
  
}

function winGame()
{
  stopGame();
  winSound.play();
  alert("Game Over. You won");
  winSoundPlaying = true;
  
}
function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
       winGame();
      }else{
        
        progress++;
        playClueSequence();
      }
    }else{
      
      guessCounter++;
    }
  }
  else
  {
    if(mistakeCounter == 2)
    {
      loseGame();
    }
    else{
    // take note of user mistake  
    mistakeCounter++;
    alert("Oops Wrong Selection! Try Again");
    
    }
  }   
  
}
function playMyAudio(element){
   
     var audio = document.getElementById(element);

  if(!tonePlaying){
      audio.play();
      //audio will start over again when finised playing
      audio.loop = true;
      document.getElementById("audioStatus").innerHTML="Audio is Playing";	
     }
}
    
function pauseMyAudio(element)
{
    var audio = document.getElementById(element);
      
     audio.pause();
      
      document.getElementById("audioStatus").innerHTML="Audio Paused";	
      tonePlaying = false; 
     }

