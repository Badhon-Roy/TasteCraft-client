import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";


const FoodCard = ({ item }) => {
    const { _id, name, recipe, image, price } = item;
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const location = useLocation()
    const [,refetch] = useCart()
    const navigate = useNavigate()
    const handleAddToCart = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId : _id ,
                email : user?.email,
                name ,
                image ,
                price
            }
            axiosSecure.post('/carts' , cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} add to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })

        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state : { from: location}});
                }
            });
        }

    }
    return (
        <div className="w-full bg-base-100 shadow-xl relative">
            <figure><img src={image} className="w-full h-[300px]" alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-5 px-3 py-1 rounded top-5">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="flex justify-center">
                    <button onClick={handleAddToCart} className=" py-2 px-4 text-xl font-bold text-[#BB8506] bg-[#E8E8E8] hover:bg-slate-800 rounded-xl border-b-2 border-black uppercase">add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;