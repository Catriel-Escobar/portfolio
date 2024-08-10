import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Suspense } from "react";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

export default function AppPrincipal() {
  return (
    <div className="relative flex flex-col" >
      <Navbar />
      <section className="max-w-[1280px] m-auto mt-24 mb-20 min-h-screen ">
        <Suspense fallback = {<Loading></Loading>}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}
