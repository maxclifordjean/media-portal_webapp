"use client";

import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const apps = [
  {
    title: "App",
    description: "Lorem ipsum",
    category: "featured",
  },
  {
    title: "App",
    description: "Lorem ipsum",
    category: "featured",
  },
  {
    title: "App",
    description: "Lorem ipsum",
    category: "featured",
  },
  {
    title: "C-Lab",
    description: "Services IT / Marketing sur mesure",
    category: "featured",
    highlight: true,
  },
  {
    title: "MediaManager",
    description: "Media Assets Management : pour vos vidéos publicitaires (SSAI) et contenus OTT, media analyze, transcrivez, transcodez, streamez de la préprod à la production et diffusion",
    category: "tools",
    highlight: true,
  },
  {
    title: "AdTrade",
    description: "Trading Desk : Audience planning & acquisition, boost digital channels during video momentums",
    category: "tools",
    highlight: true,
  },
  {
    title: "C-Catalog",
    description: "Gestion de catalogue produits : fiches produits, recherche intelligente et visuelle, Q&A coaching agents, plans box, catégorisation intélligente",
    category: "tools",
    highlight: true,
  },
  // {
  //   title: "App",
  //   description: "Lorem ipsum",
  //   category: "tools",
  // },
  {
    title: "SmartData",
    description: "Data collaboration & partnership",
    category: "services",
  },
  {
    title: "EventController",
    description: "Intelligent Video Timeline : sync media assets par chapitrage",
    category: "services",
  },
  {
    title: "C-Studio",
    description: "APP Builder : Micro app configurator & connectors, Quiz & newsletter generator",
    category: "tools",
  },
];

const newsItems = Array(10).fill("ITEM");

export default function AppsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === newsItems.length - 4 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? newsItems.length - 4 : prev - 1
    );
  };

  const featuredApps = apps.filter(app => app.category === "featured");
  const toolsApps = apps.filter(app => app.category === "tools");
  const servicesApps = apps.filter(app => app.category === "services");

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">APPS SUITES & OFFRES</h1>

      {/* Featured Apps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {featuredApps.map((app, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-red-800">{app.title}</h3>
            <p className="text-gray-500 mt-2">{app.description}</p>
          </Card>
        ))}
      </div>

      {/* Tools Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {toolsApps.map((app, index) => (
          <Card 
            key={index} 
            className={`p-6 hover:shadow-lg transition-shadow ${
              app.highlight ? 'bg-yellow-100' : ''
            }`}
          >
            <h3 className={`text-xl font-bold ${
              app.highlight ? 'text-red-800' : ''
            }`}>
              {app.title}
            </h3>
            <p className="text-gray-500 mt-2">{app.description}</p>
          </Card>
        ))}
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {servicesApps.map((app, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">{app.title}</h3>
            <p className="text-gray-500 mt-2">{app.description}</p>
          </Card>
        ))}
      </div>

      {/* Latest News Carousel */}
      {/* <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">ARTICLES RÉCENTS</h2>
        <div className="relative">
          <div className="flex items-center">
            <button 
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-300"
                style={{ 
                  transform: `translateX(-${currentSlide * 25}%)`,
                }}
              >
                {newsItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-none w-1/4 border p-4 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}