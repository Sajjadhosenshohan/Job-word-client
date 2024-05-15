
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProvider';
import { CiCalendarDate } from 'react-icons/ci';
import { MdFeedback } from 'react-icons/md';
import { IoBookmarks } from 'react-icons/io5';
import { GrStatusGoodSmall } from 'react-icons/gr';
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

  // const handleView = () => {
  //   console.log('paice')
  // }
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
            <div className="w-1/3 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${load.thumbnail})` }}>

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
                  <GrStatusGoodSmall className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    Assignment status: <span className={`text-white p-1 rounded-xl ${load?.status === 'pending' && 'bg-yellow-600'
                      } 
                    
                      ${load?.status === 'Complete' && 'bg-green-600'
                      } 
                      
                      `}>
                      {
                        load?.status
                      }
                    </span>
                  </p>
                </div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <IoBookmarks className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    Obtained marks: <span className=" text-primary">{load?.giveMark}</span>
                  </p>
                </div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <MdFeedback className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    Feedback: <span className=" text-primary">{load?.feedback}</span>
                  </p>
                </div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <MdFeedback className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    PDF: <span className=" text-primary">{load?.pdfLink}</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-3 item-center">
                {/* to={`/details/${load._id}`} */}

                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg hover:bg-blue-900 bg-primary text-center">View PDF</button>

              </div>

              {/* modal */}

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}

              <dialog id="my_modal_5" className="border-2 border-green modal modal-bottom sm:modal-middle h-[600px] w-[70%] mx-auto">
                <div className="modal-box h-full w-full">
                  <iframe src="https://drive.google.com/file/d/1QKe2KCS1PM27Ygw8jRulypCGrbmtJYwm/preview" id="preview"
                    style={{ minHeight: '300px', width: '100%' }}
                    title="PDF Preview" allow="autoplay" className="mb-12"></iframe>


                  <div className="modal-action flex justify-center  border-2 border-red-500 ">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn w-full">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              {/* modal */}
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyAttemptedAssignments;