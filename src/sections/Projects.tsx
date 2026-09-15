import Link from "next/link";

const projects = [
  {
    title: "Olist E-Commerce Analytics Platform",
    description:
      "End-to-end analytics platform processing 100K+ e-commerce transactions. Built using SQL, Python, Power BI, and a modern web application to analyze sales performance, customer behavior, delivery efficiency, and business KPIs.",
    link: "/projects/olist",
    tech: [
      "MySQL",
      "Python",
      "Pandas",
      "Excel",
      "Power BI",
      "DAX",
      "Power Query",
      "GitHub",
    ],
    featured: true,
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Business performance analytics solution built using Python, SQL, Excel, and Power BI to uncover revenue trends, regional performance, and actionable sales insights.",
    link: null,
    tech: ["Python", "MySQL", "Excel", "Power BI"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              glass-card
              border
              border-gray-800
              rounded-2xl
              p-8
              hover:border-blue-500
              hover:bg-blue-500/5
              hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            {project.featured && (
              <span
                className="
    inline-block
    text-sm
    text-blue-400
    border
    border-blue-500/30
    bg-blue-500/10
    px-3
    py-1
    rounded-full
  "
              >
                Featured Project
              </span>
            )}

            <h3 className="text-2xl font-bold mt-2">{project.title}</h3>

            <p className="mt-4 text-gray-400 leading-7">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    glass-card
              border
              border-gray-800
              rounded
              px-3
			        py-1
              hover:border-blue-500
              hover:bg-blue-500/5
              hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <div className="mt-6">
                <Link
                  href={project.link}
                  className="
                    text-blue-400
                    hover:text-blue-300
                    font-medium
                  "
                >
                  Know More →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
