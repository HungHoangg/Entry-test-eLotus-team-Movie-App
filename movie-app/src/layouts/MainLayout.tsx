import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./MainLayout.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>© 2025 MovieApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
