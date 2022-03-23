import React from "react";

const SkipSection = () => {
  return (
    <section className="mx-auto container " id="skip-the-hassle">
      <div className="pb-10 skip-area">
        <p className="font-semibold text-xl">
          We understand your needs to
          <span className="bg-yellow-200"> build integrated applications</span>
          in today’s hyper-connected world.{" "}
          <span className="bg-yellow-200">Skip the hassle</span> to repeat a
          cumbersome process{" "}
          <span className="bg-yellow-200">for each unique integration</span>.
          Join us to build reliable connections with multiple providers and
          <span className="bg-yellow-200">cruise through backend</span> with
          ease.
        </p>
      </div>
      <div className=" skip-area">
        <img
          src="https://i.ibb.co/k6Xgj4H/f58239c8-42e7-43db-8725-00502b3a7143.jpg"
          alt=""
        />
      </div>

      <div className="mt-16 text-center">
        <h1 className="font-bold text-5xl md:text-6xl">
          <span className="skip-text">Skip</span> The Hassle
        </h1>
      </div>
      <div className="pt-20">
        <img src="https://i.ibb.co/1QfqN3V/hassle-1.webp" alt="" />
      </div>
    </section>
  );
};

export default SkipSection;
