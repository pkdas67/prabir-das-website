const expertise = [
  "Statistics & Probability",
  "Business Analytics",
  "Financial Modelling",
  "Operations Research",
  "Data Science",
  "Research Methodology",
  "Econometrics",
  "Machine Learning",
  "Corporate Finance",
  "Decision Analysis",
];

const highlights = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    text: "Over three decades of teaching at premier institutions, with expertise spanning statistics, analytics, and quantitative methods.",
  },
  {
    icon: "🔬",
    title: "Prolific Researcher",
    text: "Author of 50+ peer-reviewed publications across leading journals in statistics, analytics, finance, and operations research.",
  },
  {
    icon: "💼",
    title: "Corporate Experience",
    text: "Rich industry experience in corporate finance, bridging the gap between academic rigour and real-world business applications.",
  },
  {
    icon: "🏛️",
    title: "Training & Development",
    text: "Designed and delivered hundreds of training programs — both open and customised — for professionals across diverse industries.",
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
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  PD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Prof. Prabir Kumar Das
                  </h3>
                  <p className="text-[#2563EB] font-medium mt-0.5">
                    PhD · Professor
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Statistics & Analytics · Corporate Finance
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Prof. Prabir Kumar Das (P K Das) is a distinguished professor with
                  nearly <strong>30 years of experience</strong> in teaching, research,
                  and professional training. His academic journey spans premier
                  institutions where he has mentored thousands of students and professionals.
                </p>
                <p>
                  With a specialisation in <strong>Statistics, Business Analytics</strong>,
                  and <strong>Quantitative Methods</strong>, Prof. Das brings a rare
                  combination of deep theoretical expertise and applied corporate
                  experience in Finance to his work.
                </p>
                <p>
                  He has published <strong>50+ peer-reviewed research papers</strong> in
                  reputed national and international journals, accumulating{" "}
                  <strong>200+ citations</strong>. His research spans statistics,
                  analytics, finance, econometrics, and operations research.
                </p>
                <p>
                  As a sought-after trainer, Prof. Das conducts both{" "}
                  <strong>open enrollment</strong> and <strong>customised</strong>{" "}
                  training programs for corporates, government organizations, and academic
                  institutions — helping professionals build analytical competencies for
                  better decision-making.
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
                programs, and strategic consulting engagements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
