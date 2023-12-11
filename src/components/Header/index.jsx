import style from "./style.module.css";
import logo from "../../assets/shared/desktop/logo.svg";
import Menu from "../Menu";

const Header = () => {
    return(
        <header className={style.header_container}>
            <nav className={style.navbar}>
                <img src={logo} alt="logo" className={style.logo} />
                <Menu />
            </nav>
        </header>
    )
}

export default Header