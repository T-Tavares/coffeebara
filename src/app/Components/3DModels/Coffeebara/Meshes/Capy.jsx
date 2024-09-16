import {Select, Html, useGLTF} from '@react-three/drei';
import InfoBallon from '@/app/Components/InfoBallon/InfoBallon';

const Capy = () => {
    const {nodes, materials} = useGLTF('/coffeebara1.gltf');
    return (
        <Select enabled={true}>
            <mesh
                geometry={nodes.capy.geometry}
                material={materials.capy}
                position={[2.554, 5.404, -1.905]}
                rotation={[Math.PI / 2, 0, Math.PI / 4]}
                scale={1.325}
            />
            <Html position={[4.5, 6.2, -0]} rotation-y={2.5} transform distanceFactor={8}>
                <InfoBallon text="Hi there, I'm Capy" corner={'bottomRight'} />
            </Html>
        </Select>
    );
};

useGLTF.preload('/coffeebara1.gltf');
export default Capy;
