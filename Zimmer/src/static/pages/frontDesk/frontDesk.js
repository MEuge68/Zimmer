
const toggleButton = document.querySelector(".toggle-btn");
const header = document.querySelector(".header");
const spanToggle = document.querySelector(".header .toggle-btn span");
let cardContainer = document.querySelector(".section_rooms_cardContainer");

let habitaciones = "";
let data = "";
let cardData = "";

console.log(cardContainer);








setInterval(async () => {
    habitaciones = await fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    let data = await habitaciones.json(habitaciones)

    for(let i=0;i<data.length;i++){
        cardData += `
            <div class="section_rooms_cardContainer_card">
                <h3 class="section_rooms_cardContainer_card_id"> ${data[i].id} </h3>
                <h4 class="section_rooms_cardContainer_card_name"> ${data[i].name} </h4>
                <div class="section_rooms_cardContainer_card_states">
                    <select>
                        <option value="sucia_desocupada">Sucia-Desocupada</option>
                        <option value="sucia_ocupada">Sucia-Ocupada</option>
                        <option value="disponible">Disponible</option>
                        <option value="limpia_ocupada">Limpia-Ocupada</option>
                        <option value="mantenimiento_ocupada">Mantenimiento-Ocupada</option>
                        <option value="mantenimiento_desocupada">Mantenimiento-Desocupada</option>
                    </select>
                </div>
            </div>
        `
    }



    cardContainer.innerHTML = `${cardData}`

    cardData = "";

},(5000))

// 1000 * 60 * 5


// Header


let isActive = false;

console.log(toggleButton);
console.log(header);
console.log(spanToggle);


toggleButton.addEventListener("click",() => {
    header.classList.toggle("active");

    isActive = !isActive;

    if(isActive){
        spanToggle.innerHTML = "<span><</span>"
    }else{
        spanToggle.innerHTML = "<span>></span>"
    }
})

// -------