const audioContext = new AudioContext();

//////////////////////////////////////  Play Sample /////////////////////////////////////////

let audioBuffer1;
let audioBuffer2;
let audioBuffer3;
let audioBuffer4;
let audioBuffer5;
let audioBuffer6;
let audioBuffer7;
let audioBuffer8;
let audioBuffer9;
let audioBuffer10;
let audioBuffer11;
let audioBuffer12;
let audioBuffer13;
let audioBuffer14;
let audioBuffer15;
var compressor = audioContext.createDynamicsCompressor();



function loadSample() {



    let request1 = new XMLHttpRequest();
    request1.open("get", 'i_1.wav', true);
    request1.responseType = "arraybuffer";

    request1.onload = function () {
        audioContext.decodeAudioData(request1.response, function (buffer1) {
            audioBuffer1 = buffer1;

        });
    };

    request1.send();


		let request2 = new XMLHttpRequest();
		request2.open("get", 'i_2.wav', true);
		request2.responseType = "arraybuffer";

		request2.onload = function () {
				audioContext.decodeAudioData(request2.response, function (buffer2) {
						audioBuffer2 = buffer2;

				});
		};

		request2.send();

let request3 = new XMLHttpRequest();
request3.open("get", 'i_3.wav', true);
request3.responseType = "arraybuffer";

request3.onload = function () {
    audioContext.decodeAudioData(request3.response, function (buffer3) {
        audioBuffer3 = buffer3;
    });
};

request3.send();

let request4 = new XMLHttpRequest();
request4.open("get", 'i_4.wav', true);
request4.responseType = "arraybuffer";

request4.onload = function () {
    audioContext.decodeAudioData(request4.response, function (buffer4) {
        audioBuffer4 = buffer4;
    });
};

request4.send();

let request5 = new XMLHttpRequest();
request5.open("get", 'i_5.wav', true);
request5.responseType = "arraybuffer";

request5.onload = function () {
    audioContext.decodeAudioData(request5.response, function (buffer5) {
        audioBuffer5 = buffer5;
    });
};

request5.send();







let request6 = new XMLHttpRequest();
request6.open("get", 'e_1.wav', true);
request6.responseType = "arraybuffer";

request6.onload = function () {
    audioContext.decodeAudioData(request6.response, function (buffer6) {
        audioBuffer6 = buffer6;
    });
};

request6.send();



let request7 = new XMLHttpRequest();
request7.open("get", 'e_2.wav', true);
request7.responseType = "arraybuffer";

request7.onload = function () {
    audioContext.decodeAudioData(request7.response, function (buffer7) {
        audioBuffer7 = buffer7;
    });
};

request7.send();



let request8 = new XMLHttpRequest();
request8.open("get", 'e_3.wav', true);
request8.responseType = "arraybuffer";

request8.onload = function () {
    audioContext.decodeAudioData(request8.response, function (buffer8) {
        audioBuffer8 = buffer8;
    });
};

request8.send();


let request9 = new XMLHttpRequest();
request9.open("get", 'e_4.wav', true);
request9.responseType = "arraybuffer";

request9.onload = function () {
    audioContext.decodeAudioData(request9.response, function (buffer9) {
        audioBuffer9 = buffer9;
    });
};

request9.send();

let request10 = new XMLHttpRequest();
request10.open("get", 'e_5.wav', true);
request10.responseType = "arraybuffer";

request10.onload = function () {
    audioContext.decodeAudioData(request10.response, function (buffer10) {
        audioBuffer10 = buffer10;
    });
};

request10.send();







let request11 = new XMLHttpRequest();
request11.open("get", 'a_1.wav', true);
request11.responseType = "arraybuffer";

request11.onload = function () {
    audioContext.decodeAudioData(request11.response, function (buffer11) {
        audioBuffer11 = buffer11;
    });
};

request11.send();



let request12 = new XMLHttpRequest();
request12.open("get", 'a_2.wav', true);
request12.responseType = "arraybuffer";

request12.onload = function () {
    audioContext.decodeAudioData(request12.response, function (buffer12) {
        audioBuffer12 = buffer12;
    });
};

request12.send();





let request13 = new XMLHttpRequest();
request13.open("get", 'a_3.wav', true);
request13.responseType = "arraybuffer";

request13.onload = function () {
    audioContext.decodeAudioData(request13.response, function (buffer13) {
        audioBuffer13 = buffer13;
    });
};

request13.send();

let request14 = new XMLHttpRequest();
request14.open("get", 'a_4.wav', true);
request14.responseType = "arraybuffer";

request14.onload = function () {
    audioContext.decodeAudioData(request14.response, function (buffer14) {
        audioBuffer14 = buffer14;
    });
};

request14.send();

let request15 = new XMLHttpRequest();
request15.open("get", 'a_5.wav', true);
request15.responseType = "arraybuffer";

request15.onload = function () {
    audioContext.decodeAudioData(request15.response, function (buffer15) {
        audioBuffer15 = buffer15;
    });
};

request15.send();





let request16 = new XMLHttpRequest();
request16.open("get", 'o_1.wav', true);
request16.responseType = "arraybuffer";

request16.onload = function () {
    audioContext.decodeAudioData(request16.response, function (buffer16) {
        audioBuffer16 = buffer16;
    });
};

request16.send();


let request17 = new XMLHttpRequest();
request17.open("get", 'o_2.wav', true);
request17.responseType = "arraybuffer";

request17.onload = function () {
    audioContext.decodeAudioData(request17.response, function (buffer17) {
        audioBuffer17 = buffer17;
    });
};

request17.send();


let request18 = new XMLHttpRequest();
request18.open("get", 'o_3.wav', true);
request18.responseType = "arraybuffer";

request18.onload = function () {
    audioContext.decodeAudioData(request18.response, function (buffer18) {
        audioBuffer18 = buffer18;
    });
};

request18.send();

let request19 = new XMLHttpRequest();
request19.open("get", 'o_4.wav', true);
request19.responseType = "arraybuffer";

request19.onload = function () {
    audioContext.decodeAudioData(request19.response, function (buffer19) {
        audioBuffer19 = buffer19;
    });
};

request19.send();

let request20 = new XMLHttpRequest();
request20.open("get", 'o_5.wav', true);
request20.responseType = "arraybuffer";

request20.onload = function () {
    audioContext.decodeAudioData(request18.response, function (buffer20) {
        audioBuffer20 = buffer20;
    });
};

request20.send();







let request21 = new XMLHttpRequest();
request21.open("get", 'u_1.wav', true);
request21.responseType = "arraybuffer";

request21.onload = function () {
    audioContext.decodeAudioData(request21.response, function (buffer21) {
        audioBuffer21 = buffer21;
    });
};

request21.send();

let request22 = new XMLHttpRequest();
request22.open("get", 'u_2.wav', true);
request22.responseType = "arraybuffer";

request22.onload = function () {
    audioContext.decodeAudioData(request22.response, function (buffer22) {
        audioBuffer22 = buffer22;
    });
};

request22.send();


let request23 = new XMLHttpRequest();
request23.open("get", 'u_3.wav', true);
request23.responseType = "arraybuffer";

request23.onload = function () {
    audioContext.decodeAudioData(request23.response, function (buffer23) {
        audioBuffer23 = buffer23;
    });
};

request23.send();


let request24 = new XMLHttpRequest();
request24.open("get", 'u_4.wav', true);
request24.responseType = "arraybuffer";

request24.onload = function () {
    audioContext.decodeAudioData(request24.response, function (buffer24) {
        audioBuffer24 = buffer24;
    });
};

request24.send();

let request25 = new XMLHttpRequest();
request25.open("get", 'u_5.wav', true);
request25.responseType = "arraybuffer";

request25.onload = function () {
    audioContext.decodeAudioData(request25.response, function (buffer25) {
        audioBuffer25 = buffer25;
        alert('samples are now loaded!');
    });
};

request25.send();


}






