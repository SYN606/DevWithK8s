import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RoutingTable from "./RoutingTable";

export default function Base() {
    const { pathname } = useLocation();

    const hideLeftSidebar = ["/", "/idea", "/support"].includes(pathname);

    return (
        <>
            <Navbar />

            <main className="bg-gray-950 text-gray-200">
                <div
                    className={`max-w-[1440px] mx-auto p-5 sm:px-6 lg:px-8 grid gap-8 relative ${hideLeftSidebar
                            ? "grid-cols-1 lg:grid-cols-[1fr_240px]" 
                            : "grid-cols-1 lg:grid-cols-[260px_1fr_200px]" 
                        }`}
                >
                    {/* Left sticky sidebar */}
                    {!hideLeftSidebar && (
                        <aside className="hidden lg:flex flex-col sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto border-r border-gray-800 pr-4">
                            <RoutingTable />
                        </aside>
                    )}

                    {/* Main documentation content */}
                    <section className="min-w-0">
                        <article className="prose prose-invert prose-lg lg:prose-xl max-w-none text-gray-300 leading-relaxed">
                            <Outlet />
                        </article>
                    </section>

                    {/* Right sticky Ads area */}
                    {/* <aside className="hidden xl:flex flex-col sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto border-l border-gray-800 pl-4">
                        <div className="text-sm text-gray-400">
                            <p className="font-semibold text-gray-300 mb-3">Sponsored</p>
                            <div className="space-y-4">
                                
                                
                                <div className="bg-gray-800 p-3 rounded-lg shadow text-center">
                                    <span className="text-gray-400">Ad Banner 1</span>
                                </div>
                                <div className="bg-gray-800 p-3 rounded-lg shadow text-center">
                                    <span className="text-gray-400">Ad Banner 2</span>
                                </div>
                            </div>
                        </div>
                    </aside> */}
                </div>
            </main>

            <Footer />
        </>
    );
}
