"use client";

import { useState } from "react";
import { trainingPrograms, programCategories, type TrainingProgram } from "@/data/training";

function CategoryBadge({ category }: { category: TrainingProgram["category"] }) {
  if (category === "open")
    return (
      <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
        Open Program
      </span>
    );
  if (category === "customized")
    return (
      <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
        Customized
      </span>
    );
  return (
    <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
      Open & Customized
    </span>
  );
}

export default function TrainingSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = trainingPrograms.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Open Programs")
      return p.category === "open" || p.category === "both";
    if (activeCategory === "Customized Programs")
      return p.category === "customized" || p.category === "both";
    return true;
  });

  return (
    <section id="training" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest">
            Training Programs
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Professional Development Programs
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full mx-auto" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base">
            Rigorously designed programs combining academic depth with practical insights.
            Available as open enrollment workshops or fully customised in-house programs
            tailored to your organization&apos;s needs.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 mt-8">
          {programCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtered.map((program) => (
            <div
              key={program.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-[#eff6ff] to-[#f5f3ff] p-6 border-b border-gray-100">
                <div className="text-4xl mb-3">{program.icon}</div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-base leading-snug">
                    {program.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <CategoryBadge category={program.category} />
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {program.duration}
                  </span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Topics Covered
                  </h4>
                  <ul className="space-y-1.5">
                    {program.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#2563EB] mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50">
                  <p className="text-xs text-gray-500 mb-3">
                    <span className="font-medium">Audience:</span>{" "}
                    {program.targetAudience}
                  </p>
                  <a
                    href="#contact"
                    className="block w-full text-center py-2.5 px-4 bg-[#2563EB] text-white text-sm font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors"
                  >
                    Enquire About This Program
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Training CTA */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#7C3AED] rounded-3xl p-8 sm:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a Customised Program?
          </h3>
          <p className="text-white/80 max-w-xl mx-auto mb-6 text-base">
            Every organization has unique learning needs. Prof. Das designs and delivers
            bespoke training programs tailored to your industry, challenges, and
            participant profiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-blue-50 transition-colors text-base"
            >
              Discuss Your Requirements
            </a>
            <a
              href="mailto:pkdas67@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-base"
            >
              📧 Email Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
