import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface childrenProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: childrenProps) => {
  return (
    <div className="relative min-h-screen lg:flex">
      <Navbar />
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
