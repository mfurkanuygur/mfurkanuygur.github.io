import { useRoutes } from "react-router-dom"
import Home from "../components/home/Home"
import Projects from "../components/Projects"
import Skills from "../components/skills/Skills"
import Contact from "../components/contact/Contact"

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/skills", element: <Skills /> },
        { path: "/contact", element: <Contact /> },
        
    ])
    return routes
}

export default Router