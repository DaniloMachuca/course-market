"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import store from "@/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
};

export default Layout;
