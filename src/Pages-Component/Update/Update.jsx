
import { Helmet } from "react-helmet";
import {  Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";



const Update = () => {
    
    const food = useLoaderData();
    console.log(food);

    const {photo, email, foodName, foodOrigin,  price, description,   subcategory, quantity, name, _id}= food;

    const handleUpdateFood = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const updatedFood = {name, photo,   price,  description, foodOrigin, subcategory, quantity}
        console.log(updatedFood);

        fetch(`https://restaurant-management-website-server.vercel.app/food/${_id}`,{
            method:'PUT',
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedFood)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success("Updated Successfully!")
                form.reset();
            }
        })
        .catch(error =>{
            console.error(error)
            toast.error("Update Failed!")
        })
    }

    return (
        <div>
           
            <div  className=" mb-10 mt-10 w-[80%] mx-auto ">
                <Helmet><title>Update Foods Item Page</title></Helmet>
                <form onSubmit={handleUpdateFood} className=" w-full p-5 bg-gray-300 rounded-lg">
                    <h1 className="md:text-5xl text-[27px] font-bold text-center mb-4">Update Foods Item</h1>
                    <Link to={"/myListFoods"}>
                       <button className='btn mb-2 bg-orange-100'>Back My Food Lists</button>
                    </Link>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <div  className="mb-6">
                            <h3 className="font-bold">User Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="name" defaultValue={name}  placeholder="User Name"required/>
                                </label>
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Category Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="subcategory" defaultValue={subcategory} placeholder="Category Name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Food URL :</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="url" name="photo" defaultValue={photo} placeholder="Input Photo URL"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">User Email:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="email" name="email" defaultValue={email} placeholder="Email" required/>
                                </label>
                                
                            </div>
                          
                        </div>
                         
                        <div>
                        <div  className="mb-6">
                            <h3 className="font-bold">Food Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="foodName" defaultValue={foodName} placeholder="Food name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Food Origin :</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="text" name="foodOrigin" defaultValue={foodOrigin} placeholder="Food origin"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">Quantity :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" required/>
                                </label>
                                
                            </div>

                            <div className="mb-10">
                                <h3 className="font-bold">Price :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="price" defaultValue={price} placeholder="Price"  required/>
                                    
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold">Short Description :</h3>
                        <textarea className="textarea textarea-bordered w-full" name="description" defaultValue={description} placeholder="Input Short description"></textarea>
                    </div>
                  <input type="submit" value="Update Food Item" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default Update;

