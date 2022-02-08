import React from 'react';
import { Footer } from '../components';
import { Navbar } from '../components';
import { Sidebar } from '../components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
