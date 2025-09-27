import React from "react";
// Importing data
import { features } from "../data";

const FeaturesSecond = () => {
  const { title, image, subtitle } = features.feature2;
  return (
    <section className="section">
      <div
        className="container mx-auto px-5 flex flex-col 
				gap-10 lg:flex-1 lg:flex-row lg:gap-x-20"
      >
        <img
          className="order-1 w-[450px] h-[450px] rounded-lg"
          src={image.type}
          alt={title}
        />
        <div className="">
          <h3 className="title text-primary">{title}</h3>
          <p className="subtitle  text-secondary">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
