import React from "react";
import Slider from "react-slick";
import "./TestimonialCarousel.css"; 
import image from './../assets/images/testimonial_img1.png'

const testimonials = [
  {
    name: "Adam Chen",
    title: "Analyst",
    image: image, 
    rating: 5,
    message:
      "This is the Most Intuitive And Modern Live Chat We Found. Live Chat Obviously Made Our Users Happier And Our Service Department More Efficient 😇",
  },
  {
    name: "Adam Chen1",
    title: "Analyst",
    image: image, 
    rating: 5,
    message:
      "This is the Most Intuitive And Modern Live Chat We Found. Live Chat Obviously Made Our Users Happier And Our Service Department More Efficient 😇",
  },
  {
    name: "Adam Chen2",
    title: "Analyst",
    image: image, 
    rating: 5,
    message:
      "This is the Most Intuitive And Modern Live Chat We Found. Live Chat Obviously Made Our Users Happier And Our Service Department More Efficient 😇",
  },

];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <div className="container mx-auto px-4 md:px-12">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div className="testimonial-card" key={idx}>
              <img src={testimonial.image} alt={testimonial.name} className="profile-pic" />
              <h3>{testimonial.name}</h3>
              <p className="title">{testimonial.title}</p>
              <div className="stars">
                {"⭐️".repeat(testimonial.rating)}
              </div>
              <p className="message">“ {testimonial.message} ”</p>
            </div>
          ))}
        </Slider>

        <div className="stats">
          <div><strong>4.9/5</strong><br />User Rating</div>
          <div><strong>350K+</strong><br />Customers</div>
          <div><strong>99+</strong><br />Team Members</div>
          <div><strong>41M</strong><br />Current Users</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
