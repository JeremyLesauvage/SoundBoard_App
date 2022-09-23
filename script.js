const audio = new Audio();
const lengthSoundFolder = 79; //TODO count the number of file in the selected directory
const soundControllerLowerLimit = 40;
const soundControllerUpperLimit = 70;

//TEST
const dirSelector = document.getElementById("selectDir").files;
for (let i = 0; i < dirSelector.length; i++){
  console.log(files[i].name);
}


/**
 * setting audio path to a button and play the sound when clicked
 * @param {*} audio the javascript audio to which play the sound
 * @param {*} btnId the button id linked to the audio, in format: btn000
 * @param {*} sourceAudio  the path of the audio file also used to set the button name
 */
function playAudio(audio, btnId, sourceAudio) {
  document.getElementById(btnId).innerText = sourceAudio;
  document.getElementById(btnId).onclick = function () {
  audio.src = "./sound/"+sourceAudio;
  audio.play();
  };
}

/*function to set display elements status for the audio controller icon*/
function displayElementAudioControllerIcon(mute, soundWave1, soundWave2, soundWave3){
  document.getElementById("mute").style.display = mute;
  document.getElementById("soundWave1").style.display = soundWave1;
  document.getElementById("soundWave2").style.display = soundWave2;
  document.getElementById("soundWave3").style.display = soundWave3;
}

/*sound controller */
const line = document.getElementsByTagName("input")[0];
line.addEventListener("mousemove", function () {
  const barValue = document.getElementById("barValue");
  if (line.value == 0) {
    barValue.innerHTML = "Mute";
    displayElementAudioControllerIcon("block","none","none","none");
    document.querySelector("line").setAttribute("stroke-width", "4");
  }
  else if (1 < line.value && line.value < soundControllerLowerLimit) {
    barValue.innerHTML = line.value + "%";
    displayElementAudioControllerIcon("none","block","none","none");
  }
  else if (soundControllerLowerLimit < line.value && line.value < soundControllerUpperLimit) {
    barValue.innerHTML = line.value + "%";
    displayElementAudioControllerIcon("none","block","block","none");
  }
  else if (line.value > soundControllerUpperLimit) {
    barValue.innerHTML = line.value + "%";
    displayElementAudioControllerIcon("none","block","block","block");
  }
  audio.volume = (line.value / 100).toFixed(2); //resized value to 0-1 range and select 2 decimal
});

/**
 * Create an HTML button in javascript
 * @param {*} btnIdNumber the button id, in the format: 000
 */
function createButton(btnIdNumber){
  const button = document.createElement("button");
  button.className = "btn";
  button.id = "btn"+btnIdNumber;
  const container = document.getElementById("container");
  container.appendChild(button);
}

/**
 * set the name of a button by its id
 * @param {*} btnId the button id, in the format: btn000
 * @param {*} newName the new name
 */
function setButtonName(btnId, newName){
  const buttonToChangeName = document.getElementById(btnId);
  buttonToChangeName.innerText = newName;
}

for (let i = 1; i<lengthSoundFolder+1; i++){
  createButton(i);
  }

/*button stop sound*/
//TODO add the possibility to resume the audio if it's paused
document.getElementById("btn000").onclick = function () {
    audio.pause();
};

