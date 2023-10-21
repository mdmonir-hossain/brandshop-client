import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedBrandCard = ({ selectedBrand }) => {

    const [nodata, setNodata] = useState();
    const { _id, name, image, brandname, type, rating } = selectedBrand;
    
    console.log(_id);
      return (
        <div>
          {nodata ? (
            <p> {nodata}</p>
          ) : (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div>
                  
                  <Rating value={parseInt(rating)} readonly />
                </div>
                <p>Type: {type}</p>
                <div className="card-actions">
                  <Link to={`/details/${_id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      );
};

export default SelectedBrandCard;
