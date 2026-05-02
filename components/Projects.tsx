const projects = [
  {
    name: 'Parallel-and-Distributed-Merge-Sort-Implementations',
    desc: 'A research comparison of sequential vs. parallel Merge Sort using MPI4PY, Python, and NumPy. Evaluates performance scalability in distributed systems through multi-processor sorting and merging.',
    link: 'https://github.com/Aljayz/Parallel-and-Distributed-Merge-Sort-Implementations',
    visibility: 'public',
  },
  {
    name: 'Llama-API',
    desc: 'A dual project featuring: (1) Tkinter GUI for Llama3 with streaming responses and keyboard controls, and (2) MPI4PY-based parallel merge sort research comparing sequential vs distributed performance.',
    link: 'https://github.com/Aljayz/Llama-API',
    visibility: 'public',
  },
  {
    name: 'Stochastic-Queue-System_Simulation',
    desc: 'A C++ discrete-event simulator modeling single/multi-server queues with exponential arrival/service times. Calculates key metrics (utilization, wait times, rejection rates) for balanced (λ=μ), overloaded (λ>μ), and underloaded (λ<μ) systems.',
    link: 'https://github.com/Aljayz/Stochastic-Queue-System_Simulation',
    visibility: 'public',
  },
  {
    name: 'Jobars-Events-Webpage',
    desc: 'A web application for managing events, featuring a user-friendly interface and real-time updates.',
    link: 'https://github.com/Aljayz/Jobars-Events-Webpage',
    visibility: 'public',
  },
  {
    name: 'Cooperative Development Authority - Philippines',
    desc: 'Freelance project with NDA',
    link: '#',
    visibility: 'private',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
        🚀 Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                {project.visibility === 'private' && (
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                    Private
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
            </div>
            <a
              href={project.link}
              target={project.link !== '#' ? '_blank' : undefined}
              rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
              className={`mt-auto inline-flex items-center gap-2 font-medium text-sm transition ${
                project.visibility === 'private'
                  ? 'text-gray-500 cursor-not-allowed pointer-events-none'
                  : 'text-accent hover:text-white'
              }`}
            >
              {project.visibility === 'private' ? 'Confidential' : 'View Repository'}
              {project.visibility === 'public' && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-10 italic">More coming soon...</p>
    </section>
  );
}