// Create a compressor node

compressor.threshold.setValueAtTime(-5, audioContext.currentTime);
compressor.knee.setValueAtTime(40, audioContext.currentTime);
compressor.ratio.setValueAtTime(12, audioContext.currentTime);
compressor.attack.setValueAtTime(0.25, audioContext.currentTime);
compressor.release.setValueAtTime(0.25, audioContext.currentTime);



function playSample(group) {





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

    if (!audioBuffer5) {
        alert('there is no audio buffer5!');
    }

    if (!audioBuffer6) {
        alert('there is no audio buffer6!');
    }

    if (!audioBuffer7) {
        alert('there is no audio buffer7!');
    }

    if (!audioBuffer8) {
        alert('there is no audio buffer8!');
    }

    if (!audioBuffer9) {
        alert('there is no audio buffer9!');
    }

    if (!audioBuffer10) {
        alert('there is no audio buffer10!');
    }

    if (!audioBuffer11) {
        alert('there is no audio buffer11!');
    }

    if (!audioBuffer12) {
        alert('there is no audio buffer12!');
    }

    if (!audioBuffer13) {
        alert('there is no audio buffer13!');
    }

    if (!audioBuffer14) {
        alert('there is no audio buffer14!');
    }

    if (!audioBuffer15) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer15) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer16) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer17) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer18) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer19) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer20) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer21) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer22) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer23) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer24) {
        alert('there is no audio buffer15!');
    }

    if (!audioBuffer25) {
        alert('there is no audio buffer15!');
    }




    if(group == 'groupi') {

    const sourcesi = [audioBuffer1, audioBuffer2, audioBuffer3, audioBuffer5, audioBuffer5];
    const randomi = Math.floor(Math.random() * sourcesi.length);
    let soundi = audioContext.createBufferSource();

    soundi.buffer = sourcesi[randomi];
    soundi.connect(compressor);
    soundi.start(audioContext.currentTime);



  } else if(group == 'groupe') {

    const sourcese = [audioBuffer6, audioBuffer7, audioBuffer8, audioBuffer9, audioBuffer10];
    const randome = Math.floor(Math.random() * sourcese.length);
    let sounde = audioContext.createBufferSource();

    sounde.buffer = sourcese[randome];
    sounde.connect(compressor);
    sounde.start(audioContext.currentTime);

  } else if(group == 'groupa') {

      const sourcesa = [audioBuffer11, audioBuffer12, audioBuffer13, audioBuffer14, audioBuffer15];
      const randoma = Math.floor(Math.random() * sourcesa.length);
      let sounda = audioContext.createBufferSource();

      sounda.buffer = sourcesa[randoma];
      sounda.connect(compressor);
      sounda.start(audioContext.currentTime);

    }else if(group == 'groupo') {

        const sourceso = [audioBuffer16, audioBuffer17, audioBuffer18, audioBuffer19, audioBuffer20];
        const randomo = Math.floor(Math.random() * sourceso.length);
        let soundo = audioContext.createBufferSource();

        soundo.buffer = sourceso[randomo];
        soundo.connect(compressor);
        soundo.start(audioContext.currentTime);

      }else if(group == 'groupu') {

          const sourcesu = [audioBuffer21, audioBuffer22, audioBuffer23, audioBuffer24, audioBuffer25];
          const randomu = Math.floor(Math.random() * sourcesu.length);
          let soundu = audioContext.createBufferSource();

          soundu.buffer = sourcesu[randomu];
          soundu.connect(compressor);
          soundu.start(audioContext.currentTime);

          }
}


// connect the AudioBufferSourceNode to the destination

compressor.connect(audioContext.destination);



document.addEventListener('keydown', function (event) {
  if (event.key === 'q') {
    loadSample();
  }
  if (event.key === '1') {
    playSample('groupi');
  }
  if (event.key === '2') {
    playSample('groupe');
  }
  if (event.key === '7') {
    playSample('groupa');
  }
  if (event.key === '8') {
    playSample('groupo');
  }
  if (event.key === '9') {
    playSample('groupu');
  }
});
