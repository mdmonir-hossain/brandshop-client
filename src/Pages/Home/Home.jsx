import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandCard/BrandCard";
import Banner from "../../Components/Header/Banner/Banner";
import OurPartners from "../../Components/OurPartners/OurPartners";
import ContractUs from "../../Components/ContractUs/ContractUs";


const Home = () => {

    const brandData = useLoaderData();
    console.log(brandData)
    return (
        <div>
            <Banner></Banner>
        <div className="mt-10 mb-10">
          <h1 className="text-center text-3xl font-extrabold mb-2">
            Our Brand Products
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  container mx-auto gap-4 ">
            {brandData?.map((brands) => (
              <BrandCard key={brands.id} brands={brands}></BrandCard>
            ))}
          </div>
        </div>
        <OurPartners></OurPartners>
        <ContractUs></ContractUs>
      </div>
    );
};

export default Home;