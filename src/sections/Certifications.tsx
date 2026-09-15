const certifications = [
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/10hs8rcTiXNAlMEPhNAlAuSAGx_KTVUQl/view?usp=sharing",
  },
  {
    title: "Data Analyst Master Program",
    issuer: "LearnMore Technologies",
    date: "Jun 2025",
    link: "https://drive.google.com/file/d/13-mqwIG2Lt03A_HAMdR3AMKVRLbnYvTA/view",
  },
  {
    title: "Basic to Advanced Structured Query Language",
    issuer: "LearnMore Technologies",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1pneSy1lqbUyK90y83wiD9ByKd6TPdpkD/view",
  },
  {
    title: "Basic to Advanced Microsoft Power BI",
    issuer: "LearnMore Technologies",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1sKaECdx2m-Tu7U9CGZGKmJa8Sj6FrnMq/view",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="
              glass-card
              p-6

              hover:border-blue-500
              hover:bg-blue-500/5
              hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
              hover:-translate-y-1

              transition-all
              duration-300
              "
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>

            <div className="mt-3">
              <p className="text-gray-400">{cert.issuer}</p>

              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-4
                text-blue-400
                hover:text-blue-300
              "
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
