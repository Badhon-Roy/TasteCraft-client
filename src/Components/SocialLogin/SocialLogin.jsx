
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import swal from "sweetalert";
import useAxiosPublic from "../../Hook/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                if(res.data.insertedId){
                    swal("Log in", "successful", "success")
                }
                navigate('/');
            })
        })
    }

    return (
        <div className="px-4">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleLogin} className="border-2 font-bold border-black w-[170px] flex items-center gap-3 p-1 rounded-lg transform translate-x-0 transition-transform ease-in-out duration-300 hover:translate-x-5 bg-gradient-to-r hover:from-green-500 hover:to-blue-500">
                    <img className="w-8" src="https://tinyurl.com/4d5vrs96" alt="" />
                    sign in google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;