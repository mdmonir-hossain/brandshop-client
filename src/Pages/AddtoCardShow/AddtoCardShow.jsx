import { Rating } from "@material-tailwind/react";

const AddtoCardShow = ({ addCart }) => {
  const { _id, name, image, brandname, type, rating, description } = addCart;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Brand Name:{brandname}</p>
          <p>
            <Rating value={parseInt(rating)} readonly />
          </p>
          <p>Type:{type}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn bg-red-600 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCardShow;
