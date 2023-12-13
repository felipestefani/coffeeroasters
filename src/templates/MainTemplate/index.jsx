import style from "./style.module.css";
import Header from "../../components/Header";
import MenuModal from "../../components/MenuModal";

const MainTemplate = ({children}) => {
 return (
    <div className={style.main_template_container}>
        <MenuModal />
        <Header />
            {children}
    </div>
 )
}

export default MainTemplate