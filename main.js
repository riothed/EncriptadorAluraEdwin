let d = document;

/*  Selección de Elementos del DOM (Document Object Model): selecciona los elementos HTML relevantes utilizando document.querySelector(), asignándolos a variables para usarlos posteriormente en el código*/

const btnEncriptar = d.querySelector('.btn-encriptar');
const btnDesencriptar = d.querySelector('.btn-desencriptar');
const txtEncriptar = d.querySelector('.encriptar');
const textoAviso = d.querySelector('.aviso-texto');
const respuesta = d.querySelector('.evaluar');
const contenidoTarjetaContainer = d.querySelector('.tarjeta-container');
const btnCopy = d.querySelector('.btn-copy');

// Verificación de elementos antes de usarlos
if (btnEncriptar && btnDesencriptar && txtEncriptar && textoAviso && respuesta && contenidoTarjetaContainer && btnCopy) 
{
    // Aquí va la lógica relacionada con estos elementos.

    //Botón "Encriptar"
    btnEncriptar.addEventListener('click', e=> 
        {
            //e.preventDefault(); : Previene el comportamiento predeterminado del formulario (por ejemplo, evitar la recarga de la página al enviar el formulario)
            e.preventDefault();
            let valorTexto = txtEncriptar.value;
            
            // Función para validar el texto
            // Normalización y eliminación de caracteres especiales
            let txt = valorTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
            console.log(txt);

            // Función para mostrar mensajes de advertencia
            function mostrarAviso(mensaje) 
            {
                textoAviso.classList.add('mostrar-aviso');
                textoAviso.textContent = mensaje;

                setTimeout(() => {
                    textoAviso.classList.remove('mostrar-aviso');
                }, 2000);
            }

            // Función para encriptar el texto
            function encriptarTexto(texto) 
            {
                const encriptaciones = {
                    'e': 'enter',
                    'i': 'imes',
                    'a': 'ai',
                    'o': 'ober',
                    'u': 'ufat'
                };
                return texto.replace(/[eioua]/g, match => encriptaciones[match]);
            }


            // Validaciones
            if (valorTexto === "") 
                {
                    mostrarAviso("El campo de texto no debe estar vacío");
                } 
                else if (valorTexto !== txt) 
                    {
                    mostrarAviso("El texto no debe tener acentos ni caracteres especiales (ñ,/,%,$ etc)");
                    } 
                    else if (valorTexto !== valorTexto.toLowerCase())   
                        {
                        mostrarAviso("El texto debe ser en minúsculas solamente");
                        }
            
            // Función para encriptar el texto
            else 
            {
                const textoEncriptado = encriptarTexto(valorTexto);

                // Mostrar el resultado encriptado
                    respuesta.innerHTML = textoEncriptado;
                    btnCopy.style.visibility = 'inherit';
                    contenidoTarjetaContainer.classList.add('hidden'); // Ocultar en lugar de remover

            }

        }

    );


//Botón "Desencriptar"//


    btnDesencriptar.addEventListener('click', e=> 
     {
        e.preventDefault();
        const valorTexto = txtEncriptar.value;
    
        if (!validarTexto(valorTexto)) return;
    
        const textoDesencriptado = desencriptarTexto(valorTexto);
        mostrarResultado(textoDesencriptado);
        }
    );
    
    function validarTexto(texto) {
        const txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
        if (texto === "") {
            mostrarAviso("El campo de texto no debe estar vacío");
            return false;
        } else if (texto !== txt) {
            mostrarAviso("El texto no debe tener acentos ni caracteres especiales (ñ,/,%,$ etc)");
            return false;
        } else if (texto !== texto.toLowerCase()) {
            mostrarAviso("El texto debe ser en minúsculas solamente");
            return false;
        }
        return true;
    }
    
    function desencriptarTexto(texto) {
        const desencriptaciones = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return texto.replace(/enter|imes|ai|ober|ufat/g, match => desencriptaciones[match]);
    }
    
    function mostrarAviso(mensaje) {
        textoAviso.classList.add('mostrar-aviso');
        textoAviso.textContent = mensaje;
    
        setTimeout(() => {
            textoAviso.classList.remove('mostrar-aviso');
        }, 2000);
    }
    
    function mostrarResultado(texto) {
        respuesta.innerHTML = texto;
        btnCopy.style.visibility = 'inherit';
        contenidoTarjetaContainer.classList.add('hidden');
    }

   


/* Botón "Copiar Texto"*/

    btnCopy.addEventListener('click', e=> {

        e.preventDefault();

        const copiarTexto = respuesta.value; // Asumiendo que 'respuesta' es un <textarea> o <input>
        navigator.clipboard.writeText(copiarTexto)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                alert('Hubo un error al copiar el texto');
                console.error('Error al copiar el texto:', err);
            });

    });
}