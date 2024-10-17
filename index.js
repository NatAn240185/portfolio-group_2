import{a as j,S as M,N as q,K as N,i as S}from"./assets/vendor-CFhfxFuv.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".faq-list-type"),n=document.querySelectorAll(".faq-open-btn");e[0].classList.add("active"),e[0].querySelector(".faq-list-text").style.display="block";function s(){e.forEach(i=>{i.classList.remove("active"),i.querySelector(".faq-list-text").style.display="none"})}n.forEach((i,t)=>{i.addEventListener("click",()=>{const o=e[t];o.classList.contains("active")?(o.classList.remove("active"),o.querySelector(".faq-list-text").style.display="none"):(s(),o.classList.add("active"),o.querySelector(".faq-list-text").style.display="block")})})});const d={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container"),modalLinks:document.querySelectorAll(".mob-nav-tag")};d.openModalBtn.forEach(e=>{e.addEventListener("click",x)});d.closeModalBtn.addEventListener("click",x);d.modal.addEventListener("click",A);function A(e){e.target===e.currentTarget&&d.modal.classList.add("is-active")}function x(){d.modal.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")}d.modalLinks.forEach(e=>{e.addEventListener("click",()=>{d.modal.classList.remove("is-active"),document.body.classList.remove("no-scroll")})});const w=document.getElementById("btn-header");document.getElementById("header-mob-span");let f=!1;w.addEventListener("click",()=>{f=!f;const e=document.documentElement;f?(w.classList.add("right"),e.style.setProperty("--white","#1E2023"),e.style.setProperty("--black","#F0F0F0"),e.style.setProperty("--accent-green","#14C57C"),e.style.setProperty("--light-grey","#2A2D32"),e.style.setProperty("--light-accent","#204136"),e.style.setProperty("--hover-grey","#3B3F45")):(w.classList.remove("right"),e.style.setProperty("--white","#F0F0F0"),e.style.setProperty("--black","#292929"),e.style.setProperty("--accent-green","#00B068"),e.style.setProperty("--light-grey","#E4E5E6"),e.style.setProperty("--light-accent","#BCDFD1"),e.style.setProperty("--hover-grey","#BBBBBB"))});const J="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-visit'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-width='3.5556'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M3.111%2028.889l25.778-25.778M28.889%203.111h-24M28.889%203.111v24'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",L=[{img:"/img/my-projects/rectangle-11.jpg",title:"wallet webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-12.jpg",title:"English excellence webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-9.jpg",title:"green harvest online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/first-screen-1.jpg",title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-10.jpg",title:"power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-4.jpg",title:"energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-5.jpg",title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-6.jpg",title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-7.jpg",title:"mimino website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"},{img:"/img/my-projects/rectangle-8.jpg",title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/project-js-group-2"}];let b=0;const C=3;function P(){const e=document.getElementById("project-list");for(let n=0;n<C;n++){if(b>=L.length){document.getElementById("load-more").style.display="none";break}const s=L[b],i=document.createElement("li");i.classList.add("project-item"),i.innerHTML=`
      <img src="${s.img}" alt="${s.title}" class="img">
      <div class="item-text">
        <p class="text">${s.technologies}</p>
        <h3 class="label">${s.title}</h3>

        <a href="${s.github}" class="visit" target="_blank">Visit<svg class="visit-icon" width="15" height="15">
        <use href="/img/my-projects/${J}#icon-visit">
        </svg></a>
      </div>
    `,e.appendChild(i),b++}}P();document.getElementById("load-more").addEventListener("click",P);const E=document.querySelector(".js-reviews-box-list");j.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function I(){console.log("fetching data");try{const e=await j.get("/reviews");return console.log(e.data),e.data}catch{S.error({message:"Error fetching reviews. Please try again later.",position:"topRight"});return}}async function R(){try{const e=await I();if(!e||e.length===0){E.innerHTML='<li class="reviews-error-text">Not Found</li>';return}const n=e.map(s=>`
          <li class="swiper-slide reviews-item">
          <div class="reviews-text">${s.review}</div>

           <div class="reviews-person-details">
            <img src="${s.avatar_url}"
                 loading="lazy"
                 alt="${s.author}"
                 class="reviews-img"
                 width="40" height="40">
                 <h3 class="reviews-subtitle">${s.author}</h3>
                 </div>
          </li>
        `).join("");E.innerHTML=n}catch(e){console.log(e),S.error({message:"Error rendering reviews. Please try again later.",position:"topRight"})}}async function _(){await R(),new M(".reviews-swiper",{modules:[q,N],direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".js-reviews-btn-next",prevEl:".js-reviews-btn-previous"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:2}}})}_();const F="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-wt_input_success-filled-2'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%2300b068'%20style='fill:%20var(--color1,%20%2300b068)'%20d='M16%202c3.713%200%207.274%201.475%209.899%204.1s4.101%206.186%204.101%209.9-1.475%207.274-4.101%209.899c-2.625%202.626-6.186%204.101-9.899%204.101s-7.274-1.475-9.9-4.101c-2.626-2.625-4.1-6.186-4.1-9.899s1.475-7.274%204.1-9.9c2.626-2.626%206.186-4.1%209.9-4.1zM14.256%2018.762l-3.11-3.112c-0.111-0.111-0.244-0.2-0.39-0.26s-0.302-0.091-0.459-0.091-0.314%200.031-0.459%200.091c-0.146%200.060-0.278%200.149-0.39%200.26-0.225%200.225-0.352%200.531-0.352%200.849s0.127%200.624%200.352%200.849l3.96%203.96c0.111%200.112%200.243%200.201%200.389%200.262s0.302%200.092%200.46%200.092%200.314-0.031%200.46-0.092c0.146-0.061%200.278-0.15%200.389-0.262l8.2-8.202c0.113-0.111%200.203-0.243%200.264-0.389s0.094-0.303%200.094-0.461c0.001-0.158-0.030-0.315-0.090-0.462s-0.149-0.28-0.261-0.392c-0.112-0.112-0.245-0.201-0.391-0.261s-0.303-0.091-0.462-0.091-0.315%200.032-0.461%200.094-0.278%200.151-0.39%200.264l-7.354%207.354z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt-close-btn_x'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M24%208l-16%2016'%3e%3c/path%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M8%208l16%2016'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt_icon_1-1'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M3%209c0%2011.045%208.955%2020%2020%2020h3c1.657%200%203-1.343%203-3v0-1.829c0-0.688-0.468-1.288-1.136-1.455l-5.897-1.475c-0.587-0.147-1.203%200.073-1.564%200.556l-1.293%201.724c-0.376%200.501-1.025%200.723-1.613%200.507-4.43-1.661-7.863-5.094-9.488-9.413l-0.036-0.111c-0.216-0.588%200.005-1.237%200.507-1.613l1.724-1.293c0.484-0.361%200.703-0.979%200.556-1.564l-1.475-5.897c-0.169-0.657-0.756-1.136-1.455-1.136h-1.829c-1.657%200-3%201.343-3%203v0%203z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt_icon_3-2'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M20%2014c0%201.061-0.421%202.078-1.172%202.828s-1.768%201.172-2.828%201.172-2.078-0.421-2.828-1.172c-0.75-0.75-1.172-1.768-1.172-2.828s0.421-2.078%201.172-2.828%201.768-1.172%202.828-1.172%202.078%200.421%202.828%201.172%201.172%201.768%201.172%202.828v0z'%3e%3c/path%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M26%2014c0%209.523-10%2015-10%2015s-10-5.477-10-15c0-2.652%201.054-5.196%202.929-7.071s4.419-2.929%207.071-2.929%205.196%201.054%207.071%202.929%202.929%204.419%202.929%207.071v0z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt_icon_2-2'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M29%209v14c0%200.796-0.316%201.559-0.879%202.121s-1.326%200.879-2.121%200.879h-20c-0.796%200-1.559-0.316-2.121-0.879s-0.879-1.326-0.879-2.121v-14M29%209c0-0.796-0.316-1.559-0.879-2.121s-1.326-0.879-2.121-0.879h-20c-0.796%200-1.559%200.316-2.121%200.879s-0.879%201.326-0.879%202.121M29%209v0.324c0%200.512-0.131%201.016-0.381%201.463s-0.61%200.823-1.046%201.092l-10%206.153c-0.473%200.291-1.018%200.446-1.573%200.446s-1.1-0.154-1.573-0.446l-10-6.152c-0.436-0.269-0.796-0.644-1.046-1.092s-0.381-0.951-0.381-1.463v-0.325'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";document.addEventListener("DOMContentLoaded",()=>{const e="https://portfolio-js.b.goit.study/api/requests",n=document.querySelector(".wt-form"),s=document.querySelector(".wt-button"),i=document.getElementById("email-valid-icon"),t=document.querySelector(".wt-input"),o=document.querySelector(".wt-textarea"),c=document.createElement("p");c.textContent="Invalid email, try again",c.style.color="#E74A3B",c.style.display="none",c.classList.add("error-message"),t.insertAdjacentElement("afterend",c);function p(){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.value)?(t.classList.remove("invalid-mail"),i.style.display="inline",c.style.display="none",!0):(t.classList.add("invalid-mail"),i.style.display="none",c.style.display="block",!1)}t.addEventListener("blur",p),console.log("Submit handler attached"),n.addEventListener("submit",async function(l){if(l.preventDefault(),!p()){alert("Please enter a valid email address");return}console.log("Form submitted");const r={email:t.value,comment:o.value||"",timestamp:Date.now()};console.log("Form Data:",r),await B(r)});async function B(l){try{if((await j.post(e,l,{headers:{"Content-Type":"application/json"}})).status===200)k(),n.reset(),i.style.display="none";else throw new Error("Something went wrong on the server")}catch(r){console.error("Error:",r),alert("Error: "+r.message+". Please correct your data and try again.")}}s.addEventListener("submit",function(l){l.preventDefault();const r=p(),a=o.value.trim()!=="";r&&a?k():alert("Please fill in all required fields correctly.")});function k(){const l=document.body,r=document.createElement("div");r.classList.add("backdrop");const a=document.createElement("div");a.classList.add("wt-modal");const m=document.createElement("button");m.classList.add("modal-close-btn"),m.setAttribute("type","button");const u=document.createElement("svg");u.classList.add("modal-close-icon"),u.innerHTML=`<use href="${F}#icon-wt-close-btn_x">`,m.appendChild(u),a.appendChild(m);const g=document.createElement("h2");g.classList.add("wt-modal-title"),g.textContent="Thank you for your interest in cooperation!";const h=document.createElement("p");h.classList.add("wt-modal-text"),h.textContent="The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",a.appendChild(g),a.appendChild(h),r.appendChild(a),l.appendChild(r);function y(){l.removeChild(r)}m.addEventListener("click",y),r.addEventListener("click",function(v){v.target===r&&y()}),document.addEventListener("keydown",function(v){v.key==="Escape"&&y()})}});
//# sourceMappingURL=index.js.map
