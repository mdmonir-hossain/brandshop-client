import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import AddtoCardShow from "../AddtoCardShow/AddtoCardShow";

const MyCart = () => {
  const [cart, setCart] = useState([]);

  const { user } = useContext(AuthContext);

  const myCartData = useLoaderData([]);

  useEffect(() => {
    const cartData = myCartData.filter((cart) => cart.email === user.email);
    setCart(cartData);
  }, [myCartData, user.email]);

  
  return (
    <div>
      <div>
        {cart.length ? "" : <div><h1 className="text-center text-3xl font-bold mt-10 text-red-600">No Data Found</h1></div>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 min-h-screen">
        {cart?.map((addCart) => (
          <AddtoCardShow key={addCart._id} addCart={addCart}></AddtoCardShow>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
