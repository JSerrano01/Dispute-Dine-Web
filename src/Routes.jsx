import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import BookDemo from "./pages/BookDemo";
import FeaturePage from "./pages/FeaturePage";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/success-stories", element: <SuccessStories /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/login", element: <Login /> },
        { path: "/book-demo", element: <BookDemo /> },
        { path: "/product-features/:feature", element: <FeaturePage /> },
        { path: "*", element: <NotFound /> }, // Página 404
    ]);
}
