//informacion en pagina principal 

//SELECCION DE IMAGEN
const imagenPecho = document.getElementById('imagen-pecho');
//agregar funcion
imagenPecho.addEventListener('click', function(){
    //Creo texto que remplaza la imagen
    const texto = document.createElement('div');
    texto.className = 'info-musculos';
    texto.textContent = `Los músculos pectorales son los músculos que se encuentran en el pecho y conectan la parte delantera
    del pecho con la parte superior del brazo y el hombro. Los principales músculos pectorales son el pectoral mayor y el pectoral
    menor.`
  
    //creo el boton
    const boton = document.createElement('a');
    boton.href = 'pecho.html';
    boton.className = 'boton-enlace';
    boton.textContent = 'Mas informacion';
    //agrego boton al texto
    texto.appendChild(boton);
//Rempalzo la imagen por la informacion
    imagenPecho.replaceWith(texto);

});

//Informacion hombros
const imagenHombros = document.getElementById('imagen-hombros');
imagenHombros.addEventListener('click', function(){
//Creo lo que remplazara la imagen
const texto = document.createElement('div');
texto.className = 'info-musculos';
texto.textContent = `Los músculos del hombro proporcionan soporte y movimiento a la cintura escapular. 
Además unen el esqueleto apendicular del miembro superior con el esqueleto axial del tronco. 
Cuatro de ellos se encuentran en el aspecto anterior del hombro,
mientras que el resto se ubican en el aspecto posterior y en la espalda.`
 //CReo el boton
 const boton = document.createElement('a');
 boton.href = 'hombros.html';
 boton.className = 'boton-enlace';
 boton.textContent = 'Mas informacion';

 texto.appendChild(boton);
 imagenHombros.replaceWith(texto)
});

//informacion de espalda
const imagenEspalda = document.getElementById('imagen-espalda');
//Creo el evento remplaze mi imagen con el click
imagenEspalda.addEventListener('click', function(){
    //Creo lo que remplaza la imagen
    const texto = document.createElement('div');
    texto.className ='info-musculos';
    texto.textContent = `Los músculos de la espalda o del dorso son un grupo de músculos fuertes y pareados que se ubican
     en el aspecto posterior del tronco.
     Proporcionan movimiento a la columna, estabilidad al tronco,
     así como coordinación entre los movimientos de las extremidades y el tronco.`
     //Creo el boton
     const boton = document.createElement('a');
     boton.href = 'espalda.html';
     boton.className = 'boton-enlace';
     boton.textContent = 'Mas informacion';
     //Agrego boton a texto
     texto.appendChild(boton);
     //remplazo imagen con informacion y mi boton de enlace
     imagenEspalda.replaceWith(texto);
});

//informacion brazos
const imagenBrazos = document.getElementById('imagen-brazos');
//Creo el evento remplaze mi imagen con el click
imagenBrazos.addEventListener('click', function(){
    //Creo lo que remplaza la imagen
    const texto = document.createElement('div');
    texto.className ='info-musculos';
    texto.textContent = `Los músculos del brazo son un grupo de cinco músculos ubicados en la región entre el hombro y la articulación del codo.
     Se dividen en dos compartimientos: El compartimiento anterior (flexor) que contiene principalmente al músculo bíceps braquial,
     al coracobraquial y al músculo braquial.`
     //Creo el boton
     const boton = document.createElement('a');
     boton.href = 'brazos.html';
     boton.className = 'boton-enlace';
     boton.textContent = 'Mas informacion';
     //Agrego boton a texto
     texto.appendChild(boton);
     //remplazo imagen con informacion y mi boton de enlace
     imagenBrazos.replaceWith(texto);
});

//informacion piernas
const imagenPiernas = document.getElementById('imagen-piernas');
//Creo el evento remplaze mi imagen con el click
imagenPiernas.addEventListener('click', function(){
    //Creo lo que remplaza la imagen
    const texto = document.createElement('div');
    texto.className ='info-musculos';
    texto.textContent = `Los músculos de las piernas se dividen en tres compartimentos: anterior, posterior y lateral. En cada compartimento se encuentran grupos específicos de músculos. Algunos de los músculos más importantes de las piernas son: 
Cuádriceps
Son los músculos más fuertes y delgados del cuerpo. Se encuentran en la parte frontal del muslo y son los principales extensores de la rodilla. 
Isquiotibiales
Son un grupo de tres músculos que se encuentran en la parte posterior del muslo. Permiten la flexión de la rodilla y la extensión de la pierna hacia atrás. 
Músculos de la ingle
Son un grupo de cinco músculos que conectan la pelvis con el fémur y la tibia. Ayudan a mover la pierna hacia el centro del cuerpo, a estabilizar y a mantener el equilibrio. 
Flexor largo del dedo gordo
Se encuentra en la cara posterior de la pierna y su función es flexionar el dedo gordo del pie. `
     //Creo el boton
     const boton = document.createElement('a');
     boton.href = 'piernas.html';
     boton.className = 'boton-enlace';
     boton.textContent = 'Mas informacion';
     //Agrego boton a texto
     texto.appendChild(boton);
     //remplazo imagen con informacion y mi boton de enlace
     imagenPiernas.replaceWith(texto);
});

//informacion abdomen
const imagenAbdomen = document.getElementById('imagen-abdomen');
//Creo el evento remplaze mi imagen con el click
imagenAbdomen.addEventListener('click', function(){
    //Creo lo que remplaza la imagen
    const texto = document.createElement('div');
    texto.className ='info-musculos';
    texto.textContent = `Los músculos abdominales son los que forman las paredes abdominales,
     siendo el abdomen la porción del tronco que conecta el tórax y la pelvis.
     La pared abdominal está formada por piel,
     fascia y músculo y recubre la cavidad abdominal y las vísceras . `
     //Creo el boton
     const boton = document.createElement('a');
     boton.href = 'abdomen.html';
     boton.className = 'boton-enlace';
     boton.textContent = 'Mas informacion';
     //Agrego boton a texto
     texto.appendChild(boton);
     //remplazo imagen con informacion y mi boton de enlace
     imagenAbdomen.replaceWith(texto);
});
