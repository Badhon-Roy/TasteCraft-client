import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {data : carts , refetch , isPending : loading} = useQuery({
        queryKey : ['carts' , user?.email ],
        queryFn : async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data ;
        }
    })
    return [carts , refetch , loading];
};

export default useCart;