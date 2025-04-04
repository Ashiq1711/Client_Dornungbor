import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "../../assets/Images/logo.png";
import { TwitterIcon } from "@/components/common/icons/TwitterIcon";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 md:pt-20 ">
      <div className="section-padding-x">
        <div className="text-[#E2E2E2] flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
          {/* Left Section */}
          <div className="lg:w-1/3">
            <img src={logo} alt="Company Logo" className="w-32 md:w-40" />
            <p className="text-gray-400 mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Pharetra aliquet id
              faucibus adipiscing aliquam in et. Senectus pellentesque orci duis
              mattis egestas semper. Ut odio quam eget sed nisl ultricies.
              Iaculis aenean nunc enim quis accumsan sit. Fermentum gravida dui
              posuere sed facilisis est eros maecenas. Vestibulum egestas
              consectetur eu tincidunt ac in fermentum. Ornare eget urna lorem
              viverra hendrerit. Amet sed duis euismod vitae ipsum. At
              adipiscing feugiat amet euismod turpis ac imperdiet massa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Us */}
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-500 pb-2">
                Contact us
              </h2>
              <ul className="mt-4 space-y-5 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">
                  Home
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  About
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Developers
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Enterprises
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Applications
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Marketplace
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Blog
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Contact
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-500 pb-2">
                Resources
              </h2>
              <ul className="mt-4 space-y-5 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">
                  Marketplace
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  API Docs
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Blog
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-500 pb-2">
                Contact
              </h2>
              <div className="mt-4 space-y-5 text-[#E2E2E2] text-sm">
                <p className="hover:text-white cursor-pointer transition">
                  Info@zerah.ai
                </p>
                <p className="hover:text-white cursor-pointer transition">
                  +971 554 968 139
                </p>
                <p className="hover:text-white cursor-pointer transition">
                  Meydan Free Zone
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons - Moved below on mobile */}
          <div className="lg:flex lg:flex-col lg:space-y-4">
            <h2 className="text-lg font-semibold border-b border-gray-500 pb-2">
              Connect
            </h2>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full cursor-pointer border hover:bg-black duration-300 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full cursor-pointer border hover:bg-black duration-300 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full cursor-pointer border hover:bg-black duration-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full cursor-pointer border hover:bg-black duration-300 hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 group bg-white text-black rounded-full cursor-pointer border hover:bg-black duration-300 hover:text-white"
              >
                <svg
                  width="16"
                  className=" group-hover:fill-white "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-600 mt-8 md:mt-6 py-6 text-center text-[#767676] text-xs">
          © 2025 ZERAH. - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
