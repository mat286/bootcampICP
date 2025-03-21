import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Environment, SpotLight } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Vector2, Raycaster, Vector3 } from 'three';

// Extiende los controles de órbita
extend({ OrbitControls });

function Model({ url, position, scale, mov, color }) {
    const gltf = useLoader(GLTFLoader, url);
    const modelRef = useRef();

    useEffect(() => {
        if (modelRef.current) {
            modelRef.current.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.set(color); // Cambiar el color del material
                }
            });
        }
    }, [color]);

    useFrame((state, delta) => {
        if (modelRef.current && mov) {
            modelRef.current.rotation.y += delta; // Rotación continua
        }
    });

    return <primitive object={gltf.scene} ref={modelRef} scale={scale} position={position} />;
}

// Componente para manejar los controles de zoom con la rueda del mouse
function ZoomControls() {
    const controlsRef = useRef();
    const { camera, scene } = useThree();
    const [zoomTarget, setZoomTarget] = useState(null); // Guardar el punto de zoom

    useEffect(() => {
        const raycaster = new Raycaster();
        const mouse = new Vector2();

        const onWheel = (event) => {
            // Normalizar las coordenadas del mouse (-1 a 1)
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Actualizar el raycaster con la cámara y la posición del mouse
            raycaster.setFromCamera(mouse, camera);

            // Detectar intersecciones con objetos de la escena
            const intersects = raycaster.intersectObjects(scene.children, true);

            if (intersects.length > 0) {
                // Guardar el punto de intersección como objetivo del zoom
                setZoomTarget(intersects[0].point);
            }
        };

        // Añadir evento de la rueda del mouse (scroll)
        window.addEventListener('wheel', onWheel);

        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, [camera, scene]);

    useFrame(() => {
        if (controlsRef.current && zoomTarget) {
            controlsRef.current.target.lerp(zoomTarget, 0.1); // Suaviza el movimiento hacia el nuevo objetivo solo si hay un zoomTarget
            controlsRef.current.update(); // Actualizar los controles
        }
    });

    return <OrbitControls ref={controlsRef} />;
}

function ThreeScene({ clothingModels, mov, orbit, color }) {
    return (
        <Canvas camera={{ position: [0, 4, 5.5] }} style={{ height: '600px', width: '100%' }}>
            <pointLight position={[0, 0, 0]} />
            <hemisphereLight skyColor={0xffffbb} groundColor={0x080820} intensity={0.9} position={[0, 50, 0]} />
            <pointLight position={[5, 5, 5]} intensity={0.8} />
            <SpotLight position={[15, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
            <Environment preset="sunset" />

            {clothingModels.map((arr) => (
                <Model key={arr.url} url={arr.url} scale={arr.scale} position={arr.position} mov={mov} color={arr.color || color} />
            ))}

            {orbit && <ZoomControls />} {/* Mover controles dentro del Canvas */}
        </Canvas>
    );
}

export default ThreeScene;
