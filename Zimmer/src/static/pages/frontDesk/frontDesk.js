
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
                <svg class="section_rooms_cardContainer_card_lupa" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                \t width="485.213px" height="485.213px" viewBox="0 0 485.213 485.213" style="enable-background:new 0 0 485.213 485.213;"
                \t xml:space="preserve">
                        <g>
                        \t<g>
                        \t\t<path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324
                        \t\t\tc17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
                        \t\t<path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951
                        \t\t\tC282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46
                        \t\t\tc0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465
                        \t\t\tC318.424,257.208,257.206,318.416,181.956,318.416z"/>
                        \t\t<path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z"/>
                        \t</g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                </svg>
                <div class="section_rooms_cardContainer_card_lupa_references section_rooms_cardContainer_card_lupa_references_show">
                    <ul>
                        <div>
                            <div class="section_rooms_cardContainer_card_lupa_references---limpia"></div>
                            <span>Limpia/Disponible</span>
                        </div>
                        <div>
                            <div class="section_rooms_cardContainer_card_lupa_references---sucia"></div>
                            <span>Sucia</span>
                        </div>
                        <div>
                            <div class="section_rooms_cardContainer_card_lupa_references---mantenimiento"></div>
                            <span>Mantenimiento</span>
                        </div>
                    </ul>
                </div>
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
                <div>
                    <textarea name="observaciones" id="card_observaciones" placeholder="Observaciones - Comentarios" cols="30" rows="4" style="resize: none;"></textarea>
                </div>
            </div>
        `

    }



    cardContainer.innerHTML = `${cardData}`


    cardData = "";

    let select = await document.querySelectorAll(".section_rooms_cardContainer_card_states_select")
    let modales = await document.querySelectorAll(".section_rooms_cardContainer_card_lupa_references")
    let lupas = await document.querySelectorAll(".section_rooms_cardContainer_card_lupa")

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

    for(let i=0;i<lupas.length;i++){
        lupas[i].addEventListener("click",(event) => {
            event.target.classList.toggle("section_rooms_cardContainer_card_lupa_hover")

            modales[i].classList.toggle("section_rooms_cardContainer_card_lupa_references_show")
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