
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../firebase/AuthProvider";

const Nav = () => {
    const { logout, user } = useContext(AuthContext);

    // const user = true;
    // const logout = true;

    const [theme, seTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);

    }, [theme]);



    // console.log("navbar a user ??", user);

    const handleToggle = (e) => {
        if (e.target.checked) {
            seTheme('dark');
        }
        else {
            seTheme('light');
        }
    }


    const Links = <>

        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-4 border-primary text-primary rounded-none  bg-secondary  font-bold my-anchor-element-classHome' : 'font-bold my-anchor-element-classHome'}>Home</NavLink>

        </li>

        <li>
            <NavLink to="/assignments" className={({ isActive }) => isActive ? 'border-b-4 border-primary text-primary rounded-none  bg-secondary  font-bold my-anchor-element-class2' : 'font-bold my-anchor-element-class2'}> Assignments</NavLink>
        </li>

        {user &&
            <li><NavLink to="/createAssignments" className={({ isActive }) => isActive ? 'border-b-4 border-primary text-primary rounded-none  bg-secondary  font-bold my-anchor-element-class3' : 'font-bold my-anchor-element-class3'}>
                Create Assignments
            </NavLink></li>
        }

        {user &&
            <li><NavLink to="/pendingAssignments" className={({ isActive }) => isActive ? 'border-b-4 border-primary text-primary rounded-none  bg-secondary  font-bold my-anchor-element-class4' : 'font-bold my-anchor-element-class4'}>
                Pending Assignments
            </NavLink></li>
        }
        {/* {user &&
            <li><NavLink to="/myAttempted" className={({ isActive }) => isActive ? 'border-b-4 border-primary text-primary rounded-none  bg-secondary  font-bold my-anchor-element-class4' : 'font-bold my-anchor-element-class4'}>
                My Submitted
            </NavLink></li>
        } */}

        {/* Home */}
        <Tooltip
            anchorSelect=".my-anchor-element-classHome"
            content="Home"
            style={{ backgroundColor: "#1967d2", color: "white" }}
        />
        {/* All Tourists Spot */}
        <Tooltip
            anchorSelect=".my-anchor-element-class2"
            content="Assignments"
            style={{ backgroundColor: "#1967d2", color: "white" }}
        />
        {/* Add Tourists*/}
        <Tooltip
            anchorSelect=".my-anchor-element-class3"
            content="Create Assignments"
            style={{ backgroundColor: "#1967d2", color: "white" }}
        />
        {/* My List*/}
        <Tooltip
            anchorSelect=".my-anchor-element-class4"
            content="My Submitted"
            style={{ backgroundColor: "#1967d2", color: "white" }}
        />


    </>
    return (
        <>
            <div className="navbar  bg-secondary  shadow-lg py-2 rounded-lg">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden pr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow  rounded-box w-52 dark:text-gray-800 bg-white">
                            {Links}
                        </ul>
                    </div>
                    <Link to='/' className="justify-center flex items-center md:font-bold  ml-1 md:text-3xl ">

                        <div>
                            <img className="w-16 h-16 " src={'https://i.ibb.co/kytcV01/360-F-505617309-NN1-CW7di-Nm-GXJf-Micp-Y9e-XHKV4sqz-O5-H-removebg-preview-1.png'} alt="" />
                        </div>


                        <span className="mt-1 dark:text-primary">Jobword</span>


                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 dark:text-gray-800 ">
                        {Links}
                    </ul>
                </div>



                <div className="navbar-end ">


                    <div className="mr-3">
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={handleToggle} checked={theme === 'light' ? false : true} type="checkbox" className="theme-controller" value="synthwave" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="text-black swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>




                    {
                        user ? <div className="flex justify-center items-center gap-2">
                            <div className="dropdown dropdown-end ">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">

                                        <img className="my-anchor-element-class" src={user?.photoURL || "https://i.ibb.co/fYRGNg6/profile.jpg"}

                                            alt="User avatar"


                                        />

                                        {/* <Tooltip
                                            anchorSelect=".my-anchor-element-class"
                                            content={((user?.displayName) || 'Name not found')}

                                            style={{ backgroundColor: "#23BE0A", color: "white" }}
                                        /> */}

                                    </div>
                                </div>

                                {/* ul */}
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-4 flex gap-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to={`/myAttempted`}>
                                        <li className="border-2 p-2 border-primary text-primary rounded-md font-bold">
                                            My submitted
                                        </li>
                                    </Link>
                                    <li className="rounded-md border-2 border-primary text-primary  font-bold" onClick={logout}><a>Logout</a></li>
                                </ul>


                            </div>

                            {/* <button onClick={logout} className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">
                                Logout
                            </button> */}
                        </div>
                            :
                            <div className="flex space-x-2">
                                <Link to='/login' >
                                    <button className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg bg-primary text-center">Login</button>

                                </Link>
                                <Link to='/register' >
                                    <button className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg bg-primary text-center">Register</button>

                                </Link>
                            </div>
                    }
                </div>
            </div>


        </>
    );
};

export default Nav;