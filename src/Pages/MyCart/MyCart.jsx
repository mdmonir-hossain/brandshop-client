import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import AddtoCardShow from "../AddtoCardShow/AddtoCardShow";


const MyCart = () => {
    const [cart, setCart] = useState();
    const { user } = useContext(AuthContext);
   
       const myCartData = useLoaderData([]);

    useEffect(() => {
      const cartData = myCartData.filter((cart) => cart.email === user.email);
      setCart(cartData);
    }, [myCartData, user.email]);
    console.log(cart);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 min-h-screen">
        {cart?.map((addCart) => (
          <AddtoCardShow key={addCart._id} addCart={addCart}></AddtoCardShow>
        ))}
      </div>
    );
};

export default MyCart;