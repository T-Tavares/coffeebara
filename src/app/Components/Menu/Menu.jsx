import ss from './Menu.module.scss';
import {menu} from '../../../../public/database/menu.js';
import Image from 'next/image';

const MenuItem = ({item}) => {
    return (
        <div className={ss.menuItem}>
            <div className={ss.image}>
                <Image src={item.image} alt={menu[0].item} width={80} height={80} />
            </div>
            <h2 className={ss.title}>{item.item}</h2>
            <p className={ss.description}>{item.description}</p>
            <p className={ss.price}>{`$${item.price}`}</p>
        </div>
    );
};

const Menu = () => {
    return (
        <div className={ss.menuContainer}>
            {menu.map(item => {
                return <MenuItem key={item.name} item={item} />;
            })}
        </div>
    );
};
export default Menu;
