const o=document.querySelector(".js__input"),d=document.querySelector(".js__form"),i=document.querySelector(".js__favoritesUl"),l=document.querySelector(".js__character-list");let r=[];function f(e){const t=e.imageUrl?e.imageUrl:"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";l.innerHTML+=`
        <li class="cards__list js__characters-li" data-id="${e._id}">
        
            <img class="img__card" src="${t}"/>    
            <h3 class="name">${e.name}</h3>
        
        </li>
    `}function n(){l.innerHTML="";for(const t of r)f(t);const e=document.querySelectorAll(".js__characters-li");for(const t of e)t.addEventListener("click",h)}function h(e){const t=e.currentTarget;t.classList.toggle("favorites");const s=parseInt(t.dataset.id);if(!i.querySelector(`[data-id="${s}"]`)){const a=r.find(c=>c._id===s);if(a){const c=a.imageUrl?a.imageUrl:"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";i.innerHTML+=`
                <li class="cards__favs js__characters-li" data-id="${s}">
                    <img class="img__card" src="${c}"/>    
                    <h3 class="name__favs">${a.name}</h3>
                </li>
            `}}}d.addEventListener("submit",e=>{e.preventDefault(),fetch(`//api.disneyapi.dev/character?name=${o.value}`).then(t=>t.json()).then(t=>{r=t.data,n()}).catch(t=>console.error("Error al obtener datos:",t))});n();fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{r=e.data,n()});
//# sourceMappingURL=main.js.map
