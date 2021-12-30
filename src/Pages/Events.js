import React, { useState, useEffect } from "react";
import "../Css/User.css";
import Axios from "axios";
import Banner from "../Components/Events/Banner";
import Search from "../Components/Events/Search";
import Browse from "../Components/Events/Browse";

const Events = () => {
  let url = "https://apidev.ticketezy.com/events_list";
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    Axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      setEvents(res.data);
    })
  }, [])

  const handlefilters = (post) => {
    const ret = events.filter((x) =>
      post.some((y) => y.Language === x.language || y.category === x.categories || y.start === 'low' && (x.price <= 500 && x.price >= 0) || y.start === 'free' && (x.price === 'free') || y.start === 'medium' && (x.price <= 2000 && x.price >= 500) || y.start === 'high' && (x.price >= 2000))
    );
    setFilter(ret);
  };
  const handleclear = () => {
    setFilter([]);
  }
  return (
    <>
      <Banner />
      <Search />
      {filter.length === 0 && (
        <Browse handlefilters={handlefilters} filter={events} handleclear={handleclear} />
      )}
      {filter.length >= 1 && (
        <Browse handlefilters={handlefilters} filter={filter} handleclear={handleclear} />
      )}
    </>
  );
};

export default Events;