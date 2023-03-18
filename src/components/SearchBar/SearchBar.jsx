import { useContext } from "react";
import { callApi } from "../../API/callApi";
import { DevInfoContext } from "../../context/DevInfoContext";
import { MyContext } from "../../context/MyContext/MyContext";
import styles from "./searchBar.module.css";

const SearchIcon = ({ size }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            width={size}
            viewBox="0 0 25 24"
        >
            <path
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                fill="#0079ff"
            />
        </svg>
    );
};

const InputSearchResult = ({ handleSubmit }) => {
    const { userName, handleUserName } = useContext(MyContext);

    const handleKeyDown = (evento) => {
        if (evento.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <div className={styles.serachInputWrapper} >
            <span>
                <SearchIcon size="23px" />
            </span>
            <input
                type="text"
                placeholder="Search GitHub username..."
                id="github-username"
                name="github-username"
                value={userName}
                onChange={handleUserName}
                autoComplete="off"
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

const SubmitBtn = ({ name, handleSubmit }) => {
    return <button onClick={handleSubmit}> {name} </button>;
};

export const SearchBar = () => {
    const { setDevInfo } = useContext(DevInfoContext);
    const { userName } = useContext(MyContext);

    const handleSubmit = () => {
        callApi(userName)
            .then(response => response.json())
            .then(data => {
                setDevInfo(data)
            })
    }
    return (
        <div className={styles.searchBarContainer} id="searchBarContainer">
            <InputSearchResult handleSubmit={handleSubmit} />
            <SubmitBtn handleSubmit={handleSubmit} name="Search" />
        </div>
    );
};
