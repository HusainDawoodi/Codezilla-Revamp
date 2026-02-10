"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./ui/Button";

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

  const digitalProductDevelopment = [
    {
      title: "Rapid Productivity",
      description: "Accelerate delivery with lean workflows and automation.",
      icon: "monitoring",
      link: "/rapid-productivity",
    },
    {
      title: "Product Discovery",
      description:
        "Validate ideas through research, prototyping, and technical planning.",
      icon: "lightbulb",
      link: "/product-discovery",
    },
    {
      title: "UI/UX Design Services",
      description: "Design intuitive, conversion-driven digital experiences.",
      icon: "design_services",
      link: "/ui-ux",
    },
    {
      title: "Web Development Services",
      description: "Build secure, scalable, high-performance web platforms.",
      icon: "javascript",
      link: "/web-development",
    },
    {
      title: "Mobile App Development Services",
      description: "Develop robust mobile apps for iOS and Android.",
      icon: "devices",
      link: "/mobile-app-development",
    },
    {
      title: "Data Science & AI",
      description:
        "Turn data into intelligent automation and predictive insights.",
      icon: "hub",
      link: "/data-science-ai",
    },
    {
      title: "DevOps & Cloud",
      description: "Enable scalable infrastructure and reliable deployments.",
      icon: "cloud",
      link: "/devops-cloud",
    },
    {
      title: "Software Architecture",
      description: "Design resilient systems optimized for scale and security.",
      icon: "verified",
      link: "/software-architecture",
    },
  ];

  const DedicatedTeams = [
    {
      title: "Hire Software Architects",
      description: "Lead scalable system design and technical strategy.",
      icon: "groups",
      link: "/hire-software-architects",
    },
    {
      title: "Hire Back-End Engineers",
      description: "Build secure APIs and server-side logic.",
      icon: "terminal",
      link: "/hire-back-end-engineers",
    },
    {
      title: "Hire Front-End Engineers",
      description: "Create responsive, modern user interfaces.",
      icon: "javascript",
      link: "/hire-front-end-engineers",
    },
    {
      title: "Hire DevOps Engineers",
      description: "Automate infrastructure and ensure system reliability.",
      icon: "settings_suggest",
      link: "/hire-devops-engineers",
    },
    {
      title: "Hire Mobile Engineers",
      description: "Develop scalable native and cross-platform mobile apps.",
      icon: "devices",
      link: "/mobile-app-development",
    },
  ];
  const codezillaAccelerators = [
    {
      title: "Document AI",
      description: "CI/CD, cloud infrastructure, and automation.",
      icon: "psychology",
      link: "/document-ai",
    },
    {
      title: "Codezilla Flywheel",
      description: "CI/CD, cloud infrastructure, and automation.",
      icon: "security",
      link: "/codezilla-flywheel",
    },
    {
      title: "Codezilla Guard:IAM",
      description: "CI/CD, cloud infrastructure, and automation.",
      icon: "verified_user",
      link: "/codezilla-guard-iam",
    },
    {
      title: "Chatbot Delivery",
      description: "CI/CD, cloud infrastructure, and automation.",
      icon: "chat",
      link: "/chatbot-delivery",
    },
  ];
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
              href="/who-we-are"
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-black h-full flex items-center px-2"
            >
              Who we are
            </Link>
            <div class="mega-menu-trigger h-full flex items-center px-2 cursor-pointer group">
              <span class="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors text-black flex items-center gap-1">
                What we do
                <span class="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </span>
              <div class="mega-menu-panel fixed top-[80px] left-0 w-full glass-morphism opacity-0 invisible -translate-y-2 transition-all duration-300 ease-out z-[110] p-10 lg:px-16 border-t border-white/10 !bg-black">
                <div class="max-w-[1600px] mx-auto grid grid-cols-12 gap-8">
                  <div class="col-span-9 grid grid-cols-4 xl:grid-cols-4 gap-6">
                    <div class="space-y-4 !col-span-2">
                      <h3 class="text-sm font-display font-extrabold text-primary uppercase tracking-[0.2em] border-b border-primary/20 pb-2 mb-4">
                        Digital Product Development
                      </h3>
                      <div className="flex gap-4">
                        <div class="space-y-1 ">
                          {digitalProductDevelopment
                            .slice(0, 4)
                            .map((item, index) => (
                              <Link href={item?.link} key={item?.title}>
                                <div class="library-item">
                                  <div class="flex items-center gap-2 mb-0.5">
                                    <span class="material-symbols-outlined text-sm duotone-icon item-icon">
                                      {item?.icon}
                                    </span>
                                    <span class="!text-sm font-bold text-gray-300 uppercase tracking-wide item-title">
                                      {item?.title}
                                    </span>
                                  </div>
                                  <p class="text-xs text-gray-500 leading-tight">
                                    {item?.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                        </div>
                        <div class="space-y-1 ">
                          {digitalProductDevelopment
                            .slice(4)
                            .map((item, index) => (
                              <Link href={item?.link} key={item?.title}>
                                <div class="library-item">
                                  <div class="flex items-center gap-2 mb-0.5">
                                    <span class="material-symbols-outlined text-sm duotone-icon item-icon">
                                      {item?.icon}
                                    </span>
                                    <span class="!text-sm font-bold text-gray-300 uppercase tracking-wide item-title">
                                      {item?.title}
                                    </span>
                                  </div>
                                  <p class="text-xs text-gray-500 leading-tight">
                                    {item?.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div class="space-y-4 !col-span-1.5">
                      <h3 class="text-sm font-display font-extrabold text-primary uppercase tracking-[0.2em] border-b border-primary/20 pb-2 mb-4">
                        Dedicated Teams
                      </h3>
                      <div class="space-y-1">
                        {DedicatedTeams.map((item, index) => (
                          <Link href={item?.link} key={item?.title}>
                            <div class="library-item">
                              <div class="flex items-center gap-2 mb-0.5">
                                <span class="material-symbols-outlined text-sm duotone-icon item-icon">
                                  {item?.icon}
                                </span>
                                <span class="!text-sm font-bold text-gray-300 uppercase tracking-wide item-title">
                                  {item?.title}
                                </span>
                              </div>
                              <p class="text-xs text-gray-500 leading-tight">
                                {item?.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div class="space-y-4 col-span-1.5">
                      <h3 class="text-sm font-display font-extrabold text-primary uppercase tracking-[0.2em] border-b border-primary/20 pb-2 mb-4">
                        Codezilla Accelerators
                      </h3>
                      <div class="space-y-1">
                        {codezillaAccelerators.map((item, index) => (
                          <Link href={item?.link} key={item?.title}>
                            <div class="library-item">
                              <div class="flex items-center gap-2 mb-0.5">
                                <span class="material-symbols-outlined text-sm duotone-icon item-icon">
                                  {item?.icon}
                                </span>
                                <span class="text-sm font-bold text-gray-300 uppercase tracking-wide item-title">
                                  {item?.title}
                                </span>
                              </div>
                              <p class="text-xs text-gray-500 leading-tight">
                                {item?.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div class="col-span-3 border-l border-white/10 pl-8">
                    <div class="h-full flex flex-col justify-between">
                      <div>
                        <h3 class="text-xs font-bold text-gray-200 uppercase tracking-[0.3em] mb-6">
                          Featured Success
                        </h3>
                        <div class="group/case relative rounded-[4px] overflow-hidden bg-white/5 border border-white/10 mb-6">
                          <img
                            alt="Project Success"
                            class="w-full aspect-[16/10] object-cover opacity-60 group-hover/case:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1nJOqy6BYeaM-mIljKZ7L-qyKz64D5b0H-JEkkkyCwu_HgyWJRQKD5COW5RIdZu71nIRQdoRY90RN9VYUWafl2HKQxULPGNr6EFpVHnEUa164PXTj7GNRf_RyxQIEI5Q35c0IOuyFUJ0ZI_q3K5QBOGKe2U8PrI4ea22QFqu-V9GyodWfAF3W0CAIvbhKPJ2_Hif89lDLRisQ0IbSm1Ct2-HwlsOuVqjm8OxTMnPqbcGWNx3hOgc7r3u_xXhady5bO7watjQ_tlk"
                          />
                          <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                          <div class="absolute bottom-4 left-4">
                            <span class="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 border border-primary/20 mb-2 inline-block">
                              FINTECH LEADERS
                            </span>
                            <h4 class="text-white font-bold text-sm">
                              Next-Gen Neobank Architecture
                            </h4>
                          </div>
                        </div>
                        <p class="text-sm text-gray-400 leading-relaxed mb-6">
                          Built a high-performance banking core serving 2M+
                          active monthly users with 99.99% uptime.
                        </p>
                        <a
                          class="inline-flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest hover:text-white transition-colors"
                          href="#"
                        >
                          View all work
                          <span class="material-symbols-outlined text-sm">
                            arrow_right_alt
                          </span>
                        </a>
                      </div>
                      {/* <div class="mt-8 relative group/search">
                        <input
                          class="w-full bg-white/5 border border-white/10 rounded-[4px] py-2.5 pl-4 pr-10 text-[11px] text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                          placeholder="Find a service..."
                          type="text"
                        />
                        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg group-focus-within/search:text-primary transition-colors">
                          search
                        </span>
                      </div> */}
                    </div>
                  </div>
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
          <Button variant="primary" size="sm" href="#" icon="arrow_forward">
            Schedule Call
          </Button>

          {/* <Link
            href="#"
            className="inline-flex items-center gap-0 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#E65100] shadow-[0_4px_12px_rgba(255,109,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,109,0,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Schedule Call</span>
            <span className="material-symbols-outlined text-xs">
              arrow_forward
            </span>
          </Link> */}
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
                href="/who-we-are"
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
                  className={`mt-4 space-y-6 pl-4 border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${mobileActiveDropdown === 1 ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 invisible !mt-0"}`}
                >
                  {/* Digital Product Development */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      Digital Product Development
                    </h4>
                    {digitalProductDevelopment.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        onClick={toggleMobileMenu}
                        className="block text-sm text-gray-200 hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  {/* Dedicated Teams */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      Dedicated Teams
                    </h4>
                    {DedicatedTeams.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        onClick={toggleMobileMenu}
                        className="block text-sm text-gray-200 hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  {/* Codezilla Accelerators */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      Codezilla Accelerators
                    </h4>
                    {codezillaAccelerators.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        onClick={toggleMobileMenu}
                        className="block text-sm text-gray-200 hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-primary uppercase">
                      System Integration
                    </h4>
                    <Link
                      href="#"
                      onClick={toggleMobileMenu}
                      className="block text-sm text-gray-200 hover:text-primary transition-colors"
                    >
                      Salesforce
                    </Link>
                    <Link
                      href="#"
                      onClick={toggleMobileMenu}
                      className="block text-sm text-gray-200 hover:text-primary transition-colors"
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
