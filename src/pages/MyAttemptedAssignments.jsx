
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

        console.log(23, data);
        setLoad(data)

      } catch (error) {
        console.log(error.message)
        toast.error("forbidden access");
      }
    };

    mySubmission();
  }, [user]);


  


  return (
    <div className="mt-12 mb-24">


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

// https://i.ibb.co/KqQ4bQF/pexels-vanessa-loring-7869234.jpg
// https://i.ibb.co/cgtp1Nv/pexels-pixabay-276452.jpg
// https://i.ibb.co/DpmjmKN/pexels-sora-shimazaki-5926382-1.jpg
// https://i.ibb.co/ZxPSbcN/pexels-pixabay-39284-1.jpg
// https://i.ibb.co/J77Cm5d/pexels-thisisengineering-3861958.jpg
// https://i.ibb.co/xjCc42s/pexels-fauxels-3182774.jpg
// https://i.ibb.co/tC00RDR/pexels-negativespace-34600.jpg
// https://i.ibb.co/mty3K0Q/pexels-antonio-batinic-2573434-4164418.jpg
// https://i.ibb.co/qRZtp7B/pexels-pixabay-40185.jpg
// https://i.ibb.co/DpmjmKN/pexels-sora-shimazaki-5926382-1.jpg
// https://i.ibb.co/KskDwYc/pexels-divinetechygirl-1181359.jpg
// https://i.ibb.co/ZxPSbcN/pexels-pixabay-39284-1.jpg
// https://i.ibb.co/Krpq83Y/pexels-otavio-4665064.jpg

// https://drive.google.com/file/d/1QKe2KCS1PM27Ygw8jRulypCGrbmtJYwm/preview
// https://drive.google.com/file/d/1dkt6zvhmWvkGMh5t2CAtOP3HBmLpxOwW/preview