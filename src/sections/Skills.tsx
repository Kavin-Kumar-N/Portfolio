const skillCategories = {
  "Programming & Databases": ["SQL", "MySQL", "Python", "Pandas", "NumPy"],
  "Data Analytics & BI": [
    "Power BI",
    "DAX",
    "Power Query",
    "ETL",
    "Data Cleaning",
    "Data Transformation",
    "Data Modeling",
    "Star Schema",
    "Data Visualization",
    "Exploratory Data Analysis",
    "Business Intelligence",
    "Dashboard Development",
    "KPI Reporting",
  ],
  "SQL Concepts": ["Joins", "Subqueries", "CTEs"],
  Tools: [
    "MySQL Workbench",
    "Pycharm",
    "Jupyter Notebook",
    "VS Code",
    "Git",
    "GitHub",
    "Microsoft Excel",
    "Google Sheets",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="space-y-10">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                      glass-card
              border
              border-gray-800
              rounded-x1
              px-4
			  py-2
			  text-sm
              hover:border-blue-500
              hover:bg-blue-500/5
              hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
