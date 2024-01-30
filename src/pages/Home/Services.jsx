import { useEffect, useState } from "react";
import Service from "../../components/Service/Service";

const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    console.log(services);

  return (
    <div className="mb-10">
      <div className="text-center space-y-5">
        <p className="font-bold text-[#FF3811]">Service</p>
        <h3 className="text-5xl font-bold">Our Service Area</h3>
        <p className="text-[#737373] w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      </div>
      {/* Card Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {
            services.map(service => <Service key={service._id} service={service}/>)
        }
      </div>
      <div className="text-center">
      <button className="mt-5 btn btn-outline btn-error">More Services</button>
      </div>
      
    </div>
  );
};

export default Services;
