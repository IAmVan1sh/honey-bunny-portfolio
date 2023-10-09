import NavBar from "./components/navbar/NavBar.tsx";
import AppRouter from "./components/AppRouter.tsx";
import Footer from "./components/footer/Footer.tsx";
import {Fragment} from "react";

const App = () => {
	return (
		<Fragment>
			<NavBar />
			<AppRouter />
			<Footer />
		</Fragment>
	);
};

export default App;