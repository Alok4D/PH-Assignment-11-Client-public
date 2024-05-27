import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Auth-Provider/AuthProvider";
import Swal from "sweetalert2";
import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Gallery = () => {
 
  const location = useLocation()
  const Navigate = useNavigate()

  const { user } = useContext(AuthContext);
  console.log(user);
  const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        Navigate(location?.state ? location.state : '/gallery');
    };


  const [foods, setFoods] = useState([]);

  const handleAddFoodPhoto = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = user.displayName;
    const photo = form.photo.value;
    const feedback = form.feedback.value;
    const email = user.email;
    const newAddFoodPhoto = { name, email, photo, feedback };
    console.log(newAddFoodPhoto);

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
        
          const newItems = [...foods, newAddFoodPhoto]
          setFoods(newItems);
          setShowModal(false);
        }
      });
  };

  useEffect(() => {
    fetch("https://restaurant-management-website-server.vercel.app/foodPhoto")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);



  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>Our Foods Gallery</title>
      </Helmet>
      <div>
        <div className=" w-full h-[12.5rem] rounded-xl bg-[url('https://i.pinimg.com/originals/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg')]">
         <div className="px-10">
         <h2 className="text-center text-4xl font-bold text-red-600 pt-10">
          Add Your Favorite Food in Our Gallery
          </h2>
          <p className="flex text-center pt-3">You can add your favorite food in our section.if you want to add please scroll down and find add button.Everyone see your favorite food in our section there have mentioned your name.That will be my pleasure if you add your favorite food and share your experience also have you possible share our specialty</p>
         </div>
        </div>
        <div>
        
          {
    showModal && (
        <dialog open className="w-full xl:w-auto h-auto bg-gradient-to-t from-[#7076a0ed] to-[#8078a4fb] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-20 overflow-y-auto">
             <form onSubmit={handleAddFoodPhoto} method="dialog" className="p-10">
                <h2 className="text-3xl text-red-300 font-extrabold text-center mb-4">
                  Submit Their Experience
                </h2>
                <div className="form-control">
                  <span className="label-text">User Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    defaultValue={user?.displayName} readOnly
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
            {foods?.map((data) => (
              <div className="App" key={data._id}>
                <div className="image_container">
                  <img alt=""
                    className="object-cover image w-full dark:bg-gray-500 aspect-square border-2 h-[15.625rem] rounded-xl p-3"
                    src={data?.photo}
                  />
                  <div className="image_overlay">
                    <p className="text-font-bold">Add by : {data?.name}</p>
                    <p>{data?.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {/* <div className="flex justify-center items-center mt-2">
         { user?  ( <button className="btn text-2xl"
              onClick={ () => setShowModal(true)}>Add Feedback</button>) : 
             <Link to="/login">
                <button className="btn text-2xl">Add Feedback</button>
              </Link>
              }
          </div> */}
          <div className="flex justify-center items-center mt-2">
        <button className="btn text-2xl"
              onClick={ () => setShowModal(true)}>Add Feedback</button> 
          </div>
          
      </section>
    </div>
  );
};

export default Gallery;
