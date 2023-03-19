import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/MyContext/MyContext';
import styles from '../Header/header.module.css'

const ThemeToggleButton = () => {
    const { theme, toggleTheme, icon } = useContext(MyContext);
    const [color, setColor] = useState();


    useEffect(() => {
        setColor(theme === 'dark' ? '#fff' : '#000c')
    }, [theme])

    const buttonStyle = {
        color: color
    };

    return (
        <>
            <div>
                <button
                    className={styles.themeBtn}
                    onClick={toggleTheme}
                    style={buttonStyle}
                >
                    {theme === 'dark' ? 'light' : 'dark'}
                    <span>
                        {icon}
                    </span>
                </button>
            </div>
        </>
    )
}
export default ThemeToggleButton;