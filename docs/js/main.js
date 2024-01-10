const o=document.querySelector(".js__input"),d=document.querySelector(".js__form"),n=document.querySelector(".js__favoritesUl"),l=document.querySelector(".js__character-list");let a=[];function f(e){const t=e.imageUrl?e.imageUrl:"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";l.innerHTML+=`
        <li class="cards__list js__characters-li" data-id="${e._id}">
        
            <img class="img__card" src="${t}"/>    
            <h3 class="name">${e.name}</h3>
        
        </li>
    `}function i(){l.innerHTML="";for(const t of a)f(t);const e=document.querySelectorAll(".js__characters-li");for(const t of e)t.addEventListener("click",h)}function h(e){const t=e.currentTarget;t.classList.toggle("favorites");const c=parseInt(t.dataset.id);if(!n.querySelector(`[data-id="${c}"]`)){const r=a.find(s=>s._id===c);if(r){const s=r.imageUrl?r.imageUrl:"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";n.innerHTML+=`
                <li class="cards__list js__characters-li" data-id="${c}">
                    <img class="img__card" src="${s}"/>    
                    <h3 class="name">${r.name}</h3>
                </li>
            `}}}d.addEventListener("submit",e=>{e.preventDefault(),fetch(`//api.disneyapi.dev/character?name=${o.value}`).then(t=>t.json()).then(t=>{a=t.data,i()}).catch(t=>console.error("Error al obtener datos:",t))});i();fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{a=e.data,i()});
//# sourceMappingURL=main.js.map
