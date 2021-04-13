
let loaded = false;
let audioContext = null;

function init() {

    // Only initialise if it is the first time
    if (!loaded) {
        audioContext = new AudioContext();
        loaded = true;
    }
}

//////////////////////////////////////  Play Sample /////////////////////////////////////////

let audioBuffer;

function loadSample() {

    init();

    let request = new XMLHttpRequest();
    request.open("get", 'a_1.wav', true);
    request.open("get", 'a_2.wav', true);
    request.open("get", 'a_3.wav', true);

    request.responseType = "arraybuffer";

    request.onload = function () {
        audioContext.decodeAudioData(request.response, function (buffer) {
            audioBuffer = buffer;
            alert('sample is now loaded!');
        });
    };

    request.send();
}

const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
// play as soon as the buffer is loaded
player.autostart = true;




document.addEventListener('keydown', function (event) {
  if (event.key === 'd') {
    loadSample();
  }
  if (event.key === 'l') {
    player;
  }
});
