import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../assets/logo & 404/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import useCart from "../../../Hook/useCart";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [carts] = useCart()
    const handleLogOut = () => {
        swal({
            title: "Are you sure you want to log out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    logOut()
                        .then(() => {
                            swal("Log Out", "successful", "success")
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            });
    }
    return (
        <div className="navbar fixed z-10 bg-gray-500 bg-opacity-30 max-w-[1300px] mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white text-black rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Home</NavLink></li>
                        <li><NavLink to="/ourMenu" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Order Food</NavLink></li>
                        <li>
                            <Link to="/dashboard/cart">
                                <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">{carts?.length}</span>
                                    </div>
                                </button>
                            </Link>
                        </li>
                        {
                            user?.email ? <button onClick={handleLogOut} className="text-red-500 hover:underline">Log Out</button> : 
                            <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Login</NavLink></li>
                        }
                    </ul>
                </div>
                <a className="text-xl normal-case btn btn-ghost"><img className="w-[50px]" src={logoImg} alt="" /></a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="flex items-center gap-8 px-1">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
                        }
                    >
                        Home
                    </NavLink> </li>
                    <li><NavLink
                        to="/ourMenu"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
                        }
                    >
                        Our Menu
                    </NavLink></li>
                    <li><NavLink
                        to="/order/salad"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
                        }
                    >
                        Order Food
                    </NavLink></li>
                    <li>
                    <Link to="/dashboard/cart">
                                <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">{carts?.length}</span>
                                    </div>
                                </button>
                            </Link>
                    </li>
                    {
                        user?.email ? <button onClick={handleLogOut}>Log Out</button> : <li><NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
                            }
                        >
                            Login
                        </NavLink></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;