import React, { useState, useEffect } from "react";
import "../Css/User.css";
import { eventData } from "../Json/Events";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Events/Banner";
import Search from "../Components/Events/Search";
import Browse from "../Components/Events/Browse";
import Footer from "../Components/Footer/Footer";

const Events = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Search />
      <Browse eventData={eventData} />
      <Footer />
    </>
  );
};

export default Events;