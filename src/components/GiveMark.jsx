import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GiveMark = () => {
    const { id } = useParams();
    const [markForm, setMarkForm] = useState({})

    console.log(markForm)
    useEffect(() => {
        const submitToServer = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/markAssignment/${id}`);
                console.log(data);
                setMarkForm(data)

            } catch (error) {
                console.error(error, "vul val");
            }
        };

        submitToServer();
    }, [id])
    // const {
    //     email,
    //     assignment_title,
    //     assignment_level,
    //     marks,
    //     description,
    //     due_date,
    //     thumbnail,
    // } = load
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     // const form = event.target;
    //     // const pdfLink = form.pdfLink.value;
    //     // const notes = form.notes.value;


    //     // const submitData = {
    //     //     my_email: email,
    //     //     assignment_title,
    //     //     assignment_level,
    //     //     marks,
    //     //     description,
    //     //     due_date,
    //     //     thumbnail,
    //     //     examiner: {
    //     //         examiner_email: user?.email,
    //     //         examiner_name: user?.displayName,
    //     //     },
    //     //     status,
    //     //     pdfLink,
    //     //     notes

    //     // };
    //     // console.log(submitData)



    // }
    // handleStatus
    const handleStatus = async (_id, prevStatus, status) => {
        try {
            const { data } = await axios.patch(`http://localhost:8000/statusUpdate/${_id}`, {status});
            console.log(data);
            setMarkForm(data)

        } catch (error) {
            console.error(error, "vul val");
        }
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Mark Form</h2>

            <form>
                <h2 className="text-white">Examinee email: {markForm.my_email}</h2>
                <h2 className="text-white">Examinee name: {markForm.status}</h2>

                <div className="grid grid-cols-1 gap-6 mt-4 ">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="username">PDF/doc link</label>
                        <input id="username" name="pdfLink" defaultValue={markForm.pdfLink} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Quick Notes</label>
                        <textarea id="emailAddress" defaultValue={markForm.notes} name="notes" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Give mark</label>
                        <input name="giveMark" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Feedback</label>
                        <textarea name="feedback" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " />
                    </div>



                </div>

                <div className="flex justify-end mt-6">
                    <button onClick={() =>
                        handleStatus(markForm._id, markForm.status, 'Complete')
                    } className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default GiveMark;