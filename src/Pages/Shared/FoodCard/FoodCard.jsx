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
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="w-full max-w-md overflow-hidden transition-all transform bg-white rounded-lg shadow-xl group hover:scale-105 hover:shadow-2xl">
            <figure className="relative overflow-hidden">
                <img src={image} className="object-cover w-full h-64 transition-transform group-hover:scale-110" alt={name} />
                <p className="absolute px-4 py-2 text-lg font-semibold text-white bg-black bg-opacity-75 rounded-lg top-5 right-5">${price}</p>
            </figure>
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 transition-colors hover:text-yellow-500">{name}</h2>
                <p className="mt-2 text-sm text-gray-600">{recipe}</p>
                <div className="flex justify-center mt-6">
                    <button 
                        onClick={handleAddToCart} 
                        className="px-8 py-2 text-lg font-semibold text-[#ff9000] border-2 border-[#ff9000] hover:bg-[#ff9000] hover:text-white transition-all duration-300 rounded-lg shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#ff9000]">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
