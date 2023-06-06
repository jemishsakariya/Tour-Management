import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            neque, maxime fugit voluptates, ex vitae cum distinctio perferendis
            molestias commodi corrupti quasi ab omnis porro impedit facere sed
            ut vel modi repellat quia animi illo culpa sequi! Ab, est iure?
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt="ava1" className="w-25 h-25 rounded-2" />
            <div>
              <h6 className="mb-0 mt-3">Jhon Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            neque, maxime fugit voluptates, ex vitae cum distinctio perferendis
            molestias commodi corrupti quasi ab omnis porro impedit facere sed
            ut vel modi repellat quia animi illo culpa sequi! Ab, est iure?
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} alt="ava2" className="w-25 h-25 rounded-2" />
            <div>
              <h6 className="mb-0 mt-3">Lia Franklin</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            neque, maxime fugit voluptates, ex vitae cum distinctio perferendis
            molestias commodi corrupti quasi ab omnis porro impedit facere sed
            ut vel modi repellat quia animi illo culpa sequi! Ab, est iure?
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} alt="ava3" className="w-25 h-25 rounded-2" />
            <div>
              <h6 className="mb-0 mt-3">Jhon Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            neque, maxime fugit voluptates, ex vitae cum distinctio perferendis
            molestias commodi corrupti quasi ab omnis porro impedit facere sed
            ut vel modi repellat quia animi illo culpa sequi! Ab, est iure?
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} alt="ava2" className="w-25 h-25 rounded-2" />
            <div>
              <h6 className="mb-0 mt-3">Lia Franklin</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Testimonial;
