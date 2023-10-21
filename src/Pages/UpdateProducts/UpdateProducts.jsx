import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const selectedBrand = useLoaderData();
  const { _id, name, image, brandname, type, price, rating, description } =
    selectedBrand;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const UpadteProductData = {
      image,
      name,
      brandname,
      type,
      price,
      description,
      rating,
    };

    console.log(UpadteProductData);
    fetch(
      `https://b8a10-brandshop-server-side-eight.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpadteProductData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="min-h-screen">
      <div className=" mt-10 mb-10">
        <h1 className="text-center text-3xl font-extrabold">Update Product</h1>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-[#E7EBEE] mx-auto ">
          <form onSubmit={handleUpdateProduct} className="card-body ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  defaultValue={image}
                  name="image"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  name="name"
                  defaultValue={name}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <select
                  name="brandname"
                  defaultValue={brandname}
                  className="select select-secondary w-full max-w-xs"
                >
                  <option defaultValue={brandname}>{brandname}</option>

                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Sony">Sony</option>
                  <option value="Google">Google</option>
                  <option value="Intel">Intel</option>
                  <option value="Asus">Asus</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Type"
                  className="input input-bordered w-full"
                  defaultValue={type}
                  name="type"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  defaultValue={price}
                  name="price"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="input input-bordered w-full"
                  defaultValue={description}
                  name="description"
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full"
                defaultValue={rating}
                name="rating"
                required
              />
            </div>

            <div className="form-control full mt-6 flex items-center justify-between">
              <button className="btn bg-red-600 text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
