import React from "react";
import Card from "./Card";

const Cards: React.FC = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h6 className="text-base font-semibold md:text-[22px]">My Cards</h6>
        <p className="text-sm font-semibold md:text-base">See All</p>
      </div>
      <div className="flex items-center gap-6 overflow-x-scroll">
        <Card variant="dark" />
        <Card variant="light" />
      </div>
    </div>
  );
};
export default Cards;
