import { useContext, useEffect, useState } from 'react'
import { DevInfoContext } from '../../context/DevInfoContext/DevInfoContext'
import { MyContext } from '../../context/MyContext/MyContext';
import styles from './devInfo.module.css'

const AvatarSide = () => {
    const { devInfo } = useContext(DevInfoContext);
    return (
        <div className={styles.devAvatarWrapper}>
            <img src={devInfo.avatar_url} alt="" />
        </div>
    )
}

const DevStats = () => {
    const { theme } = useContext(MyContext);
    const { devInfo } = useContext(DevInfoContext);
    const dateSrt = devInfo.created_at
    let date = new Date(dateSrt)
    let day = date.getDate();
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    let year = date.getFullYear();
    const formattedDate = `Joined ${day < 10 ? '0' : ''}${day} ${monthName} ${year}`;
    const [info, setInfo] = useState('')
    const [login, setLogin] = useState('')
    const [created_at, setCreated_at] = useState('')
    const [repos, setRepos] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowing] = useState('')


    useEffect(() => {
        let bioStyle = {};
        const textColor = theme === 'light' ? '#000c' : '#ccc';
        bioStyle = { color: textColor };
        if (devInfo.bio) {
            setInfo(<div style={bioStyle}>{devInfo.bio}</div>);
        } else if (devInfo.bio === '' && devInfo.bio === null) {
            setInfo(<div style={bioStyle}>This profile has no bio</div>);
        }
        if (devInfo.login) {
            setLogin(
                <a href={`https://github.com/${devInfo.login}`} target="_blank">
                    @{devInfo.login}
                </a>
            );
        } else {
            setLogin("");
        }

        if (devInfo.created_at) {
            setCreated_at(formattedDate);

        } else {
            setCreated_at("")
        }

        if (devInfo.public_repos) {
            setRepos(<div id={styles.statsIcon}>
                <div>
                    <Repos size={15} />
                    <p>Repos</p>
                </div>
                <h3>
                    {devInfo.public_repos}
                </h3>
            </div>)
        } else {
            setRepos(<div id={styles.statsIcon}>
                <div>
                    <Repos size={15} />
                    <p>Repos</p>
                </div>
                <h3>
                    {devInfo.public_repos}
                </h3>
            </div>)
        }

        if (devInfo.followers) {
            setFollowers(<div id={styles.statsIcon}>
                <div>
                    <SvgFollowers size={17} />
                    <p>Followers</p>
                </div>
                <h3>
                    {devInfo.followers}
                </h3>
            </div>)
        } else {
            setFollowers(<div id={styles.statsIcon}>
                <div>
                    <SvgFollowers size={17} />
                    <p>Followers</p>
                </div>
                <h3>
                    {devInfo.followers}
                </h3>
            </div>)
        }

        if (devInfo.following) {
            setFollowing(<div id={styles.statsIcon}>
                <div>
                    <SvgFollowers size={17} />
                    <p>Following</p>
                </div>
                <h3>
                    {devInfo.following}
                </h3>
            </div>)
        } else {
            setFollowing(<div id={styles.statsIcon}>
                <div>
                    <SvgFollowers size={17} />
                    <p>Following</p>
                </div>
                <h3>
                    {devInfo.following}
                </h3>
            </div>)
        }

    }, [devInfo, theme]);

    return (
        <div className={styles.statsWrapper}>
            <div className={styles.titleWrapper}>
                <h2> {devInfo.name} </h2>
                <p> {created_at} </p>
            </div>
            <div id={styles.nickP}>
                {login}
            </div>
            <span>
                {info}
            </span>
            {Object.keys(devInfo).length > 0 ?
                (
                    <div className={styles['user-info-container']} id="user-info-container">
                        {repos}
                        {followers}
                        {following}
                    </div>
                ) : (
                    <></>
                )}
            {Object.keys(devInfo).length > 0 ? <Footer /> : <></>}
        </div>
    )
}

const TwitterSvg = ({ size }) => {
    const { theme } = useContext(MyContext);
    const [color, setColor] = useState(theme === 'light' ? '#000c' : '#fff');

    useEffect(() => {
        setColor(theme === 'light' ? '#000c' : '#fff')
    }, [theme])

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill={color}></path></svg>
    )

}

const SpotSvg = ({ size }) => {
    const { theme } = useContext(MyContext);
    const [color, setColor] = useState(theme === 'light' ? '#000c' : '#fff');

    useEffect(() => {
        setColor(theme === 'light' ? '#000c' : '#fff')
    }, [theme])

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill={color}></path></svg>

    )
}

const LinkSvg = ({ size }) => {
    const { theme } = useContext(MyContext);
    const [color, setColor] = useState(theme === 'light' ? '#000c' : '#fff');

    useEffect(() => {
        setColor(theme === 'light' ? '#000c' : '#fff')
    }, [theme])

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" ><g fill={color}><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"></path><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"></path></g></svg>
    )
}

const CompanySvg = ({ size }) => {
    const { theme } = useContext(MyContext);
    const [color, setColor] = useState(theme === 'light' ? '#000c' : '#fff');

    useEffect(() => {
        setColor(theme === 'light' ? '#000c' : '#fff')
    }, [theme])

    return (
        <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24"><g fill={color}><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"></path></g></svg>
    )
}

const SvgFollowers = ({ size }) => {
    const { theme } = useContext(MyContext);
    const [color, setColor] = useState(theme === 'light' ? '#000c' : '#fff');

    useEffect(() => {
        setColor(theme === 'light' ? '#000c' : '#fff')
    }, [theme])
    return (
        <svg text="muted" height={size} viewBox="0 0 16 16" width={size} fill={color}><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path></svg>
    )
}

const Repos = ({ size }) => {
    const { theme } = useContext(MyContext);
    const [color, setColor] = useState(theme === 'light' ? '#000c' : '#fff');

    useEffect(() => {
        setColor(theme === 'light' ? '#000c' : '#fff')
    }, [theme])
    return (
        <svg aria-hidden="true" height={size} viewBox="0 0 16 16" width={size} fill={color} ><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg>
    )
}

const Footer = () => {
    const { devInfo } = useContext(DevInfoContext);
    return (
        <footer>
            <ul>
                <li> <SpotSvg size="25px" /> {devInfo.location ?? 'Not available'} </li>
                <li> <TwitterSvg size="25px" /> {devInfo.twitter_username ?? 'Not available'} </li>
                <li> <LinkSvg size="25px" /> {devInfo.blog && devInfo.blog !== '' ? (<a href={devInfo.blog} target="_blank">{devInfo.blog}</a>) : (<p>Not available</p>)}</li>
                <li><CompanySvg size="25px" /> {devInfo.company ?? 'Not available'} </li>
            </ul>
        </footer>
    )
}

export const DevInfo = () => {
    const { devInfo } = useContext(DevInfoContext);
    return (
        <div className={styles.devInfoContainer} style={Object.keys(devInfo).length > 0 ? { padding: '2rem' } : {}} id="devInfoContainer">
            <AvatarSide />
            <DevStats />
        </div>

    )
}


