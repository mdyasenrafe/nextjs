import React from "react";

const CruisSection = () => {
  return (
    <section className="py-14 container mx-auto" id="cruise-through-backend">
      <div className="mt-12 text-center">
        <h1 className="font-bold text-5xl md:text-6xl">
          <span className="skip-text">Cruise </span> Through Backend
        </h1>
      </div>

      <div className="my-32">
        <div className="grid lg:grid-cols-2 gap-7 spac-y-4 mb-0  relative">
          <div>
            <h1 className="text-8xl text-gray-300 font-bold absolute -top-10 ">
              #1
            </h1>
            <h1 className="font-semibold text-3xl relative">
              Choose from 100+ <br /> integrations.
            </h1>
            <p className="my-5 text-gray-500">
              Vade Studio is designed to work seamlessly with your favourite
              databases or web services.{" "}
              <strong className="text-gray-800">
                Tweak a template or start from scratch.
              </strong>
            </p>
            <p className="my-5 text-gray-500 ">
              We&lsquo;ve baked-in over 100 integrations directly into the
              platform, so you can integrate quickly and easily with other
              services, databases and applications out there
            </p>
            <div className=" text-center relative">
              <img
                className="h-48 mx-auto"
                src="https://i.ibb.co/SXzx3nb/96ed6602-a988-4bcf-b7da-8c2577c2419d.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/wSz8f3P/1.gif" alt="" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-7 spac-y-4 relative">
          <div>
            <img src="https://i.ibb.co/1rtf153/2.gif" alt="" />
          </div>
          <div className="text-center">
            <h1
              style={{ textAlign: "end" }}
              className="text-8xl text-gray-300 font-bold absolute -top-10 right-16"
            >
              #2
            </h1>
            <h1 className="font-semibold text-3xl relative">
              Configure & Connect.
            </h1>
            <p className="my-5 text-gray-500 text-left">
              Get all of your{" "}
              <strong className="text-gray-800">
                data sources connected into a content mesh, in the same place,
                in real time.
              </strong>
            </p>
            <p className="my-5 text-gray-500 end">
              This provides you a unified API for data navigation across all
              your integrated services
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-7 spac-y-4 relative mt-10">
          <div>
            <h1 className="text-8xl text-gray-300 font-bold absolute -top-10 ">
              #3
            </h1>
            <h1 className="font-semibold text-3xl relative">
              Test. Build. Deploy.
            </h1>
            <p className="my-5">
              <strong className="text-gray-800">
                Play around with the generated APIs.
              </strong>
            </p>
            <p className="my-5 text-gray-500">
              Once configured – test, build and deploy the unified API into our
              secure and reliable infrastructure.
            </p>
          </div>

          <div>
            <img src="https://i.ibb.co/vm1skXV/3.gif" alt="" />
          </div>
        </div>
      </div>
      <div className=" skip-area">
        <img
          src="https://i.ibb.co/k6Xgj4H/f58239c8-42e7-43db-8725-00502b3a7143.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default CruisSection;
