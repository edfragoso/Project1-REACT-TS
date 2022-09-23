import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Settings from "pages/Settings/index";
import Login from "pages/Login";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login />}/>
            <Route path ={RoutePath.HOME} element={<Settings />}/>

        </Routes>
    );
}

export default Router;