
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
    const arrayEstados = ["disponible","sucia_desocupada","sucia_ocupada","limpia_ocupada","mantenimiento_ocupada","mantenimiento_desocupada"];
    let arrayEstadoSeleccionado = "disponible";

    if(arrayEstadoSeleccionado.includes("sucia")){
        claseCss = "habitacion__sucia";
    }else if(arrayEstadoSeleccionado.includes("limpia") || arrayEstadoSeleccionado.includes("disponible")){
        claseCss = "habitacion__limpia";
    }else if(arrayEstadoSeleccionado.includes("mantenimiento")){
        claseCss = "habitacion__mantenimiento";
    }

    for(let i=0;i<data.length;i++){
        cardData += `
            <div class="section_rooms_cardContainer_card ${claseCss}">
                <h3 class="section_rooms_cardContainer_card_id"> ${data[i].id} </h3>
                <h4 class="section_rooms_cardContainer_card_name"> ${data[i].name} </h4>
                <div class="section_rooms_cardContainer_card_states">
                
        `

        let estadosCarta = arrayEstados.filter((estado) => estado !== arrayEstadoSeleccionado)

        cardData += `
                    <select class="section_rooms_cardContainer_card_states_select ">
                        <option value=${arrayEstadoSeleccionado}>${arrayEstadoSeleccionado}</option>
                        <option value=${estadosCarta[0]}>${estadosCarta[0]}</option>
                        <option value=${estadosCarta[1]}>${estadosCarta[1]}</option>
                        <option value=${estadosCarta[2]}>${estadosCarta[2]}</option>
                        <option value=${estadosCarta[3]}>${estadosCarta[3]}</option>
                        <option value=${estadosCarta[4]}>${estadosCarta[4]}</option>
                    </select>
                </div>
            </div>
        `

    }



    cardContainer.innerHTML = `${cardData}`


    cardData = "";

    let select = await document.querySelectorAll(".section_rooms_cardContainer_card_states_select")



    for(let i=0;i<select.length;i++){
        select[i].addEventListener("change",(event) =>{

            let claseCss;
            console.log(event.target.value);


            if(event.target.value.includes("sucia")){
                claseCss = "habitacion__sucia";
            }else if(event.target.value.includes("limpia") || event.target.value.includes("disponible")){
                claseCss = "habitacion__limpia";
            }else if(event.target.value.includes("mantenimiento")){
                claseCss = "habitacion__mantenimiento";
            }


            console.log(event.target.value)

            console.log(event.target.parentElement);
            console.log(event.target.parentNode);


            console.log(claseCss);

            // Eliminando clases de estilo anteriores

            event.target.parentElement.parentElement.classList.remove("habitacion__sucia")
            event.target.parentElement.parentElement.classList.remove("habitacion__limpia")
            event.target.parentElement.parentElement.classList.remove("habitacion__mantenimiento")

            // Añadiendo nueva clase de estilo

            event.target.parentElement.parentElement.classList.add(claseCss)
        })
    }

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