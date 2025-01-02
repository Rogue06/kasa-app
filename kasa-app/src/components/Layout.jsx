// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
      <>
        <div className="layout-container">
          <Header />           {/* Le même header sur toutes les pages */}
          <main>
            <Outlet />        {/* C'est ici que le contenu unique de chaque page sera injecté */}
          </main>
        </div>
        <Footer />           {/* Le même footer sur toutes les pages */}
      </>
    );
  }

export default Layout;
