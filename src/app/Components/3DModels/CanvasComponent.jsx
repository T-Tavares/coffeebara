import {Canvas} from '@react-three/fiber';
import Coffeebara from './Coffeebara';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';

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
                minPolarAngle={Math.PI / 3.3}
                maxPolarAngle={Math.PI / 2.3}
                minAzimuthAngle={Math.PI / 1.7}
                maxAzimuthAngle={Math.PI / 1.2}
                minDistance={13}
                maxDistance={25}
            />
        </Canvas>
    );
};

export default CanvasComponent;
