import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-900 mt-20 after:bg-white after:max-w-[30%] after:block after:h-[1px] after:mx-auto">
        <main className="grid grid-cols-2 max-w-[1200px] mx-auto p-6 gap-5 text-white mb-10">
          <div>
            <img
              className="block w-full rounded shadow-sm"
              src="./public/cs-2.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-3xl text-amber-500 mb-3">
              O que é o Counter Strike?
            </h2>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium dolorem doloremque ipsam dolorum tempore earum
              quisquam repellendus tenetur pariatur at, non asperiores delectus
              aut nesciunt iure eius! Minima sed vel perspiciatis!
            </p>
            <span className=""></span>
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
