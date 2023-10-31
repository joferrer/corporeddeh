import { Route, Routes } from "react-router-dom"
import { AdminHomePage } from "../pages/AdminHomePage"

export const AdminRouter =()=>{
    return (
        <Routes>
            <Route path="/home" element={<AdminHomePage/>}></Route>
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}