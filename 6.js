
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

let audioBuffer1;

function loadSample() {

    init();

    let request = new XMLHttpRequest();
    request.open("get", 'a_1.wav', true);
    request.responseType = "arraybuffer";

    request.onload = function () {
        audioContext.decodeAudioData(request.response, function (buffer1) {
            audioBuffer1 = buffer1;
            alert('sample is now loaded!');
        });
    };

    request.send();
}

function playSample() {

    init();

    if (!audioBuffer1) {
        alert('there is no audio buffer!');
    }

    let sound = audioContext.createBufferSource();
    sound.buffer = audioBuffer1;
    sound.connect(audioContext.destination);
    sound.start(audioContext.currentTime);
}


document.addEventListener('keydown', function (event) {
  if (event.key === 'd') {
    loadSample();
  }
  if (event.key === 'l') {
    playSample();
  }
});
