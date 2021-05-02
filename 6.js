
//attach a click listener to a play button
document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})


const sampler = new Tone.Sampler({
	urls: {
		A1: "a_1.wav",
		A2: "a_2.wav",
    A3: "a_3.wav",
	},
	baseUrl: "https://guzmaan.github.io/audios",
	onload: () => {
		sampler.triggerAttackRelease(["A1", "A2", "A3"]);
	}
}).toDestination();




document.addEventListener('keydown', function (event) {
  if (event.key === 'd') {
    loadSample();
  }
  if (event.key === 'l') {
    player;
  }
});
