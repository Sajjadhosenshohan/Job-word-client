
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../firebase/AuthProvider';
import MyModal from '../components/MyModal';
const img1 = "https://i.ibb.co/XjccTng/pexels-olly-845451.jpg"

const MyAttemptedAssignments = () => {
  const { user } = useContext(AuthContext)
  const [loads, setLoad] = useState([])



  console.log(user?.email)

  useEffect(() => {

    const mySubmission = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myAssignment/${user?.email}`, { withCredentials: true });

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
      {
        loads && loads?.length > 0 ? <>


          <div className="grid grid-cols-1 gap-7">
            {
              loads?.map((load, index) => <MyModal key={index} load={load}></MyModal>)
            }
          </div>
        </> : <h2 className='text-center font-bold text-3xl py-[100px] text-red-600'>No Data Found</h2>
      }

    </div>

  );
};

export default MyAttemptedAssignments;


// https://i.ibb.co.com/VmcTMPp/thailand2.jpg
// https://i.ibb.co.com/2gncDWY/thailand3.jpg
// https://i.ibb.co.com/3ySSqMG/thailand4.jpg
// https://i.ibb.co.com/P9Q2ZPz/thailand5.jpg
// https://i.ibb.co.com/QJpbChF/tailland1.jpg

// https://i.ibb.co.com/R6sGzZ1/vietnam1.jpg
// https://i.ibb.co.com/LxbZbG0/vietnam2.jpg
// https://i.ibb.co.com/K2sy1cZ/vietnam3.jpg
// https://i.ibb.co.com/sKwd506/vietnam4.jpg
// https://i.ibb.co.com/ZdV2sbX/vietnam5.jpg

// https://i.ibb.co.com/JHvnfQn/bangladesh1.jpg
// https://i.ibb.co.com/SdM2c8Z/bangladesh2.jpg
// https://i.ibb.co.com/8bJr1gH/bangladesh3.jpg
// https://i.ibb.co.com/z8y16nq/bangladesh4.jpg
// https://i.ibb.co.com/P4v1VMv/bangladesh5.jpg

// https://i.ibb.co.com/T239dfW/combodia1.jpg
// https://i.ibb.co.com/ZVn5WrQ/combodia2.jpg
// https://i.ibb.co.com/YTDnVXT/combodia3.jpg
// https://i.ibb.co.com/zSNGkqb/combodia4.jpg
// https://i.ibb.co.com/QJjcjqY/combodia5.jpg

// https://i.ibb.co.com/61vkYPR/Indonesia1.jpg
// https://i.ibb.co.com/f0XZFmd/Indonesia2.jpg
// https://i.ibb.co.com/m6Mzv77/Indonesia3.jpg
// https://i.ibb.co.com/vHTWCqT/Indonesia4.jpg
// https://i.ibb.co.com/JQLQWBh/Indonesia5.jpg

// https://i.ibb.co.com/mDchCxC/malaysia1.jpg
// https://i.ibb.co.com/Cm34RS8/malaysia2.jpg
// https://i.ibb.co.com/0V8cr2P/malaysia3.jpg
// https://i.ibb.co.com/84kVtyS/malaysia4.jpg
// https://i.ibb.co.com/4WFXhfp/malaysia5.jpg