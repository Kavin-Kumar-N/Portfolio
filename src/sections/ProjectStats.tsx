export default function ProjectStats() {
  return (
    <section
      className="
              glass-card
              border
              border-gray-800
              rounded-2xl
              py-10 max-w-5xl mx-auto px-6
              hover:border-blue-500
              hover:bg-blue-500/5
              hover:shadow-[0_0_30px_rgba(59,130,246,0.20)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
    >
      <div className="grid md:grid-cols-4 gap-6">
        <div
          className="glass-card
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
          <h3 className="text-3xl font-bold">100K+</h3>

          <p>Orders Analyzed</p>
        </div>

        <div
          className="glass-card
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
          <h3 className="text-3xl font-bold">8</h3>

          <p>Datasets</p>
        </div>

        <div
          className="glass-card
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
          <h3 className="text-3xl font-bold">5</h3>

          <p>Dashboard Pages</p>
        </div>

        <div
          className="glass-card
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
          <h3 className="text-3xl font-bold">20+</h3>

          <p>KPIs</p>
        </div>
      </div>
    </section>
  );
}
