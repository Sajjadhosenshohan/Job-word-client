import { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import DatePicker from "react-datepicker";
import { FaLocationDot } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { IoMdMail } from "react-icons/io";
import toast from "react-hot-toast"
const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"

// title, description, marks, thumbnail Image URL,
// assignment difficulty level(easy, medium, hard) [YOU MUST USE
// DROPDOWN/ SELECT INPUT FIELD], and due date [use this package
// for selecting date “https://www.npmjs.com/package/react-datepicker”]

const CreateAssignments = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    // const [error, setError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log("submit")

        const form = e.target;
        const email = user?.email;
        const assignment_title = form.assignment_title.value;
        const marks = form.marks.value;
        const assignment_level = form.assignment_level.value;
        const description = form.description.value;
        const due_date = startDate;
        const thumbnail = form.thumbnail.value;

        const mark = parseFloat(marks)
        if (mark > 60 || mark <= 0)
        return toast.error('The mark must be greater than 60 or equal to 0.')
        

        const createData = {
            email,
            assignment_title,
            assignment_level,
            marks,
            description,
            due_date,
            thumbnail
        }

        console.log(createData)
        try {

            const { data } = await axios.post('https://job-word-server.vercel.app/assignment', createData)

            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Assignment created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            form.reset()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className=" w-full h-[300px] bg-cover bg-center flex flex-col md:flex-row justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
                <h2 className=" font-bold text-xl lg:text-4xl text-white bg-primary p-2 rounded-md mt-72">Create Assignments</h2>
            </div>


            <div className="flex  flex-col md:flex-row gap-6">
                <div className="bg-white w-full md:w-1/3 ">
                    <section >
                        <div className="container space-y-8 px-6 py-6 mx-auto">
                            <div>

                                <h1 className="text-2xl font-semibold text-primary md:text-3xl">Company Information:</h1>

                            </div>

                            <div className="p-4 shadow-lg dark:bg-secondary dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105 rounded-lg  overflow-hidden  duration-500 transform   hover:bg-opacity-80 ">
                                <span className="inline-block p-3 rounded-lg bg-primary text-white">
                                    <FaLocationDot />
                                </span>

                                <h2 className="mt-4 text-base font-medium">BJET Inc.</h2>
                                <p className="mt-2 text-sm ">Tokeyo, Japan.</p>
                                <p className="mt-2 text-sm text-primary flex justify-start items-center gap-1"><span><IoMdMail /> </span>
                                    <span>hello@merakiui.com</span>
                                </p>
                            </div>

                        </div>
                    </section>
                </div>

                <div className='  flex justify-center items-start min-h-[calc(100vh-306px)] w-full md:w-2/3'>
                    <section className='mt-6 w-full border-primary border-2 p-2 md:p-6 mx-auto  rounded-md shadow-md bg-secondary'>

                        {/* <h1 className="text-2xl font-semibold text-primary md:text-3xl">Create Assignment:</h1> */}

                        <form onSubmit={handleFormSubmit}>
                            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                        Assignment Title
                                    </label>
                                    <input
                                        id='assignment_title'
                                        name='assignment_title'
                                        type='text'
                                        required
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>

                                <div>
                                    <label className='text-gray-700 '>
                                        Email Address
                                    </label>
                                    <input
                                        id='emailAddress'
                                        type='email'
                                        name='email'
                                        disabled
                                        defaultValue={user?.email}
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>

                                <div>
                                    <label className='text-gray-700 '>
                                        Marks
                                    </label>
                                    <input
                                        id='marks'
                                        type='number'
                                        name='marks'
                                        required

                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className='text-gray-700'>Due date</label>

                                    {/* Date Picker Input Field */}
                                    <DatePicker
                                        className='border p-2 rounded-md w-full'
                                        selected={startDate}
                                        required
                                        onChange={date => setStartDate(date)}
                                    />
                                </div>

                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700 '>
                                        Assignment level
                                    </label>
                                    <select
                                        name='assignment_level'
                                        id='assignment_level'
                                        required
                                        className='border p-2 rounded-md'
                                    >
                                        <option value='Easy'>Easy</option>
                                        <option value='Medium'>Medium</option>
                                        <option value='Hard'>Hard</option>
                                    </select>
                                </div>

                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700 '>
                                        Thumbnail Image URL
                                    </label>

                                    <input
                                        name='thumbnail'
                                        type="text"
                                        id=''
                                        required
                                        className='border p-2 rounded-md'
                                    >
                                    </input>
                                </div>

                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <label className='text-gray-700 ' htmlFor='description'>
                                    Description
                                </label>
                                <textarea
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    name='description'
                                    id='description'
                                    required
                                ></textarea>
                            </div>
                            <div className=' mt-6'>
                                <button className='w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                    Create
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;