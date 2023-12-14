import { useContext } from "react";
import style from "./style.module.css";
import { topics } from "../../data/menuList.jsx";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";


const MenuModal = () => {

    const { isModalOpen, setIsModalOpen } = useContext(MainContext)

    return(
            isModalOpen ? (
                    <div className={style.modal_container} onBlur={() => setIsModalOpen(false)}>
                        <ul className={style.menu_modal_list}>
                        {
                            topics.map(topic => (
                                <li key={topic}><Link to={'#'} className={style.menu_modal_link}>{topic}</Link></li>
                            ))
                        }
                        </ul>
                        <div className={style.gradiente}></div>
                    </div>
            ) : ''
    )
}

export default MenuModal