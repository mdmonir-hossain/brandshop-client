import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsCard = ({ detailsid }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, image, brandname, type, rating, description } = detailsid;

  const handleAddtoCart = () => {
    const useridAdded = {
      _id,
      name,
      image,
      brandname,
      type,
      rating,
      description,
      email: user.email,
    };

    fetch("https://b8a10-brandshop-server-side-eight.vercel.app/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(useridAdded),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add to Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Brand Name:{brandname}</p>
          <p></p>
          <p>Type:{type}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button onClick={handleAddtoCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
