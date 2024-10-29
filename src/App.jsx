/* eslint-disable no-unused-vars */
import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const MyProfile = lazy(() => import("./pages/MyProfile"));
const MyAppointments = lazy(() => import("./pages/MyAppointments"));
const Appointment = lazy(() => import("./pages/Appointment"));
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:specialty" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/appointment/:docId" element={<Appointment />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
