const speakers = [
  {
    name: 'Hatim Potter',
    imageBg: 'assets/images/grey-chess-bg.png',
    image: 'assets/images/speaker-1.png',
    job: 'Proffessor of Wizards Legal Studies of Hogwarts Law School',
    text: 'Potter studies legal cases between muggles (non-magic people) and published his book The Wizards and Muggles in 2018',
  },
  {
    name: 'Alphayo Strange',
    imageBg: 'assets/images/grey-chess-bg.png',
    image: 'assets/images/speaker-2.png',
    job: 'Surgery faculry of Marvel Medicine University',
    text: 'Potter studies legal cases between muggles (non-magic people) and published his book The Wizards and Muggles in 2018',
  },
  {
    name: 'Gendalf Karamaga',
    imageBg: 'assets/images/grey-chess-bg.png',
    image: 'assets/images/speaker-3.png',
    job: 'Proffessor of Wizards Legal Studies of Hogwarts Law School',
    text: 'Potter studies legal cases between muggles (non-magic people) and published his book The Wizards and Muggles in 2018',
  },
  {
    name: 'Rehema Bellweather',
    imageBg: 'assets/images/grey-chess-bg.png',
    image: 'assets/images/speaker-4.png',
    job: 'Proffessor of Wizards Legal Studies of Hogwarts Law School',
    text: 'Potter studies legal cases between muggles (non-magic people) and published his book The Wizards and Muggles in 2018',
  },
  {
    name: 'Merlin Clifford ',
    imageBg: 'assets/images/grey-chess-bg.png',
    image: 'assets/images/speaker-5.png',
    job: 'Proffessor of Wizards Legal Studies of Hogwarts Law School',
    text: 'Potter studies legal cases between muggles (non-magic people) and published his book The Wizards and Muggles in 2018',
  },
  {
    name: 'Clifford Griffin',
    imageBg: 'assets/images/grey-chess-bg.png',
    image: 'assets/images/speaker-6.png',
    job: 'Proffessor of Wizards Legal Studies of Hogwarts Law School',
    text: 'Potter studies legal cases between muggles (non-magic people) and published his book The Wizards and Muggles in 2018',
  },
];

const spList = document.querySelector('.speakers');
const spHeading = document.createElement('h2');
spHeading.classList.add('sp-heading');
spHeading.innerText = 'Featured Speakers';
spList.appendChild(spHeading);
const spDivider = document.createElement('div');
spDivider.classList.add('sp-divider');
spList.appendChild(spDivider);
const spDiv = document.createElement('div');
spDiv.classList.add('sp-div');
spList.appendChild(spDiv);

speakers.forEach(speaker => { // eslint-disable-line
  const spCard = document.createElement('div');
  spCard.classList.add('sp-card');
  spCard.innerHTML = `
    <div class="sp-images">
      <img class="sp-image-bg" src=${speaker.imageBg}>
      <img class="sp-image" src=${speaker.image}>
    </div>
    <div class="sp-details">
      <h3 class="sp-name">${speaker.name}</h3>
      <p class="sp-job">${speaker.job}</p>
      <div class="sp-divider-grey"></div>
      <p class="sp-text">${speaker.text}</p>
    </div>
  `;
  spDiv.appendChild(spCard);
});
