
import { Link } from 'react-router-dom'
import { FaGlobe } from "react-icons/fa";
import { FaCity, FaLocationDot } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProvider';
const PendingAssignments = () => {
    const { user } = useContext(AuthContext)

  const [loads, setLoad] = useState([])

  console.log("pending page", loads)

  useEffect(() => {

    const mySubmission = async () => {
      try {
        
        const {data} = await axios.get('http://localhost:8000/allPending/pending', {
            params: {
                status: 'pending'  
            }
        })

        console.log(`data of my submission ${data}`);
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
    <div className=" relative  rounded overflow-hidden shadow-lg m-4 p-6  dark:bg-[#f4f3f0] dark:text-gray-800">
      <h2 className='text-center text-3xl my-7'>Pending Assignments</h2>

      <div className="grid grid-cols-1 gap-7">

        {
          loads?.map((load, index) => <div className='flex gap-9 ' key={index}>
            <div  className="flex items-center justify-center">
              <img src={load.thumbnail} alt="Siem Reap" className="w-full h-48 object-cover" />

            </div>


            <div className="border-primary  border-b-2  pt-6  md:border-l-2  md:border-b-0 md:pt-0   md:pl-6">
              <div className="font-bold text-xl flex gap-2 items-center mb-2">
                <span className=" text-primary"><FaGlobe /></span>

                <span className="absolute top-0 hidden md:block md:right-0  bg-red-400 rounded-sm p-2 ">{load.assignment_level}</span>

                <span>{load.assignment_title}</span>
              </div>

              {/* <h2 className="w-2/3 mb-4">{load.marks}</h2> */}

              <div className=" grid grid-cols-1 md:grid-cols-2">

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <FaLocationDot className=" text-primary" />
                  <p className="text-gray-700  ">
                    {`${load.marks}`}</p>
                </div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <FaCity className=" text-primary" />
                  <p className="text-gray-700  ">
                    {`${load.examiner.examiner_name}`}</p>
                </div>
                <div className="flex gap-2 items-center  justify-start mb-2">

                  <p className="text-gray-700  ">
                    {`${load.examiner.examiner_email}`}</p>
                    <br />
                </div>

                <div className=" mb-2">
                  <p className="text-gray-700  ">
                    {`${load.status}`}</p>
                </div>



                <div>
                  <Link to={`/giveMark/${load._id}`}>
                    <button className="btn btn-primary">
                    give mark
                    </button>
                  </Link>
                </div>

              </div>

            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default PendingAssignments;