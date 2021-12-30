import style from "./Nav.module.scss";

const Nav = () => {
    return (
        <div id="navContainer" className={style.nav}>
            <div className={style.btn}>
                <button id="A-E" className={style.AE}>ae</button>
                <button id="F-L" className={style.FL}>fl</button>
                <button id="M-Z" className={style.MZ}>mz</button>
            </div>
            <button id="tutti" className={style.tutti}>tutti</button>
        </div>
    )
};

export default Nav
