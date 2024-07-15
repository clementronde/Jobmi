"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MarqueeComponent = () => {
  const logos = [
    { name: "Logo AFM Téléthon", logo: "/media/afm-telethon.svg" },
    { name: "Logo Transition Pro", logo: "/media/transition-pro.svg" },
    { name: "Logo Ma Formation", logo: "/media/ma-formation.svg" },
    { name: "Logo DC Campus", logo: "/media/dc-campus.svg" },
    { name: "Logo Open Classroom", logo: "/media/open-classroom.svg" },
    { name: "Logo Double Ville", logo: "/media/double-ville.svg" },
    { name: "Logo Solinum", logo: "/media/solinum.svg" },
    { name: "Logo France Travail", logo: "/media/france-travail.svg" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="col-span-12 sm:mb-10 mb-5">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="item flex items-center justify-center p-4">
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-24 w-auto max-h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
