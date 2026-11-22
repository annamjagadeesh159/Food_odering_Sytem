import Footer from "./Footer";
import "./PageLayout.css";

function PageLayout({ navbar, children }) {
  return (
    <>
      {navbar}
      <main className="page-main">{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;