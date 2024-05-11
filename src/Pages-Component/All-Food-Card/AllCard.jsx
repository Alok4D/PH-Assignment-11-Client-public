// import { useLoaderData } from "react-router-dom";
// import ShowCard from "../ShowAllCard/ShowCard";
// import { Helmet } from "react-helmet";

import { useLoaderData } from "react-router-dom";
import ShowCard from "../Show-Food-Card-All/ShowCard";


const AllCard = () => {
    const allCard = useLoaderData();
    console.log(allCard);
    
    return (

        <div>
           <div className="w-[80%] mx-auto mt-10">
           <select className="select select-bordered w-full max-w-xs">
                <option>All Crafts</option>
                <option>High Cost</option>
                <option>Low Cost</option>
            </select>
           </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto" data-aos="zoom-in">
            {/* <Helmet><title>All Art & Craft Items</title></Helmet> */}
            {
            allCard.map(allCard => <ShowCard allCard={allCard} key={allCard._id}></ShowCard>)
            }
        </div>
        </div>
    );
};

export default AllCard;