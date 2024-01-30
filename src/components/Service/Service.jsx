/* eslint-disable react/prop-types */
import { GoArrowRight } from "react-icons/go";



const Service = ({ service }) => {

  const { _id, title, img, price } = service || {};

  return (
    <div>
      <div className="card bg-base-100 border border-[#E8E8E8] h-full">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="img"
            className="rounded-xl h-[220px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center justify-between">
            <p className="text-[#FF3811] font-bold ">Price :$ {price} </p>
            <GoArrowRight className="text-2xl text-[#FF3811]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
