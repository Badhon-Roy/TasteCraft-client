import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
    const [errorMassage, setErrorMassage] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    console.log(location.state);
    const navigate = useNavigate()

    const { signIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state?.from?.pathname : '/')
                swal("Log in", "successful", "success")
                e.target.reset();
            })
            .catch(() => {
                setErrorMassage('login failed please check your email and password and try again');
            })
            

    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="bg-base-200">
            <div className="lg:w-2/4 md:w-3/4 mx-auto py-32 px-4">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-8">Login now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-xl mt-2">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder="password" className="input input-bordered w-full" required />

                                    <p className="absolute right-5 top-4 text-xl" onClick={handleShowPassword}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </p>
                                </div>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-xl text-white">Login</button>
                            </div>
                        </form>
                        {
                            errorMassage && <p className="text-red-500">{errorMassage}</p>
                        }
                        <SocialLogin></SocialLogin>





                        <p>Do not have an account? <Link to="/register"> <span className="text-blue-600 font-bold cursor-pointer text-[18px]">Register</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;