import style from "./style.module.css";
import { Link } from "react-router-dom";
import { topics } from "../../data/menuList.jsx";

const Menu = () => {

    return (
        <div className={style.menu_container}>
            <ul className={style.menu_list}>
            {
                topics.map(topic => (
                    <li key={topic} className={style.menu_topic}><Link to={'#'} className={style.topic_link}>{topic}</Link></li>
                ))
            }
            </ul>
        </div>
    )
}

export default Menu