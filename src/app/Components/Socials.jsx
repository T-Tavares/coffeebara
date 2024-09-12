import ss from './Socials.module.scss';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Socials = () => {
    return (
        <div className={ss.socials}>
            <p>Capy Socials</p>
            <div className={ss.iconsContainer}>
                <a target="_blank" href="https://www.linkedin.com/in/ttavaresf/">
                    <FaFacebook />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ttavaresf/">
                    <FaInstagram />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ttavaresf/">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Socials;
