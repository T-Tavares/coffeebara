import ss from './InfoBallon.module.scss';
/**
 *
 * @param {string} text text to display in the ballon
 * @param {string} corner sharp corner of the ballon
 * @corner Options: topLeft - topRight - bottomLeft - bottomRight
 * @returns React Three Fiber Ballon Component
 */
const InfoBallon = ({text, corner, onClick}) => {
    const cornerStyle = () => {
        switch (corner) {
            case 'topLeft':
                return ss.topCornerLeft;
            case 'topRight':
                return ss.topCornerRight;
            case 'bottomLeft':
                return ss.bottomCornerLeft;
            case 'bottomRight':
                return ss.bottomCornerRight;
            default:
                return '';
        }
    };

    return (
        <div onClick={onClick} className={`${ss.infoBallon} ${cornerStyle()}`}>
            <p>{text}</p>
        </div>
    );
};
export default InfoBallon;
