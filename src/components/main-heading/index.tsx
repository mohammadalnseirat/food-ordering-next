import React from "react";

function MainHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <span className="text-gray-500 uppercase leading-4 font-semibold">
        {subtitle}
      </span>
      <h2 className="text-primary italic font-bold text-4xl">{title}</h2>
    </>
  );
}

export default MainHeading;
