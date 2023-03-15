import { useContext } from 'react';
import { MyContext } from '../../context/MyContext/MyContext';
import styles from '../Header/header.module.css'

const ThemeToggleButton = () => {

    const { isDarkTheme, toggleTheme, icon } = useContext(MyContext);

    return (
        <>
            <div>
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