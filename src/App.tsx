import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.tsx";
import AppRouter from "./components/AppRouter.tsx";
import Footer from "./components/footer/Footer.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;