import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedBrandCard from "../SelectedBrandCard/SelectedBrandCard";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img  src="https://i.ibb.co/5jWRNJg/apple.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/QJC5x8Z/samsung.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/NntLHBM/sony.png" />
        </SwiperSlide>
      </Swiper>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 mb-10 min-h-screen">
        {selectBrand?.map((selectedBrand) => (
          <SelectedBrandCard
            key={selectedBrand._id}
            selectedBrand={selectedBrand}
          ></SelectedBrandCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProductsALL;