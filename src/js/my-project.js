// Массив всех проектов
import icon from "../img/my-projects/symbol-defs.svg"
const allProjects = [
  { img: image1, title: 'English excellence webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image2, title: 'wallet webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image3, title: 'green harvest online store', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image4, title: 'starlight studio landing page', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image5, title: 'power pulse webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image6, title: 'energy flow webservice ', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image7, title: 'fruitbox online store', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image8, title: 'chego jewelry website', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image9, title: 'mimino website', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },
  { img: image10, title: 'vyshyvanka vibes Landing Page', technologies: 'React, JavaScript, Node JS, Git', github: 'https://github.com/NatAn240185/portfolio-group_2' },


];
import image1 from "../img/my-projects/rectangle-5.jpg";
import image5 from "../img/my-projects/rectangle-6.jpg";
import image8 from "../img/my-projects/rectangle-7.jpg";
import image4 from "../img/my-projects/rectangle-8.jpg";
import image2 from "../img/my-projects/rectangle-9.jpg";
import image6 from "../img/my-projects/rectangle-10.jpg";
import image7 from "../img/my-projects/rectangle-11.jpg";
import image3 from "../img/my-projects/rectangle-12.jpg";
import image9 from "../img/my-projects/first-screen-1.jpg";
import image10 from "../img/my-projects/rectangle-4.jpg";
let currentIndex = 0;
const projectsPerLoad = 3;


function loadProjects() {
  const projectList = document.getElementById('project-list');


  for (let i = 0; i < projectsPerLoad; i++) {
    if (currentIndex >= allProjects.length) {

      document.getElementById('load-more').style.display = 'none';
      break;
    }


    const project = allProjects[currentIndex];
    const li = document.createElement('li');
    li.classList.add('project-item');
    li.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="img">
      <div class="item-text">
        <p class="text">${project.technologies}</p>
        <h3 class="label">${project.title}</h3>
        <a href="${project.github}" class="visit" target="_blank">Visit<svg class="visit-icon" width="15" height="15">
        <use href="/img/my-projects/${icon}#icon-visit">
        </svg></a>
      </div>
    `;

    projectList.appendChild(li);
    currentIndex++;
  }
}

// Начальная загрузка первых 3 проектов
loadProjects();


document.getElementById('load-more').addEventListener('click', loadProjects);
