
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
        audioContext.decodeAudioData(request.response, function (buffer1) {
            audioBuffer1 = buffer1;
            alert('sample1 is now loaded!');
        });
    };

    request1.send();

		let request2 = new XMLHttpRequest();
		request2.open("get", 'o_1.wav', true);
		request2.responseType = "arraybuffer";

		request2.onload = function () {
				audioContext.decodeAudioData(request.response, function (buffer2) {
						audioBuffer2 = buffer2;
						alert('sample2 is now loaded!');
				});
		};

		request2.send();
}

function playSample(audioBuffer1) {

    init();

    if (!audioBuffer1) {
        alert('there is no audio buffer1!');
    }

    let sound1 = audioContext.createBufferSource();
    sound1.buffer = audioBuffer1;
    sound1.connect(audioContext.destination);
    sound1.start(audioContext.currentTime);


}

function playSample(audioBuffer2) {

    init();

    if (!audioBuffer2) {
        alert('there is no audio buffer2!');
    }

    let sound2 = audioContext.createBufferSource();
    sound2.buffer = audioBuffer2;
    sound2.connect(audioContext.destination);
    sound2.start(audioContext.currentTime);


}



document.addEventListener('keydown', function (event) {
  if (event.key === 'd') {
    loadSample();
  }
  if (event.key === 'l') {
    playSample(audioBuffer1);
  }
	if (event.key === 'g') {
    playSample(audioBuffer2);
  }
});
