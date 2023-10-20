

const AddProduct = () => {
    return (
        <div className=" mt-10 mb-10">
            <h1 className="text-center text-3xl font-extrabold">Add Product</h1>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-[#E7EBEE] mx-auto ">
          <form className="card-body ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="form-control full mt-6 flex items-center justify-between">
              <button className="btn bg-red-600 text-white">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddProduct;