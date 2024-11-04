import { GrStatusGoodSmall } from "react-icons/gr";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProvider';
import { Link } from 'react-router-dom';
import { CiCalendarDate, CiMail } from 'react-icons/ci';
import SecondaryBtn from "../components/SecondaryBtn";
const img1 = "https://i.ibb.co/DpmjmKN/pexels-sora-shimazaki-5926382-1.jpg"


const PendingAssignments = () => {
  const { user } = useContext(AuthContext)

  const [loads, setLoad] = useState([])

  console.log("pending page", loads)

  useEffect(() => {

    const mySubmission = async () => {
      try {

        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allPending/pending`, { withCredentials: true }, {
          params: { status: 'pending' }
        })

        console.log(`data of my submission ${data}`);
        setLoad(data)

      } catch (error) {
        console.error(error, "error");
      }
    };

    mySubmission();
  }, [user]);


  return (
    <div className="section-to-section-margin">


      <div className="w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
        <h2 className=" font-bold text-xl lg:text-4xl text-white bg-primary p-2 rounded-md mt-72">Pending Assignments</h2>
      </div>

      <div className="grid grid-cols-1 gap-7">

        {

          loads?.map((load, index) => <div key={index} className="flex   rounded-lg shadow-lg bg-secondary text-gray-800 flex-col md:flex-row  gap-2 p-4">
            <div className="w-full md:w-1/2 my-auto h-[250px] rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${load.thumbnail || "https://i.ibb.co/cT2D9h7/images.png"})` }}>

            </div>

            <div className="w-full md:w-1/2  md:p-4">


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

              <div className="flex mt-2 gap-2 items-center  justify-start mb-2">
                <GrStatusGoodSmall className=" text-primary w-6 h-6" />
                <p className="font-bold">
                  Assignment status: <span className={`text-white text-base font-normal inline-flex ml-2 px-3 py-1 rounded-3xl ${load?.status === 'pending' && 'bg-orange-500'
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

              {
                user?.email !== load?.email && <div className="flex md:justify-end mt-5 md:mt-3 justify-center item-center">
                  <Link to={`/giveMark/${load._id}`}>


                    <SecondaryBtn props={"Give mark"} />
                  </Link>
                </div>
              }
            </div>
          </div>)

        }
      </div>
    </div>
  );
};

export default PendingAssignments;