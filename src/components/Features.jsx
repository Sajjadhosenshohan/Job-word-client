import { BiSolidNavigation } from "react-icons/bi";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdGrading } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import Title from "./Title";

const Features = () => {
    return (
        <section className="section-to-section-margin">
            <div className="container mx-auto">

                <Title title={'Our Features'} description={`Explore the key features designed to make your experience smoother—from managing assignments to secure authentication, everything you need is right here.`}/>


                <div className="grid gap-6 my-16 lg:grid-cols-3 ">

                    {/* 1 */}
                    <div className="flex items-center rounded overflow-hidden shadow-lg bg-secondary text-slate-800  hover:bg-primary hover:text-white transition-all hover:scale-105 justify-center">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50 flex items-center justify-center"><BiSolidNavigation /></div>
                            <h3 className="text-2xl font-semibold">User-friendly Navigation</h3>
                            <p >
                                Easily explore assignments, create new ones, and manage your profile
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex items-center rounded overflow-hidden shadow-lg bg-secondary text-slate-800  hover:bg-primary hover:text-white transition-all hover:scale-105 justify-center">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50 flex items-center justify-center"><MdAssignmentTurnedIn /></div>
                            <h3 className="text-2xl font-semibold">Assignment Management</h3>
                            <p >
                                Seamlessly create, update, and delete assignments with intuitive forms.
                            </p>
                        </div>
                    </div>

                    {/* 3*/}
                    <div className="flex items-center rounded overflow-hidden shadow-lg bg-secondary text-slate-800  hover:bg-primary hover:text-white transition-all hover:scale-105 justify-center">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50 flex items-center justify-center"><FaFilter /></div>
                            <h3 className="text-2xl font-semibold">Filtered Assignment Viewing</h3>
                            <p >
                                Quickly find assignments based on difficulty level for efficient studying.
                            </p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="flex items-center rounded overflow-hidden shadow-lg bg-secondary text-slate-800  hover:bg-primary hover:text-white transition-all hover:scale-105 justify-center">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50 flex items-center justify-center"><FaUser /></div>
                            <h3 className="text-2xl font-semibold">Personalized User Pages</h3>
                            <p >
                                Access a dedicated space to view your submitted assignments and pending tasks
                            </p>
                        </div>
                    </div>
                    {/* 5*/}
                    <div className="flex items-center rounded overflow-hidden shadow-lg bg-secondary text-slate-800  hover:bg-primary hover:text-white transition-all hover:scale-105 justify-center">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50 flex items-center justify-center"><MdGrading /></div>
                            <h3 className="text-2xl font-semibold">Efficient Grading System</h3>
                            <p >
                                Easily give marks and feedback on pending assignments for streamlined assessment
                            </p>
                        </div>
                    </div>
                    {/* 6*/}
                    <div className="flex items-center rounded overflow-hidden shadow-lg bg-secondary text-slate-800  hover:bg-primary hover:text-white transition-all hover:scale-105 justify-center">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50 flex items-center justify-center"><RiSecurePaymentLine />
                            </div>
                            <h3 className="text-2xl font-semibold">Secure Authentication</h3>
                            <p >
                                Safely log in and register with robust validation and JWT token implementation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;