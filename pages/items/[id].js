import MainContainer from "../../components/MainContainer";
import mainPhoto from "../../public/image/EmptSwetre.jpg";
import Image from "next/image";
const Ids = () => {
  return (
    <MainContainer>
      <div className="grid grid-cols-2">
        <div className="border-4 border-black solid">
          <div>
            <Image src={mainPhoto} alt="image" priority />
          </div>
          <div></div>
        </div>

        <div className="border-4 border-black solid py-6 px-6">
          <h1 className="text-4xl font-extrabold">ttb empt logo Sweatre</h1>
          <p></p>
          <ul className="text-base">
            <li>97% coton</li>
            <li>3% polyamid</li>
          </ul>
          <div className="text-4xl font-extrabold">₴2490</div>
          <div className="flex justify-center text-3xl font-bold">
            <div className="m-4 rounded-[50%] border-4 border-black solid">
              S
            </div>
            <div className="m-4">M</div>
            <div className="m-4">L</div>
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
