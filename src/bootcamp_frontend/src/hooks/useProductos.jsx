import { useState, useEffect } from 'react';
import { bootcamp_backend } from 'declarations/bootcamp_backend';

const useProductos = (id) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                bootcamp_backend.listarProductos().then((product) => {
                    console.log(product)
                    if (id) {
                        /* console.log(product[0].id==id)
                        console.log(product.filter((prod) => prod.id == id)) */
                        setProductos(product.filter((prod) => prod.id == id));
                    } else {
                        /* console.log(productos) */
                        setProductos(product);
                    }

                });
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchProductos();
    }, []);

    return productos;
};

export default useProductos;

/* const [productos] = useState([
    {
        id: 1,
        precio: 500,
        imagen: './ropa/pantalon.jpg',
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
        precio: 10000,
        imagen: './ropa/anteojos.webp',
        titulo: 'Anteojos',
        descripcion: 'Anteojos redondos',
        medidas: { altura: 75, ancho: 55, profundidad: 15 },
        comentarios: [
            { usuario: 'Sofia', comentario: 'Perfecta para el invierno', puntuacion: 5 },
            { usuario: 'Mario', comentario: 'Muy abrigada', puntuacion: 4 }
        ],
        promedioPuntuacion: 4.5,
        cantidad: 1,
        muestra: { scale: 18, position: [0, 1, 0], url: '/ropa/anteojos.glb' },
        tipo: 'ante',
        url: './ropa/anteojos.glb',
        scale: 2,
        position: [0, 3.7, 0.08],
        color: ''
    },
    {
        id: 3,
        precio: 300,
        imagen: './ropa/musculosa.jpg',
        titulo: 'Musculosa',
        descripcion: 'Musculosa que no tiene mangas.',
        medidas: { altura: 12, ancho: 10, profundidad: 28 },
        comentarios: [
            { usuario: 'Pedro', comentario: 'Muy cómodas para correr largas distancias', puntuacion: 5 },
            { usuario: 'Lucía', comentario: 'La suela es un poco dura', puntuacion: 3 }
        ],
        promedioPuntuacion: 4,
        cantidad: 1,
        muestra: { scale: 5, position: [0, 0, 0], url: '/ropa/remeras.gltf' },
        tipo: 'muscu',
        url: '/ropa/remeras.gltf',
        scale: 1.8,
        position: [0, 2.5, 0],
        color: 'red'
    },
    {
        id: 4,
        precio: 100000,
        imagen: './ropa/zapatillas.webp',
        titulo: 'Zapatilla',
        descripcion: 'Unas Zapatillas.',
        medidas: { altura: 12, ancho: 18, profundidad: 18 },
        comentarios: [
            { usuario: 'Diego', comentario: 'Muy cómoda y ligera', puntuacion: 4 },
            { usuario: 'Laura', comentario: 'Ideal para correr', puntuacion: 5 }
        ],
        promedioPuntuacion: 4.5,
        cantidad: 1,
        muestra: { scale: 3, position: [0, 100, 0], url: '/ropa/zapa.glb' },
        tipo: 'cap',
        url: './ropa/zapa.glb',
        scale: 3.2,
        position: [0, 1, 0.06],
        color: ''
    },
    {
        id: 5,
        precio: 1000,
        imagen: './ropa/remeraOver.png',
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
]); */

