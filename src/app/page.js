'use client';
import Image from 'next/image';
import ss from './page.module.scss';
import {Canvas} from '@react-three/fiber';
import {useRef} from 'react';
import {Coffeebara} from './Models/Coffeebara';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import {Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing';

export default function Home() {
    // const cameraRef = useRef();
    // const handleCameraChange = () => console.log(cameraRef.current);

    const cameraInitPos = [10, 9, -9];
    const cameraInitRot = [10, 10, -12];
    const outlineColour = '#04b4ff';
    return (
        <div className={ss.page}>
            <h1>Coffeebara</h1>
            <div className={ss.modelContainer}>
                <Canvas>
                    <directionalLight intensity={0.5} position={[0, 10, 0]} />
                    <ambientLight intensity={1} />

                    {/* 
                        Selection is a wrapper that enables the use of postprocessing effects on the children components
                        here I am using it to outline the clickable meshes
                    */}
                    <Selection>
                        <EffectComposer multisampling={8} autoClear={false}>
                            <Outline
                                blur
                                visibleEdgeColor={outlineColour}
                                hiddenEdgeColor={outlineColour}
                                edgeStrength={3}
                                edgeThickness={10}
                            />
                            <Coffeebara />
                        </EffectComposer>
                    </Selection>

                    <PerspectiveCamera makeDefault position={cameraInitPos} rotation={cameraInitRot} />
                    <OrbitControls
                        minPolarAngle={Math.PI / 3.5}
                        maxPolarAngle={Math.PI / 2.8}
                        minAzimuthAngle={Math.PI / 1.7}
                        maxAzimuthAngle={Math.PI / 1.2}
                        minDistance={13}
                        maxDistance={20}
                    />
                </Canvas>
            </div>
        </div>
    );
}
