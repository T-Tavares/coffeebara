import {useGLTF, Html} from '@react-three/drei';
import {Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing';
import TableAndSits from './Meshes/TableAndSits';
import Menu from './Meshes/Menu';
import Capy from './Meshes/Capy';

const Coffeebara = ({openModalHandler}) => {
    const outlineColour = '#04b4ff';
    const {nodes, materials} = useGLTF('/coffeebara.gltf');
    return (
        <Selection>
            {/* 
                Within The Selection Component, everything wrapped by a Select Component will
                have the effects composer and outline applyed to it
            */}
            <group dispose={null} position={[0, -1, 0]}>
                <EffectComposer autoClear={false}>
                    <Outline
                        blur={1}
                        visibleEdgeColor={outlineColour}
                        hiddenEdgeColor={outlineColour}
                        edgeStrength={10}
                        edgeThickness={20}
                        xRay={false}
                    />
                </EffectComposer>
                <Select enabled={true}>
                    {/* Elements with HTML and Outline effects applied to them */}
                    <Capy openModalHandler={openModalHandler} />
                    <Menu openModalHandler={openModalHandler} />
                    <TableAndSits openModalHandler={openModalHandler} />
                </Select>

                <mesh geometry={nodes.building.geometry} material={materials.building} position={[-3.213, 2.391, -2.322]} />
                <mesh
                    geometry={nodes['coffeebara-logo-right'].geometry}
                    material={materials['coffeebara-logo-right']}
                    position={[0.327, 3.811, -3.421]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                />
                <mesh
                    geometry={nodes['coffeebara-logo-left'].geometry}
                    material={materials['coffeebara-logo-left']}
                    position={[3.415, 3.818, 3.349]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                />
                <mesh geometry={nodes['dog-bowl'].geometry} material={materials['dog-bowl']} position={[-3.213, 2.391, -2.322]} />
                <mesh
                    geometry={nodes['windows-and-door'].geometry}
                    material={materials['windows-and-door']}
                    position={[-3.213, 2.391, -2.322]}
                />
                <mesh geometry={nodes.floor.geometry} material={materials['floor-baked']} position={[-3.213, 2.391, -2.322]} />
                <mesh geometry={nodes['rain-roof'].geometry} material={materials['rain-roof']} position={[-3.213, 2.391, -2.322]} />
                <mesh geometry={nodes.plants.geometry} material={materials.plants} position={[-3.213, 2.391, -2.322]} />
                <mesh geometry={nodes.exaustor.geometry} material={materials.exaustor} position={[-3.213, 2.391, -2.322]} />
            </group>
        </Selection>
    );
};

useGLTF.preload('/coffeebara.gltf');
export default Coffeebara;
