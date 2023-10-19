import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandCard/BrandCard";


const Home = () => {

    const brandData = useLoaderData();
    console.log(brandData)
    return (
      <div className="grid grid-cols-3 container mx-auto gap-4 mt-10 mb-10">
        {brandData.map((brands) => (
          <BrandCard key={brands.id} brands={brands}></BrandCard>
        ))}
      </div>
    );
};

export default Home;