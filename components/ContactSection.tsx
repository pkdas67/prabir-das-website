"use client";

import { useState, type FormEvent } from "react";

const interests = [
  "Business Analytics Program",
  "Statistical Methods for Research",
  "Financial Analytics",
  "Operations Research",
  "Data Science for Managers",
  "Research Methodology Workshop",
  "Customised Training Program",
  "Keynote / Panel Discussion",
  "Academic Collaboration",
  "Other",
];

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "pkdas@iift.edu",
    href: "mailto:pkdas@iift.edu",
  },
  {
    icon: "🎓",
    label: "Google Scholar",
    value: "View Profile",
    href: "https://scholar.google.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
    // Sign up at https://formspree.io to get a form ID
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          phone: "",
          interest: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full mx-auto" />
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Interested in training programs, collaborations, or speaking engagements?
            Reach out and Prof. Das will respond promptly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left: Contact Info */}
          <div className="lg:w-5/12">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#7C3AED] rounded-3xl p-8 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                <p className="text-white/70 text-sm mb-8">
                  Available for training programs, keynote addresses, and academic
                  collaborations.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white/60 text-xs">{item.label}</div>
                        <div className="text-white text-sm font-medium group-hover:underline">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-white/70 text-xs">
                  For corporate training enquiries, please mention your organization
                  name and approximate number of participants for a customised proposal.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-7/12">
            {status === "success" ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your enquiry. Prof. Das will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-[#2563EB] text-white rounded-full text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Company or university"
                      value={formData.organization}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Area of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select an area...</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Please describe your requirements, expected number of participants, preferred dates, etc."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                    Something went wrong. Please try again or email directly at{" "}
                    <a href="mailto:pkdas@iift.edu" className="font-medium underline">
                      pkdas@iift.edu
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 text-base shadow-lg shadow-blue-200"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Your information is kept confidential and will only be used to respond
                  to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
