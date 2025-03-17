/* // src/hooks/useProductos.js
import { useState } from 'react';
//ropa que va a usar el avatar en cuanquier parte de la pagina(ropa definida por usuario o ropa normal)
const usePrendas = () => {
    const [clothingModels2] = useState([{ tipo: 'cap2', scale: 20, position: [0, 0, 0], url: '/model.glb' }]);


    return clothingModels2;


};

export default usePrendas; */

// src/hooks/useProductos.js
import { useState } from 'react';
//ropa que va a usar el avatar en cuanquier parte de la pagina(ropa definida por usuario o ropa normal)
const usePrendas = () => {
    const [clothingModels2] = useState([
        {
            id: 1,
            precio: 500,
            imagen: 'https://eoihuercalovera.es/cdn/51Pj6Dl4pjL._UY650_.jpg',
            titulo: 'Pantalon corto',
            descripcion: 'Pantalon.',
            medidas: { altura: 70, ancho: 50, profundidad: 10 },
            comentarios: [
                { usuario: 'Juan', comentario: 'Muy buena calidad', puntuacion: 4 },
                { usuario: 'María', comentario: 'Cómoda pero se encoge al lavar', puntuacion: 3 }
            ],
            promedioPuntuacion: 3.5,
            cantidad: 1,
            muestra: { scale: 0.05, position: [0, -1, 0], url: '/ropa/pantalon.glb' },
            tipo: 'pants',
            url: '/ropa/pantalon.glb',
            scale: 0.024,
            position: [0, 0.56, 0.05],
            color: 'red'
        },
        {
            id: 2,
            precio: 1000,
            imagen: 'https://vikati.net/wp-content/uploads/2023/06/remera-over-negra-300x300.png',
            titulo: 'Remera Oversize',
            descripcion: 'Una remera.',
            medidas: { altura: 4, ancho: 4, profundidad: 1 },
            muestra: { scale: 6, position: [0, -1, 0], url: '/ropa/remeraover.glb' },
            comentarios: [
                { usuario: 'Carlos', comentario: 'Muy útil para deportes', puntuacion: 5 },
                { usuario: 'Ana', comentario: 'El cronómetro es preciso', puntuacion: 4 }
            ],
            promedioPuntuacion: 4.5,
            cantidad: 1,
            tipo: 'shirt',
            url: '/ropa/remeraover.glb',
            scale: 4,
            position: [0, 0.9, 0],
            color: 'blue'
        }
    ]);


    return clothingModels2;


};

export default usePrendas;
