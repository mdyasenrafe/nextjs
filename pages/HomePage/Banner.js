import React from "react";
import { useState } from "react/cjs/react.production.min";

const Banner = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <section className="container mx-auto py-14 px-6 ">
        <div
          className="  grid
        
          lg:grid-cols-2
          gap-7
          spac-y-4"
        >
          <div className="pr-6">
            <h1 className="banner-title font-bold text-5xl">
              Integrate APIs <br /> <span className="mt-4">In Minutes</span>
            </h1>
            <p className="mt-4">
              Get ridiculously creative with your products and let us do the
              hard work for you!
            </p>

            <form className="w-full max-w-sm mt-6">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  aria-label="Early Access"
                  class="border-2 border-[#2C4BFF] rounded-t-xl sm:rounded-l-xl sm:rounded-r-none 6 p-2  sm:text-left"
                  placeholder="Enter Your Email"
                  id="heroLetter"
                />
                <button
                  type="submit"
                  className="bg-[#2C4BFF] text-white py-3 px-2 md:px-4"
                  onClick={handleSubmit}
                >
                  Get Early Access
                </button>
              </div>
            </form>
          </div>

          <div className="banner-img">
            <img
              className="w-3/4"
              src="https://i.ibb.co/2yPRFcg/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
