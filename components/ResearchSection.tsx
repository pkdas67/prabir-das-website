"use client";

import { useState } from "react";
import {
  publications,
  researchAreas,
  totalPublications,
  totalCitations,
} from "@/data/publications";

export default function ResearchSection() {
  const [activeArea, setActiveArea] = useState("All");

  const filtered =
    activeArea === "All"
      ? publications
      : publications.filter((p) => p.area === activeArea);

  return (
    <section id="research" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#7C3AED] uppercase tracking-widest">
            Research
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Publications & Research
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full mx-auto" />
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { value: `${totalPublications}+`, label: "Research Papers", icon: "📄" },
            { value: `${totalCitations}+`, label: "Total Citations", icon: "🔗" },
            { value: "5+", label: "Research Areas", icon: "🗂️" },
            { value: "25+", label: "Years of Research", icon: "📅" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm"
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Scholar CTA */}
        <div className="flex justify-center mb-10">
          <a
            href="https://scholar.google.com/citations?hl=en&user=CeOx8GUAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2563EB] border border-[#2563EB] px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
            </svg>
            View Google Scholar Profile
          </a>
        </div>

        {/* Area Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {researchAreas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveArea(area)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeArea === area
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB]"
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filtered.map((pub) => (
            <div
              key={pub.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                    pub.area === "Statistics"
                      ? "bg-blue-100 text-blue-700"
                      : pub.area === "Machine Learning & AI"
                      ? "bg-purple-100 text-purple-700"
                      : pub.area === "Finance"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {pub.area}
                </span>
                <span className="text-gray-400 text-sm">{pub.year}</span>
              </div>

              <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 flex-1">
                {pub.title}
              </h3>

              <p className="text-gray-500 text-xs mb-1 italic">{pub.authors}</p>
              <p className="text-[#2563EB] text-xs font-medium mb-3">
                {pub.journal}
              </p>

              {pub.doi && (
                <a
                  href={pub.doi.startsWith("http") ? pub.doi : `https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-[#2563EB] transition-colors mt-auto pt-3 border-t border-gray-50 flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  DOI: {pub.doi.replace("https://doi.org/", "")}
                </a>
              )}

              {pub.citations !== undefined && (
                <div className="flex items-center gap-1 text-xs text-gray-400 mt-auto pt-3 border-t border-gray-50">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  {pub.citations} citations
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note about more papers */}
        <div className="text-center bg-blue-50 border border-blue-100 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm">
            <strong>Showing {filtered.length} of {totalPublications}+ publications.</strong>{" "}
            Visit Prof. Das&apos; Google Scholar profile for a complete, up-to-date list of
            all publications and citation metrics.
          </p>
          <a
            href="https://scholar.google.com/citations?hl=en&user=CeOx8GUAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#2563EB] hover:underline"
          >
            View All Publications on Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
}
