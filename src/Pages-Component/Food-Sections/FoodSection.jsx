


import Banner from "../Banner/Banner";

import { Link, useLoaderData } from "react-router-dom";
import CardData from "../Card/CardData";
import Categories from "../CateGory/Categories";


const FoodSection = () => {

  const foodData = useLoaderData();
 
    return (
        <div className="mt-8 mb-8">

         <Banner></Banner>

      <div className="mt-8 mb-8">
        <h2 className="text-[#131313] text-[50px] text-center">Our Foods Section</h2>
        <p className="text-center text-[17px] mt-4 "><i>A food website is a digital platform to share recipes, cooking tips, or information about food <br /> products and services. Creating an excellent food website can be challenging, particularly in terms of presenting content in an appealing way. </i></p>
      </div>

    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ">
        {
            foodData.map(cardList => <CardData key={cardList._id} cardList={cardList}></CardData>)
        }
      </div>

      
     <div className="w-[15%] mx-auto mt-10">
      <Link to="/allFoods">
      <button className="btn btn-secondary btn-block">See All Foods</button>
      </Link>
     </div>
     <div>
       <Categories></Categories>
       </div>

    </div>
    );
};

export default FoodSection;