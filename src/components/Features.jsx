import { Fade } from "react-awesome-reveal";
// import { CgGym } from "react-icons/cg";
// import { FaBiking } from "react-icons/fa";
// import { FaPersonSwimming, FaWifi } from "react-icons/fa6";
// import { GiSolarPower } from "react-icons/gi";
// import { MdOutlineSecurity } from "react-icons/md";
const Features = () => {
    return (
        <section className=" mt-24 ">
            <div className="container mx-auto">

                <div className="text-center mb-12 mx-auto w-2/3 md:w-full">
                    <Fade direction="left">
                        <h2 className="font-bold text-4xl mb-3">Our Outstanding Features</h2>
                        <p>Experience unparalleled service and unforgettable adventures with our exceptional features.</p>
                    </Fade>
                </div>



                <div className="grid gap-6 my-16 lg:grid-cols-3 ">

                    {/* 1 */}
                    <div className="flex items-center rounded overflow-hidden shadow-lg dark:bg-[#f4f3f0] dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">1</div>
                            <h3 className="text-2xl font-semibold">User-friendly Navigation</h3>
                            <p >
                                Easily explore assignments, create new ones, and manage your profile
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex items-center rounded overflow-hidden shadow-lg dark:bg-[#f4f3f0] dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">2</div>
                            <h3 className="text-2xl font-semibold">Assignment Management</h3>
                            <p >
                                Seamlessly create, update, and delete assignments with intuitive forms.
                            </p>
                        </div>
                    </div>

                    {/* 3*/}
                    <div className="flex items-center rounded overflow-hidden shadow-lg dark:bg-[#f4f3f0] dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">3</div>
                            <h3 className="text-2xl font-semibold">Filtered Assignment Viewing</h3>
                            <p >
                                Quickly find assignments based on difficulty level for efficient studying.
                            </p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="flex items-center rounded overflow-hidden shadow-lg dark:bg-[#f4f3f0] dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">4</div>
                            <h3 className="text-2xl font-semibold">Personalized User Pages</h3>
                            <p >
                                Access a dedicated space to view your submitted assignments and pending tasks
                            </p>
                        </div>
                    </div>
                    {/* 5*/}
                    <div className="flex items-center rounded overflow-hidden shadow-lg dark:bg-[#f4f3f0] dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">5</div>
                            <h3 className="text-2xl font-semibold">Efficient Grading System</h3>
                            <p >
                                Easily give marks and feedback on pending assignments for streamlined assessment
                            </p>
                        </div>
                    </div>
                    {/* 6*/}
                    <div className="flex items-center rounded overflow-hidden shadow-lg dark:bg-[#f4f3f0] dark:text-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-105">

                        <div className="text-center  p-8 space-y-3 rounded-md">
                            <div className="w-8 h-8 mx-auto text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">6</div>
                            <h3 className="text-2xl font-semibold">Secure Authentication</h3>
                            <p >
                                Safely log in and register with robust validation and JWT token implementation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* User-friendly Navigation: Easily explore assignments, create new ones, and manage your profile.
            Assignment Management: Seamlessly create, update, and delete assignments with intuitive forms.
            Filtered Assignment Viewing: Quickly find assignments based on difficulty level for efficient studying.
            Personalized User Pages: Access a dedicated space to view your submitted assignments and pending tasks.
            Efficient Grading System: Easily give marks and feedback on pending assignments for streamlined assessment.
            Secure Authentication: Safely log in and register with robust validation and JWT token implementation. */}
        </section>
    );
};

export default Features;