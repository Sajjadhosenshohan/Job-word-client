/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineSubtitles } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { AuthContext } from "../firebase/AuthProvider";
import { useContext } from "react";
const SingleAssignment = ({ assignment, handleDelete, handleUpdate }) => {
    const { user } = useContext(AuthContext)

    const { thumbnail, assignment_level, marks, assignment_title, _id, email} = assignment


    return (
        <div className="relative w-full max-w-sm   shadow-lg bg-secondary text-gray-800  rounded-lg  overflow-hidden  transition-all duration-300  group">
            <img className="object-cover object-center w-full h-56 transition group-hover:scale-110" src={thumbnail} alt="avatar" />

            <div className="px-6 py-4">


                <div className="flex items-center mt-4 dark:text-gray-800">
                    <MdOutlineSubtitles className="h-6 w-6 text-primary" />
                    <h1 className="px-2 font-bold">{assignment_title}</h1>
                </div>
                <div className="flex items-center mt-4 dark:text-gray-800">
                    <IoBookmarkSharp className="h-6 w-6 text-primary" />
                    <h1 className="px-2 text-sm">Mark: {marks}</h1>
                </div>
                <div className="flex items-center mt-4 dark:text-gray-800">
                    <IoBookmarkSharp className="h-6 w-6 text-primary" />
                    <h1 className="px-2 text-sm">Created by : {assignment?.createdBy}</h1>
                </div>


                <span className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-ellipsis text-white rounded-bl-lg">Level: {assignment_level}</span>


                <div className="flex justify-center gap-4 mt-6">

                    {
                        user?.email === email && <>
                            <button onClick={() => handleDelete(_id, email)} className="btn btn-circle btn-outline border-2 border-[#ec4134] hover:bg-[#ec4134] hover:border-[#ec4134] text-[#ec4134] hover:text-white text-2xl">
                                <MdDelete />
                            </button>


                            <button
                                onClick={() => handleUpdate(_id, email)}
                                className="btn btn-circle btn-outline border-2 border-[#23be0a]  hover:border-[#23be0a] text-[#23be0a] hover:bg-[#23be0a] hover:text-white text-2xl">
                                <FiEdit />
                            </button>

                        </>
                    }

                    <Link to={`/details/${_id}`}>
                        {
                            user?.email === email ? <button
                            className="btn btn-circle btn-outline border-2 border-primary  hover:border-primary text-primary hover:bg-primary hover:text-white text-2xl">
                            <FaEye />
                        </button>
                        :
                        <button
                            className="btn  btn-outline border-2 border-primary  hover:border-primary text-primary hover:bg-primary hover:text-white text-xl">
                            View details
                        </button>
                        }
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleAssignment;