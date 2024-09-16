'use client';

import ss from './page.module.scss';
import CanvasComponent from './Components/3DModels/CanvasComponent';

export default function Home() {
    return (
        <div className={ss.page}>
            <CanvasComponent />
        </div>
    );
}
