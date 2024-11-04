import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PendingAssignments from "../pages/PendingAssignments";
import CreateAssignments from "../pages/CreateAssignments";
import Assignments from "../pages/Assignments";
import UpdateAssignment from "../pages/UpdateAssignment";
import DetailsAssignment from "../pages/DetailsAssignment";
import SubmissionForm from "../pages/SubmissionForm";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments";
import GiveMark from "../components/GiveMark";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/assignments",
                element: <Assignments></Assignments>,
                
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/updateData/${params.id}`)
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><DetailsAssignment></DetailsAssignment></PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/updateData/${params.id}`)
            },
            {
                path: "/submit/:id",
                element: <PrivateRoute><SubmissionForm></SubmissionForm></PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/updateData/${params.id}`)
            },
            {
                path: "/pendingAssignments",
                element: <PrivateRoute>
                    <PendingAssignments></PendingAssignments>
                </PrivateRoute>
            },
            {
                path: "/createAssignments",
                element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
            },
            {
                path: "/myAttempted",
                element: <PrivateRoute><MyAttemptedAssignments></MyAttemptedAssignments></PrivateRoute>,
            },
            {
                path: "/giveMark/:id",
                element: <PrivateRoute>
                    <GiveMark></GiveMark>
                </PrivateRoute>,
            }
           
        ]
    },
]);


export default router;