(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".faq-list-type"),c=document.querySelectorAll(".faq-open-btn");e[0].classList.add("active"),e[0].querySelector(".faq-list-text").style.display="block";function i(){e.forEach(s=>{s.classList.remove("active"),s.querySelector(".faq-list-text").style.display="none"})}c.forEach((s,t)=>{s.addEventListener("click",()=>{const o=e[t];o.classList.contains("active")?(o.classList.remove("active"),o.querySelector(".faq-list-text").style.display="none"):(i(),o.classList.add("active"),o.querySelector(".faq-list-text").style.display="block")})})});const r={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container"),modalLinks:document.querySelectorAll(".mob-nav-tag")};r.openModalBtn.forEach(e=>{e.addEventListener("click",p)});r.closeModalBtn.addEventListener("click",p);r.modal.addEventListener("click",u);function u(e){e.target===e.currentTarget&&r.modal.classList.add("is-active")}function p(){r.modal.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")}r.modalLinks.forEach(e=>{e.addEventListener("click",()=>{r.modal.classList.remove("is-active"),document.body.classList.remove("no-scroll")})});const n=document.getElementById("btn-header");document.getElementById("header-mob-span");let a=!1;n.addEventListener("click",()=>{a=!a;const e=document.documentElement;a?(n.classList.add("right"),e.style.setProperty("--white","#1E2023"),e.style.setProperty("--black","#F0F0F0"),e.style.setProperty("--accent-green","#14C57C"),e.style.setProperty("--light-grey","#2A2D32"),e.style.setProperty("--light-accent","#204136"),e.style.setProperty("--hover-grey","#3B3F45")):(n.classList.remove("right"),e.style.setProperty("--white","#F0F0F0"),e.style.setProperty("--black","#292929"),e.style.setProperty("--accent-green","#00B068"),e.style.setProperty("--light-grey","#E4E5E6"),e.style.setProperty("--light-accent","#BCDFD1"),e.style.setProperty("--hover-grey","#BBBBBB"))});const h="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-visit'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-width='3.5556'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M3.111%2028.889l25.778-25.778M28.889%203.111h-24M28.889%203.111v24'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",d=[{img:"/img/my-projects/rectangle-11.jpg",title:"wallet webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-12.jpg",title:"English excellence webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-9.jpg",title:"green harvest online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/first-screen-1.jpg",title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-10.jpg",title:"power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-4.jpg",title:"energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-5.jpg",title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-6.jpg",title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-7.jpg",title:"mimino website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-8.jpg",title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"}];let g=0;const y=3;function m(){const e=document.getElementById("project-list");for(let c=0;c<y;c++){if(g>=d.length){document.getElementById("load-more").style.display="none";break}const i=d[g],s=document.createElement("li");s.classList.add("project-item"),s.innerHTML=`
      <img src="${i.img}" alt="${i.title}" class="img">
      <div class="item-text">
        <p class="text">${i.technologies}</p>
        <h3 class="label">${i.title}</h3>

        <a href="${i.github}" class="visit" target="_blank">Visit<svg class="visit-icon" width="15" height="15">
        <use href="/img/my-projects/${h}#icon-visit">
        </svg></a>
      </div>
    `,e.appendChild(s),g++}}m();document.getElementById("load-more").addEventListener("click",m);
//# sourceMappingURL=index.js.map
