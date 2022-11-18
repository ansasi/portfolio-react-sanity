import React from "react";
import { Toaster } from "react-hot-toast";

import { About, Contact, Header, Skills, Testimonial, Portfolio } from "./container";
import { Navbar, Footer, FloatingNavbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Toaster />
    <Navbar />
    <Header />
    <About />
    <Portfolio />
    <Skills />
    {/* <Testimonial /> */}
    <Contact />
    <Footer />
    <FloatingNavbar />
  </div>
);

export default App;
