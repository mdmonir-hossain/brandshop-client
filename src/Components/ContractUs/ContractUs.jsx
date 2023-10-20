

const ContractUs = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200 shadow-lg mb-10 mt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Contact Us</h1>
              <p className="py-6">
                we're committed to providing exceptional service and support to
                our valued customers. We're here to assist you with any
                questions, concerns, or inquiries you may have. Your
                satisfaction is our priority, and we're eager to hear from you.
              </p>
              <p className="py-6">
                Our team is eager to assist you with any inquiries you may have
                about our products, services, or your orders. We welcome your
                feedback, suggestions, and comments as they help us serve you
                better. If you're a potential customer looking to learn more
                about what we offer, don't hesitate to contact us, and we'll
                provide all the information you need to make an informed
                decision.
              </p>
              <p className="py-6">
                We look forward to hearing from you and are excited to build a
                lasting relationship. Your inquiries are important to us, and
                we'll do our best to respond promptly.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Comment</span>
                  </label>
                  <textarea className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContractUs;