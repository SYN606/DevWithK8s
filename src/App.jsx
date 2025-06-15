import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base, ScrollToTop } from "./components";
import Homepage from "./pages/Homepage";

export default function App() {
  return (

    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Homepage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}