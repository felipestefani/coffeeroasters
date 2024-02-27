import style from "./style.module.css";

const OurCollectionCard = (props) => {

    const {coffe_image, title, description} = props

    return (
        <div className={style.our_collection_card_container}>
            <div>
                <img className={style.coffe_image} src={coffe_image} alt="" />
            </div>
            <div className={style.our_collection_description}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default OurCollectionCard