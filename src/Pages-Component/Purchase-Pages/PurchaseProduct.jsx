import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth-Provider/AuthProvider";

const PurchaseProduct = () => {
  const [disablePurchase, setDisablePurchase] = useState(false);

  const { user } = useContext(AuthContext);
  const foodPurchase = useLoaderData();
  console.log(foodPurchase);
  const {
    name,
    foodName,
    price,
    email,
    quantity: aQuantity,
    date,
    _id,
    photo,
  } = foodPurchase;
  const avQuantity = parseInt(aQuantity);



  const handlePurchaseFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const email = form.email.value;
    const purchaseQuantity = parseInt(form.quantity.value);
    const date = form.date.value;

    const quantity = avQuantity - purchaseQuantity;
    if (avQuantity - purchaseQuantity <= 0) {
      Swal.fire({
        title: "failed!",
        text: "Quantity not available!",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    const newPurchaseFood = {
      name,
      foodName,
      price,
      email,
      date,
      photo,
      quantity,

      purchaseQuantity,
    };
    console.log(newPurchaseFood);

    // send data to the server
    fetch(
      `https://restaurant-management-website-server.vercel.app/foodPurchase/${_id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPurchaseFood),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.result.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Food Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };



  return (
    <div className="pt-10  mb-10">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5] rounded-xl">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-4xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add">Purchase Food Item</i>
            </span>
          </p>
        </div>

        {/* form */}
        {user?.email === email ? (
          <p>You can't purchase your own food</p>
        ) : (
          <form
            onSubmit={handlePurchaseFood}
            className=" w-[50%] mx-auto p-5 mb-8 bg-gray-300"
          >
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="mb-6">
                  <h3 className="font-bold">Buyer Name :</h3>
                  <label className="input  input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="User Name"
                      defaultValue={foodPurchase.name}
                      readOnly
                      required
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold">Buyer Email:</h3>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      defaultValue={user?.email}
                      readOnly
                      required
                    />
                  </label>
                </div>
                <div className="mb-10">
                  <h3 className="font-bold">Price :</h3>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      defaultValue={foodPurchase.price}
                      readOnly
                      required
                    />
                  </label>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="font-bold">Food Name:</h3>
                  <label className="input  input-bordered flex items-center gap-2">
                    <input
                      type="text"
                      name="foodName"
                      placeholder="Food name"
                      defaultValue={foodPurchase.foodName}
                      readOnly
                      required
                    />
                  </label>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold">Quantity :</h3>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      required
                    />
                  </label>
                </div>

                <div className="">
                  <label className="label">
                    <span className="label-text">Buying Date : </span>
                  </label>
                  <input
                    type="Date"
                    name="date"
                    placeholder="Date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              disabled={avQuantity <= 0 ? true : false}
              className="btn bg-emerald-400 w-full text-2xl"
            >
              Purchase
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PurchaseProduct;
