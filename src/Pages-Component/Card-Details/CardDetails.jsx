

import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";


const CardDetails = () => {

    const viewDetail = useLoaderData();
    console.log(viewDetail);

    const {name, photo, foodOrigin, foodName, price,  description, subcategory, _id} = viewDetail;


    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-[52px] mb-[52px] ">
       
          <Helmet><title>Food Details Page</title></Helmet>
      

    <div className="flex justify-center items-center bg-slate-200 border rounded-xl">
        <img src={photo} alt="Card Images" className="lg:p-8 p-2 lg:w-[1000px] w-[300px]"/>
    </div>
<div className="c-details">
    <span className=" text-[25px] text-bold mb-4">Food Name : {foodName}</span>
    <h2 className="text-[#131313] text-[18px] mt-4">Description : {description}</h2>
   
  
    <p className="text-[#131313] mt-3"><span className="text-[#131313] text-[16px]">Price : </span>{price}</p>
        <p>Food Origin : {foodOrigin}</p>
        <p>User Name : {name}</p>



<div className="flex gap-[65px] mt-4">
   <div className="text-[16px] text-[#646262]">
    <p className="mt-2 mb-2">Subcategory :</p>
   </div>
   <div className="text-[16px] text-[#646262]">
    <p className="mt-2">{subcategory}</p>
   </div>

</div>



    <div className="mt-3">
    <Link to="/purchasePage">
    <button className="btn bg-[#F60]">Purchase</button>
    </Link>
    </div>
   

</div>
</div>
    );
};

export default CardDetails;