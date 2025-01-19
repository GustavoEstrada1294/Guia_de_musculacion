//Informacion de las tablas almacenadas en un objeto

const tablasInformacion = {
    whey: `
    <table class="tabla">
        <caption>Informacion<span id='cerrar-tabla'>X</span></caption>
        <thead>
                <tr>
                    <th>Suplemento</th>
                    <th>Modo de uso</th>
                    <th>Dosis recomendada</th>
                    <th>Función</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Proteína Whey</td>
                    <td>Al despertar o después de entrenar</td>
                    <td>1.8 g por peso corporal</td>
                    <td>Construcción de masa muscular</td>
                </tr>
            </tbody>
    </table>
    `,
    creatina: `
    <table>
        <caption>Informacion<span id='cerrar-tabla'>X</span></caption>
        <thead>
                <tr>
                    <th>Suplemento</th>
                    <th>Modo de uso</th>
                    <th>Dosis recomendada</th>
                    <th>Función</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>creatina</td>
                    <td>Antes de entrenar</td>
                    <td>5gr. diarios</td>
                    <td>ayuda con la potencia fuerza y resistencia</td>
                </tr>
            </tbody>
    </table>
    `,
    preentreno:`
    <table>
        <caption>Informacion<span id='cerrar-tabla'>X</span></caption>
        <thead>
                <tr>
                    <th>Suplemento</th>
                    <th>Modo de uso</th>
                    <th>Dosis recomendada</th>
                    <th>Función</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>creatina</td>
                    <td>Antes de entrenar</td>
                    <td>5gr. diarios</td>
                    <td>ayuda con la potencia fuerza y resistencia</td>
                </tr>
            </tbody>
    </table>
    `,
    glutamina:`
    <table>
        <caption>Informacion<span id='cerrar-tabla'>X</span></caption>
        <thead>
                <tr>
                    <th>Suplemento</th>
                    <th>Modo de uso</th>
                    <th>Dosis recomendada</th>
                    <th>Función</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>creatina</td>
                    <td>Antes de entrenar</td>
                    <td>5gr. diarios</td>
                    <td>ayuda con la potencia fuerza y resistencia</td>
                </tr>
            </tbody>
    </table>
    `,
    glucosamina:`
    <table>
        <caption>Informacion<span id='cerrar-tabla'>X</span></caption>
        <thead>
                <tr>
                    <th>Suplemento</th>
                    <th>Modo de uso</th>
                    <th>Dosis recomendada</th>
                    <th>Función</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>creatina</td>
                    <td>Antes de entrenar</td>
                    <td>5gr. diarios</td>
                    <td>ayuda con la potencia fuerza y resistencia</td>
                </tr>
            </tbody>
    </table>
    `,
    carnitina:`
    <table>
        <caption>Informacion<span id='cerrar-tabla'>X</span></caption>
        <thead>
                <tr>
                    <th>Suplemento</th>
                    <th>Modo de uso</th>
                    <th>Dosis recomendada</th>
                    <th>Función</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>creatina</td>
                    <td>Antes de entrenar</td>
                    <td>5gr. diarios</td>
                    <td>ayuda con la potencia fuerza y resistencia</td>
                </tr>
            </tbody>
    </table>
    `
};
//Aañado evento a todos los botones
document.querySelectorAll('.boton-suplementos').forEach(button =>{
    button.addEventListener('click', function handleClick(){
        const target = this.dataset.target;
        const cambioDiv = this.closest('.texto-boton');
        const contenidoOriginal = cambioDiv.innerHTML;

        //Mostrar la tabla correspondiente
        cambioDiv.innerHTML = `
            ${tablasInformacion[target]}`;
        
        //añadir el evento del boton cerrar
        const cerrarTabla = cambioDiv.querySelector('#cerrar-tabla');
        cerrarTabla.addEventListener('click', function(){
            cambioDiv.innerHTML = contenidoOriginal;
        
        // Reasignar eventos al botón nuevamente
            const botonRestaurado = cambioDiv.querySelector('.boton-suplementos');
            botonRestaurado.addEventListener('click', handleClick);
        });
    });
});