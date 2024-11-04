
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProvider';

import toast from 'react-hot-toast';
import MyModal from '../components/MyModal';
import { useNavigate } from 'react-router-dom';
const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"

const MyAttemptedAssignments = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loads, setLoad] = useState()


  if(!user){
    navigate('/')
  }

  useEffect(() => {

    const mySubmission = async () => {
      try {
        const { data } = await axios.get(`https://job-word-server.vercel.app/myAssignment/${user?.email}`, {withCredentials: true});

        // console.log(23, data);
        setLoad(data)

      } catch (error) {
        console.log(error.message)
        // toast.error("forbidden access");
      }
    };

    mySubmission();
  }, [user?.email]);


  


  return (
    <div className="section-to-section-margin">


      <div className="w-full h-[300px] bg-cover bg-center flex justify-center items-center rounded-lg mb-12" style={{ backgroundImage: `url(${img1})` }}>
        <h2 className=" font-bold text-xl lg:text-4xl text-white bg-primary p-2 rounded-md mt-72">My Attempted Assignments</h2>
      </div>

      <div className="grid grid-cols-1 gap-7">
        {
          loads?.map((load, index) => <MyModal key={index}  load={load}></MyModal>)
        }
      </div>
    </div>

  );
};

export default MyAttemptedAssignments;
