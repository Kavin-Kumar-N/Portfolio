"use client";

import { useState } from "react";
import DashboardShowcase from "@/sections/DashboardShowcase";
import Image from "next/image";
import Link from "next/link";

export default function OlistProject() {
  const [showArchitecture, setShowArchitecture] = useState(false);
  return (
    <main className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        {/* Header */}
        <section>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Portfolio
          </Link>

          <h1 className="text-5xl font-bold mt-8">
            Olist E-Commerce Analytics Platform
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            End-to-end analytics platform built using MySQL, Python, Pandas,
            Excel, Power BI, DAX, Power Query, GitHub, and modern web
            technologies to analyze e-commerce performance and business
            operations.
          </p>
        </section>
        {/* Project Overview */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Project Overview</h2>

          <p className="mt-6 text-gray-300 leading-8">
            This project analyzes the Brazilian Olist E-Commerce dataset
            containing over 100,000 orders to uncover customer behavior, sales
            performance, seller effectiveness, and delivery efficiency.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            The project follows a complete analytics workflow including database
            design, data cleaning, feature engineering, data modeling, dashboard
            development, and business reporting.
          </p>
        </section>
        {/* Business Problem */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Business Problem</h2>

          <p className="mt-6 text-gray-300 leading-8">
            E-commerce businesses generate large volumes of transactional data,
            making it difficult to monitor sales performance, customer behavior,
            delivery operations, and seller performance.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            This project transforms raw transactional data into actionable
            business insights through SQL, Python, and Power BI analytics.
          </p>
        </section>
        {/* Business Questions */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Business Questions</h2>

          <ul className="mt-6 space-y-4 text-gray-300">
            <li>• Which product categories generate the highest revenue?</li>
            <li>• Which states experience delivery delays?</li>
            <li>• How do delivery delays impact customer reviews?</li>
            <li>• Which sellers contribute most to revenue?</li>
            <li>• Which months generate the highest sales?</li>
          </ul>
        </section>
        {/* Dataset Overview */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Dataset Overview</h2>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div
              className="
  glass-card
  p-4
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              Orders Dataset
            </div>

            <div
              className="
  glass-card
  p-4
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              Customers Dataset
            </div>

            <div
              className="
  glass-card
  p-4
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              Products Dataset
            </div>

            <div
              className="
  glass-card
  p-4
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              Reviews Dataset
            </div>
          </div>
        </section>
        {/* Project Highlights */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Project Highlights</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className="
  glass-card
  p-6
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              <h3 className="text-3xl font-bold text-blue-400">100K+</h3>
              <p className="mt-2 text-gray-300">Orders Analyzed</p>
            </div>

            <div
              className="
  glass-card
  p-6
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              <h3 className="text-3xl font-bold text-blue-400">99K+</h3>
              <p className="mt-2 text-gray-300">Order Items</p>
            </div>

            <div
              className="
  glass-card
  p-6
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              <h3 className="text-3xl font-bold text-blue-400">30K+</h3>
              <p className="mt-2 text-gray-300">Customers</p>
            </div>

            <div
              className="
  glass-card
  p-6
  rounded-xl
  text-center

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              <h3 className="text-3xl font-bold text-blue-400">20+</h3>
              <p className="mt-2 text-gray-300">KPIs Tracked</p>
            </div>
          </div>
        </section>
        {/* Architecture */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Architecture</h2>

          <div className="section-divider"></div>

          <Image
            src="/projects/olist/Data-Model.png"
            alt="Olist Architecture"
            width={1600}
            height={900}
            onClick={() => setShowArchitecture(true)}
            className="
      mt-8
      rounded-xl
      border
      border-gray-800

      cursor-pointer

      hover:border-blue-500
      hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]

      transition-all
      duration-300
    "
          />

          <p className="text-gray-300 mt-4">Click image to enlarge</p>
        </section>
        {/* Tech Stack */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Tech Stack</h2>

          <div className="flex flex-wrap gap-4 mt-8">
            {[
              "MySQL",
              "Python",
              "Pandas",
              "Excel",
              "Power BI",
              "DAX",
              "Power Query",
              "GitHub",
              "Next.js",
            ].map((tool) => (
              <span
                key={tool}
                className="
  border
  border-gray-700
  bg-gray-900/40

  px-4
  py-2
  rounded-lg

  hover:border-blue-500
  hover:bg-blue-500/10
  hover:-translate-y-1

  transition-all
  duration-300
"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
        {/* Dashboards */}
        <section className="mt-20">
          <DashboardShowcase />
        </section>
        {/* Insights */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Key Insights</h2>

          <div className="mt-8 space-y-4">
            <div
              className="
  glass-card
  p-4
  rounded-xl

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              Delayed deliveries negatively impact customer ratings.
            </div>

            <div
              className="
  glass-card
  p-4
  rounded-xl

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              São Paulo generates the highest revenue and order volume.
            </div>

            <div
              className="
  glass-card
  p-4
  rounded-xl

  hover:border-blue-500
  hover:bg-blue-500/5
  hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
  hover:-translate-y-1

  transition-all
  duration-300
"
            >
              A small percentage of sellers contribute a significant share of
              revenue.
            </div>
          </div>
        </section>
        {/* GitHub */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Source Code</h2>

          <a
            href="https://github.com/Kavin-Kumar-N/olist-ecommerce-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            mt-6
            bg-blue-500
            hover:bg-blue-600
            transition
            px-6
            py-3
            rounded-lg
          "
          >
            View GitHub Repository
          </a>
        </section>
        {showArchitecture && (
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
            onClick={() => setShowArchitecture(false)}
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
                onClick={() => setShowArchitecture(false)}
              >
                ×
              </button>

              <Image
                src="/projects/olist/Data-Model.png"
                alt="Architecture"
                width={2000}
                height={1200}
                className="
          w-full
          h-auto
          rounded-xl
        "
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
