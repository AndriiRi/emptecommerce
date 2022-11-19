import MainContainer from "../../components/MainContainer";
import mainPhoto from "../../public/image/EmptSwetre.jpg";
import Image from "next/image";
const Ids = () => {
  return (
    <MainContainer>
      <div className="grid lg:grid-cols-2">
        <div className="border-4 border-black solid">
          <div>
            <Image src={mainPhoto} alt="image" priority />
          </div>
          <div></div>
        </div>

        <div className="border-4 border-black solid py-6 px-8">
          <h1 className="text-4xl font-extrabold uppercase">
            ttb empt logo Sweatre
          </h1>
          <p className="text-base my-4">
            denim suede-trimmed bomber jacket 2 outer pockets, 1 inside pocket
          </p>
          <ul className="text-base my-4">
            <li>97% coton</li>
            <li>3% polyamid</li>
          </ul>
          <div className="text-4xl font-extrabold my-14">₴2490</div>
          <div className="flex justify-center text-3xl font-bold">
            <div className="m-4 rounded-[50%] border-4 border-black solid my-4">
              S
            </div>
            <div className="m-4">M</div>
            <div className="m-4">L</div>
          </div>
          <div className="flex justify-center my-4">
            <button> Add To Card</button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
export default Ids;
