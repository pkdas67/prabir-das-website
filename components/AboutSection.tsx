import Image from "next/image";

const expertise = [
  "Statistics & Probability",
  "Machine Learning & AI",
  "Data Science",
  "Financial Risk Management",
  "Business Analytics",
  "Econometrics",
  "Operations Research",
  "Forecasting & Prediction",
  "Research Methodology",
  "Digital Finance & FinTech",
];

const highlights = [
  {
    icon: "🎓",
    title: "Academic Leadership",
    text: "Professor & Head, Executive Management Programmes Division at IIFT, Kolkata Campus — serving since 2007 with over 30 years of combined academic, research, and corporate experience.",
  },
  {
    icon: "🔬",
    title: "Prolific Researcher",
    text: "50+ publications spanning peer-reviewed journals (Scopus/ABDC/WoS), book chapters (Springer, Bloomsbury), and conference proceedings. 12+ papers and 7 book chapters in the last five years alone.",
  },
  {
    icon: "💼",
    title: "Industry & Government Engagement",
    text: "Provided consultancy to GeM (Ministry of Commerce), IOCL, STAREBS, and ICAI. Formerly Research Analyst & Head of Research Division at RR Financial Consultants, New Delhi.",
  },
  {
    icon: "🏛️",
    title: "Training & Development",
    text: "Designed and delivered numerous MDPs on Business Analytics, Data Science, and Financial Risk Management for Government of West Bengal, ICAI, and leading corporate organizations.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest">
            About
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Meet the Professor
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <div className="lg:w-1/2">
            {/* Profile card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-3xl p-8 mb-8">
              <div className="flex items-start gap-5">
                <Image
                  src="/prabir-das-website/images/prabir-kumar-das.jpg"
                  alt="Prof. Prabir Kumar Das"
                  width={600}
                  height={500}
                  className="w-20 h-20 rounded-2xl object-cover object-top flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Prof. Prabir Kumar Das
                  </h3>
                  <p className="text-[#2563EB] font-medium mt-0.5">
                    PhD · Professor & Head (EMP Division)
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Statistics, Data Science & AI · Financial Risk Management
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Prof. Prabir Kumar Das (P.K. Das) is a <strong>Professor and Head of the
                  Executive Management Programmes Division</strong> at the Indian Institute
                  of Foreign Trade (IIFT), Kolkata Campus, where he has been serving since 2007.
                </p>
                <p>
                  With over <strong>30 years of combined experience</strong> across academia,
                  government research (ICAR — 11 years as Scientist/Senior Scientist), and
                  the corporate sector (RR Financial Consultants, New Delhi), Prof. Das brings
                  a rare interdisciplinary perspective to his work.
                </p>
                <p>
                  His core areas of expertise include <strong>Statistics, Machine Learning &
                  AI, Data Science, Econometrics, Financial Risk Management,</strong> and{" "}
                  <strong>Business Analytics</strong>. He earned his PhD in Biostatistics from
                  the Indian Agricultural Statistics Research Institute (IARI), New Delhi.
                </p>
                <p>
                  He has published <strong>50+ research contributions</strong> in reputed
                  national and international journals (Scopus/ABDC/WoS) and has contributed
                  book chapters in peer-reviewed volumes published by{" "}
                  <strong>Springer Nature and Bloomsbury</strong>. He is a Mentor (Analytics)
                  on the Board of Advanced Studies, The Institute of Cost Accountants of India.
                </p>
              </div>
            </div>

            {/* Expertise Tags */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-50 text-[#2563EB] text-sm font-medium rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}

            {/* Professional Engagements card */}
            <div className="sm:col-span-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-3">
                🎤 Professional Engagements
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Keynote Speaker",
                  "Panel Moderator",
                  "Corporate Trainer",
                  "Research Mentor",
                  "Government Advisor",
                  "Academic Consultant",
                ].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 bg-white/20 border border-white/30 text-white text-sm rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-sm mt-4">
                Available for keynote addresses, panel discussions, faculty development
                programs, MDP delivery, and strategic consulting engagements. Delivered
                invited lectures at IIM Bangalore, IIM Kolkata, IISc Bangalore, Indian
                Naval Academy, NACIN, and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
