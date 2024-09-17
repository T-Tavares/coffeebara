import {Select, Html, useGLTF} from '@react-three/drei';
import InfoBallon from '@/app/Components/InfoBallon/InfoBallon';
import {modalOption} from '../../CanvasComponent';

const Menu = ({openModalHandler}) => {
    const {nodes, materials} = useGLTF('/coffeebara.gltf');

    return (
        <Select enabled={true}>
            <mesh
                onClick={() => openModalHandler(modalOption.MENU)}
                geometry={nodes.menu.geometry}
                material={materials.menu}
                position={[-3.213, 2.163, -2.322]}
            />
            <Html position={[2.8, -0.4, -3.2]} rotation-y={2.35} transform distanceFactor={8}>
                <InfoBallon onClick={() => openModalHandler(modalOption.MENU)} text="Click To See Our Menu" corner={'topRight'} />
            </Html>
        </Select>
    );
};

useGLTF.preload('/coffeebara.gltf');
export default Menu;
