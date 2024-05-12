import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayOut = () => {
    return (
        <div className="space-y-12">
            <Nav></Nav>
            <div className='min-h-[calc(100vh-306px)] max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;