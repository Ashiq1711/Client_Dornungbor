import React from "react";
import Title from "../common/Title";

import ReCAPTCHA from "react-google-recaptcha";

const EarlyAccess = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div
      id="earlyaccess"
      className="section-padding-x gap-8 py-10 md:py-20 xmd:py-[120px]] flex flex-col lg:flex-row justify-between w-full"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center sm:items-start">
        <Title title1="Get started with" title2="ZERAH" />
        <p className="text-sm sm:text-base xl:text-lg text-gray-600 mt-3">
          Join thousands of developers building the future with ZARAH
        </p>
        <div className="flex items-center gap-12 mt-10">
          <div className="flex flex-col gap-4  items-center p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-[#10D0A6]">
              10M+
            </h1>
            <p className="text-sm sm:text-base xl:text-lg text-gray-600">
              Site visits
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-[#4910D0]">
              05M+
            </h1>
            <p className="text-sm sm:text-base xl:text-lg text-gray-600">
              Sign Ups
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <div className=" mt-5 sm:mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sign Up for early access
          </h2>
          <form
            //    onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 md:space-y-10"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-3 bg-[#EBEBEB] rounded-lg outline-none"
                required
              />
            </div>
            <div className="w-full flex justify-start">
              <div className="scale-75 sm:scale-100">
                <ReCAPTCHA
                  sitekey="6Lf2nwIrAAAAAEr04f0EgVPjG532193vGFzyuCn7"
                  onChange={onChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-bold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
