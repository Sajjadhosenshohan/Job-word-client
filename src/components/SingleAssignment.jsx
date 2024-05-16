import { Link } from "react-router-dom";
import { MdOutlineSubtitles } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
const SingleAssignment = ({ assignment, handleDelete }) => {
    const { thumbnail, assignment_level, marks, assignment_title, _id, email } = assignment
    
    return (
        <div className="w-full max-w-sm   shadow-lg dark:bg-secondary dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105 rounded-lg  overflow-hidden  duration-500 transform   hover:bg-opacity-80 ">
            <img className="object-cover object-center w-full h-56" src={thumbnail} alt="avatar" />

            <div className="px-6 py-4">


                <div className="flex items-center mt-4 dark:text-gray-800">
                    <MdOutlineSubtitles className="h-6 w-6" />
                    <h1 className="px-2 font-bold">{assignment_title}</h1>
                </div>
                <div className="flex items-center mt-4 dark:text-gray-800">
                    <IoBookmarkSharp className="h-6 w-6"/>
                    <h1 className="px-2 text-sm">Mark: {marks}</h1>
                </div>


                <span className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-ellipsis text-white rounded-bl-lg">Level: {assignment_level}</span>


                <div className="flex gap-3 mt-4">
                    <button onClick={() => handleDelete(_id, email)} className="font-medium text-white text-base lg:text-xl lg:pb-2 lg:px-4 py-1 px-1 rounded-lg bg-red-600 hover:bg-red-700 dark:hover:bg-red-800 text-center">Delete</button>

                    <Link to={`/update/${_id}`}>
                        <button className="font-medium text-white text-base lg:text-xl lg:pb-2 lg:px-4 py-1 px-1 rounded-lg bg-green-500 hover:bg-green-600 dark:hover:bg-green-700 text-center">Update</button>
                    </Link>

                    <Link to={`/details/${_id}`}>
                        <button className="font-medium text-white text-base lg:text-xl lg:pb-2 lg:px-4 py-1 px-1 rounded-lg bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-700 text-center">View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleAssignment;