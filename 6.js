
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
let audioBuffer3;
let audioBuffer4;

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

let request3 = new XMLHttpRequest();
request3.open("get", 'e_1.wav', true);
request3.responseType = "arraybuffer";

request3.onload = function () {
    audioContext.decodeAudioData(request3.response, function (buffer3) {
        audioBuffer3 = buffer3;
        alert('sample1 is now loaded!');
    });
};

request3.send();

let request4 = new XMLHttpRequest();
request4.open("get", 'e_2.wav', true);
request4.responseType = "arraybuffer";

request4.onload = function () {
    audioContext.decodeAudioData(request4.response, function (buffer4) {
        audioBuffer4 = buffer4;
        alert('sample1 is now loaded!');
    });
};

request4.send();

}

function playSample(group) {

    init();

    if (!audioBuffer1) {
        alert('there is no audio buffer1!');
    }

    if (!audioBuffer2) {
        alert('there is no audio buffer2!');
    }

    if (!audioBuffer3) {
        alert('there is no audio buffer3!');
    }

    if (!audioBuffer4) {
        alert('there is no audio buffer4!');
    }

    if(group == 'groupa') {

    const sourcesa = [audioBuffer1, audioBuffer2];
    const randoma = Math.floor(Math.random() * sourcesa.length);
    let sounda = audioContext.createBufferSource();

    sounda.buffer = sourcesa[randoma];
    sounda.connect(audioContext.destination);
    sounda.start(audioContext.currentTime);

    } else if(group == 'groupb') {

    const sourcese = [audioBuffer3, audioBuffer4];
    const randome = Math.floor(Math.random() * sourcese.length);
    let sounde = audioContext.createBufferSource();

    sounde.buffer = sourcese[randome];
    sounde.connect(audioContext.destination);
    sounde.start(audioContext.currentTime);

    }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'q') {
    loadSample();
  }
  if (event.key === '1') {
    playSample(sounda);
  }
  if (event.key === '2') {
    playSample(sounde);
  }
});
