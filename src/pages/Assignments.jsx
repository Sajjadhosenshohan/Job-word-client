import { useContext, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

import { AuthContext } from "../firebase/AuthProvider";
import SingleAssignment from "../components/SingleAssignment";
import axios from "axios";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const Assignments = () => {
    const { user } = useContext(AuthContext)
    const [assignments, setAssignment] = useState()
    const [singleAssignment, setSingleAssignment] = useState();
    const img1 = "https://i.ibb.co/Krpq83Y/pexels-otavio-4665064.jpg"



    const getData = async () => {
        const { data } = await axios('https://job-word-server.vercel.app/allAssignment')
        console.log(data)
        setAssignment(data)
        setSingleAssignment(data)
    }

    useEffect(() => {
        getData()

    }, [])






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
            // console.log("milce vai")
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
                            const { data } = await axios.delete(`https://job-word-server.vercel.app/delete/${id}`)
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

    return (
        <div className="mt-12 mb-24">


            <Helmet>
                <title>Assignments</title>
            </Helmet>
            
            <div className=" w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
                <h2 className=" font-bold text-4xl text-white bg-primary p-2 rounded-md mt-72">Assignments</h2>
            </div>

            {/* button  */}
            
            <div className="mt-8 mb-10 flex  justify-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-bold text-white  bg-[#23BE0A]">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    singleAssignment?.map((assignment, index) => <SingleAssignment assignment={assignment}
                        key={index}
                        handleDelete={handleDelete}
                    ></SingleAssignment>)
                }
            </div>

    
        </div>
    );
};

export default Assignments;

