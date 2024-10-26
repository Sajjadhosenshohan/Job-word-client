
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";


const SubmissionForm = () => {
    const { user } = useContext(AuthContext);
    const load = useLoaderData();
    const navigate = useNavigate()
    const {
        assignment_title,
        assignment_level,
        marks,
        description,
        due_date,
        thumbnail,
    } = load

    // status
    const status = 'pending'
    const email = user?.email;
    const name = user?.displayName;


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const pdfLink = form.pdfLink.value;
        const notes = form.notes.value;

        const submitData = {
            email,
            name,
            assignment_title,
            assignment_level,
            marks,
            description,
            due_date,
            thumbnail,
            status,
            pdfLink,
            notes

        };
        console.log(submitData)

        const submitToServer = async () => {
            try {
                const { data } = await axios.post(`http://localhost:5000/mySubmission`, submitData);
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Assignment submitted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                navigate("/myAttempted")

            } catch (error) {
                console.error(error, "vul val");
            }
        };

        submitToServer();

    }


    return (
        <section className="max-w-4xl custom-margin border-2 border-primary p-6 mx-auto bg-white rounded-md  dark:bg-secondary">



            <h2 className=" font-bold text-3xl  rounded-md text-primary">Submission Form</h2>
            <h2 className="text-lg mt-3 font-semibold  text-black">Examinee: <span className="text-primary">{email}</span></h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 text-black">
                    <div>
                        <label className="font bold " >PDF/doc link</label>
                        <input id="username" required name="pdfLink" type="url" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="font bold" >Quick Notes</label>
                        <textarea id="emailAddress" required name="notes" type="email" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>



                </div>

                <div className="flex justify-center mt-6">
                    

                    <button type="submit" className={`text-center relative inline-flex items-center px-6 py-2 md:px-12 md:py-3 overflow-hidden text-lg font-medium text-primary border-2 border-primary rounded-full hover:text-white group hover:bg-gray-50`}>
                        <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">Submit</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SubmissionForm;

