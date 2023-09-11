import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {appRoutes, itemRoutes} from "../utils/routes.tsx";
import {RouteInterface} from "../types/route.ts";

const AppRouter: FC = () => {
    return (
        <Routes>
            {appRoutes.map((r: RouteInterface) =>
                <Route key={r.path} path={r.path} element={r.element}/>
            )}
            {itemRoutes.map((r: RouteInterface) =>
                <Route key={r.path} path={r.path} element={r.element}/>
            )}
            <Route path="/*" element={ <Navigate to="/mistake"/> } />
        </Routes>
    );
};

export default AppRouter;