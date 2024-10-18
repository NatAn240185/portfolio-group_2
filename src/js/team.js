const button = document.getElementById('btn-header');
const span = document.getElementById('header-mob-span');
let toggled = false;

const greenBlockHero = document.querySelector('.link-block-gr');
const orderLink = document.querySelector('.link-block-a');
const secondBlockList = document.querySelector('.second-block-list');
const marquee = document.querySelector('.marquee');
const marqueeSec = document.querySelector('.second');

button.addEventListener('click', () => {
  toggled = !toggled;

  const root = document.documentElement;

  if (toggled) {
    button.classList.add('right');
    root.style.setProperty('--white', '#1E2023');
    root.style.setProperty('--black', '#F0F0F0');
    root.style.setProperty('--accent-green', '#14C57C');
    root.style.setProperty('--light-grey', '#2A2D32');
    root.style.setProperty('--light-accent', '#204136');
    root.style.setProperty('--hover-grey', '#3B3F45');
    greenBlockHero.style.backgroundColor = '#14C57C';
    orderLink.addEventListener('mouseover', () => {
      greenBlockHero.style.backgroundColor = '#009156';
    });
    greenBlockHero.addEventListener('mouseout', () => {
      greenBlockHero.style.backgroundColor = '#14C57C';
    });
    secondBlockList.style.backgroundColor = '#2A2D32';
    marquee.style.backgroundColor = '#204136';
    marqueeSec.style.backgroundColor = '#2A2D32';
    function changePseudoElementColor(elementSelector, pseudoElement, color) {
      const style = document.createElement('style');
      style.innerHTML = `
          ${elementSelector}::${pseudoElement} {
              content: '';
              display: inline-block;
              width: 8px;
              height: 8px;
              background-color: ${color};
              border-radius: 2px;
              position: absolute;
              top: 20px;
              left: -20px;
          }
      `;
      document.head.appendChild(style);
    }
    changePseudoElementColor('.item-sec-row', 'before', '#F0F0F0');
  } else {
    button.classList.remove('right');
    root.style.setProperty('--white', '#F0F0F0');
    root.style.setProperty('--black', '#292929');
    root.style.setProperty('--accent-green', '#00B068');
    root.style.setProperty('--light-grey', '#E4E5E6');
    root.style.setProperty('--light-accent', '#BCDFD1');
    root.style.setProperty('--hover-grey', '#BBBBBB');
    greenBlockHero.style.backgroundColor = '#BCDFD1';
    orderLink.addEventListener('mouseover', () => {
      greenBlockHero.style.backgroundColor = '#00B068';
    });
    greenBlockHero.addEventListener('mouseout', () => {
      greenBlockHero.style.backgroundColor = '#BCDFD1';
    });
    secondBlockList.style.backgroundColor = '#E4E5E6';
    marquee.style.backgroundColor = '#BCDFD1';
    marqueeSec.style.backgroundColor = '#E4E5E6';
    function changePseudoElementColor(elementSelector, pseudoElement, color) {
      const style = document.createElement('style');
      style.innerHTML = `
          ${elementSelector}::${pseudoElement} {
              content: '';
              display: inline-block;
              width: 8px;
              height: 8px;
              background-color: ${color};
              border-radius: 2px;
              position: absolute;
              top: 20px;
              left: -20px;
          }
      `;
      document.head.appendChild(style);
    }
    changePseudoElementColor('.item-sec-row', 'before', '#292929');
  }
});
