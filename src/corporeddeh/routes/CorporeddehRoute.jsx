import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import {
  HomePage,
  CalendarPage,
  EventsPage,
  DocumentsPage,
  AboutusPage,
  DonationPage,
  OfficesPage,
  EeventoPage,
} from "../pages";

export const CorpoeddehRoute = () => {
  console.log("CorpoeddehRoute");
  return (
    <Routes>
      <Route path={routes.HOME} element={<HomePage />}></Route>
      <Route path={routes.CALENDAR} element={<CalendarPage />}></Route>
      <Route path={routes.EVENT} element={<EventsPage />}></Route>
      <Route path={routes.DOCUMENTS} element={<DocumentsPage />}></Route>
      <Route path={routes.ABOUTUS} element={<AboutusPage />}></Route>
      <Route path={routes.DONATION} element={<DonationPage />}></Route>
      <Route path={routes.OFFICE} element={<OfficesPage />}></Route>
      <Route path={routes.EEVENTO} element={<EeventoPage />} />
      <Route path={routes.RANDOM} element={<Navigate to="/" />} />
      <Route path="/*" element={<Navigate to={routes.HOME} />} />
    </Routes>
  );
};
