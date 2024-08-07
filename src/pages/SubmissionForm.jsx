
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
                const { data } = await axios.post(`https://job-word-server.vercel.app/mySubmission`, submitData);
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
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-secondary">

            

            <h2 className=" font-bold text-3xl  rounded-md text-primary">Submission Form</h2>
            <h2 className="text-lg mt-3 font-semibold capitalize text-black">Examinee: <span className="text-primary">{email}</span></h2>

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

                <div className="flex justify-end mt-6">
                    <button type="submit" className="w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default SubmissionForm;

