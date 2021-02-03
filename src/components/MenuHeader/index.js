import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);

    const handleChangeActive = () => setActive(prevValue => !prevValue)

    return (
        <>
            <Menu onChangeActive={handleChangeActive} isActive={isActive} />
            <NavBar onChangeActive={handleChangeActive} isActive={isActive} />
        </>
    );
};

export default MenuHeader;