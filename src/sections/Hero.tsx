import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          w-96
          h-96
          bg-blue-500/10
          blur-3xl
          rounded-full
        "
      />

      <div className="relative z-10 px-6">
        <Image
          src="/images/profile.jpg"
          alt="Kavin Kumar"
          width={180}
          height={180}
          priority
          className="
            rounded-full
            mx-auto
            mb-8
            border-4
            border-gray-700
          "
        />

        <p className="text-blue-400 font-medium">Hello, I&apos;m</p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mt-4">
          Kavin Kumar
        </h1>

        <h2 className="text-2xl md:text-4xl mt-6 text-gray-300">
          Data Analyst | SQL | Python | Power BI
        </h2>

        <p className="max-w-xl md:max-w-2xl mx-auto mt-8 text-gray-400 leading-8">
          Transforming raw data into actionable business insights using SQL,
          Python, Power BI, and data visualization to support informed
          decision-making.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <a
            href="#projects"
            className="
              bg-blue-500
              px-6
              py-3
              rounded-lg
              hover:bg-blue-600
              transition
            "
          >
            View Projects
          </a>

          <a
            href="/resume/Kavin_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              			glass-card
              border
              border-gray-800
              rounded-1g
              px-6
			        py-3
              hover:border-blue-500
              hover:bg-blue-500/5
              hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
