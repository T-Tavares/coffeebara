'use client';

import ss from './page.module.scss';
import {useState, useReducer} from 'react';
import Socials from './Components/Socials/Socials';
import CanvasComponent from './Components/3DModels/CanvasComponent';
import InfoBallon from './Components/InfoBallon/InfoBallon';

export default function Home() {
    // const cameraRef = useRef();
    // const handleCameraChange = () => console.log(cameraRef.current);
    const cameraInitPos = [14, 7, -13];
    const cameraInitRot = [10, 10, -12];

    // INFO BALLONS CONTROLLERS

    // INITIAL STATE
    const ballonsInitialState = {
        menuPosition: {x: '50%', y: '50%'},
        tablePosition: {x: '20%', y: '20%'},
        capyPosition: {x: '80%', y: '80%'},
    };

    // REDUCER LOGIC
    const ballonsReducer = (state, action) => {
        switch (action.type) {
            case 'menu':
                return {
                    ...state,
                    menuPosition: action.position,
                };
            case 'table':
                console.log('table');

                return {
                    ...state,
                    tablePosition: action.position,
                };
            case 'capy':
                console.log('capy');

                return {
                    ...state,
                    capyPosition: action.position,
                };
            default:
                return state;
        }
    };

    // REDUCER HANDLERS

    const ballonsController = {
        ballonMenuHandler: ({type, position}) => ballonsDispatch({type, position}),
    };

    const [ballonsState, ballonsDispatch] = useReducer(ballonsReducer, ballonsInitialState);

    return (
        <div className={ss.page}>
            <h1>Coffeebara</h1>
            <p>At Capy Street - Auckland - 1212 </p>

            <div className={ss.modelContainer}>
                <CanvasComponent ballonsController={ballonsController} />
                {/* <InfoBallon position={ballonsState.menuPosition} text="Click to see the Menu" /> */}
            </div>

            <Socials />
        </div>
    );
}
