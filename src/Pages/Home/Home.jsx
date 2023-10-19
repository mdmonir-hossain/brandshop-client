import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandCard/BrandCard";


const Home = () => {

    const brandData = useLoaderData();
    console.log(brandData)
    return (
      <div className="mt-10 mb-10">
        <h1 className="text-center text-3xl font-extrabold mb-2">
          Our Brand Produscts
        </h1>
        <div className="grid grid-cols-3 container mx-auto gap-4 ">
          {brandData.map((brands) => (
            <BrandCard key={brands.id} brands={brands}></BrandCard>
          ))}
        </div>
      </div>
    );
};

export default Home;