/*other buttons*/
//TODO get file path from the selected directory
playAudio(audio, "btn"+"1", "Allahu Akbar.mp3");
playAudio(audio, "btn2", "Among Us Role Reveal.mp3");
playAudio(audio, "btn3", "Anime Lewd 1.mp3");
playAudio(audio, "btn4", "Anime Lewd 2.mp3");
playAudio(audio, "btn5", "Anime Wow.mp3");
playAudio(audio, "btn6", "Anime Za Warudo.mp3");
playAudio(audio, "btn7", "Ara Ara.mp3");
playAudio(audio, "btn8", "Au Revoir.mp3");
playAudio(audio, "btn9", "Ayaya Ayaya.mp3");
playAudio(audio, "btn10", "Bigard le Florilège.mp3");
playAudio(audio, "btn11", "C'est Honteux.mp3");
playAudio(audio, "btn12", "C'est l'heure du Duel.mp3");
playAudio(audio, "btn13", "C'est pas toi qui décide.mp3");
playAudio(audio, "btn14", "COMBIENT.mp3");
playAudio(audio, "btn15", "Coucou (Doby).mp3");
playAudio(audio, "btn16", "Denis Brogniart AH.mp3");
playAudio(audio, "btn17", "Dramatic DUN DUN DUUUUN.mp3");
playAudio(audio, "btn18", "Drum Roll.mp3");
playAudio(audio, "btn19", "Elevator Music.mp3");
playAudio(audio, "btn20", "English Motherfucker Do You Speak It.mp3");
playAudio(audio, "btn21", "FBI Open Up.mp3");
playAudio(audio, "btn22", "Fin frérot tu es cringe.mp3");
playAudio(audio, "btn23", "FUS RO DAH.mp3");
playAudio(audio, "btn24", "Gaulois c'est un Echec.mp3");
playAudio(audio, "btn25", "Gotcha Bitch.mp3");
playAudio(audio, "btn26", "Gotta Go Fast Sonic.mp3");
playAudio(audio, "btn27", "GTA Ah Shit.mp3");
playAudio(audio, "btn28", "GTA Wasted.mp3");
playAudio(audio, "btn29", "Ha Gay.mp3");
playAudio(audio, "btn30", "He Knew He Fucked Up.mp3");
playAudio(audio, "btn31", "Heavenly Music.mp3");
playAudio(audio, "btn32", "Hello There (ObiWan).mp3");
playAudio(audio, "btn33", "Hey Hey (Hayasaka).mp3");
playAudio(audio, "btn34", "I'ts Over 9000.mp3");
playAudio(audio, "btn35", "Je Suis Un Homme En Colère.mp3");
playAudio(audio, "btn36", "Just Do It.mp3");
playAudio(audio, "btn37", "Kira's Laugh.mp3");
playAudio(audio, "btn38", "Knuckles Oh No.mp3");
playAudio(audio, "btn39", "Law and Order.mp3");
playAudio(audio, "btn40", "Le Pen Jeanne au secours.mp3");
playAudio(audio, "btn41", "Leeroy Jenkins.mp3");
playAudio(audio, "btn42", "LOL Godlike.mp3");
playAudio(audio, "btn43", "LOL Pentakill.mp3");
playAudio(audio, "btn44", "LOL Rammus OK.mp3");
playAudio(audio, "btn45", "M Bison Yes Yes.mp3");
playAudio(audio, "btn46", "Magic Sparkle.mp3");
playAudio(audio, "btn47", "Marine le Pen Euh nique ta mère.mp3");
playAudio(audio, "btn48", "Megumin Explosion.mp3");
playAudio(audio, "btn49", "Mission Failed well get em next time.mp3");
playAudio(audio, "btn50", "Ne tinquiète pas ça va bien ce passer.mp3");
playAudio(audio, "btn51", "Nein Nein Nein.mp3");
playAudio(audio, "btn52", "No God Please No.mp3");
playAudio(audio, "btn53", "Nope.mp3");
playAudio(audio, "btn54", "OSS 117 D'accord.mp3");
playAudio(audio, "btn55", "OSS 117 J'ai Vu.mp3");
playAudio(audio, "btn56", "OSS 117 J'aime Me Battre.mp3");
playAudio(audio, "btn57", "Pardon Pardon Pardon Pardon.mp3");
playAudio(audio, "btn58", "PORTE.mp3");
playAudio(audio, "btn59", "Sad Trombone.mp3");
playAudio(audio, "btn60", "Sardoche blend S.mp3");
playAudio(audio, "btn61", "Sardoche C'était Sur.mp3");
playAudio(audio, "btn62", "Sardoche Il Est Ou.mp3");
playAudio(audio, "btn63", "Sardoche Rage.mp3");
playAudio(audio, "btn64", "Squalala.mp3");
playAudio(audio, "btn65", "TA GUEULE.mp3");
playAudio(audio, "btn66", "Tape Rewind.mp3");
playAudio(audio, "btn67", "They ask you how you are.mp3");
playAudio(audio, "btn68", "Tu Bluffes Martoni.mp3");
playAudio(audio, "btn69", "Tuturu.mp3");
playAudio(audio, "btn70", "Wait a Minute ....mp3");
playAudio(audio, "btn71", "Well Be Right Back.mp3");
playAudio(audio, "btn72", "Why are we still here just to suffer.mp3");
playAudio(audio, "btn73", "Wilhelm Scream.mp3");
playAudio(audio, "btn74", "Win Epic Jingle.mp3");
playAudio(audio, "btn75", "Wingardium Leviosa.mp3");
playAudio(audio, "btn76", "Yamete Kudasai.mp3");
playAudio(audio, "btn77", "Mais vous fumez.mp3");
playAudio(audio, "btn78", "Nico Nico Car.mp3");
playAudio(audio, "btn79", "Eh la qui voila les Services Sociaux.mp3");
