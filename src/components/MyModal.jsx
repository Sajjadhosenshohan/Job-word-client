import { CiCalendarDate } from 'react-icons/ci';
import { MdFeedback } from 'react-icons/md';
import { IoBookmarks } from 'react-icons/io5';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { useState } from 'react';
const MyModal = ({ load}) => {
    console.log(load)

    const { thumbnail, assignment_title, marks, status, giveMark, feedback, _id,pdfLink} = load

    const [pdf, setPdf] = useState("");

    const handlePdf = () => {
        const fil = load; 
        setPdf(fil.pdfLink);
        console.log(fil);

        
        setTimeout(() => {
            document.getElementById('my_modal_5').showModal();
        }, 1000); 
    };

    return (
        <div >
            <div className="flex  bg-white rounded-lg shadow-lg  dark:bg-secondary dark:text-gray-800 flex-col md:flex-row  transition-all gap-2 duration-500 transform   hover:bg-opacity-80  p-4">
                <div className="w-full md:w-1/2 my-auto h-[250px] rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${thumbnail})` }}>

                </div>

                <div className="w-full md:w-1/2  md:p-4">


                    <div className="space-y-3">
                        <h1 className="text-xl font-bold">{assignment_title}</h1>


                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <CiCalendarDate className=" text-primary w-6 h-6" />

                            <p className="font-bold">
                                Assignment marks: <span className="font-base text-primary">{marks}</span>
                            </p>
                        </div>
                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <GrStatusGoodSmall className=" text-primary w-6 h-6" />
                            <p className="font-bold">
                                Assignment status: <span className={`text-white p-1 rounded-xl ${status === 'pending' && 'bg-yellow-600'
                                    } 
                    
                      ${status === 'Complete' && 'bg-green-600'
                                    } 
                      
                      `}>
                                    {
                                        status
                                    }
                                </span>
                            </p>
                        </div>

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <IoBookmarks className=" text-primary w-6 h-6" />
                            <p className="font-bold">
                                Obtained marks: <span className=" text-primary">{giveMark}</span>
                            </p>
                        </div>

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <MdFeedback className=" text-primary w-6 h-6" />
                            <p className="font-bold">
                                Feedback: <span className=" text-primary">{feedback}</span>
                            </p>
                        </div>

                        <div title={pdfLink} className="flex gap-2 items-center  justify-start mb-2">
                            <MdFeedback className=" text-primary w-6 h-6" />
                            <p className="font-bold">
                                PDF: <span  className=" text-primary">{pdfLink?.substring(0, 20)}....</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end mt-3 item-center">
                        
                        <button onClick={() => handlePdf(_id)} className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg hover:bg-blue-900 bg-primary text-center">View PDF</button>
                    </div>
                    

                    {/* modal */}
                    {/* Modal */}

                    {pdf && <dialog id="my_modal_5" className="mt-12 rounded-lg bg-secondary modal modal-bottom sm:modal-middle h-[500px] w-[70%] mx-auto">
                        <div className="h-full w-full md:p-5">
                            <iframe src={pdf} style={{ minHeight: '350px', width: '100%' }} title="PDF Preview" allow="autoplay" className="mb-12"></iframe>
                            <div className="modal-action flex justify-center">
                                <form method="dialog" className="w-full">
                                    <button className="w-full font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg hover:bg-blue-900 bg-primary text-center">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>}





                    {/* modal */}
                </div>
            </div>

        </div>

    );
};

export default MyModal;