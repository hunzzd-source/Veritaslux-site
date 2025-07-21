
window.onload = () => {
  const sky = document.getElementById('sky');
  const fall = document.getElementById('fall');
  const gate = document.getElementById('gate');
  const skyAudio = document.getElementById('sky-audio');
  const fallAudio = document.getElementById('fall-audio');
  const gateAudio = document.getElementById('gate-audio');

  // Start sky scene and audio
  skyAudio.play();

  setTimeout(() => {
    sky.classList.add('hidden');
    fall.classList.remove('hidden');
    skyAudio.pause();
    fallAudio.play();
  }, 5000);

  setTimeout(() => {
    fall.classList.add('hidden');
    gate.classList.remove('hidden');
    fallAudio.pause();
    gateAudio.play();
  }, 10000);
};

function checkPassword() {
  const input = document.getElementById('password').value;
  if (input.toLowerCase() === 'veritaslux') {
    document.getElementById('cta').classList.remove('hidden');
  } else {
    alert('The cipher is incorrect. Access denied.');
  }
}
