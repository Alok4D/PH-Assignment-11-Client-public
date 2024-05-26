import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Auth-Provider/AuthProvider";
import Swal from "sweetalert2";
import "../App.css";

const Gallery = () => {
  const { user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);


  const handleAddFoodPhoto = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const feedback = form.feedback.value;
    const email = user.email;
    const newAddFoodPhoto = { name, email, photo, feedback };

    // send data to the server
    fetch("https://restaurant-management-website-server.vercel.app/foodPhoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAddFoodPhoto),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        
          const newItems = [...items, newAddFoodPhoto]
          setItems(newItems);
          setShowModal(false);
        }
      });
  };

  useEffect(() => {
    fetch("https://restaurant-management-website-server.vercel.app/foodPhoto")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const userData = data.filter((item) => item?.email === user?.email);
    if (userData.length > 0) {
      setItems(userData);
    }
  }, [data, user?.email]);

  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>Our Foods Gallery</title>
      </Helmet>
      <div>
        <div className=" w-full h-[200px] rounded-xl bg-[url('https://png.pngtree.com/background/20210711/original/pngtree-bread-minimalist-literary-white-food-poster-background-picture-image_1121500.jpg')]">
          <h2 className="text-center text-4xl font-bold text-red-600 pt-20">
            Home ! Foods Gallery
          </h2>
        </div>
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div className="flex justify-center items-center mt-2">
            <button
              className="btn text-2xl"
              onClick={ () => setShowModal(true)}>Add Food
            </button>
          </div>

          {
    showModal && (
        <dialog open className="w-full xl:w-auto h-auto bg-gradient-to-t from-[#7076a0ed] to-[#8078a4fb] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-20 overflow-y-auto">
             <form onSubmit={handleAddFoodPhoto} method="dialog">
                <h2 className="text-3xl font-extrabold text-center mb-4">
                  Submit Their Experience
                </h2>
                <div className="form-control">
                  <span className="label-text">name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <span className="label-text">Feedback</span>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    name="feedback"
                    placeholder="feedback"
                  ></textarea>
                </div>

                <div className="form-control">
                  <span className="label-text">Food Image url</span>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Image url"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-2">
                  <button className="btn bg-[#F60]">Submit</button>
                </div>
              
                
              </form>
            <button onClick={closeModal} className='absolute top-1 right-1 text-5xl text-red-900 hover:text-red-700 hover:opacity-80 transition-all duration-500' title='Close'>X</button>
        </dialog>
    )
}

     

     
        </div>
      </div>

      <section className="py-6 dark:bg-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
            {items?.map((data) => (
              <div className="App" key={data._id}>
                <div className="image_container">
                  <img alt=""
                    className="object-cover image w-full dark:bg-gray-500 aspect-square border-2 h-[250px] rounded-xl p-3"
                    src={data?.photo}
                  />
                  <div className="image_overlay">
                    <p>{data?.name}</p>
                    <p>{data?.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
