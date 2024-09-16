'use client';

import {Canvas} from '@react-three/fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import Coffeebara from './Coffeebara/Coffeebara';
import Modal from '../Modal/Modal';
import Gallery from '../Gallery/Gallery';
import {useState} from 'react';

export const modalOption = {
    GALLERY: 'Gallery',
    MENU: 'Menu',
    RESERVATIONS: 'Reservations',
};

const CanvasComponent = ({setIsLoaded}) => {
    // ---------------------------------------------------------------- //
    // ---------------------- MODAL CONTROLLERS ----------------------- //
    // ---------------------------------------------------------------- //

    /* 
        I often use useContext to manage things that are spread acroos my applications.
        However, React Three Fiber Canvas does not get along with useContext.
        So I am setting my Modal Controls here with useState and come Handlers Functions.
        Those functions are being drilled down through the Coffeebara Component to the
        respective Meshes that will trigger the Modal.

        before my component I have a const modalOption. with that I'm leveraging JS autocomplete
        to avoid typos and make my code more readable.
    */

    const [isModal, setIsModal] = useState(false);
    const [modalType, setModalType] = useState('');

    const closeModalHandler = () => {
        setModalType('');
        setIsModal(false);
    };

    const openModalHandler = type => {
        setModalType(type);
        setIsModal(true);
    };

    // ---------------------------------------------------------------- //

    const cameraInitPos = [14, 7, -13];
    const cameraInitRot = [10, 10, -12];

    // ---------------------------------------------------------------- //

    return (
        <>
            {isModal && (
                <Modal title={`Capy ${modalType}`} closeModalHandler={closeModalHandler}>
                    {modalType === modalOption.GALLERY && <Gallery />}
                    {modalType === modalOption.MENU && <h1>Menu</h1>}
                    {modalType === modalOption.RESERVATIONS && <h1>Reservations</h1>}
                </Modal>
            )}
            <Canvas>
                <Coffeebara openModalHandler={openModalHandler} />
                <directionalLight intensity={0.5} position={[0, 10, 0]} />
                <ambientLight intensity={2} />
                <PerspectiveCamera makeDefault position={cameraInitPos} rotation={cameraInitRot} />
                <OrbitControls
                    minPolarAngle={Math.PI / 3.2}
                    maxPolarAngle={Math.PI / 2.05}
                    minAzimuthAngle={Math.PI / 2.5}
                    maxAzimuthAngle={Math.PI / 0.9}
                    minDistance={13}
                    maxDistance={19.5}
                    enablePan={false}
                />
            </Canvas>
        </>
    );
};

export default CanvasComponent;
