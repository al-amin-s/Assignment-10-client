import { Link } from "react-router-dom";
import useAuth from "./Hooks/useAuth";

const NaveBar = () => {

    const { logOut,user } = useAuth()
    return (
        <div>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/home"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">Home</li></Link>
                            <Link to="/addcraft"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">Add Craft</li></Link>
                            <Link to="/allcraft"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">All Craft</li></Link>
                            <Link to="/mycraft"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">My Craft</li></Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold text-[#af6767]">CraftopiaHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                        <Link to="/home"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">Home</li></Link>
                        <Link to="/addcraft"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">Add Craft</li></Link>
                        <Link to="/allcraft"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">All Craft</li></Link>
                        <Link to="/mycraft"><li className="btn text-[#d1a4a4] bg-white border-none shadow-lg ">My Craft</li></Link>

                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://avatars.githubusercontent.com/u/155284387?v=4" alt="" />
                            </div>

                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li>
                                <button className="btn btn-sm btn-ghost">{user.displayName}</button>
                            </li>
                            <li>
                                <button onClick={logOut} className="btn btn-sm btn-ghost">Log Out</button>
                            </li>
                        </ul>
                        
                    </div>
                    :
                        <div >
                       <Link to="/login">
                       <button  className="btn btn-sm btn-ghost">Log In</button>
                       </Link>
                        </div>
                    
                        }
                </div>
            </div>
        </div>
    );
};

export default NaveBar;