window.onload = () => {
    // Crear tarjetas
    crearTarjetas(filosofos)

    // Crear handlers para los botones de control
    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click',crearNuevaTarjeta);

    let botonOrdenarAZ = document.getElementById('ordenAZ');
    botonOrdenarAZ.addEventListener('click', ordenarNombreAZ);

    let botonOrdenarZA = document.getElementById('ordenZA');
    botonOrdenarZA.addEventListener('click', ordenarNombreZA);

    let botonGuardarTarjeta = document.getElementById('guardar_Tarjetas');
    botonGuardarTarjeta.addEventListener('click', guardarTarjetas);

    let botoncargarTarjetas = document.getElementById('cargar_Tarjetas');
    botoncargarTarjetas.addEventListener('click', cargarTarjetas);
}

function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);
        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);
        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');
        info.append(filaInfo);

        // Añadimos info del país a filaInfo
   
        let pais = document.createElement('div');
        pais.classList.add('info-item');
        pais.innerHTML = `<img src="${filosofo.pais.bandera}"> ${filosofo.pais.nombre}`;
        filaInfo.append(pais);

        // Añadimos info de la corriente a filaInfo
        
        let corriente = document.createElement('div');
        corriente.classList.add('info-corriente');
        corriente.innerHTML = `Corriente: ${filosofo.corriente}`;
        filaInfo.append(corriente);

        // Añadimos info del arma a filaInfo
    
        let arma = document.createElement('div');
        arma.classList.add('info-arma');
        arma.innerHTML = `Arma: ${filosofo.arma}`;
        filaInfo.append(arma);
        

        // Añadimos caja de habilidades
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        info.append(habilidades);
        // Añadimos una a una las habilidades
        for (let infoHabilidad of filosofo.habilidades) {
            // Añadimos una caja de habilidad

            let habilidad = document.createElement('div');
            habilidad.classList.add('skill'); 

            // Añadimos contenido caja de habilidad
            // 1.Icono de habilidad

            let icono = document.createElement('img');
            // icono.src = infoHabilidad.icono;
            icono.setAttribute('src', 'https://via.placeholder.com/16')
            icono.setAttribute('alt', "Icono de " + infoHabilidad.habilidad);
            habilidad.append(icono);

            // 2.Etiqueta de habilidad

            let etiqueta = document.createElement('span');
            etiqueta.classList.add('label');
            etiqueta.innerHTML = `${infoHabilidad.habilidad}`;
            habilidad.append(etiqueta);

            // 2.Barra de habilidad
            let barra = document.createElement('div');
            barra.classList.add('skill-bar');

            let nivel = document.createElement('div');
            nivel.classList.add('level');

            nivel.setAttribute('style', `width: ${infoHabilidad.nivel / 4 *100}%`);

            barra.append(nivel)
            habilidad.append(barra);

            habilidades.append(habilidad);
        }

        let botonEliminar = document.createElement('div');
        botonEliminar.innerHTML = "&#x2716";
        botonEliminar.classList.add('delete-btn');
        botonEliminar.addEventListener('click', eliminarTarjeta); 
        tarjeta.append(botonEliminar);

        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    })
}

function eliminarTarjeta(event) {
    event.target.parentElement.remove(); 
}

function ordenarNombreAZ() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    // Completar codi

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    contenedor.innerHTML = '';

    for(let tarjetas of tarjetasOrdenadas){
        contenedor.append(tarjetas)
    }
    // Completar codi
}

function ordenarNombreZA() {
    // Obtenir totes les targetes en un array
    let tarjetas = Array.from(document.querySelectorAll('.card'));

    // Ordenar targetes alfabèticament en ordre descendent
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre2.localeCompare(nombre1); // Inverteix l'ordre
    });

    // Eliminar totes les targetes del contenidor
    let contenedor = document.querySelector('.cards-container');
    contenedor.innerHTML = ''; // Esborra tot el contingut del contenidor

    for(let tarjetas of tarjetasOrdenadas){
        contenedor.append(tarjetas)
    }
    // Afegir les targetes ordenades al contenidor
    
}



function crearNuevaTarjeta(event) {
    event.preventDefault();
    let nuevoFilosofo = {};
    nuevoFilosofo.nombre = document.querySelector('.create-card-form .nombre').value;
    nuevoFilosofo.imagen = document.querySelector('.create-card-form .foto').value;
    nuevoFilosofo.pais = {};
    nuevoFilosofo.pais.nombre = document.querySelector('.create-card-form .pais').value;
    nuevoFilosofo.pais.bandera = document.querySelector('.create-card-form .bandera').value;

    nuevoFilosofo.corriente = document.querySelector('.create-card-form .corriente').value;
    nuevoFilosofo.arma = document.querySelector('.create-card-form .arma').value;
    // Completar la función

    crearTarjetas(nuevoFilosofo);
   
}

function parsearTarjetas(tarjetas){
    let filosofosParseados = [];
    for (let tarjeta of tarjetas){
        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;
        filosofo.imagen = tarjeta.querySelector('.photo').src;
        filosofo.pais = {};
        ilosofo.pais.nombre = tarjeta.querySelector('.info-item').innerText;  
        filosofo.pais.bandera = tarjeta.querySelector('.info-item img').src;

        filosofo.corriente = tarjeta.querySelector('.info-corriente').innerText;
        filosofo.arma = tarjeta.querySelector('.info-arma').innerText;

        filosofo.habilidades = [];


        let habilidades = tarjeta.querySelectorAll('.skill');
        for (let habilidad of habilidades){
            let habilidadParaGuardar = {};
            habilidadParaGuardar.nombre = habilidad.querySelector('.label').innerText; 
            habilidadParaGuardar.icono = habilidad.querySelector('img').src; 
            habilidadParaGuardar.nivel = parseInt(habilidad.querySelector('.skill-bar .level').style.width.replace('%', '')) / 100 * 4; 
            filosofo.habilidades.push(habilidadParaGuardar);
        }
        filosofosParseados.push(filosofo);
    }
    return filosofosParseados;
}

function guardarTarjetas(){
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas',JSON.stringify(parsearTarjetas(tarjetas)));
}


function cargarTarjetas() {
    let datosGuardados = localStorage.getItem('tarjetas');

    if (datosGuardados) {
         // Amb això llegeim les dades emmagatzemades.
        let filosofosDesats = JSON.parse(datosGuardados);
        //Això es per borrar les targetes que tenim en aquell moment.
        let contenedor = document.querySelector('.cards-container');
        contenedor.innerHTML = '';

        // Despres de borrar les targetes que tenim creem les noves targetes a partir de les dades desades.
        crearTarjetas(filosofosDesats);
    } else {
        console.log("No hi ha targetes Guardades.");
    }
}


const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]