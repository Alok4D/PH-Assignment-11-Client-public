import { useLoaderData } from "react-router-dom";
import ShowCard from "../Show-Food-Card-All/ShowCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const AllCard = () => {
  const allCard = useLoaderData();
  console.log(allCard);

  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  const handleFoodsSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  };
  
  useEffect(() => {
    fetch(`http://localhost:5000/foods?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
      });
  }, [search]);

  return (
    <div>
      <Helmet>
        <title>Our All Food Items !</title>
      </Helmet>
      <div className="mt-10 mb-10 bg-slate-300 h-[100px] border rounded-xl">
        <form onSubmit={handleFoodsSearch} className="text-center pt-4">
          <input type="text" name="search" placeholder="search foods"
            className="input input-bordered input-lg w-full max-w-xs mr-2" />
          <input type="submit" value="Search" className="btn" />
        </form>
      </div>

    
     {
        foods.length ?   <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ">
        {foods.map((food) => (
          <ShowCard allCard={food} key={food._id}></ShowCard>
        ))}
      </div> :  <div
        className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto  mt-10"
        data-aos="zoom-in">
        {allCard.map((allCard) => (
          <ShowCard allCard={allCard} key={allCard._id}></ShowCard>
        ))}
      </div>
     }
    </div>
  );
};

export default AllCard;
