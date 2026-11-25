import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CustomerLayout.css";

function CustomerLayout({ cartCount, user, onLogout }) {
  const { pathname } = useLocation();

  // every time the URL changes, jump back to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar cartCount={cartCount} user={user} onLogout={onLogout} />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default CustomerLayout;