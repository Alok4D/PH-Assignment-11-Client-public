


import Banner from "../Banner/Banner";

import { Link, useLoaderData } from "react-router-dom";
import CardData from "../Card/CardData";


const FoodSection = () => {

  const foodData = useLoaderData();
 
    return (
        <div className="mt-8 mb-8">

         <Banner></Banner>

      <div className="mt-8 mb-8">
        <h2 className="text-[#131313] text-[50px] text-center">Top Foods Section : {foodData.length}</h2>
      </div>

    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto">
        {
            foodData.map(cardList => <CardData key={cardList._id} cardList={cardList}></CardData>)
        }
      </div>

       {/* <div>
       <Categories></Categories>
       </div> */}
     <div className="w-[10%] mx-auto mt-8">
      <Link to="/allFoods">
      <button className="btn btn-secondary btn-block">See All Foods</button>
      </Link>
     </div>

    </div>
    );
};

export default FoodSection;