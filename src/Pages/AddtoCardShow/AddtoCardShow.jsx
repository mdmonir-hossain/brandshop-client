import { Rating } from "@material-tailwind/react";
import Swal from "sweetalert2";

const AddtoCardShow = ({ addCart }) => {
  const { _id, name, image, brandname, type, rating, price, description } =
    addCart;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(
        `https://b8a10-brandshop-server-side-eight.vercel.app/addtocart/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Product Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });

      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
          <p>
            <Rating value={parseInt(rating)} readonly />
          </p>
          <p>Price:$ {price}</p>
          <p>Type:{type}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCardShow;
