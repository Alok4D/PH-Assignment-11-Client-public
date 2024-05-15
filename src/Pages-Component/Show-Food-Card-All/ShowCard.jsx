import { Link } from "react-router-dom";


const ShowCard = ({allCard}) => {
    console.log(allCard);
    const  { photo,  price,  subcategory , quantity, foodName  } = allCard;
    return (
        <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B] mt-8 mb-8">
     <img src={photo} alt="Industrial-Products-Images" className="border rounded-xl h-[190px] " />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">Food Name : {foodName}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60 flex-grow">Category : #{subcategory}</p>
       <div className="flex gap-10 ">
       <div className="text-lg font-semibold">Price : ${price}</div>
        <div className="text-lg font-semibold">Quantity : {quantity}</div>
       </div>
      </div>
      <div className="flex gap-4">
       <Link to={`/cardDetails/${allCard._id}`}>
       <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
       </Link>
     
        
      </div>
        </div>
    );
};

export default ShowCard;