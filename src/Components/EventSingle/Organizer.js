import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Speaker from "./Speaker";

const options = {
  loop: false,
  margin: 30,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    750: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const Organizer = (props) => {
  return (
    <section className="speaker-section padding-bottom padding-top">
      <div className="container">
        <div className="about-content">
          <span className="cate">listen to the</span>
          <h2 className="title">event speakers</h2>
          <p>
            World is committed to making participation in the event a harassment
            free experience for everyone, regardless of level of experience,
            gender, gender identity and expression
          </p>
        </div>
        <div className="speaker-slider">
          <OwlCarousel className="owl-theme owl-carousel" {...options}>
            {props.details["event_details"] !==null && props.details["event_details"].cast_and_crew.map((data,index)=>{
                return (
                    <Speaker data={data} key={index}/>
                )
            })}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Organizer;
