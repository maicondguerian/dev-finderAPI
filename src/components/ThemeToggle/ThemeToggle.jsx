import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import styles from '../Header/header.module.css'

const ThemeToggleButton = () => {

    const { isDarkTheme, toggleTheme, icon } = useContext(ThemeContext);
   
    return (
        <>
            <div className={isDarkTheme ? 'dark' : 'light'}>
                <button 
                className={styles.themeBtn}
                onClick={toggleTheme}
                >
                    {isDarkTheme ? 'dark' : 'light'}
                    <span>
                        {icon}
                    </span>
                </button>
            </div>
        </>
    )
}
export default ThemeToggleButton;