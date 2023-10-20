import { Link } from "react-router-dom";


const BrandCard = ({ brands }) => {
    const {id,name,image} = brands;
    return (
      <div>
        <Link to={`/brandProducts/${name}`}>
          <div className="card   shadow-lg bg-[#E7EBEE] hover:">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="w-full bg-gray-300 h-1"></div>
            <div className="card-body w-full items-center text-center">
              <h2 className="card-title  text-3xl font-extrabold">{name}</h2>
              
            </div>
          </div>
        </Link>
      </div>
    );
};

export default BrandCard;