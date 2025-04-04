import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import early from "@/assets/images/early.png";
const ContactForm = () => {

  function onChange(value) {
    console.log("Captcha value:", value);
  }
    // const [formData, setFormData] = useState({
    //     companyName: '',
    //     email: '',
    //     message: ''
    //   });
    
    //   const handleChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', formData);
    //   };
    
  return (
    <section id='partnership' className='bg-secondary'>

    <div className='section-padding-x flex flex-col items-center py-10 md:py-20 xxl:py-[120px]'>

<div className='flex flex-col lg:flex-row justify-between w-full gap-4 sm:gap-8 mt-6 sm:mt-10'>
<div className='flex flex-col w-full lg:w-1/2'>
  <img src={early} alt="" />
</div>
<div className="flex flex-col w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Partner with ZERAH</h2>
      <form 
    //   onSubmit={handleSubmit}
       className="space-y-4 sm:space-y-6 md:space-y-10">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Company Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="companyName"
            // value={formData.companyName}
            // onChange={handleChange}
            placeholder="Enter your company name"
            className="w-full p-3 bg-[#EBEBEB] rounded-lg outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">*</span></label>
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
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            placeholder="Enter your message..."
            className="w-full p-3 bg-[#EBEBEB] rounded-lg outline-none"
            rows="4"
            required
          ></textarea>
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
    </section>
  )
}

export default ContactForm