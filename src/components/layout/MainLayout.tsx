import type { ReactNode } from "react";

import Header from "./Header";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Navbar />

      <main className="main-content">
        {children}
      </main>
    </>
  );
}