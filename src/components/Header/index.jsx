import style from "./style.module.css";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../assets/shared/mobile/icon-close.svg";
import Menu from "../Menu";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const Header = () => {

    const { isModalOpen, setIsModalOpen } = useContext(MainContext)

    return(
        <header className={style.header_container}>
            <nav className={style.navbar}>
                <img src={logo} alt="logo" className={style.logo}/>
                <Menu/>
                {
                    isModalOpen ? (
                        <img src={closeIcon} alt="close icon" className={style.close_icon} onClick={() => setIsModalOpen(false)}/>
                    ) : (
                        <img src={hamburger} alt="hamburger menu" className={style.hamburger_menu} onClick={() => setIsModalOpen(true)}/>
                    )
                }
            </nav>
        </header>
    )
}

export default Header