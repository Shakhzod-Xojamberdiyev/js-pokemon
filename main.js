var pokeList = document.querySelector(".poke-list");
pokeList.classList.add("d-flex", "justify-content-between", "align-items-center", "flex-wrap")


for (var poke of pokemons){
   var pokeItem = document.createElement("li");
   pokeItem.style.width = "280px"
   pokeItem.style.position = "relative";
   pokeItem.classList.add("d-flex", "flex-column", "align-items-center", "m-3", "bg-white", "mx-auto")
   
   var pokeBadge = document.createElement("span");
   pokeBadge.classList.add("position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger");
   
   var pokeTitle = document.createElement("h2");
   pokeTitle.classList.add("p-3", "mb-0");

   var pokeImgBox = document.createElement("div")
   pokeImgBox.classList.add("img-box");

   var pokeImg = document.createElement("img");
   pokeImg.classList.add("p-5");

   var pokeTimeBox = document.createElement("div");
   pokeTimeBox.classList.add("position-relative", "w-100", "time-box")

   var pokeText = document.createElement("p");
   pokeText.classList.add("text-center","my-3");
   var pokeTime = document.createElement("time");
   pokeTime.classList.add("position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-warning");

   pokeItem.classList.add("poke-item")

   pokeBadge.textContent = poke.num;
   pokeTitle.textContent = poke.name;
   pokeImg.src = poke.img;
   pokeImg.width = "250";
   pokeImg.height = "250";
   pokeImg.alt = poke.name;
   pokeText.textContent = poke.type.join(" ");
   pokeTime.textContent =  poke.spawn_time;
   pokeTime.setAttribute("datetime", `2022-10-18 ${poke.spawn_time}`);
   
   pokeItem.appendChild(pokeBadge);
   pokeItem.appendChild(pokeTitle);
   pokeImgBox.appendChild(pokeImg);
   pokeItem.appendChild(pokeImgBox);
   pokeTimeBox.appendChild(pokeTime);
   pokeTimeBox.appendChild(pokeText);
   pokeItem.appendChild(pokeTimeBox);

   pokeList.appendChild(pokeItem);


}