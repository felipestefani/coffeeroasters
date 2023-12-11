import style from "./style.module.css";
import Header from "../../components/Header";

const MainTemplate = ({children}) => {
 return (
    <div className={style.main_template_container}>
        <Header />
            {children}
    </div>
 )
}

export default MainTemplate