import { useLoaderData } from "react-router-dom";
import ShowCard from "../Show-Food-Card-All/ShowCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const AllCard = () => {
  const allCard = useLoaderData();
 

  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  const handleFoodsSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };
  
  useEffect(() => {
    fetch(`https://restaurant-management-website-server.vercel.app/foods?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        
        setFoods(data);
      });
  }, [search]);

  return (
    <div>
      <Helmet>
        <title>Our All Food Items !</title>
      </Helmet>
      <div>
      <div className="mt-10 mb-10 w-full h-[230px] rounded-xl bg-[url('https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg')]">
          <h2 className="text-center text-4xl font-bold text-red-600 pt-4">
            Our All Food Items
          </h2>
          <p className="text-center flex pt-2 text-gray-400">Burger, pasta, sandwich, steak, soup, and salad are all culinary delights that offer a blend of flavors and textures. From the savory satisfaction of a well-grilled steak to the comforting warmth of a hearty soup, each dish provides a unique dining experience, catering to diverse palates and preferences</p>
          <div className="mt-5 mb-10">
        <form onSubmit={handleFoodsSearch} className="text-center ">
          <input type="text" name="search" placeholder="search foods"
            className="input input-bordered input-lg w-full max-w-xs mr-2" />
          <input type="submit" value="Search" className="btn text-red-600 bg-red-300" />
        </form>
      </div>
        </div>
      </div>


    
     {
        foods.length ?   <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-5 ">
        {foods.map((food) => (
          <ShowCard allCard={food} key={food._id}></ShowCard>
        ))}
      </div> :  <div
        className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto "
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
