
// import { Link } from 'react-router-dom'
// import { FaGlobe } from "react-icons/fa";
// import { FaCity, FaLocationDot } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProvider';
import { Link } from 'react-router-dom';
import { CiCalendarDate, CiMail } from 'react-icons/ci';
const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"


const PendingAssignments = () => {
  const { user } = useContext(AuthContext)

  const [loads, setLoad] = useState([])

  console.log("pending page", loads)

  useEffect(() => {

    const mySubmission = async () => {
      try {

        const { data } = await axios.get('http://localhost:5000/allPending/pending',{
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
    <div className="mt-12 mb-24">


      <div className="w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
        <h2 className=" font-bold text-xl lg:text-4xl text-white bg-primary p-2 rounded-md mt-72">Pending Assignments</h2>
      </div>

      <div className="grid grid-cols-1 gap-7">

        {

          loads?.map((load, index) => <div key={index} className="flex w-full bg-white rounded-lg shadow-lg  dark:bg-secondary dark:text-gray-800   transition-all gap-2 duration-500 transform   hover:bg-opacity-80  p-4">
            <div className="w-1/2 md:w-1/3 h-[180px] my-auto  md:h-full md:my-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${load.thumbnail})` }}>

            </div>

            <div className="w-1/2 md:w-2/3  md:p-4">


              <div className="space-y-3">
                <h1 className="text-xl font-bold">{load?.assignment_title}</h1>
                

                <div className="flex gap-2 items-center  justify-start mb-2">
                  <CiCalendarDate className=" text-primary w-6 h-6" />

                  <p className="font-bold">
                    Marks: <span className="font-base text-primary">{load?.marks}</span>
                  </p>
                </div>
                <div className="flex gap-2 items-center  justify-start mb-2">
                  <CiMail className=" text-primary w-6 h-6" />
                  <p className="font-bold">
                    Examinee name: <span className=" text-primary">{load?.name}</span>
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

export default PendingAssignments;