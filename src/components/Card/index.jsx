import style from "./Card.module.scss";

const Card = (cardData) => {
    const user = cardData.input;
    const uniqueId = cardData.uniqueId;
    return (
        <div id={"card"+uniqueId}>
            <h4>${user.name}</h4>
        </div>
    )
};

export default Card
