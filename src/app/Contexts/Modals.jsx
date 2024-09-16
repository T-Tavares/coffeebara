import {createContext, useContext, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import Gallery from '@/app/Components/Gallery/Gallery';
import Modal from '@/app/Components/Modal/Modal';

const ModalsContext = createContext({
    galleryModal: false,
    menuModal: false,
    reservationModal: false,
    openModal: modal => {},
    closeModal: () => {},
});

export const useModals = () => useContext(ModalsContext);

export const ModalsProvider = ({children}) => {
    const [galleryModal, setGalleryModal] = useState(false);
    const [menuModal, setMenuModal] = useState(false);
    const [reservationModal, setReservationModal] = useState(false);

    const closeModal = () => {
        setGalleryModal(false);
        setMenuModal(false);
        setReservationModal(false);
    };

    const openModal = modal => {
        if (modal === 'gallery') setGalleryModal(!galleryModal);
        if (modal === 'menu') setMenuModal(true);
        if (modal === 'reservation') setReservationModal(true);
    };

    return (
        <ModalsContext.Provider value={{galleryModal, menuModal, reservationModal, openModal, closeModal}}>
            {children}
            {createPortal(
                <Modal>
                    {/* {galleryModal && <Gallery />} */}
                    {/* {menuModal && <Menu />}
                        {reservationModal && <Reservation />} */}
                </Modal>,
                document.body.lastElementChild
                // document.body
            )}
        </ModalsContext.Provider>
    );
};
