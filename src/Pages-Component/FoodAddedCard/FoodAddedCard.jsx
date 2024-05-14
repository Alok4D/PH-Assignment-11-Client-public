import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const FoodAddedCard = ({food, foods, setFoods}) => {
    const {photo, itemName, description, price, _id} = food;

    //
    const handleDelete =_id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              console.log('Delete Confirmed');

              fetch(`https://restaurant-management-website-server.vercel.app/food/${_id}` , {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your food has been deleted.",
                    icon: "success"
                  })
                  const remaining = food.filter(fod => fod._id !== _id);
                  console.log(remaining);
                }
              })
            }
          });
    }


    return (
        <div>
              <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B] mt-8 mb-8">
        <img src={photo} alt="Industrial-Products-Images" className="border rounded-xl h-[190px] " />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">{itemName}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60 flex-grow">{description}</p>
        <div className="text-lg font-semibold">${price}</div>
      </div>
      <div className="flex gap-4">

      <button onClick={() => handleDelete(_id)} className="btn text-sm bg-slate-500">Delete</button>


                                        <Link to={`/update/${_id}`}>
                                            <button className="btn bg-slate-500">Update</button>
                                        </Link>

        {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Update</button>
      
       <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Delete</button> */}
     
     
        
      </div>
                      </div>
        </div>
    );
};

export default FoodAddedCard;