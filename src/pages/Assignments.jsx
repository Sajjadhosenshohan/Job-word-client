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

    // const img1 = "https://drive.google.com/file/d/1QKe2KCS1PM27Ygw8jRulypCGrbmtJYwm/view?usp=sharing"

    // const img4 = "https://i.ibb.co/Gpc3YVT/pexels-sudipta-1603650.jpg"
    const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"


    const [assignments, setAssignment] = useState()
    const [singleAssignment, setSingleAssignment] = useState();

    const getData = async () => {
        const { data } = await axios('http://localhost:5000/allAssignment')
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

    return (
        <div className="mt-12 mb-24">


            <Helmet>
                <title>Assignments</title>
            </Helmet>
            {/* <div className="text-center  mx-auto w-2/3 md:w-full">
                <Fade direction="left">
                    <h2 className="font-bold text-4xl mb-3" >See Assignments</h2>
                    <p>Find here every single assignment</p>
                </Fade>
            </div> */}
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

            {/* <div className="relative">
                <div className="card card-compact b shadow-xl overflow-hidden transition-transform duration-300 transform hover:scale-105">
                    <Link to={`/roomdetails/`}>
                        <img className="h-[300px] w-full" src={img4} alt="Shoes" />
                    </Link>
                    <span className="absolute top-0 right-0 px-3 py-1 bg-red-400 text-ellipsis text-white rounded-bl-lg">Price Per Night_$</span>
                    <div className="card-body">
                        <h2 className="text-3xl">fhdjk</h2>
                        <h2 className="card-title">Review</h2>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex justify-center items-center">
                    <div className="text-white text-center">
                        <h2 className="text-3xl mb-4">sdsdd</h2>
                        <Link to={`/roomdetails/`} className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-3 rounded-full inline-block transition-colors duration-300">
                            View Details
                        </Link>
                    </div>
                </div>
            </div> */}

            {/* <iframe
                src={img1}
                id="preview"
                style={{ minHeight: '550px', width: '100%' }}
                title="PDF Preview"
            ></iframe> */}


        </div>
    );
};

export default Assignments;

