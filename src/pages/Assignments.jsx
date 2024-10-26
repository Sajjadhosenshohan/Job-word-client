import { useContext, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

import { AuthContext } from "../firebase/AuthProvider";
import SingleAssignment from "../components/SingleAssignment";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const img1 = "https://i.ibb.co/Krpq83Y/pexels-otavio-4665064.jpg"


const Assignments = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [assignments, setAssignment] = useState()
    const [singleAssignment, setSingleAssignment] = useState();
    const [search, setSearch] = useState('')


    const getData = async () => {
        const { data } = await axios(`http://localhost:5000/allAssignment?search=${search}`, { withCredentials: true })
        // console.log(data)
        setAssignment(data)
        setSingleAssignment(data)
    }

    useEffect(() => {
        getData()
    }, [search])

    // search
    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value;
        console.log(search)
        setSearch(search)
    }

    const handleFilter = (filterType) => {

        if (filterType === 'All') {
            setSingleAssignment(assignments);
        }

        else if (filterType === 'Easy') {
            const filteredWishList = [...assignments].filter(t => t.assignment_level === "Easy")
            setSingleAssignment(filteredWishList);

        }
        else if (filterType === 'Medium') {

            const filteredWishList = [...assignments].filter(t => t.assignment_level === "Medium")
            setSingleAssignment(filteredWishList);

        }
        else if (filterType === 'Hard') {


            const filteredWishList = [...assignments].filter(t => t.assignment_level === "Hard");
            setSingleAssignment(filteredWishList);
        }


    };

    const handleDelete = async (id, mail) => {
        if (user?.email === mail) {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    const deleteIt = async () => {
                        try {
                            const { data } = await axios.delete(`http://localhost:5000/delete/${id}`)
                            console.log(data)

                            // show msg

                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }

                            //refresh the page
                            getData()
                        } catch (err) {
                            console.log(err.message)
                        }
                    }
                    deleteIt()
                }
            });
        }
        else {

            return toast.error(`You didn't created this Assignment`)
        }

    }


    const handleUpdate = async (id, mail) => {
        if (user?.email === mail) {
            navigate(`/update/${id}`)
        }
        else {
            return toast.error(`You cann't update this Assignment`)
        }

    }



    return (
        <div className="section-to-section-margin">


            <Helmet>
                <title>Assignments</title>
            </Helmet>

            <div className=" w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
                <h2 className=" font-bold text-xl md:text-2xl lg:text-4xl text-white bg-primary p-2 rounded-md mt-72">Assignments</h2>
            </div>

            {/* button  */}

            <div className="mt-8 mb-10 flex items-center  justify-center">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-bold text-white hover:bg-green-700  bg-[#23BE0A]">
                        <h2>Filter Assignments:</h2>
                        <RiArrowDropDownLine />
                    </div>


                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >

                        <li onClick={() => handleFilter('All')}><a>All</a></li>
                        <li onClick={() => handleFilter('Easy')}><a>Easy</a></li>
                        <li onClick={() => handleFilter('Medium')}><a>Medium</a></li>
                        <li onClick={() => handleFilter('Hard')}><a>Hard</a></li>
                    </ul>

                </div>

                <form onSubmit={handleSearch} className="flex">
                    <label className="input border-2 border-green-500 flex items-center gap-2">
                        <input type="text" name="search" className="grow" placeholder="Search" />

                    </label>
                    <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-500 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className=" w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    singleAssignment?.map((assignment, index) => <SingleAssignment assignment={assignment}
                        key={index}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    ></SingleAssignment>)
                }
            </div>


        </div>
    );
};

export default Assignments;

