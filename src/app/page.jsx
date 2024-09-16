import ss from './page.module.scss';
import CanvasComponent from './Components/3DModels/CanvasComponent';
import Loading from './Components/Loading/Loading';

export default function Home() {
    return (
        <div className={ss.page}>
            {/* 
                TODO Investigate Loader
                Need to think on a better way to have a loader
                Drei Loader is not showing up on screen
            */}
            <Loading />
            <CanvasComponent />
        </div>
    );
}
