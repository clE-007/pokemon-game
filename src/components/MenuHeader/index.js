import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = ({ bgActive }) => {
    const [isActive, setActive] = useState(null);

    const handleChangeActive = () => setActive(prevValue => !prevValue)

    return (
        <>
            <Menu onChangeActive={handleChangeActive} isActive={isActive} />
            <NavBar onChangeActive={handleChangeActive} isActive={isActive} bgActive={bgActive} />
        </>
    );
};

export default MenuHeader;