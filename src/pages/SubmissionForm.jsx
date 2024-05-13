// import { useContext } from "react";
// import { AuthContext } from "../firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useContext} from "react";
import { AuthContext } from "../firebase/AuthProvider";
// import { useEffect } from "react";

const SubmissionForm = () => {
    const { user } = useContext(AuthContext);
    const load = useLoaderData(); // Call useLoaderData inside the functional component
    console.log("load", load)

    const {
        email,
        assignment_title,
        assignment_level,
        marks,
        description,
        due_date,
        thumbnail,
    } = load

    // status
    const status = 'pending'

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const pdfLink = form.pdfLink.value;
        const notes = form.notes.value;

        
        const submitData = {
            my_email: email,
            assignment_title,
            assignment_level,
            marks,
            description,
            due_date,
            thumbnail,
            examiner: {
                examiner_email : user?.email,
                examiner_name : user?.displayName,
            },
            status,
            pdfLink,
            notes

        };
        console.log(submitData)

        const submitToServer = async () => {
            try {
                const { data } = await axios.post(`http://localhost:8000/mySubmission`, submitData);
                console.log(data);

            } catch (error) {
                console.error(error, "vul val");
            }
        };

        submitToServer();

    }


    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Submission Form</h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 ">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="username">PDF/doc link</label>
                        <input id="username" name="pdfLink" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Quick Notes</label>
                        <textarea id="emailAddress" name="notes" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>



                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default SubmissionForm;

// By default, every submitted assignment will be in pending status. Save
// the user email with the submitted assignment so that it can be determined
// who has submitted it.
