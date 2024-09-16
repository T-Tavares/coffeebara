import {Select, Html, useGLTF} from '@react-three/drei';
import InfoBallon from '@/app/Components/InfoBallon/InfoBallon';

const Menu = () => {
    const {nodes, materials} = useGLTF('/coffeebara1.gltf');

    return (
        <Select enabled={true}>
            <mesh geometry={nodes.menu.geometry} material={materials.menu} position={[-3.213, 2.163, -2.322]} />
            <Html position={[3.1, -0.2, -3.6]} rotation-y={2.5} transform distanceFactor={8}>
                <InfoBallon text="Click To See Our Menu" corner={'topRight'} />
            </Html>
        </Select>
    );
};

useGLTF.preload('/coffeebara1.gltf');
export default Menu;
