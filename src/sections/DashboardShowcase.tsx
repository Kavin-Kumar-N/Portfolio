"use client";

import { useState } from "react";
import Image from "next/image";

const dashboards = [
  {
    title: "Executive Overview",
    image: "/projects/olist/Executive-Overview.png",
  },
  {
    title: "Sales Analysis",
    image: "/projects/olist/Sales-Analysis.png",
  },
  {
    title: "Customer Analysis",
    image: "/projects/olist/Customer-Analysis.png",
  },
  {
    title: "Seller Performance",
    image: "/projects/olist/Seller-Performance.png",
  },
  {
    title: "Delivery Analysis",
    image: "/projects/olist/Delivery-Analysis.png",
  },
  {
    title: "Data Model",
    image: "/projects/olist/Data-Model.png",
  },
];

export default function DashboardShowcase() {
  const [selectedDashboard, setSelectedDashboard] = useState<
    (typeof dashboards)[0] | null
  >(null);

  return (
    <section id="dashboards" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Dashboard Showcase</h2>

      <p className="text-gray-400 mb-10">
        Interactive Power BI dashboards developed for the Olist E-Commerce
        Analytics Platform.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {dashboards.map((dashboard) => (
          <div
            key={dashboard.title}
            className="
              glass-card
              border
              border-gray-800
              rounded-2xl
              overflow-hidden
              cursor-pointer

              hover:border-blue-500
              hover:bg-blue-500/5
              hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
              hover:-translate-y-1

              transition-all
              duration-300
            "
            onClick={() => setSelectedDashboard(dashboard)}
          >
            <Image
              src={dashboard.image}
              alt={dashboard.title}
              width={1200}
              height={700}
              className="w-full h-auto"
            />

            <div className="p-4">
              <h3 className="font-semibold">{dashboard.title}</h3>

              <p className="text-sm text-gray-400 mt-1">Click to enlarge</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDashboard && (
        <div
          className="
            fixed
            inset-0
            bg-black/90
            z-50
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setSelectedDashboard(null)}
        >
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="
                absolute
                -top-12
                right-0
                text-white
                text-3xl
                hover:text-blue-400
              "
              onClick={() => setSelectedDashboard(null)}
            >
              ×
            </button>

            <Image
              src={selectedDashboard.image}
              alt={selectedDashboard.title}
              width={1800}
              height={1000}
              className="
                w-full
                h-auto
                rounded-xl
              "
            />

            <h3 className="text-center text-xl font-semibold mt-4">
              {selectedDashboard.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
