// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet /> {/* C'est ici que les pages enfants seront rendues */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
