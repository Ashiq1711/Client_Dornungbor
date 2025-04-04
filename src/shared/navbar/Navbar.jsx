import React, { useState, useEffect } from "react";
import logo from "@/assets/Images/logo.png";
import Button from "@/components/common/Button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const navItems = [
  {
    label: "Home",
    link: "/#home",
  },
  {
    label: "About",
    link: "/#about",
  },
  {
    label: "Developers",
    link: "/#developers",
  },
  {
    label: "Enterprises",
    link: "/#enterprises",
  },
  {
    label: "Applications",
    link: "/#interaction",
  },
  {
    label: "Marketplace",
    link: "/#marketplace",
  },
  {
    label: "Stores",
    link: "/#store",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      for (const item of navItems) {
        const sectionId = item.link.replace("/#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to check the current section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-primary shadow-lg" : "bg-transparent"
        } bg-opacity-90 text-white py-4 xs:py-5 sm:py-6 section-padding-x flex justify-between items-center`}
      >
        {/* Logo */}
        <HashLink
          to={"#home"}
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "end" })
          }
          className="text-2xl font-bold tracking-wide"
        >
          <img src={logo} alt="Logo" className="h-8  xl:h-10" />
        </HashLink>

        {/* Desktop Navigation Links */}
        {/* <ul className="hidden xmd:flex space-x-4 xlg:space-x-8 text-lg lg:text-[20px]">
          {navItems.map((item, index) => (
            <li key={index}>
              <HashLink
                to={item.link}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="relative cursor-pointer font-semibold group"
              >
                <span className="text-[#C0C0C0] hover:text-white text-sm xmd:text-base xlg:text-sm xl:text-base duration-300">
                  {item.label}
                </span>

                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </HashLink>
            </li>
          ))}
        </ul> */}

        <ul className="hidden xmd:flex space-x-4 xlg:space-x-8 text-lg lg:text-[20px]">
          {navItems.map((item, index) => {
            const sectionId = item.link.replace("/#", "");
            return (
              <li key={index}>
                <HashLink
                  to={item.link}
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="relative cursor-pointer font-semibold group"
                >
                  <span
                    className={`${
                      activeSection === sectionId
                        ? "text-white"
                        : "text-[#C0C0C0]"
                    } hover:text-white text-sm xmd:text-base xlg:text-sm xl:text-base duration-300`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full`}
                  ></span>
                </HashLink>
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden xmd:block items-center space-x-4">
          <HashLink
            to={"#earlyaccess"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
            className="bg-white hover:bg-[#E5E5F0] text-primary !px-3 py-2 xlg:px-6 xl:py-3 text-sm xl:text-base cursor-pointer rounded-lg font-medium shadow-xmd duration-300"
          >
            Early Access
          </HashLink>
          <HashLink
            to={"#partnership"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
            className="bg-white hover:bg-[#E5E5F0] text-primary !px-3 py-2 xlg:px-6 xl:py-3 text-sm xl:text-base cursor-pointer rounded-lg font-medium shadow-xmd duration-300"
          >
            Partnership
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xmd:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary text-white z-40 pt-20 px-4 transition-all duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xmd:hidden`}
      >
        <ul className="flex flex-col space-y-3 xxs:text-lg sm:text-xl">
          {navItems.map((item, index) => (
            <li key={index}>
              <HashLink
                to={item.link}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                onClick={closeMobileMenu}
                className="block py-2 hover:text-[#C0C0C0]  duration-300 border-b border-gray-700"
              >
                {item.label}
              </HashLink>
            </li>
          ))}
          <div className="flex items-center flex-wrap gap-2 xs:gap-4">
            <li>
              <HashLink
                to={"#earlyaccess"}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
                onClick={closeMobileMenu}
                className="block mt-2 bg-white text-primary px-6 py-2 rounded-lg font-medium text-center xxs:text-lg sm:text-xl"
              >
                Early Access
              </HashLink>
            </li>
            <li>
              <HashLink
                to={"#partnership"}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
                onClick={closeMobileMenu}
                className="block mt-2 bg-white text-primary px-6 py-2 rounded-lg font-medium text-center xxs:text-lg sm:text-xl"
              >
                Partnership
              </HashLink>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
