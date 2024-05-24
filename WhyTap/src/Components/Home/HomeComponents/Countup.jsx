import React from "react";
import CountUp from 'react-countup';

const Countup = () => {
    const count = [
        {
          number:"17000",
          name: "Students Trained",
        },
        {
          number:"12000",
          name: "Students Placed",
        },
        {
          number: "130",
          name: "Expert Trainers",
        },
        {
          number: "10",
          name: "Years of Experience",
        },
      ];
  return (
    <div>
      <div className="bg-gradient-to-b from-primary to-[#d63637] md:p-10 p-5">
        <h1 className="text-center sm:text-3xl text-lg font-bold text-white">
          Get Best Training from Industrial Experts
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1   gap-5 md:p-10 p-5">
          {count.map((item, index) => (
            <div className="bg-gradient-to-t from-[#ddd] to-white  rounded-md p-5 space-y-4 py-7">
              <div className="flex text-primary font-semibold text-3xl">
                <CountUp end={item.number} duration={5} enableScrollSpy />
                <p>+</p>
              </div>
              <div className="font-bold">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countup;
