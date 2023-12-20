import { Navigate, Route, Routes } from "react-router-dom"
import { AdminHomePage } from "../pages/AdminHomePage"
import { routes } from "../../corporeddeh/routes/routes"
import { CorpoeddehRoute } from "../../corporeddeh/routes/CorporeddehRoute"
import { CalendarAdminPage } from "../pages/CalendarAdminPage"

export const AdminRouter = () => {
    return (
        <Routes>
            <Route path={routes.HOME_ADMIN} element={<AdminHomePage />}></Route>
            <Route path={routes.CALENDAR_ADMIN} element={<CalendarAdminPage />} />
            <Route path="/*" element={<CorpoeddehRoute />} />
            <Route path="/*" element={<Navigate to={routes.HOME_ADMIN} />} />

        </Routes>
    )
}