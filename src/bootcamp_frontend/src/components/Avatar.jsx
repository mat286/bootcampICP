import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import useRenders from '../useRenders';

const Avatar = ({ clothingModels }) => {
    const { scene: avatarScene } = useGLTF('/model.glb');
    const objetos = useRenders(clothingModels);

    return (
        <Canvas style={{ height: '900px', width: '100%' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} />
            <primitive object={avatarScene} scale={20} />

            {objetos.pantsGLTF && <primitive object={objetos.pantsGLTF} scale={clothingModels.pants.scale} position={clothingModels.pants.position} />}
            {objetos.shirtGLTF && <primitive object={objetos.shirtGLTF} scale={clothingModels.shirt.scale} position={clothingModels.shirt.position} />}
            {objetos.capGLTF && <primitive object={objetos.capGLTF} scale={clothingModels.cap.scale} position={clothingModels.cap.position} />}
            {objetos.piediGLTF && <primitive object={objetos.piediGLTF} scale={clothingModels.piedi.scale} position={clothingModels.piedi.position} />}

            <OrbitControls />
        </Canvas>
    );
};

export default Avatar;
