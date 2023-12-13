import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="mt-2">
      <div className="hero min-h-screen bg-base-200 shadow-lg ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <motion.div
            className="mr-20"
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            <img
              src="https://i.ibb.co/jJ8qxQD/products.png"
              className="max-w-sm rounded-lg "
            />
          </motion.div>

          <motion.div
            className="mr-20"
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            <motion.h1
              className="text-5xl font-bold"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              Save 20%
            </motion.h1>
            <p className="py-6">
              Get ready to make your day even brighter with our special discount
              offer! 🛍️
              <br />
              🔥 Save 20% on your next purchase! we believe in making your
              shopping <br /> experience extraordinary. That's why we're
              offering you an exclusive 20% <br /> discount on all our
              products/services for a limited time. <br />
              👉 Use Promo Code: NEWUSER at checkout to unlock your savings. 📆
              <br />
              Hurry, this offer won't last long! It expires on 31-10-2023
            </p>
            <button className="animate-pulse btn bg-red-600 text-white">
              Shop Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
