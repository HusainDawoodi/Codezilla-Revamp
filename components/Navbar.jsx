"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveDropdown(null); // Reset dropdowns on close
  };

  const toggleMobileDropdown = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  return (
    <nav className="fixed w-full z-50 bg-white border-b-2 border-black">
      <div className="w-full grid grid-cols-12 h-16 lg:h-20 items-center relative">
        {/* Logo Section */}
        <div className="col-span-10 lg:col-span-3 pl-6 flex items-center gap-4 cursor-pointer lg:border-r-2 border-black h-full bg-white hover:bg-orange-50 transition-colors group">
          <Link
            href="/"
            className="font-display font-bold text-3xl tracking-tighter text-black uppercase group-hover:text-primary transition-colors"
          >
            <Image
              src="/images/codezilla.svg"
              alt="Codezilla Logo"
              width={200}
              height={40}
              className="w-35 lg:w-40"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button - Visible on Small Screens */}
        <div className="col-span-2 lg:hidden flex justify-end pr-8">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-black hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-4xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:col-span-6 lg:flex justify-center items-center h-full w-full bg-white border-r-2 border-black px-4 relative">
          <div className="flex items-center justify-center gap-8 xl:gap-6 h-full w-full">
            <Link
              href="#"
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-black h-full flex items-center px-2"
            >
              Who we are
            </Link>
            <div className="group h-full flex items-center px-2 cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors text-black flex items-center gap-1">
                What we do{" "}
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </span>
              <div className="mega-menu absolute top-[80px] left-0 w-full min-w-[80vw] bg-black text-white border-t border-b-2 border-black shadow-2xl opacity-0 invisible transform -translate-x-[25%] transition-all duration-300 z-50 p-12">
                <div className="max-w-9xl grid grid-cols-12 gap-8">
                  <div className="col-span-4 border-r border-white/20 pr-8">
                    <h3 className="text-xl font-display font-bold text-primary mb-6 uppercase">
                      Digital Product
                      <br />
                      Development
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Rapid Prototyping
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Product Discovery
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="/ui-ux"
                        >
                          UI/UX Design Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="/web-development"
                        >
                          Web Development Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="/mobile-app-development"
                        >
                          Mobile App Development Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="/software-testing"
                        >
                          Software Testing Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="/data-science-ai"
                        >
                          Data Science & AI
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Software Architecture
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-4 border-r border-white/20 pr-8">
                    <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">
                      Dedicated Teams
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Software Architects
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Back-end Engineers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Front-end Engineers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          DevOps Engineers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Mobile Engineers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-4">
                    <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">
                      Codezilla
                      <br />
                      Accelerators
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Document AI
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Codezilla Flywheel
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Codezilla Guard:IAM
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Chatbot Delivery
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-span-3 pl-4">
                    <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">
                      System
                      <br />
                      Integration
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Salesforce
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Adobe Experience Cloud
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          Microsoft Dynamics 365
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-gray-400 hover:text-primary hover:pl-2 transition-all block"
                          href="#"
                        >
                          MuleSoft Integration
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
            <Link
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-black h-full flex items-center px-2"
              href="#"
            >
              Case studies
            </Link>
            <div className="group h-full flex items-center px-2 cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors text-black flex items-center gap-1">
                What we think{" "}
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </span>
              <div className="mega-menu absolute top-[80px] left-0 w-[100%] bg-black text-white border-t border-b-2 border-black shadow-2xl opacity-0 invisible transform  transition-all duration-300 z-50 p-12">
                <div className="max-w-7xl grid grid-cols-12 gap-8">
                  <div className="col-span-6 border-r border-white/20 pr-8 flex flex-col items-start">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 font-light">
                      radio_button_checked
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">
                      Life at Codezilla
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      What does life at Codezilla look like? Dive deep into our
                      company culture by reading more about our activities.
                    </p>
                    <Link
                      className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1"
                      href="#"
                    >
                      View Culture
                    </Link>
                  </div>
                  <div className="col-span-6 pr-8 px-8 flex flex-col items-start">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4 font-light">
                      insights
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">
                      Business Insights
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      Latest news. Hot topics. Learn more about the latest
                      industry trends from experts that drive digital-led
                      progress.
                    </p>
                    <Link
                      className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1"
                      href="#"
                    >
                      Read Blog
                    </Link>
                  </div>
                  {/* <div className="col-span-4 pl-8 flex flex-col items-start">
                                        <span className="material-symbols-outlined text-primary text-5xl mb-4 font-light">
                                            volunteer_activism
                                        </span>
                                        <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">
                                            CSR Initiatives
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                            Giving back to the community is one of the core values of
                                            our company. Dive into the activities we have organized.
                                        </p>
                                        <Link
                                            className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1"
                                            href="#"
                                        >
                                            Our Impact
                                        </Link>
                                    </div> */}
                </div>
              </div>
            </div>
            <Link
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-black h-full flex items-center px-2"
              href="#"
            >
              Career
            </Link>
          </div>
        </div>

        {/* Desktop Call to Action */}
        <div className="hidden lg:col-span-3 lg:flex justify-end items-center h-full bg-white px-5">
          <Link
            href="#"
            className="inline-flex items-center gap-0 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#E65100] shadow-[0_4px_12px_rgba(255,109,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,109,0,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Schedule Call</span>
            <span className="material-symbols-outlined text-xs">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed inset-0 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute z-[99999999] top-0 right-0 w-[85vw] md:w-[60vw] h-full bg-black shadow-2xl overflow-y-auto duration-300 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link
                href="/"
                className="font-display font-bold text-2xl tracking-tighter text-black uppercase"
                onClick={toggleMobileMenu}
              >
                <Image
                  src="/images/white-logo.svg"
                  alt="Codezilla Logo"
                  width={150}
                  height={30}
                  className="w-40"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-white hover:text-primary"
              >
                <span className="material-symbols-outlined text-3xl">
                  close
                </span>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 py-8 px-6 space-y-6">
              <Link
                href="#"
                onClick={toggleMobileMenu}
                className="block text-xl font-display font-bold uppercase text-white hover:text-primary"
              >
                Who we are
              </Link>

              {/* What we do Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown(1)}
                  className="flex items-center justify-between w-full text-xl font-display font-bold uppercase text-white hover:text-primary"
                >
                  <span>What we do</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${mobileActiveDropdown === 1 ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`mt-4 space-y-6 pl-4 border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${mobileActiveDropdown === 1 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 invisible !mt-0"}`}
                >
                  {/* Sub-sections */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      Digital Product Development
                    </h4>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Rapid Prototyping
                    </Link>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Product Discovery
                    </Link>
                    <Link
                      href="/ui-ux"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      UI/UX Design Services
                    </Link>
                    <Link
                      href="/mobile-app-development"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      href="/web-development"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Web Development
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      Dedicated Teams
                    </h4>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Software Architects
                    </Link>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Back-end Engineers
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      Codezilla Accelerators
                    </h4>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      codezilla-flywheel
                    </Link>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      codezilla Guard:IAM
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      System Integration
                    </h4>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Salesforce
                    </Link>
                    <Link
                      href="#"
                      className="block text-sm text-gray-200 hover:text-black"
                    >
                      Microsoft Dynamics 365
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                onClick={toggleMobileMenu}
                className="block text-xl font-display font-bold uppercase text-white hover:text-primary"
              >
                Case Studies
              </Link>

              {/* What we think Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown(2)}
                  className="flex items-center justify-between w-full text-xl font-display font-bold uppercase text-white hover:text-primary"
                >
                  <span>What we think</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${mobileActiveDropdown === 2 ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`mt-4 space-y-6 pl-4 border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${mobileActiveDropdown === 2 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible !mt-0"}`}
                >
                  <Link
                    href="#"
                    className="block text-sm font-bold text-gray-200 hover:text-primary"
                  >
                    Life at Codezilla
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm font-bold text-gray-200 hover:text-primary"
                  >
                    Business Insights
                  </Link>
                  <Link
                    href="#"
                    className="block text-sm font-bold text-gray-200 hover:text-primary"
                  >
                    CSR Initiatives
                  </Link>
                </div>
              </div>

              <Link
                href="#"
                onClick={toggleMobileMenu}
                className="block text-xl font-display font-bold uppercase text-white hover:text-primary"
              >
                Career
              </Link>
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-gray-100">
              <Link
                href="#"
                className="flex w-full items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#E65100] transition-colors"
              >
                <span>Schedule Call</span>
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
