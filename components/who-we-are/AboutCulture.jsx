"use client";

import { useState } from "react";
import Image from "next/image";
import { CULTURE_GALLERY } from "@/constants/who-we-are";

export default function AboutCulture() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Workshops", "Team Activities", "Client Meetings"];

  const filteredGallery =
    activeTab === "All"
      ? CULTURE_GALLERY
      : CULTURE_GALLERY.filter((item) => item.category === activeTab);

  return (
    <section className="bg-paper py-32 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
              // LIFE AT CODEZILLA
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black uppercase tracking-tighter leading-none">
              Our Culture & Environment
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 border-2 border-black font-bold text-xs uppercase tracking-widest transition-all ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery?.length > 0 ? (
            filteredGallery.map((item) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden border-2 border-black ${item.span}`}
              >
                <div className="relative h-64 w-full">
                  <Image
                    alt={item.category}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={item.image}
                    fill
                  />
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-primary text-white text-[10px] px-2 py-1 font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </section>
  );
}
