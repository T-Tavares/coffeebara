'use client';

import './globals.scss';
import Socials from './Components/Socials/Socials';
import ss from './page.module.scss';
import {ModalsProvider, useModals} from './Contexts/Modals';
import Gallery from './Components/Gallery/Gallery';
import {useEffect} from 'react';

export default function RootLayout({children}) {
    const {galleryModal, menuModal, reservationModal, closeModal} = useModals();
    useEffect(() => console.log(galleryModal), [galleryModal, menuModal, reservationModal]);
    return (
        <html lang="en">
            {/* <ModalsProvider> */}
            <body>
                <div className={ss.layoutContainer}>
                    <h1>Coffeebara</h1>
                    <p>At Capy Street - Auckland - 1212 </p>
                    {children}
                    <Socials />
                </div>
                {/* <div id="modals"></div> */}
            </body>
            {/* </ModalsProvider> */}
        </html>
    );
}
