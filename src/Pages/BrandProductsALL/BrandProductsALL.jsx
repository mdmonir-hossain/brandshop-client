import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedBrandCard from "../SelectedBrandCard/SelectedBrandCard";


const BrandProductsALL = () => {
    const [selectBrand, setSelectBrand] = useState();
    const { name } = useParams();
    
    const brandAllData = useLoaderData([]);
    
    useEffect(() => {
      const productData = brandAllData.filter(
        (brand) => brand.brandname === name
        );
        setSelectBrand(productData);
    }, [brandAllData, name]);
console.log(selectBrand);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 mb-10">
        {selectBrand?.map((selectedBrand) => (
          <SelectedBrandCard
            key={selectedBrand._id}
            selectedBrand={selectedBrand}
          ></SelectedBrandCard>
        ))}
      </div>
    );
};

export default BrandProductsALL;