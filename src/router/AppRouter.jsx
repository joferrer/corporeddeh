import { Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { CheckingAuth } from "../ui/FeedbackComponents";
import { AppRouterUser } from "../administratorapp/router/AppRouterUser";


const CHECKING = "checking"
const AUTHENTICATED = "authenticated"
const NO_AUTHENTICATED = "no-authenticated"
const status = AUTHENTICATED

const rol = "admin"
export const AppRouter = () => {

  //const {status,rol} = authDispatch();

  if (status === CHECKING) {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {status === AUTHENTICATED ? (
        <Route path="/*" element={<AppRouterUser rol={rol} />}></Route>
      ) : (
        <Route path="/*" element={<AuthRouter status={status} />} />
      )}

    </Routes>
  );
};