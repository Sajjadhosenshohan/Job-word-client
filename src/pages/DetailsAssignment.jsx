
// import { Helmet } from "react-helmet";
// import { FaGlobe } from "react-icons/fa";
// import { FaCity, FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate, CiMail } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"

const DetailsAssignment = () => {

    const load = useLoaderData();
    console.log("details page", load)

    const { email,
        _id,
        assignment_title,
        assignment_level,
        marks,
        description,
        due_date,
        thumbnail } = load

    // const [details, setDetails] = useState(load || {});

    // useEffect(() => {
    //     fetch(`https://travel-server-virid.vercel.app/views/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setDetails(data)
    //         })
    // }, [id])

    return (
        <div className="mt-12 mb-24">

            <div className="w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
                <h2 className=" font-bold text-xl lg:text-4xl text-white bg-primary p-2 rounded-md mt-72">Details Assignment</h2>
            </div>

            {/* <div className=" flex flex-col md:flex-row gap-6">

                <div className="flex items-center justify-center">
                    <img src={thumbnail} alt="Siem Reap" className="w-full h-48 object-cover" />

                </div>


                <div className="border-primary  border-b-2  pt-6  md:border-l-2  md:border-b-0 md:pt-0   md:pl-6">
                    <div className="font-bold text-xl flex gap-2 items-center mb-2">
                        <span className=" text-primary"><FaGlobe /></span>

                        <span className="absolute top-0 hidden md:block md:right-0  bg-red-400 rounded-sm p-2 ">{assignment_level}</span>

                        <span>{assignment_title}</span>
                    </div>

                    <h2 className="w-2/3 mb-4">{description}</h2>

                    <div className=" grid grid-cols-1 md:grid-cols-2">

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <FaLocationDot className=" text-primary" />
                            <p className="text-gray-700  ">
                                {`${marks}`}</p>
                        </div>

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <FaCity className=" text-primary" />
                            <p className="text-gray-700  ">
                                {`${due_date}`}</p>
                        </div>
                        <div className="flex gap-2 items-center  justify-start mb-2">

                            <p className="text-gray-700  ">
                                {`${email}`}</p>
                        </div>



                        <div>
                            <Link to={`/submit/${_id}`}>
                                <button className="btn btn-primary">
                                    Take Assignment
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div> */}

            <div className="relative flex flex-col lg:flex-row w-full bg-white rounded-lg shadow-lg  dark:bg-secondary dark:text-gray-800   transition-all    overflow-hidden  duration-500 transform   hover:bg-opacity-80  p-4">
                <div className="w-1/3 rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `url(${thumbnail})` }}>

                </div>

                <span className="absolute top-0 hidden md:block md:right-0  bg-red-500 text-white rounded-sm p-2 ">{assignment_level}</span>

                <div className="w-2/3 p-4 md:p-4">

                    <h1 className="text-xl font-bold">{assignment_title}</h1>

                    <p className="my-4 text-sm text-gray-600 dark:text-gray-600">{description}</p>

                    <div className="space-y-3">
                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <IoBookmark className=" text-primary w-6 h-6" />

                            <p className="font-bold">
                            Examinee: <span className="font-base text-primary">{email}</span>
                            </p>
                        </div>

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <CiCalendarDate className=" text-primary w-6 h-6" />

                            <p className="font-bold">
                                Due_date: <span className="font-base text-primary">{new Date(due_date).toLocaleDateString()}</span>
                            </p>
                        </div>
                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <CiMail className=" text-primary w-6 h-6" />
                            <p className="font-bold">
                                Marks: <span className=" text-primary">{marks}</span>
                            </p>
                        </div>
                    </div>


                    <div className="flex justify-start mt-3 item-center">
                        <Link to={`/submit/${_id}`}>
                            <button  className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg hover:bg-blue-900 bg-primary text-center">Take assignment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsAssignment;


{/* modal */ }
{/* <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
<h2 className="text-xl font-semibold leading-tight tracking-wide">Quis vel eros donec ac odio tempor.</h2>
<p className="flex-1 dark:text-gray-600">Aenean sed adipiscing diam donec adipiscing tristique risus. Donec pretium vulputate sapien nec sagittis aliquam malesuada.
    <a href="#" rel="noopener noreferrer" className="font-semibold dark:text-violet-600">Learn more</a>
</p>
<div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
    <button className="px-6 py-2 rounded-sm">Cancel</button>
    <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-600 dark:text-gray-50">Agree</button>
</div>
</div> */}
{/* modal end */ }