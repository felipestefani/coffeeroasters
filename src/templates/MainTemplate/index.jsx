import style from "./style.module.css";
import Header from "../../components/Header";
import MenuModal from "../../components/MenuModal";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const MainTemplate = ({children}) => {

    const {isModalOpen, setIsModalOpen} = useContext(MainContext)

    return (
        <div className={style.main_template_container} >
            <MenuModal />
            <div onClick={ () => {isModalOpen ? setIsModalOpen(false) : ''}}>
                <Header />
                    {children}
            </div>
        </div>
    )
}

export default MainTemplate