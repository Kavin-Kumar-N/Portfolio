export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Resume</h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Download my resume to learn more about my professional experience,
        technical skills, projects, certifications, and career journey in data
        analytics and business intelligence.
      </p>

      <a
        href="/resume/Kavin_Kumar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          bg-blue-500
          hover:bg-blue-600
          transition
          px-6
          py-3
          rounded-lg
          font-medium
        "
      >
        Download Resume
      </a>
    </section>
  );
}
