import React from "react";
import { GrTrophy } from "react-icons/gr";
import { IoMdTrophy } from "react-icons/io";
import "./Blocks.css";

const RowWithBlocks = () => {
  const isMobile = window.innerWidth <= 767;

  const Icon1 = () => (
    <div className="trophy1">
      <IoMdTrophy />
    </div>
  );
  const Icon2 = () => (
    <div className="trophy2">
      <IoMdTrophy />
    </div>
  );
  const Icon3 = () => (
    <div className="trophy3">
      <IoMdTrophy />
    </div>
  );
  const Icon4 = () => (
    <div className="trophy4">
      <IoMdTrophy />
    </div>
  );

  const blocks = [
    {
      bgColor: "White",
      textColor: "#2B275A",
      icon: <Icon1 />,
      title: "Easy Quick Bookings",
      content:
        "Booking at a click. 1 min to book consultation with an expert and get treated. Intuitive designs for patients to access easily.",
    },
    {
      bgColor: "#2B275A",
      textColor: "white",
      icon: <Icon2 />,
      title: "Top Rated Doctors",
      content:
        "Highly rated doctors has never been so easy to access. Curated list of experts who are experienced professionals to perform with high standards of professionalism.",
    },
    {
      bgColor: "White",
      textColor: "#2B275A",
      icon: <Icon3 />,
      title: "Secured Payments",
      content:
        "Hassle free payment with the reputed payment gateway providers with end-to-end solutions to patients to lock their consultation with the experts.",
    },
    {
      bgColor: "#FF902A",
      textColor: "white",
      icon: <Icon4 />,
      title: "Insurance Policy",
      content:
        "Insurance for every healthcare needs allows patients to forget worrying about their bills and work for the betterment of their health.",
    },
  ];

  return (
    <div className="row">
      {blocks.map((block, index) => (
        <div
          key={index}
          className="block"
          style={{ backgroundColor: block.bgColor, color: block.textColor }}
        >
          {block.icon}
          <div className="block-text-cnt">
            <h2 className="block-ttl1" >
              {block.title}
            </h2>
            <p className="block-cnt" >
              {block.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowWithBlocks;
