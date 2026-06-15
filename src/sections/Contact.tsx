export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 max-w-2xl mb-10">
        Interested in collaborating, discussing data analytics opportunities, or
        learning more about my work? Feel free to connect with me.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <a
          href="mailto:kavinkumarn02@gmail.com"
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
          <h3 className="font-semibold mb-2">Email</h3>

          <p className="text-gray-400">kavinkumarn02@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/kavin-kumar-nagaraj-938941317/"
          target="_blank"
          rel="noopener noreferrer"
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
          <h3 className="font-semibold mb-2">LinkedIn</h3>

          <p className="text-gray-400">Connect with me</p>
        </a>

        <a
          href="https://github.com/Kavin-Kumar-N"
          target="_blank"
          rel="noopener noreferrer"
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
          <h3 className="font-semibold mb-2">GitHub</h3>

          <p className="text-gray-400">View my repositories</p>
        </a>
      </div>

      <p className="text-gray-500 mt-8">📍Tamil Nadu, India</p>
    </section>
  );
}
