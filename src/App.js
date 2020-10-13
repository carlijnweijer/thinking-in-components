import React from "react";
import "./App.css";
import Header from "./components/Header";
import Wanttolearn from "./components/Wanttolearn";
import Courses from "./components/Courses";
import Why from "./components/Why";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />

      <div className="content">
        <Wanttolearn />
        <Courses />
        <Why />
      </div>

      <Footer />
    </div>
  );
}
