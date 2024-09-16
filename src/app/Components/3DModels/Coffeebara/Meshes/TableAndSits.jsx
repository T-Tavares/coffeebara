import {Select, Html, Gltf, useGLTF} from '@react-three/drei';
import InfoBallon from '@/app/Components/InfoBallon/InfoBallon';

const TableAndSits = () => {
    const {nodes, materials} = useGLTF('/coffeebara1.gltf');

    return (
        <Select enabled={true}>
            <mesh geometry={nodes.table.geometry} material={materials.table} position={[-3.213, 2.391, -2.322]} />
            <mesh geometry={nodes.sits.geometry} material={materials.sits} position={[-3.213, 2.391, -2.322]} />

            <Html position={[3.6, 1, -0.5]} rotation-y={2.35} transform distanceFactor={8}>
                <InfoBallon text="Click To Reserve a Table" corner={'topLeft'} />
            </Html>
        </Select>
    );
};

useGLTF.preload('/coffeebara1.gltf');

export default TableAndSits;
