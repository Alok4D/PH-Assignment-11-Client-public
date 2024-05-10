// import { Helmet } from "react-helmet";
// import Swal from "sweetalert2";


const FoodAddItem = () => {
    const handleAddCraftItem = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const processingTime = form.processingTime.value;
        const customizationExample = form.customizationExample.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;
        const subcategory = form.subcategory.value;
        const newItem = {name, photo, rating, price, email, description, itemName, customizationExample, processingTime, stockStatus, subcategory}
        console.log(newItem);

        // send data to the server
        fetch('https://assignment-ten-server-alpha-one.vercel.app/addCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset();
            }
        })
    }
    return (
        <div className="pt-10 w-[80%] mx-auto mb-10">
            {/* <Helmet><title>Add Craft Item</title></Helmet> */}

        <div className="shadow-lg p-5 border dark:bg-[#1a2641d5] rounded-xl">
          {/* Heading */}
          <div className="mt-5 mb-8">
            <p className="text-center text-4xl font-semibold">
              <span className="mr-3 text-[#FF497C]"><i className="bx bxs-alarm-add">Add Food Item</i></span></p>
          </div>

          {/* form */}
       
                <form onSubmit={handleAddCraftItem} className=" w-full p-5 mb-8 bg-gray-300">
                   
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <div  className="mb-6">
                            <h3 className="font-bold">User Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="name" placeholder="User Name"required/>
                                </label>
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Category Name :</h3>
                                <label className="input  input-bordered flex items-center gap-2">
                                    <input type="text" name="subcategory" placeholder="subcategory Name"required/>
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
                                    <input type="text" name="itemName" placeholder="Item Name"required/>
                                </label>
                            
                            </div>

                            <div  className="mb-6">
                            <h3 className="font-bold">Food Origin :</h3>
                                <label className="input input-bordered flex items-center gap-2 mb-4">
                                    <input type="text" name="stockStatus" placeholder="stockStatus"  required/>
                                </label>
                            
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold">Quantity :</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="processingTime" placeholder="processing Time" required/>
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

export default FoodAddItem;