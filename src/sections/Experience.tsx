export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Experience & Education</h2>

      <div className="space-y-10">
        {/* Current Role */}
        <div className="border-l-2 border-blue-500 pl-6">
          <span className="text-blue-400 text-sm">Nov 2025 – Present</span>

          <h3 className="text-xl font-semibold mt-2">Junior Data Analyst</h3>

          <p className="text-gray-400">
            LLMNextGen2AI Private Limited, Bengaluru
          </p>

          <p className="text-gray-300 mt-3">
            Working on data analysis, SQL development, Power BI dashboards, KPI
            reporting, ETL processes, and business intelligence solutions. Also
            involved in training aspiring data analysts in SQL, Python, Excel,
            and Power BI through LearnMore Technologies.
          </p>
        </div>

        {/* Training Period */}
        <div className="border-l-2 border-blue-500 pl-6">
          <span className="text-blue-400 text-sm">Jul 2025 – Nov 2025</span>

          <h3 className="text-xl font-semibold mt-2">
            Data Analyst Training Program
          </h3>

          <p className="text-gray-400">LearnMore Technologies, Bengaluru</p>

          <p className="text-gray-300 mt-3">
            Completed intensive training in SQL, Python, Excel, Power BI, ETL,
            data modeling, dashboard development, and business analytics.
          </p>
        </div>

        {/* Data Associate */}
        <div className="border-l-2 border-blue-500 pl-6">
          <span className="text-blue-400 text-sm">Jan 2025 – Jul 2025</span>

          <h3 className="text-xl font-semibold mt-2">Data Associate</h3>

          <p className="text-gray-400">Arrugam Buildco, Coimbatore</p>

          <p className="text-gray-300 mt-3">
            Worked with sales and marketing datasets, performed data cleaning,
            reporting, campaign analysis, dashboard development, and business
            performance tracking using Excel, Google Sheets, and Power BI.
          </p>
        </div>

        {/* Education */}
        <div className="border-l-2 border-blue-500 pl-6">
          <span className="text-blue-400 text-sm">2020 – 2024</span>

          <h3 className="text-xl font-semibold mt-2">
            Bachelor of Technology (Information Technology)
          </h3>

          <p className="text-gray-400">
            Karpagam Institute of Technology, Coimbatore
          </p>

          <p className="text-gray-300 mt-3">Graduated with a CGPA of 7.8/10.</p>
        </div>

        {/* Higher Secondary */}
        <div className="border-l-2 border-blue-500 pl-6">
          <span className="text-blue-400 text-sm">2020</span>

          <h3 className="text-xl font-semibold mt-2">
            Higher Secondary Education
          </h3>

          <p className="text-gray-300 mt-3">Completed with 72%.</p>
        </div>

        {/* Secondary */}
        <div className="border-l-2 border-blue-500 pl-6">
          <span className="text-blue-400 text-sm">2018</span>

          <h3 className="text-xl font-semibold mt-2">
            Secondary School Education
          </h3>

          <p className="text-gray-300 mt-3">Completed with 79%.</p>
        </div>
      </div>
    </section>
  );
}
