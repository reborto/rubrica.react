import style from "./Card.module.scss";

// const Card = (cardData) => {
//     const user = cardData.input;
//     const uniqueId = cardData.uniqueId;
//     return (
//         <div id={"card"+uniqueId}>
//             <h4>${user.name}</h4>
//         </div>

      
//     )
// };

const Card = () => {
    return(
        <div className={style.card}>
        <h2 id="name" className={style.name}>Leanne Graham</h2>
        <h4 id="username" className={style.username}>Bret</h4>
        <p id="email" className={style.email}><a><strong>e </strong></a>Sincere@april.biz</p>
        <button id="address" className={style.address}><strong>address</strong></button>
        <p id="phone" className={style.phone}><a><strong>ph </strong></a>1-770-736-8031 x56442</p>
        <p id="website" className={style.website}><a><strong>w </strong></a>hildegard.org</p>
        <button id="company" className={style.company}><strong>company</strong></button>

        </div>
    )
};

export default Card
