
import { useContext} from "react";
import { AuthContext } from "../Auth-Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";



const Login = () => {
  const {loginUser, googleLogin, setUser} = useContext(AuthContext)
  const location = useLocation()
  const Navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";

   
 

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        loginUser(email, password)
        .then(result => {
          setUser(result.user)
          toast.success('Google login successfully!')
          // Navigate(location?.state ? location.state : '/');
          Navigate(from, { replace: true });
  
        })
        .catch(error => {
          console.error(error);
          toast.error('Google login fail!');
        })
    
    }


    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result => {
        setUser(result.user)
        toast.success('Google login successfully!')
        // Navigate(location?.state ? location.state : '/');
        Navigate(from, { replace: true });

      })
      .catch(error => {
        console.error(error);
        toast.error('Google login fail');
      })
    }


    return (
       <div className="hero  rounded-xl min-h-screen bg-base-200 mb-8 mt-8" >
        <Helmet><title>Login Page</title></Helmet>
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">
        <h2 className="text-3xl font-extrabold text-center mb-4">Login Now!</h2>
        <div className="form-control">
            <span className="label-text">Email</span>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <span className="label-text">Password</span>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-2">
          <button className="btn bg-[#F60]">Login</button>
        </div>
        
      </form>

      <div className="flex items-center pt-4 space-x-2 p-9">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Social icons */}
        <div className="flex justify-around">
            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7  fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
            </button>
           
         
        </div>


      <div>
      <p className="mb-3 text-center">Don&apos;t have an account?<Link to="/register" className="underline font-semibold">Register</Link></p>
        <hr />
      </div>

      

    </div>
  </div>
        </div>
    );
};

export default Login;


