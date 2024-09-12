'use client';

import ss from './page.module.scss';
import {Canvas} from '@react-three/fiber';
import {Coffeebara} from './Models/Coffeebara';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import {Selection, EffectComposer, Outline} from '@react-three/postprocessing';
import Socials from './Components/Socials';

export default function Home() {
    // const cameraRef = useRef();
    // const handleCameraChange = () => console.log(cameraRef.current);

    const cameraInitPos = [14, 7, -13];
    const cameraInitRot = [10, 10, -12];
    const outlineColour = '#04b4ff';
    return (
        <div className={ss.page}>
            <h1>Coffeebara</h1>
            <p>At Capy Street - Auckland - 1212 </p>
            <div className={ss.modelContainer}>
                <Canvas>
                    <directionalLight intensity={0.5} position={[0, 10, 0]} />
                    <ambientLight intensity={2} />

                    {/* 
                        Selection is a wrapper that enables the use of postprocessing effects on the children components
                        here I am using it to outline the clickable meshes
                    */}

                    {/* TODO MOVE THIS CODE TO THE COFFEEBARA COMPONENT */}
                    <Selection>
                        <EffectComposer multisampling={8} autoClear={false}>
                            <Outline
                                blur={1}
                                visibleEdgeColor={outlineColour}
                                hiddenEdgeColor={outlineColour}
                                edgeStrength={50}
                                edgeThickness={20}
                                xRay={false}
                            />
                            <Coffeebara />
                        </EffectComposer>
                    </Selection>

                    <PerspectiveCamera makeDefault position={cameraInitPos} rotation={cameraInitRot} />
                    {/* TODO FINISH CONTROLS LIMITATIONS - PAN LOCK */}
                    <OrbitControls
                        minPolarAngle={Math.PI / 3.3}
                        maxPolarAngle={Math.PI / 2.3}
                        minAzimuthAngle={Math.PI / 1.7}
                        maxAzimuthAngle={Math.PI / 1.2}
                        minDistance={13}
                        maxDistance={25}
                    />
                </Canvas>
            </div>
            <div className={ss.infoBallon}>
                <p>Info</p>
            </div>
            <Socials />
        </div>
    );
}
