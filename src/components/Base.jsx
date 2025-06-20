import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Base() {
    return (
        <>
            <Navbar />
            <Outlet className="bg-gray-950" />
            <Footer />
        </>
    );
}