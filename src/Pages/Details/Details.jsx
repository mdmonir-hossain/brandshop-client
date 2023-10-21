import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";

const Details = () => {
  const [detailsid, setDetails] = useState([]);
  const { _id } = useParams();
  const detailsData = useLoaderData([]);
  useEffect(() => {
    const singlecard = detailsData?.find(
      (singleDetails) => singleDetails._id === _id
    );
    setDetails(singlecard);
  }, [_id, detailsData]);
  console.log(detailsid);
  return (
    <div>
      <DetailsCard detailsid={detailsid}></DetailsCard>
    </div>
  );
};

export default Details;
