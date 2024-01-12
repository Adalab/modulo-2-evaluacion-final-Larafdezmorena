const d=document.querySelector(".js__input"),f=document.querySelector(".js__form"),l=document.querySelector(".js__favoritesUl"),o=document.querySelector(".js__character-list");let t=[];function h(e){const a=e.imageUrl?e.imageUrl:"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";o.innerHTML+=`
        <li class="cards__list js__characters-li" data-id="${e._id}">
        
            <img class="img__card" src="${a}"/>    
            <h3 class="name">${e.name}</h3>
        
        </li>
    `}function r(){o.innerHTML="";for(const a of t)h(a);const e=document.querySelectorAll(".js__characters-li");for(const a of e)a.addEventListener("click",_)}function _(e){const a=e.currentTarget;a.classList.toggle("favorites");const c=parseInt(a.dataset.id);if(!l.querySelector(`[data-id="${c}"]`)){const s=t.find(n=>n._id===c);if(s){const n=s.imageUrl?s.imageUrl:"https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";l.innerHTML+=`
                <li class="cards__favs js__characters-li" data-id="${c}">
                    <img class="img__card" src="${n}"/>    
                    <h3 class="name__favs">${s.name}</h3>
                    <span class="delete__icon js__delete-icon"><i class="fa-solid fa-trash"></i></span> 
                </li>
            `}}}f.addEventListener("submit",e=>{e.preventDefault(),fetch(`//api.disneyapi.dev/character?name=${d.value}`).then(a=>a.json()).then(a=>{t=a.data,r()}).catch(a=>console.error("Error al obtener datos:",a))});r();const i=JSON.parse(localStorage.getItem("disneyCharacters"));i===null?fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{t=e.data,console.log("llegan los datos"),localStorage.setItem("disneyCharacters",JSON.stringify(t)),r()}):(t=i,r());
//# sourceMappingURL=main.js.map
