import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const [cart, setCart] = useState();
    const { user } = useContext(AuthContext);
   
       const myCartData = useLoaderData([]);

    useEffect(() => {
      const cartData = myCartData.filter((cart) => cart.uid === user.uid);
      setCart(cartData);
    }, [myCartData, user.uid]);
    console.log(cart);
    return (
      <div>
            {
                cart?.map(addCart=> )
        }
      </div>
    );
};

export default MyCart;