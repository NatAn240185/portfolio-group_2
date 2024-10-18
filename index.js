import{A as M,a as k,S as N,N as A,K as J,i as _}from"./assets/vendor-BaJjRa7X.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const d={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container"),modalLinks:document.querySelectorAll(".mob-nav-tag")};d.openModalBtn.forEach(e=>{e.addEventListener("click",S)});d.closeModalBtn.addEventListener("click",S);d.modal.addEventListener("click",C);function C(e){e.target===e.currentTarget&&d.modal.classList.add("is-active")}function S(){d.modal.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")}d.modalLinks.forEach(e=>{e.addEventListener("click",()=>{d.modal.classList.remove("is-active"),document.body.classList.remove("no-scroll")})});const f=document.getElementById("btn-header");document.getElementById("header-mob-span");let w=!1;f.addEventListener("click",()=>{w=!w;const e=document.documentElement;w?(f.classList.add("right"),e.style.setProperty("--white","#1E2023"),e.style.setProperty("--black","#F0F0F0"),e.style.setProperty("--accent-green","#14C57C"),e.style.setProperty("--light-grey","#2A2D32"),e.style.setProperty("--light-accent","#204136"),e.style.setProperty("--hover-grey","#3B3F45")):(f.classList.remove("right"),e.style.setProperty("--white","#F0F0F0"),e.style.setProperty("--black","#292929"),e.style.setProperty("--accent-green","#00B068"),e.style.setProperty("--light-grey","#E4E5E6"),e.style.setProperty("--light-accent","#BCDFD1"),e.style.setProperty("--hover-grey","#BBBBBB"))});const R="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-visit'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-width='3.5556'%20stroke-miterlimit='4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M3.111%2028.889l25.778-25.778M28.889%203.111h-24M28.889%203.111v24'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",I="/portfolio-group_2/assets/rectangle-5-KXSyIy5O.jpg",F="/portfolio-group_2/assets/rectangle-6-BITc403L.jpg",T="/portfolio-group_2/assets/rectangle-7-eknjt_20.jpg",q="/portfolio-group_2/assets/rectangle-8-F10_StZF.jpg",$="/portfolio-group_2/assets/rectangle-9-BYjOlly2.jpg",D="/portfolio-group_2/assets/rectangle-10-C7X4Z0iv.jpg",O="/portfolio-group_2/assets/rectangle-11-DCZ143EW.jpg",z="/portfolio-group_2/assets/rectangle-12-D0VEquOU.jpg",G="/portfolio-group_2/assets/first-screen-1-BDeN4ZW0.jpg",V="/portfolio-group_2/assets/rectangle-4-DlZ9nugr.jpg",L=[{img:I,title:"English excellence webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:$,title:"wallet webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:z,title:"green harvest online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:q,title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:F,title:"power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:D,title:"energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:O,title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:T,title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:G,title:"mimino website",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"},{img:V,title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",github:"https://github.com/NatAn240185/portfolio-group_2"}];let b=0;const Z=3;function x(){const e=document.getElementById("project-list");for(let l=0;l<Z;l++){if(b>=L.length){document.getElementById("load-more").style.display="none";break}const i=L[b],c=document.createElement("li");c.classList.add("project-item"),c.innerHTML=`
      <img src="${i.img}" alt="${i.title}" class="img">
      <div class="item-text">
        <p class="text">${i.technologies}</p>
        <h3 class="label">${i.title}</h3>
        <a href="${i.github}" class="visit" target="_blank">Visit<svg class="visit-icon" width="15" height="15">
        <use href="/img/my-projects/${R}#icon-visit">
        </svg></a>
      </div>
    `,e.appendChild(c),b++}}x();document.getElementById("load-more").addEventListener("click",x);new M(".accordion-container",{openOnInit:[0]});const j=document.querySelector(".js-reviews-box-list");k.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function H(){console.log("fetching data");try{const e=await k.get("/reviews");return console.log(e.data),e.data}catch{_.error({message:"Error fetching reviews. Please try again later.",position:"topRight"});return}}async function K(){try{const e=await H();if(!e||e.length===0){j.innerHTML='<li class="reviews-error-text">Not Found</li>';return}const l=e.map(i=>`
          <li class="swiper-slide reviews-item">
          <div class="reviews-text">${i.review}</div>

           <div class="reviews-person-details">
            <img src="${i.avatar_url}"
                 loading="lazy"
                 alt="${i.author}"
                 class="reviews-img"
                 width="40" height="40">
                 <h3 class="reviews-subtitle">${i.author}</h3>
                 </div>
          </li>
        `).join("");j.innerHTML=l}catch(e){console.log(e),_.error({message:"Error rendering reviews. Please try again later.",position:"topRight"})}}async function U(){await K(),new N(".reviews-swiper",{modules:[A,J],direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".js-reviews-btn-next",prevEl:".js-reviews-btn-previous"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:2}}})}U();const W="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-wt_input_success-filled-2'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%2300b068'%20style='fill:%20var(--color1,%20%2300b068)'%20d='M16%202c3.713%200%207.274%201.475%209.899%204.1s4.101%206.186%204.101%209.9-1.475%207.274-4.101%209.899c-2.625%202.626-6.186%204.101-9.899%204.101s-7.274-1.475-9.9-4.101c-2.626-2.625-4.1-6.186-4.1-9.899s1.475-7.274%204.1-9.9c2.626-2.626%206.186-4.1%209.9-4.1zM14.256%2018.762l-3.11-3.112c-0.111-0.111-0.244-0.2-0.39-0.26s-0.302-0.091-0.459-0.091-0.314%200.031-0.459%200.091c-0.146%200.060-0.278%200.149-0.39%200.26-0.225%200.225-0.352%200.531-0.352%200.849s0.127%200.624%200.352%200.849l3.96%203.96c0.111%200.112%200.243%200.201%200.389%200.262s0.302%200.092%200.46%200.092%200.314-0.031%200.46-0.092c0.146-0.061%200.278-0.15%200.389-0.262l8.2-8.202c0.113-0.111%200.203-0.243%200.264-0.389s0.094-0.303%200.094-0.461c0.001-0.158-0.030-0.315-0.090-0.462s-0.149-0.28-0.261-0.392c-0.112-0.112-0.245-0.201-0.391-0.261s-0.303-0.091-0.462-0.091-0.315%200.032-0.461%200.094-0.278%200.151-0.39%200.264l-7.354%207.354z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt-close-btn_x'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M24%208l-16%2016'%3e%3c/path%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M8%208l16%2016'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt_icon_1-1'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M3%209c0%2011.045%208.955%2020%2020%2020h3c1.657%200%203-1.343%203-3v0-1.829c0-0.688-0.468-1.288-1.136-1.455l-5.897-1.475c-0.587-0.147-1.203%200.073-1.564%200.556l-1.293%201.724c-0.376%200.501-1.025%200.723-1.613%200.507-4.43-1.661-7.863-5.094-9.488-9.413l-0.036-0.111c-0.216-0.588%200.005-1.237%200.507-1.613l1.724-1.293c0.484-0.361%200.703-0.979%200.556-1.564l-1.475-5.897c-0.169-0.657-0.756-1.136-1.455-1.136h-1.829c-1.657%200-3%201.343-3%203v0%203z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt_icon_3-2'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M20%2014c0%201.061-0.421%202.078-1.172%202.828s-1.768%201.172-2.828%201.172-2.078-0.421-2.828-1.172c-0.75-0.75-1.172-1.768-1.172-2.828s0.421-2.078%201.172-2.828%201.768-1.172%202.828-1.172%202.078%200.421%202.828%201.172%201.172%201.768%201.172%202.828v0z'%3e%3c/path%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M26%2014c0%209.523-10%2015-10%2015s-10-5.477-10-15c0-2.652%201.054-5.196%202.929-7.071s4.419-2.929%207.071-2.929%205.196%201.054%207.071%202.929%202.929%204.419%202.929%207.071v0z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-wt_icon_2-2'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%2300b068'%20style='stroke:%20var(--color1,%20%2300b068)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.3333'%20d='M29%209v14c0%200.796-0.316%201.559-0.879%202.121s-1.326%200.879-2.121%200.879h-20c-0.796%200-1.559-0.316-2.121-0.879s-0.879-1.326-0.879-2.121v-14M29%209c0-0.796-0.316-1.559-0.879-2.121s-1.326-0.879-2.121-0.879h-20c-0.796%200-1.559%200.316-2.121%200.879s-0.879%201.326-0.879%202.121M29%209v0.324c0%200.512-0.131%201.016-0.381%201.463s-0.61%200.823-1.046%201.092l-10%206.153c-0.473%200.291-1.018%200.446-1.573%200.446s-1.1-0.154-1.573-0.446l-10-6.152c-0.436-0.269-0.796-0.644-1.046-1.092s-0.381-0.951-0.381-1.463v-0.325'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";document.addEventListener("DOMContentLoaded",()=>{const e="https://portfolio-js.b.goit.study/api/requests",l=document.querySelector(".wt-form"),i=document.querySelector(".wt-button"),c=document.getElementById("email-valid-icon"),t=document.querySelector(".wt-input"),s=document.querySelector(".wt-textarea"),n=document.createElement("p");n.textContent="Invalid email, try again",n.style.color="#E74A3B",n.style.display="none",n.classList.add("error-message"),t.insertAdjacentElement("afterend",n);function g(){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.value)?(t.classList.remove("invalid-mail"),c.style.display="inline",n.style.display="none",!0):(t.classList.add("invalid-mail"),c.style.display="none",n.style.display="block",!1)}t.addEventListener("blur",g),console.log("Submit handler attached");const B={email:t.value,comment:s.value||""};l.addEventListener("submit",async function(r){if(r.preventDefault(),!g()){alert("Please enter a valid email address");return}const o={email:t.value,comment:s.value||""};console.log("Form submitted"),await E(o)});async function E(r){try{const o=await k.post(e,r,{headers:{"Content-Type":"application/json"}});if(o.status===200)console.log("Запит успішно відправлено:",o.data);else throw new Error(`Помилка сервера. Статус: ${o.status}`);return o.data}catch(o){throw console.error("Помилка при надсиланні запиту:",o.message),o}}E(B).then(r=>{console.log("Успішна відповідь:",r)}).catch(r=>{console.error("Помилка запиту:",r.message)}),i.addEventListener("click",function(r){r.preventDefault();const o=g(),a=s.value.trim()!=="";o&&a?P():alert("Please fill in all required fields correctly.")});function P(){const r=document.body,o=document.createElement("div");o.classList.add("backdrop");const a=document.createElement("div");a.classList.add("wt-modal");const p=document.createElement("button");p.classList.add("modal-close-btn"),p.setAttribute("type","button");const u=document.createElement("svg");u.classList.add("modal-close-icon"),u.innerHTML=`<use href="${W}#icon-wt-close-btn_x">`,p.appendChild(u),a.appendChild(p);const m=document.createElement("h2");m.classList.add("wt-modal-title"),m.textContent="Thank you for your interest in cooperation!";const h=document.createElement("p");h.classList.add("wt-modal-text"),h.textContent="The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",a.appendChild(m),a.appendChild(h),o.appendChild(a),r.appendChild(o);function v(){r.removeChild(o)}p.addEventListener("click",v),o.addEventListener("click",function(y){y.target===o&&v()}),document.addEventListener("keydown",function(y){y.key==="Escape"&&v()})}});
//# sourceMappingURL=index.js.map
