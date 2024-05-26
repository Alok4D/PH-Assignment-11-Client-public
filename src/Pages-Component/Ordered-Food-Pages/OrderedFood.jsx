import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
import Swal from "sweetalert2";


const OrderedFood = () => {
  const { user } = useContext(AuthContext);
  const [foodPurchase, setFoodPurchase] = useState([]);

      //
      const handleOrderedFoodDelete =_id =>{
    
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
              console.log('Food Delete Confirmed');

              fetch(`https://restaurant-management-website-server.vercel.app/foodPurchase/${_id}` , {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your food has been deleted.",
                    icon: "success"
                  });
                  const remaining = foodPurchase?.filter( item => item._id !== _id)
                  setFoodPurchase(remaining);
                }
              })
            }
          });
    }
    //

  useEffect(() => {
    if (user && user.email) {
      const url = `https://restaurant-management-website-server.vercel.app/foodPurchase?email=${user.email}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setFoodPurchase(data);
          console.log('new data:', data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [user]);

  return (
    <div>
      <h1>Food Orders : <span className="text-6xl text-red-400">{foodPurchase.length}</span></h1>
      <div className="mt-10 mb-10">
        <div className="overflow-x-auto rounded-2xl mb-5 bg-slate-300">
          <table className="table border">
            <thead>
              <tr className="border">
                <th className="border  text-blue-400 text-[15px]">Food Name</th>
                <th className="border">Photo</th>
                <th className="border">Email</th>
                <th className="border">Price</th>
                <th className="border">Date</th>
                <th className="border">food owner</th>
                <th className="border">Ordered quantity</th>
              </tr>
            </thead>
            <tbody>
              {foodPurchase.map((foodPurchase, index) => (
                <tr key={index} className="border">
                  <td className="border">{foodPurchase.foodName}</td>
                  <td className="border">
                    <img src={foodPurchase.photo} alt={foodPurchase.name} className="h-[60px] border-2 border-red-300 rounded-full p-[2px]"  />
                  </td>
                  <td className="border">{foodPurchase.email}</td>
                  <td className="border">${foodPurchase.price}</td>
                  <td className="border">{foodPurchase.date}</td>
                  <td className="border">{foodPurchase.name}</td>
                  <td className="border">{foodPurchase?.purchaseQuantity}</td>
                  <td className="flex gap-2">

                    <button onClick={() => handleOrderedFoodDelete(foodPurchase._id)} className="btn btn-warning">Delete</button>
                   
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderedFood;
