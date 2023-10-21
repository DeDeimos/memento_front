import { Outlet } from "react-router-dom"
import { Header } from "../../../widgets/header/ui"

const Layout = () => {
    return (
        <>
            <Header />
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export { Layout }