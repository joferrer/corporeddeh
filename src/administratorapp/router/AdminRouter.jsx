import { Navigate, Route, Routes } from "react-router-dom"
import { AdminHomePage } from "../pages/AdminHomePage"
import { routes } from "../../corporeddeh/routes/routes"

export const AdminRouter =()=>{
    return (
        <Routes>
            <Route path={routes.HOME_ADMIN} element={<AdminHomePage />}></Route>
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}