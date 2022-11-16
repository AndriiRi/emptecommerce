import MainContainer from "../../components/MainContainer";
import mainPhoto from "../../public/image/EmptSwetre.jpg";
import Image from "next/image";
const Ids = () => {
  return (
    <MainContainer>
      <div>
        <div>
          <div>
            <Image alt="image" priority />
          </div>
          <div></div>
        </div>

        <div>
          <h1>ttb empt logo Sweatre</h1>
          <p></p>
          <ul>
            <li>97% coton</li>
            <li>3% polyamid</li>
          </ul>
          <div>₴2490</div>
          <div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
          </div>
          <div>
            <button> Add To Card</button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
export default Ids;
