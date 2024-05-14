
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProvider';
import { CiCalendarDate, CiMail } from 'react-icons/ci';
const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"

const MyAttemptedAssignments = () => {
  const { user } = useContext(AuthContext)

  const [loads, setLoad] = useState()

  console.log("my assignment page", loads)

  useEffect(() => {

    const mySubmission = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/myAssignment/${user?.email}`);

        console.log(23, data);
        setLoad(data)

      } catch (error) {
        console.error(error, "vul val");
      }
    };

    mySubmission();
  }, [user]);



  // const { email,
  //   _id,
  //   assignment_title,
  //   assignment_level,
  //   marks,
  //   description,
  //   due_date,
  //   thumbnail } = loads
  return (
    // <div className=" relative  rounded overflow-hidden shadow-lg m-4 p-6  dark:bg-[#f4f3f0] dark:text-gray-800">
    //   <h2 className='text-center text-3xl my-7'>My Attempted Assignments</h2>

    //   <div className="grid grid-cols-1 gap-7">

    //     {
    //       loads?.map((load, index) => <div className='flex gap-9 ' key={index}>
    //         <div  className="flex items-center justify-center">
    //           <img src={load.thumbnail} alt="Siem Reap" className="w-full h-48 object-cover" />

    //         </div>


    //         <div className="border-primary  border-b-2  pt-6  md:border-l-2  md:border-b-0 md:pt-0   md:pl-6">
    //           <div className="font-bold text-xl flex gap-2 items-center mb-2">
    //             <span className=" text-primary"><FaGlobe /></span>

    //             <span className="absolute top-0 hidden md:block md:right-0  bg-red-400 rounded-sm p-2 ">{load.assignment_level}</span>

    //             <span>{load.assignment_title}</span>
    //           </div>

    //           <h2 className="w-2/3 mb-4">{load.description}</h2>

    //           <div className=" grid grid-cols-1 md:grid-cols-2">

    //             <div className="flex gap-2 items-center  justify-start mb-2">
    //               <FaLocationDot className=" text-primary" />
    //               <p className="text-gray-700  ">
    //                 {`${load.marks}`}</p>
    //             </div>

    //             <div className="flex gap-2 items-center  justify-start mb-2">
    //               <FaCity className=" text-primary" />
    //               <p className="text-gray-700  ">
    //                 {`${load.due_date}`}</p>
    //             </div>
    //             <div className="flex gap-2 items-center  justify-start mb-2">

    //               <p className="text-gray-700  ">
    //                 {`${load.email}`}</p>
    //             </div>
    //             <div className="flex gap-2 items-center  justify-start mb-2">

    //               <p className="text-gray-700  ">
    //                 {`${load.status}`}</p>
    //             </div>



    //             <div>
    //               <Link>
    //                 <button className="btn btn-primary">
    //                   dfsf
    //                 </button>
    //               </Link>
    //             </div>

    //           </div>

    //         </div>
    //       </div>)
    //     }
    //   </div>
    // </div>

    <div className="mt-12 mb-24">


      <div className="w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
        <h2 className=" font-bold text-4xl text-white bg-primary p-2 rounded-md mt-72">My Attempted Assignments</h2>
      </div>

      <div className="grid grid-cols-1 gap-7">
      {/* assignment title, assignment status, assignment marks, your
obtained marks, and feedback(if you got the marks) */}


        {

          loads?.map((load, index) => <div key={index} className="flex w-full bg-white rounded-lg shadow-lg  dark:bg-secondary dark:text-gray-800   transition-all    overflow-hidden  duration-500 transform   hover:bg-opacity-80  p-4">
            <div className="w-1/3 rounded-lg" style={{ backgroundImage: `url(${load.thumbnail})` }}>

            </div>

            <div className="w-2/3 p-4 md:p-4">


              <div className="space-y-3">
                <h1 className="text-xl font-bold">{load?.assignment_title}</h1>


                <div className="flex gap-2 items-center  justify-start mb-2">
                  <CiCalendarDate className=" text-primary w-6 h-6" />

                  <p className="font-bold">
                    Assignment marks: <span className="font-base text-primary">{load?.marks}</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center  justify-start mb-2">
                  <CiMail className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    Assignment status: <span className=" text-primary">{load?.status}</span>
                  </p>
                </div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <CiMail className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    Obtained marks: <span className=" text-primary">{load?.giveMark}</span>
                  </p>
                </div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <CiMail className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    Feedback: <span className=" text-primary">{load?.feedback}</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-3 item-center">
                <Link to={`/giveMark/${load._id}`}>
                  <button className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg hover:bg-blue-900 bg-primary text-center">give mark</button>
                </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyAttemptedAssignments;