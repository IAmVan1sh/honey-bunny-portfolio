import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {appRoutes} from "../utils/routes.tsx";
import {RouteInterface} from "../types/route.ts";
import {ADMIN_ROUTE} from "../utils/consts.ts";
import Admin from "../pages/admin/Admin.tsx";
import Mistake from "../pages/mistake/Mistake.tsx";

const AppRouter: FC = () => {
	const isAuth = false;

	return (
		<Routes>
			{appRoutes.map((r: RouteInterface) =>
				<Route key={r.path} path={r.path} element={r.element}/>
			)}
			{isAuth &&
				<Route key={ADMIN_ROUTE} path={ADMIN_ROUTE} element={<Admin />}/>
			}
			<Route path="/*" element={ <Mistake/> } />
		</Routes>
	);
};

export default AppRouter;