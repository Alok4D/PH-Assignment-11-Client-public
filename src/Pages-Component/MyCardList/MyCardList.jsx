import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

    const {user} = useContext(AuthContext)
    const [items, setItems] = useState([])
    console.log(items);
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
              
              fetch(`https://assignment-ten-server-alpha-one.vercel.app/myCardDelete/${_id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Spot has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    //
    
    useEffect(()=>{
        fetch(`http://localhost:5000/food/email/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItems(data);
            console.log(data);
        })
    },[user])
    console.log(items);

    return (
        <div>
        {/* <Helmet><title>My Art & Craft List</title></Helmet> */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:w-[80%] mx-auto">
              {
                  items.map(item =><div key={item._id}>

                       <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B] mt-8 mb-8">
        <img src={item.photo} alt="Industrial-Products-Images" className="border rounded-xl h-[190px] " />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">{item.itemName}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60 flex-grow">{item.description}</p>
        <div className="text-lg font-semibold">${item.price}</div>
      </div>
      <div className="flex gap-4">

      <button onClick={()=>handleDelete(item._id)} className="btn text-sm bg-slate-500">Delete</button>
                                        <Link to={`/update/${item._id}`}>
                                            <button className="btn bg-slate-500">Update</button>
                                        </Link>

        {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Update</button>
      
       <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Delete</button> */}
     
     
        
      </div>
        </div>
                  </div>)
              }
          </div>
      </div>
    );
};

export default MyList;

