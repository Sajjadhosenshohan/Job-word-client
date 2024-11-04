
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
