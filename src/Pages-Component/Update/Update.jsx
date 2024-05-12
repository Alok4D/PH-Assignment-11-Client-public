


import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";



const Update = () => {
    
    const data = useLoaderData();
    console.log(data);

    const {photo,  price, rating,  description, itemName, customizationExample, processingTime, stockStatus, subcategory}= data;

    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const customizationExample = form.customizationExample.value;
        const photo = form.photo.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const user = {photo, rating,  price,  description, itemName, customizationExample, processingTime, stockStatus, subcategory}
       
        fetch(`http://localhost:5000/food/${data._id}`,{
            method:'PUT',
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
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
                <form onSubmit={handleAddTouristSpot} className=" w-full p-5 bg-gray-300 rounded-lg">
                    <h1 className="md:text-5xl text-[27px] font-bold text-center mb-4">Update Foods Item</h1>
                    <Link to={"/myListFoods"}>
                       <button className='btn mb-2 bg-orange-100'>Back My Food Lists</button>
                    </Link>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <div  className="mb-6">
                            <h3 className="font-bold">User Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="name"  placeholder="User Name"required/>
                                </label>
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Category Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="subcategory" placeholder="Category Name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Food URL :</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="url" name="photo" placeholder="Input Photo URL"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">User Email:</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </label>
                                
                            </div>
                          
                        </div>
                         
                        <div>
                        <div  className="mb-6">
                            <h3 className="font-bold">Food Name:</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="foodName" placeholder="Food name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Food Origin :</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="text" name="foodOrigin" placeholder="Food origin"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">Quantity :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="quantity" placeholder="Quantity" required/>
                                </label>
                                
                            </div>

                            <div className="mb-10">
                                <h3 className="font-bold">Price :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name="price" placeholder="Price"  required/>
                                    
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold">Short Description :</h3>
                        <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Input Short description"></textarea>
                    </div>
                    <button className="btn bg-emerald-400 w-full text-2xl">Add</button>
                </form>
            </div>
        </div>
    );
};

export default Update;

