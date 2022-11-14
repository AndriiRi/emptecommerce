import MainContainer from "../../components/MainContainer";
import style from "../../styles/id.module.css";
import MainPhoto from "../../public/image/EmptSwetre.jpg";
import Image from "next/image";
const Ids = () => {
  return (
    <MainContainer>
      <div className={style.itemContent}>
        <div className={style.galerey}>
          <div className={style.mainPhoto}>
            <Image className={style.photo} src={MainPhoto} alt="image" />
          </div>
          <div className={style.prevPhoto}></div>
        </div>

        <div className={style.itemDescription}>
          <h1 className={style.itemName}>ttb empt logo Sweatre</h1>
          <p></p>
          <ul>
            <li>97% coton</li>
            <li>3% polyamid</li>
          </ul>
          <div className={style.price}>₴2490</div>
          <div className={style.sizes}>
            <div className={style.size}>S</div>
            <div className={style.size}>M</div>
            <div className={style.size}>L</div>
          </div>
          <div className={style.cardButtonContainer}>
            <button className={style.cardButton}> Add To Card</button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
export default Ids;
