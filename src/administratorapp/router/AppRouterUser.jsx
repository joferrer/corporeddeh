/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom"
import { AdminRouter } from "./AdminRouter"

const ROL_ADMINISTRADOR = "admin"
export const AppRouterUser = ({ rol = ROL_ADMINISTRADOR }) => {
    console.log("rol AppRouterUser", rol)
    return (
        <Routes>
            {
                rol === ROL_ADMINISTRADOR ?
                    <Route path="/*" element={<AdminRouter />}></Route>
                    :
                    <Route path="/*" element={<Navigate to="/" />} />
            }
        </Routes>
    )
}