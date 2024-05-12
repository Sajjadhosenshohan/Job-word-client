import { useContext, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";


import { AuthContext } from "../firebase/AuthProvider";
import SingleAssignment from "../components/SingleAssignment";
import axios from "axios";
import Swal from "sweetalert2";
const Assignments = () => {
    const { user } = useContext(AuthContext)

    // loader
    // const LoadInfo = useLoaderData();
    // const [allTourSpot, setAllTourSpot] = useState(LoadInfo)

    // // const { loading } = useContext(AuthContext)



    // const [tours, setTours] = useState(allTourSpot);

    // const handleFilter = (filterType) => {


    //     if (filterType === 'all') {

    //         setTours(allTourSpot);

    //     }
    //     else if (filterType === 'ascending') {

    //         const filteredWishList = [...tours].sort((a, b) => b.average_cost.substring(1) - a.average_cost.substring(1));
    //         setTours(filteredWishList);

    //     }
    //     else if (filterType === 'descending') {


    //         const filteredWishList = [...tours].sort((a, b) => a.average_cost.substring(1) - b.average_cost.substring(1));
    //         setTours(filteredWishList);
    //     }


    // };

    // if (loading) {
    //     return <div className="flex items-center justify-center my-[150px]">
    //         <div className="md:w-28 md:h-28 w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    //     </div>

    // }

    const [assignments, setAssignment] = useState()

    const getData = async () => {
        const { data } = await axios('http://localhost:8000/allAssignment')
        console.log(data)
        setAssignment(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = async (id, mail) => {
        if (user?.email === mail) {
            console.log("milce vai")
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
                            const { data } = await axios.delete(`http://localhost:8000/delete/${id}`)
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
            alert("fuck u")
        }

    }

    return (
        <div className="mt-12 mb-24 ">
            <Helmet>
                <title>Assignments</title>
            </Helmet>
            <div className="text-center  mx-auto w-2/3 md:w-full">
                <Fade direction="left">
                    <h2 className="font-bold text-4xl mb-3" >See Assignments</h2>
                    <p>Find here every single assignment</p>
                </Fade>
            </div>

            {/* button  */}
            <div className="mt-8 mb-10 flex  justify-center">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-bold text-white  bg-[#23BE0A]">
                        <h2>Sort Price:</h2>
                        <RiArrowDropDownLine />
                    </div>


                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li onClick={() => handleFilter('all')}><a>all</a></li>
                        <li onClick={() => handleFilter('ascending')}><a>Price High to Low</a></li>
                        <li onClick={() => handleFilter('descending')}><a>Price Low to High</a></li> */}

                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    assignments?.map((assignment, index) => <SingleAssignment assignment={assignment}
                        key={index}
                        handleDelete={handleDelete}
                    ></SingleAssignment>)
                }
            </div>


        </div>
    );
};

export default Assignments;

