import Image from "next/image";

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "50+", label: "Research Papers" },
  { value: "200+", label: "Citations" },
  { value: "500+", label: "Professionals Trained" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#2563EB] to-[#7C3AED]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-purple-600/20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Available for Training Programs & Keynote Engagements
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Prof. Prabir
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Kumar Das
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-4">
              PhD · Professor · Statistics, ML & AI Expert
            </p>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mb-8 mx-auto lg:mx-0 leading-relaxed">
              Professor & Head, Executive Management Programmes, IIFT Kolkata.
              Specialising in Statistics, Machine Learning, AI, and Financial Risk Management —
              bridging academic rigor with real-world data-driven decision-making.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#training"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#2563EB] font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg shadow-black/20 text-base"
              >
                Explore Training Programs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#research"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors text-base"
              >
                View Publications
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden shadow-2xl">
                <Image
                  src="/images/prabir-kumar-das.jpg"
                  alt="Prof. Prabir Kumar Das"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-white/10" />
              <div className="absolute -inset-8 rounded-full border border-white/5" />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto lg:mx-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-5 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
        <span className="text-xs">Scroll down</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
