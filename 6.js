
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
let audioBuffer2;

function loadSample() {

    init();

    let request1 = new XMLHttpRequest();
    request1.open("get", 'a_1.wav', true);
    request1.responseType = "arraybuffer";

    request1.onload = function () {
        audioContext.decodeAudioData(request1.response, function (buffer1) {
            audioBuffer1 = buffer1;
            alert('sample1 is now loaded!');
        });
    };

    request1.send();

		let request2 = new XMLHttpRequest();
		request2.open("get", 'a_2.wav', true);
		request2.responseType = "arraybuffer";

		request2.onload = function () {
				audioContext.decodeAudioData(request2.response, function (buffer2) {
						audioBuffer2 = buffer2;
						alert('sample2 is now loaded!');
				});
		};

		request2.send();
}

function playSample() {

    init();

    if (!audioBuffer1) {
        alert('there is no audio buffer1!');
    }

    if (!audioBuffer2) {
        alert('there is no audio buffer2!');
    }

    const sources = [audioBuffer1, audioBuffer2];
    const random = Math.floor(Math.random() * sources.length);
    let sound = audioContext.createBufferSource();

    sound.buffer = sources[random];
    sound.connect(audioContext.destination);
    sound.start(audioContext.currentTime);
}


document.addEventListener('keydown', function (event) {
  if (event.key === 'q') {
    loadSample();
  }
  if (event.key === '1') {
    playSample(audioBuffer1);
  }

});
