import React, { useState, startTransition } from 'react';
import Card from './Card';
import ProductList from './ProductList';
import ThreeScene from '../avatar/ThreeScene';
import useProductos from '../hooks/useProductos';
import usePrendas from '../hooks/usePrendas';


function Armario() {
    const [selectedClothing, setSelectedClothing] = useState([{ tipo: 'cap2', scale: 0.016, position: [0, 1, 0], url: '/ropa/model2.glb', color: '' }/* { tipo: 'cap2', scale: 20, position: [0, 0, 0], url: './model.glb', color: '' } */]);
    const producto = useProductos();
    const armarioP = usePrendas();

    const handleClothingChange = (type) => {
        startTransition(() => {
            setSelectedClothing(prevSelectedClothing => {
                const exists = prevSelectedClothing.some(item => item.tipo === type);

                if (exists) {
                    // Si ya existe, lo eliminamos
                    return prevSelectedClothing.filter(item => item.tipo !== type);
                } else {
                    // Si no existe, lo agregamos
                    const selectedModel = producto.find(item => item.tipo === type);
                    if (selectedModel) {
                        return [...prevSelectedClothing, selectedModel];
                    }
                }
                return prevSelectedClothing;
            });
        });
    };

    const handleClothingChangeArmario = (type) => {
        startTransition(() => {
            setSelectedClothing(prevSelectedClothing => {
                const exists = prevSelectedClothing.some(item => item.tipo === type);

                if (exists) {
                    // Si ya existe, lo eliminamos
                    return prevSelectedClothing.filter(item => item.tipo !== type);
                } else {
                    // Si no existe, lo agregamos
                    const selectedModel = armarioP.find(item => item.tipo === type);
                    if (selectedModel) {
                        return [...prevSelectedClothing, selectedModel];
                    }
                }
                return prevSelectedClothing;
            });
        });
    };


    return (
        <div className="App">
            <div className="App-body">
                <aside className="filters">
                    <Card onClothingChange={handleClothingChange} producto={producto} />
                </aside>

                <div className="divider"></div>

                <div className="avatar-container">
                    <ThreeScene clothingModels={selectedClothing} mov={false} orbit={true} />
                </div>

                <div className="divider"></div>

                <aside className="product-list">
                    <ProductList onClothingChange={handleClothingChangeArmario} armarioP={armarioP} />
                </aside>
            </div>
        </div>
    );

}

export default Armario;
