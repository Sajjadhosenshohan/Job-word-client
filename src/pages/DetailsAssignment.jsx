
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


    return (
        <div className="mt-12 mb-24">

            <div className="w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
                <h2 className=" font-bold text-xl lg:text-4xl text-white bg-primary p-2 rounded-md mt-72">Details Assignment</h2>
            </div>

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
