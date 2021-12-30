import style from "./Header.module.scss";
import Nav from '../Nav';

const Header = () => {
    return(
        <div>
        <h1 key="title" className={style.title}>
        Rubrica
        </h1>
        <Nav/>
        </div>
    )
};

export default Header
