import { useContext } from "react";
import style from "./style.module.css";
import closeIcon from "../../assets/shared/mobile/icon-close.svg";
import { MainContext } from "../../contexts/MainContext";


const MenuModal = () => {

    const { isModalOpen, setIsModalOpen } = useContext(MainContext)

    return(
            isModalOpen ? (
                <div className={style.modal_container} >
                    <img src={closeIcon} alt="close icon" onClick={() => setIsModalOpen(false)}/>
                </div>
            ) : ''
    )
}

export default MenuModal