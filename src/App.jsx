import { useLoaderData } from "react-router-dom";
import FoodAddedCard from "./Pages-Component/FoodAddedCard/FoodAddedCard";
import { useState } from "react";


const App = () => {
    const loadedFoods = useLoaderData();
    const [foods, setFoods] = useState(loadedFoods);
    return (
        <div>
            <h2>food : {foods.length}</h2>
           <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ">
           {
                foods.map(food => <FoodAddedCard
                key={food._id}
                food={food}
                foods={foods}
                setFoods={setFoods}
                ></FoodAddedCard>)
            }
           </div>
        </div>
    );
};

export default App;