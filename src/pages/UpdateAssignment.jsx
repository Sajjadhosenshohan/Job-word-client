import { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"

const UpdateAssignment = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const load = useLoaderData();
    console.log(load)



    const { _id,
        assignment_title,
        assignment_level,
        marks,
        description,
        due_date,
        thumbnail } = load

    // 
    const handleUpdate = async (e) => {
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
        console.log("submit")

        try {
            const { data } = await axios.put(`http://localhost:8000/myUpdate/${_id}`, createData
            )
            console.log("update", data)


            if (data.modifiedCount
                > 0) {
                Swal.fire({
                    title: 'Successfully updated!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            // navigate('/my-posted-jobs')
        } catch (err) {
            console.log(err)
            // toast.error(err.message)
        }

    }
    return (
        <div>
            <div className=" w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
                <h2 className=" font-bold text-4xl text-white bg-primary p-2 rounded-md mt-72">Update Assignments</h2>
            </div>


            {/* <div className="flex gap-6">
                <div className="bg-white border-2 border-red-500 w-1/3">
                    <section >
                        <div className="container px-6 py-12 mx-auto">
                            <div>
                                <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

                                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">We’d love to hear from you</h1>

                                <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
                            </div>

                            <div className="grid grid-cols-1 gap-12 mt-10 ">
                                <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                                    <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                                </div>

                                <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                                    <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to support</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’re here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                                </div>

                                <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                                    <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                                </div>

                                <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                                    <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className=' border-2 border-red-500 flex justify-center items-start min-h-[calc(100vh-306px)] w-2/3'>
                    <section className='mt-6 border-primary border-2 p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                            Assignment
                        </h2>

                        <form onSubmit={handleUpdate}>
                            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                        Assignment Title
                                    </label>
                                    <input
                                        id='assignment_title'
                                        name='assignment_title'
                                        type='text'
                                        defaultValue={assignment_title}
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
                                        defaultValue={marks}

                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700'>Due date</label>

                                    
                                    <DatePicker
                                        className='border p-2 rounded-md'
                                        selected={startDate}
                                        defaultValue={due_date}
                                        onChange={date => setStartDate(date)}
                                    />

                                </div>

                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700 '>
                                        Assignment level
                                    </label>
                                    <select
                                        name='assignment_level'
                                        
                                        defaultValue={assignment_level}
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
                                        defaultValue={thumbnail}
                                        id=''
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
                                    defaultValue={description}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    name='description'
                                    id='description'
                                ></textarea>
                            </div>
                            <div className=' mt-6'>
                                <button className='w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                    update
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div> */}

            <div className="flex gap-6">
                <div className="bg-white  w-1/3">
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

                <div className='  flex justify-center items-start min-h-[calc(100vh-306px)] w-2/3'>
                    <section className='mt-6 w-full border-primary border-2 p-2 md:p-6 mx-auto  rounded-md shadow-md bg-secondary'>

                        {/* <h1 className="text-2xl font-semibold text-primary md:text-3xl">Create Assignment:</h1> */}

                        <form onSubmit={handleUpdate}>
                            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                        Assignment Title
                                    </label>
                                    <input
                                        name='assignment_title'
                                        type='text'
                                        defaultValue={assignment_title}
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
                                        type='number'
                                        name='marks'
                                        defaultValue={marks}


                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700'>Due date</label>

                                    {/* Date Picker Input Field */}
                                    <DatePicker
                                        className='border p-2 rounded-md'
                                        selected={startDate}
                                        defaultValue={due_date}
                                        onChange={date => setStartDate(date)}
                                    />
                                </div>

                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700 '>
                                        Assignment level
                                    </label>
                                    <select
                                        name='assignment_level'

                                        defaultValue={assignment_level}
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
                                        defaultValue={thumbnail}
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

                                    defaultValue={description}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    name='description'
                                    id='description'
                                ></textarea>
                            </div>
                            <div className=' mt-6'>
                                <button type="submit" className='w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                    Update
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;