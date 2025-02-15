import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {  useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/AuthProvider";
import SecondaryBtn from "./SecondaryBtn";

const GiveMark = () => {
    const { id } = useParams();
    const [markForm, setMarkForm] = useState({})
    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    console.log(markForm)
    useEffect(() => {
        const submitToServer = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/markAssignment/${id}`);
                // console.log(data);
                setMarkForm(data)

            } catch (error) {
                console.error(error.message);
            }
        };

        submitToServer();
    }, [id])
    const {
        email,
        assignment_title,
        assignment_level,
        marks,
        description,
        due_date,
        thumbnail,
    } = markForm
    const handleGiveMark = (event, _id, prevStatus, status) => {
        event.preventDefault();
    
        const form = event.target;
        const pdfLink = form.pdfLink.value;
        const notes = form.notes.value;
        const giveMark = form.giveMark.value;
        const feedback = form.feedback.value;
    
        console.log(_id, prevStatus, status);

        if(email === user?.email){
            return toast.error('You submitted this assignment so you cannot give mark')
        }

        const mark = parseFloat(giveMark)
        if (mark > 60 || mark <= 0)
        return toast.error('The mark must be greater than 60 or equal to 0.')
    
        const submitData = {
            email, 
            assignment_title,
            assignment_level,
            marks,
            description,
            due_date,
            thumbnail,
            status,
            pdfLink,
            notes,
            giveMark,
            feedback
        };
        console.log(submitData);
    
        
        handleStatus(_id, submitData);
    };
    
    const handleStatus = async (_id, submitData) => {
        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/statusUpdate/${_id}`, submitData);
            console.log(data);
            // setMarkForm(data);
            if (data.modifiedCount
                > 0) {
                Swal.fire({
                    title: 'You give marked!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }

            navigate("/assignments")
        } catch (error) {
            toast.error(error.message)
            
        }
    };
    

    return (
        <section className="max-w-4xl custom-margin border-2 border-primary p-6 mx-auto bg-secondary rounded-md shadow-md text-slate-700">
            <form onSubmit={(e) => handleGiveMark(e, markForm._id, markForm.prevStatus, 'Complete')}>
                <h2 className=" font-bold text-3xl  rounded-md text-primary">Give Mark Form</h2>
                

                <h2 className="text-lg mt-4 font-semibold ">Examiner email: {user?.email}</h2>

                <div className="grid grid-cols-1 gap-6 mt-4 ">
                    <div>
                        <label className="font-bold" >PDF/doc link</label>
                        <input id="username" disabled  name="pdfLink" defaultValue={markForm.pdfLink} type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="font-bold" >Quick Notes</label>
                        <textarea id="emailAddress" disabled defaultValue={markForm.notes} name="notes" type="email" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>
                    <div>
                        <label className="font-bold" >Give mark</label>
                        <input name="giveMark" required type="number" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>
                    <div>
                        <label className="font-bold" >Feedback</label>
                        <textarea name="feedback" required type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>



                </div>

                <div className="flex items-center justify-center mt-6">
                   
                    <SecondaryBtn  props={"Give mark"}/>
                </div>
            </form>
        </section>
    );
    
};

export default GiveMark;