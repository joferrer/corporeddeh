/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom"
import { AdminRouter } from "./AdminRouter"

const ROL_ADMINISTRADOR = "admin"
export const AppRouterUser = ({ rol = ROL_ADMINISTRADOR }) => {
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