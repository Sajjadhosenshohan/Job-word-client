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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
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
                loader: ()=> fetch('fackadd.json')
            },
            {
                path: "/update/:id",
                element: <UpdateAssignment></UpdateAssignment>,
                loader: ({params})=> fetch(`http://localhost:8000/updateData/${params.id}`)
            },
            {
                path: "/details/:id",
                element: <DetailsAssignment></DetailsAssignment>,
                // loader: ()=> fetch('fackadd.json')
                loader: ({params})=> fetch(`http://localhost:8000/updateData/${params.id}`)
            },
            {
                path: "/submit/:id",
                element: <SubmissionForm></SubmissionForm>,
                // loader: ()=> fetch('fackadd.json')
                loader: ({params})=> fetch(`http://localhost:8000/updateData/${params.id}`)
            },
            {
                path: "/pendingAssignments",
                element: <PendingAssignments></PendingAssignments>
            },
            {
                path: "/createAssignments",
                element: <CreateAssignments></CreateAssignments>
            },
            {
                path: "/myAttempted",
                element: <MyAttemptedAssignments></MyAttemptedAssignments>,
            },
            {
                path: "/giveMark/:id",
                element: <GiveMark></GiveMark>,
            }
           
        ]
    },
]);


export default router;