import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaMoneyBillWaveAlt, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex gap-6">
            <div className="w-72 min-h-screen bg-[#D1A054] p-5">
                <ul className="menu text-xl font-medium">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </> :
                            <>
                                <li><NavLink
                                    to="/dashboard/userHome"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <FaHome></FaHome> User Home
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/reservation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <FaCalendar></FaCalendar> Reservation
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/paymentHistory"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <FaMoneyBillWaveAlt></FaMoneyBillWaveAlt> Payment history
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/cart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <FaShoppingCart></FaShoppingCart> My Cart
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/addReview"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <FaAd></FaAd> Add review
                                </NavLink></li>
                                <li><NavLink
                                    to="/dashboard/myBooking"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white" : ""
                                    }
                                >
                                    <FaList></FaList> My booking
                                </NavLink></li>
                            </>
                    }





                    <div className="divider"></div>
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white" : ""
                        }
                    >
                        <FaHome></FaHome>Home
                    </NavLink></li>
                    <li><NavLink
                        to="/ourMenu"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white" : ""
                        }
                    >
                        <AiOutlineMenu></AiOutlineMenu> Our Menu
                    </NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;