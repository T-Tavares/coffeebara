import {Canvas} from '@react-three/fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import Coffeebara from './Coffeebara/Coffeebara';

const CanvasComponent = ({ballonsController}) => {
    const cameraInitPos = [14, 7, -13];
    const cameraInitRot = [10, 10, -12];

    return (
        <Canvas>
            <directionalLight intensity={0.5} position={[0, 10, 0]} />
            <ambientLight intensity={2} />

            <Coffeebara ballonsController={ballonsController} />
            <PerspectiveCamera makeDefault position={cameraInitPos} rotation={cameraInitRot} />
            {/* TODO FINISH CONTROLS LIMITATIONS - PAN LOCK */}
            <OrbitControls
                minPolarAngle={Math.PI / 3.2}
                maxPolarAngle={Math.PI / 2.05}
                minAzimuthAngle={Math.PI / 2.5}
                maxAzimuthAngle={Math.PI / 0.9}
                minDistance={13}
                maxDistance={19.5}
            />
        </Canvas>
    );
};

export default CanvasComponent;
