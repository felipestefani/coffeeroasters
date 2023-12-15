import style from "./style.module.css";

const Button = (props) => {

    const { buttonTitle } = props
    
    return(
        <div className={style.button_container}>
            <button className={style.button_title}>{ buttonTitle }</button>
        </div>
    )
}

export default Button