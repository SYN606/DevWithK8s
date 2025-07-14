import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RoutingTable from "./RoutingTable";
// import SideAd from "./ads/SideAd";
// import BannerAd from "./ads/BannerAd";


export default function Base() {
    return (
        <>
            <Navbar />

            <main className="bg-gray-950 text-gray-200 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[250px_1fr_220px] gap-6">
                    {/* Sticky left routing table */}
                    <aside className="hidden lg:block sticky top-6 self-start h-fit">
                        <RoutingTable />
                    </aside>

                    {/* Main content */}
                    <section>
                        <Outlet />
                    </section>

                    {/* Sticky right ad section */}
                    {/* <aside className="hidden lg:block sticky top-6 self-start h-fit">
                    </aside> */}
                </div>

                {/* Banner Ad placeholder below content */}
                {/* <div className="max-w-4xl mx-auto my-10 px-4">
                </div> */}

            </main>

            <Footer />
        </>
    );
}
