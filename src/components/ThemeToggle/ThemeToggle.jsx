import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/MyContext/MyContext';
import styles from '../Header/header.module.css'

const ThemeToggleButton = () => {
    const { theme, toggleTheme, icon } = useContext(MyContext);

    return (
        <>
            <div>
                <button
                    className={styles.themeBtn}
                    onClick={toggleTheme}
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