import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({ isActive, onChangeActive, bgActive = false }) => {
    const handleClick = () => onChangeActive()
    return (
        <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                LOGO
                </p>
                <div
                    className={cn(s.menuButton, {[s.active]: isActive})}
                    onClick={handleClick}
                >
                    <span />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;