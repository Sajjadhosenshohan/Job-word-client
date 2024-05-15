import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayOut = () => {
    return (
        <div className="space-y-12 p-5 max-w-6xl mx-auto">
            <Nav></Nav>
            <div className='min-h-[calc(100vh-306px)] '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;