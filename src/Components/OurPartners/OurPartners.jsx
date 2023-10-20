
import Marquee from "react-fast-marquee";
const OurPartners = () => {
    return (
      <div className="mt-10 mb-10">
        <h1 className="text-3xl font-extrabold text-center mb-5">Our Partners</h1>
        <Marquee pauseOnHover={true}>
          <div className="border-2 shadow-lg mr-[50px]">
            <img
              className="w-40 "
              src="https://i.ibb.co/X7z07Hp/apple-logo.png"
            />
          </div>
          <div className="border-2 shadow-lg  mr-[50px]">
            <img
              className="w-40 "
              src="https://i.ibb.co/tMbg514/sumsung-logo.png"
            />
          </div>
          <div className="border-2 shadow-lg  mr-[50px]">
            <img
              className="w-40 "
              src="https://i.ibb.co/k8cXn5v/sony-logo.png"
            />
          </div>
          <div className="border-2 shadow-lg  mr-[50px]">
            <img
              className="w-40 "
              src="https://i.ibb.co/W5dQMWs/intel-logo.png"
            />
          </div>
          <div className="border-2 shadow-lg  mr-[50px]">
            <img
              className="w-40 "
              src="https://i.ibb.co/PxPdKs5/google-logo.png"
            />
          </div>
          <div className="border-2 shadow-lg  mr-10">
            <img
              className="w-40 "
              src="https://i.ibb.co/W5dQMWs/intel-logo.png"
            />
          </div>
        </Marquee>
      </div>
    );
};

export default OurPartners;