import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';

import { FaFacebookF, FaGoogle, FaLinkedin } from "react-icons/fa6";


const Login = () => {
  return (
    <div className="hero h-[90vh]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
         
          <img src={loginImg} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm bg-base-100 border p-10 m-10">
          <form className="">
          <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 text-center space-y-6">
              <button className="btn bg-[#FF3811] text-white">Login</button>
              <p>Or Sign In with</p>
              <div className='flex justify-center gap-5'>
                {/* Social Media Icons */}
                <FaFacebookF />
                <FaLinkedin />
                <FaGoogle />
              </div>
              <p>Have an account?
              <Link to="/" className='text-[#FF3811] font-bold ml-1'>
                 Sign In
              </Link>
               </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
