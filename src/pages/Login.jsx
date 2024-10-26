

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { AuthContext } from "../firebase/AuthProvider";
import PrimaryBtn from "../components/PrimaryBtn";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        if (password.length < 6) {
            return setError('Your password must be at least 6 characters');
        }
        if (!/[a-z]/.test(password)) {
            return setError('Your password must contain at least one small letter');
        }
        if (!/[A-Z]/.test(password)) {
            return setError('Your password must contain at least one Capital letter.');
        }

        signIn(email, password)
            .then(result => {
                if (result.user) {
                    toast.success("Login successfully!");
                    navigate(location?.state ? location.state : "/");
                }
            })
            .catch(error => {
                toast.error(`Login error! ${error.message}`);
            });
    };

    const handleSocialLogin = (social, name) => {
        social()
            .then(result => {
                toast.success(`Login with ${name}`);
                if (result.user) {
                    navigate(location?.state ? location.state : "/");
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div className="border border-primary custom-margin flex lg:flex-row flex-col-reverse w-full  mx-auto mt-10  rounded-lg overflow-hidden">
            <Helmet>
                <title>Jobword | Login</title>
            </Helmet>

            {/* Left Image Section */}
            <div className="lg:w-full hidden lg:block">
                <div
                    className="h-full w-full bg-cover"
                    style={{
                        backgroundImage:
                            "url('login.png')",
                    }}
                ></div>
            </div>

            {/* Right Login Section */}
            <div className="lg:max-w-xl w-full  p-8 flex flex-col justify-center">
                <Fade direction="left">
                    <h1 className="text-3xl lg:text-5xl font-bold text-primary text-center mb-8">Login Now!</h1>
                </Fade>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email"  className=" block w-full px-4 py-3  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring "
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-700 font-bold'>This field is required</span>}
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Password"
                                className=" block w-full px-4 py-3  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring "
                                {...register("password", { required: true })}
                            />
                            <span onClick={() => setShowPass(!showPass)} className=" font-bold text-3xl right-3 absolute top-[10px]">

                                {
                                    showPass ? <FaEyeSlash /> : <FaRegEye />
                                }

                            </span>
                        </div>
                        {error && <p className="text-red-700 font-bold">{error}</p>}
                    </div>

                    

                    <div className='flex w-full items-center justify-center mt-6'>

                        <PrimaryBtn props={"Login"}/>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <p>Don't have an account? <Link to="/register" className="text-blue-500 underline">Register Now</Link></p>
                </div>

                {/* Divider and Social Login */}
                <div className="divider">or continue with</div>
                <div className="flex  gap-3 flex-col justify-center mb-5 px-6">


                    <button onClick={() => handleSocialLogin(googleLogin, "google")} className="bg-white flex items-center   justify-center gap-x-3 text-base  text-black border border-primary hover:text-primary dark:hover:bg-gray-800 rounded-lg   py-2.5 ">


                        <svg className=" w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g >
                                <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                                <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3033_94454">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Sign in with Google</span>
                    </button>
                    <button onClick={() => handleSocialLogin(githubLogin, "github")} className="bg-white flex items-center   justify-center gap-x-3 text-base  text-black border-primary hover:text-primary dark:hover:bg-gray-800 rounded-lg  duration-300 transition-all border  py-2.5">

                        

                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>

                        <span>Sign in with Google</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;
