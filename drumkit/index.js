const drums = document.querySelectorAll('.drum');
console.log(drums);

function btnAnimation(key) {
  const activeDrum = document.querySelector(`.${key}`)
  activeDrum.classList.add('pressed');
  setTimeout(() => {
    activeDrum.classList.remove('pressed');
  }, 100);
}

function playSound(key) {
  console.log(key);
  switch (key) {
    case 'w':
      let crashSound = new Audio('./sounds/crash.mp3');
      crashSound.play();
      break;
    case 'a':
      let tom1Sound = new Audio('./sounds/tom-1.mp3');
      tom1Sound.play();
      break;
    case 's':
      let tom2Sound = new Audio('./sounds/tom-2.mp3');
      tom2Sound.play();
      break;
    case 'd':
      let snareSound = new Audio('./sounds/snare.mp3');
      snareSound.play();
      break;
    case 'j':
      let kickSound = new Audio('./sounds/kick-bass.mp3');
      kickSound.play();
      break;
    case 'k':
      let tom3Sound = new Audio('./sounds/tom-3.mp3');
      tom3Sound.play();
      break;
    case 'l':
      let tom4Sound = new Audio('./sounds/tom-4.mp3');
      tom4Sound.play();
      break;
    default: console.log(key);
  }
}


drums.forEach(drum => {
  drum.addEventListener('click', (e) => {
    console.log(e);
    playSound(e.target.textContent);
    btnAnimation(e.target.textContent);
  });
})

document.addEventListener('keyup', (e) => {
  console.log(e);
  playSound(e.key);
  btnAnimation(e.key);
});
