import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        link: '/',
    },
    {
        title: 'GAME',
        link: '/game',
    },
    {
        title: 'ABOUT',
        link: '/about',
    },
    {
        title: 'CONTACT',
        link: '/contact',
    },
]

const Menu = ({ isActive, onChangeActive }) => {
    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isActive === true,
            [s.deactive]: isActive === false,
        })}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {MENU.map(({ title, link }, index) => (
                    <li key={index}>
                            <Link to={link} onClick={() => onChangeActive()}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;