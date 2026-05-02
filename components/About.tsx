export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
        👋 About Me
      </h2>
      <div className="bg-dark-card border border-dark-border rounded-2xl p-8 shadow-xl">
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Hi! I&apos;m <span className="font-semibold text-white">Aljayz</span> – a proactive,
          growth-focused Junior Software Engineer candidate, currently pursuing a{' '}
          <span className="text-accent">BS in Computer Science</span> at Mindanao State
          University – Marawi City (2022–Present).
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I have hands-on experience in UI/UX design and frontend development, applied
          during an internship at Centralized Cloud Computing International Inc.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Driven by a passion for continuous learning, I actively explore{' '}
          <span className="font-semibold text-white">
            Artificial Intelligence, Cloud Computing, Web Development, Parallel/Distributed
            Computing, Mobile Development, and Cybersecurity.
          </span>{' '}
          This portfolio showcases my projects, achievements, and the technologies I work with.
        </p>
      </div>
    </section>
  );
}