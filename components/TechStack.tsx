'use client';
import Image from 'next/image';

const categories = {
  languages: [
    'Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
    'JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
    'C%2B%2B-00599C?style=for-the-badge&logo=c%2b%2b&logoColor=white',
    'C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white',
    'HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white',
    'Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white',
  ],
  frameworks: [
    '.NET 4.8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
    'Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white',
    'Express-000000?style=for-the-badge&logo=express&logoColor=white',
    'React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white',
    'Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white',
    'NuxtJS-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white',
    'Quasar-1976D2?style=for-the-badge&logo=quasar&logoColor=white',
    'Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white',
    'Sequelize-03AFEF?style=for-the-badge&logo=sequelize&logoColor=white',
  ],
  databaseCloud: [
    'PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white',
    'Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black',
  ],
  toolsDevOps: [
    'Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
    'Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
    'Git-F05032?style=for-the-badge&logo=git&logoColor=white',
    'GitHub-181717?style=for-the-badge&logo=github&logoColor=white',
    'GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white',
    'Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
    'Adobe_Photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white',
    'Typst-239DAD?style=for-the-badge&logo=typst&logoColor=white',
  ],
};

const categoryTitles: Record<string, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks & Libraries',
  databaseCloud: 'Database & Cloud',
  toolsDevOps: 'Tools & DevOps',
};

function CategorySection({
  title,
  badges,
}: {
  title: string;
  badges: string[];
}) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-200 mb-6 text-center">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge) => (
          <div
            key={badge}
            className="card bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Image
              src={`https://img.shields.io/badge/${badge}`}
              alt={badge.split('-')[0]}
              width={100}
              height={30}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
        🧰 Tech Stack
      </h2>

      {Object.entries(categories).map(([key, badges]) => (
        <CategorySection
          key={key}
          title={categoryTitles[key]}
          badges={badges}
        />
      ))}
    </section>
  );
}