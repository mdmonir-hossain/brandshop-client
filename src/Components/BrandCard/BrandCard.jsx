import { Link } from "react-router-dom";


const BrandCard = ({ brands }) => {
    const {id,name,image} = brands;
    return (
      <div>
        <Link>
          <div className="card w-96 bg-base-100 shadow-lg bg-[#E7EBEE]">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-3xl font-extrabold">{name}</h2>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default BrandCard;